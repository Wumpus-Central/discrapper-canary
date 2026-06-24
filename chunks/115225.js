e.d(i, { default: () => f });
var n = e(627968),
    a = e(64700),
    s = e(189213),
    l = e(683071),
    r = e(964486),
    d = e(780964),
    u = e(766075),
    o = e(174459),
    c = e(427262),
    _ = e(751877),
    C = e(88001),
    I = e(652215),
    E = e(466919),
    p = e(375708);
let f = function (t) {
    let { subscriptionId: i, invitedUser: e, subscriptionGroupMemberId: f, onClose: g, ...P } = t,
        [k, m] = (0, a.useState)(!1),
        [A, N] = (0, a.useState)(!1),
        [S, T] = (0, a.useState)(!1);
    async function U() {
        o.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, { subscription_id: i, invited_user_id: e.id }),
            T(!0);
        let t = await (0, _.kE)(i, e.id, f);
        T(!1), t.ok ? g() : t.body?.code === C.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? m(!0) : N(!0);
    }
    return ((0, r.Ay)(() => {
        o.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, { subscription_id: i, invited_user_id: e.id });
    }),
    k)
        ? (0, n.jsx)(s.Modal, {
              size: "md",
              title: p.intl.string(E.default.grjTat),
              subtitle: p.intl.string(E.default.VgTgGu),
              actions: [
                  {
                      text: p.intl.string(E.default["+YO9kw"]),
                      variant: "secondary",
                      onClick: () => {
                          (0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL), g();
                      },
                  },
              ],
              onClose: g,
              ...P,
          })
        : (0, n.jsx)(s.Modal, {
              size: "md",
              title: p.intl.string(E.default.U439m2),
              subtitle: p.intl.formatToPlainString(E.default["Sv6+Ox"], {
                  memberName: (0, c.$3)(e),
                  premiumGroupProductName: (0, C.DP)(),
              }),
              onClose: g,
              actions: [
                  { text: p.intl.string(E.default["2blqtw"]), variant: "critical-primary", onClick: U, loading: S },
              ],
              ...P,
              children: A && (0, n.jsx)(l.w, { type: "critical", children: p.intl.string(p.t["rTU7/z"]) }),
          });
};
