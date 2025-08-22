t.d(n, { Z: () => I });
var r = t(951288);
t(647438);
var l = t(120356),
    o = t.n(l),
    i = t(442837),
    c = t(481060),
    s = t(726542),
    a = t(367907),
    d = t(122021),
    u = t(275759),
    f = t(888496),
    m = t(768762),
    p = t(706454),
    h = t(49012),
    x = t(981631),
    b = t(856651),
    j = t(388032),
    g = t(20163);
function v(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
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
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
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
    let { account: t, locale: l, userId: o } = e,
        i = null != (n = t.metadata) ? n : {},
        p = (0, u.FI)(i[b.PC.CREATED_AT], l),
        O = s.Z.get((0, d.rR)(t.type));
    return (0, r.jsxs)("li", {
        className: g.connection,
        children: [
            (0, r.jsx)(c.ua7, {
                text: null == O ? void 0 : O.name,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        y(v({}, e), {
                            className: g.platformIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: j.intl.formatToPlainString(j.t.rtm15O, { name: null == O ? void 0 : O.name }),
                                className: g.platformIcon,
                                src: null == O ? void 0 : O.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, r.jsxs)("div", {
                className: g.connectionInfo,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let n = null == O || null == (e = O.getPlatformUserUrl) ? void 0 : e.call(O, t);
                                return null == n
                                    ? (0, r.jsx)(c.ua7, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.Text,
                                                  y(v({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: g.accountNameText,
                                                      children: t.name,
                                                  }),
                                              ),
                                      })
                                    : (0, r.jsx)(c.eee, {
                                          href: n,
                                          className: g.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == O ? void 0 : O.name) != null
                                                  ? ""
                                                        .concat(O.name, ", ")
                                                        .concat(t.name, ", ")
                                                        .concat(j.intl.string(j.t.q5jLJC))
                                                  : "".concat(t.name, ", ").concat(j.intl.string(j.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, a.yw)(x.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: o,
                                              }),
                                                  (0, h.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == O ? void 0 : O.type) !== x.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, r.jsxs)("div", {
                                              className: g.accountName,
                                              children: [
                                                  (0, r.jsx)(c.ua7, {
                                                      overflowOnly: !0,
                                                      text: t.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              c.Text,
                                                              y(v({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: g.accountNameText,
                                                                  children: t.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, r.jsx)(m.Z, {
                                                      className: g.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != p &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: j.intl.format(j.t["9rfonp"], { date: p }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: g.metadata,
                        children:
                            t.type === x.ABu.REDDIT
                                ? (0, f.oP)(i)
                                : t.type === x.ABu.STEAM
                                  ? (0, f.Dq)(i)
                                  : t.type === x.ABu.BLUESKY || t.type === x.ABu.MASTODON || t.type === x.ABu.TWITTER
                                    ? (0, f.rJ)(i)
                                    : t.type === x.ABu.PAYPAL
                                      ? (0, f.li)(i)
                                      : t.type === x.ABu.EBAY
                                        ? (0, f.ul)(i)
                                        : t.type === x.ABu.TIKTOK
                                          ? (0, f.hf)(i)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { connections: n, userId: t, className: l } = e,
        c = (0, i.e7)([p.default], () => p.default.locale);
    return 0 === n.length
        ? null
        : (0, r.jsx)("ul", {
              className: o()(g.container, l),
              children: n.map((e) =>
                  (0, r.jsx)(
                      O,
                      {
                          account: e,
                          userId: t,
                          locale: c,
                      },
                      "".concat(e.type, ":").concat(e.id),
                  ),
              ),
          });
}
