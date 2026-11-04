var s = n(477900);
n(582128);
var t = n(192308),
    i = n(652215);
function l() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return new Promise((a) => {
        (0, t.mM)(
            async () => {
                let { default: a } = await Promise.all([
                    n.e(644565),
                    n.e(503376),
                    n.e(87641),
                    n.e(676237),
                    n.e(428429),
                ]).then(n.bind(n, 549404));
                return (n) => (0, s.jsx)(a, { ...n, isTotp: e });
            },
            { onCloseCallback: a, onCloseRequest: i.FXj },
        );
    });
}
n.d(
    a,
    {},
    {
        Ay: {
            enableMFA: async function () {
                (await new Promise((e) => {
                    (0, t.mM)(async () => {
                        let { default: a } = await Promise.all([
                            n.e(72338),
                            n.e(679928),
                            n.e(595429),
                            n.e(787712),
                            n.e(525989),
                            n.e(524084),
                            n.e(676237),
                            n.e(158994),
                        ]).then(n.bind(n, 333737));
                        return (n) => (0, s.jsx)(a, { ...n, handleEnableMFASuccess: e });
                    });
                }),
                    await l());
            },
        },
        sy: l,
    },
);
