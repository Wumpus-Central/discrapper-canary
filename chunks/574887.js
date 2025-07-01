n.d(t, { Z: () => v });
var o = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    c = n(442837),
    l = n(481060),
    a = n(726542),
    s = n(367907),
    d = n(122021),
    u = n(275759),
    f = n(888496),
    p = n(768762),
    m = n(706454),
    b = n(49012),
    _ = n(981631),
    x = n(856651),
    y = n(388032),
    h = n(738873);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                ((o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o));
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
                      var o = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, o);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t;
    let { account: n, locale: r, userId: i } = e,
        c = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(c[x.PC.CREATED_AT], r),
        I = a.Z.get((0, d.rR)(n.type));
    return (0, o.jsxs)('li', {
        className: h.connection,
        children: [
            (0, o.jsx)(l.ua7, {
                text: null == I ? void 0 : I.name,
                children: (e) =>
                    (0, o.jsx)(
                        'div',
                        j(g({}, e), {
                            className: h.platformIconContainer,
                            children: (0, o.jsx)('img', {
                                alt: y.intl.formatToPlainString(y.t.rtm15O, { name: null == I ? void 0 : I.name }),
                                className: h.platformIcon,
                                src: null == I ? void 0 : I.icon.lightPNG
                            })
                        })
                    )
            }),
            (0, o.jsxs)('div', {
                className: h.connectionInfo,
                children: [
                    (0, o.jsxs)('div', {
                        children: [
                            (() => {
                                var e;
                                let t = null == I || null == (e = I.getPlatformUserUrl) ? void 0 : e.call(I, n);
                                return null == t
                                    ? (0, o.jsx)(l.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, o.jsx)(
                                                  l.Text,
                                                  j(g({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: h.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, o.jsx)(l.eee, {
                                          href: t,
                                          className: h.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          'aria-label': (null == I ? void 0 : I.name) != null ? ''.concat(I.name, ', ').concat(n.name, ', ').concat(y.intl.string(y.t.q5jLJC)) : ''.concat(n.name, ', ').concat(y.intl.string(y.t.q5jLJC)),
                                          onClick: (e) => {
                                              ((0, s.yw)(_.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == I ? void 0 : I.type) !== _.ABu.DOMAIN
                                                      },
                                                      e
                                                  ));
                                          },
                                          children: (0, o.jsxs)('div', {
                                              className: h.accountName,
                                              children: [
                                                  (0, o.jsx)(l.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, o.jsx)(
                                                              l.Text,
                                                              j(g({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: h.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, o.jsx)(p.Z, {
                                                      className: h.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != m &&
                                (0, o.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: y.intl.format(y.t['9rfonp'], { date: m })
                                })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: h.metadata,
                        children: n.type === _.ABu.REDDIT ? (0, f.oP)(c) : n.type === _.ABu.STEAM ? (0, f.Dq)(c) : n.type === _.ABu.BLUESKY || n.type === _.ABu.MASTODON || n.type === _.ABu.TWITTER ? (0, f.rJ)(c) : n.type === _.ABu.PAYPAL ? (0, f.li)(c) : n.type === _.ABu.EBAY ? (0, f.ul)(c) : n.type === _.ABu.TIKTOK ? (0, f.hf)(c) : null
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { connections: t, userId: n, className: r } = e,
        l = (0, c.e7)([m.default], () => m.default.locale);
    return 0 === t.length
        ? null
        : (0, o.jsx)('ul', {
              className: i()(h.container, r),
              children: t.map((e) =>
                  (0, o.jsx)(
                      I,
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
