n.d(e, { default: () => N });
var r = n(54381),
    i = n(473749),
    o = n(990547),
    l = n(442837),
    s = n(481060),
    c = n(194359),
    a = n(1596),
    d = n(681678),
    u = n(138201),
    f = n(699516),
    O = n(626135),
    m = n(63063),
    x = n(5192),
    g = n(240515),
    j = n(858380),
    p = n(981631),
    b = n(388032),
    I = n(205205);
function E(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = r);
            });
    }
    return t;
}
function h(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function y(t) {
    let { user: e, onBlock: n, onIgnore: i, location: o, disallowIgnore: c, guildId: d, channelId: y } = t,
        N = (0, l.e7)([f.Z], () => f.Z.isIgnored(e.id));
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            (0, r.jsxs)("div", {
                className: I.confirmationHeader,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.iconContainer,
                        children: [
                            (0, r.jsx)(s.qEK, {
                                size: s.EFr.SIZE_56,
                                src: e.getAvatarURL(void 0, 64),
                                "aria-hidden": !0,
                            }),
                            (0, r.jsx)("div", {
                                className: I.icon,
                                children: (0, r.jsx)(s.t6m, {}),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-strong",
                                children: b.intl.format(b.t.CIbzHR, { username: x.ZP.getName(d, y, e) }),
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: b.intl.string(b.t.S70jou),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(a.Z, {}),
            c || N
                ? null
                : (0, r.jsxs)("div", {
                      className: I.otherOptions,
                      children: [
                          (0, r.jsx)(u.rT, {
                              title: b.intl.string(b.t["+BJTcB"]),
                              children: (0, r.jsx)(u.JZ, {
                                  title: b.intl.string(b.t.hC8tcc),
                                  description: b.intl.string(b.t.If89rE),
                                  titleVariant: "text-md/medium",
                                  descriptionVariant: "text-xs/medium",
                                  buttonText: b.intl.string(b.t.mxJOd9),
                                  onButtonPress: () => {
                                      O.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                                          action: j.l.GOTO_IGNORE,
                                          location: o,
                                      }),
                                          (0, s.pTH)(),
                                          (0, s.h7j)((t) =>
                                              (0, r.jsx)(
                                                  g.default,
                                                  h(E({}, t), {
                                                      user: e,
                                                      guildId: d,
                                                      channelId: y,
                                                      onIgnore: i,
                                                      onBlock: n,
                                                      location: o,
                                                  }),
                                              ),
                                          );
                                  },
                              }),
                          }),
                          (0, r.jsx)(s.Text, {
                              variant: "text-sm/medium",
                              className: I.featureGuide,
                              children: b.intl.format(b.t.DJN6eZ, {
                                  articleLink: m.Z.getArticleURL(p.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE),
                              }),
                          }),
                      ],
                  }),
        ],
    });
}
function N(t) {
    var {
            user: e,
            onBlock: n,
            onCancel: l,
            onIgnore: a,
            location: u = "ContextMenu",
            disallowIgnore: f,
            guildId: m,
            channelId: x,
        } = t,
        g = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.keys(t);
                    for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
                    return i;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (r = 0; r < o.length; r++)
                    (n = o[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
            }
            return i;
        })(t, ["user", "onBlock", "onCancel", "onIgnore", "location", "disallowIgnore", "guildId", "channelId"]);
    return (
        i.useLayoutEffect(
            () => () => {
                O.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                    action: j.l.DISMISS_BLOCK,
                    location: u,
                });
            },
            [u],
        ),
        (0, r.jsx)(
            s.VoidConfirmModal,
            h(
                E(
                    {
                        confirmText: b.intl.string(b.t.l4Emac),
                        cancelText: b.intl.string(b.t["ETE/oC"]),
                        onCancel: () => {
                            O.default.track(p.rMx.USER_REMEDIATION_ACTION, {
                                action: j.l.CANCEL_BLOCK,
                                location: u,
                            }),
                                null == l || l();
                        },
                        onConfirm: () => {
                            null == n || n(),
                                c.Z.blockUser(e.id, { location: u }).then(() => {
                                    O.default.track(p.rMx.BLOCK_USER_CONFIRMED),
                                        d.Z.showBlockSuccessToast(e.id, null != x ? x : void 0);
                                });
                        },
                        impression: { impressionName: o.ImpressionNames.BLOCK_USER_CONFIRMATION },
                    },
                    g,
                ),
                {
                    children: (0, r.jsx)(y, {
                        user: e,
                        guildId: m,
                        channelId: x,
                        onBlock: n,
                        onIgnore: a,
                        disallowIgnore: f,
                    }),
                },
            ),
        )
    );
}
