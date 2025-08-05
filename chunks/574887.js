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
    O = n(388032),
    j = n(738873);
function _(e) {
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
function h(e) {
    var t;
    let { account: n, locale: o, userId: l } = e,
        i = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(i[y.PC.CREATED_AT], o),
        h = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)('li', {
        className: j.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == h ? void 0 : h.name,
                children: (e) =>
                    (0, r.jsx)(
                        'div',
                        x(_({}, e), {
                            className: j.platformIconContainer,
                            children: (0, r.jsx)('img', {
                                alt: O.intl.formatToPlainString(O.t.rtm15O, { name: null == h ? void 0 : h.name }),
                                className: j.platformIcon,
                                src: null == h ? void 0 : h.icon.lightPNG
                            })
                        })
                    )
            }),
            (0, r.jsxs)('div', {
                className: j.connectionInfo,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (() => {
                                var e;
                                let t = null == h || null == (e = h.getPlatformUserUrl) ? void 0 : e.call(h, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  x(_({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: j.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, r.jsx)(a.eee, {
                                          href: t,
                                          className: j.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          'aria-label': (null == h ? void 0 : h.name) != null ? ''.concat(h.name, ', ').concat(n.name, ', ').concat(O.intl.string(O.t.q5jLJC)) : ''.concat(n.name, ', ').concat(O.intl.string(O.t.q5jLJC)),
                                          onClick: (e) => {
                                              ((0, s.yw)(g.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: l
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == h ? void 0 : h.type) !== g.ABu.DOMAIN
                                                      },
                                                      e
                                                  ));
                                          },
                                          children: (0, r.jsxs)('div', {
                                              className: j.accountName,
                                              children: [
                                                  (0, r.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              a.Text,
                                                              x(_({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: j.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, r.jsx)(p.Z, {
                                                      className: j.platformUrlIcon,
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
                        className: j.metadata,
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
              className: l()(j.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
                      h,
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
