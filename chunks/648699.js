n.d(t, { h: () => x });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(827734),
    a = n(990078),
    r = n(192308),
    o = n(834730),
    d = n(695366),
    u = n(81400),
    c = n(419954),
    g = n(933297),
    m = n(287809),
    _ = n(780964),
    A = n(985018);
function h() {
    let e = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    return null != e && !e.isClaimed();
}
function p() {
    let e = (0, u.EC)(),
        t = e?.nick?.[0] ?? null,
        n = (0, s.bG)([m.default], () => m.default.getCurrentUser());
    if (null == n) return null;
    let r = n.hasUniqueUsername() ? n.username : `${n.username}#${n.discriminator}`;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(o.E, { variant: "text-md/medium", children: r }),
            null != t &&
                (0, i.jsx)(a.m, {
                    __unsupportedReactNodeAsText: t,
                    "aria-label": !1,
                    children: (0, i.jsx)(d.E, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: l.A.colors.STATUS_WARNING.css,
                    }),
                }),
        ],
    });
}
let x = (0, c.Tf)(_.X.ACCOUNT_INFO_USERNAME_SETTING, {
    useTitle: () => A.intl.string(A.t.qqhR3L),
    useTrailingContent: () => ({ type: g._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p }),
    useLabel: () => A.intl.string(A.t.bt75uw),
    useAriaLabel: () => A.intl.string(A.t.JECa91),
    useSubtitle: () => (h() ? A.intl.string(A.t["7Ngnyr"]) : void 0),
    useVariant: () => "secondary",
    useDisabled: h,
    onClick: function () {
        (0, r.openModalLazy)(async () => {
            let { default: e } = await n.e("13161").then(n.bind(n, 331632));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
});
