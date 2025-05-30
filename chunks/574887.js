n.d(t, { Z: () => v });
var r = n(255367);
n(73800);
var o = n(120356),
    c = n.n(o),
    i = n(442837),
    l = n(481060),
    a = n(410030),
    s = n(726542),
    d = n(367907),
    u = n(122021),
    f = n(275759),
    p = n(888496),
    m = n(768762),
    b = n(706454),
    _ = n(49012),
    y = n(981631),
    x = n(856651),
    h = n(388032),
    j = n(738873);
function g(e) {
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
function O(e, t) {
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
function I(e) {
    var t;
    let { account: n, theme: o, locale: c, userId: i } = e,
        a = null != (t = n.metadata) ? t : {},
        b = (0, f.FI)(a[x.PC.CREATED_AT], c),
        I = s.Z.get((0, u.rR)(n.type));
    return (0, r.jsxs)('div', {
        className: j.connection,
        children: [
            (0, r.jsx)(l.ua7, {
                text: null == I ? void 0 : I.name,
                children: (e) =>
                    (0, r.jsx)(
                        'img',
                        O(g({}, e), {
                            alt: h.intl.formatToPlainString(h.t.rtm15O, { name: null == I ? void 0 : I.name }),
                            className: j.platformIcon,
                            src: (0, l.wjy)(o) ? (null == I ? void 0 : I.icon.darkSVG) : null == I ? void 0 : I.icon.lightSVG
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
                                let t = null == I || null == (e = I.getPlatformUserUrl) ? void 0 : e.call(I, n);
                                return null == t
                                    ? (0, r.jsx)(l.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  l.Text,
                                                  O(g({}, e), {
                                                      variant: 'text-sm/normal',
                                                      className: j.accountNameText,
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, r.jsx)(l.eee, {
                                          href: t,
                                          className: j.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          onClick: (e) => {
                                              (0, d.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i
                                              }),
                                                  (0, _.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == I ? void 0 : I.type) !== y.ABu.DOMAIN
                                                      },
                                                      e
                                                  );
                                          },
                                          children: (0, r.jsxs)('div', {
                                              className: j.accountName,
                                              children: [
                                                  (0, r.jsx)(l.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              l.Text,
                                                              O(g({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  className: j.accountNameText,
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, r.jsx)(m.Z, {
                                                      className: j.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != b &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: h.intl.format(h.t['9rfonp'], { date: b })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: j.metadata,
                        children: n.type === y.ABu.REDDIT ? (0, p.oP)(a) : n.type === y.ABu.STEAM ? (0, p.Dq)(a) : n.type === y.ABu.BLUESKY || n.type === y.ABu.MASTODON || n.type === y.ABu.TWITTER ? (0, p.rJ)(a) : n.type === y.ABu.PAYPAL ? (0, p.li)(a) : n.type === y.ABu.EBAY ? (0, p.ul)(a) : n.type === y.ABu.TIKTOK ? (0, p.hf)(a) : null
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { connections: t, userId: n, className: o } = e,
        l = (0, a.ZP)(),
        s = (0, i.e7)([b.default], () => b.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)('div', {
              className: c()(j.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
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
