n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(726542),
    s = n(367907),
    d = n(122021),
    u = n(275759),
    f = n(888496),
    p = n(768762),
    m = n(706454),
    g = n(49012),
    b = n(981631),
    y = n(856651),
    O = n(388032),
    h = n(738873);
function j(e) {
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
function x(e, t) {
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
    var t;
    let { account: n, locale: o, userId: i } = e,
        l = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(l[y.PC.CREATED_AT], o),
        _ = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)('li', {
        className: h.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == _ ? void 0 : _.name,
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        x(j({}, e), {
                            className: h.platformIconContainer,
                            children: (0, r.jsx)('img', {
                                alt: O.intl.formatToPlainString(O.t.rtm15O, { name: null == _ ? void 0 : _.name }),
                                className: h.platformIcon,
                                src: null == _ ? void 0 : _.icon.lightPNG
                            })
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: h.connectionInfo,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (() => {
                                var e;
                                let t = null == _ || null == (e = _.getPlatformUserUrl) ? void 0 : e.call(_, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  x(j({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: h.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, r.jsx)(a.eee, {
                                          href: t,
                                          className: h.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          'aria-label': (null == _ ? void 0 : _.name) != null ? ''.concat(_.name, ', ').concat(n.name, ', ').concat(O.intl.string(O.t.q5jLJC)) : ''.concat(n.name, ', ').concat(O.intl.string(O.t.q5jLJC)),
                                          onClick: (e) => {
                                              ((0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i
                                              }),
                                                  (0, g.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == _ ? void 0 : _.type) !== b.ABu.DOMAIN
                                                      },
                                                      e
                                                  ));
                                          },
                                          children: (0, r.jsxs)('div', {
                                              className: h.accountName,
                                              children: [
                                                  (0, r.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              a.Text,
                                                              x(j({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: h.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, r.jsx)(p.Z, {
                                                      className: h.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != m &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    children: O.intl.format(O.t['9rfonp'], { date: m })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: h.metadata,
                        children: n.type === b.ABu.REDDIT ? (0, f.oP)(l) : n.type === b.ABu.STEAM ? (0, f.Dq)(l) : n.type === b.ABu.BLUESKY || n.type === b.ABu.MASTODON || n.type === b.ABu.TWITTER ? (0, f.rJ)(l) : n.type === b.ABu.PAYPAL ? (0, f.li)(l) : n.type === b.ABu.EBAY ? (0, f.ul)(l) : n.type === b.ABu.TIKTOK ? (0, f.hf)(l) : null
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { connections: t, userId: n, className: o } = e,
        a = (0, l.e7)([m.default], () => m.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)('ul', {
              className: i()(h.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
                      _,
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
