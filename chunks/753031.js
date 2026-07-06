t.d(s, { default: () => L });
var i,
    n = t(627968),
    a = t(64700),
    r = t(562708),
    l = t(139033),
    c = t(189213),
    o = t(192308),
    d = t(97808),
    u = t(778712),
    m = t(834730),
    f = t(812993),
    E = t(512950),
    h = t(150934),
    N = t(398590),
    _ = t(966327),
    A = t(139286),
    p = t(235986),
    I = t(468689),
    x = t(773669),
    R = t(486020),
    j = t(562153),
    y = t(427262),
    O = t(652215),
    S = (((i = {}).MFA = "mfa"), (i.SMS = "sms"), (i.EMAIL = "email"), i),
    T = t(375708),
    b = t(605019);
let v = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.default.locale;
    return `https://${O.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function L(e) {
    let { guild: s, toUser: i, fromUser: x, onClose: L, transitionState: g } = e,
        [w, M] = a.useState(!1),
        C = s.features.has(O.GuildFeatures.VERIFIED) || s.features.has(O.GuildFeatures.PARTNERED),
        F = C ? T.intl.format(T.t.A37vwK, { ticketUrl: v() }) : null,
        G =
            s.features.has(O.GuildFeatures.CREATOR_MONETIZABLE) ||
            s.features.has(O.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function k(e) {
        await I.A.transferOwnership(s.id, i.id, S.EMAIL, e);
    }
    async function P() {
        await I.A.sendTransferOwnershipPincode(s.id, !0);
    }
    async function Z(e) {
        e.preventDefault(), L();
        try {
            x.mfaEnabled || null == x.email
                ? (await I.A.transferOwnership(s.id, i.id, x.mfaEnabled ? S.MFA : null), (0, N.jH)())
                : (await I.A.sendTransferOwnershipPincode(s.id),
                  (0, o.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([t.e("32606"), t.e("19840")]).then(t.bind(t, 79779));
                      return (s) =>
                          (0, n.jsx)(e, {
                              ...s,
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
    (0, A.A)({ type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let D = j.Ay.getNickname(s.id, void 0, i),
        H = i.hasAvatarForGuild(s.id);
    function V() {
        return (0, n.jsxs)("span", {
            className: b.v_,
            children: [
                null != s.icon
                    ? (0, n.jsx)(d.eu, {
                          src: R.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 16 }),
                          size: u._3.SIZE_16,
                          className: b.sD,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, n.jsx)(m.E, { className: b.J5, variant: "text-sm/bold", children: s.name }),
            ],
        });
    }
    return (0, n.jsx)("form", {
        onSubmit: Z,
        children: (0, n.jsxs)(c.Modal, {
            title: T.intl.string(T.t.Z5s7PM),
            actions: [
                { text: T.intl.string(T.t["ETE/oC"]), onClick: L, variant: "secondary" },
                { text: T.intl.string(T.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !w },
            ],
            onClose: L,
            transitionState: g,
            children: [
                (0, n.jsx)(m.E, {
                    variant: "text-sm/normal",
                    className: b.uI,
                    children:
                        null != D || H
                            ? T.intl.format(T.t.E90vgp, {
                                  GuildHook: V,
                                  user: (0, y.QV)(i),
                                  AKAHook: function () {
                                      return (0, n.jsxs)("span", {
                                          className: b.Dy,
                                          children: [
                                              (0, n.jsx)(f.Lp, {
                                                  text: T.intl.string(T.t.l1QVfj),
                                                  disableColor: !0,
                                                  className: b.RV,
                                              }),
                                              H
                                                  ? (0, n.jsx)(d.eu, {
                                                        src: i.getAvatarURL(s.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: b.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, n.jsx)(m.E, {
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
                (0, n.jsxs)(p.A, {
                    className: b.nS,
                    justify: p.A.Justify.CENTER,
                    children: [
                        (0, n.jsx)("div", {
                            className: b.HT,
                            children: (0, n.jsx)(_.A, { user: x, size: u._3.SIZE_80 }),
                        }),
                        (0, n.jsx)("div", {
                            className: b.to,
                            children: (0, n.jsx)(_.A, { user: i, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                G &&
                    (0, n.jsx)(E.p, {
                        messageType: E.Y.INFO,
                        className: b.rk,
                        children: T.intl.format(T.t.LAlucb, { server_subscription_owner_transfer_article: O.Oi0 }),
                    }),
                (0, n.jsx)(h.S, {
                    label: T.intl.format(T.t.xm6ACJ, { username: (0, y.QV)(i) }),
                    disabled: C,
                    checked: w,
                    onChange: function (e) {
                        M(e);
                    },
                }),
                C && (0, n.jsx)(E.p, { messageType: E.Y.WARNING, children: F }),
            ],
        }),
    });
}
