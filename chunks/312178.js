n.d(t, {
    Z: () => _,
    p: () => C
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(765250),
    r = n(13245),
    o = n(26229),
    d = n(552062),
    c = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    g = n(145597),
    m = n(382790),
    f = n(990673),
    v = n(906037),
    Z = n(430036),
    x = n(383099),
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
        let { dragging: t, locked: n, pinned: s, dragStart: l, className: a } = e;
        return (0, i.jsx)(Z.Z, {
            dragStart: l,
            locked: n,
            pinned: s,
            dragging: t,
            className: a
        });
    },
    [S.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: s } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: n,
            locked: t,
            className: s
        });
    },
    [S.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: s, locked: l, pinned: a } = e;
        return (0, i.jsx)(x.Z, {
            anchor: n,
            id: t,
            locked: l,
            pinned: a,
            widget: S.Odu.VOICE,
            isPreviewingInGame: s
        });
    },
    [S.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: s, className: l } = e;
        return (0, i.jsx)(f.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1,
            className: l
        });
    }
};
class y extends s.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (r.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: l }
            } = this,
            a = C[e.type];
        return null == a
            ? null
            : (r) =>
                  a({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: l,
                      isPreviewingInGame: s,
                      anchor: t,
                      size: n,
                      dragStart: r
                  });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: l, isActiveRegion: a } = this.props;
        if (null == e || null == t) return null;
        let { id: r, pinned: o, zIndex: c, size: u, anchor: h } = e,
            g = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { minSize: f, resizeX: Z, resizeY: x, dragAnywhere: S } = t,
            E = (0, v.eM)({
                locked: s,
                isPreviewingInGame: l,
                pinned: o
            }),
            C = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            },
            y = this.renderWidget(e, m, g);
        return null == y
            ? null
            : (0, i.jsx)(d.Z, {
                  id: r,
                  size: g,
                  anchor: m,
                  container: C,
                  minSize: f,
                  hidden: !E,
                  resizeX: Z,
                  resizeY: x,
                  style: { zIndex: c },
                  dragAnywhere: S,
                  active: !s || a,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: y
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
                    state: { lastLayoutUpdate: r }
                } = this;
                if (!(0, g.Te)(l)) return;
                let o = (0, p.jL)(n, l),
                    u = (0, p.Ox)(i, l);
                (0, a.Os)(t),
                    (0, a.nv)({
                        widgetId: t,
                        anchor: o,
                        size: u
                    });
                let h = e === d.B.MOVE,
                    m = (0, p.PY)(n, l.width, l.height, s.width, s.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != r && r.was_resized) || !h,
                        was_dragged: (null != r && r.was_dragged) || h,
                        widget_type: c.Z.getWidgetType(t),
                        window_width: l.width,
                        window_height: l.height,
                        widget_width: s.width,
                        widget_height: s.height,
                        widget_left: m.left,
                        widget_top: m.top
                    }
                });
            }),
            E(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, g.Te)(t) && (0, a.Os)(e);
            }),
            E(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && r.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            E(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && r.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
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
})(y);
function I(e, t) {
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
        renderWidget: I
    };
})(o.Z);
