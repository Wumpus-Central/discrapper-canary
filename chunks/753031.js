s.d(t, { default: () => L });
var i,
    a = s(477900),
    n = s(582128),
    r = s(562708),
    l = s(139033),
    c = s(189213),
    o = s(192308),
    d = s(97808),
    u = s(778712),
    m = s(834730),
    f = s(812993),
    E = s(512950),
    h = s(150934),
    N = s(398590),
    _ = s(966327),
    p = s(139286),
    A = s(235986),
    I = s(468689),
    x = s(773669),
    R = s(486020),
    j = s(562153),
    y = s(427262),
    O = s(652215),
    S = (((i = {}).MFA = "mfa"), (i.SMS = "sms"), (i.EMAIL = "email"), i),
    T = s(375708),
    b = s(430918);
let v = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.default.locale;
    return `https://${O.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function L(e) {
    let { guild: t, toUser: i, fromUser: x, onClose: L, transitionState: g } = e,
        [w, C] = n.useState(!1),
        F = t.features.has(O.GuildFeatures.VERIFIED) || t.features.has(O.GuildFeatures.PARTNERED),
        M = F ? T.intl.format(T.t.A37vwK, { ticketUrl: v() }) : null,
        G =
            t.features.has(O.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(O.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function k(e) {
        await I.default.transferOwnership(t.id, i.id, S.EMAIL, e);
    }
    async function P() {
        await I.default.sendTransferOwnershipPincode(t.id, !0);
    }
    async function Z(e) {
        (e.preventDefault(), L());
        try {
            x.mfaEnabled || null == x.email
                ? (await I.default.transferOwnership(t.id, i.id, x.mfaEnabled ? S.MFA : null), (0, N.jH)())
                : (await I.default.sendTransferOwnershipPincode(t.id),
                  (0, o.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([s.e("932606"), s.e("919840")]).then(s.bind(s, 79779));
                      return (t) =>
                          (0, a.jsx)(e, {
                              ...t,
                              onFormSubmit: k,
                              onResend: P,
                              onSuccess: N.jH,
                              headerText: T.intl.string(T.t.Z5s7PM),
                              confirmButtonText: T.intl.string(T.t.Z5s7PM),
                              confirmButtonVariant: "critical-primary",
                              impression: {
                                  impressionName: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                              },
                          });
                  }));
        } catch (e) {
            e.body.code === O.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, l.A)({
                    title: T.intl.string(T.t["m+nQlm"]),
                    subtitle: T.intl.format(T.t.wG747U, { server_subscription_owner_transfer_article: O.Oi0 }),
                    confirmText: T.intl.string(T.t["NX+WJN"]),
                });
        }
    }
    (0, p.A)({ type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let D = j.Ay.getNickname(t.id, void 0, i),
        H = i.hasAvatarForGuild(t.id);
    function V() {
        return (0, a.jsxs)("span", {
            className: b.v_,
            children: [
                null != t.icon
                    ? (0, a.jsx)(d.eu, {
                          src: R.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 16 }),
                          size: u._3.SIZE_16,
                          className: b.sD,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, a.jsx)(m.E, { className: b.J5, variant: "text-sm/bold", children: t.name }),
            ],
        });
    }
    return (0, a.jsx)("form", {
        onSubmit: Z,
        children: (0, a.jsxs)(c.a, {
            title: T.intl.string(T.t.Z5s7PM),
            actions: [
                { text: T.intl.string(T.t["ETE/oC"]), onClick: L, variant: "secondary" },
                { text: T.intl.string(T.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !w },
            ],
            onClose: L,
            transitionState: g,
            children: [
                (0, a.jsx)(m.E, {
                    variant: "text-sm/normal",
                    className: b.uI,
                    children:
                        null != D || H
                            ? T.intl.format(T.t.E90vgp, {
                                  GuildHook: V,
                                  user: (0, y.QV)(i),
                                  AKAHook: function () {
                                      return (0, a.jsxs)("span", {
                                          className: b.Dy,
                                          children: [
                                              (0, a.jsx)(f.Lp, {
                                                  text: T.intl.string(T.t.l1QVfj),
                                                  disableColor: !0,
                                                  className: b.RV,
                                              }),
                                              H
                                                  ? (0, a.jsx)(d.eu, {
                                                        src: i.getAvatarURL(t.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: b.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, a.jsx)(m.E, {
                                                  className: b.$R,
                                                  variant: "text-sm/normal",
                                                  children: D ?? y.Ay.getName(i),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : T.intl.format(T.t["2XLnG0"], { GuildHook: V, user: (0, y.QV)(i) }),
                }),
                (0, a.jsxs)(A.A, {
                    className: b.nS,
                    justify: A.A.Justify.CENTER,
                    children: [
                        (0, a.jsx)("div", {
                            className: b.HT,
                            children: (0, a.jsx)(_.A, { user: x, size: u._3.SIZE_80 }),
                        }),
                        (0, a.jsx)("div", {
                            className: b.to,
                            children: (0, a.jsx)(_.A, { user: i, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                G &&
                    (0, a.jsx)(E.p, {
                        messageType: E.Y.INFO,
                        className: b.rk,
                        children: T.intl.format(T.t.LAlucb, { server_subscription_owner_transfer_article: O.Oi0 }),
                    }),
                (0, a.jsx)(h.S, {
                    label: T.intl.format(T.t.xm6ACJ, { username: (0, y.QV)(i) }),
                    disabled: F,
                    checked: w,
                    onChange: function (e) {
                        C(e);
                    },
                }),
                F && (0, a.jsx)(E.p, { messageType: E.Y.WARNING, children: M }),
            ],
        }),
    });
}
