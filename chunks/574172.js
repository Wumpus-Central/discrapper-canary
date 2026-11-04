var i = n(73153);
let r = { menubar: !1, toolbar: !1, location: !1, directories: !1 };
n.d(
    t,
    {},
    {
        close: function (e) {
            return i.h.dispatch({ type: "POPOUT_WINDOW_CLOSE", key: e });
        },
        d8: function (e) {
            return i.h.dispatch({ type: "CHANNEL_CALL_POPOUT_WINDOW_OPEN", channel: e });
        },
        eQ: function (e, t) {
            return i.h.dispatch({ type: "CALL_TILE_POPOUT_WINDOW_OPEN", channelId: e, participantId: t });
        },
        ho: function (e, t, n) {
            return i.h.dispatch({ type: "POPOUT_WINDOW_OPEN", key: e, features: { ...r, ...n }, render: t });
        },
        kN: function (e, t) {
            return i.h.dispatch({ type: "POPOUT_WINDOW_ADD_STYLESHEET", url: e, integrity: t });
        },
        uR: function (e, t) {
            return i.h.dispatch({ type: "POPOUT_WINDOW_SET_ALWAYS_ON_TOP", alwaysOnTop: t, key: e });
        },
    },
);
