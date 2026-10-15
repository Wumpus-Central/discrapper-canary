t.d(s, { default: () => b });
var n,
    i = t(477900),
    a = t(582128),
    r = t(562708),
    l = t(139033),
    o = t(189213),
    c = t(192308),
    d = t(97808),
    u = t(778712),
    m = t(834730),
    f = t(62010),
    E = t(683071),
    h = t(150934),
    _ = t(398590),
    A = t(966327),
    p = t(139286),
    N = t(235986),
    x = t(468689),
    I = t(773669),
    R = t(486020),
    j = t(562153),
    y = t(427262),
    S = t(652215),
    v = (((n = {}).MFA = "mfa"), (n.SMS = "sms"), (n.EMAIL = "email"), n),
    w = t(105292),
    O = t(430918);
let g = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.locale;
    return `https://${S.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function b(e) {
    let { guild: s, toUser: n, fromUser: I, onClose: b, transitionState: L } = e,
        [T, M] = a.useState(!1),
        C = s.features.has(S.GuildFeatures.VERIFIED) || s.features.has(S.GuildFeatures.PARTNERED),
        F = C ? w.intl.format(w.t.A37vwK, { ticketUrl: g() }) : null,
        k =
            s.features.has(S.GuildFeatures.CREATOR_MONETIZABLE) ||
            s.features.has(S.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function G(e) {
        await x.A.transferOwnership(s.id, n.id, v.EMAIL, e);
    }
    async function P() {
        await x.A.sendTransferOwnershipPincode(s.id, !0);
    }
    async function Z(e) {
        (e.preventDefault(), b());
        try {
            I.mfaEnabled || null == I.email
                ? (await x.A.transferOwnership(s.id, n.id, I.mfaEnabled ? v.MFA : null), (0, _.jH)())
                : (await x.A.sendTransferOwnershipPincode(s.id),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([t.e("932606"), t.e("919840")]).then(t.bind(t, 79779));
                      return (s) =>
                          (0, i.jsx)(e, {
                              ...s,
                              onFormSubmit: G,
                              onResend: P,
                              onSuccess: _.jH,
                              headerText: w.intl.string(w.t.Z5s7PM),
                              confirmButtonText: w.intl.string(w.t.Z5s7PM),
                              confirmButtonVariant: "critical-primary",
                              impression: {
                                  impressionName: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                              },
                          });
                  }));
        } catch (e) {
            e.body.code === S.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, l.A)({
                    title: w.intl.string(w.t["m+nQlm"]),
                    subtitle: w.intl.format(w.t.wG747U, { server_subscription_owner_transfer_article: S.Oi0 }),
                    confirmText: w.intl.string(w.t["NX+WJN"]),
                });
        }
    }
    (0, p.A)({ type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let D = j.Ay.getNickname(s.id, void 0, n),
        H = n.hasAvatarForGuild(s.id);
    function V() {
        return (0, i.jsxs)("span", {
            className: O.v_,
            children: [
                null != s.icon
                    ? (0, i.jsx)(d.eu, {
                          src: R.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 16 }),
                          size: u._3.SIZE_16,
                          className: O.sD,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, i.jsx)(m.E, { className: O.J5, variant: "text-sm/bold", children: s.name }),
            ],
        });
    }
    return (0, i.jsx)("form", {
        onSubmit: Z,
        children: (0, i.jsxs)(o.a, {
            title: w.intl.string(w.t.Z5s7PM),
            actions: [
                { text: w.intl.string(w.t["ETE/oC"]), onClick: b, variant: "secondary" },
                { text: w.intl.string(w.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !T },
            ],
            onClose: b,
            transitionState: L,
            children: [
                (0, i.jsx)(m.E, {
                    variant: "text-sm/normal",
                    className: O.uI,
                    children:
                        null != D || H
                            ? w.intl.format(w.t.E90vgp, {
                                  GuildHook: V,
                                  user: (0, y.QV)(n),
                                  AKAHook: function () {
                                      return (0, i.jsxs)("span", {
                                          className: O.Dy,
                                          children: [
                                              (0, i.jsx)("span", {
                                                  className: O.RV,
                                                  children: (0, i.jsx)(f.E, {
                                                      type: { text: w.intl.string(w.t.l1QVfj) },
                                                      variant: "secondary",
                                                  }),
                                              }),
                                              H
                                                  ? (0, i.jsx)(d.eu, {
                                                        src: n.getAvatarURL(s.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: O.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, i.jsx)(m.E, {
                                                  className: O.$R,
                                                  variant: "text-sm/normal",
                                                  children: D ?? y.Ay.getName(n),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : w.intl.format(w.t["2XLnG0"], { GuildHook: V, user: (0, y.QV)(n) }),
                }),
                (0, i.jsxs)(N.A, {
                    className: O.nS,
                    justify: N.A.Justify.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            className: O.HT,
                            children: (0, i.jsx)(A.A, { user: I, size: u._3.SIZE_80 }),
                        }),
                        (0, i.jsx)("div", {
                            className: O.to,
                            children: (0, i.jsx)(A.A, { user: n, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                k &&
                    (0, i.jsx)("div", {
                        className: O.rk,
                        children: (0, i.jsx)(E.w, {
                            type: "info",
                            message: w.intl.format(w.t.LAlucb, { server_subscription_owner_transfer_article: S.Oi0 }),
                            role: "none",
                        }),
                    }),
                (0, i.jsx)(h.S, {
                    label: w.intl.format(w.t.xm6ACJ, { username: (0, y.QV)(n) }),
                    disabled: C,
                    checked: T,
                    onChange: function (e) {
                        M(e);
                    },
                }),
                null != F && (0, i.jsx)(E.w, { type: "warning", message: F, role: "none" }),
            ],
        }),
    });
}
