n.d(r, { default: () => T }), n(388685);
var t = n(951288),
    i = n(647438),
    a = n(990547),
    s = n(755721),
    c = n(481060),
    o = n(37234),
    l = n(700582),
    d = n(213609),
    u = n(600164),
    m = n(434404),
    f = n(706454),
    p = n(768581),
    _ = n(5192),
    h = n(51144),
    x = n(981631),
    b = n(179839),
    j = n(388032),
    E = n(883287);
function N(e) {
    for (var r = 1; r < arguments.length; r++) {
        var n = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            t.forEach(function (r) {
                var t;
                (t = n[r]),
                    r in e
                        ? Object.defineProperty(e, r, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[r] = t);
            });
    }
    return e;
}
function O(e, r) {
    return (
        (r = null != r ? r : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : (function (e, r) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var t = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, t);
                  }
                  return n;
              })(Object(r)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
              }),
        e
    );
}
let g = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
    return "https://".concat(x.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
};
function T(e) {
    let { guild: r, toUser: f, fromUser: T, onClose: y, transitionState: I } = e,
        [v, w] = i.useState(!1),
        A = r.features.has(x.oNc.VERIFIED) || r.features.has(x.oNc.PARTNERED),
        R = A ? j.intl.format(j.t.A37vwM, { ticketUrl: g() }) : null,
        k = r.features.has(x.oNc.CREATOR_MONETIZABLE) || r.features.has(x.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
    async function S(e) {
        await m.Z.transferOwnership(r.id, f.id, b.X.EMAIL, e);
    }
    async function P() {
        await m.Z.sendTransferOwnershipPincode(r.id, !0);
    }
    async function Z(e) {
        e.preventDefault(), y();
        try {
            T.mfaEnabled || null == T.email
                ? (await m.Z.transferOwnership(r.id, f.id, T.mfaEnabled ? b.X.MFA : null), (0, o.xf)())
                : (await m.Z.sendTransferOwnershipPincode(r.id),
                  (0, c.ZDy)(async () => {
                      let { default: e } = await n.e("56499").then(n.bind(n, 433570));
                      return (r) =>
                          (0, t.jsx)(
                              e,
                              O(N({}, r), {
                                  onFormSubmit: S,
                                  onResend: P,
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
                    (0, t.jsx)(
                        c.ConfirmModal,
                        O(N({}, e), {
                            header: j.intl.string(j.t["m+nQlp"]),
                            confirmText: j.intl.string(j.t["NX+WJC"]),
                            confirmButtonColor: s.zx.Colors.BRAND,
                            children: (0, t.jsx)(c.Text, {
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
        D = f.hasAvatarForGuild(r.id),
        L = () =>
            (0, t.jsxs)("span", {
                className: E.guildTransfer,
                children: [
                    null != r.icon
                        ? (0, t.jsx)(c.qEK, {
                              src: p.ZP.getGuildIconURL({
                                  id: r.id,
                                  icon: r.icon,
                                  size: 16,
                              }),
                              size: c.EFr.SIZE_16,
                              className: E.miniGuildIcon,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, t.jsx)(c.Text, {
                        className: E.guildName,
                        variant: "text-sm/bold",
                        children: r.name,
                    }),
                ],
            });
    return (0, t.jsx)(c.Y0X, {
        transitionState: I,
        parentComponent: "TransferOwnership",
        children: (0, t.jsxs)("form", {
            onSubmit: Z,
            children: [
                (0, t.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, t.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        className: E.header,
                        children: j.intl.string(j.t.Z5s7PD),
                    }),
                }),
                (0, t.jsxs)(c.hzk, {
                    children: [
                        (0, t.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: E.subHeader,
                            children:
                                null != C || D
                                    ? j.intl.format(j.t.E90vgo, {
                                          GuildHook: L,
                                          user: (0, h.W5)(f),
                                          AKAHook: function () {
                                              return (0, t.jsxs)("span", {
                                                  className: E.akaTransfer,
                                                  children: [
                                                      (0, t.jsx)(c.IGR, {
                                                          text: j.intl.string(j.t.l1QVfn),
                                                          disableColor: !0,
                                                          className: E.akaBadge,
                                                      }),
                                                      D
                                                          ? (0, t.jsx)(c.qEK, {
                                                                src: f.getAvatarURL(r.id, 16, !0),
                                                                size: c.EFr.SIZE_16,
                                                                className: E.miniAvatar,
                                                                "aria-hidden": !0,
                                                            })
                                                          : null,
                                                      (0, t.jsx)(c.Text, {
                                                          className: E.nickname,
                                                          variant: "text-sm/normal",
                                                          children: null != C ? C : h.ZP.getName(f),
                                                      }),
                                                  ],
                                              });
                                          },
                                      })
                                    : j.intl.format(j.t["2XLnGx"], {
                                          GuildHook: L,
                                          user: (0, h.W5)(f),
                                      }),
                        }),
                        (0, t.jsxs)(u.Z, {
                            className: E.fromToWrapper,
                            justify: u.Z.Justify.CENTER,
                            children: [
                                (0, t.jsx)("div", {
                                    className: E.from,
                                    children: (0, t.jsx)(l.Z, {
                                        user: T,
                                        size: c.EFr.SIZE_80,
                                    }),
                                }),
                                (0, t.jsx)("div", {
                                    className: E.to,
                                    children: (0, t.jsx)(l.Z, {
                                        user: f,
                                        size: c.EFr.SIZE_80,
                                    }),
                                }),
                            ],
                        }),
                        k &&
                            (0, t.jsx)(c.Wn, {
                                messageType: c.QYI.INFO,
                                className: E.roleSubscriptionText,
                                children: j.intl.format(j.t.LAlucX, {
                                    server_subscription_owner_transfer_article: x.T23,
                                }),
                            }),
                        (0, t.jsx)(c.XZJ, {
                            label: j.intl.format(j.t.xm6ACA, { username: (0, h.W5)(f) }),
                            disabled: A,
                            checked: v,
                            onChange: function (e) {
                                w(e);
                            },
                        }),
                        A &&
                            (0, t.jsx)(c.Wn, {
                                messageType: c.QYI.WARNING,
                                children: R,
                            }),
                    ],
                }),
                (0, t.jsx)(c.mzw, {
                    children: (0, t.jsxs)(c.hE2, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, t.jsx)(c.zxk, {
                                variant: "critical-primary",
                                text: j.intl.string(j.t.Z5s7PD),
                                type: "submit",
                                disabled: !v,
                            }),
                            (0, t.jsx)(c.zxk, {
                                variant: "secondary",
                                text: j.intl.string(j.t["ETE/oK"]),
                                onClick: y,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
