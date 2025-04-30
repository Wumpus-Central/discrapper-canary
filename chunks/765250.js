n.d(t, {
    A4: () => _,
    E9: () => d,
    Os: () => c,
    jx: () => p,
    nv: () => l,
    sz: () => f,
    te: () => s,
    xh: () => u,
    zG: () => h
});
var r = n(570140),
    i = n(444295),
    o = n(355863),
    a = n(145597);
function s(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.OVERLAY_DEFAULT_RESOLUTION;
    r.Z.dispatch({
        type: 'LAYOUT_CREATE',
        layoutId: e,
        widgets: t,
        version: n,
        defaultResolution: i
    });
}
function l(e) {
    let { widgetId: t, anchor: n, size: i, opacity: o } = e;
    r.Z.dispatch({
        type: 'LAYOUT_UPDATE_WIDGET',
        widgetId: t,
        anchor: n,
        size: i,
        opacity: o
    });
}
function c(e) {
    r.Z.dispatch({
        type: 'LAYOUT_SET_TOP_WIDGET',
        widgetId: e
    });
}
function u(e) {
    r.Z.dispatch({
        type: 'LAYOUT_SET_PINNED',
        widgetId: e
    });
    let t = o.Z.getWidget(e);
    null != t && (0, i.JS)(t.type, { pinned: !t.pinned });
}
function d(e) {
    r.Z.dispatch({
        type: 'LAYOUT_DELETE_WIDGET',
        widgetId: e
    });
}
function f(e) {
    r.Z.dispatch({
        type: 'LAYOUT_DELETE_ALL_WIDGETS',
        layoutId: e
    });
}
function _(e) {
    p([e]);
}
function p(e) {
    r.Z.dispatch({
        type: 'LAYOUT_CREATE_WIDGETS',
        widgetConfigs: e
    });
}
function h(e, t) {
    r.Z.dispatch({
        type: 'LAYOUT_SET_WIDGET_META',
        widgetId: e,
        meta: t
    });
}
