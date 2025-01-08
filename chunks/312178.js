n.d(t, {
    p: function () {
        return E;
    }
}),
    n(411104),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(765250),
    o = n(13245),
    l = n(26229),
    d = n(552062),
    c = n(355863),
    u = n(237997),
    h = n(451478),
    p = n(434529),
    f = n(145597),
    g = n(382790),
    m = n(990673),
    v = n(906037),
    x = n(430036),
    _ = n(839434),
    S = n(981631);
function Z(e, t, n) {
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
    [S.Odu.TEXT](e) {
        let { dragging: t, locked: n, pinned: s, dragStart: r, className: a } = e;
        return (0, i.jsx)(x.Z, {
            dragStart: r,
            locked: n,
            pinned: s,
            dragging: t,
            className: a
        });
    },
    [S.Odu.GUILDS](e) {
        let { locked: t, dragStart: n, className: s } = e;
        return (0, i.jsx)(g.Z, {
            dragStart: n,
            locked: t,
            className: s
        });
    },
    [S.Odu.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: s, locked: r, pinned: a } = e;
        return (0, i.jsx)(_.Z, {
            anchor: n,
            id: t,
            locked: r,
            pinned: a,
            widget: S.Odu.VOICE,
            isPreviewingInGame: s
        });
    },
    [S.Odu.GUILDS_TEXT](e) {
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
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.Z.track(S.rMx.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({ lastLayoutUpdate: null }));
    }
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: r }
            } = this,
            a = E[e.type];
        if (null == a) throw Error('OverlayLayout: Widget ('.concat(e.type, ') does not exist in WidgetMap'));
        return (o) =>
            a({
                id: e.id,
                locked: i,
                pinned: e.pinned,
                dragging: r,
                isPreviewingInGame: s,
                anchor: t,
                size: n,
                dragStart: o
            });
    }
    render() {
        let { widget: e, widgetConfig: t, layoutSize: n, locked: s, isPreviewingInGame: r, isActiveRegion: a } = this.props;
        if (null == e || null == t) return null;
        let { id: o, pinned: l, zIndex: c, size: u, anchor: h } = e,
            f = (0, p.w_)(u, n),
            g = (0, p.KR)(h, n),
            { minSize: m, resizeX: x, resizeY: _, dragAnywhere: S } = t,
            Z = (0, v.eM)({
                locked: s,
                isPreviewingInGame: r,
                pinned: l
            }),
            E = {
                minX: 0,
                minY: 0,
                maxX: n.width,
                maxY: n.height
            };
        return (0, i.jsx)(d.Z, {
            id: o,
            size: f,
            anchor: g,
            container: E,
            minSize: m,
            hidden: !Z,
            resizeX: x,
            resizeY: _,
            style: { zIndex: c },
            dragAnywhere: S,
            active: !s || a,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: this.renderWidget(e, g, f)
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'state', {
                lastLayoutUpdate: null,
                dragging: !1
            }),
            Z(this, 'handleUpdate', (e, t, n, i, s) => {
                let {
                    props: { layoutSize: r },
                    state: { lastLayoutUpdate: o }
                } = this;
                if (!(0, f.Te)(r)) return;
                let l = (0, p.jL)(n, r),
                    u = (0, p.Ox)(i, r);
                (0, a.Os)(t),
                    (0, a.nv)({
                        widgetId: t,
                        anchor: l,
                        size: u
                    });
                let h = e === d.B.MOVE,
                    g = (0, p.PY)(n, r.width, r.height, s.width, s.height);
                this.setState({
                    lastLayoutUpdate: {
                        was_resized: (null != o && o.was_resized) || !h,
                        was_dragged: (null != o && o.was_dragged) || h,
                        widget_type: c.Z.getWidgetType(t),
                        window_width: r.width,
                        window_height: r.height,
                        widget_width: s.width,
                        widget_height: s.height,
                        widget_left: g.left,
                        widget_top: g.top
                    }
                });
            }),
            Z(this, 'handleFocus', (e) => {
                let { layoutSize: t } = this.props;
                (0, f.Te)(t) && (0, a.Os)(e);
            }),
            Z(this, 'handleDragStart', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
            }),
            Z(this, 'handleDragEnd', () => {
                let { widget: e } = this.props;
                null != e && (e.pinned && o.Z.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
            });
    }
}
let I = r.ZP.connectStores([c.Z, u.Z], (e) => {
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
})(C);
function y(e, t) {
    return (0, i.jsx)(
        I,
        {
            widgetId: e,
            layoutSize: t
        },
        e
    );
}
t.Z = r.ZP.connectStores([c.Z, h.Z], () => {
    var e;
    return {
        layout: null !== (e = c.Z.getLayout(f.qU)) && void 0 !== e ? e : void 0,
        layoutSize: h.Z.windowSize(),
        renderWidget: y
    };
})(l.Z);
