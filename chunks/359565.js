n.d(t, {
    q: () => _,
    s: () => b
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(367907),
    c = n(626135),
    u = n(346479),
    d = n(665906),
    p = n(981631),
    h = n(388032),
    f = n(251027);
function m(e) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e) {
    let { channel: t, narrow: n } = e,
        l = (0, d.tc)(t);
    return (
        i.useEffect(() => {
            c.default.track(p.rMx.CHANNEL_BANNER_VIEWED, g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), { banner_type: 'thread' }));
        }, [t]),
        (0, r.jsxs)('div', {
            className: o()(f.chatHeaderBar, { [f.narrow]: n }),
            children: [
                (0, r.jsx)(a.Text, {
                    className: f.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? h.NW.string(h.t['833FDg']) : h.NW.string(h.t.rEeodH)
                }),
                l
                    ? (0, r.jsx)(a.zxk, {
                          size: n ? a.zxk.Sizes.SMALL : a.zxk.Sizes.TINY,
                          className: f.chatHeaderBarButton,
                          color: a.zxk.Colors.PRIMARY,
                          onClick: () => {
                              c.default.track(
                                  p.rMx.CHANNEL_BANNER_CTA_CLICKED,
                                  g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
                                      banner_type: 'thread',
                                      cta_type: 'unarchive'
                                  })
                              ),
                                  u.Z.unarchiveThread(t, !1);
                          },
                          children: h.NW.string(h.t['0dvvEh'])
                      })
                    : null
            ]
        })
    );
}
function _(e) {
    let { channel: t, narrow: n } = e,
        l = (0, d.Xb)(t);
    return (
        i.useEffect(() => {
            c.default.track(p.rMx.CHANNEL_BANNER_VIEWED, g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), { banner_type: 'thread' }));
        }, [t]),
        (0, r.jsxs)('div', {
            className: o()(f.chatHeaderBar, { [f.narrow]: n }),
            children: [
                (0, r.jsx)(a.Text, {
                    className: f.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? h.NW.string(h.t.E7oO8v) : h.NW.string(h.t['V/JF2N'])
                }),
                l
                    ? (0, r.jsx)(a.zxk, {
                          size: n ? a.zxk.Sizes.SMALL : a.zxk.Sizes.TINY,
                          className: f.chatHeaderBarButton,
                          color: a.zxk.Colors.PRIMARY,
                          onClick: () => {
                              c.default.track(
                                  p.rMx.CHANNEL_BANNER_CTA_CLICKED,
                                  g(m({}, (0, s.hH)(t.getGuildId()), (0, s.v_)(t)), {
                                      banner_type: 'thread',
                                      cta_type: 'unlock'
                                  })
                              ),
                                  u.Z.unlockThread(t);
                          },
                          children: h.NW.string(h.t.zA9d1N)
                      })
                    : null
            ]
        })
    );
}
