t.d(r, { default: () => y }), t(388685);
var n = t(951288),
    i = t(647438),
    a = t(990547),
    s = t(755721),
    c = t(481060),
    o = t(37234),
    l = t(700582),
    d = t(213609),
    u = t(600164),
    m = t(434404),
    f = t(706454),
    p = t(768581),
    _ = t(5192),
    h = t(51144),
    x = t(981631),
    E = t(179839),
    j = t(388032),
    N = t(883287);
function T(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {},
            n = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            n.forEach(function (r) {
                var n;
                (n = t[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = n);
            });
    }
    return e;
}
function b(e, r) {
    return (
        (r = null != r ? r : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              }),
        e
    );
}
let O = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
    return "https://".concat(x.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
};
function y(e) {
    let { guild: r, toUser: f, fromUser: y, onClose: g, transitionState: I } = e,
        [R, v] = i.useState(!1),
        w = r.features.has(x.oNc.VERIFIED) || r.features.has(x.oNc.PARTNERED),
        S = w ? j.intl.string(j.t.wDkfrK) : null,
        P = w ? j.intl.format(j.t.A37vwM, { ticketUrl: O() }) : null,
        A = r.features.has(x.oNc.CREATOR_MONETIZABLE) || r.features.has(x.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    async function k(e) {
        await m.Z.transferOwnership(r.id, f.id, E.X.EMAIL, e);
    }
    async function Z() {
        await m.Z.sendTransferOwnershipPincode(r.id, !0);
    }
    async function D(e) {
        e.preventDefault(), g();
        try {
            y.mfaEnabled || null == y.email
                ? (await m.Z.transferOwnership(r.id, f.id, y.mfaEnabled ? E.X.MFA : null), (0, o.xf)())
                : (await m.Z.sendTransferOwnershipPincode(r.id),
                  (0, c.ZDy)(async () => {
                      let { default: e } = await t.e("56499").then(t.bind(t, 433570));
                      return (r) =>
                          (0, n.jsx)(
                              e,
                              b(T({}, r), {
                                  onFormSubmit: k,
                                  onResend: Z,
                                  onSuccess: o.xf,
                                  headerText: j.intl.string(j.t.Z5s7PD),
                                  confirmButtonText: j.intl.string(j.t.Z5s7PD),
                                  confirmButtonVariant: "critical-primary",
                                  impression: {
                                      impressionName: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                                  },
                              }),
                          );
                  }));
        } catch (e) {
            e.body.code === x.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, c.h7j)((e) =>
                    (0, n.jsx)(
                        c.ConfirmModal,
                        b(T({}, e), {
                            header: j.intl.string(j.t["m+nQlp"]),
                            confirmText: j.intl.string(j.t["NX+WJC"]),
                            confirmButtonColor: s.zx.Colors.BRAND,
                            children: (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: j.intl.format(j.t.wG747e, {
                                    server_subscription_owner_transfer_article: x.T23,
                                }),
                            }),
                        }),
                    ),
                );
        }
    }
    (0, d.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
    });
    let C = _.ZP.getNickname(r.id, void 0, f),
        L = f.hasAvatarForGuild(r.id),
        F = () =>
            (0, n.jsxs)("span", {
                className: N.guildTransfer,
                children: [
                    null != r.icon
                        ? (0, n.jsx)(c.qEK, {
                              src: p.ZP.getGuildIconURL({
                                  id: r.id,
                                  icon: r.icon,
                                  size: 16,
                              }),
                              size: c.EFr.SIZE_16,
                              className: N.miniGuildIcon,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(c.Text, {
                        className: N.guildName,
                        variant: "text-sm/bold",
                        children: r.name,
                    }),
                ],
            });
    return (0, n.jsx)(c.Y0X, {
        transitionState: I,
        parentComponent: "TransferOwnership",
        children: (0, n.jsxs)("form", {
            onSubmit: D,
            children: [
                (0, n.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        className: N.header,
                        children: j.intl.string(j.t.Z5s7PD),
                    }),
                }),
                (0, n.jsxs)(c.hzk, {
                    children: [
                        (0, n.jsx)(c.R94, {
                            type: c.R94.Types.DESCRIPTION,
                            className: N.subHeader,
                            children:
                                null != C || L
                                    ? j.intl.format(j.t.E90vgo, {
                                          GuildHook: F,
                                          user: (0, h.W5)(f),
                                          AKAHook: function () {
                                              return (0, n.jsxs)("span", {
                                                  className: N.akaTransfer,
                                                  children: [
                                                      (0, n.jsx)(c.IGR, {
                                                          text: j.intl.string(j.t.l1QVfn),
                                                          disableColor: !0,
                                                          className: N.akaBadge,
                                                      }),
                                                      L
                                                          ? (0, n.jsx)(c.qEK, {
                                                                src: f.getAvatarURL(r.id, 16, !0),
                                                                size: c.EFr.SIZE_16,
                                                                className: N.miniAvatar,
                                                                "aria-hidden": !0,
                                                            })
                                                          : null,
                                                      (0, n.jsx)(c.Text, {
                                                          className: N.nickname,
                                                          variant: "text-sm/normal",
                                                          children: null != C ? C : h.ZP.getName(f),
                                                      }),
                                                  ],
                                              });
                                          },
                                      })
                                    : j.intl.format(j.t["2XLnGx"], {
                                          GuildHook: F,
                                          user: (0, h.W5)(f),
                                      }),
                        }),
                        (0, n.jsxs)(u.Z, {
                            className: N.fromToWrapper,
                            justify: u.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)("div", {
                                    className: N.from,
                                    children: (0, n.jsx)(l.Z, {
                                        user: y,
                                        size: c.EFr.SIZE_80,
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: N.to,
                                    children: (0, n.jsx)(l.Z, {
                                        user: f,
                                        size: c.EFr.SIZE_80,
                                    }),
                                }),
                            ],
                        }),
                        A &&
                            (0, n.jsx)(c.R94, {
                                type: c.R94.Types.DESCRIPTION,
                                className: N.roleSubscriptionText,
                                children: j.intl.format(j.t.LAlucX, {
                                    server_subscription_owner_transfer_article: x.T23,
                                }),
                            }),
                        (0, n.jsx)(c.j7V, {
                            disabled: w,
                            tooltipNote: S,
                            hideBorder: !0,
                            value: R,
                            onChange: function (e) {
                                v(e);
                            },
                            children: (0, n.jsx)(c.R94, {
                                type: c.R94.Types.DESCRIPTION,
                                children: j.intl.format(j.t.xm6ACA, { username: (0, h.W5)(f) }),
                            }),
                        }),
                        (0, n.jsx)(c.R94, {
                            className: N.protectedText,
                            type: c.R94.Types.DEFAULT,
                            children: P,
                        }),
                    ],
                }),
                (0, n.jsx)(c.mzw, {
                    children: (0, n.jsxs)(c.hE2, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, n.jsx)(c.zxk, {
                                variant: "critical-primary",
                                text: j.intl.string(j.t.Z5s7PD),
                                type: "submit",
                                disabled: !R,
                            }),
                            (0, n.jsx)(c.zxk, {
                                variant: "secondary",
                                text: j.intl.string(j.t["ETE/oK"]),
                                onClick: g,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
