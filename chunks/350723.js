var i = n(435558),
    r = n(73153),
    a = n(475815),
    s = n(365971);
let l = (0, i.memoize)((e) =>
    (0, i.debounce)((t, n) => {
        r.h.dispatch({ type: "WINDOW_RESIZED", windowId: e, width: t, height: n });
    }, 100),
);
n.d(
    t,
    {},
    {
        GP: function (e) {
            r.h.dispatch({ type: "WINDOW_UNLOAD", windowId: (0, s.Q2)(e) });
        },
        R: function (e) {
            r.h.dispatch({ type: "WINDOW_HIDDEN", windowId: (0, s.Q2)(e) });
        },
        Ts: function (e) {
            let t = (0, s.Q2)(e),
                n = e.document;
            r.h.dispatch({
                type: "WINDOW_INIT",
                windowId: t,
                isElementFullscreen: (0, a._U)(null, n),
                focused: n.hasFocus(),
                width: e.innerWidth,
                height: e.innerHeight,
                visible: "visible" === n.visibilityState,
            });
        },
        XC: function (e, t) {
            r.h.dispatch({ type: "WINDOW_FOCUS", windowId: (0, s.Q2)(e), focused: t });
        },
        _c: function (e) {
            let t = (0, s.Q2)(e);
            r.h.dispatch({
                type: "WINDOW_FULLSCREEN_CHANGE",
                windowId: t,
                isElementFullscreen: (0, a._U)(null, e.document),
            });
        },
        t2: function (e) {
            let t = (0, s.Q2)(e);
            r.h.dispatch({
                type: "WINDOW_VISIBILITY_CHANGE",
                windowId: t,
                visible: "visible" === e.document.visibilityState,
            });
        },
        tV: function (e) {
            l((0, s.Q2)(e))(e.innerWidth, e.innerHeight);
        },
    },
);
