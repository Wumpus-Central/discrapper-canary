n.d(t, { Z: () => h });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(493683),
    o = n(367907),
    s = n(205129),
    c = n(626135),
    u = n(981631),
    d = n(388032);
function p(e) {
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
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: h } = e,
        f = i.useContext(c.AnalyticsContext),
        g = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        m = 1 === h.length && 1 === n.length,
        b = n.length - h.length > 0;
    return (m || t) && !b && 0 !== g.length
        ? (0, r.jsx)(l.sNh, {
              id: 'message',
              action: function () {
                  a.Z.openPrivateChannel(g).then((t) => {
                      var n, r;
                      return o.ZP.trackWithMetadata(
                          u.rMx.ACTIVITY_FEED_DM_VISITED,
                          p(
                              {
                                  source:
                                      ((n = p({}, f.location)),
                                      (r = r = { object: u.qAy.LIST_ITEM }),
                                      Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                          : (function (e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r);
                                                }
                                                return n;
                                            })(Object(r)).forEach(function (e) {
                                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                            }),
                                      n),
                                  channel_id: t,
                                  recipient_id: 'string' == typeof g ? g : g[0],
                                  af_recently_played: !1
                              },
                              (0, s.y)(e)
                          )
                      );
                  });
              },
              label: d.NW.string(d.t['g33r/P'])
          })
        : null;
}
