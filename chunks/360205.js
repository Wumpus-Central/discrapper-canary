n.d(t, {
    q: () => y,
    s: () => _
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(755721),
    s = n(481060),
    c = n(367907),
    u = n(626135),
    d = n(346479),
    p = n(665906),
    h = n(981631),
    f = n(388032),
    m = n(251027);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function b(e, t) {
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
function _(e) {
    let { channel: t, narrow: n } = e,
        l = (0, p.tc)(t);
    return (
        i.useEffect(() => {
            u.default.track(h.rMx.CHANNEL_BANNER_VIEWED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), { banner_type: 'thread' }));
        }, [t]),
        (0, r.jsxs)('div', {
            className: a()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, r.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? f.intl.string(f.t['833FDg']) : f.intl.string(f.t.rEeodH)
                }),
                l
                    ? (0, r.jsx)(o.zx, {
                          size: n ? o.zx.Sizes.SMALL : o.zx.Sizes.TINY,
                          className: m.chatHeaderBarButton,
                          color: o.zx.Colors.PRIMARY,
                          onClick: () => {
                              (u.default.track(
                                  h.rMx.CHANNEL_BANNER_CTA_CLICKED,
                                  b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
                                      banner_type: 'thread',
                                      cta_type: 'unarchive'
                                  })
                              ),
                                  d.Z.unarchiveThread(t, !1));
                          },
                          children: f.intl.string(f.t['0dvvEh'])
                      })
                    : null
            ]
        })
    );
}
function y(e) {
    let { channel: t, narrow: n } = e,
        l = (0, p.Xb)(t);
    return (
        i.useEffect(() => {
            u.default.track(h.rMx.CHANNEL_BANNER_VIEWED, b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), { banner_type: 'thread' }));
        }, [t]),
        (0, r.jsxs)('div', {
            className: a()(m.chatHeaderBar, { [m.narrow]: n }),
            children: [
                (0, r.jsx)(s.Text, {
                    className: m.chatHeaderBarText,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: t.isForumPost() ? f.intl.string(f.t.E7oO8v) : f.intl.string(f.t['V/JF2N'])
                }),
                l
                    ? (0, r.jsx)(o.zx, {
                          size: n ? o.zx.Sizes.SMALL : o.zx.Sizes.TINY,
                          className: m.chatHeaderBarButton,
                          color: o.zx.Colors.PRIMARY,
                          onClick: () => {
                              (u.default.track(
                                  h.rMx.CHANNEL_BANNER_CTA_CLICKED,
                                  b(g({}, (0, c.hH)(t.getGuildId()), (0, c.v_)(t)), {
                                      banner_type: 'thread',
                                      cta_type: 'unlock'
                                  })
                              ),
                                  d.Z.unlockThread(t));
                          },
                          children: f.intl.string(f.t.zA9d1N)
                      })
                    : null
            ]
        })
    );
}
