n.d(t, {
    C: () => N,
    Z: () => S,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(296009),
    a = n(442837),
    o = n(481060),
    c = n(355467),
    s = n(981312),
    u = n(314897),
    d = n(351402),
    f = n(206599),
    g = n(5136),
    b = n(747101),
    p = n(517157),
    m = n(985748),
    O = n(566007),
    j = n(173951),
    y = n(455731),
    x = n(430790),
    v = n(640078),
    h = n(661462),
    _ = n(795990),
    P = n(388032),
    w = n(830202);
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
function S(e) {
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
            return (0, r.jsx)(O.Z, I({ widget: t }, n));
        case l.l.CURRENT_GAMES:
            return (0, r.jsx)(m.Z, I({ widget: t }, n));
        case l.l.WANT_TO_PLAY_GAMES:
            return (0, r.jsx)(y.Z, I({ widget: t }, n));
        case l.l.PLAYED_GAMES:
            return (0, r.jsx)(j.Z, I({ widget: t }, n));
        default:
            return null;
    }
}
function E() {
    return (0, r.jsxs)("div", {
        className: w.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(o.d3s, { size: "xs" }),
            (0, r.jsx)(o.Text, {
                "aria-label": P.intl.string(P.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: P.intl.string(P.t["7blcz8"]),
            }),
        ],
    });
}
function T(e) {
    let { user: t, guildId: n, channelId: l } = e,
        o = (0, p.Z)(t.id),
        { widgets: g, isGameFetching: m } = (0, b.Z)(o),
        O = (0, a.e7)([u.default], () => u.default.getId() === t.id),
        j = (() => {
            let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]),
                n = (0, s.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && n && (0, c.GE)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        y = 0 === g.length && O;
    return ((0, f.J)(O, g), y)
        ? (0, r.jsx)(_.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  O && j && (0, r.jsx)(E, {}),
                  g.map((e, i) =>
                      (0, r.jsx)(
                          S,
                          {
                              widget: e,
                              user: t,
                              guildId: n,
                              channelId: l,
                              isGameFetching: m,
                              index: i,
                          },
                          e.id,
                      ),
                  ),
                  O && (0, r.jsx)(x.Z, {}),
              ],
          });
}
function N(e) {
    let t = i.useRef(null);
    return (
        (0, g.r)({ container: t.current }),
        (0, r.jsxs)(h.F, {
            "data-scroller": !0,
            scrollerRef: t,
            className: w.scroller,
            fade: !0,
            children: [(0, r.jsx)(v.Z, { scrollerRef: t }), (0, r.jsx)(T, I({}, e)), (0, r.jsx)(o.c43, {})],
        })
    );
}
