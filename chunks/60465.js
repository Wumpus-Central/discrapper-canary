"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(284009),
    s = n.n(i),
    a = n(397927),
    o = n(73153);
function l(e) {
    o.h.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: e });
}
let u = {
    openGameProfileModal: function (e) {
        let { applicationId: t, gameProfileModalChecks: i, source: o, sourceUserId: l, appContext: u, forceV2: c } = e;
        s()(
            i.shouldOpenGameProfile,
            "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?",
        ),
            s()(
                i.applicationId === t,
                "Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?",
            ),
            (0, a.mMO)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e("18976"),
                        n.e("21957"),
                        n.e("18037"),
                        n.e("88323"),
                    ]).then(n.bind(n, 225732));
                    return (n) =>
                        (0, r.jsx)(e, {
                            applicationId: t,
                            source: o,
                            sourceUserId: l,
                            ...n,
                            appContext: u,
                            forceV2: c,
                        });
                },
                { contextKey: null != u ? (0, a.TId)(u) : void 0 },
            );
    },
    returnToGameProfile: function (e) {
        let { gameId: t, source: i } = e;
        l(t),
            (0, a.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("18976"), n.e("21957"), n.e("18037"), n.e("88323")]).then(
                    n.bind(n, 225732),
                );
                return (n) => (0, r.jsx)(e, { applicationId: t, source: i, ...n });
            });
    },
    setGameProfilePendingReturn: function (e) {
        let { gameId: t, channelId: n } = e;
        o.h.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId: t, channelId: n });
    },
    clearGameProfilePendingReturn: l,
};
