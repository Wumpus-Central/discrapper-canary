i.d(e, { default: () => N });
var n = i(477900),
    a = i(582128),
    s = i(284009),
    l = i.n(s),
    r = i(17928),
    o = i(224640),
    c = i(289873),
    d = i(315629),
    u = i(20742),
    x = i(297264),
    h = i(834730),
    m = i(696208),
    g = i(793574),
    A = i(688810),
    p = i(174459),
    R = i(427262),
    C = i(326084),
    S = i(851746),
    b = i(809813),
    j = i(652215),
    _ = i(375708),
    f = i(214634),
    E = i(954457);
function k(t) {
    let { transitionState: e, onClose: i, recipient: s, onSendComplete: l, analyticsLocations: g } = t,
        A = (0, r.bG)([S.A], () => S.A.getReferralsRemaining()),
        [b, k] = a.useState(!1),
        N = R.Ay.getName(s),
        w = _.intl.string(_.t.K2DyeS),
        L = _.intl.formatToPlainString(_.t.JNgfIL, { recipientName: N });
    async function y() {
        (k(!0), p.default.track(j.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack: g }));
        let t = (await (0, C.xm)([s.id])).get(s.id) ?? C.o.FAIL;
        (k(!1), l({ recipient: s, status: t }));
    }
    return null == A
        ? (0, n.jsx)(o.d, {
              transitionState: e,
              onClose: i,
              paddingSize: "lg",
              "aria-label": _.intl.string(_.t.c1wxcb),
              children: (0, n.jsx)("div", { className: f.dc, children: (0, n.jsx)(c.y, {}) }),
          })
        : (0, n.jsxs)(o.d, {
              transitionState: e,
              onClose: i,
              paddingSize: "lg",
              "aria-label": w,
              children: [
                  (0, n.jsxs)(d.h, {
                      color: "nitro-pink",
                      className: f.wx,
                      children: [
                          (0, n.jsx)("div", { className: f.b2, children: (0, n.jsx)(u.s_, { shouldColorMix: !0 }) }),
                          (0, n.jsx)("img", { className: f.c8, src: E.A, alt: "" }),
                          (0, n.jsx)(x.D, {
                              variant: "heading-xl/semibold",
                              color: "text-strong",
                              className: f.DD,
                              children: w,
                          }),
                          (0, n.jsx)(h.E, {
                              variant: "text-md/normal",
                              color: "text-subtle",
                              className: f.VA,
                              children: L,
                          }),
                      ],
                  }),
                  (0, n.jsx)(m.H, {
                      actions: [
                          { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: i, disabled: b },
                          {
                              variant: "primary",
                              text: _.intl.string(_.t.ItpQxk),
                              onClick: y,
                              loading: b,
                              disabled: b || 0 === A,
                          },
                      ],
                      actionsFullWidth: !0,
                  }),
              ],
          });
}
let N = function (t) {
    let { transitionState: e, onClose: i, recipient: s, sourceAnalyticsLocation: r } = t,
        [o, c] = a.useState(1),
        [d, u] = a.useState(null),
        { analyticsLocations: x } = (0, A.Ay)([r, g.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
    switch (o) {
        case 1:
            return (0, n.jsx)(k, {
                transitionState: e,
                onClose: i,
                recipient: s,
                analyticsLocations: x,
                onSendComplete: (t) => {
                    (u(t), c(2));
                },
            });
        case 2:
            return (
                l()(null != d, "Trial creation result should be set before showing the confirmation step"),
                (0, n.jsx)(b.h, {
                    transitionState: e,
                    results: [d],
                    onClose: i,
                    isReminderConfirmation: !1,
                    showRecipientList: !1,
                })
            );
        default:
            return null;
    }
};
