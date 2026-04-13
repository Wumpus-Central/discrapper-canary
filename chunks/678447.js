n.d(t, { n: () => h });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(557722),
    a = n(419954),
    o = n(933297),
    d = n(287809),
    c = n(780964),
    u = n(980429),
    m = n(982363),
    g = n(53516),
    _ = n(985018);
function x() {
    let e = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, i.jsx)(l.Text, { variant: "text-md/medium", children: _.intl.string(_.t.I5kDqj) })
        : (0, i.jsx)(l.BJc, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: (0, i.jsx)(m.q, {
                  text: t,
                  censor: u.D,
                  revealLabel: _.intl.string(_.t.eY3xlT),
                  hideLabel: _.intl.string(_.t["jllbv+"]),
                  redesign: !0,
              }),
          });
}
let h = (0, a.Tf)(c.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, s.bG)([d.default], () => d.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => _.intl.string(_.t.kerONq),
    useAriaLabel: function () {
        return null == (0, s.bG)([d.default], () => d.default.getCurrentUser()?.phone)
            ? _.intl.string(_.t["SfUuE+"])
            : _.intl.string(_.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: o._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: x }),
    useLabel: function () {
        return null == (0, s.bG)([d.default], () => d.default.getCurrentUser()?.phone)
            ? _.intl.string(_.t.OYkgVk)
            : _.intl.string(_.t.bt75uw);
    },
    onClick: function () {
        null == d.default.getCurrentUser()?.phone
            ? (0, l.mMO)(
                  async () => {
                      let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                      return (t) => (0, i.jsx)(e, { reason: r.d.USER_SETTINGS_UPDATE, ...t });
                  },
                  { modalKey: g.V },
              )
            : (0, l.mMO)(async () => {
                  let { default: e } = await n.e("89061").then(n.bind(n, 359012));
                  return (t) => (0, i.jsx)(e, { ...t });
              });
    },
});
