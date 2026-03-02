o.d(n, { default: () => g });
var a = o(627968);
o(64700);
var e = o(827734),
    r = o(397927),
    i = o(688810),
    s = o(87719),
    l = o(414345),
    c = o(244975),
    d = o(788868),
    p = o(652215),
    C = o(985018),
    A = o(915865),
    f = o(953239),
    u = o(929103);
function m(t, n) {
    return (0, a.jsx)(r.LpS, { text: t, className: f.Ad, color: e.A.unsafe_rawColors.BRAND_500.css }, n);
}
function g(t) {
    let { guildCount: n, onClose: o, analyticsLocations: e, ...f } = t,
        g = function (t, n) {
            return (0, a.jsx)(
                r.DUT,
                {
                    className: A.C,
                    tag: "span",
                    onClick: () => {
                        o(), (0, s.e)();
                    },
                    children: t,
                },
                n,
            );
        },
        { analyticsLocations: k } = (0, i.Ay)(e);
    return (0, l.g1)({ location: "PremiumGuildCapUpsell" })
        ? (0, a.jsx)(c.F, {
              title: C.intl.string(C.t["CoNXB+"]),
              subtitle:
                  n < p.qlD
                      ? C.intl.format(C.t["5qLH7B"], { guildCount: n, onAndMore: g, newBadgeHook: m })
                      : C.intl.format(C.t.mk9CS6, { onAndMore: g, newBadgeHook: m }),
              graphic: { src: u.A, type: "image" },
              secondaryCTA: C.intl.string(C.t["13/7kX"]),
              onSecondaryClick: o,
              onClose: o,
              ...f,
          })
        : (0, a.jsx)(i.f5, {
              value: k,
              children: (0, a.jsx)(c.A, {
                  artURL: u.A,
                  onClose: o,
                  type: d.e.GUILD_CAP_MODAL_UPSELL,
                  title: C.intl.string(C.t["CoNXB+"]),
                  secondaryCTA: C.intl.string(C.t["13/7kX"]),
                  onSecondaryClick: o,
                  body:
                      n < p.qlD
                          ? C.intl.format(C.t["5qLH7B"], { guildCount: n, onAndMore: g, newBadgeHook: m })
                          : C.intl.format(C.t.mk9CS6, { onAndMore: g, newBadgeHook: m }),
                  context:
                      n < p.qlD
                          ? C.intl.formatToPlainString(C.t["C+Hqzs"], { guildCount: n })
                          : C.intl.string(C.t.m0xavd),
                  glowUp: C.intl.format(C.t["6Dl5X1"], { onAndMore: g }),
                  ...f,
              }),
          });
}
