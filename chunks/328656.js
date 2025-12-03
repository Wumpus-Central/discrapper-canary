n.d(t, { E: () => _ }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(562558),
    c = n(681102),
    u = n(463194),
    d = n(505044);
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
    let { profile: t, className: n } = e,
        { gamesToDisplay: a, lastGameToDisplay: f, remainingGames: _ } = (0, l.Z)(t),
        m = i.useMemo(
            () => t.traits.map((e, t) => p({ key: "trait-".concat(t) }, e)).filter((e) => e.label.length > 0),
            [t],
        ),
        h = t.description.length > 0;
    return h || a.length > 0 || m.length > 0
        ? (0, r.jsxs)("div", {
              className: o()(d.body, n),
              children: [
                  h
                      ? (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: t.description,
                        })
                      : null,
                  (0, r.jsx)(c.Z, {
                      gamesToDisplay: a,
                      lastGameToDisplay: f,
                      remainingGames: _,
                      activity: t.gameActivity,
                  }),
                  (0, r.jsx)(u.F, { items: m }),
              ],
          })
        : (0, r.jsx)("div", { className: d.emptyBody });
}
