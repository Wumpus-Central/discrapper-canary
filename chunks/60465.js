"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(284009),
    a = n.n(i),
    s = n(397927);
let o = {
    openGameProfileModal: function (e) {
        let { applicationId: t, gameProfileModalChecks: i, source: o, sourceUserId: l, appContext: u } = e;
        a()(
            i.shouldOpenGameProfile,
            "Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?",
        ),
            a()(
                i.applicationId === t,
                "Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?",
            ),
            (0, s.mMO)(
                async () => {
                    let { default: e } = await n.e("13530").then(n.bind(n, 225732));
                    return (n) => (0, r.jsx)(e, { applicationId: t, source: o, sourceUserId: l, ...n, appContext: u });
                },
                { contextKey: null != u ? (0, s.TId)(u) : void 0 },
            );
    },
};
