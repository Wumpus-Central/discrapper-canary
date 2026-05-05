l.d(e, { L: () => t, l: () => s });
var i = l(627968),
    n = l(192308);
let o = "slayer-eligibility-check-modal";
function t(a) {
    let { guildId: e, skuId: t, analyticsLocations: s, onContinue: c, onClose: d } = a;
    (0, n.openModalLazy)(
        async () => {
            let { default: a } = await Promise.all([l.e("42211"), l.e("62754")]).then(l.bind(l, 424185));
            return (l) => (0, i.jsx)(a, { ...l, guildId: e, skuId: t, analyticsLocations: s, onContinue: c });
        },
        { modalKey: o, onCloseCallback: d },
    );
}
function s() {
    (0, n.closeModal)(o);
}
