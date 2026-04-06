n.d(t, { F: () => _ });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(419954),
    a = n(933297),
    r = n(975571),
    o = n(780964),
    d = n(590321),
    c = n(652215),
    u = n(985018),
    m = n(536242);
function g() {
    let e = u.intl.string(u.t.XxRj7f);
    return (0, i.jsxs)(s.Text, {
        variant: "text-md/medium",
        children: [
            `${e} • `,
            u.intl.format(m.default.WM5adV, {
                handleOnHelpUrlHook: () => window.open(r.A.getArticleURL(c.MVz.TIGGER_PAWTECT_LEARN_MORE), "_blank"),
            }),
        ],
    });
}
let _ = (0, l.Tf)(o.X.ACCOUNT_INFO_AGE_GROUP_EDIT_SETTING, {
    usePredicate: () => (0, d.f)("edit"),
    useTitle: () => u.intl.string(u.t["/52UYy"]),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: a._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: g }),
    useLabel: () => u.intl.string(u.t.bt75uw),
    onClick: function () {
        (0, s.mMO)(async () => {
            let { default: e } = await n.e("45361").then(n.bind(n, 151080));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
});
