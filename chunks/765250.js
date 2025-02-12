n.d(t, {
    A4: () => _,
    E9: () => d,
    Os: () => u,
    jx: () => p,
    nv: () => l,
    sz: () => f,
    te: () => o,
    xh: () => c,
    zG: () => h
});
var i = n(570140),
    r = n(444295),
    a = n(355863),
    s = n(145597);
function o(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Gr;
    i.Z.dispatch({
        type: 'LAYOUT_CREATE',
        layoutId: e,
        widgets: t,
        version: n,
        defaultResolution: r
    });
}
function l(e) {
    let { widgetId: t, anchor: n, size: r, opacity: a } = e;
    i.Z.dispatch({
        type: 'LAYOUT_UPDATE_WIDGET',
        widgetId: t,
        anchor: n,
        size: r,
        opacity: a
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_TOP_WIDGET',
        widgetId: e
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_PINNED',
        widgetId: e
    });
    let t = a.Z.getWidget(e);
    null != t && (0, r.JS)(t.type, { pinned: !t.pinned });
}
function d(e) {
    i.Z.dispatch({
        type: 'LAYOUT_DELETE_WIDGET',
        widgetId: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'LAYOUT_DELETE_ALL_WIDGETS',
        layoutId: e
    });
}
function _(e) {
    p([e]);
}
function p(e) {
    i.Z.dispatch({
        type: 'LAYOUT_CREATE_WIDGETS',
        widgetConfigs: e
    });
}
function h(e, t) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_WIDGET_META',
        widgetId: e,
        meta: t
    });
}
