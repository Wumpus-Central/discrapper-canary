n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var l = n(120356),
    o = n.n(l),
    i = n(442837),
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
    h = n(388032),
    y = n(738873);
function v(e) {
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
function x(e) {
    var t;
    let { account: n, locale: l, userId: o } = e,
        i = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(i[j.PC.CREATED_AT], l),
        x = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)("li", {
        className: y.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == x ? void 0 : x.name,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        O(v({}, e), {
                            className: y.platformIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: h.intl.formatToPlainString(h.t.rtm15O, { name: null == x ? void 0 : x.name }),
                                className: y.platformIcon,
                                src: null == x ? void 0 : x.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, r.jsxs)("div", {
                className: y.connectionInfo,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let t = null == x || null == (e = x.getPlatformUserUrl) ? void 0 : e.call(x, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  O(v({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: y.accountNameText,
                                                      children: n.name,
                                                  }),
                                              ),
                                      })
                                    : (0, r.jsx)(a.eee, {
                                          href: t,
                                          className: y.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == x ? void 0 : x.name) != null
                                                  ? ""
                                                        .concat(x.name, ", ")
                                                        .concat(n.name, ", ")
                                                        .concat(h.intl.string(h.t.q5jLJC))
                                                  : "".concat(n.name, ", ").concat(h.intl.string(h.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: o,
                                              }),
                                                  (0, g.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == x ? void 0 : x.type) !== b.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, r.jsxs)("div", {
                                              className: y.accountName,
                                              children: [
                                                  (0, r.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              a.Text,
                                                              O(v({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: y.accountNameText,
                                                                  children: n.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, r.jsx)(p.Z, {
                                                      className: y.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != m &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: h.intl.format(h.t["9rfonp"], { date: m }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: y.metadata,
                        children:
                            n.type === b.ABu.REDDIT
                                ? (0, f.oP)(i)
                                : n.type === b.ABu.STEAM
                                  ? (0, f.Dq)(i)
                                  : n.type === b.ABu.BLUESKY || n.type === b.ABu.MASTODON || n.type === b.ABu.TWITTER
                                    ? (0, f.rJ)(i)
                                    : n.type === b.ABu.PAYPAL
                                      ? (0, f.li)(i)
                                      : n.type === b.ABu.EBAY
                                        ? (0, f.ul)(i)
                                        : n.type === b.ABu.TIKTOK
                                          ? (0, f.hf)(i)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function _(e) {
    let { connections: t, userId: n, className: l } = e,
        a = (0, i.e7)([m.default], () => m.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)("ul", {
              className: o()(y.container, l),
              children: t.map((e) =>
                  (0, r.jsx)(
                      x,
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
