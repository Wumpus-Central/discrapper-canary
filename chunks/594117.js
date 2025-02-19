n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(685072),
    l = n(287734),
    o = n(15274),
    a = n(389303),
    s = n(881824),
    c = n(719100),
    u = n(870569),
    d = n(388032);
function p(e) {
    var t, n;
    let { tooltipText: l, onClick: o } = e,
        { events: a, Component: s } = (0, i.K)();
    return (0, r.jsx)(
        u.Z,
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
                onClick: o
            },
            a
        )),
        (n = n = { icon: (0, r.jsx)(s, { size: 'refresh_sm' }) }),
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
function h(e) {
    let { channel: t } = e;
    return (0, r.jsx)(p, {
        tooltipText: d.NW.string(d.t.SMKyio),
        onClick: () => {
            if ((0, c.Z)(t)) {
                (0, s.Us)(t);
                return;
            }
            l.default.disconnect();
        }
    });
}
function g(e) {
    let { channel: t } = e;
    return (0, r.jsx)(p, {
        tooltipText: d.NW.string(d.t['6vrfgo']),
        onClick: () => {
            if ((0, a.Z)(t)) {
                (0, o.lC)(t);
                return;
            }
            l.default.disconnect();
        }
    });
}
function f(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, r.jsx)(h, { channel: t }) : (0, r.jsx)(g, { channel: t });
}
