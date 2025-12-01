n.d(t, { Z: () => _ });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(726542),
    o = n(842146),
    s = n(293177),
    l = n(349407),
    c = n(49012),
    u = n(202120),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    var t;
    let { platformType: f, location: _, overrideUrl: m, successRedirect: h } = e;
    return (f === d.ABu.LEAGUE_OF_LEGENDS && (f = d.ABu.RIOT_GAMES), f === d.ABu.CRUNCHYROLL)
        ? void o.K([null != _ ? _ : "unknown"])
        : f === d.ABu.XBOX
          ? void l.K([null != _ ? _ : "unknown"])
          : f === d.ABu.PLAYSTATION || f === d.ABu.PLAYSTATION_STAGING
            ? void s.K([null != _ ? _ : "unknown"], f)
            : f === d.ABu.DOMAIN
              ? void (0, i.ZDy)(async () => {
                    let { default: e } = await n.e("64941").then(n.bind(n, 907053));
                    return (t) => (0, r.jsx)(e, p({ analyticsLocation: [null != _ ? _ : "unknown"] }, t));
                })
              : (null == (t = a.Z.get(f)) ? void 0 : t.isFederated) === !0
                ? void (0, i.ZDy)(async () => {
                      let { default: e } = await n.e("54934").then(n.bind(n, 701460));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              p(
                                  {
                                      platformType: f,
                                      location: _,
                                      successRedirect: h,
                                  },
                                  t,
                              ),
                          );
                  })
                : null != m
                  ? void (0, c.q)({
                        shouldConfirm: !0,
                        href: m,
                        onConfirm: () => {
                            (0, u.H)(
                                f,
                                {
                                    location: _,
                                    successRedirect: h,
                                },
                                m,
                            );
                        },
                    })
                  : void (0, u.H)(f, {
                        location: _,
                        successRedirect: h,
                    });
}
