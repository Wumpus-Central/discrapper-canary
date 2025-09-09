n.d(t, {
    C: () => w,
    Z: () => x,
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
    d = n(314897),
    p = n(351402),
    f = n(931847),
    h = n(836197),
    g = n(206599),
    m = n(5136),
    b = n(747101),
    _ = n(517157),
    O = n(860717),
    E = n(430790),
    y = n(640078),
    v = n(190862),
    I = n(996921),
    C = n(661462),
    S = n(795990),
    T = n(388032),
    N = n(830202);
function j(e) {
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
function P(e, t) {
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
function x(e) {
    var { widget: t } = e,
        n = P(e, ["widget"]);
    return t instanceof f.q
        ? (0, r.jsx)(O.Z, j({ widget: t }, n))
        : t instanceof h.zy
          ? (0, r.jsx)(v.Z, j({ widget: t }, n))
          : null;
}
function A() {
    return (0, r.jsxs)("div", {
        className: N.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(s.d3s, { size: "xs" }),
            (0, r.jsx)(s.Text, {
                "aria-label": T.intl.string(T.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: T.intl.string(T.t["7blcz8"]),
            }),
        ],
    });
}
function Z(e) {
    let { user: t, guildId: n, channelId: l } = e,
        a = (0, _.Z)(t.id),
        s = (0, o.e7)([d.default], () => d.default.getId() === t.id),
        f = (() => {
            let [e, t] = (0, o.Wu)([p.Z], () => [p.Z.ipCountryCode, p.Z.ipCountryCodeRequest]),
                n = (0, u.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, c.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        m = 0 === a.length && s,
        O = a.filter(h.Wc);
    return ((0, b.ZP)(O), (0, g.J)(s, O), m)
        ? (0, r.jsx)(S.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  s && f && (0, r.jsx)(A, {}),
                  a.map((e, i) =>
                      (0, r.jsx)(
                          x,
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
                  s && (0, r.jsx)(E.Z, {}),
              ],
          });
}
function w(e) {
    var { user: t } = e,
        n = P(e, ["user"]);
    let l = i.useRef(null);
    (0, m.r)({ container: l.current });
    let o = (0, I.h)(t.id);
    return (0, r.jsxs)(C.F, {
        "data-scroller": !0,
        scrollerRef: l,
        className: a()(N.scroller, { [N.hasToolbar]: o }),
        fade: !0,
        children: [(0, r.jsx)(y.Z, { scrollerRef: l }), (0, r.jsx)(Z, j({ user: t }, n))],
    });
}
