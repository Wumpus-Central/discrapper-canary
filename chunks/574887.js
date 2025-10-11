t.d(n, { Z: () => y });
var l = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    o = t(442837),
    s = t(28664),
    a = t(481060),
    c = t(726542),
    d = t(367907),
    u = t(122021),
    m = t(275759),
    p = t(888496),
    f = t(768762),
    h = t(706454),
    x = t(49012),
    j = t(981631),
    v = t(856651),
    g = t(388032),
    b = t(20163);
function I(e) {
    var n;
    let { account: t, locale: i, userId: r } = e,
        o = null != (n = t.metadata) ? n : {},
        h = (0, m.FI)(o[v.PC.CREATED_AT], i),
        I = c.Z.get((0, u.rR)(t.type));
    return (0, l.jsxs)("li", {
        className: b.connection,
        children: [
            (0, l.jsx)(s.u, {
                __unsupportedReactNodeAsText: null == I ? void 0 : I.name,
                children: (0, l.jsx)("div", {
                    className: b.platformIconContainer,
                    children: (0, l.jsx)("img", {
                        alt: g.intl.formatToPlainString(g.t.rtm15O, { name: null == I ? void 0 : I.name }),
                        className: b.platformIcon,
                        src: null == I ? void 0 : I.icon.lightPNG,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: b.connectionInfo,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let n = null == I || null == (e = I.getPlatformUserUrl) ? void 0 : e.call(I, t);
                                return null == n
                                    ? (0, l.jsx)(s.u, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (0, l.jsx)(a.Text, {
                                              variant: "text-sm/normal",
                                              className: b.accountNameText,
                                              children: t.name,
                                          }),
                                      })
                                    : (0, l.jsx)(a.Anchor, {
                                          href: n,
                                          className: b.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == I ? void 0 : I.name) != null
                                                  ? ""
                                                        .concat(I.name, ", ")
                                                        .concat(t.name, ", ")
                                                        .concat(g.intl.string(g.t.q5jLJC))
                                                  : "".concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJC)),
                                          onClick: (e) => {
                                              (0, d.yw)(j.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: r,
                                              }),
                                                  (0, x.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == I ? void 0 : I.type) !== j.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, l.jsxs)("div", {
                                              className: b.accountName,
                                              children: [
                                                  (0, l.jsx)(s.u, {
                                                      overflowOnly: !0,
                                                      text: t.name,
                                                      children: (0, l.jsx)(a.Text, {
                                                          variant: "text-sm/normal",
                                                          className: b.accountNameText,
                                                          children: t.name,
                                                      }),
                                                  }),
                                                  (0, l.jsx)(f.Z, {
                                                      className: b.platformUrlIcon,
                                                      direction: f.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != h &&
                                (0, l.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: g.intl.format(g.t["9rfonp"], { date: h }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: b.metadata,
                        children:
                            t.type === j.ABu.REDDIT
                                ? (0, p.oP)(o)
                                : t.type === j.ABu.STEAM
                                  ? (0, p.Dq)(o)
                                  : t.type === j.ABu.BLUESKY || t.type === j.ABu.MASTODON || t.type === j.ABu.TWITTER
                                    ? (0, p.rJ)(o)
                                    : t.type === j.ABu.PAYPAL
                                      ? (0, p.li)(o)
                                      : t.type === j.ABu.EBAY
                                        ? (0, p.ul)(o)
                                        : t.type === j.ABu.TIKTOK
                                          ? (0, p.hf)(o)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { connections: n, userId: t, className: i } = e,
        s = (0, o.e7)([h.default], () => h.default.locale);
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: r()(b.container, i),
              children: n.map((e) =>
                  (0, l.jsx)(
                      I,
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
