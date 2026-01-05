n.d(t, { Z: () => S }), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(772848),
    l = n(924826),
    c = n(91192),
    u = n(481060),
    d = n(412899),
    f = n(635042),
    p = n(539600),
    _ = n(981631),
    m = n(388032),
    h = n(122316);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = v(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function S(e) {
    let { guild: t, roles: n, className: a } = e,
        g = i.useMemo(() => "invite-roles-".concat((0, s.Z)()), []),
        b = (0, l.ZP)({
            id: g,
            isEnabled: !0,
            scrollToStart: _.Cyb,
            scrollToEnd: _.Cyb,
            wrap: !0,
        }),
        v = i.useMemo(
            () => (null == t || null == n || 0 === n.length ? [] : n.map((e) => (0, p.wD)(t.id, e)).sort(f.Z)),
            [t, n],
        );
    if (null == t || 0 === v.length) return null;
    let S = v.length,
        I = m.intl.formatToPlainString(m.t.PCs0oo, { numRoles: S });
    return (0, r.jsx)(c.bG, {
        navigator: b,
        children: (0, r.jsx)(c.SJ, {
            children: (e) => {
                var { ref: n } = e,
                    i = O(e, ["ref"]);
                return (0, r.jsxs)("div", {
                    className: o()(h.root, a),
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            className: h.rolesHeading,
                            children: m.intl.string(m.t.stcSfI),
                        }),
                        (0, r.jsx)(
                            "div",
                            y(
                                E(
                                    {
                                        className: h.rolesList,
                                        "aria-label": I,
                                        ref: n,
                                    },
                                    i,
                                ),
                                {
                                    children: v.map((e) =>
                                        (0, r.jsx)(
                                            d.UB,
                                            {
                                                className: h.rolePill,
                                                role: e,
                                                canRemove: !1,
                                                onRemove: () => {},
                                                guildId: t.id,
                                                guild: t,
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
