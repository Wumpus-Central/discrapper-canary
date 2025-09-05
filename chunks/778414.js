n.d(t, {
    C: () => P,
    Z: () => T,
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
    p = n(836197),
    f = n(206599),
    h = n(5136),
    g = n(747101),
    m = n(517157),
    b = n(860717),
    _ = n(430790),
    O = n(640078),
    E = n(190862),
    y = n(661462),
    v = n(795990),
    I = n(388032),
    C = n(479283);
function S(e) {
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
function T(e) {
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
            return (0, r.jsx)(E.Z, S({ widget: t }, n));
        case l.l.APPLICATION:
            return (0, r.jsx)(b.Z, S({ widget: t }, n));
        default:
            return null;
    }
}
function N() {
    return (0, r.jsxs)("div", {
        className: C.ukTeenDisclaimer,
        children: [
            (0, r.jsx)(o.d3s, { size: "xs" }),
            (0, r.jsx)(o.Text, {
                "aria-label": I.intl.string(I.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: I.intl.string(I.t["7blcz8"]),
            }),
        ],
    });
}
function j(e) {
    let { user: t, guildId: n, channelId: l } = e,
        o = (0, m.Z)(t.id),
        h = (0, a.e7)([u.default], () => u.default.getId() === t.id),
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
        O = 0 === o.length && h;
    return ((0, g.ZP)(o.filter(p.W)), (0, f.J)(h, o), O)
        ? (0, r.jsx)(v.Z, {})
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  h && b && (0, r.jsx)(N, {}),
                  o.map((e, i) =>
                      (0, r.jsx)(
                          T,
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
                  h && (0, r.jsx)(_.Z, {}),
              ],
          });
}
function P(e) {
    let t = i.useRef(null);
    return (
        (0, h.r)({ container: t.current }),
        (0, r.jsxs)(y.F, {
            "data-scroller": !0,
            scrollerRef: t,
            className: C.scroller,
            fade: !0,
            children: [(0, r.jsx)(O.Z, { scrollerRef: t }), (0, r.jsx)(j, S({}, e)), (0, r.jsx)(o.c43, {})],
        })
    );
}
