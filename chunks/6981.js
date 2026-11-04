var i = n(73153);
n.d(
    t,
    {},
    {
        J0: function () {
            i.h.dispatch({ type: "BROWSER_HANDOFF_UNAVAILABLE" });
        },
        Qh: function (e) {
            let { handoffKey: t, handoffToken: n, handoffSource: r, timeout: a = 1e4 } = e;
            i.h.dispatch({
                type: "BROWSER_HANDOFF_FROM_APP",
                handoffKey: t,
                handoffToken: n,
                handoffSource: r,
                timeout: a,
            });
        },
        ST: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
            i.h.dispatch({ type: "BROWSER_HANDOFF_BEGIN", timeout: e });
        },
        mZ: function (e, t) {
            i.h.dispatch({ type: "BROWSER_HANDOFF_END", handoffToken: e, fingerprint: t });
        },
        uA: function (e) {
            i.h.dispatch({ type: "BROWSER_HANDOFF_SET_USER", user: e });
        },
    },
);
