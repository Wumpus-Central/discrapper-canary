n.d(t, {
    IC: () => p,
    Ju: () => l,
    Vz: () => o,
    cC: () => m,
    dH: () => d,
    jn: () => _,
    qH: () => g,
    uD: () => c,
    uF: () => h,
    uv: () => f,
    v0: () => u,
});
var r = n(73153),
    i = n(810412),
    a = n(555528),
    s = n(9302);

function o(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.OVERLAY_DEFAULT_RESOLUTION;
    r.h.dispatch({
        type: "LAYOUT_CREATE",
        layoutId: e,
        widgets: t,
        version: n,
        defaultResolution: i,
    });
}

function l(e) {
    let { widgetId: t, anchor: n, size: i, minSize: a, defaultSize: s, opacity: o } = e;
    r.h.dispatch({
        type: "LAYOUT_UPDATE_WIDGET",
        widgetId: t,
        anchor: n,
        size: i,
        minSize: a,
        defaultSize: s,
        opacity: o,
    });
}

function c(e) {
    r.h.dispatch({
        type: "LAYOUT_SET_TOP_WIDGET",
        widgetId: e,
    });
}

function u(e) {
    let { forcedPinnedState: t, shouldTrack: n = !0 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = r.h.dispatch({
            type: "LAYOUT_SET_PINNED",
            widgetId: e,
            pinned: t,
        });
    if (!n) return s;
    let o = a.A.getWidget(e);
    return (
        null == o ||
            (0, i.xp)(o.type, {
                pinned: null != t ? t : !o.pinned,
            }),
        s
    );
}

function d(e) {
    r.h.dispatch({
        type: "LAYOUT_SHOW_OVERLAY_EXTRAS_HINT",
        widgetId: e,
    });
}

function f(e) {
    r.h.dispatch({
        type: "LAYOUT_DELETE_WIDGET",
        widgetId: e,
    });
}

function p(e) {
    r.h.dispatch({
        type: "LAYOUT_DELETE_ALL_WIDGETS",
        layoutId: e,
    });
}

function _(e) {
    h([e]);
}

function h(e) {
    r.h.dispatch({
        type: "LAYOUT_CREATE_WIDGETS",
        widgetConfigs: e,
    });
}

function m(e, t) {
    r.h.dispatch({
        type: "LAYOUT_SET_WIDGET_META",
        widgetId: e,
        meta: t,
    });
}

function g(e, t) {
    return r.h.dispatch({
        type: "LAYOUT_SET_DEFAULT_CONFIG",
        widgetType: e,
        defaultConfig: t,
    });
}
