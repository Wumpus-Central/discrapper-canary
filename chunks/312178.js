n.d(t, {
    Z: () => _,
    p: () => C
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(765250),
    o = n(13245),
    a = n(26229),
    d = n(552062),
    c = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    g = n(145597),
    f = n(382790),
    m = n(990673),
    x = n(906037),
    v = n(430036),
    Z = n(383099),
    S = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let C = {
    [S.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: s, dragStart: l, className: r } = e;
        return (0, i.jsx)(v.Z, {
            dragStart: l,
            locked: n,
            pinned: s,
            dragging: t,
            className: r
        });
    },
    [S.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: s } = e;
        return (0, i.jsx)(f.Z, {
            dragStart: n,
            locked: t,
            className: s
        });
    },
    [S.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: s, locked: l, pinned: r } = e;
        return (0, i.jsx)(Z.Z, {
            anchor: n,
            id: t,
            locked: l,
            pinned: r,
            widget: S.Odu.VOICE,
            isPreviewingInGame: s
        });
    },
    [S.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: s, className: l } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1,
            className: l
        });
    }
};
class I extends s.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: l }
            } = this,
            r = C[e.type];
        return null == r
            ? null
            : (o) =>
                  r({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: l,
                      isPreviewingInGame: s,
                      anchor: t,
                      size: n,
                      dragStart: o
                  });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: l, isActiveRegion: r } = this.props;
        if (null == e || null == t) return null;
        let { id: o, pinned: a, zIndex: c, size: u, anchor: h } = e,
            g = (0, p.w_)(u, n),
            f = (0, p.KR)(h, n),
            { minSize: m, resizeX: v, resizeY: Z, dragAnywhere: S } = t,
            E = (0, x.eM)({
                locked: s,
                isPreviewingInGame: l,
                pinned: a
            }),
            C = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            },
            I = this.renderWidget(e, f, g);
        return null == I
            ? null
            : (0, i.jsx)(d.Z, {
                  id: o,
                  size: g,
                  anchor: f,
                  container: C,
                  minSize: m,
                  hidden: !E,
                  resizeX: v,
                  resizeY: Z,
                  style: { zIndex: c },
                  dragAnywhere: S,
                  active: !s || r,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: I
              });
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            E(this, 'handleUpdate', (e, t, n, i, s) => {
                let {
                    props: { layoutSize: l },
                    state: { lastLayoutUpdate: o }
                } = this;
                if (!(0, g.Te)(l)) return;
                let a = (0, p.jL)(n, l),
                    u = (0, p.Ox)(i, l);
                (0, r.Os)(t),
                    (0, r.nv)({
                        widgetId: t,
                        anchor: a,
                        size: u
                    });
                let h = e === d.B.MOVE,
                    f = (0, p.PY)(n, l.width, l.height, s.width, s.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != o && o.was_resized) || !h,
                        was_dragged: (null != o && o.was_dragged) || h,
                        widget_type: c.Z.getWidgetType(t),
                        window_width: l.width,
                        window_height: l.height,
                        widget_width: s.width,
                        widget_height: s.height,
                        widget_left: f.left,
                        widget_top: f.top
                    }
                });
            }),
            E(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, g.Te)(t) && (0, r.Os)(e);
            }),
            E(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            E(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let N = l.ZP.connectStores([c.Z, u.Z], (e) => {
    let { widgetId: t } = e,
        n = c.Z.getWidget(t),
        i = u.Z.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? c.Z.getWidgetConfig(n.type) : null,
        locked: u.Z.isInstanceLocked(),
        isPreviewingInGame: u.Z.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === S.Odu.TEXT && i.has(S.O0n.TEXT_WIDGET)
    };
})(I);
function y(e, t) {
    return (0, i.jsx)(
        N,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
let _ = l.ZP.connectStores([c.Z, h.Z], () => {
    var e;
    return {
        layout: null !== (e = c.Z.getLayout(g.qU)) && void 0 !== e ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: y
    };
})(a.Z);
