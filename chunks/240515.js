n.d(e, { default: () => E });
var r = n(54381),
    i = n(473749),
    o = n(990547),
    l = n(755721),
    c = n(481060),
    s = n(194359),
    a = n(819557),
    d = n(138201),
    u = n(626135),
    O = n(63063),
    f = n(5192),
    m = n(478923),
    j = n(858380),
    g = n(981631),
    p = n(388032),
    x = n(894032);
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
function h() {
    return (0, r.jsxs)(a.z, {
        children: [
            (0, r.jsx)(a.q, {
                title: p.intl.string(p.t.ruhGkg),
                description: p.intl.string(p.t["/FWKKC"]),
                icon: c.owK,
            }),
            (0, r.jsx)(a.q, {
                title: p.intl.string(p.t.N9v3eq),
                description: p.intl.string(p.t.ddpuJg),
                icon: c.owK,
            }),
            (0, r.jsx)(a.q, {
                title: p.intl.string(p.t["4ycGE0"]),
                description: p.intl.string(p.t["5yfN+o"]),
                icon: c.d3s,
            }),
        ],
    });
}
function E(t) {
    var { user: e, guildId: n, channelId: a, onIgnore: E, onBlock: y, location: N = "ContextMenu" } = t,
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
                    action: j.l.DISMISS_IGNORE,
                    location: N,
                });
            },
            [N],
        ),
        (0, r.jsx)(
            c.ConfirmModal,
            I(
                b(
                    {
                        confirmText: p.intl.string(p.t.ytCpKs),
                        cancelText: p.intl.string(p.t["ETE/oC"]),
                        onConfirm: () => {
                            null == E || E(),
                                s.Z.ignoreUser(e.id, N, null != a ? a : void 0),
                                u.default.track(g.rMx.IGNORE_USER_CONFIRMED);
                        },
                        onCancel: () => {
                            u.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                action: j.l.CANCEL_IGNORE,
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
                        className: x.container,
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.confirmationHeader,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.iconContainer,
                                        children: [
                                            (0, r.jsx)(c.qEK, {
                                                size: c.EFr.SIZE_56,
                                                src: e.getAvatarURL(void 0, 64),
                                                "aria-hidden": !0,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: x.icon,
                                                children: (0, r.jsx)(c.kZF, {}),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                variant: "heading-xl/bold",
                                                color: "header-primary",
                                                children: p.intl.format(p.t["WrQD/Y"], {
                                                    username: f.ZP.getName(n, a, e),
                                                }),
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/medium",
                                                color: "header-secondary",
                                                children: p.intl.string(p.t.JKL1u1),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h, {}),
                            (0, r.jsxs)("div", {
                                className: x.otherOptions,
                                children: [
                                    (0, r.jsx)(d.rT, {
                                        title: p.intl.string(p.t["1v01gh"]),
                                        children: (0, r.jsx)(d.JZ, {
                                            title: p.intl.string(p.t.bwxY30),
                                            description: p.intl.string(p.t.NTnf1T),
                                            titleVariant: "text-md/medium",
                                            descriptionVariant: "text-xs/medium",
                                            buttonText: p.intl.string(p.t.QdfUHE),
                                            onButtonPress: () => {
                                                u.default.track(g.rMx.USER_REMEDIATION_ACTION, {
                                                    action: j.l.GOTO_BLOCK,
                                                    location: N,
                                                }),
                                                    (0, c.pTH)(),
                                                    (0, c.h7j)((t) =>
                                                        (0, r.jsx)(
                                                            m.default,
                                                            I(b({}, t), {
                                                                user: e,
                                                                guildId: n,
                                                                channelId: a,
                                                                onBlock: y,
                                                                onIgnore: E,
                                                                location: N,
                                                            }),
                                                        ),
                                                    );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        className: x.featureGuide,
                                        children: p.intl.format(p.t.Hjvqr6, {
                                            articleLink: O.Z.getArticleURL(g.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE),
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
