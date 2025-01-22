n.d(t, {
    p: function () {
        return E;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    o = n(765250),
    a = n(13245),
    l = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    g = n(382790),
    m = n(990673),
    v = n(906037),
    x = n(430036),
    S = n(383099),
    Z = n(981631);
function _(e, t, n) {
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
let E = {
    [Z.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: s, dragStart: r, className: o } = e;
        return (0, i.jsx)(x.Z, {
            dragStart: r,
            locked: n,
            pinned: s,
            dragging: t,
            className: o
        });
    },
    [Z.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: s } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: s
        });
    },
    [Z.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: s, locked: r, pinned: o } = e;
        return (0, i.jsx)(S.Z, {
            anchor: n,
            id: t,
            locked: r,
            pinned: o,
            widget: Z.Odu.VOICE,
            isPreviewingInGame: s
        });
    },
    [Z.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: s, className: r } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1,
            className: r
        });
    }
};
class C extends s.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (a.Z.track(Z.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: r }
            } = this,
            o = E[e.type];
        return null == o
            ? null
            : (a) =>
                  o({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: r,
                      isPreviewingInGame: s,
                      anchor: t,
                      size: n,
                      dragStart: a
                  });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: r, isActiveRegion: o } = this.props;
        if (null == e || null == t) return null;
        let { id: a, pinned: l, zIndex: d, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            g = (0, p.KR)(h, n),
            { minSize: m, resizeX: x, resizeY: S, dragAnywhere: Z } = t,
            _ = (0, v.eM)({
                locked: s,
                isPreviewingInGame: r,
                pinned: l
            }),
            E = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            },
            C = this.renderWidget(e, g, f);
        return null == C
            ? null
            : (0, i.jsx)(c.Z, {
                  id: a,
                  size: f,
                  anchor: g,
                  container: E,
                  minSize: m,
                  hidden: !_,
                  resizeX: x,
                  resizeY: S,
                  style: { zIndex: d },
                  dragAnywhere: Z,
                  active: !s || o,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: C
              });
    }
    constructor(...e) {
        super(...e),
            _(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            _(this, 'handleUpdate', (e, t, n, i, s) => {
                let {
                    props: { layoutSize: r },
                    state: { lastLayoutUpdate: a }
                } = this;
                if (!(0, f.Te)(r)) return;
                let l = (0, p.jL)(n, r),
                    u = (0, p.Ox)(i, r);
                (0, o.Os)(t),
                    (0, o.nv)({
                        widgetId: t,
                        anchor: l,
                        size: u
                    });
                let h = e === c.B.MOVE,
                    g = (0, p.PY)(n, r.width, r.height, s.width, s.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != a && a.was_resized) || !h,
                        was_dragged: (null != a && a.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: r.width,
                        window_height: r.height,
                        widget_width: s.width,
                        widget_height: s.height,
                        widget_left: g.left,
                        widget_top: g.top
                    }
                });
            }),
            _(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.Te)(t) && (0, o.Os)(e);
            }),
            _(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && a.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            _(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && a.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let I = r.ZP.connectStores([d.Z, u.Z], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.Z.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.Z.isInstanceLocked(),
        isPreviewingInGame: u.Z.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === Z.Odu.TEXT && i.has(Z.O0n.TEXT_WIDGET)
    };
})(C);
function N(e, t) {
    return (0, i.jsx)(
        I,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
t.Z = r.ZP.connectStores([d.Z, h.Z], () => {
    var e;
    return {
        layout: null !== (e = d.Z.getLayout(f.qU)) && void 0 !== e ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: N
    };
})(l.Z);
