n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(685072),
    l = n(287734),
    a = n(906732),
    s = n(522651),
    o = n(15274),
    c = n(389303),
    u = n(881824),
    d = n(719100),
    p = n(870569),
    f = n(388032);
function h(e) {
    var t, n;
    let { tooltipText: l, onClick: o } = e,
        { parentAnalyticsLocation: c } = (0, a.ZP)(),
        { events: u, Component: d } = (0, i.K)();
    return (0, r.jsx)(
        p.Z,
        ((t = (function (e) {
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
        })(
            {
                tooltipText: l,
                onClick: () => {
                    (0, s.v)(c, s.d.DISCONNECT), o();
                },
            },
            u,
        )),
        (n = n = { icon: (0, r.jsx)(d, { size: "refresh_sm" }) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
function g(e) {
    let { channel: t } = e;
    return (0, r.jsx)(h, {
        tooltipText: f.intl.string(f.t.SMKyih),
        onClick: () => {
            if ((0, d.Z)(t)) return void (0, u.Us)(t);
            l.default.disconnect();
        },
    });
}
function m(e) {
    let { channel: t } = e;
    return (0, r.jsx)(h, {
        tooltipText: f.intl.string(f.t["6vrfgt"]),
        onClick: () => {
            if ((0, c.Z)(t)) return void (0, o.lC)(t);
            l.default.disconnect();
        },
    });
}
function _(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, r.jsx)(g, { channel: t }) : (0, r.jsx)(m, { channel: t });
}
