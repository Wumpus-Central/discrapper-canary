n.d(t, {
    A4: () => d,
    E9: () => u,
    Os: () => o,
    jx: () => f,
    nv: () => s,
    sz: () => c,
    te: () => a,
    xh: () => l,
    zG: () => _
});
var i = n(570140),
    r = n(145597);
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.Gr;
    i.Z.dispatch({
        type: 'LAYOUT_CREATE',
        layoutId: e,
        widgets: t,
        version: n,
        defaultResolution: a
    });
}
function s(e) {
    let { widgetId: t, anchor: n, size: r, opacity: a } = e;
    i.Z.dispatch({
        type: 'LAYOUT_UPDATE_WIDGET',
        widgetId: t,
        anchor: n,
        size: r,
        opacity: a
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_TOP_WIDGET',
        widgetId: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_PINNED',
        widgetId: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'LAYOUT_DELETE_WIDGET',
        widgetId: e
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'LAYOUT_DELETE_ALL_WIDGETS',
        layoutId: e
    });
}
function d(e) {
    f([e]);
}
function f(e) {
    i.Z.dispatch({
        type: 'LAYOUT_CREATE_WIDGETS',
        widgetConfigs: e
    });
}
function _(e, t) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_WIDGET_META',
        widgetId: e,
        meta: t
    });
}
