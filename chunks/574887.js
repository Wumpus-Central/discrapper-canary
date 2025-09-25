t.d(n, { Z: () => Z });
var l = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(481060),
    a = t(726542),
    c = t(367907),
    d = t(122021),
    u = t(275759),
    m = t(888496),
    f = t(768762),
    p = t(706454),
    h = t(49012),
    j = t(981631),
    x = t(856651),
    v = t(388032),
    g = t(638999);
function b(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function y(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
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
    let { account: t, locale: i, userId: r } = e,
        o = null != (n = t.metadata) ? n : {},
        p = (0, u.FI)(o[x.PC.CREATED_AT], i),
        O = a.Z.get((0, d.rR)(t.type));
    return (0, l.jsxs)("li", {
        className: g.connection,
        children: [
            (0, l.jsx)(s.ua7, {
                text: null == O ? void 0 : O.name,
                children: (e) =>
                    (0, l.jsx)(
                        "div",
                        y(b({}, e), {
                            className: g.platformIconContainer,
                            children: (0, l.jsx)("img", {
                                alt: v.intl.formatToPlainString(v.t.rtm15O, { name: null == O ? void 0 : O.name }),
                                className: g.platformIcon,
                                src: null == O ? void 0 : O.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, l.jsxs)("div", {
                className: g.connectionInfo,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let n = null == O || null == (e = O.getPlatformUserUrl) ? void 0 : e.call(O, t);
                                return null == n
                                    ? (0, l.jsx)(s.ua7, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (e) =>
                                              (0, l.jsx)(
                                                  s.Text,
                                                  y(b({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: g.accountNameText,
                                                      children: t.name,
                                                  }),
                                              ),
                                      })
                                    : (0, l.jsx)(s.eee, {
                                          href: n,
                                          className: g.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == O ? void 0 : O.name) != null
                                                  ? ""
                                                        .concat(O.name, ", ")
                                                        .concat(t.name, ", ")
                                                        .concat(v.intl.string(v.t.q5jLJC))
                                                  : "".concat(t.name, ", ").concat(v.intl.string(v.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, c.yw)(j.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: r,
                                              }),
                                                  (0, h.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == O ? void 0 : O.type) !== j.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, l.jsxs)("div", {
                                              className: g.accountName,
                                              children: [
                                                  (0, l.jsx)(s.ua7, {
                                                      overflowOnly: !0,
                                                      text: t.name,
                                                      children: (e) =>
                                                          (0, l.jsx)(
                                                              s.Text,
                                                              y(b({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: g.accountNameText,
                                                                  children: t.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, l.jsx)(f.Z, {
                                                      className: g.platformUrlIcon,
                                                      direction: f.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != p &&
                                (0, l.jsx)(s.Text, {
                                    variant: "text-xs/normal",
                                    children: v.intl.format(v.t["9rfonp"], { date: p }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: g.metadata,
                        children:
                            t.type === j.ABu.REDDIT
                                ? (0, m.oP)(o)
                                : t.type === j.ABu.STEAM
                                  ? (0, m.Dq)(o)
                                  : t.type === j.ABu.BLUESKY || t.type === j.ABu.MASTODON || t.type === j.ABu.TWITTER
                                    ? (0, m.rJ)(o)
                                    : t.type === j.ABu.PAYPAL
                                      ? (0, m.li)(o)
                                      : t.type === j.ABu.EBAY
                                        ? (0, m.ul)(o)
                                        : t.type === j.ABu.TIKTOK
                                          ? (0, m.hf)(o)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function Z(e) {
    let { connections: n, userId: t, className: i } = e,
        s = (0, o.e7)([p.default], () => p.default.locale);
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(g.container, i),
              children: n.map((e) =>
                  (0, l.jsx)(
                      O,
                      {
                          account: e,
                          userId: t,
                          locale: s,
                      },
                      "".concat(e.type, ":").concat(e.id),
                  ),
              ),
          });
}
