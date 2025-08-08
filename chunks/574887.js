n.d(t, { Z: () => I });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(442837),
    a = n(481060),
    c = n(726542),
    s = n(367907),
    d = n(122021),
    u = n(275759),
    f = n(888496),
    m = n(768762),
    p = n(706454),
    g = n(49012),
    b = n(981631),
    j = n(856651),
    h = n(388032),
    x = n(738873);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
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
function O(e) {
    var t;
    let { account: n, locale: l, userId: i } = e,
        o = null != (t = n.metadata) ? t : {},
        p = (0, u.FI)(o[j.PC.CREATED_AT], l),
        O = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)("li", {
        className: x.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == O ? void 0 : O.name,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        v(y({}, e), {
                            className: x.platformIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: h.intl.formatToPlainString(h.t.rtm15O, { name: null == O ? void 0 : O.name }),
                                className: x.platformIcon,
                                src: null == O ? void 0 : O.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, r.jsxs)("div", {
                className: x.connectionInfo,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let t = null == O || null == (e = O.getPlatformUserUrl) ? void 0 : e.call(O, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  v(y({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: x.accountNameText,
                                                      children: n.name,
                                                  }),
                                              ),
                                      })
                                    : (0, r.jsx)(a.eee, {
                                          href: t,
                                          className: x.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == O ? void 0 : O.name) != null
                                                  ? ""
                                                        .concat(O.name, ", ")
                                                        .concat(n.name, ", ")
                                                        .concat(h.intl.string(h.t.q5jLJC))
                                                  : "".concat(n.name, ", ").concat(h.intl.string(h.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i,
                                              }),
                                                  (0, g.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == O ? void 0 : O.type) !== b.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, r.jsxs)("div", {
                                              className: x.accountName,
                                              children: [
                                                  (0, r.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              a.Text,
                                                              v(y({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: x.accountNameText,
                                                                  children: n.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, r.jsx)(m.Z, {
                                                      className: x.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != p &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: h.intl.format(h.t["9rfonp"], { date: p }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: x.metadata,
                        children:
                            n.type === b.ABu.REDDIT
                                ? (0, f.oP)(o)
                                : n.type === b.ABu.STEAM
                                  ? (0, f.Dq)(o)
                                  : n.type === b.ABu.BLUESKY || n.type === b.ABu.MASTODON || n.type === b.ABu.TWITTER
                                    ? (0, f.rJ)(o)
                                    : n.type === b.ABu.PAYPAL
                                      ? (0, f.li)(o)
                                      : n.type === b.ABu.EBAY
                                        ? (0, f.ul)(o)
                                        : n.type === b.ABu.TIKTOK
                                          ? (0, f.hf)(o)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { connections: t, userId: n, className: l } = e,
        a = (0, o.e7)([p.default], () => p.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)("ul", {
              className: i()(x.container, l),
              children: t.map((e) =>
                  (0, r.jsx)(
                      O,
                      {
                          account: e,
                          userId: n,
                          locale: a,
                      },
                      "".concat(e.type, ":").concat(e.id),
                  ),
              ),
          });
}
