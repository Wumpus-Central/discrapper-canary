n.d(t, {
    Z: () => Z,
    p: () => S
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    o = n(765250),
    l = n(13245),
    a = n(26229),
    c = n(552062),
    u = n(355863),
    d = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    g = n(382790),
    m = n(990673),
    y = n(906037),
    O = n(430036),
    v = n(839434),
    x = n(981631);
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
let S = {
    [x.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: s, className: o } = e;
        return (0, i.jsx)(O.Z, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t,
            className: o
        });
    },
    [x.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: r
        });
    },
    [x.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: s, pinned: o } = e;
        return (0, i.jsx)(v.Z, {
            anchor: n,
            id: t,
            locked: s,
            pinned: o,
            widget: x.Odu.VOICE,
            isPreviewingInGame: r
        });
    },
    [x.Odu.GUILDS_TEXT](e) {
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
class E extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (l.Z.track(x.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: s }
            } = this,
            o = S[e.type];
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
        let { id: l, pinned: a, zIndex: u, size: d, anchor: h } = e,
            f = (0, p.w_)(d, n),
            g = (0, p.KR)(h, n),
            { minSize: m, resizeX: O, resizeY: v, dragAnywhere: x } = t,
            b = (0, y.eM)({
                locked: r,
                isPreviewingInGame: s,
                pinned: a
            }),
            S = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            },
            E = this.renderWidget(e, g, f);
        return null == E
            ? null
            : (0, i.jsx)(c.Z, {
                  id: l,
                  size: f,
                  anchor: g,
                  container: S,
                  minSize: m,
                  hidden: !b,
                  resizeX: O,
                  resizeY: v,
                  style: { zIndex: u },
                  dragAnywhere: x,
                  active: !r || o,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: E
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
                if (!(0, f.validResolution)(s)) return;
                let a = (0, p.jL)(n, s),
                    d = (0, p.Ox)(i, s);
                (0, o.Os)(t),
                    (0, o.nv)({
                        widgetId: t,
                        anchor: a,
                        size: d
                    });
                let h = e === c.B.MOVE,
                    g = (0, p.PY)(n, s.width, s.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != l && l.was_resized) || !h,
                        was_dragged: (null != l && l.was_dragged) || h,
                        widget_type: u.Z.getWidgetType(t),
                        window_width: s.width,
                        window_height: s.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: g.left,
                        widget_top: g.top
                    }
                });
            }),
            b(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.validResolution)(t) && (0, o.Os)(e);
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
let j = s.ZP.connectStores([u.Z, d.default], (e) => {
    let { widgetId: t } = e,
        n = u.Z.getWidget(t),
        i = d.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? u.Z.getWidgetConfig(n.type) : null,
        locked: d.default.isInstanceLocked(),
        isPreviewingInGame: d.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === x.Odu.TEXT && i.has(x.O0n.TEXT_WIDGET)
    };
})(E);
function N(e, t) {
    return (0, i.jsx)(
        j,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
let Z = s.ZP.connectStores([u.Z, h.Z], () => {
    var e;
    return {
        layout: null != (e = u.Z.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: N
    };
})(a.Z);
