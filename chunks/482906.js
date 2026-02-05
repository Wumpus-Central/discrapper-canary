t.d(s, { default: () => T });
var i = t(627968),
    a = t(64700),
    n = t(110259),
    r = t(139033),
    l = t(732955),
    c = t(397927),
    o = t(398590),
    d = t(966327),
    u = t(139286),
    m = t(235986),
    _ = t(997509),
    f = t(773669),
    p = t(486020),
    h = t(562153),
    N = t(427262),
    A = t(652215),
    x = t(598380),
    E = t(985018),
    I = t(113684);
let R = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
    return `https://${A.XlF}/hc/${e.toLowerCase()}/requests/new?ticket_form_id=360000168511`;
};
function T(e) {
    let { guild: s, toUser: f, fromUser: T, onClose: j, transitionState: S } = e,
        [g, O] = a.useState(!1),
        b = s.features.has(A.GuildFeatures.VERIFIED) || s.features.has(A.GuildFeatures.PARTNERED),
        v = b ? E.intl.format(E.t.A37vwK, { ticketUrl: R() }) : null,
        y =
            s.features.has(A.GuildFeatures.CREATOR_MONETIZABLE) ||
            s.features.has(A.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function F(e) {
        await _.A.transferOwnership(s.id, f.id, x.F.EMAIL, e);
    }
    async function k() {
        await _.A.sendTransferOwnershipPincode(s.id, !0);
    }
    async function C(e) {
        e.preventDefault(), j();
        try {
            T.mfaEnabled || null == T.email
                ? (await _.A.transferOwnership(s.id, f.id, T.mfaEnabled ? x.F.MFA : null), (0, o.jH)())
                : (await _.A.sendTransferOwnershipPincode(s.id),
                  (0, c.mMO)(async () => {
                      let { default: e } = await t.e("19840").then(t.bind(t, 79779));
                      return (s) =>
                          (0, i.jsx)(e, {
                              ...s,
                              onFormSubmit: F,
                              onResend: k,
                              onSuccess: o.jH,
                              headerText: E.intl.string(E.t.Z5s7PM),
                              confirmButtonText: E.intl.string(E.t.Z5s7PM),
                              confirmButtonVariant: "critical-primary",
                              impression: {
                                  impressionName: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                              },
                          });
                  }));
        } catch (e) {
            e.body.code === A.t02.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, r.A)({
                    title: E.intl.string(E.t["m+nQlm"]),
                    subtitle: E.intl.format(E.t.wG747U, { server_subscription_owner_transfer_article: A.Oi0 }),
                    confirmText: E.intl.string(E.t["NX+WJN"]),
                });
        }
    }
    (0, u.A)({ type: n.ImpressionTypes.MODAL, name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP });
    let w = h.Ay.getNickname(s.id, void 0, f),
        L = f.hasAvatarForGuild(s.id),
        G = () =>
            (0, i.jsxs)("span", {
                className: I.v_,
                children: [
                    null != s.icon
                        ? (0, i.jsx)(c.euF, {
                              src: p.Ay.getGuildIconURL({ id: s.id, icon: s.icon, size: 16 }),
                              size: c._3J.SIZE_16,
                              className: I.sD,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, i.jsx)(c.Text, { className: I.J5, variant: "text-sm/bold", children: s.name }),
                ],
            });
    return (0, i.jsx)("form", {
        onSubmit: C,
        children: (0, i.jsxs)(l.aFV, {
            title: E.intl.string(E.t.Z5s7PM),
            actions: [
                { text: E.intl.string(E.t["ETE/oC"]), onClick: j, variant: "secondary" },
                { text: E.intl.string(E.t.Z5s7PM), variant: "critical-primary", type: "submit", disabled: !g },
            ],
            onClose: j,
            transitionState: S,
            children: [
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    className: I.uI,
                    children:
                        null != w || L
                            ? E.intl.format(E.t.E90vgp, {
                                  GuildHook: G,
                                  user: (0, N.QV)(f),
                                  AKAHook: function () {
                                      return (0, i.jsxs)("span", {
                                          className: I.Dy,
                                          children: [
                                              (0, i.jsx)(c.LpS, {
                                                  text: E.intl.string(E.t.l1QVfj),
                                                  disableColor: !0,
                                                  className: I.RV,
                                              }),
                                              L
                                                  ? (0, i.jsx)(c.euF, {
                                                        src: f.getAvatarURL(s.id, 16, !0),
                                                        size: c._3J.SIZE_16,
                                                        className: I.H,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, i.jsx)(c.Text, {
                                                  className: I.$R,
                                                  variant: "text-sm/normal",
                                                  children: w ?? N.Ay.getName(f),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : E.intl.format(E.t["2XLnG0"], { GuildHook: G, user: (0, N.QV)(f) }),
                }),
                (0, i.jsxs)(m.A, {
                    className: I.nS,
                    justify: m.A.Justify.CENTER,
                    children: [
                        (0, i.jsx)("div", {
                            className: I.HT,
                            children: (0, i.jsx)(d.A, { user: T, size: c._3J.SIZE_80 }),
                        }),
                        (0, i.jsx)("div", {
                            className: I.to,
                            children: (0, i.jsx)(d.A, { user: f, size: c._3J.SIZE_80 }),
                        }),
                    ],
                }),
                y &&
                    (0, i.jsx)(c.po8, {
                        messageType: c.YCn.INFO,
                        className: I.rk,
                        children: E.intl.format(E.t.LAlucb, { server_subscription_owner_transfer_article: A.Oi0 }),
                    }),
                (0, i.jsx)(c.Checkbox, {
                    label: E.intl.format(E.t.xm6ACJ, { username: (0, N.QV)(f) }),
                    disabled: b,
                    checked: g,
                    onChange: function (e) {
                        O(e);
                    },
                }),
                b && (0, i.jsx)(c.po8, { messageType: c.YCn.WARNING, children: v }),
            ],
        }),
    });
}
