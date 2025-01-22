r.d(n, {
    A4: function () {
        return f;
    },
    E9: function () {
        return c;
    },
    Os: function () {
        return l;
    },
    jx: function () {
        return p;
    },
    nv: function () {
        return s;
    },
    sz: function () {
        return d;
    },
    te: function () {
        return o;
    },
    xh: function () {
        return u;
    },
    zG: function () {
        return h;
    }
});
var i = r(570140),
    a = r(145597);
function o(e, n, r) {
    let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.Gr;
    i.Z.dispatch({
        type: 'LAYOUT_CREATE',
        layoutId: e,
        widgets: n,
        version: r,
        defaultResolution: o
    });
}
function s(e) {
    let { widgetId: n, anchor: r, size: a, opacity: o } = e;
    i.Z.dispatch({
        type: 'LAYOUT_UPDATE_WIDGET',
        widgetId: n,
        anchor: r,
        size: a,
        opacity: o
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_TOP_WIDGET',
        widgetId: e
    });
}
function u(e) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_PINNED',
        widgetId: e
    });
}
function c(e) {
    i.Z.dispatch({
        type: 'LAYOUT_DELETE_WIDGET',
        widgetId: e
    });
}
function d(e) {
    i.Z.dispatch({
        type: 'LAYOUT_DELETE_ALL_WIDGETS',
        layoutId: e
    });
}
function f(e) {
    p([e]);
}
function p(e) {
    i.Z.dispatch({
        type: 'LAYOUT_CREATE_WIDGETS',
        widgetConfigs: e
    });
}
function h(e, n) {
    i.Z.dispatch({
        type: 'LAYOUT_SET_WIDGET_META',
        widgetId: e,
        meta: n
    });
}
