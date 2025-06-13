n.d(t, { Z: () => j }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(442837),
    l = n(765250),
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
    v = n(839434),
    _ = n(981631);
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
let E = {
    [_.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: r, dragStart: o, className: l } = e;
        return (0, i.jsx)(O.Z, {
            dragStart: o,
            locked: n,
            pinned: r,
            dragging: t,
            className: l
        });
    },
    [_.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: r } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: r
        });
    },
    [_.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: r, locked: o, pinned: l } = e;
        return (0, i.jsx)(v.Z, {
            anchor: n,
            id: t,
            locked: o,
            pinned: l,
            widget: _.Odu.VOICE,
            isPreviewingInGame: r
        });
    },
    [_.Odu.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: r, className: o } = e;
        return (0, i.jsx)(m.Z, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1,
            className: o
        });
    }
};
class S extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (s.Z.track(_.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: r },
                state: { dragging: o }
            } = this,
            l = E[e.type];
        return null == l
            ? null
            : (s) =>
                  l({
                      id: e.id,
                      locked: i,
                      pinned: e.pinned,
                      dragging: o,
                      isPreviewingInGame: r,
                      anchor: t,
                      size: n,
                      dragStart: s
                  });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: r, isPreviewingInGame: o, isActiveRegion: l } = this.props;
        if (null == e || null == t) return null;
        let { id: s, pinned: a, zIndex: d, size: u, anchor: h, minSize: f } = e,
            g = (0, p.w_)(u, n),
            m = (0, p.KR)(h, n),
            { resizeX: O, resizeY: v, dragAnywhere: _ } = t,
            b = (0, y.eM)({
                locked: r,
                isPreviewingInGame: o,
                pinned: a
            }),
            E = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
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
                  resizeY: v,
                  style: { zIndex: d },
                  dragAnywhere: _,
                  active: !r || l,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: S
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
                    props: { layoutSize: o },
                    state: { lastLayoutUpdate: s }
                } = this;
                if (!(0, f.validResolution)(o)) return;
                let a = (0, p.jL)(n, o),
                    u = (0, p.Ox)(i, o);
                (0, l.Os)(t),
                    (0, l.nv)({
                        widgetId: t,
                        anchor: a,
                        size: u
                    });
                let h = e === c.B.MOVE,
                    g = (0, p.PY)(n, o.width, o.height, r.width, r.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != s && s.was_resized) || !h,
                        was_dragged: (null != s && s.was_dragged) || h,
                        widget_type: d.Z.getWidgetType(t),
                        window_width: o.width,
                        window_height: o.height,
                        widget_width: r.width,
                        widget_height: r.height,
                        widget_left: g.left,
                        widget_top: g.top
                    }
                });
            }),
            b(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.validResolution)(t) && (0, l.Os)(e);
            }),
            b(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && s.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            b(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && s.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let x = o.ZP.connectStores([d.Z, u.default], (e) => {
    let { widgetId: t } = e,
        n = d.Z.getWidget(t),
        i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.Z.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === _.Odu.TEXT && i.has(_.O0n.TEXT_WIDGET)
    };
})(S);
function C(e, t) {
    return (0, i.jsx)(
        x,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
let j = o.ZP.connectStores([d.Z, h.Z], () => {
    var e;
    return {
        layout: null != (e = d.Z.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: C
    };
})(a.Z);
