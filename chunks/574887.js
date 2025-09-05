t.d(n, { Z: () => I });
var o = t(951288);
t(647438);
var l = t(120356),
    r = t.n(l),
    i = t(442837),
    c = t(481060),
    a = t(726542),
    s = t(367907),
    d = t(122021),
    u = t(275759),
    f = t(888496),
    p = t(768762),
    m = t(706454),
    x = t(49012),
    b = t(981631),
    h = t(856651),
    j = t(388032),
    g = t(20163);
function v(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = o);
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
function _(e) {
    var n;
    let { account: t, locale: l, userId: r } = e,
        i = null != (n = t.metadata) ? n : {},
        m = (0, u.FI)(i[h.PC.CREATED_AT], l),
        _ = a.Z.get((0, d.rR)(t.type));
    return (0, o.jsxs)("li", {
        className: g.connection,
        children: [
            (0, o.jsx)(c.ua7, {
                text: null == _ ? void 0 : _.name,
                children: (e) =>
                    (0, o.jsx)(
                        "div",
                        y(v({}, e), {
                            className: g.platformIconContainer,
                            children: (0, o.jsx)("img", {
                                alt: j.intl.formatToPlainString(j.t.rtm15O, { name: null == _ ? void 0 : _.name }),
                                className: g.platformIcon,
                                src: null == _ ? void 0 : _.icon.lightPNG,
                            }),
                        }),
                    ),
            }),
            (0, o.jsxs)("div", {
                className: g.connectionInfo,
                children: [
                    (0, o.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let n = null == _ || null == (e = _.getPlatformUserUrl) ? void 0 : e.call(_, t);
                                return null == n
                                    ? (0, o.jsx)(c.ua7, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (e) =>
                                              (0, o.jsx)(
                                                  c.Text,
                                                  y(v({}, e), {
                                                      variant: "text-sm/normal",
                                                      className: g.accountNameText,
                                                      children: t.name,
                                                  }),
                                              ),
                                      })
                                    : (0, o.jsx)(c.eee, {
                                          href: n,
                                          className: g.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == _ ? void 0 : _.name) != null
                                                  ? ""
                                                        .concat(_.name, ", ")
                                                        .concat(t.name, ", ")
                                                        .concat(j.intl.string(j.t.q5jLJC))
                                                  : "".concat(t.name, ", ").concat(j.intl.string(j.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, s.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: r,
                                              }),
                                                  (0, x.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == _ ? void 0 : _.type) !== b.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, o.jsxs)("div", {
                                              className: g.accountName,
                                              children: [
                                                  (0, o.jsx)(c.ua7, {
                                                      overflowOnly: !0,
                                                      text: t.name,
                                                      children: (e) =>
                                                          (0, o.jsx)(
                                                              c.Text,
                                                              y(v({}, e), {
                                                                  variant: "text-sm/normal",
                                                                  className: g.accountNameText,
                                                                  children: t.name,
                                                              }),
                                                          ),
                                                  }),
                                                  (0, o.jsx)(p.Z, {
                                                      className: g.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != m &&
                                (0, o.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: j.intl.format(j.t["9rfonp"], { date: m }),
                                }),
                        ],
                    }),
                    (0, o.jsx)("div", {
                        className: g.metadata,
                        children:
                            t.type === b.ABu.REDDIT
                                ? (0, f.oP)(i)
                                : t.type === b.ABu.STEAM
                                  ? (0, f.Dq)(i)
                                  : t.type === b.ABu.BLUESKY || t.type === b.ABu.MASTODON || t.type === b.ABu.TWITTER
                                    ? (0, f.rJ)(i)
                                    : t.type === b.ABu.PAYPAL
                                      ? (0, f.li)(i)
                                      : t.type === b.ABu.EBAY
                                        ? (0, f.ul)(i)
                                        : t.type === b.ABu.TIKTOK
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
        c = (0, i.e7)([m.default], () => m.default.locale);
    return 0 === n.length
        ? null
        : (0, o.jsx)("ul", {
              className: r()(g.container, l),
              children: n.map((e) =>
                  (0, o.jsx)(
                      _,
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
