n.d(t, { Z: () => I });
var r = n(951288);
n(647438);
var o = n(120356),
    i = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(726542),
    s = n(367907),
    d = n(122021),
    u = n(275759),
    f = n(888496),
    p = n(768762),
    m = n(706454),
    b = n(49012),
    g = n(981631),
    h = n(856651),
    x = n(388032),
    _ = n(20163);
function j(e) {
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
function y(e) {
    var t;
    let { account: n, locale: o, userId: i } = e,
        l = null != (t = n.metadata) ? t : {},
        m = (0, u.FI)(l[h.PC.CREATED_AT], o),
        y = c.Z.get((0, d.rR)(n.type));
    return (0, r.jsxs)("li", {
        className: _.connection,
        children: [
            (0, r.jsx)(a.ua7, {
                text: null == y ? void 0 : y.name,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        v(j({}, e), {
                            className: _.platformIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: x.intl.formatToPlainString(x.t.rtm15O, { name: null == y ? void 0 : y.name }),
                                className: _.platformIcon,
                                src: null == y ? void 0 : y.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, r.jsxs)("div", {
                className: _.connectionInfo,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let t = null == y || null == (e = y.getPlatformUserUrl) ? void 0 : e.call(y, n);
                                return null == t
                                    ? (0, r.jsx)(a.ua7, {
                                          overflowOnly: !0,
                                          text: n.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  a.Text,
                                                  v(j({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: _.accountNameText,
                                                      children: n.name,
                                                  }),
                                              ),
                                      })
                                    : (0, r.jsx)(a.eee, {
                                          href: t,
                                          className: _.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == y ? void 0 : y.name) != null
                                                  ? ""
                                                        .concat(y.name, ", ")
                                                        .concat(n.name, ", ")
                                                        .concat(x.intl.string(x.t.q5jLJC))
                                                  : "".concat(n.name, ", ").concat(x.intl.string(x.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, s.yw)(g.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: n.type,
                                                  other_user_id: i,
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: t,
                                                          trusted: (null == y ? void 0 : y.type) !== g.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, r.jsxs)("div", {
                                              className: _.accountName,
                                              children: [
                                                  (0, r.jsx)(a.ua7, {
                                                      overflowOnly: !0,
                                                      text: n.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              a.Text,
                                                              v(j({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: _.accountNameText,
                                                                  children: n.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, r.jsx)(p.Z, {
                                                      className: _.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != m &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: x.intl.format(x.t["9rfonp"], { date: m }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.metadata,
                        children:
                            n.type === g.ABu.REDDIT
                                ? (0, f.oP)(l)
                                : n.type === g.ABu.STEAM
                                  ? (0, f.Dq)(l)
                                  : n.type === g.ABu.BLUESKY || n.type === g.ABu.MASTODON || n.type === g.ABu.TWITTER
                                    ? (0, f.rJ)(l)
                                    : n.type === g.ABu.PAYPAL
                                      ? (0, f.li)(l)
                                      : n.type === g.ABu.EBAY
                                        ? (0, f.ul)(l)
                                        : n.type === g.ABu.TIKTOK
                                          ? (0, f.hf)(l)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { connections: t, userId: n, className: o } = e,
        a = (0, l.e7)([m.default], () => m.default.locale);
    return 0 === t.length
        ? null
        : (0, r.jsx)("ul", {
              className: i()(_.container, o),
              children: t.map((e) =>
                  (0, r.jsx)(
                      y,
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
