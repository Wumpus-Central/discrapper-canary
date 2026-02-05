e.d(i, { default: () => S });
var a = e(627968),
    n = e(64700),
    s = e(158954),
    l = e(397927),
    r = e(964486),
    d = e(780964),
    u = e(840065),
    c = e(954571),
    o = e(427262),
    _ = e(677185),
    C = e(88001),
    I = e(652215),
    E = e(519412),
    p = e(985018);
let S = (t) => {
    let { subscriptionId: i, invitedUser: e, subscriptionGroupMemberId: S, onClose: P, ...g } = t,
        [N, T] = (0, n.useState)(!1),
        [k, m] = (0, n.useState)(!1),
        [A, U] = (0, n.useState)(!1);
    (0, r.Ay)(() => {
        c.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_MODAL_VIEWED, { subscription_id: i, invited_user_id: e.id });
    });
    let f = async () => {
        c.default.track(I.HAw.PREMIUM_GROUP_CANCEL_INVITE_CTA_CLICKED, { subscription_id: i, invited_user_id: e.id }),
            U(!0);
        let t = await (0, _.kE)(i, e.id, S);
        U(!1), t.ok ? P() : t.body?.code === C.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? T(!0) : m(!0);
    };
    return N
        ? (0, a.jsx)(s.Modal, {
              size: "md",
              title: p.intl.string(E.default.grjTat),
              subtitle: p.intl.string(E.default.VgTgGu),
              actions: [
                  {
                      text: p.intl.string(E.default["+YO9kw"]),
                      variant: "secondary",
                      onClick: () => {
                          (0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL, { section: I.nc_.SUBSCRIPTIONS }), P();
                      },
                  },
              ],
              onClose: P,
              ...g,
          })
        : (0, a.jsx)(s.Modal, {
              size: "md",
              title: p.intl.string(E.default.U439m2),
              subtitle: p.intl.formatToPlainString(E.default["Sv6+Ox"], {
                  memberName: (0, o.$3)(e),
                  premiumGroupProductName: (0, C.DP)(),
              }),
              onClose: P,
              actions: [
                  { text: p.intl.string(E.default["2blqtw"]), variant: "critical-primary", onClick: f, loading: A },
              ],
              ...g,
              children: k && (0, a.jsx)(l.wx6, { type: "critical", children: p.intl.string(p.t["rTU7/z"]) }),
          });
};
