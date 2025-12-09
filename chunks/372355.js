r.d(t, { default: () => j }), r(388685);
var n = r(54381),
    i = r(473749),
    a = r(990547),
    s = r(885387),
    c = r(159691),
    l = r(481060),
    o = r(37234),
    u = r(700582),
    d = r(213609),
    m = r(600164),
    f = r(434404),
    p = r(706454),
    _ = r(768581),
    b = r(5192),
    E = r(51144),
    h = r(981631),
    O = r(179839),
    x = r(388032),
    g = r(883287);
let N = function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p.default.locale;
    return "https://".concat(h.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000168511");
};
function j(e) {
    let { guild: t, toUser: p, fromUser: j, onClose: y, transitionState: I } = e,
        [T, v] = i.useState(!1),
        w = t.features.has(h.GuildFeatures.VERIFIED) || t.features.has(h.GuildFeatures.PARTNERED),
        R = w ? x.intl.format(x.t.A37vwK, { ticketUrl: N() }) : null,
        S =
            t.features.has(h.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    async function A(e) {
        await f.Z.transferOwnership(t.id, p.id, O.X.EMAIL, e);
    }
    async function P() {
        await f.Z.sendTransferOwnershipPincode(t.id, !0);
    }
    async function k(e) {
        e.preventDefault(), y();
        try {
            j.mfaEnabled || null == j.email
                ? (await f.Z.transferOwnership(t.id, p.id, j.mfaEnabled ? O.X.MFA : null), (0, o.xf)())
                : (await f.Z.sendTransferOwnershipPincode(t.id),
                  (0, l.ZDy)(async () => {
                      let { default: e } = await r.e("56499").then(r.bind(r, 433570));
                      return (t) => {
                          var r, i;
                          return (0, n.jsx)(
                              e,
                              ((r = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              }),
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, t)),
                              (i = {
                                  onFormSubmit: A,
                                  onResend: P,
                                  onSuccess: o.xf,
                                  headerText: x.intl.string(x.t.Z5s7PM),
                                  confirmButtonText: x.intl.string(x.t.Z5s7PM),
                                  confirmButtonVariant: "critical-primary",
                                  impression: {
                                      impressionName: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE,
                                  },
                              }),
                              (i = null != i ? i : {}),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(i)).forEach(function (e) {
                                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                    }),
                              r),
                          );
                      };
                  }));
        } catch (e) {
            e.body.code === h.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
                (0, s.Z)({
                    title: x.intl.string(x.t["m+nQlm"]),
                    subtitle: x.intl.format(x.t.wG747U, { server_subscription_owner_transfer_article: h.T23 }),
                    confirmText: x.intl.string(x.t["NX+WJN"]),
                });
        }
    }
    (0, d.Z)({
        type: a.ImpressionTypes.MODAL,
        name: a.ImpressionNames.GUILD_TRANSFER_OWNERSHIP,
    });
    let Z = b.ZP.getNickname(t.id, void 0, p),
        F = p.hasAvatarForGuild(t.id),
        G = () =>
            (0, n.jsxs)("span", {
                className: g.guildTransfer,
                children: [
                    null != t.icon
                        ? (0, n.jsx)(l.qEK, {
                              src: _.ZP.getGuildIconURL({
                                  id: t.id,
                                  icon: t.icon,
                                  size: 16,
                              }),
                              size: l.EFr.SIZE_16,
                              className: g.miniGuildIcon,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, n.jsx)(l.Text, {
                        className: g.guildName,
                        variant: "text-sm/bold",
                        children: t.name,
                    }),
                ],
            });
    return (0, n.jsx)("form", {
        onSubmit: k,
        children: (0, n.jsxs)(c.u_l, {
            title: x.intl.string(x.t.Z5s7PM),
            actions: [
                {
                    text: x.intl.string(x.t["ETE/oC"]),
                    onClick: y,
                    variant: "secondary",
                },
                {
                    text: x.intl.string(x.t.Z5s7PM),
                    variant: "critical-primary",
                    type: "submit",
                    disabled: !T,
                },
            ],
            onClose: y,
            transitionState: I,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    className: g.subHeader,
                    children:
                        null != Z || F
                            ? x.intl.format(x.t.E90vgp, {
                                  GuildHook: G,
                                  user: (0, E.W5)(p),
                                  AKAHook: function () {
                                      return (0, n.jsxs)("span", {
                                          className: g.akaTransfer,
                                          children: [
                                              (0, n.jsx)(l.IGR, {
                                                  text: x.intl.string(x.t.l1QVfj),
                                                  disableColor: !0,
                                                  className: g.akaBadge,
                                              }),
                                              F
                                                  ? (0, n.jsx)(l.qEK, {
                                                        src: p.getAvatarURL(t.id, 16, !0),
                                                        size: l.EFr.SIZE_16,
                                                        className: g.miniAvatar,
                                                        "aria-hidden": !0,
                                                    })
                                                  : null,
                                              (0, n.jsx)(l.Text, {
                                                  className: g.nickname,
                                                  variant: "text-sm/normal",
                                                  children: null != Z ? Z : E.ZP.getName(p),
                                              }),
                                          ],
                                      });
                                  },
                              })
                            : x.intl.format(x.t["2XLnG0"], {
                                  GuildHook: G,
                                  user: (0, E.W5)(p),
                              }),
                }),
                (0, n.jsxs)(m.Z, {
                    className: g.fromToWrapper,
                    justify: m.Z.Justify.CENTER,
                    children: [
                        (0, n.jsx)("div", {
                            className: g.from,
                            children: (0, n.jsx)(u.Z, {
                                user: j,
                                size: l.EFr.SIZE_80,
                            }),
                        }),
                        (0, n.jsx)("div", {
                            className: g.to,
                            children: (0, n.jsx)(u.Z, {
                                user: p,
                                size: l.EFr.SIZE_80,
                            }),
                        }),
                    ],
                }),
                S &&
                    (0, n.jsx)(l.Wn, {
                        messageType: l.QYI.INFO,
                        className: g.roleSubscriptionText,
                        children: x.intl.format(x.t.LAlucb, { server_subscription_owner_transfer_article: h.T23 }),
                    }),
                (0, n.jsx)(l.Checkbox, {
                    label: x.intl.format(x.t.xm6ACJ, { username: (0, E.W5)(p) }),
                    disabled: w,
                    checked: T,
                    onChange: function (e) {
                        v(e);
                    },
                }),
                w &&
                    (0, n.jsx)(l.Wn, {
                        messageType: l.QYI.WARNING,
                        children: R,
                    }),
            ],
        }),
    });
}
