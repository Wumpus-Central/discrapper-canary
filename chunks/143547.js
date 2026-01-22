n.d(e, {
    default: () => E,
});
var r = n(627968),
    i = n(64700),
    o = n(110259),
    l = n(421380),
    s = n(397927),
    c = n(49229),
    a = n(754302),
    d = n(632738),
    u = n(954571),
    f = n(975571),
    O = n(562153),
    p = n(994288),
    m = n(235627),
    g = n(652215),
    j = n(985018),
    x = n(107724);

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

function y(t, e) {
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

function I() {
    return (0, r.jsxs)(a.q, {
        children: [
            (0, r.jsx)(a.B, {
                title: j.intl.string(j.t.ruhGkg),
                description: j.intl.string(j.t["/FWKKC"]),
                icon: s.yr3,
            }),
            (0, r.jsx)(a.B, {
                title: j.intl.string(j.t.N9v3eq),
                description: j.intl.string(j.t.ddpuJg),
                icon: s.yr3,
            }),
            (0, r.jsx)(a.B, {
                title: j.intl.string(j.t["4ycGE0"]),
                description: j.intl.string(j.t["5yfN+o"]),
                icon: s.mir,
            }),
        ],
    });
}

function E(t) {
    let { user: e, guildId: n, channelId: a, onIgnore: E, onBlock: h, location: N = "ContextMenu" } = t,
        v = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(t); i < n.length; i++)
                    (r = n[i]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
                return o;
            }
            if (
                ((o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        i = {},
                        o = Object.getOwnPropertyNames(t);
                    for (r = 0; r < o.length; r++)
                        (n = o[r]),
                            !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
                    return i;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    (r = n[i]),
                        !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            return o;
        })(t, ["user", "guildId", "channelId", "onIgnore", "onBlock", "location"]);
    return (
        i.useLayoutEffect(
            () => () => {
                u.default.track(g.HAw.USER_REMEDIATION_ACTION, {
                    action: m.p.DISMISS_IGNORE,
                    location: N,
                });
            },
            [N],
        ),
        (0, r.jsx)(
            s.VoidConfirmModal,
            y(
                b(
                    {
                        confirmText: j.intl.string(j.t.ytCpKs),
                        cancelText: j.intl.string(j.t["ETE/oC"]),
                        onConfirm: () => {
                            null == E || E(),
                                c.A.ignoreUser(e.id, N, null != a ? a : void 0),
                                u.default.track(g.HAw.IGNORE_USER_CONFIRMED);
                        },
                        onCancel: () => {
                            u.default.track(g.HAw.USER_REMEDIATION_ACTION, {
                                action: m.p.CANCEL_IGNORE,
                                location: N,
                            });
                        },
                        impression: {
                            impressionName: o.ImpressionNames.IGNORE_USER_CONFIRMATION,
                        },
                        confirmButtonColor: l.$n.Colors.BRAND,
                    },
                    v,
                ),
                {
                    children: (0, r.jsxs)("div", {
                        className: x.kL,
                        children: [
                            (0, r.jsxs)("div", {
                                className: x.RS,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: x.zc,
                                        children: [
                                            (0, r.jsx)(s.euF, {
                                                size: s._3J.SIZE_56,
                                                src: e.getAvatarURL(void 0, 64),
                                                "aria-hidden": !0,
                                            }),
                                            (0, r.jsx)("div", {
                                                className: x.Kk,
                                                children: (0, r.jsx)(s.G3N, {}),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        children: [
                                            (0, r.jsx)(s.Heading, {
                                                variant: "heading-xl/bold",
                                                color: "text-strong",
                                                children: j.intl.format(j.t["WrQD/Y"], {
                                                    username: O.Ay.getName(n, a, e),
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
                            (0, r.jsx)(I, {}),
                            (0, r.jsxs)("div", {
                                className: x.l_,
                                children: [
                                    (0, r.jsx)(d.Y0, {
                                        title: j.intl.string(j.t["1v01gh"]),
                                        children: (0, r.jsx)(d.PQ, {
                                            title: j.intl.string(j.t.bwxY30),
                                            description: j.intl.string(j.t.NTnf1T),
                                            titleVariant: "text-md/medium",
                                            descriptionVariant: "text-xs/medium",
                                            buttonText: j.intl.string(j.t.QdfUHE),
                                            onButtonPress: () => {
                                                u.default.track(g.HAw.USER_REMEDIATION_ACTION, {
                                                    action: m.p.GOTO_BLOCK,
                                                    location: N,
                                                }),
                                                    (0, s.s7G)(),
                                                    (0, s.qfG)((t) =>
                                                        (0, r.jsx)(
                                                            p.default,
                                                            y(b({}, t), {
                                                                user: e,
                                                                guildId: n,
                                                                channelId: a,
                                                                onBlock: h,
                                                                onIgnore: E,
                                                                location: N,
                                                            }),
                                                        ),
                                                    );
                                            },
                                        }),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        variant: "text-sm/medium",
                                        className: x.FV,
                                        children: j.intl.format(j.t.Hjvqr6, {
                                            articleLink: f.A.getArticleURL(g.MVz.STEALTH_REMEDIATION_FEATURE_GUIDE),
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
