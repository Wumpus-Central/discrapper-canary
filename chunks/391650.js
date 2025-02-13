n.d(t, {
    i: () => o,
    j: () => l
});
var i = n(200651);
n(192379);
var r = n(952265),
    a = n(723359),
    s = n(231338);
function o(e) {
    (0, r.ZD)(
        async () => {
            let { default: e } = await Promise.all([n.e('63288'), n.e('1337'), n.e('35567')]).then(n.bind(n, 298237));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        {
            modalKey: a.$$,
            onCloseRequest: s.dG,
            onCloseCallback: e
        }
    );
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = arguments.length > 1 ? arguments[1] : void 0;
    (0, r.ZD)(
        async () => {
            let { default: t } = await n.e('60827').then(n.bind(n, 324239));
            return (n) =>
                (0, i.jsx)(t, {
                    claimRequired: e,
                    ...n
                });
        },
        {
            onCloseRequest: e ? s.dG : null,
            onCloseCallback: t
        }
    );
}
