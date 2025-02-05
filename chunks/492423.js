n.d(t, { Z: () => o });
var i = n(200651),
    r = n(512722),
    a = n.n(r),
    s = n(481060);
let o = {
    openGameProfileModal: function (e) {
        let { applicationId: t, gameProfileModalChecks: r, source: o, sourceUserId: l } = e;
        a()(r.shouldOpenGameProfile, 'Passed a false value for [gameProfileModalChecks]. Are you using the useShouldOpenGameProfile hook correctly?'),
            a()(r.applicationId === t, 'Passed an unexpected [applicationId]. Are you passing a different one than you passed to useShouldOpenGameProfileModal?'),
            (0, s.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('78447'), n.e('83366'), n.e('84804'), n.e('74976'), n.e('63482')]).then(n.bind(n, 644941));
                return (n) =>
                    (0, i.jsx)(e, {
                        applicationId: t,
                        source: o,
                        sourceUserId: l,
                        ...n
                    });
            });
    }
};
