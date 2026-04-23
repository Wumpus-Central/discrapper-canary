"use strict";
n.d(t, {
    IC: () => c,
    Ju: () => l,
    Vz: () => o,
    cC: () => m,
    jn: () => E,
    uD: () => d,
    uF: () => h,
    uv: () => u,
    v0: () => _,
});
var i = n(228366),
    r = n(810412),
    s = n(38502),
    a = n(9302);
function o(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.OVERLAY_DEFAULT_RESOLUTION;
    i.h.dispatch({ type: "LAYOUT_CREATE", layoutId: e, widgets: t, version: n, defaultResolution: r });
}
function l(e) {
    let { widgetId: t, anchor: n, size: r, minSize: s, defaultSize: a, opacity: o } = e;
    i.h.dispatch({
        type: "LAYOUT_UPDATE_WIDGET",
        widgetId: t,
        anchor: n,
        size: r,
        minSize: s,
        defaultSize: a,
        opacity: o,
    });
}
function d(e) {
    i.h.dispatch({ type: "LAYOUT_SET_TOP_WIDGET", widgetId: e });
}
function _(e) {
    let { forcedPinnedState: t, shouldTrack: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = i.h.dispatch({ type: "LAYOUT_SET_PINNED", widgetId: e, pinned: t });
    if (!n) return a;
    let o = s.A.getWidget(e);
    return null == o || (0, r.xp)(o.type, { pinned: t ?? !o.pinned }), a;
}
function u(e) {
    i.h.dispatch({ type: "LAYOUT_DELETE_WIDGET", widgetId: e });
}
function c(e) {
    i.h.dispatch({ type: "LAYOUT_DELETE_ALL_WIDGETS", layoutId: e });
}
function E(e) {
    h([e]);
}
function h(e) {
    i.h.dispatch({ type: "LAYOUT_CREATE_WIDGETS", widgetConfigs: e });
}
function m(e, t) {
    i.h.dispatch({ type: "LAYOUT_SET_WIDGET_META", widgetId: e, meta: t });
}
