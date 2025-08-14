n.d(t, { Z: () => _ });
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
    p = n(768762),
    m = n(706454),
    g = n(49012),
    b = n(981631),
    j = n(856651),
    y = n(388032),
    x = n(20163);
function O(e) {
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
function v(e) {
    var t;
    let { account: n, locale: l, userId: i } = e,
        o = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(o[j.PC.CREATED_AT], l),
        v = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)("li", {
        className: x.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == v ? void 0 : v.name,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        h(O({}, e), {
                            className: x.platformIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: y.intl.formatToPlainString(y.t.rtm15O, { name: null == v ? void 0 : v.name }),
                                className: x.platformIcon,
                                src: null == v ? void 0 : v.icon.lightPNG,
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
                                let t = null == v || null == (e = v.getPlatformUserUrl) ? void 0 : e.call(v, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  h(O({}, e), {
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
                                              (null == v ? void 0 : v.name) != null
                                                  ? ""
                                                        .concat(v.name, ", ")
                                                        .concat(n.name, ", ")
                                                        .concat(y.intl.string(y.t.q5jLJC))
                                                  : "".concat(n.name, ", ").concat(y.intl.string(y.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i,
                                              }),
                                                  (0, g.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == v ? void 0 : v.type) !== b.ABu.DOMAIN,
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
                                                              h(O({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: x.accountNameText,
                                                                  children: n.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, r.jsx)(p.Z, {
                                                      className: x.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != m &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: y.intl.format(y.t["9rfonp"], { date: m }),
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
function _(e) {
    let { connections: t, userId: n, className: l } = e,
        a = (0, o.e7)([m.default], () => m.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)("ul", {
              className: i()(x.container, l),
              children: t.map((e) =>
                  (0, r.jsx)(
                      v,
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
