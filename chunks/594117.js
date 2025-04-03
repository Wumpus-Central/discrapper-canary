n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var i = n(685072),
    l = n(287734),
    a = n(906732),
    o = n(522651),
    s = n(15274),
    c = n(389303),
    u = n(881824),
    d = n(719100),
    p = n(870569),
    h = n(388032);
function f(e) {
    var t, n;
    let { tooltipText: l, onClick: s } = e,
        { parentAnalyticsLocation: c } = (0, a.ZP)(),
        { events: u, Component: d } = (0, i.K)();
    return (0, r.jsx)(
        p.Z,
        ((t = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                tooltipText: l,
                onClick: () => {
                    (0, o.v)(c, o.d.DISCONNECT), s();
                }
            },
            u
        )),
        (n = n = { icon: (0, r.jsx)(d, { size: 'refresh_sm' }) }),
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
        t)
    );
}
function g(e) {
    let { channel: t } = e;
    return (0, r.jsx)(f, {
        tooltipText: h.NW.string(h.t.SMKyio),
        onClick: () => {
            if ((0, d.Z)(t)) return void (0, u.Us)(t);
            l.default.disconnect();
        }
    });
}
function m(e) {
    let { channel: t } = e;
    return (0, r.jsx)(f, {
        tooltipText: h.NW.string(h.t['6vrfgo']),
        onClick: () => {
            if ((0, c.Z)(t)) return void (0, s.lC)(t);
            l.default.disconnect();
        }
    });
}
function b(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, r.jsx)(g, { channel: t }) : (0, r.jsx)(m, { channel: t });
}
