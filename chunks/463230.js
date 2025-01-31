n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(230711),
    a = n(985754),
    s = n(91802),
    o = n(222727),
    c = n(981631),
    u = n(921944),
    E = n(388032),
    d = n(230278);
let _ =
    12633 == n.j
        ? (e) => {
              let { notice: t, noticeType: n, dismissCurrentNotice: _ } = e,
                  I = (null == t ? void 0 : t.metadata.premiumSubscription) != null,
                  T = (0, s.n)();
              if (((0, o.U)(c.jXE.NOTIFICATION_BAR, null == T ? void 0 : T.countryCode), null == T)) return null;
              let N = T.countryCode,
                  A = T.currency,
                  S = T.paymentSourceTypes.length > 0;
              return (0, i.jsxs)(l.qXd, {
                  color: I ? l.DM8.BRAND : l.DM8.PREMIUM_TIER_2,
                  children: [
                      (0, i.jsx)(l.RyX, {
                          onClick: () => _(u.L.UNKNOWN),
                          noticeType: n
                      }),
                      !I &&
                          (0, i.jsx)(l.SrA, {
                              size: 'md',
                              color: 'currentColor',
                              className: d.premiumIcon
                          }),
                      (0, a.Gv)(N, A, S, I),
                      (0, i.jsx)(l.NoS, {
                          onClick: () => {
                              _(u.L.UNKNOWN), r.Z.open(c.oAB.PREMIUM);
                          },
                          noticeType: n,
                          children: E.intl.string(E.t.hvVgAQ)
                      })
                  ]
              });
          }
        : null;
