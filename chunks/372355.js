t.d(r, { default: () => T }), t(388685);
var n = t(54381),
    i = t(473749),
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
    b = t(179839),
    j = t(388032),
    E = t(883287);
function g(e) {
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
function O(e, r) {
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
let N = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.default.locale;
    return "https://".concat(x.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
};
function T(e) {
    let { guild: r, toUser: f, fromUser: T, onClose: y, transitionState: I } = e,
        [v, w] = i.useState(!1),
        R = r.features.has(x.GuildFeatures.VERIFIED) || r.features.has(x.GuildFeatures.PARTNERED),
        A = R ? j.intl.format(j.t.A37vwK, { ticketUrl: N() }) : null,
        S =
            r.features.has(x.GuildFeatures.CREATOR_MONETIZABLE) ||
            r.features.has(x.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function k(e) {
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
                      let { default: e } = await t.e("56499").then(t.bind(t, 433570));
                      return (r) =>
                          (0, n.jsx)(
                              e,
                              O(g({}, r), {
                                  onFormSubmit: k,
                                  onResend: P,
                                  onSuccess: o.xf,
                                  headerText: j.intl.string(j.t.Z5s7PM),
                                  confirmButtonText: j.intl.string(j.t.Z5s7PM),
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
                        O(g({}, e), {
                            header: j.intl.string(j.t["m+nQlm"]),
                            confirmText: j.intl.string(j.t["NX+WJN"]),
                            confirmButtonColor: s.zx.Colors.BRAND,
                            children: (0, n.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: j.intl.format(j.t.wG747U, {
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
        G = f.hasAvatarForGuild(r.id),
        F = () =>
            (0, n.jsxs)("span", {
                className: E.guildTransfer,
                children: [
                    null != r.icon
                        ? (0, n.jsx)(c.qEK, {
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
                    (0, n.jsx)(c.Text, {
                        className: E.guildName,
                        variant: "text-sm/bold",
                        children: r.name,
                    }),
                ],
            });
    return (0, n.jsx)(c.Y0X, {
        transitionState: I,
        parentComponent: "TransferOwnership",
        children: (0, n.jsxs)("form", {
            onSubmit: Z,
            children: [
                (0, n.jsx)(c.xBx, {
                    separator: !1,
                    children: (0, n.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        className: E.header,
                        children: j.intl.string(j.t.Z5s7PM),
                    }),
                }),
                (0, n.jsxs)(c.hzk, {
                    children: [
                        (0, n.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: E.subHeader,
                            children:
                                null != C || G
                                    ? j.intl.format(j.t.E90vgp, {
                                          GuildHook: F,
                                          user: (0, h.W5)(f),
                                          AKAHook: function () {
                                              return (0, n.jsxs)("span", {
                                                  className: E.akaTransfer,
                                                  children: [
                                                      (0, n.jsx)(c.IGR, {
                                                          text: j.intl.string(j.t.l1QVfj),
                                                          disableColor: !0,
                                                          className: E.akaBadge,
                                                      }),
                                                      G
                                                          ? (0, n.jsx)(c.qEK, {
                                                                src: f.getAvatarURL(r.id, 16, !0),
                                                                size: c.EFr.SIZE_16,
                                                                className: E.miniAvatar,
                                                                "aria-hidden": !0,
                                                            })
                                                          : null,
                                                      (0, n.jsx)(c.Text, {
                                                          className: E.nickname,
                                                          variant: "text-sm/normal",
                                                          children: null != C ? C : h.ZP.getName(f),
                                                      }),
                                                  ],
                                              });
                                          },
                                      })
                                    : j.intl.format(j.t["2XLnG0"], {
                                          GuildHook: F,
                                          user: (0, h.W5)(f),
                                      }),
                        }),
                        (0, n.jsxs)(u.Z, {
                            className: E.fromToWrapper,
                            justify: u.Z.Justify.CENTER,
                            children: [
                                (0, n.jsx)("div", {
                                    className: E.from,
                                    children: (0, n.jsx)(l.Z, {
                                        user: T,
                                        size: c.EFr.SIZE_80,
                                    }),
                                }),
                                (0, n.jsx)("div", {
                                    className: E.to,
                                    children: (0, n.jsx)(l.Z, {
                                        user: f,
                                        size: c.EFr.SIZE_80,
                                    }),
                                }),
                            ],
                        }),
                        S &&
                            (0, n.jsx)(c.Wn, {
                                messageType: c.QYI.INFO,
                                className: E.roleSubscriptionText,
                                children: j.intl.format(j.t.LAlucb, {
                                    server_subscription_owner_transfer_article: x.T23,
                                }),
                            }),
                        (0, n.jsx)(c.Checkbox, {
                            label: j.intl.format(j.t.xm6ACJ, { username: (0, h.W5)(f) }),
                            disabled: R,
                            checked: v,
                            onChange: function (e) {
                                w(e);
                            },
                        }),
                        R &&
                            (0, n.jsx)(c.Wn, {
                                messageType: c.QYI.WARNING,
                                children: A,
                            }),
                    ],
                }),
                (0, n.jsx)(c.mzw, {
                    children: (0, n.jsxs)(c.ButtonGroup, {
                        direction: "horizontal-reverse",
                        children: [
                            (0, n.jsx)(c.Button, {
                                variant: "critical-primary",
                                text: j.intl.string(j.t.Z5s7PM),
                                type: "submit",
                                disabled: !v,
                            }),
                            (0, n.jsx)(c.Button, {
                                variant: "secondary",
                                text: j.intl.string(j.t["ETE/oC"]),
                                onClick: y,
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
