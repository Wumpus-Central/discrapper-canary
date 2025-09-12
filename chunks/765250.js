n.d(t, {
    A4: () => p,
    E9: () => f,
    Os: () => c,
    jx: () => h,
    n6: () => d,
    nv: () => l,
    sz: () => _,
    te: () => s,
    xh: () => u,
    zG: () => m,
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
function u(e, t) {
    r.Z.dispatch({
        type: "LAYOUT_SET_PINNED",
        widgetId: e,
        pinned: t,
    });
    let n = a.Z.getWidget(e);
    null != n && (0, i.JS)(n.type, { pinned: null != t ? t : !n.pinned });
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
function _(e) {
    r.Z.dispatch({
        type: "LAYOUT_DELETE_ALL_WIDGETS",
        layoutId: e,
    });
}
function p(e) {
    h([e]);
}
function h(e) {
    r.Z.dispatch({
        type: "LAYOUT_CREATE_WIDGETS",
        widgetConfigs: e,
    });
}
function m(e, t) {
    r.Z.dispatch({
        type: "LAYOUT_SET_WIDGET_META",
        widgetId: e,
        meta: t,
    });
}
