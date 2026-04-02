"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(284009),
    s = n.n(i),
    a = n(397927);
let o = {
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
                        n.e("16222"),
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
};
