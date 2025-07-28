n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    c = n(442837),
    l = n(481060),
    a = n(726542),
    s = n(367907),
    d = n(122021),
    u = n(275759),
    f = n(888496),
    m = n(768762),
    p = n(706454),
    b = n(49012),
    x = n(981631),
    h = n(856651),
    _ = n(388032),
    g = n(738873);
function y(e) {
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
function j(e, t) {
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
function v(e) {
    var t;
    let { account: n, locale: o, userId: i } = e,
        c = null != (t = n.metadata) ? t : {},
        p = (0, u.FI)(c[h.PC.CREATED_AT], o),
        v = a.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)('li', {
        className: g.connection,
        children: [
            (0, r.jsx)(l.ua7, {
                text: null == v ? void 0 : v.name,
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        j(y({}, e), {
                            className: g.platformIconContainer,
                            children: (0, r.jsx)('img', {
                                alt: _.intl.formatToPlainString(_.t.rtm15O, { name: null == v ? void 0 : v.name }),
                                className: g.platformIcon,
                                src: null == v ? void 0 : v.icon.lightPNG
                            })
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: g.connectionInfo,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (() => {
                                var e;
                                let t = null == v || null == (e = v.getPlatformUserUrl) ? void 0 : e.call(v, n);
                                return null == t
                                    ? (0, r.jsx)(l.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  l.Text,
                                                  j(y({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: g.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, r.jsx)(l.eee, {
                                          href: t,
                                          className: g.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          'aria-label': (null == v ? void 0 : v.name) != null ? ''.concat(v.name, ', ').concat(n.name, ', ').concat(_.intl.string(_.t.q5jLJC)) : ''.concat(n.name, ', ').concat(_.intl.string(_.t.q5jLJC)),
                                          onClick: (e) => {
                                              ((0, s.yw)(x.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == v ? void 0 : v.type) !== x.ABu.DOMAIN
                                                      },
                                                      e
                                                  ));
                                          },
                                          children: (0, r.jsxs)('div', {
                                              className: g.accountName,
                                              children: [
                                                  (0, r.jsx)(l.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              l.Text,
                                                              j(y({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: g.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, r.jsx)(m.Z, {
                                                      className: g.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != p &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: _.intl.format(_.t['9rfonp'], { date: p })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: g.metadata,
                        children: n.type === x.ABu.REDDIT ? (0, f.oP)(c) : n.type === x.ABu.STEAM ? (0, f.Dq)(c) : n.type === x.ABu.BLUESKY || n.type === x.ABu.MASTODON || n.type === x.ABu.TWITTER ? (0, f.rJ)(c) : n.type === x.ABu.PAYPAL ? (0, f.li)(c) : n.type === x.ABu.EBAY ? (0, f.ul)(c) : n.type === x.ABu.TIKTOK ? (0, f.hf)(c) : null
                    })
                ]
            })
        ]
    });
}
function I(e) {
    let { connections: t, userId: n, className: o } = e,
        l = (0, c.e7)([p.default], () => p.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)('ul', {
              className: i()(g.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
                      v,
                      {
                          account: e,
                          userId: n,
                          locale: l
                      },
                      ''.concat(e.type, ':').concat(e.id)
                  )
              )
          });
}
