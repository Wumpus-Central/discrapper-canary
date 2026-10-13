n.d(t, {
    IC: () => E,
    Ju: () => o,
    Vz: () => l,
    cC: () => f,
    jn: () => A,
    sx: () => u,
    uD: () => d,
    uF: () => h,
    uv: () => _,
    v0: () => c,
});
var i = n(73153),
    r = n(810412),
    a = n(32584),
    s = n(9302);
function l(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.OVERLAY_DEFAULT_RESOLUTION;
    i.h.dispatch({ type: "LAYOUT_CREATE", layoutId: e, widgets: t, version: n, defaultResolution: r });
}
function o(e) {
    let { widgetId: t, anchor: n, size: r, minSize: a, defaultSize: s, opacity: l } = e;
    i.h.dispatch({
        type: "LAYOUT_UPDATE_WIDGET",
        widgetId: t,
        anchor: n,
        size: r,
        minSize: a,
        defaultSize: s,
        opacity: l,
    });
}
function d(e) {
    i.h.dispatch({ type: "LAYOUT_SET_TOP_WIDGET", widgetId: e });
}
function c(e) {
    let { forcedPinnedState: t, shouldTrack: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = i.h.dispatch({ type: "LAYOUT_SET_PINNED", widgetId: e, pinned: t });
    if (!n) return s;
    let l = a.A.getWidget(e);
    return (null == l || (0, r.xp)(l.type, { pinned: t ?? !l.pinned }), s);
}
function u(e, t) {
    0 !== e.length && i.h.dispatch({ type: "LAYOUT_SET_WIDGETS_HIDDEN", widgetIds: e, hidden: t });
}
function _(e) {
    i.h.dispatch({ type: "LAYOUT_DELETE_WIDGET", widgetId: e });
}
function E(e) {
    i.h.dispatch({ type: "LAYOUT_DELETE_ALL_WIDGETS", layoutId: e });
}
function A(e) {
    h([e]);
}
function h(e) {
    i.h.dispatch({ type: "LAYOUT_CREATE_WIDGETS", widgetConfigs: e });
}
function f(e, t) {
    i.h.dispatch({ type: "LAYOUT_SET_WIDGET_META", widgetId: e, meta: t });
}
