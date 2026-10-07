s.d(t, { default: () => g });
var i,
    a = s(477900),
    n = s(582128),
    r = s(562708),
    l = s(139033),
    c = s(189213),
    d = s(192308),
    o = s(97808),
    u = s(778712),
    m = s(834730),
    f = s(508770),
    E = s(512950),
    h = s(150934),
    N = s(398590),
    _ = s(966327),
    p = s(139286),
    A = s(235986),
    x = s(468689),
    I = s(773669),
    R = s(486020),
    j = s(562153),
    y = s(427262),
    O = s(652215),
    S = (((i = {}).MFA = "mfa"), (i.SMS = "sms"), (i.EMAIL = "email"), i),
    v = s(375708),
    T = s(430918);
let b = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.locale;
    return `https://${O.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function g(e) {
    let { guild: t, toUser: i, fromUser: I, onClose: g, transitionState: w } = e,
        [L, F] = n.useState(!1),
        M = t.features.has(O.GuildFeatures.VERIFIED) || t.features.has(O.GuildFeatures.PARTNERED),
        C = M ? v.intl.format(v.t.A37vwK, { ticketUrl: b() }) : null,
        G =
            t.features.has(O.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(O.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function k(e) {
        await x.default.transferOwnership(t.id, i.id, S.EMAIL, e);
    }
    async function P() {
        await x.default.sendTransferOwnershipPincode(t.id, !0);
    }
    async function Z(e) {
        (e.preventDefault(), g());
        try {
            I.mfaEnabled || null == I.email
                ? (await x.default.transferOwnership(t.id, i.id, I.mfaEnabled ? S.MFA : null), (0, N.jH)())
                : (await x.default.sendTransferOwnershipPincode(t.id),
                  (0, d.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([s.e("932606"), s.e("919840")]).then(s.bind(s, 79779));
                      return (t) =>
                          (0, a.jsx)(e, {
                              ...t,
                              onFormSubmit: k,
                              onResend: P,
                              onSuccess: N.jH,
                              headerText: v.intl.string(v.t.Z5s7PM),
                              confirmButtonText: v.intl.string(v.t.Z5s7PM),
                              confirmButtonVariant: "critical-primary",
                              impression: {
                                  impressionName: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                              },
                          });
                  }));
        } catch (e) {
            e.body.code === O.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, l.A)({
                    title: v.intl.string(v.t["m+nQlm"]),
                    subtitle: v.intl.format(v.t.wG747U, { server_subscription_owner_transfer_article: O.Oi0 }),
                    confirmText: v.intl.string(v.t["NX+WJN"]),
                });
        }
    }
    (0, p.A)({ type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let D = j.Ay.getNickname(t.id, void 0, i),
        H = i.hasAvatarForGuild(t.id);
    function V() {
        return (0, a.jsxs)("span", {
            className: T.v_,
            children: [
                null != t.icon
                    ? (0, a.jsx)(o.eu, {
                          src: R.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 16 }),
                          size: u._3.SIZE_16,
                          className: T.sD,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, a.jsx)(m.E, { className: T.J5, variant: "text-sm/bold", children: t.name }),
            ],
        });
    }
    return (0, a.jsx)("form", {
        onSubmit: Z,
        children: (0, a.jsxs)(c.a, {
            title: v.intl.string(v.t.Z5s7PM),
            actions: [
                { text: v.intl.string(v.t["ETE/oC"]), onClick: g, variant: "secondary" },
                { text: v.intl.string(v.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !L },
            ],
            onClose: g,
            transitionState: w,
            children: [
                (0, a.jsx)(m.E, {
                    variant: "text-sm/normal",
                    className: T.uI,
                    children:
                        null != D || H
                            ? v.intl.format(v.t.E90vgp, {
                                  GuildHook: V,
                                  user: (0, y.QV)(i),
                                  AKAHook: function () {
                                      return (0, a.jsxs)("span", {
                                          className: T.Dy,
                                          children: [
                                              (0, a.jsx)("span", {
                                                  className: T.RV,
                                                  children: (0, a.jsx)(f.E, {
                                                      type: { text: v.intl.string(v.t.l1QVfj) },
                                                      variant: "default",
                                                  }),
                                              }),
                                              H
                                                  ? (0, a.jsx)(o.eu, {
                                                        src: i.getAvatarURL(t.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: T.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, a.jsx)(m.E, {
                                                  className: T.$R,
                                                  variant: "text-sm/normal",
                                                  children: D ?? y.Ay.getName(i),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : v.intl.format(v.t["2XLnG0"], { GuildHook: V, user: (0, y.QV)(i) }),
                }),
                (0, a.jsxs)(A.A, {
                    className: T.nS,
                    justify: A.A.Justify.CENTER,
                    children: [
                        (0, a.jsx)("div", {
                            className: T.HT,
                            children: (0, a.jsx)(_.A, { user: I, size: u._3.SIZE_80 }),
                        }),
                        (0, a.jsx)("div", {
                            className: T.to,
                            children: (0, a.jsx)(_.A, { user: i, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                G &&
                    (0, a.jsx)(E.p, {
                        messageType: E.Y.INFO,
                        className: T.rk,
                        children: v.intl.format(v.t.LAlucb, { server_subscription_owner_transfer_article: O.Oi0 }),
                    }),
                (0, a.jsx)(h.S, {
                    label: v.intl.format(v.t.xm6ACJ, { username: (0, y.QV)(i) }),
                    disabled: M,
                    checked: L,
                    onChange: function (e) {
                        F(e);
                    },
                }),
                M && (0, a.jsx)(E.p, { messageType: E.Y.WARNING, children: C }),
            ],
        }),
    });
}
