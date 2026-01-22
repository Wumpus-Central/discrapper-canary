l.d(t, { default: () => h });
var r = l(627968);
l(64700);
var n = l(158954),
    s = l(397927),
    i = l(688810),
    a = l(801264),
    d = l(397400),
    c = l(187549),
    o = l(355609),
    u = l(842319),
    f = l(27023),
    b = l(800007),
    m = l(294726),
    x = l(985018),
    j = l(8577);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = l[t]),
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var l = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      l.push.apply(l, r);
                  }
                  return l;
              })(Object(t)).forEach(function (l) {
                  Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
              }),
        e
    );
}
function p(e) {
    let { step: t, setFooterNode: l } = (0, f.bv)(),
        i = (0, c.U)("GameServerSetupModal"),
        { title: d, subtitle: p } = (function (e) {
            switch (e) {
                case b.HS.SELECT_GAME:
                    return {
                        title: x.intl.string(m.default["3vWDMz"]),
                        subtitle: x.intl.string(m.default.Az5bjs),
                    };
                case b.HS.SERVER_SETTINGS:
                    return { title: x.intl.string(m.default.RLGW9z) };
            }
        })(t);
    return (0, r.jsxs)(
        n.dWK,
        g(v({}, e), {
            size: "lg",
            children: [
                (0, r.jsx)(n.rQ0, {
                    title: d,
                    subtitle: p,
                }),
                i &&
                    (0, r.jsx)("div", {
                        className: j.M,
                        children: (0, r.jsx)(a.A, {
                            look: a.k.WARNING,
                            children: x.intl.format(m.default.XzXjK2, {}),
                        }),
                    }),
                (0, r.jsx)(s.IpV, {
                    className: j.j,
                    style: { width: b.ST },
                    children: (0, r.jsx)("div", {
                        style: { padding: b.by },
                        children: (0, r.jsxs)(s.tN_, {
                            width: b.U$,
                            activeSlide: t,
                            children: [
                                (0, r.jsx)(
                                    s.q7S,
                                    {
                                        id: b.HS.SELECT_GAME,
                                        children: (0, r.jsx)(o.A, {}),
                                    },
                                    b.HS.SELECT_GAME,
                                ),
                                (0, r.jsx)(
                                    s.q7S,
                                    {
                                        id: b.HS.SERVER_SETTINGS,
                                        children: (0, r.jsx)(u.A, {}),
                                    },
                                    b.HS.SERVER_SETTINGS,
                                ),
                            ],
                        }),
                    }),
                }),
                (0, r.jsx)("div", { ref: (e) => l(e) }),
            ],
        }),
    );
}
function h(e) {
    let { analyticsLocations: t } = (0, i.Ay)();
    return (
        (0, d.wN)(e.guildId, t, e.analyticsLocation),
        (0, r.jsx)(i.f5, {
            value: t,
            children: (0, r.jsx)(f.mf, g(v({}, e), { children: (0, r.jsx)(p, v({}, e)) })),
        })
    );
}
