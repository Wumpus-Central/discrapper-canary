n.d(t, { h: () => s });
var i = n(627968);
n(64700);
var l = n(192308);
function s(e) {
    let { demonetized: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    (0, l.openModalLazy)(
        async () => {
            let { default: l } = await n.e("46529").then(n.bind(n, 633400));
            return (n) => (0, i.jsx)(l, { guildId: e, demonetized: t, ...n });
        },
        { onCloseRequest: () => {} },
    );
}
