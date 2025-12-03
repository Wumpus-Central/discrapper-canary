n.d(e, { default: () => h });
var r = n(54381),
    i = n(473749),
    o = n(990547),
    l = n(755721),
    c = n(481060),
    s = n(194359),
    a = n(819557),
    d = n(138201),
    u = n(626135),
    f = n(63063),
    O = n(5192),
    m = n(478923),
    j = n(858380),
    x = n(981631),
    g = n(388032),
    p = n(230784);
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
                title: g.intl.string(g.t.ruhGkg),
                description: g.intl.string(g.t["/FWKKC"]),
                icon: c.owK,
            }),
            (0, r.jsx)(a.q, {
                title: g.intl.string(g.t.N9v3eq),
                description: g.intl.string(g.t.ddpuJg),
                icon: c.owK,
            }),
            (0, r.jsx)(a.q, {
                title: g.intl.string(g.t["4ycGE0"]),
                description: g.intl.string(g.t["5yfN+o"]),
                icon: c.d3s,
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
                u.default.track(x.rMx.USER_REMEDIATION_ACTION, {
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
                        confirmText: g.intl.string(g.t.ytCpKs),
                        cancelText: g.intl.string(g.t["ETE/oC"]),
                        onConfirm: () => {
                            null == h || h(),
                                s.Z.ignoreUser(e.id, N, null != a ? a : void 0),
                                u.default.track(x.rMx.IGNORE_USER_CONFIRMED);
                        },
                        onCancel: () => {
                            u.default.track(x.rMx.USER_REMEDIATION_ACTION, {
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
                        className: p.container,
                        children: [
                            (0, r.jsxs)("div", {
                                className: p.confirmationHeader,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: p.iconContainer,
                                        children: [
                                            (0, r.jsx)(c.qEK, {
                                                size: c.EFr.SIZE_56,
                                                src: e.getAvatarURL(void 0, 64),
                                                "aria-hidden": !0,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: p.icon,
                                                children: (0, r.jsx)(c.kZF, {}),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(c.Heading, {
                                                variant: "heading-xl/bold",
                                                color: "header-primary",
                                                children: g.intl.format(g.t["WrQD/Y"], {
                                                    username: O.ZP.getName(n, a, e),
                                                }),
                                            }),
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: g.intl.string(g.t.JKL1u1),
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
                                        title: g.intl.string(g.t["1v01gh"]),
                                        children: (0, r.jsx)(d.JZ, {
                                            title: g.intl.string(g.t.bwxY30),
                                            description: g.intl.string(g.t.NTnf1T),
                                            titleVariant: "text-md/medium",
                                            descriptionVariant: "text-xs/medium",
                                            buttonText: g.intl.string(g.t.QdfUHE),
                                            onButtonPress: () => {
                                                u.default.track(x.rMx.USER_REMEDIATION_ACTION, {
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
                                                                onIgnore: h,
                                                                location: N,
                                                            }),
                                                        ),
                                                    );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: "text-sm/medium",
                                        className: p.featureGuide,
                                        children: g.intl.format(g.t.Hjvqr6, {
                                            articleLink: f.Z.getArticleURL(x.BhN.STEALTH_REMEDIATION_FEATURE_GUIDE),
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
