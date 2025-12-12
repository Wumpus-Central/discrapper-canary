n.d(t, { Z: () => O }), n(642613);
var r = n(54381),
    i = n(473749),
    o = n(772848),
    a = n(924826),
    s = n(91192),
    l = n(481060),
    c = n(412899),
    u = n(635042),
    d = n(539600),
    f = n(981631),
    p = n(388032),
    _ = n(65448);
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
function h(e) {
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
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = y(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function y(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function O(e) {
    let { invite: t } = e,
        n = i.useMemo(() => "invite-roles-".concat((0, o.Z)()), []),
        m = (0, a.ZP)({
            id: n,
            isEnabled: !0,
            scrollToStart: f.Cyb,
            scrollToEnd: f.Cyb,
            wrap: !0,
        }),
        g = i.useMemo(
            () =>
                null == t.guild || null == t.roles || 0 === t.roles.length
                    ? []
                    : t.roles.map((e) => (0, d.wD)(t.guild.id, e)).sort(u.Z),
            [t],
        );
    if (0 === g.length) return null;
    let y = g.length,
        O = p.intl.formatToPlainString(p.t.PCs0oo, { numRoles: y });
    return (0, r.jsx)(s.bG, {
        navigator: m,
        children: (0, r.jsx)(s.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = b(e, ["ref"]);
                return (0, r.jsxs)("div", {
                    className: _.root,
                    children: [
                        (0, r.jsx)(l.Text, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            className: _.rolesHeading,
                            children: p.intl.string(p.t.stcSfI),
                        }),
                        (0, r.jsx)(
                            "div",
                            E(
                                h(
                                    {
                                        className: _.rolesList,
                                        "aria-label": O,
                                        ref: n,
                                    },
                                    i,
                                ),
                                {
                                    children: g.map((e) =>
                                        (0, r.jsx)(
                                            c.UB,
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
