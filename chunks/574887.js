t.d(n, { Z: () => v });
var o = t(255367);
t(73800);
var r = t(120356),
    c = t.n(r),
    i = t(442837),
    a = t(481060),
    l = t(410030),
    s = t(726542),
    d = t(367907),
    u = t(122021),
    f = t(275759),
    p = t(888496),
    m = t(768762),
    b = t(706454),
    _ = t(49012),
    y = t(981631),
    h = t(856651),
    g = t(388032),
    x = t(738873);
function j(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function I(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, o);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function O(e) {
    var n;
    let { account: t, theme: r, locale: c, userId: i } = e,
        l = null != (n = t.metadata) ? n : {},
        b = (0, f.FI)(l[h.PC.CREATED_AT], c),
        O = s.Z.get((0, u.rR)(t.type));
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
                                let n = null == O || null == (e = O.getPlatformUserUrl) ? void 0 : e.call(O, t);
                                return null == n
                                    ? (0, o.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (e) =>
                                              (0, o.jsx)(
                                                  a.Text,
                                                  I(j({}, e), {
                                                      variant: 'text-sm/normal',
                                                      children: t.name
                                                  })
                                              )
                                      })
                                    : (0, o.jsx)(a.eee, {
                                          href: n,
                                          className: x.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          onClick: (e) => {
                                              (0, d.yw)(y.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: i
                                              }),
                                                  (0, _.q)(
                                                      {
                                                          href: n,
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
                                                      text: t.name,
                                                      children: (e) =>
                                                          (0, o.jsx)(
                                                              a.Text,
                                                              I(j({}, e), {
                                                                  variant: 'text-sm/normal',
                                                                  children: t.name
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
                        children: t.type === y.ABu.REDDIT ? (0, p.oP)(l) : t.type === y.ABu.STEAM ? (0, p.Dq)(l) : t.type === y.ABu.BLUESKY || t.type === y.ABu.MASTODON || t.type === y.ABu.TWITTER ? (0, p.rJ)(l) : t.type === y.ABu.PAYPAL ? (0, p.li)(l) : t.type === y.ABu.EBAY ? (0, p.ul)(l) : t.type === y.ABu.TIKTOK ? (0, p.hf)(l) : null
                    })
                ]
            })
        ]
    });
}
function v(e) {
    let { connections: n, userId: t, className: r } = e,
        a = (0, l.ZP)(),
        s = (0, i.e7)([b.default], () => b.default.locale);
    return 0 === n.length
        ? null
        : (0, o.jsx)('div', {
              className: c()(x.container, r),
              children: n.map((e) =>
                  (0, o.jsx)(
                      O,
                      {
                          account: e,
                          userId: t,
                          theme: a,
                          locale: s
                      },
                      ''.concat(e.type, ':').concat(e.id)
                  )
              )
          });
}
