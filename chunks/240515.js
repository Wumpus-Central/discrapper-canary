n.d(e, { default: () => h });
var r = n(54381),
    i = n(473749),
    o = n(990547),
    l = n(755721),
    s = n(481060),
    c = n(194359),
    a = n(819557),
    d = n(138201),
    u = n(626135),
    f = n(63063),
    O = n(5192),
    m = n(478923),
    x = n(858380),
    g = n(981631),
    j = n(388032),
    p = n(205205);
function b(t) {
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
function I(t, e) {
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
function E() {
    return (0, r.jsxs)(a.z, {
        children: [
            (0, r.jsx)(a.q, {
                title: j.intl.string(j.t.ruhGkg),
                description: j.intl.string(j.t["/FWKKC"]),
                icon: s.owK,
            }),
            (0, r.jsx)(a.q, {
                title: j.intl.string(j.t.N9v3eq),
                description: j.intl.string(j.t.ddpuJg),
                icon: s.owK,
            }),
            (0, r.jsx)(a.q, {
                title: j.intl.string(j.t["4ycGE0"]),
                description: j.intl.string(j.t["5yfN+o"]),
                icon: s.d3s,
            }),
        ],
    });
}
function h(t) {
    var { user: e, guildId: n, channelId: a, onIgnore: h, onBlock: y, location: N = "ContextMenu" } = t,
        v = (function (t, e) {
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
        })(t, ["user", "guildId", "channelId", "onIgnore", "onBlock", "location"]);
    return (
        i.useLayoutEffect(
            () => () => {
                u.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                    action: x.l.DISMISS_IGNORE,
                    location: N,
                });
            },
            [N],
        ),
        (0, r.jsx)(
            s.VoidConfirmModal,
            I(
                b(
                    {
                        confirmText: j.intl.string(j.t.ytCpKs),
                        cancelText: j.intl.string(j.t["ETE/oC"]),
                        onConfirm: () => {
                            null == h || h(),
                                c.Z.ignoreUser(e.id, N, null != a ? a : void 0),
                                u.default.track(g.rMx.IGNORE_USER_CONFIRMED);
                        },
                        onCancel: () => {
                            u.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                action: x.l.CANCEL_IGNORE,
                                location: N,
                            });
                        },
                        impression: { impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION },
                        confirmButtonColor: l.zx.Colors.BRAND,
                    },
                    v,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        className: p.container,
                        children: [
                            (0, r.jsxs)("div", {
                                className: p.confirmationHeader,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: p.iconContainer,
                                        children: [
                                            (0, r.jsx)(s.qEK, {
                                                size: s.EFr.SIZE_56,
                                                src: e.getAvatarURL(void 0, 64),
                                                "aria-hidden": !0,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: p.icon,
                                                children: (0, r.jsx)(s.kZF, {}),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-xl/bold",
                                                color: "text-strong",
                                                children: j.intl.format(j.t["WrQD/Y"], {
                                                    username: O.ZP.getName(n, a, e),
                                                }),
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: j.intl.string(j.t.JKL1u1),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(E, {}),
                            (0, r.jsxs)("div", {
                                className: p.otherOptions,
                                children: [
                                    (0, r.jsx)(d.rT, {
                                        title: j.intl.string(j.t["1v01gh"]),
                                        children: (0, r.jsx)(d.JZ, {
                                            title: j.intl.string(j.t.bwxY30),
                                            description: j.intl.string(j.t.NTnf1T),
                                            titleVariant: "text-md/medium",
                                            descriptionVariant: "text-xs/medium",
                                            buttonText: j.intl.string(j.t.QdfUHE),
                                            onButtonPress: () => {
                                                u.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                                    action: x.l.GOTO_BLOCK,
                                                    location: N,
                                                }),
                                                    (0, s.pTH)(),
                                                    (0, s.h7j)((t) =>
                                                        (0, r.jsx)(
                                                            m.default,
                                                            I(b({}, t), {
                                                                user: e,
                                                                guildId: n,
                                                                channelId: a,
                                                                onBlock: y,
                                                                onIgnore: h,
                                                                location: N,
                                                            }),
                                                        ),
                                                    );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        className: p.featureGuide,
                                        children: j.intl.format(j.t.Hjvqr6, {
                                            articleLink: f.Z.getArticleURL(g.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                },
            ),
        )
    );
}
