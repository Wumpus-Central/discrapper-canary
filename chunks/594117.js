n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(685072),
    l = n(481060),
    a = n(287734),
    o = n(906732),
    s = n(522651),
    c = n(15274),
    u = n(389303),
    d = n(881824),
    p = n(719100),
    h = n(77880),
    f = n(870569),
    g = n(388032);
function m(e) {
    var t, n;
    let { tooltipText: a, onClick: c } = e,
        { parentAnalyticsLocation: u } = (0, o.ZP)(),
        { changeLeaveCallAndActivityIcons: d, isRTCIconRed: p } = (0, h.A)({ location: 'RTCConnectionDisconnectButton' }),
        { events: g, Component: m } = (0, i.K)(),
        b = d
            ? (0, r.jsx)(l.PBZ, {
                  color: p ? l.TVs.colors.STATUS_DANGER : void 0,
                  size: 'refresh_sm'
              })
            : (0, r.jsx)(m, { size: 'refresh_sm' });
    return (0, r.jsx)(
        f.Z,
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
                tooltipText: a,
                onClick: () => {
                    (0, s.v)(u, s.d.DISCONNECT), c();
                }
            },
            g
        )),
        (n = n = { icon: b }),
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
function b(e) {
    let { channel: t } = e;
    return (0, r.jsx)(m, {
        tooltipText: g.intl.string(g.t.SMKyio),
        onClick: () => {
            if ((0, p.Z)(t)) return void (0, d.Us)(t);
            a.default.disconnect();
        }
    });
}
function _(e) {
    let { channel: t } = e;
    return (0, r.jsx)(m, {
        tooltipText: g.intl.string(g.t['6vrfgo']),
        onClick: () => {
            if ((0, u.Z)(t)) return void (0, c.lC)(t);
            a.default.disconnect();
        }
    });
}
function E(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, r.jsx)(b, { channel: t }) : (0, r.jsx)(_, { channel: t });
}
