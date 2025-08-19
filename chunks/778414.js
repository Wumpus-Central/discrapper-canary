r.d(t, {
    C: () => S,
    Z: () => P,
}),
    r(388685);
var n = r(951288),
    l = r(647438),
    i = r(296009),
    a = r(442837),
    o = r(481060),
    c = r(355467),
    s = r(981312),
    u = r(314897),
    d = r(351402),
    f = r(206599),
    g = r(747101),
    p = r(517157),
    b = r(985748),
    O = r(566007),
    m = r(173951),
    j = r(455731),
    y = r(430790),
    v = r(795990),
    x = r(388032),
    h = r(830202);
function E(e) {
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
function P(e) {
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
            return (0, n.jsx)(O.Z, E({ widget: t }, r));
        case i.l.CURRENT_GAMES:
            return (0, n.jsx)(b.Z, E({ widget: t }, r));
        case i.l.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(j.Z, E({ widget: t }, r));
        case i.l.PLAYED_GAMES:
            return (0, n.jsx)(m.Z, E({ widget: t }, r));
        default:
            return null;
    }
}
function w() {
    return (0, n.jsxs)("div", {
        className: h.ukTeenDisclaimer,
        children: [
            (0, n.jsx)(o.d3s, { size: "xs" }),
            (0, n.jsx)(o.Text, {
                "aria-label": x.intl.string(x.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: x.intl.string(x.t["7blcz8"]),
            }),
        ],
    });
}
function _(e) {
    let { user: t, guildId: r, channelId: i } = e,
        o = (0, p.Z)(t.id),
        { widgets: b, isGameFetching: O } = (0, g.Z)(o),
        m = (0, a.e7)([u.default], () => u.default.getId() === t.id),
        j = (() => {
            let [e, t] = (0, a.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]),
                r = (0, s.U)();
            return (
                l.useEffect(() => {
                    null == e && null == t && r && (0, c.GE)();
                }, [e, t, r]),
                "GB" === e && r
            );
        })(),
        x = 0 === b.length && m;
    return ((0, f.J)(m, b), x)
        ? (0, n.jsx)(v.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  j && (0, n.jsx)(w, {}),
                  b.map((e) =>
                      (0, n.jsx)(
                          P,
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
    return (0, n.jsx)(o.Ttm, {
        className: h.scroller,
        fade: !0,
        children: (0, n.jsx)(_, E({}, e)),
    });
}
