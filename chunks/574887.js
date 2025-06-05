n.d(t, { Z: () => O });
var o = n(255367);
n(73800);
var r = n(120356),
    i = n.n(r),
    c = n(442837),
    l = n(481060),
    a = n(410030),
    s = n(726542),
    d = n(367907),
    u = n(122021),
    f = n(275759),
    p = n(888496),
    m = n(768762),
    b = n(706454),
    y = n(49012),
    _ = n(981631),
    x = n(856651),
    h = n(388032),
    j = n(738873);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            o.forEach(function (t) {
                var o;
                (o = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = o);
            });
    }
    return e;
}
function v(e, t) {
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
    let { account: n, theme: r, locale: i, userId: c } = e,
        a = null != (t = n.metadata) ? t : {},
        b = (0, f.FI)(a[x.PC.CREATED_AT], i),
        I = s.Z.get((0, u.rR)(n.type));
    return (0, o.jsxs)('li', {
        className: j.connection,
        children: [
            (0, o.jsx)(l.ua7, {
                text: null == I ? void 0 : I.name,
                children: (e) =>
                    (0, o.jsx)(
                        'img',
                        v(g({}, e), {
                            alt: h.intl.formatToPlainString(h.t.rtm15O, { name: null == I ? void 0 : I.name }),
                            className: j.platformIcon,
                            src: (0, l.wjy)(r) ? (null == I ? void 0 : I.icon.darkSVG) : null == I ? void 0 : I.icon.lightSVG
                        })
                    )
            }),
            (0, o.jsxs)('div', {
                className: j.connectionInfo,
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
                                                  v(g({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: j.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, o.jsx)(l.eee, {
                                          href: t,
                                          className: j.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          'aria-label': (null == I ? void 0 : I.name) != null ? ''.concat(I.name, ', ').concat(n.name, ', ').concat(h.intl.string(h.t.q5jLJC)) : ''.concat(n.name, ', ').concat(h.intl.string(h.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, d.yw)(_.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: c
                                              }),
                                                  (0, y.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == I ? void 0 : I.type) !== _.ABu.DOMAIN
                                                      },
                                                      e
                                                  );
                                          },
                                          children: (0, o.jsxs)('div', {
                                              className: j.accountName,
                                              children: [
                                                  (0, o.jsx)(l.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, o.jsx)(
                                                              l.Text,
                                                              v(g({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: j.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, o.jsx)(m.Z, {
                                                      className: j.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != b &&
                                (0, o.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: h.intl.format(h.t['9rfonp'], { date: b })
                                })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: j.metadata,
                        children: n.type === _.ABu.REDDIT ? (0, p.oP)(a) : n.type === _.ABu.STEAM ? (0, p.Dq)(a) : n.type === _.ABu.BLUESKY || n.type === _.ABu.MASTODON || n.type === _.ABu.TWITTER ? (0, p.rJ)(a) : n.type === _.ABu.PAYPAL ? (0, p.li)(a) : n.type === _.ABu.EBAY ? (0, p.ul)(a) : n.type === _.ABu.TIKTOK ? (0, p.hf)(a) : null
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { connections: t, userId: n, className: r } = e,
        l = (0, a.ZP)(),
        s = (0, c.e7)([b.default], () => b.default.locale);
    return 0 === t.length
        ? null
        : (0, o.jsx)('ul', {
              className: i()(j.container, r),
              children: t.map((e) =>
                  (0, o.jsx)(
                      I,
                      {
                          account: e,
                          userId: n,
                          theme: l,
                          locale: s
                      },
                      ''.concat(e.type, ':').concat(e.id)
                  )
              )
          });
}
