e.d(i, { default: () => g });
var a = e(627968),
    l = e(64700),
    n = e(189213),
    s = e(683071),
    r = e(964486),
    d = e(780964),
    u = e(858897),
    o = e(954571),
    _ = e(427262),
    c = e(677185),
    C = e(88001),
    I = e(652215),
    E = e(466919),
    p = e(985018);
let g = (t) => {
    let { subscriptionId: i, invitedUser: e, subscriptionGroupMemberId: g, onClose: P, ...k } = t,
        [m, A] = (0, l.useState)(!1),
        [N, S] = (0, l.useState)(!1),
        [T, f] = (0, l.useState)(!1);
    (0, r.Ay)(() => {
        o.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, { subscription_id: i, invited_user_id: e.id });
    });
    let U = async () => {
        o.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, { subscription_id: i, invited_user_id: e.id }),
            f(!0);
        let t = await (0, c.kE)(i, e.id, g);
        f(!1), t.ok ? P() : t.body?.code === C.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? A(!0) : S(!0);
    };
    return m
        ? (0, a.jsx)(n.Modal, {
              size: "md",
              title: p.intl.string(E.default.grjTat),
              subtitle: p.intl.string(E.default.VgTgGu),
              actions: [
                  {
                      text: p.intl.string(E.default["+YO9kw"]),
                      variant: "secondary",
                      onClick: () => {
                          (0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL), P();
                      },
                  },
              ],
              onClose: P,
              ...k,
          })
        : (0, a.jsx)(n.Modal, {
              size: "md",
              title: p.intl.string(E.default.U439m2),
              subtitle: p.intl.formatToPlainString(E.default["Sv6+Ox"], {
                  memberName: (0, _.$3)(e),
                  premiumGroupProductName: (0, C.DP)(),
              }),
              onClose: P,
              actions: [
                  { text: p.intl.string(E.default["2blqtw"]), variant: "critical-primary", onClick: U, loading: T },
              ],
              ...k,
              children: N && (0, a.jsx)(s.w, { type: "critical", children: p.intl.string(p.t["rTU7/z"]) }),
          });
};
