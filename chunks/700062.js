n.d(t, { ZM: () => o, Zm: () => d, k7: () => c });
var i = n(627968),
    s = n(397927),
    l = n(98207),
    a = n(53516),
    r = n(985018);
function o(e) {
    (0, s.mMO)(
        async () => {
            let { default: t } = await Promise.resolve().then(n.bind(n, 615715));
            return (n) => (0, i.jsx)(t, { ...n, ...e });
        },
        { modalKey: a.V },
    );
}
function d() {
    (0, s.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                handleSubmit: l.A.disableSMS,
                title: r.intl.string(r.t.KLWnit),
                children: r.intl.string(r.t["W0/Duf"]),
            });
    });
}
function c() {
    (0, s.mMO)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                handleSubmit: (e) =>
                    l.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                        var t;
                        return (
                            (t = e),
                            void (0, s.mMO)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 518142));
                                    return (n) => (0, i.jsx)(e, { ...n, password: t });
                                },
                                { stackingBehavior: "stack" },
                            )
                        );
                    }),
                title: r.intl.string(r.t.PsQmzU),
                actionText: r.intl.string(r.t.ajkYcF),
            });
    });
}
