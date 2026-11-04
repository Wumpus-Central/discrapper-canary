var i = n(73153);
n.d(
    t,
    {},
    {
        EB: function (e, t) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_RESIZE", width: e, pipType: t });
        },
        I_: function (e, t) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_RECT", id: e, rect: t });
        },
        VN: function (e) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_CLOSE", id: e });
        },
        WU: function (e) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_SHOW", id: e });
        },
        ho: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_OPEN", id: e, component: t, props: n });
        },
        jD: function (e) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_HIDE", id: e });
        },
        mf: function (e) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW", id: e });
        },
        tw: function (e, t) {
            i.h.dispatch({ type: "PICTURE_IN_PICTURE_MOVE", id: e, position: t });
        },
    },
);
