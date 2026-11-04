var i = n(73153);
n.d(
    t,
    {},
    {
        BG: function (e) {
            i.h.dispatch({ type: "CONNECTED_DEVICE_IGNORE", displayName: e });
        },
        Bv: function (e) {
            i.h.dispatch({ type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL", neverShowModal: e });
        },
        TO: function (e, t, n) {
            i.h.dispatch({
                type: "CONNECTED_DEVICE_SWITCH",
                displayName: e,
                connectedDevicePreference: t,
                location: n,
            });
        },
        mk: function () {
            i.h.dispatch({ type: "CONNECTED_DEVICE_DONT_SWITCH" });
        },
    },
);
