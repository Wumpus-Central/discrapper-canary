t.d(s, { default: () => v });
var i,
    a = t(627968),
    n = t(64700),
    r = t(110259),
    l = t(139033),
    c = t(189213),
    o = t(192308),
    d = t(97808),
    u = t(778712),
    _ = t(834730),
    m = t(777666),
    f = t(512950),
    p = t(150934),
    E = t(398590),
    N = t(966327),
    h = t(139286),
    A = t(235986),
    I = t(997509),
    x = t(773669),
    R = t(486020),
    T = t(562153),
    j = t(427262),
    S = t(652215),
    g = (((i = {}).MFA = "mfa"), (i.SMS = "sms"), (i.EMAIL = "email"), i),
    y = t(985018),
    O = t(605019);
let b = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.default.locale;
    return `https://${S.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function v(e) {
    let { guild: s, toUser: i, fromUser: x, onClose: v, transitionState: L } = e,
        [k, w] = n.useState(!1),
        M = s.features.has(S.GuildFeatures.VERIFIED) || s.features.has(S.GuildFeatures.PARTNERED),
        C = M ? y.intl.format(y.t.A37vwK, { ticketUrl: b() }) : null,
        F =
            s.features.has(S.GuildFeatures.CREATOR_MONETIZABLE) ||
            s.features.has(S.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function G(e) {
        await I.A.transferOwnership(s.id, i.id, g.EMAIL, e);
    }
    async function H() {
        await I.A.sendTransferOwnershipPincode(s.id, !0);
    }
    async function D(e) {
        e.preventDefault(), v();
        try {
            x.mfaEnabled || null == x.email
                ? (await I.A.transferOwnership(s.id, i.id, x.mfaEnabled ? g.MFA : null), (0, E.jH)())
                : (await I.A.sendTransferOwnershipPincode(s.id),
                  (0, o.openModalLazy)(async () => {
                      let { default: e } = await t.e("19840").then(t.bind(t, 79779));
                      return (s) =>
                          (0, a.jsx)(e, {
                              ...s,
                              onFormSubmit: G,
                              onResend: H,
                              onSuccess: E.jH,
                              headerText: y.intl.string(y.t.Z5s7PM),
                              confirmButtonText: y.intl.string(y.t.Z5s7PM),
                              confirmButtonVariant: "critical-primary",
                              impression: {
                                  impressionName: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                              },
                          });
                  }));
        } catch (e) {
            e.body.code === S.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, l.A)({
                    title: y.intl.string(y.t["m+nQlm"]),
                    subtitle: y.intl.format(y.t.wG747U, { server_subscription_owner_transfer_article: S.Oi0 }),
                    confirmText: y.intl.string(y.t["NX+WJN"]),
                });
        }
    }
    (0, h.A)({ type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let P = T.Ay.getNickname(s.id, void 0, i),
        V = i.hasAvatarForGuild(s.id),
        Z = () =>
            (0, a.jsxs)("span", {
                className: O.v_,
                children: [
                    null != s.icon
                        ? (0, a.jsx)(d.eu, {
                              src: R.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 16 }),
                              size: u._3.SIZE_16,
                              className: O.sD,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(_.E, { className: O.J5, variant: "text-sm/bold", children: s.name }),
                ],
            });
    return (0, a.jsx)("form", {
        onSubmit: D,
        children: (0, a.jsxs)(c.Modal, {
            title: y.intl.string(y.t.Z5s7PM),
            actions: [
                { text: y.intl.string(y.t["ETE/oC"]), onClick: v, variant: "secondary" },
                { text: y.intl.string(y.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !k },
            ],
            onClose: v,
            transitionState: L,
            children: [
                (0, a.jsx)(_.E, {
                    variant: "text-sm/normal",
                    className: O.uI,
                    children:
                        null != P || V
                            ? y.intl.format(y.t.E90vgp, {
                                  GuildHook: Z,
                                  user: (0, j.QV)(i),
                                  AKAHook: function () {
                                      return (0, a.jsxs)("span", {
                                          className: O.Dy,
                                          children: [
                                              (0, a.jsx)(m.Lp, {
                                                  text: y.intl.string(y.t.l1QVfj),
                                                  disableColor: !0,
                                                  className: O.RV,
                                              }),
                                              V
                                                  ? (0, a.jsx)(d.eu, {
                                                        src: i.getAvatarURL(s.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: O.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, a.jsx)(_.E, {
                                                  className: O.$R,
                                                  variant: "text-sm/normal",
                                                  children: P ?? j.Ay.getName(i),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : y.intl.format(y.t["2XLnG0"], { GuildHook: Z, user: (0, j.QV)(i) }),
                }),
                (0, a.jsxs)(A.A, {
                    className: O.nS,
                    justify: A.A.Justify.CENTER,
                    children: [
                        (0, a.jsx)("div", {
                            className: O.HT,
                            children: (0, a.jsx)(N.A, { user: x, size: u._3.SIZE_80 }),
                        }),
                        (0, a.jsx)("div", {
                            className: O.to,
                            children: (0, a.jsx)(N.A, { user: i, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                F &&
                    (0, a.jsx)(f.p, {
                        messageType: f.Y.INFO,
                        className: O.rk,
                        children: y.intl.format(y.t.LAlucb, { server_subscription_owner_transfer_article: S.Oi0 }),
                    }),
                (0, a.jsx)(p.S, {
                    label: y.intl.format(y.t.xm6ACJ, { username: (0, j.QV)(i) }),
                    disabled: M,
                    checked: k,
                    onChange: function (e) {
                        w(e);
                    },
                }),
                M && (0, a.jsx)(f.p, { messageType: f.Y.WARNING, children: C }),
            ],
        }),
    });
}
