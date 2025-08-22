r.d(t, {
    C: () => I,
    Z: () => P,
}),
    r(388685);
var n = r(951288),
    i = r(647438),
    a = r(296009),
    l = r(442837),
    o = r(481060),
    c = r(355467),
    s = r(981312),
    u = r(314897),
    d = r(351402),
    f = r(206599),
    g = r(747101),
    b = r(517157),
    p = r(985748),
    m = r(566007),
    O = r(173951),
    j = r(455731),
    y = r(430790),
    x = r(795990),
    v = r(388032),
    h = r(830202);
function _(e) {
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
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["widget"]);
    switch (t.type) {
        case a.l.FAVORITE_GAMES:
            return (0, n.jsx)(m.Z, _({ widget: t }, r));
        case a.l.CURRENT_GAMES:
            return (0, n.jsx)(p.Z, _({ widget: t }, r));
        case a.l.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(j.Z, _({ widget: t }, r));
        case a.l.PLAYED_GAMES:
            return (0, n.jsx)(O.Z, _({ widget: t }, r));
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
                "aria-label": v.intl.string(v.t["7blcz8"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: v.intl.string(v.t["7blcz8"]),
            }),
        ],
    });
}
function S(e) {
    let { user: t, guildId: r, channelId: a } = e,
        o = (0, b.Z)(t.id),
        { widgets: p, isGameFetching: m } = (0, g.Z)(o),
        O = (0, l.e7)([u.default], () => u.default.getId() === t.id),
        j = (() => {
            let [e, t] = (0, l.Wu)([d.Z], () => [d.Z.ipCountryCode, d.Z.ipCountryCodeRequest]),
                r = (0, s.U)();
            return (
                i.useEffect(() => {
                    null == e && null == t && r && (0, c.GE)();
                }, [e, t, r]),
                "GB" === e && r
            );
        })(),
        v = 0 === p.length && O;
    return ((0, f.J)(O, p), v)
        ? (0, n.jsx)(x.Z, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  j && (0, n.jsx)(w, {}),
                  p.map((e) =>
                      (0, n.jsx)(
                          P,
                          {
                              widget: e,
                              user: t,
                              guildId: r,
                              channelId: a,
                              isGameFetching: m,
                          },
                          e.id,
                      ),
                  ),
                  O && (0, n.jsx)(y.Z, {}),
              ],
          });
}
function I(e) {
    return (0, n.jsx)(o.Ttm, {
        className: h.scroller,
        fade: !0,
        children: (0, n.jsx)(S, _({}, e)),
    });
}
