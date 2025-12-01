n.d(t, {
    A4: () => _,
    E9: () => f,
    K4: () => g,
    Os: () => c,
    jx: () => m,
    n6: () => d,
    nv: () => l,
    sz: () => p,
    te: () => s,
    xh: () => u,
    zG: () => h,
});
var r = n(570140),
    i = n(444295),
    a = n(355863),
    o = n(145597);
function s(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.OVERLAY_DEFAULT_RESOLUTION;
    r.Z.dispatch({
        type: "LAYOUT_CREATE",
        layoutId: e,
        widgets: t,
        version: n,
        defaultResolution: i,
    });
}
function l(e) {
    let { widgetId: t, anchor: n, size: i, minSize: a, defaultSize: o, opacity: s } = e;
    r.Z.dispatch({
        type: "LAYOUT_UPDATE_WIDGET",
        widgetId: t,
        anchor: n,
        size: i,
        minSize: a,
        defaultSize: o,
        opacity: s,
    });
}
function c(e) {
    r.Z.dispatch({
        type: "LAYOUT_SET_TOP_WIDGET",
        widgetId: e,
    });
}
function u(e) {
    let { forcedPinnedState: t, shouldTrack: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = r.Z.dispatch({
            type: "LAYOUT_SET_PINNED",
            widgetId: e,
            pinned: t,
        });
    if (!n) return o;
    let s = a.Z.getWidget(e);
    return null == s || (0, i.JS)(s.type, { pinned: null != t ? t : !s.pinned }), o;
}
function d(e) {
    r.Z.dispatch({
        type: "LAYOUT_SHOW_OVERLAY_EXTRAS_HINT",
        widgetId: e,
    });
}
function f(e) {
    r.Z.dispatch({
        type: "LAYOUT_DELETE_WIDGET",
        widgetId: e,
    });
}
function p(e) {
    r.Z.dispatch({
        type: "LAYOUT_DELETE_ALL_WIDGETS",
        layoutId: e,
    });
}
function _(e) {
    m([e]);
}
function m(e) {
    r.Z.dispatch({
        type: "LAYOUT_CREATE_WIDGETS",
        widgetConfigs: e,
    });
}
function h(e, t) {
    r.Z.dispatch({
        type: "LAYOUT_SET_WIDGET_META",
        widgetId: e,
        meta: t,
    });
}
function g(e, t) {
    return r.Z.dispatch({
        type: "LAYOUT_SET_DEFAULT_CONFIG",
        widgetType: e,
        defaultConfig: t,
    });
}
