r.d(t, {
    C: () => S,
    Z: () => E,
}),
    r(388685);
var n = r(951288),
    l = r(647438),
    i = r(296009),
    a = r(442837),
    c = r(481060),
    o = r(355467),
    s = r(981312),
    u = r(314897),
    d = r(351402),
    f = r(206599),
    g = r(747101),
    b = r(517157),
    p = r(985748),
    O = r(566007),
    m = r(173951),
    j = r(455731),
    y = r(430790),
    v = r(795990),
    x = r(388032),
    h = r(830202);
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
function E(e) {
    var { widget: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["widget"]);
    switch (t.type) {
        case i.l.FAVORITE_GAMES:
            return (0, n.jsx)(O.Z, P({ widget: t }, r));
        case i.l.CURRENT_GAMES:
            return (0, n.jsx)(p.Z, P({ widget: t }, r));
        case i.l.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(j.Z, P({ widget: t }, r));
        case i.l.PLAYED_GAMES:
            return (0, n.jsx)(m.Z, P({ widget: t }, r));
        default:
            return null;
    }
}
function w() {
    return (0, n.jsxs)("div", {
        className: h.ukTeenDisclaimer,
        children: [
            (0, n.jsx)(c.d3s, { size: "xs" }),
            (0, n.jsx)(c.Text, {
                "aria-label": x.intl.string(x.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.string(x.t["7blcz8"]),
            }),
        ],
    });
}
function I(e) {
    let { user: t, guildId: r, channelId: i } = e,
        c = (0, b.Z)(t.id),
        { widgets: p, isGameFetching: O } = (0, g.Z)(c),
        m = (0, a.e7)([u.default], () => u.default.getId() === t.id),
        j = (() => {
            let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]),
                r = (0, s.U)();
            return (
                l.useEffect(() => {
                    null == e && null == t && r && (0, o.GE)();
                }, [e, t, r]),
                "GB" === e && r
            );
        })(),
        x = 0 === p.length && m;
    return ((0, f.J)(m, p), x)
        ? (0, n.jsx)(v.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  j && (0, n.jsx)(w, {}),
                  p.map((e) =>
                      (0, n.jsx)(
                          E,
                          {
                              widget: e,
                              user: t,
                              guildId: r,
                              channelId: i,
                              isGameFetching: O,
                          },
                          e.id,
                      ),
                  ),
                  m && (0, n.jsx)(y.Z, {}),
              ],
          });
}
function S(e) {
    return (0, n.jsx)(c.Ttm, {
        className: h.scroller,
        fade: !0,
        children: (0, n.jsx)(I, P({}, e)),
    });
}
