n.d(t, { P: () => _ }), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(115703),
    c = n(438842),
    u = n(879472),
    d = n(838934);
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
        { gamesToDisplay: a, lastGameToDisplay: f, remainingGames: _ } = (0, l.A)(t),
        h = i.useMemo(
            () => t.traits.map((e, t) => p({ key: "trait-".concat(t) }, e)).filter((e) => e.label.length > 0),
            [t],
        ),
        m = t.description.length > 0;
    return m || a.length > 0 || h.length > 0
        ? (0, r.jsxs)("div", {
              className: s()(d.rf, n),
              children: [
                  m
                      ? (0, r.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: t.description,
                        })
                      : null,
                  (0, r.jsx)(c.A, {
                      gamesToDisplay: a,
                      lastGameToDisplay: f,
                      remainingGames: _,
                      activity: t.gameActivity,
                  }),
                  (0, r.jsx)(u.w, { items: h }),
              ],
          })
        : (0, r.jsx)("div", { className: d.C3 });
}
