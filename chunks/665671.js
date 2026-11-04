var i = n(477900),
    a = n(192308),
    l = n(858899),
    s = n(464477),
    o = n(917136),
    r = n(792996);
n.d(
    e,
    {},
    {
        A: async function () {
            try {
                let { ticket: t, challenge: e } = await o.startRegisterWebAuthnCredential();
                (0, a.mM)(async () => {
                    let { RegisterWebAuthnCredentialModal: a } = await Promise.all([
                        n.e(113391),
                        n.e(82721),
                        n.e(104736),
                        n.e(481482),
                    ]).then(n.bind(n, 245329));
                    return (n) => (0, i.jsx)(a, { ...n, ticket: t, challenge: e });
                });
            } catch (t) {
                t.message !== r.intl.string(r.t.N2yb9a) &&
                    ((0, s.Os)(t), (0, l.P0)({ text: r.intl.string(r.t.xSCvBf), variant: "critical" }));
            }
        },
    },
);
