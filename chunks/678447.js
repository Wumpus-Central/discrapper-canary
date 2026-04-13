n.d(t, { n: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(557722),
    a = n(419954),
    o = n(933297),
    d = n(662758),
    c = n(287809),
    u = n(780964),
    m = n(980429),
    g = n(982363),
    _ = n(652215),
    x = n(53516),
    h = n(985018);
function A() {
    let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, i.jsx)(l.Text, { variant: "text-md/medium", children: h.intl.string(h.t.I5kDqj) })
        : (0, i.jsxs)(l.BJc, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: [
                  (0, i.jsx)(g.q, {
                      text: t,
                      censor: m.D,
                      revealLabel: h.intl.string(h.t.eY3xlT),
                      hideLabel: h.intl.string(h.t["jllbv+"]),
                      redesign: !0,
                  }),
                  (0, i.jsx)(l.Button, {
                      text: h.intl.string(h.t.N86XcP),
                      variant: "critical-secondary",
                      onClick: () => {
                          (0, l.qfG)((t) =>
                              (0, i.jsx)(d.default, {
                                  ...t,
                                  title: h.intl.string(h.t["3CTiKi"]),
                                  children: e.hasFlag(_.nhx.MFA_SMS) ? h.intl.string(h.t.jrhJyo) : void 0,
                                  actionText: h.intl.string(h.t.N86XcP),
                                  handleSubmit: (e) => r.A.removePhone(e, r.d.USER_SETTINGS_UPDATE),
                              }),
                          );
                      },
                      "aria-label": h.intl.string(h.t.Rpn4A3),
                  }),
              ],
          });
}
let p = (0, a.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, s.bG)([c.default], () => c.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => h.intl.string(h.t.kerONq),
    useAriaLabel: function () {
        return null == (0, s.bG)([c.default], () => c.default.getCurrentUser()?.phone)
            ? h.intl.string(h.t["SfUuE+"])
            : h.intl.string(h.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: o._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: A }),
    useLabel: function () {
        return null == (0, s.bG)([c.default], () => c.default.getCurrentUser()?.phone)
            ? h.intl.string(h.t.OYkgVk)
            : h.intl.string(h.t.bt75uw);
    },
    onClick: function () {
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                return (t) => (0, i.jsx)(e, { reason: r.d.USER_SETTINGS_UPDATE, ...t });
            },
            { modalKey: x.V },
        );
    },
});
