n.d(t, {
    C: () => k,
    Z: () => L,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(355467),
    u = n(981312),
    d = n(929677),
    p = n(314897),
    f = n(351402),
    h = n(931847),
    g = n(836197),
    m = n(880421),
    b = n(206599),
    _ = n(5136),
    O = n(690760),
    E = n(747101),
    y = n(517157),
    v = n(860717),
    I = n(430790),
    S = n(640078),
    C = n(190862),
    T = n(682085),
    N = n(996921),
    j = n(661462),
    P = n(795990),
    x = n(388032),
    A = n(479283);
function Z(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e) {
    var { widget: t } = e,
        n = w(e, ["widget"]);
    return t instanceof h.q
        ? (0, r.jsx)(v.Z, Z({ widget: t }, n))
        : t instanceof g.zy
          ? (0, r.jsx)(C.Z, Z({ widget: t }, n))
          : null;
}
function R() {
    return (0, r.jsxs)("div", {
        className: A.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(s.d3s, { size: "xs" }),
            (0, r.jsx)(s.Text, {
                "aria-label": x.intl.string(x.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.string(x.t["7blcz8"]),
            }),
        ],
    });
}
function D(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, y.Z)(t.id),
        s = (0, o.e7)([p.default], () => p.default.getId() === t.id),
        _ = (() => {
            let [e, t] = (0, o.Wu)([f.Z], () => [f.Z.ipCountryCode, f.Z.ipCountryCodeRequest]),
                n = (0, u.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, c.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        v = (0, m.k)({ location: "UserProfileModalV2Widgets" }),
        S = 0 === a.length && s,
        C = i.useMemo(() => a.filter(g.Wc), [a]),
        N = i.useMemo(() => a.filter((e) => e instanceof h.q), [a]);
    (0, E.ZP)(C), (0, b.J)(s, C);
    var j = t.id;
    (0, O.s)(N);
    let { data: x, refetch: A } = (0, d.O)(j),
        Z = i.useRef(x);
    if (
        ((Z.current = x),
        i.useEffect(() => {
            null !== Z.current && A();
        }, [A]),
        S)
    )
        if (v) return (0, r.jsx)(T.Z, {});
        else return (0, r.jsx)(P.Z, {});
    return (0, r.jsxs)(r.Fragment, {
        children: [
            s && _ && (0, r.jsx)(R, {}),
            a.map((e, i) =>
                (0, r.jsx)(
                    L,
                    {
                        widget: e,
                        user: t,
                        guildId: n,
                        channelId: l,
                        index: i,
                    },
                    e.type,
                ),
            ),
            s && (0, r.jsx)(I.Z, {}),
        ],
    });
}
function k(e) {
    var { user: t } = e,
        n = w(e, ["user"]);
    let l = i.useRef(null);
    (0, _.r)({ container: l.current });
    let o = (0, N.h)(t.id);
    return (0, r.jsxs)(j.F, {
        "data-scroller": !0,
        scrollerRef: l,
        className: a()(A.scroller, { [A.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(S.Z, { scrollerRef: l }), (0, r.jsx)(D, Z({ user: t }, n))],
    });
}
