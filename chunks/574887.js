n.d(t, { Z: () => v });
var o = n(255367);
n(73800);
var r = n(120356),
    c = n.n(r),
    i = n(442837),
    a = n(481060),
    l = n(410030),
    s = n(726542),
    d = n(367907),
    u = n(122021),
    f = n(275759),
    p = n(888496),
    m = n(768762),
    b = n(706454),
    _ = n(49012),
    y = n(981631),
    h = n(856651),
    g = n(388032),
    x = n(738873);
function j(e) {
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
function I(e, t) {
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
function O(e) {
    var t;
    let { account: n, theme: r, locale: c, userId: i } = e,
        l = null != (t = n.metadata) ? t : {},
        b = (0, f.FI)(l[h.PC.CREATED_AT], c),
        O = s.Z.get((0, u.rR)(n.type));
    return (0, o.jsxs)('div', {
        className: x.connection,
        children: [
            (0, o.jsx)(a.ua7, {
                text: null == O ? void 0 : O.name,
                children: (e) =>
                    (0, o.jsx)(
                        'img',
                        I(j({}, e), {
                            alt: g.intl.formatToPlainString(g.t.rtm15O, { name: null == O ? void 0 : O.name }),
                            className: x.platformIcon,
                            src: (0, a.wjy)(r) ? (null == O ? void 0 : O.icon.darkSVG) : null == O ? void 0 : O.icon.lightSVG
                        })
                    )
            }),
            (0, o.jsxs)('div', {
                className: x.connectionInfo,
                children: [
                    (0, o.jsxs)('div', {
                        children: [
                            (() => {
                                var e;
                                let t = null == O || null == (e = O.getPlatformUserUrl) ? void 0 : e.call(O, n);
                                return null == t
                                    ? (0, o.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, o.jsx)(
                                                  a.Text,
                                                  I(j({}, e), {
                                                      variant: 'text-sm/normal',
                                                      children: n.name
                                                  })
                                              )
                                      })
                                    : (0, o.jsx)(a.eee, {
                                          href: t,
                                          className: x.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          onClick: (e) => {
                                              (0, d.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i
                                              }),
                                                  (0, _.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == O ? void 0 : O.type) !== y.ABu.DOMAIN
                                                      },
                                                      e
                                                  );
                                          },
                                          children: (0, o.jsxs)('div', {
                                              className: x.accountName,
                                              children: [
                                                  (0, o.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, o.jsx)(
                                                              a.Text,
                                                              I(j({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  children: n.name
                                                              })
                                                          )
                                                  }),
                                                  (0, o.jsx)(m.Z, {
                                                      className: x.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT
                                                  })
                                              ]
                                          })
                                      });
                            })(),
                            null != b &&
                                (0, o.jsx)(a.Text, {
                                    variant: 'text-xs/normal',
                                    children: g.intl.format(g.t['9rfonp'], { date: b })
                                })
                        ]
                    }),
                    (0, o.jsx)('div', {
                        className: x.metadata,
                        children: n.type === y.ABu.REDDIT ? (0, p.oP)(l) : n.type === y.ABu.STEAM ? (0, p.Dq)(l) : n.type === y.ABu.BLUESKY || n.type === y.ABu.MASTODON || n.type === y.ABu.TWITTER ? (0, p.rJ)(l) : n.type === y.ABu.PAYPAL ? (0, p.li)(l) : n.type === y.ABu.EBAY ? (0, p.ul)(l) : n.type === y.ABu.TIKTOK ? (0, p.hf)(l) : null
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { connections: t, userId: n, className: r } = e,
        a = (0, l.ZP)(),
        s = (0, i.e7)([b.default], () => b.default.locale);
    return 0 === t.length
        ? null
        : (0, o.jsx)('div', {
              className: c()(x.container, r),
              children: t.map((e) =>
                  (0, o.jsx)(
                      O,
                      {
                          account: e,
                          userId: n,
                          theme: a,
                          locale: s
                      },
                      ''.concat(e.type, ':').concat(e.id)
                  )
              )
          });
}
