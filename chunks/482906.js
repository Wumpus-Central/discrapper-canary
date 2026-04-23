t.d(s, { default: () => O });
var i = t(627968),
    a = t(64700),
    n = t(110259),
    r = t(139033),
    l = t(189213),
    c = t(192308),
    o = t(97808),
    d = t(778712),
    u = t(834730),
    _ = t(777666),
    m = t(512950),
    f = t(150934),
    p = t(398590),
    E = t(966327),
    N = t(139286),
    h = t(235986),
    A = t(997509),
    I = t(773669),
    x = t(486020),
    R = t(562153),
    T = t(427262),
    j = t(652215),
    S = t(598380),
    g = t(985018),
    y = t(605019);
let v = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I.default.locale;
    return `https://${j.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function O(e) {
    let { guild: s, toUser: I, fromUser: O, onClose: b, transitionState: F } = e,
        [L, k] = a.useState(!1),
        w = s.features.has(j.GuildFeatures.VERIFIED) || s.features.has(j.GuildFeatures.PARTNERED),
        M = w ? g.intl.format(g.t.A37vwK, { ticketUrl: v() }) : null,
        C =
            s.features.has(j.GuildFeatures.CREATOR_MONETIZABLE) ||
            s.features.has(j.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function G(e) {
        await A.A.transferOwnership(s.id, I.id, S.F.EMAIL, e);
    }
    async function H() {
        await A.A.sendTransferOwnershipPincode(s.id, !0);
    }
    async function D(e) {
        e.preventDefault(), b();
        try {
            O.mfaEnabled || null == O.email
                ? (await A.A.transferOwnership(s.id, I.id, O.mfaEnabled ? S.F.MFA : null), (0, p.jH)())
                : (await A.A.sendTransferOwnershipPincode(s.id),
                  (0, c.openModalLazy)(async () => {
                      let { default: e } = await t.e("19840").then(t.bind(t, 79779));
                      return (s) =>
                          (0, i.jsx)(e, {
                              ...s,
                              onFormSubmit: G,
                              onResend: H,
                              onSuccess: p.jH,
                              headerText: g.intl.string(g.t.Z5s7PM),
                              confirmButtonText: g.intl.string(g.t.Z5s7PM),
                              confirmButtonVariant: "critical-primary",
                              impression: {
                                  impressionName: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                              },
                          });
                  }));
        } catch (e) {
            e.body.code === j.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, r.A)({
                    title: g.intl.string(g.t["m+nQlm"]),
                    subtitle: g.intl.format(g.t.wG747U, { server_subscription_owner_transfer_article: j.Oi0 }),
                    confirmText: g.intl.string(g.t["NX+WJN"]),
                });
        }
    }
    (0, N.A)({ type: n.ImpressionTypes.MODAL, name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let P = R.Ay.getNickname(s.id, void 0, I),
        V = I.hasAvatarForGuild(s.id),
        Z = () =>
            (0, i.jsxs)("span", {
                className: y.v_,
                children: [
                    null != s.icon
                        ? (0, i.jsx)(o.eu, {
                              src: x.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 16 }),
                              size: d._3.SIZE_16,
                              className: y.sD,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(u.E, { className: y.J5, variant: "text-sm/bold", children: s.name }),
                ],
            });
    return (0, i.jsx)("form", {
        onSubmit: D,
        children: (0, i.jsxs)(l.Modal, {
            title: g.intl.string(g.t.Z5s7PM),
            actions: [
                { text: g.intl.string(g.t["ETE/oC"]), onClick: b, variant: "secondary" },
                { text: g.intl.string(g.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !L },
            ],
            onClose: b,
            transitionState: F,
            children: [
                (0, i.jsx)(u.E, {
                    variant: "text-sm/normal",
                    className: y.uI,
                    children:
                        null != P || V
                            ? g.intl.format(g.t.E90vgp, {
                                  GuildHook: Z,
                                  user: (0, T.QV)(I),
                                  AKAHook: function () {
                                      return (0, i.jsxs)("span", {
                                          className: y.Dy,
                                          children: [
                                              (0, i.jsx)(_.Lp, {
                                                  text: g.intl.string(g.t.l1QVfj),
                                                  disableColor: !0,
                                                  className: y.RV,
                                              }),
                                              V
                                                  ? (0, i.jsx)(o.eu, {
                                                        src: I.getAvatarURL(s.id, 16, !0),
                                                        size: d._3.SIZE_16,
                                                        className: y.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, i.jsx)(u.E, {
                                                  className: y.$R,
                                                  variant: "text-sm/normal",
                                                  children: P ?? T.Ay.getName(I),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : g.intl.format(g.t["2XLnG0"], { GuildHook: Z, user: (0, T.QV)(I) }),
                }),
                (0, i.jsxs)(h.A, {
                    className: y.nS,
                    justify: h.A.Justify.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            className: y.HT,
                            children: (0, i.jsx)(E.A, { user: O, size: d._3.SIZE_80 }),
                        }),
                        (0, i.jsx)("div", {
                            className: y.to,
                            children: (0, i.jsx)(E.A, { user: I, size: d._3.SIZE_80 }),
                        }),
                    ],
                }),
                C &&
                    (0, i.jsx)(m.p, {
                        messageType: m.Y.INFO,
                        className: y.rk,
                        children: g.intl.format(g.t.LAlucb, { server_subscription_owner_transfer_article: j.Oi0 }),
                    }),
                (0, i.jsx)(f.S, {
                    label: g.intl.format(g.t.xm6ACJ, { username: (0, T.QV)(I) }),
                    disabled: w,
                    checked: L,
                    onChange: function (e) {
                        k(e);
                    },
                }),
                w && (0, i.jsx)(m.p, { messageType: m.Y.WARNING, children: M }),
            ],
        }),
    });
}
