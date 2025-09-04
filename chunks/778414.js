n.d(t, {
    C: () => T,
    Z: () => C,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(296009),
    a = n(442837),
    o = n(481060),
    s = n(355467),
    c = n(981312),
    u = n(314897),
    d = n(351402),
    p = n(206599),
    f = n(5136),
    h = n(747101),
    g = n(517157),
    m = n(430790),
    b = n(640078),
    _ = n(190862),
    O = n(661462),
    E = n(795990),
    y = n(388032),
    v = n(830202);
function I(e) {
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
function C(e) {
    var { widget: t } = e,
        n = (function (e, t) {
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
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["widget"]);
    switch (t.type) {
        case l.l.FAVORITE_GAMES:
        case l.l.CURRENT_GAMES:
        case l.l.WANT_TO_PLAY_GAMES:
        case l.l.PLAYED_GAMES:
            return (0, r.jsx)(_.Z, I({ widget: t }, n));
        default:
            return null;
    }
}
function S() {
    return (0, r.jsxs)("div", {
        className: v.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(o.d3s, { size: "xs" }),
            (0, r.jsx)(o.Text, {
                "aria-label": y.intl.string(y.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: y.intl.string(y.t["7blcz8"]),
            }),
        ],
    });
}
function N(e) {
    let { user: t, guildId: n, channelId: l } = e,
        o = (0, g.Z)(t.id),
        f = (0, a.e7)([u.default], () => u.default.getId() === t.id),
        b = (() => {
            let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]),
                n = (0, c.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, s.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        _ = 0 === o.length && f;
    return ((0, h.ZP)(o), (0, p.J)(f, o), _)
        ? (0, r.jsx)(E.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  f && b && (0, r.jsx)(S, {}),
                  o.map((e, i) =>
                      (0, r.jsx)(
                          C,
                          {
                              widget: e,
                              user: t,
                              guildId: n,
                              channelId: l,
                              index: i,
                          },
                          e.id,
                      ),
                  ),
                  f && (0, r.jsx)(m.Z, {}),
              ],
          });
}
function T(e) {
    let t = i.useRef(null);
    return (
        (0, f.r)({ container: t.current }),
        (0, r.jsxs)(O.F, {
            "data-scroller": !0,
            scrollerRef: t,
            className: v.scroller,
            fade: !0,
            children: [(0, r.jsx)(b.Z, { scrollerRef: t }), (0, r.jsx)(N, I({}, e)), (0, r.jsx)(o.c43, {})],
        })
    );
}
