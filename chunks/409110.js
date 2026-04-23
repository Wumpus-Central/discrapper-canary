"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(391973),
    r = n(684013),
    o = n(231679),
    d = n(685603),
    c = n(555528),
    u = n(256415),
    h = n(531685),
    p = n(5463),
    A = n(9302),
    f = n(328913),
    _ = n(131575),
    g = n(799808),
    m = n(407195),
    E = n(61714),
    x = n(652215);
let y = {
    [x.uss.TEXT](e) {
        let { dragging: t, locked: n, pinned: s, dragStart: l, className: a } = e;
        return (0, i.jsx)(m.A, { dragStart: l, locked: n, pinned: s, dragging: t, className: a });
    },
    [x.uss.GUILDS](e) {
        let { locked: t, dragStart: n, className: s } = e;
        return (0, i.jsx)(f.A, { dragStart: n, locked: t, className: s });
    },
    [x.uss.VOICE](e) {
        let { id: t, anchor: n, isPreviewingInGame: s, locked: l, pinned: a } = e;
        return (0, i.jsx)(E.A, { anchor: n, id: t, locked: l, pinned: a, widget: x.uss.VOICE, isPreviewingInGame: s });
    },
    [x.uss.GUILDS_TEXT](e) {
        let { dragging: t, locked: n, dragStart: s, className: l } = e;
        return (0, i.jsx)(_.A, { dragStart: s, dragging: t, locked: n, pinned: !1, className: l });
    },
};
class v extends s.PureComponent {
    state = { lastLayoutUpdate: null, dragging: !1 };
    componentDidUpdate(e) {
        this.props.locked &&
            !e.locked &&
            null != this.state.lastLayoutUpdate &&
            (r.A.track(x.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate),
            this.setState({ lastLayoutUpdate: null }));
    }
    handleUpdate = (e, t, n, i, s) => {
        let {
            props: { layoutSize: l },
            state: { lastLayoutUpdate: r },
        } = this;
        if (!(0, A.validResolution)(l)) return;
        let o = (0, p.NO)(n, l),
            u = (0, p.R9)(i, l);
        (0, a.uD)(t), (0, a.Ju)({ widgetId: t, anchor: o, size: u });
        let h = e === d.P.MOVE,
            f = (0, p.Ly)(n, l.width, l.height, s.width, s.height);
        this.setState({
            lastLayoutUpdate: {
                was_resized: (null != r && r.was_resized) || !h,
                was_dragged: (null != r && r.was_dragged) || h,
                widget_type: c.A.getWidgetType(t),
                window_width: l.width,
                window_height: l.height,
                widget_width: s.width,
                widget_height: s.height,
                widget_left: f.left,
                widget_top: f.top,
            },
        });
    };
    handleFocus = (e) => {
        let { layoutSize: t } = this.props;
        (0, A.validResolution)(t) && (0, a.uD)(e);
    };
    handleDragStart = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && r.A.setPreviewInGameMode(!0), this.setState({ dragging: !0 }));
    };
    handleDragEnd = () => {
        let { widget: e } = this.props;
        null != e && (e.pinned && r.A.setPreviewInGameMode(!1), this.setState({ dragging: !1 }));
    };
    renderWidget(e, t, n) {
        let {
                props: { locked: i, isPreviewingInGame: s },
                state: { dragging: l },
            } = this,
            a = y[e.type];
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
                      dragStart: r,
                  });
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: s,
            isPreviewingInGame: l,
            isActiveRegion: a,
        } = this.props;
        if (null == e || null == t) return null;
        let { id: r, pinned: o, zIndex: c, size: u, anchor: h, minSize: A } = e,
            f = (0, p.fd)(u, n),
            _ = (0, p.Nv)(h, n),
            { resizeX: m, resizeY: E, dragAnywhere: x } = t,
            y = (0, g.AE)({ locked: s, isPreviewingInGame: l, pinned: o }),
            v = { minX: 0, minY: 0, maxX: n.width, maxY: n.height },
            S = this.renderWidget(e, _, f);
        return null == S
            ? null
            : (0, i.jsx)(d.A, {
                  id: r,
                  size: f,
                  anchor: _,
                  container: v,
                  minSize: A,
                  hidden: !y,
                  resizeX: m,
                  resizeY: E,
                  style: { zIndex: c },
                  dragAnywhere: x,
                  active: !s || a,
                  onUpdate: this.handleUpdate,
                  onClick: this.handleFocus,
                  onDragStart: this.handleDragStart,
                  onDragEnd: this.handleDragEnd,
                  children: S,
              });
    }
}
let S = l.Ay.connectStores([c.A, u.default], (e) => {
    let { widgetId: t } = e,
        n = c.A.getWidget(t),
        i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? c.A.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === x.uss.TEXT && i.has(x.ajI.TEXT_WIDGET),
    };
})(v);
function C(e, t) {
    return (0, i.jsx)(S, { widgetId: e, layoutSize: t }, e);
}
let I = l.Ay.connectStores([c.A, h.A], () => ({
    layout: c.A.getLayout(A.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: h.A.windowSize(),
    renderWidget: C,
}))(o.A);
