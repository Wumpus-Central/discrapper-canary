n.d(t, { A: () => _ }), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(391973),
    o = n(684013),
    a = n(231679),
    c = n(685603),
    d = n(555528),
    u = n(256415),
    h = n(531685),
    p = n(5463),
    f = n(9302),
    b = n(328913),
    g = n(131575),
    y = n(799808),
    A = n(407195),
    m = n(61714),
    O = n(652215);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = {
    [O.uss.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: s, className: l } = e;
        return (0, i.jsx)(A.A, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t,
            className: l,
        });
    },
    [O.uss.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(b.A, {
            dragStart: n,
            locked: t,
            className: r,
        });
    },
    [O.uss.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: s, pinned: l } = e;
        return (0, i.jsx)(m.A, {
            anchor: n,
            id: t,
            locked: s,
            pinned: l,
            widget: O.uss.VOICE,
            isPreviewingInGame: r,
        });
    },
    [O.uss.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r, className: s } = e;
        return (0, i.jsx)(g.A, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1,
            className: s,
        });
    },
};
class x extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (o.A.track(O.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: s },
            } = this,
            l = E[e.type];
        return null == l
            ? null
            : (o) =>
                  l({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: s,
                      isPreviewingInGame: r,
                      anchor: t,
                      size: n,
                      dragStart: o,
                  });
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: r,
            isPreviewingInGame: s,
            isActiveRegion: l,
        } = this.props;
        if (null == e || null == t) return null;
        let { id: o, pinned: a, zIndex: d, size: u, anchor: h, minSize: f } = e,
            b = (0, p.fd)(u, n),
            g = (0, p.Nv)(h, n),
            { resizeX: A, resizeY: m, dragAnywhere: O } = t,
            v = (0, y.AE)({
                locked: r,
                isPreviewingInGame: s,
                pinned: a,
            }),
            E = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height,
            },
            x = this.renderWidget(e, g, b);
        return null == x
            ? null
            : (0, i.jsx)(c.A, {
                  id: o,
                  size: b,
                  anchor: g,
                  container: E,
                  minSize: f,
                  hidden: !v,
                  resizeX: A,
                  resizeY: m,
                  style: { zIndex: d },
                  dragAnywhere: O,
                  active: !r || l,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: x,
              });
    }
    constructor(...e) {
        super(...e),
            v(this, "state", {
                lastLayoutUpdate: null,
                dragging: !1,
            }),
            v(this, "handleUpdate", (e, t, n, i, r) => {
                let {
                    props: { layoutSize: s },
                    state: { lastLayoutUpdate: o },
                } = this;
                if (!(0, f.validResolution)(s)) return;
                let a = (0, p.NO)(n, s),
                    u = (0, p.R9)(i, s);
                (0, l.uD)(t),
                    (0, l.Ju)({
                        widgetId: t,
                        anchor: a,
                        size: u,
                    });
                let h = e === c.P.MOVE,
                    b = (0, p.Ly)(n, s.width, s.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != o && o.was_resized) || !h,
                        was_dragged: (null != o && o.was_dragged) || h,
                        widget_type: d.A.getWidgetType(t),
                        window_width: s.width,
                        window_height: s.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: b.left,
                        widget_top: b.top,
                    },
                });
            }),
            v(this, "handleFocus", (e) => {
                let { layoutSize: t } = this.props;
                (0, f.validResolution)(t) && (0, l.uD)(e);
            }),
            v(this, "handleDragStart", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.A.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            v(this, "handleDragEnd", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.A.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let S = s.Ay.connectStores([d.A, u.default], (e) => {
    let { widgetId: t } = e,
        n = d.A.getWidget(t),
        i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.A.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === O.uss.TEXT && i.has(O.ajI.TEXT_WIDGET),
    };
})(x);
function j(e, t) {
    return (0, i.jsx)(
        S,
        {
            widgetId: e,
            layoutSize: t,
        },
        e,
    );
}
let _ = s.Ay.connectStores([d.A, h.A], () => {
    var e;
    return {
        layout: null != (e = d.A.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: h.A.windowSize(),
        renderWidget: j,
    };
})(a.A);
