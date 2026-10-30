e.d(i, { default: () => g });
var a = e(477900),
    n = e(582128),
    s = e(189213),
    r = e(683071),
    l = e(964486),
    d = e(780964),
    u = e(766075),
    o = e(174459),
    c = e(427262),
    _ = e(751877),
    C = e(88001),
    I = e(652215),
    E = e(899082),
    p = e(105292);
let g = function (t) {
    let { subscriptionId: i, invitedUser: e, subscriptionGroupMemberId: g, onClose: f, ...m } = t,
        [P, k] = (0, n.useState)(!1),
        [A, N] = (0, n.useState)(!1),
        [S, T] = (0, n.useState)(!1);
    async function U() {
        (o.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, { subscription_id: i, invited_user_id: e.id }),
            T(!0));
        let t = await (0, _.kE)(i, e.id, g);
        (T(!1), t.ok ? f() : t.body?.code === C.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? k(!0) : N(!0));
    }
    return ((0, l.Ay)(() => {
        o.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, { subscription_id: i, invited_user_id: e.id });
    }),
    P)
        ? (0, a.jsx)(s.a, {
              size: "md",
              title: p.intl.string(E.default.grjTat),
              subtitle: p.intl.string(E.default.VgTgGu),
              actions: [
                  {
                      text: p.intl.string(E.default["+YO9kw"]),
                      variant: "secondary",
                      onClick: () => {
                          ((0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL), f());
                      },
                  },
              ],
              onClose: f,
              ...m,
          })
        : (0, a.jsx)(s.a, {
              size: "md",
              title: p.intl.string(E.default.U439m2),
              subtitle: p.intl.formatToPlainString(E.default["Sv6+Ox"], {
                  memberName: (0, c.$3)(e),
                  premiumGroupProductName: (0, C.DP)(),
              }),
              onClose: f,
              actions: [
                  { text: p.intl.string(E.default["2blqtw"]), variant: "critical-primary", onClick: U, loading: S },
              ],
              ...m,
              children:
                  A && (0, a.jsx)(r.w, { type: "critical", message: p.intl.string(p.t["rTU7/z"]), role: "alert" }),
          });
};
