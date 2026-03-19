"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(284009),
    s = n.n(i),
    a = n(397927);
let o = {
    openGameProfileModal: function (e) {
        let { applicationId: t, gameProfileModalChecks: i, source: o, sourceUserId: l, appContext: u } = e;
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
                    let { default: e } = await Promise.all([n.e("42006"), n.e("60815")]).then(n.bind(n, 225732));
                    return (n) => (0, r.jsx)(e, { applicationId: t, source: o, sourceUserId: l, ...n, appContext: u });
                },
                { contextKey: null != u ? (0, a.TId)(u) : void 0 },
            );
    },
    openGameProfileStoreLinksModal: function (e) {
        let { detectedGame: t, websiteButtons: i, trackAction: s } = e;
        (0, a.mMO)(async () => {
            let { default: e } = await n.e("76758").then(n.bind(n, 459477));
            return (n) => (0, r.jsx)(e, { detectedGame: t, websiteButtons: i, trackAction: s, ...n });
        });
    },
};
