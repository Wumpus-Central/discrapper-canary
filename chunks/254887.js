n.d(t, { Z: () => v }), n(642613);
var r = n(951288),
    i = n(647438),
    a = n(772848),
    o = n(924826),
    s = n(91192),
    l = n(442837),
    c = n(481060),
    u = n(412899),
    d = n(635042),
    f = n(485386),
    _ = n(981631),
    p = n(388032),
    h = n(744774);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = O(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function v(e) {
    let { invite: t } = e,
        n = i.useMemo(() => "invite-roles-".concat((0, a.Z)()), []),
        m = (0, o.ZP)({
            id: n,
            isEnabled: !0,
            scrollToStart: _.Cyb,
            scrollToEnd: _.Cyb,
            wrap: !0,
        }),
        E = (0, l.e7)(
            [f.Z],
            () =>
                null == t.guild || null == t.roles || 0 === t.roles.length
                    ? []
                    : t.roles
                          .map((e) => f.Z.getRole(t.guild.id, e.id))
                          .filter((e) => null != e)
                          .sort(d.Z),
            [t],
        );
    if (0 === E.length) return null;
    let O = E.length,
        v = p.intl.formatToPlainString(p.t.PCs0oo, { numRoles: O });
    return (0, r.jsx)(s.bG, {
        navigator: m,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = y(e, ["ref"]);
                return (0, r.jsxs)("div", {
                    className: h.root,
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            className: h.rolesHeading,
                            children: p.intl.string(p.t.stcSfI),
                        }),
                        (0, r.jsx)(
                            "div",
                            b(
                                g(
                                    {
                                        className: h.rolesList,
                                        "aria-label": v,
                                        ref: n,
                                    },
                                    i,
                                ),
                                {
                                    children: E.map((e) =>
                                        (0, r.jsx)(
                                            u.UB,
                                            {
                                                role: e,
                                                canRemove: !1,
                                                onRemove: () => {},
                                                guildId: t.guild.id,
                                                disableBorderColor: !1,
                                            },
                                            e.id,
                                        ),
                                    ),
                                },
                            ),
                        ),
                    ],
                });
            },
        }),
    });
}
