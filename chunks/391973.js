var i = n(73153),
    r = n(810412),
    a = n(83880),
    s = n(9302);
function l(e) {
    i.h.dispatch({ type: "LAYOUT_CREATE_WIDGETS", widgetConfigs: e });
}
n.d(
    t,
    {},
    {
        IC: function (e) {
            i.h.dispatch({ type: "LAYOUT_DELETE_ALL_WIDGETS", layoutId: e });
        },
        Ju: function (e) {
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
        },
        Vz: function (e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.Gu;
            i.h.dispatch({ type: "LAYOUT_CREATE", layoutId: e, widgets: t, version: n, defaultResolution: r });
        },
        cC: function (e, t) {
            i.h.dispatch({ type: "LAYOUT_SET_WIDGET_META", widgetId: e, meta: t });
        },
        jn: function (e) {
            l([e]);
        },
        sx: function (e, t) {
            0 !== e.length && i.h.dispatch({ type: "LAYOUT_SET_WIDGETS_HIDDEN", widgetIds: e, hidden: t });
        },
        uD: function (e) {
            i.h.dispatch({ type: "LAYOUT_SET_TOP_WIDGET", widgetId: e });
        },
        uF: l,
        uv: function (e) {
            i.h.dispatch({ type: "LAYOUT_DELETE_WIDGET", widgetId: e });
        },
        v0: function (e) {
            let { forcedPinnedState: t, shouldTrack: n = !0 } =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = i.h.dispatch({ type: "LAYOUT_SET_PINNED", widgetId: e, pinned: t });
            if (!n) return s;
            let l = a.A.getWidget(e);
            return (null == l || (0, r.xp)(l.type, { pinned: t ?? !l.pinned }), s);
        },
    },
);
