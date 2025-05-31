n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
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
    _ = n(49012),
    y = n(981631),
    x = n(856651),
    h = n(388032),
    g = n(738873);
function j(e) {
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
function I(e, t) {
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
    let { account: n, theme: o, locale: i, userId: c } = e,
        a = null != (t = n.metadata) ? t : {},
        b = (0, f.FI)(a[x.PC.CREATED_AT], i),
        v = s.Z.get((0, u.rR)(n.type));
    return (0, r.jsxs)('div', {
        className: g.connection,
        children: [
            (0, r.jsx)(l.ua7, {
                text: null == v ? void 0 : v.name,
                children: (e) =>
                    (0, r.jsx)(
                        'img',
                        I(j({}, e), {
                            alt: h.intl.formatToPlainString(h.t.rtm15O, { name: null == v ? void 0 : v.name }),
                            className: g.platformIcon,
                            src: (0, l.wjy)(o) ? (null == v ? void 0 : v.icon.darkSVG) : null == v ? void 0 : v.icon.lightSVG
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
                                                  I(j({}, e), {
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
                                          onClick: (e) => {
                                              (0, d.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: c
                                              }),
                                                  (0, _.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == v ? void 0 : v.type) !== y.ABu.DOMAIN
                                                      },
                                                      e
                                                  );
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
                                                              I(j({}, e), {
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
                            null != b &&
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    children: h.intl.format(h.t['9rfonp'], { date: b })
                                })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: g.metadata,
                        children: n.type === y.ABu.REDDIT ? (0, p.oP)(a) : n.type === y.ABu.STEAM ? (0, p.Dq)(a) : n.type === y.ABu.BLUESKY || n.type === y.ABu.MASTODON || n.type === y.ABu.TWITTER ? (0, p.rJ)(a) : n.type === y.ABu.PAYPAL ? (0, p.li)(a) : n.type === y.ABu.EBAY ? (0, p.ul)(a) : n.type === y.ABu.TIKTOK ? (0, p.hf)(a) : null
                    })
                ]
            })
        ]
    });
}
function O(e) {
    let { connections: t, userId: n, className: o } = e,
        l = (0, a.ZP)(),
        s = (0, c.e7)([b.default], () => b.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)('div', {
              className: i()(g.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
                      v,
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
