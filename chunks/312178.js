n.d(t, { Z: () => j }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(765250),
    s = n(13245),
    a = n(26229),
    c = n(552062),
    d = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    g = n(382790),
    m = n(990673),
    y = n(906037),
    O = n(430036),
    _ = n(839434),
    v = n(981631);
function b(e, t, n) {
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
    [v.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: l, className: o } = e;
        return (0, i.jsx)(O.Z, {
            dragStart: l,
            locked: n,
            pinned: r,
            dragging: t,
            className: o,
        });
    },
    [v.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: r,
        });
    },
    [v.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: l, pinned: o } = e;
        return (0, i.jsx)(_.Z, {
            anchor: n,
            id: t,
            locked: l,
            pinned: o,
            widget: v.Odu.VOICE,
            isPreviewingInGame: r,
        });
    },
    [v.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r, className: l } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1,
            className: l,
        });
    },
};
class S extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (s.Z.track(v.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: l },
            } = this,
            o = E[e.type];
        return null == o
            ? null
            : (s) =>
                  o({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: l,
                      isPreviewingInGame: r,
                      anchor: t,
                      size: n,
                      dragStart: s,
                  });
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: r,
            isPreviewingInGame: l,
            isActiveRegion: o,
        } = this.props;
        if (null == e || null == t) return null;
        let { id: s, pinned: a, zIndex: d, size: u, anchor: h, minSize: f } = e,
            g = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { resizeX: O, resizeY: _, dragAnywhere: v } = t,
            b = (0, y.eM)({
                locked: r,
                isPreviewingInGame: l,
                pinned: a,
            }),
            E = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height,
            },
            S = this.renderWidget(e, m, g);
        return null == S
            ? null
            : (0, i.jsx)(c.Z, {
                  id: s,
                  size: g,
                  anchor: m,
                  container: E,
                  minSize: f,
                  hidden: !b,
                  resizeX: O,
                  resizeY: _,
                  style: { zIndex: d },
                  dragAnywhere: v,
                  active: !r || o,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: S,
              });
    }
    constructor(...e) {
        super(...e),
            b(this, "state", {
                lastLayoutUpdate: null,
                dragging: !1,
            }),
            b(this, "handleUpdate", (e, t, n, i, r) => {
                let {
                    props: { layoutSize: l },
                    state: { lastLayoutUpdate: s },
                } = this;
                if (!(0, f.validResolution)(l)) return;
                let a = (0, p.jL)(n, l),
                    u = (0, p.Ox)(i, l);
                (0, o.Os)(t),
                    (0, o.nv)({
                        widgetId: t,
                        anchor: a,
                        size: u,
                    });
                let h = e === c.B.MOVE,
                    g = (0, p.PY)(n, l.width, l.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != s && s.was_resized) || !h,
                        was_dragged: (null != s && s.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: l.width,
                        window_height: l.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: g.left,
                        widget_top: g.top,
                    },
                });
            }),
            b(this, "handleFocus", (e) => {
                let { layoutSize: t } = this.props;
                (0, f.validResolution)(t) && (0, o.Os)(e);
            }),
            b(this, "handleDragStart", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && s.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            b(this, "handleDragEnd", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && s.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let x = l.ZP.connectStores([d.Z, u.default], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === v.Odu.TEXT && i.has(v.O0n.TEXT_WIDGET),
    };
})(S);
function Z(e, t) {
    return (0, i.jsx)(
        x,
        {
            widgetId: e,
            layoutSize: t,
        },
        e,
    );
}
let j = l.ZP.connectStores([d.Z, h.Z], () => {
    var e;
    return {
        layout: null != (e = d.Z.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: Z,
    };
})(a.Z);
