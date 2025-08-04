n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(726542),
    s = n(367907),
    u = n(122021),
    d = n(275759),
    f = n(888496),
    p = n(768762),
    m = n(706454),
    b = n(49012),
    g = n(981631),
    y = n(856651),
    j = n(388032),
    O = n(738873);
function x(e) {
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
function h(e, t) {
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
        m = (0, d.FI)(l[y.PC.CREATED_AT], o),
        _ = c.Z.get((0, u.rR)(n.type));
    return (0, r.jsxs)('li', {
        className: O.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == _ ? void 0 : _.name,
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        h(x({}, e), {
                            className: O.platformIconContainer,
                            children: (0, r.jsx)('img', {
                                alt: j.intl.formatToPlainString(j.t.rtm15O, { name: null == _ ? void 0 : _.name }),
                                className: O.platformIcon,
                                src: null == _ ? void 0 : _.icon.lightPNG
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
                                let t = null == _ || null == (e = _.getPlatformUserUrl) ? void 0 : e.call(_, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  h(x({}, e), {
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
                                          'aria-label': (null == _ ? void 0 : _.name) != null ? ''.concat(_.name, ', ').concat(n.name, ', ').concat(j.intl.string(j.t.q5jLJC)) : ''.concat(n.name, ', ').concat(j.intl.string(j.t.q5jLJC)),
                                          onClick: (e) => {
                                              ((0, s.yw)(g.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == _ ? void 0 : _.type) !== g.ABu.DOMAIN
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
                                                              h(x({}, e), {
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
                                    children: j.intl.format(j.t['9rfonp'], { date: m })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: O.metadata,
                        children: n.type === g.ABu.REDDIT ? (0, f.oP)(l) : n.type === g.ABu.STEAM ? (0, f.Dq)(l) : n.type === g.ABu.BLUESKY || n.type === g.ABu.MASTODON || n.type === g.ABu.TWITTER ? (0, f.rJ)(l) : n.type === g.ABu.PAYPAL ? (0, f.li)(l) : n.type === g.ABu.EBAY ? (0, f.ul)(l) : n.type === g.ABu.TIKTOK ? (0, f.hf)(l) : null
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
              className: i()(O.container, o),
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
