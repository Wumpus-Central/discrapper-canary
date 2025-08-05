n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var o = n(120356),
    l = n.n(o),
    i = n(442837),
    a = n(481060),
    c = n(726542),
    s = n(367907),
    d = n(122021),
    u = n(275759),
    f = n(888496),
    p = n(768762),
    m = n(706454),
    b = n(49012),
    g = n(981631),
    y = n(856651),
    _ = n(388032),
    O = n(738873);
function h(e) {
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
function x(e) {
    var t;
    let { account: n, locale: o, userId: l } = e,
        i = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(i[y.PC.CREATED_AT], o),
        x = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)('li', {
        className: O.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == x ? void 0 : x.name,
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        j(h({}, e), {
                            className: O.platformIconContainer,
                            children: (0, r.jsx)('img', {
                                alt: _.intl.formatToPlainString(_.t.rtm15O, { name: null == x ? void 0 : x.name }),
                                className: O.platformIcon,
                                src: null == x ? void 0 : x.icon.lightPNG
                            })
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: O.connectionInfo,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (() => {
                                var e;
                                let t = null == x || null == (e = x.getPlatformUserUrl) ? void 0 : e.call(x, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  j(h({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: O.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, r.jsx)(a.eee, {
                                          href: t,
                                          className: O.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          'aria-label': (null == x ? void 0 : x.name) != null ? ''.concat(x.name, ', ').concat(n.name, ', ').concat(_.intl.string(_.t.q5jLJC)) : ''.concat(n.name, ', ').concat(_.intl.string(_.t.q5jLJC)),
                                          onClick: (e) => {
                                              ((0, s.yw)(g.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: l
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == x ? void 0 : x.type) !== g.ABu.DOMAIN
                                                      },
                                                      e
                                                  ));
                                          },
                                          children: (0, r.jsxs)('div', {
                                              className: O.accountName,
                                              children: [
                                                  (0, r.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              a.Text,
                                                              j(h({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: O.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, r.jsx)(p.Z, {
                                                      className: O.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != m &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    children: _.intl.format(_.t['9rfonp'], { date: m })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: O.metadata,
                        children: n.type === g.ABu.REDDIT ? (0, f.oP)(i) : n.type === g.ABu.STEAM ? (0, f.Dq)(i) : n.type === g.ABu.BLUESKY || n.type === g.ABu.MASTODON || n.type === g.ABu.TWITTER ? (0, f.rJ)(i) : n.type === g.ABu.PAYPAL ? (0, f.li)(i) : n.type === g.ABu.EBAY ? (0, f.ul)(i) : n.type === g.ABu.TIKTOK ? (0, f.hf)(i) : null
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { connections: t, userId: n, className: o } = e,
        a = (0, i.e7)([m.default], () => m.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)('ul', {
              className: l()(O.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
                      x,
                      {
                          account: e,
                          userId: n,
                          locale: a
                      },
                      ''.concat(e.type, ':').concat(e.id)
                  )
              )
          });
}
