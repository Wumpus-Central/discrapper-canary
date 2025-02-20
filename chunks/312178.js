n.d(t, {
    Z: () => N,
    p: () => x
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(765250),
    l = n(13245),
    a = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    g = n(145597),
    f = n(382790),
    m = n(990673),
    y = n(906037),
    O = n(430036),
    v = n(839434),
    S = n(981631);
function b(e, t, n) {
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
let x = {
    [S.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: s, className: o } = e;
        return (0, i.jsx)(O.Z, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t,
            className: o
        });
    },
    [S.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(f.Z, {
            dragStart: n,
            locked: t,
            className: r
        });
    },
    [S.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: s, pinned: o } = e;
        return (0, i.jsx)(v.Z, {
            anchor: n,
            id: t,
            locked: s,
            pinned: o,
            widget: S.Odu.VOICE,
            isPreviewingInGame: r
        });
    },
    [S.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r, className: s } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1,
            className: s
        });
    }
};
class Z extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (l.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: s }
            } = this,
            o = x[e.type];
        return null == o
            ? null
            : (l) =>
                  o({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: s,
                      isPreviewingInGame: r,
                      anchor: t,
                      size: n,
                      dragStart: l
                  });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: r, isPreviewingInGame: s, isActiveRegion: o } = this.props;
        if (null == e || null == t) return null;
        let { id: l, pinned: a, zIndex: d, size: u, anchor: h } = e,
            g = (0, p.w_)(u, n),
            f = (0, p.KR)(h, n),
            { minSize: m, resizeX: O, resizeY: v, dragAnywhere: S } = t,
            b = (0, y.eM)({
                locked: r,
                isPreviewingInGame: s,
                pinned: a
            }),
            x = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            },
            Z = this.renderWidget(e, f, g);
        return null == Z
            ? null
            : (0, i.jsx)(c.Z, {
                  id: l,
                  size: g,
                  anchor: f,
                  container: x,
                  minSize: m,
                  hidden: !b,
                  resizeX: O,
                  resizeY: v,
                  style: { zIndex: d },
                  dragAnywhere: S,
                  active: !r || o,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: Z
              });
    }
    constructor(...e) {
        super(...e),
            b(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            b(this, 'handleUpdate', (e, t, n, i, r) => {
                let {
                    props: { layoutSize: s },
                    state: { lastLayoutUpdate: l }
                } = this;
                if (!(0, g.Te)(s)) return;
                let a = (0, p.jL)(n, s),
                    u = (0, p.Ox)(i, s);
                (0, o.Os)(t),
                    (0, o.nv)({
                        widgetId: t,
                        anchor: a,
                        size: u
                    });
                let h = e === c.B.MOVE,
                    f = (0, p.PY)(n, s.width, s.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != l && l.was_resized) || !h,
                        was_dragged: (null != l && l.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: s.width,
                        window_height: s.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: f.left,
                        widget_top: f.top
                    }
                });
            }),
            b(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, g.Te)(t) && (0, o.Os)(e);
            }),
            b(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && l.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            b(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && l.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let j = s.ZP.connectStores([d.Z, u.Z], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.Z.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.Z.isInstanceLocked(),
        isPreviewingInGame: u.Z.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === S.Odu.TEXT && i.has(S.O0n.TEXT_WIDGET)
    };
})(Z);
function E(e, t) {
    return (0, i.jsx)(
        j,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
let N = s.ZP.connectStores([d.Z, h.Z], () => {
    var e;
    return {
        layout: null !== (e = d.Z.getLayout(g.qU)) && void 0 !== e ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: E
    };
})(a.Z);
