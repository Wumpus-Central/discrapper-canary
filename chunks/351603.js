n.d(t, { N: () => _ });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(419954),
    a = n(933297),
    o = n(287809),
    d = n(780964),
    c = n(980429),
    u = n(982363),
    m = n(985018);
function g() {
    let e = (0, s.bG)([o.default], () => o.default.getCurrentUser()?.email);
    return null == e
        ? (0, i.jsx)(l.Text, { variant: "text-md/medium", children: m.intl.string(m.t["8SfTN/"]) })
        : (0, i.jsx)(u.q, {
              text: e,
              censor: c.B,
              revealLabel: m.intl.string(m.t["Zvx+yV"]),
              hideLabel: m.intl.string(m.t.nqTD4d),
              redesign: !0,
          });
}
let _ = (0, r.Tf)(d.X.ACCOUNT_INFO_EMAIL_SETTING, {
    usePredicate: () => (0, s.bG)([o.default], () => o.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => m.intl.string(m.t.tlZllC),
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: a._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: g }),
    useLabel: function () {
        return null == (0, s.bG)([o.default], () => o.default.getCurrentUser()?.email)
            ? m.intl.string(m.t.OYkgVk)
            : m.intl.string(m.t.bt75uw);
    },
    useAriaLabel: function () {
        return null == (0, s.bG)([o.default], () => o.default.getCurrentUser()?.email)
            ? m.intl.string(m.t["pvBD+W"])
            : m.intl.string(m.t["8peUT0"]);
    },
    onClick: function () {
        (0, l.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("89129"), n.e("28450")]).then(n.bind(n, 354096));
            return (t) => (0, i.jsx)(e, { ...t });
        });
    },
});
