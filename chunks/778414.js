n.d(t, {
    C: () => D,
    Z: () => w,
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
    m = n(206599),
    b = n(5136),
    _ = n(690760),
    O = n(747101),
    E = n(517157),
    y = n(860717),
    v = n(430790),
    I = n(640078),
    C = n(190862),
    S = n(996921),
    T = n(661462),
    N = n(795990),
    P = n(981631),
    j = n(388032),
    x = n(830202);
function A(e) {
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
function Z(e, t) {
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
function w(e) {
    var { widget: t } = e,
        n = Z(e, ["widget"]);
    return t instanceof h.q
        ? (0, r.jsx)(y.Z, A({ widget: t }, n))
        : t instanceof g.zy
          ? (0, r.jsx)(C.Z, A({ widget: t }, n))
          : null;
}
function L() {
    return (0, r.jsxs)("div", {
        className: x.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(s.d3s, { size: "xs" }),
            (0, r.jsx)(s.Text, {
                "aria-label": j.intl.string(j.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: j.intl.string(j.t["7blcz8"]),
            }),
        ],
    });
}
function R(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, E.Z)(t.id),
        s = (0, o.e7)([p.default], () => p.default.getId() === t.id),
        b = (() => {
            let [e, t] = (0, o.Wu)([f.Z], () => [f.Z.ipCountryCode, f.Z.ipCountryCodeRequest]),
                n = (0, u.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, c.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        y = 0 === a.length && s,
        I = i.useMemo(() => a.filter(g.Wc), [a]),
        C = i.useMemo(() => a.filter((e) => e instanceof h.q), [a]);
    (0, O.ZP)(I), (0, m.J)(s, I);
    var S = t.id;
    (0, _.s)(C);
    let { data: T } = (0, d.O)(S),
        j = i.useRef(T);
    return ((j.current = T),
    i.useEffect(() => {
        null !== j.current && (0, o.Xf)(P.McO.USER_APPLICATION_IDENTITIES(S));
    }, [S]),
    y)
        ? (0, r.jsx)(N.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  s && b && (0, r.jsx)(L, {}),
                  a.map((e, i) =>
                      (0, r.jsx)(
                          w,
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
                  s && (0, r.jsx)(v.Z, {}),
              ],
          });
}
function D(e) {
    var { user: t } = e,
        n = Z(e, ["user"]);
    let l = i.useRef(null);
    (0, b.r)({ container: l.current });
    let o = (0, S.h)(t.id);
    return (0, r.jsxs)(T.F, {
        "data-scroller": !0,
        scrollerRef: l,
        className: a()(x.scroller, { [x.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(I.Z, { scrollerRef: l }), (0, r.jsx)(R, A({ user: t }, n))],
    });
}
