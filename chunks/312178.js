n.d(t, { Z: () => j }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(442837),
    o = n(765250),
    l = n(13245),
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
    b = n(430036),
    v = n(839434),
    _ = n(981631);
function O(e, t, n) {
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
    [_.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: s, className: o } = e;
        return (0, i.jsx)(b.Z, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t,
            className: o,
        });
    },
    [_.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: r,
        });
    },
    [_.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: s, pinned: o } = e;
        return (0, i.jsx)(v.Z, {
            anchor: n,
            id: t,
            locked: s,
            pinned: o,
            widget: _.Odu.VOICE,
            isPreviewingInGame: r,
        });
    },
    [_.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r, className: s } = e;
        return (0, i.jsx)(m.Z, {
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
            (l.Z.track(_.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: s },
            } = this,
            o = E[e.type];
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
                      dragStart: l,
                  });
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: r,
            isPreviewingInGame: s,
            isActiveRegion: o,
        } = this.props;
        if (null == e || null == t) return null;
        let { id: l, pinned: a, zIndex: d, size: u, anchor: h, minSize: f } = e,
            g = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { resizeX: b, resizeY: v, dragAnywhere: _ } = t,
            O = (0, y.eM)({
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
            x = this.renderWidget(e, m, g);
        return null == x
            ? null
            : (0, i.jsx)(c.Z, {
                  id: l,
                  size: g,
                  anchor: m,
                  container: E,
                  minSize: f,
                  hidden: !O,
                  resizeX: b,
                  resizeY: v,
                  style: { zIndex: d },
                  dragAnywhere: _,
                  active: !r || o,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: x,
              });
    }
    constructor(...e) {
        super(...e),
            O(this, "state", {
                lastLayoutUpdate: null,
                dragging: !1,
            }),
            O(this, "handleUpdate", (e, t, n, i, r) => {
                let {
                    props: { layoutSize: s },
                    state: { lastLayoutUpdate: l },
                } = this;
                if (!(0, f.validResolution)(s)) return;
                let a = (0, p.jL)(n, s),
                    u = (0, p.Ox)(i, s);
                (0, o.Os)(t),
                    (0, o.nv)({
                        widgetId: t,
                        anchor: a,
                        size: u,
                    });
                let h = e === c.B.MOVE,
                    g = (0, p.PY)(n, s.width, s.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != l && l.was_resized) || !h,
                        was_dragged: (null != l && l.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: s.width,
                        window_height: s.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: g.left,
                        widget_top: g.top,
                    },
                });
            }),
            O(this, "handleFocus", (e) => {
                let { layoutSize: t } = this.props;
                (0, f.validResolution)(t) && (0, o.Os)(e);
            }),
            O(this, "handleDragStart", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && l.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            O(this, "handleDragEnd", () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && l.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let S = s.ZP.connectStores([d.Z, u.default], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === _.Odu.TEXT && i.has(_.O0n.TEXT_WIDGET),
    };
})(x);
function Z(e, t) {
    return (0, i.jsx)(
        S,
        {
            widgetId: e,
            layoutSize: t,
        },
        e,
    );
}
let j = s.ZP.connectStores([d.Z, h.Z], () => {
    var e;
    return {
        layout: null != (e = d.Z.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: Z,
    };
})(a.Z);
