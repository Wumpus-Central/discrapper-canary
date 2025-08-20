t.d(n, { Z: () => I });
var r = t(951288);
t(647438);
var o = t(120356),
    l = t.n(o),
    i = t(442837),
    c = t(481060),
    a = t(726542),
    s = t(367907),
    d = t(122021),
    u = t(275759),
    f = t(888496),
    m = t(768762),
    p = t(706454),
    b = t(49012),
    g = t(981631),
    x = t(856651),
    h = t(388032),
    j = t(20163);
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
function _(e, n) {
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
function y(e) {
    var n;
    let { account: t, locale: o, userId: l } = e,
        i = null != (n = t.metadata) ? n : {},
        p = (0, u.FI)(i[x.PC.CREATED_AT], o),
        y = a.Z.get((0, d.rR)(t.type));
    return (0, r.jsxs)("li", {
        className: j.connection,
        children: [
            (0, r.jsx)(c.ua7, {
                text: null == y ? void 0 : y.name,
                children: (e) =>
                    (0, r.jsx)(
                        "div",
                        _(v({}, e), {
                            className: j.platformIconContainer,
                            children: (0, r.jsx)("img", {
                                alt: h.intl.formatToPlainString(h.t.rtm15O, { name: null == y ? void 0 : y.name }),
                                className: j.platformIcon,
                                src: null == y ? void 0 : y.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, r.jsxs)("div", {
                className: j.connectionInfo,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let n = null == y || null == (e = y.getPlatformUserUrl) ? void 0 : e.call(y, t);
                                return null == n
                                    ? (0, r.jsx)(c.ua7, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (e) =>
                                              (0, r.jsx)(
                                                  c.Text,
                                                  _(v({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: j.accountNameText,
                                                      children: t.name,
                                                  }),
                                              ),
                                      })
                                    : (0, r.jsx)(c.eee, {
                                          href: n,
                                          className: j.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == y ? void 0 : y.name) != null
                                                  ? ""
                                                        .concat(y.name, ", ")
                                                        .concat(t.name, ", ")
                                                        .concat(h.intl.string(h.t.q5jLJC))
                                                  : "".concat(t.name, ", ").concat(h.intl.string(h.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, s.yw)(g.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: l,
                                              }),
                                                  (0, b.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == y ? void 0 : y.type) !== g.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, r.jsxs)("div", {
                                              className: j.accountName,
                                              children: [
                                                  (0, r.jsx)(c.ua7, {
                                                      overflowOnly: !0,
                                                      text: t.name,
                                                      children: (e) =>
                                                          (0, r.jsx)(
                                                              c.Text,
                                                              _(v({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: j.accountNameText,
                                                                  children: t.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, r.jsx)(m.Z, {
                                                      className: j.platformUrlIcon,
                                                      direction: m.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != p &&
                                (0, r.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: h.intl.format(h.t["9rfonp"], { date: p }),
                                }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: j.metadata,
                        children:
                            t.type === g.ABu.REDDIT
                                ? (0, f.oP)(i)
                                : t.type === g.ABu.STEAM
                                  ? (0, f.Dq)(i)
                                  : t.type === g.ABu.BLUESKY || t.type === g.ABu.MASTODON || t.type === g.ABu.TWITTER
                                    ? (0, f.rJ)(i)
                                    : t.type === g.ABu.PAYPAL
                                      ? (0, f.li)(i)
                                      : t.type === g.ABu.EBAY
                                        ? (0, f.ul)(i)
                                        : t.type === g.ABu.TIKTOK
                                          ? (0, f.hf)(i)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { connections: n, userId: t, className: o } = e,
        c = (0, i.e7)([p.default], () => p.default.locale);
    return 0 === n.length
        ? null
        : (0, r.jsx)("ul", {
              className: l()(j.container, o),
              children: n.map((e) =>
                  (0, r.jsx)(
                      y,
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
