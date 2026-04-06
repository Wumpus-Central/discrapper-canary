n.d(t, { n: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(557722),
    r = n(419954),
    o = n(933297),
    d = n(662758),
    c = n(287809),
    u = n(780964),
    m = n(980429),
    g = n(982363),
    _ = n(652215),
    x = n(53516),
    A = n(985018);
function h() {
    let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
        t = e?.phone ?? null;
    return null == e || null == t
        ? (0, i.jsx)(l.Text, { variant: "text-md/medium", children: A.intl.string(A.t.I5kDqj) })
        : (0, i.jsxs)(l.BJc, {
              direction: "horizontal",
              align: "center",
              justify: "end",
              gap: "md",
              children: [
                  (0, i.jsx)(g.q, {
                      text: t,
                      censor: m.D,
                      revealLabel: A.intl.string(A.t.eY3xlT),
                      hideLabel: A.intl.string(A.t["jllbv+"]),
                      redesign: !0,
                  }),
                  (0, i.jsx)(l.Button, {
                      text: A.intl.string(A.t.N86XcP),
                      variant: "critical-secondary",
                      onClick: () => {
                          (0, l.qfG)((t) =>
                              (0, i.jsx)(d.default, {
                                  ...t,
                                  title: A.intl.string(A.t["3CTiKi"]),
                                  children: e.hasFlag(_.nhx.MFA_SMS) ? A.intl.string(A.t.jrhJyo) : void 0,
                                  actionText: A.intl.string(A.t.N86XcP),
                                  handleSubmit: (e) => a.A.removePhone(e, a.d.USER_SETTINGS_UPDATE),
                              }),
                          );
                      },
                      "aria-label": A.intl.string(A.t.Rpn4A3),
                  }),
              ],
          });
}
let p = (0, r.Tf)(u.X.ACCOUNT_INFO_PHONE_SETTING, {
    usePredicate: () => (0, s.bG)([c.default], () => c.default.getCurrentUser()?.isClaimed()) ?? !1,
    useTitle: () => A.intl.string(A.t.kerONq),
    useAriaLabel: function () {
        return null == (0, s.bG)([c.default], () => c.default.getCurrentUser()?.phone)
            ? A.intl.string(A.t["SfUuE+"])
            : A.intl.string(A.t.YDabSe);
    },
    useVariant: () => "secondary",
    useTrailingContent: () => ({ type: o._1.STRONGLY_DISCOURAGED_CUSTOM, StronglyDiscouragedCustomComponent: h }),
    useLabel: function () {
        return null == (0, s.bG)([c.default], () => c.default.getCurrentUser()?.phone)
            ? A.intl.string(A.t.OYkgVk)
            : A.intl.string(A.t.bt75uw);
    },
    onClick: function () {
        (0, l.mMO)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 615715));
                return (t) => (0, i.jsx)(e, { reason: a.d.USER_SETTINGS_UPDATE, ...t });
            },
            { modalKey: x.V },
        );
    },
});
