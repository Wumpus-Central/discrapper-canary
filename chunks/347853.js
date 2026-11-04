var l = n(477900);
n(582128);
var i = n(192308),
    a = n(73153),
    r = n(573879);
function s() {
    (0, i.mM)(
        async () => {
            let { default: e } = await Promise.all([n.e(376922), n.e(204264), n.e(179582), n.e(28386)]).then(
                n.bind(n, 623161),
            );
            return (t) => (0, l.jsx)(e, { ...t });
        },
        {
            onCloseCallback: () => {
                a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
            },
            modalKey: r.ov,
        },
    );
}
n.d(
    t,
    {},
    {
        A: s,
        D: function () {
            (0, i.mM)(
                async () => {
                    let { default: e } = await Promise.all([
                        n.e(807432),
                        n.e(461123),
                        n.e(715528),
                        n.e(590275),
                        n.e(355059),
                        n.e(70376),
                        n.e(960235),
                        n.e(373122),
                        n.e(808979),
                        n.e(989545),
                        n.e(935412),
                        n.e(104736),
                        n.e(772238),
                        n.e(220813),
                        n.e(139283),
                        n.e(201490),
                    ]).then(n.bind(n, 365225));
                    return (t) => (0, l.jsx)(e, { ...t, onBackPressed: s });
                },
                {
                    onCloseCallback: () => {
                        a.h.dispatch({ type: "LOGIN_RESET", isMultiAccount: !0 });
                    },
                    modalKey: r.Gl,
                },
            );
        },
    },
);
