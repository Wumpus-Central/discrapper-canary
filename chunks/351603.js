n.d(t, { N: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(192308),
    a = n(834730),
    r = n(419954),
    o = n(933297),
    d = n(287809),
    u = n(780964),
    c = n(980429),
    g = n(982363),
    m = n(985018);
function _() {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()?.email);
    return null == e
        ? (0, i.jsx)(a.E, { variant: "text-md/medium", children: m.intl.string(m.t["8SfTN/"]) })
        : (0, i.jsx)(g.q, {
              text: e,
              censor: c.B,
              revealLabel: m.intl.string(m.t["Zvx+yV"]),
              hideLabel: m.intl.string(m.t.nqTD4d),
              redesign: !0,
          });
}
let A = (0, r.Tf)(u.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, s.bG)([d.default], () => d.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => m.intl.string(m.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: o._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: _ }),
    useLabel: function () {
        return null == (0, s.bG)([d.default], () => d.default.getCurrentUser()?.email)
            ? m.intl.string(m.t.OYkgVk)
            : m.intl.string(m.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, s.bG)([d.default], () => d.default.getCurrentUser()?.email)
            ? m.intl.string(m.t["pvBD+W"])
            : m.intl.string(m.t["8peUT0"]);
    },
    onClick: function () {
        (0, l.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e("89129"), n.e("28450")]).then(n.bind(n, 354096));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
});
