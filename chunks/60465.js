t.d(i, { A: () => d });
var n = t(627968),
    l = t(284009),
    a = t.n(l),
    o = t(192308),
    r = t(73153);
function s(e) {
    r.h.dispatch({ type: "GAME_PROFILE_CLEAR_PENDING_RETURN", gameId: e });
}
let d = {
    openGameProfileModal: function (e) {
        let { applicationId: i, gameProfileModalChecks: l, source: r, sourceUserId: s, appContext: d, forceV2: u } = e;
        a()(
            l.shouldOpenGameProfile,
            "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?",
        ),
            a()(
                l.applicationId === i,
                "Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?",
            ),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        t.e("24199"),
                        t.e("57036"),
                        t.e("70474"),
                        t.e("61943"),
                        t.e("76640"),
                        t.e("7175"),
                        t.e("55202"),
                        t.e("23353"),
                        t.e("73667"),
                        t.e("11250"),
                        t.e("14138"),
                        t.e("3442"),
                        t.e("85071"),
                        t.e("88017"),
                        t.e("70994"),
                        t.e("17239"),
                        t.e("24267"),
                        t.e("51793"),
                        t.e("58164"),
                        t.e("81645"),
                        t.e("63070"),
                        t.e("25370"),
                        t.e("28367"),
                        t.e("96313"),
                        t.e("27411"),
                        t.e("49318"),
                        t.e("12721"),
                        t.e("58283"),
                        t.e("17601"),
                        t.e("8087"),
                        t.e("55057"),
                        t.e("60471"),
                        t.e("42257"),
                        t.e("48563"),
                        t.e("27355"),
                        t.e("67876"),
                        t.e("47742"),
                        t.e("89"),
                        t.e("58801"),
                        t.e("19677"),
                        t.e("62609"),
                        t.e("93157"),
                        t.e("71322"),
                    ]).then(t.bind(t, 225732));
                    return (t) =>
                        (0, n.jsx)(e, {
                            applicationId: i,
                            source: r,
                            sourceUserId: s,
                            ...t,
                            appContext: d,
                            forceV2: u,
                        });
                },
                { contextKey: null != d ? (0, o.modalContextFromAppContext)(d) : void 0 },
            );
    },
    returnToGameProfile: function (e) {
        let { gameId: i, source: l, initialScrollOffset: a } = e;
        s(i),
            (0, o.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    t.e("24199"),
                    t.e("57036"),
                    t.e("70474"),
                    t.e("61943"),
                    t.e("76640"),
                    t.e("7175"),
                    t.e("55202"),
                    t.e("23353"),
                    t.e("73667"),
                    t.e("11250"),
                    t.e("14138"),
                    t.e("3442"),
                    t.e("85071"),
                    t.e("88017"),
                    t.e("70994"),
                    t.e("17239"),
                    t.e("24267"),
                    t.e("51793"),
                    t.e("58164"),
                    t.e("81645"),
                    t.e("63070"),
                    t.e("25370"),
                    t.e("28367"),
                    t.e("96313"),
                    t.e("27411"),
                    t.e("49318"),
                    t.e("12721"),
                    t.e("58283"),
                    t.e("17601"),
                    t.e("8087"),
                    t.e("55057"),
                    t.e("60471"),
                    t.e("42257"),
                    t.e("48563"),
                    t.e("27355"),
                    t.e("67876"),
                    t.e("47742"),
                    t.e("89"),
                    t.e("58801"),
                    t.e("19677"),
                    t.e("62609"),
                    t.e("93157"),
                    t.e("71322"),
                ]).then(t.bind(t, 225732));
                return (t) => (0, n.jsx)(e, { applicationId: i, source: l, initialScrollOffset: a, ...t });
            });
    },
    setGameProfilePendingReturn: function (e) {
        let { gameId: i, channelId: t, initialScrollOffset: n } = e;
        r.h.dispatch({ type: "GAME_PROFILE_SET_PENDING_RETURN", gameId: i, channelId: t, initialScrollOffset: n });
    },
    clearGameProfilePendingReturn: s,
};
