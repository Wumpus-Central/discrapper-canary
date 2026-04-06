n.d(t, { h: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    a = n(990078),
    r = n(397927),
    o = n(81400),
    d = n(419954),
    c = n(933297),
    u = n(287809),
    m = n(780964),
    g = n(985018);
function _() {
    let e = (0, s.bG)([u.default], () => u.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function x() {
    let e = (0, o.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, s.bG)([u.default], () => u.default.getCurrentUser());
    if (null == n) return null;
    let d = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.Text, { variant: "text-md/medium", children: d }),
            null != t &&
                (0, i.jsx)(a.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, i.jsx)(r.EpV, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: l.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let A = (0, d.Tf)(m.X.ACCOUNT_INFO_USERNAME_SETTING, {
    useTitle: () => g.intl.string(g.t.qqhR3L),
    useTrailingContent: () => ({ type: c._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: x }),
    useLabel: () => g.intl.string(g.t.bt75uw),
    useAriaLabel: () => g.intl.string(g.t.JECa91),
    useSubtitle: () => (_() ? g.intl.string(g.t["7Ngnyr"]) : void 0),
    useVariant: () => "secondary",
    useDisabled: _,
    onClick: function () {
        (0, r.mMO)(async () => {
            let { default: e } = await n.e("13161").then(n.bind(n, 331632));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
});
