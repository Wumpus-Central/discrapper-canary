n.d(t, { Z: () => j }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    s = n(765250),
    o = n(13245),
    l = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    f = n(451478),
    h = n(434529),
    p = n(145597),
    g = n(382790),
    b = n(990673),
    m = n(906037),
    y = n(430036),
    v = n(839434),
    O = n(981631);
function E(e, t, n) {
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
let x = {
    [O.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: a, className: s } = e;
        return (0, i.jsx)(y.Z, {
            dragStart: a,
            locked: n,
            pinned: r,
            dragging: t,
            className: s,
        });
    },
    [O.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: r,
        });
    },
    [O.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: a, pinned: s } = e;
        return (0, i.jsx)(v.Z, {
            anchor: n,
            id: t,
            locked: a,
            pinned: s,
            widget: O.Odu.VOICE,
            isPreviewingInGame: r,
        });
    },
    [O.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r, className: a } = e;
        return (0, i.jsx)(b.Z, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1,
            className: a,
        });
    },
};
class S extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (o.Z.track(O.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: a },
            } = this,
            s = x[e.type];
        return null == s
            ? null
            : (o) =>
                  s({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: a,
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
            isPreviewingInGame: a,
            isActiveRegion: s,
        } = this.props;
        if (null == e || null == t) return null;
        let { id: o, pinned: l, zIndex: d, size: u, anchor: f, minSize: p } = e,
            g = (0, h.w_)(u, n),
            b = (0, h.KR)(f, n),
            { resizeX: y, resizeY: v, dragAnywhere: O } = t,
            E = (0, m.eM)({
                locked: r,
                isPreviewingInGame: a,
                pinned: l,
            }),
            x = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height,
            },
            S = this.renderWidget(e, b, g);
        return null == S
            ? null
            : (0, i.jsx)(c.Z, {
                  id: o,
                  size: g,
                  anchor: b,
                  container: x,
                  minSize: p,
                  hidden: !E,
                  resizeX: y,
                  resizeY: v,
                  style: { zIndex: d },
                  dragAnywhere: O,
                  active: !r || s,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: S,
              });
    }
    constructor(...e) {
        super(...e),
            E(this, "state", {
                lastLayoutUpdate: null,
                dragging: !1,
            }),
            E(this, "handleUpdate", (e, t, n, i, r) => {
                let {
                    props: { layoutSize: a },
                    state: { lastLayoutUpdate: o },
                } = this;
                if (!(0, p.validResolution)(a)) return;
                let l = (0, h.jL)(n, a),
                    u = (0, h.Ox)(i, a);
                (0, s.Os)(t),
                    (0, s.nv)({
                        widgetId: t,
                        anchor: l,
                        size: u,
                    });
                let f = e === c.B.MOVE,
                    g = (0, h.PY)(n, a.width, a.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != o && o.was_resized) || !f,
                        was_dragged: (null != o && o.was_dragged) || f,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: a.width,
                        window_height: a.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: g.left,
                        widget_top: g.top,
                    },
                });
            }),
            E(this, "handleFocus", (e) => {
                let { layoutSize: t } = this.props;
                (0, p.validResolution)(t) && (0, s.Os)(e);
            }),
            E(this, "handleDragStart", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            E(this, "handleDragEnd", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let _ = a.ZP.connectStores([d.Z, u.default], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === O.Odu.TEXT && i.has(O.O0n.TEXT_WIDGET),
    };
})(S);
function Z(e, t) {
    return (0, i.jsx)(
        _,
        {
            widgetId: e,
            layoutSize: t,
        },
        e,
    );
}
let j = a.ZP.connectStores([d.Z, f.Z], () => {
    var e;
    return {
        layout: null != (e = d.Z.getLayout(p.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: f.Z.windowSize(),
        renderWidget: Z,
    };
})(l.Z);
