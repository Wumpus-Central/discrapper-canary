n.d(t, { n: () => x });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(192308),
    a = n(834730),
    r = n(331322),
    o = n(557722),
    d = n(419954),
    u = n(933297),
    c = n(287809),
    g = n(780964),
    m = n(980429),
    _ = n(982363),
    A = n(53516),
    h = n(985018);
function p() {
    let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, i.jsx)(a.E, { variant: "text-md/medium", children: h.intl.string(h.t.I5kDqj) })
        : (0, i.jsx)(r.B, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, i.jsx)(_.q, {
                  text: t,
                  censor: m.D,
                  revealLabel: h.intl.string(h.t.eY3xlT),
                  hideLabel: h.intl.string(h.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let x = (0, d.Tf)(g.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, s.bG)([c.default], () => c.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => h.intl.string(h.t.kerONq),
    useAriaLabel: function () {
        return null == (0, s.bG)([c.default], () => c.default.getCurrentUser()?.phone)
            ? h.intl.string(h.t["SfUuE+"])
            : h.intl.string(h.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: u._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: p }),
    useLabel: function () {
        return null == (0, s.bG)([c.default], () => c.default.getCurrentUser()?.phone)
            ? h.intl.string(h.t.OYkgVk)
            : h.intl.string(h.t.bt75uw);
    },
    onClick: function () {
        null == c.default.getCurrentUser()?.phone
            ? (0, l.openModalLazy)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                      return (t) => (0, i.jsx)(e, { reason: o.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: A.V },
              )
            : (0, l.openModalLazy)(async () => {
                  let { default: e } = await n.e("89061").then(n.bind(n, 359012));
                  return (t) => (0, i.jsx)(e, { ...t });
              });
    },
});
