"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    r = n(284009),
    s = n.n(r),
    a = n(192308),
    o = n(228366);
function l(e) {
    o.h.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: e });
}
let d = {
    openGameProfileModal: function (e) {
        let { applicationId: t, gameProfileModalChecks: r, source: o, sourceUserId: l, appContext: d, forceV2: _ } = e;
        s()(
            r.shouldOpenGameProfile,
            "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?",
        ),
            s()(
                r.applicationId === t,
                "Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?",
            ),
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("23297"),
                        n.e("49319"),
                        n.e("92630"),
                        n.e("69059"),
                        n.e("62609"),
                        n.e("83593"),
                    ]).then(n.bind(n, 179985));
                    return (n) =>
                        (0, i.jsx)(e, {
                            applicationId: t,
                            source: o,
                            sourceUserId: l,
                            ...n,
                            appContext: d,
                            forceV2: _,
                        });
                },
                { contextKey: null != d ? (0, a.modalContextFromAppContext)(d) : void 0 },
            );
    },
    returnToGameProfile: function (e) {
        let { gameId: t, source: r, initialScrollOffset: s } = e;
        l(t),
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("23297"),
                    n.e("49319"),
                    n.e("92630"),
                    n.e("69059"),
                    n.e("62609"),
                    n.e("83593"),
                ]).then(n.bind(n, 179985));
                return (n) => (0, i.jsx)(e, { applicationId: t, source: r, initialScrollOffset: s, ...n });
            });
    },
    setGameProfilePendingReturn: function (e) {
        let { gameId: t, channelId: n, initialScrollOffset: i } = e;
        o.h.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId: t, channelId: n, initialScrollOffset: i });
    },
    clearGameProfilePendingReturn: l,
};
