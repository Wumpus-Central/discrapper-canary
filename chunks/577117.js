n.d(t, { F: () => A });
var i = n(627968);
n(64700);
var s = n(192308),
    l = n(834730),
    a = n(419954),
    r = n(933297),
    o = n(975571),
    d = n(780964),
    u = n(590321),
    c = n(652215),
    g = n(985018),
    m = n(516761);
function _() {
    let e = g.intl.string(g.t.XxRj7f);
    return (0, i.jsxs)(l.E, {
        variant: "text-md/medium",
        children: [
            `${e} • `,
            g.intl.format(m.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(o.A.getArticleURL(c.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let A = (0, a.Tf)(d.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
    usePredicate: () => (0, u.f)("edit"),
    useTitle: () => g.intl.string(g.t["/52UYy"]),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: r._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _ }),
    useLabel: () => g.intl.string(g.t.bt75uw),
    onClick: function () {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await n.e("45361").then(n.bind(n, 151080));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
});
