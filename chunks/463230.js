n.d(t, { Z: () => h });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(230711),
    o = n(985754),
    s = n(91802),
    a = n(222727),
    c = n(981631),
    d = n(921944),
    u = n(388032),
    _ = n(131715);
let h =
    12633 == n.j
        ? (e) => {
              let { notice: t, noticeType: n, dismissCurrentNotice: h } = e,
                  E = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
                  I = (0, s.n)();
              if (((0, a.U)(c.jXE.NOTIFICATION_BAR, null == I ? void 0 : I.countryCode), null == I)) return null;
              let p = I.countryCode,
                  C = I.currency,
                  O = I.paymentSourceTypes.length > 0;
              return (0, i.jsxs)(r.qXd, {
                  color: E ? r.DM8.BRAND : r.DM8.PREMIUM_TIER_2,
                  children: [
                      (0, i.jsx)(r.RyX, {
                          onClick: () => h(d.L.UNKNOWN),
                          noticeType: n
                      }),
                      !E &&
                          (0, i.jsx)(r.SrA, {
                              size: 'md',
                              color: 'currentColor',
                              className: _.premiumIcon
                          }),
                      (0, o.Gv)(p, C, O, E),
                      (0, i.jsx)(r.NoS, {
                          onClick: () => {
                              (h(d.L.UNKNOWN), l.Z.open(c.oAB.PREMIUM));
                          },
                          noticeType: n,
                          children: u.intl.string(u.t.hvVgAQ)
                      })
                  ]
              });
          }
        : null;
