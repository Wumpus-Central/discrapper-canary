s.d(t, { default: () => b });
var i,
    n = s(477900),
    a = s(582128),
    r = s(562708),
    l = s(139033),
    c = s(189213),
    o = s(192308),
    d = s(97808),
    u = s(778712),
    m = s(834730),
    f = s(508770),
    E = s(683071),
    h = s(150934),
    _ = s(398590),
    A = s(966327),
    p = s(139286),
    N = s(235986),
    x = s(468689),
    I = s(773669),
    R = s(486020),
    j = s(562153),
    y = s(427262),
    S = s(652215),
    v = (((i = {}).MFA = "mfa"), (i.SMS = "sms"), (i.EMAIL = "email"), i),
    w = s(660183),
    O = s(430918);
let g = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.locale;
    return `https://${S.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function b(e) {
    let { guild: t, toUser: i, fromUser: I, onClose: b, transitionState: L } = e,
        [T, M] = a.useState(!1),
        C = t.features.has(S.GuildFeatures.VERIFIED) || t.features.has(S.GuildFeatures.PARTNERED),
        F = C ? w.intl.format(w.t.A37vwK, { ticketUrl: g() }) : null,
        k =
            t.features.has(S.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(S.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function G(e) {
        await x.A.transferOwnership(t.id, i.id, v.EMAIL, e);
    }
    async function P() {
        await x.A.sendTransferOwnershipPincode(t.id, !0);
    }
    async function Z(e) {
        (e.preventDefault(), b());
        try {
            I.mfaEnabled || null == I.email
                ? (await x.A.transferOwnership(t.id, i.id, I.mfaEnabled ? v.MFA : null), (0, _.jH)())
                : (await x.A.sendTransferOwnershipPincode(t.id),
                  (0, o.openModalLazy)(async () => {
                      let { default: e } = await Promise.all([s.e("932606"), s.e("919840")]).then(s.bind(s, 79779));
                      return (t) =>
                          (0, n.jsx)(e, {
                              ...t,
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
    let D = j.Ay.getNickname(t.id, void 0, i),
        H = i.hasAvatarForGuild(t.id);
    function V() {
        return (0, n.jsxs)("span", {
            className: O.v_,
            children: [
                null != t.icon
                    ? (0, n.jsx)(d.eu, {
                          src: R.Ay.getGuildIconURL({ id: t.id, icon: t.icon, size: 16 }),
                          size: u._3.SIZE_16,
                          className: O.sD,
                          "aria-hidden": !0,
                      })
                    : null,
                (0, n.jsx)(m.E, { className: O.J5, variant: "text-sm/bold", children: t.name }),
            ],
        });
    }
    return (0, n.jsx)("form", {
        onSubmit: Z,
        children: (0, n.jsxs)(c.a, {
            title: w.intl.string(w.t.Z5s7PM),
            actions: [
                { text: w.intl.string(w.t["ETE/oC"]), onClick: b, variant: "secondary" },
                { text: w.intl.string(w.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !T },
            ],
            onClose: b,
            transitionState: L,
            children: [
                (0, n.jsx)(m.E, {
                    variant: "text-sm/normal",
                    className: O.uI,
                    children:
                        null != D || H
                            ? w.intl.format(w.t.E90vgp, {
                                  GuildHook: V,
                                  user: (0, y.QV)(i),
                                  AKAHook: function () {
                                      return (0, n.jsxs)("span", {
                                          className: O.Dy,
                                          children: [
                                              (0, n.jsx)("span", {
                                                  className: O.RV,
                                                  children: (0, n.jsx)(f.E, {
                                                      type: { text: w.intl.string(w.t.l1QVfj) },
                                                      variant: "default",
                                                  }),
                                              }),
                                              H
                                                  ? (0, n.jsx)(d.eu, {
                                                        src: i.getAvatarURL(t.id, 16, !0),
                                                        size: u._3.SIZE_16,
                                                        className: O.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, n.jsx)(m.E, {
                                                  className: O.$R,
                                                  variant: "text-sm/normal",
                                                  children: D ?? y.Ay.getName(i),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : w.intl.format(w.t["2XLnG0"], { GuildHook: V, user: (0, y.QV)(i) }),
                }),
                (0, n.jsxs)(N.A, {
                    className: O.nS,
                    justify: N.A.Justify.CENTER,
                    children: [
                        (0, n.jsx)("div", {
                            className: O.HT,
                            children: (0, n.jsx)(A.A, { user: I, size: u._3.SIZE_80 }),
                        }),
                        (0, n.jsx)("div", {
                            className: O.to,
                            children: (0, n.jsx)(A.A, { user: i, size: u._3.SIZE_80 }),
                        }),
                    ],
                }),
                k &&
                    (0, n.jsx)("div", {
                        className: O.rk,
                        children: (0, n.jsx)(E.w, {
                            type: "info",
                            message: w.intl.format(w.t.LAlucb, { server_subscription_owner_transfer_article: S.Oi0 }),
                            role: "static",
                        }),
                    }),
                (0, n.jsx)(h.S, {
                    label: w.intl.format(w.t.xm6ACJ, { username: (0, y.QV)(i) }),
                    disabled: C,
                    checked: T,
                    onChange: function (e) {
                        M(e);
                    },
                }),
                null != F && (0, n.jsx)(E.w, { type: "warning", message: F, role: "static" }),
            ],
        }),
    });
}
