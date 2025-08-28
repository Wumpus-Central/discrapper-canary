r.d(t, {
    C: () => T,
    Z: () => I,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    l = r(296009),
    a = r(442837),
    o = r(481060),
    c = r(355467),
    s = r(981312),
    u = r(314897),
    d = r(351402),
    f = r(206599),
    g = r(5136),
    p = r(747101),
    b = r(517157),
    m = r(985748),
    O = r(566007),
    j = r(173951),
    y = r(455731),
    x = r(430790),
    v = r(640078),
    h = r(795990),
    _ = r(388032),
    w = r(830202);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function I(e) {
    var { widget: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["widget"]);
    switch (t.type) {
        case l.l.FAVORITE_GAMES:
            return (0, n.jsx)(O.Z, P({ widget: t }, r));
        case l.l.CURRENT_GAMES:
            return (0, n.jsx)(m.Z, P({ widget: t }, r));
        case l.l.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(y.Z, P({ widget: t }, r));
        case l.l.PLAYED_GAMES:
            return (0, n.jsx)(j.Z, P({ widget: t }, r));
        default:
            return null;
    }
}
function S() {
    return (0, n.jsxs)("div", {
        className: w.ukTeenDisclaimer,
        children: [
            (0, n.jsx)(o.d3s, { size: "xs" }),
            (0, n.jsx)(o.Text, {
                "aria-label": _.intl.string(_.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: _.intl.string(_.t["7blcz8"]),
            }),
        ],
    });
}
function E(e) {
    let { user: t, guildId: r, channelId: l } = e,
        o = (0, b.Z)(t.id),
        { widgets: g, isGameFetching: m } = (0, p.Z)(o),
        O = (0, a.e7)([u.default], () => u.default.getId() === t.id),
        j = (() => {
            let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]),
                r = (0, s.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && r && (0, c.GE)();
                }, [e, t, r]),
                "GB" === e && r
            );
        })(),
        y = 0 === g.length && O;
    return ((0, f.J)(O, g), y)
        ? (0, n.jsx)(h.Z, {})
        : (0, n.jsxs)("div", {
              className: w.widgets,
              children: [
                  O && j && (0, n.jsx)(S, {}),
                  g.map((e, i) =>
                      (0, n.jsx)(
                          I,
                          {
                              widget: e,
                              user: t,
                              guildId: r,
                              channelId: l,
                              isGameFetching: m,
                              index: i,
                          },
                          e.id,
                      ),
                  ),
                  O && (0, n.jsx)(x.Z, {}),
              ],
          });
}
function T(e) {
    let t = i.useRef(null);
    return (
        (0, g.r)({ container: t.current }),
        (0, n.jsxs)(o.Ttm, {
            "data-scroller": !0,
            ref: t,
            className: w.scroller,
            fade: !0,
            children: [(0, n.jsx)(v.Z, { scrollerRef: t }), (0, n.jsx)(E, P({}, e))],
        })
    );
}
