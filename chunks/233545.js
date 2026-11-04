var i = n(73153),
    r = n(77729);
n.d(
    t,
    {},
    {
        VN: function () {
            i.h.dispatch({ type: "RTC_DEBUG_MODAL_CLOSE" });
        },
        YW: function () {
            i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY" });
        },
        _w: function () {
            r.A.fileManager.showOpenDialog({ filters: [{ name: "All Files", extensions: ["*"] }] }).then((e) => {
                let t = 0 === e.length ? "" : e[0];
                i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH", path: t });
            });
        },
        c4: function (e) {
            i.h.dispatch({ type: "RTC_DEBUG_MODAL_SET_SECTION", section: e });
        },
        ho: function (e) {
            (i.h.dispatch({ type: "RTC_DEBUG_MODAL_OPEN", section: e }),
                i.h.dispatch({ type: "RTC_DEBUG_POPOUT_WINDOW_OPEN" }));
        },
        z0: function (e, t, n) {
            i.h.dispatch({ type: "RTC_DEBUG_SET_SIMULCAST_OVERRIDE", userId: e, context: t, quality: n });
        },
    },
);
