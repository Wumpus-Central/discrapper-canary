n.d(t, { Z: () => v }), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(924826),
    s = n(91192),
    l = n(481060),
    c = n(412899),
    u = n(635042),
    d = n(411198),
    f = n(539600),
    p = n(981631),
    _ = n(388032),
    m = n(122316);
function h(e, t, n) {
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
                h(e, t, n[t]);
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
        h = (0, o.ZP)({
            id: n,
            isEnabled: !0,
            scrollToStart: p.Cyb,
            scrollToEnd: p.Cyb,
            wrap: !0,
        }),
        E = i.useMemo(() => (null != t.guild ? (0, d.Qs)(t.guild) : null), [t.guild]),
        O = i.useMemo(
            () =>
                null == t.guild || null == t.roles || 0 === t.roles.length
                    ? []
                    : t.roles.map((e) => (0, f.wD)(t.guild.id, e)).sort(u.Z),
            [t],
        );
    if (0 === O.length || null == E) return null;
    let v = O.length,
        S = _.intl.formatToPlainString(_.t.PCs0oo, { numRoles: v });
    return (0, r.jsx)(s.bG, {
        navigator: h,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: t } = e,
                    n = y(e, ["ref"]);
                return (0, r.jsxs)("div", {
                    className: m.root,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: m.rolesHeading,
                            children: _.intl.string(_.t.stcSfI),
                        }),
                        (0, r.jsx)(
                            "div",
                            b(
                                g(
                                    {
                                        className: m.rolesList,
                                        "aria-label": S,
                                        ref: t,
                                    },
                                    n,
                                ),
                                {
                                    children: O.map((e) =>
                                        (0, r.jsx)(
                                            c.UB,
                                            {
                                                className: m.rolePill,
                                                role: e,
                                                canRemove: !1,
                                                onRemove: () => {},
                                                guildId: E.id,
                                                guild: E,
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
