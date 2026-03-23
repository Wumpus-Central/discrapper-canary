"use strict";
n.d(t, {
    IC: () => _,
    Ju: () => l,
    Vz: () => o,
    cC: () => h,
    jn: () => f,
    qH: () => m,
    uD: () => u,
    uF: () => p,
    uv: () => d,
    v0: () => c,
});
var r = n(73153),
    i = n(810412),
    s = n(555528),
    a = n(9302);
function o(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.OVERLAY_DEFAULT_RESOLUTION;
    r.h.dispatch({ type: "LAYOUT_CREATE", layoutId: e, widgets: t, version: n, defaultResolution: i });
}
function l(e) {
    let { widgetId: t, anchor: n, size: i, minSize: s, defaultSize: a, opacity: o } = e;
    r.h.dispatch({
        type: "LAYOUT_UPDATE_WIDGET",
        widgetId: t,
        anchor: n,
        size: i,
        minSize: s,
        defaultSize: a,
        opacity: o,
    });
}
function u(e) {
    r.h.dispatch({ type: "LAYOUT_SET_TOP_WIDGET", widgetId: e });
}
function c(e) {
    let { forcedPinnedState: t, shouldTrack: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = r.h.dispatch({ type: "LAYOUT_SET_PINNED", widgetId: e, pinned: t });
    if (!n) return a;
    let o = s.A.getWidget(e);
    return null == o || (0, i.xp)(o.type, { pinned: t ?? !o.pinned }), a;
}
function d(e) {
    r.h.dispatch({ type: "LAYOUT_DELETE_WIDGET", widgetId: e });
}
function _(e) {
    r.h.dispatch({ type: "LAYOUT_DELETE_ALL_WIDGETS", layoutId: e });
}
function f(e) {
    p([e]);
}
function p(e) {
    r.h.dispatch({ type: "LAYOUT_CREATE_WIDGETS", widgetConfigs: e });
}
function h(e, t) {
    r.h.dispatch({ type: "LAYOUT_SET_WIDGET_META", widgetId: e, meta: t });
}
function m(e, t) {
    return r.h.dispatch({ type: "LAYOUT_SET_DEFAULT_CONFIG", widgetType: e, defaultConfig: t });
}
