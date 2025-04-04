n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(784712),
    a = n(531578),
    s = n(388032);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t, n) {
    var r;
    let { rating: a, problem: l, feedback: c } = n;
    (0, o.Z)({
        problem: null != (r = null == l ? void 0 : l.value) ? r : null,
        summary: e,
        feedback: c,
        guildId: t.guild_id,
        channelId: t.id,
        location: 'Summary divider',
        rating: a
    }),
        (0, i.showToast)((0, i.createToast)(s.NW.string(s.t['d9+vQ0']), i.ToastType.SUCCESS));
}
function _(e) {
    let { summary: t, channel: o, rating: s } = e;
    null != t &&
        (s === a.aZ.BAD
            ? (0, i.ZDy)(async () => {
                  let { default: e } = await n.e('62104').then(n.bind(n, 580584));
                  return (n) =>
                      (0, r.jsx)(
                          e,
                          d(c({}, n), {
                              onSubmit: (e) => f(t, o, e),
                              startRating: s
                          })
                      );
              })
            : f(t, o, {
                  rating: s,
                  problem: null,
                  feedback: '',
                  dontShowAgain: !1
              }));
}
