t.d(n, { Z: () => y });
var l = t(951288);
t(647438);
var i = t(120356),
    o = t.n(i),
    r = t(442837),
    s = t(28664),
    a = t(481060),
    c = t(726542),
    d = t(367907),
    u = t(122021),
    m = t(275759),
    p = t(888496),
    f = t(768762),
    x = t(706454),
    h = t(49012),
    v = t(981631),
    j = t(856651),
    g = t(388032),
    b = t(20163);
function I(e) {
    var n;
    let { account: t, locale: i, userId: o } = e,
        r = null != (n = t.metadata) ? n : {},
        x = (0, m.FI)(r[j.PC.CREATED_AT], i),
        I = c.Z.get((0, u.rR)(t.type));
    return (0, l.jsxs)("li", {
        className: b.connection,
        children: [
            (0, l.jsx)(s.u, {
                __unsupportedReactNodeAsText: null == I ? void 0 : I.name,
                children: (0, l.jsx)("div", {
                    className: b.platformIconContainer,
                    children: (0, l.jsx)("img", {
                        alt: g.intl.formatToPlainString(g.t.rtm15P, { name: null == I ? void 0 : I.name }),
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
                                                        .concat(g.intl.string(g.t.q5jLJB))
                                                  : "".concat(t.name, ", ").concat(g.intl.string(g.t.q5jLJB)),
                                          onClick: (e) => {
                                              (0, d.yw)(v.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: o,
                                              }),
                                                  (0, h.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == I ? void 0 : I.type) !== v.ABu.DOMAIN,
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
                            null != x &&
                                (0, l.jsx)(a.Text, {
                                    variant: "text-xs/normal",
                                    children: g.intl.format(g.t["9rfonh"], { date: x }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: b.metadata,
                        children:
                            t.type === v.ABu.REDDIT
                                ? (0, p.oP)(r)
                                : t.type === v.ABu.STEAM
                                  ? (0, p.Dq)(r)
                                  : t.type === v.ABu.BLUESKY || t.type === v.ABu.MASTODON || t.type === v.ABu.TWITTER
                                    ? (0, p.rJ)(r)
                                    : t.type === v.ABu.PAYPAL
                                      ? (0, p.li)(r)
                                      : t.type === v.ABu.EBAY
                                        ? (0, p.ul)(r)
                                        : t.type === v.ABu.TIKTOK
                                          ? (0, p.hf)(r)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { connections: n, userId: t, className: i } = e,
        s = (0, r.e7)([x.default], () => x.default.locale);
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: o()(b.container, i),
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
