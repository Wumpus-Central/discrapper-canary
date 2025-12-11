t.d(n, { Z: () => y });
var l = t(54381);
t(473749);
var i = t(120356),
    o = t.n(i),
    r = t(442837),
    a = t(28664),
    c = t(481060),
    s = t(726542),
    d = t(367907),
    u = t(122021),
    f = t(275759),
    m = t(888496),
    p = t(768762),
    x = t(706454),
    h = t(49012),
    b = t(981631),
    v = t(856651),
    j = t(388032),
    g = t(980120);
function I(e) {
    var n;
    let { account: t, locale: i, userId: o } = e,
        r = null != (n = t.metadata) ? n : {},
        x = (0, f.FI)(r[v.PC.CREATED_AT], i),
        I = s.Z.get((0, u.rR)(t.type));
    return (0, l.jsxs)("li", {
        className: g.connection,
        children: [
            (0, l.jsx)(a.u, {
                __unsupportedReactNodeAsText: null == I ? void 0 : I.name,
                children: (0, l.jsx)("div", {
                    className: g.platformIconContainer,
                    children: (0, l.jsx)("img", {
                        alt: j.intl.formatToPlainString(j.t.rtm15P, { name: null == I ? void 0 : I.name }),
                        className: g.platformIcon,
                        src: null == I ? void 0 : I.icon.lightPNG,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: g.connectionInfo,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            (() => {
                                var e;
                                let n = null == I || null == (e = I.getPlatformUserUrl) ? void 0 : e.call(I, t);
                                return null == n
                                    ? (0, l.jsx)(a.u, {
                                          overflowOnly: !0,
                                          text: t.name,
                                          children: (0, l.jsx)(c.Text, {
                                              variant: "text-sm/normal",
                                              className: g.accountNameText,
                                              children: t.name,
                                          }),
                                      })
                                    : (0, l.jsx)(c.Anchor, {
                                          href: n,
                                          className: g.platformUrlAnchor,
                                          useDefaultUnderlineStyles: !1,
                                          "aria-label":
                                              (null == I ? void 0 : I.name) != null
                                                  ? ""
                                                        .concat(I.name, ", ")
                                                        .concat(t.name, ", ")
                                                        .concat(j.intl.string(j.t.q5jLJB))
                                                  : "".concat(t.name, ", ").concat(j.intl.string(j.t.q5jLJB)),
                                          onClick: (e) => {
                                              (0, d.yw)(b.rMx.CONNECTED_ACCOUNT_VIEWED, {
                                                  platform_type: t.type,
                                                  other_user_id: o,
                                              }),
                                                  (0, h.q)(
                                                      {
                                                          href: n,
                                                          trusted: (null == I ? void 0 : I.type) !== b.ABu.DOMAIN,
                                                      },
                                                      e,
                                                  );
                                          },
                                          children: (0, l.jsxs)("div", {
                                              className: g.accountName,
                                              children: [
                                                  (0, l.jsx)(a.u, {
                                                      overflowOnly: !0,
                                                      text: t.name,
                                                      children: (0, l.jsx)(c.Text, {
                                                          variant: "text-sm/normal",
                                                          className: g.accountNameText,
                                                          children: t.name,
                                                      }),
                                                  }),
                                                  (0, l.jsx)(p.Z, {
                                                      className: g.platformUrlIcon,
                                                      direction: p.Z.Directions.RIGHT,
                                                  }),
                                              ],
                                          }),
                                      });
                            })(),
                            null != x &&
                                (0, l.jsx)(c.Text, {
                                    variant: "text-xs/normal",
                                    children: j.intl.format(j.t["9rfonh"], { date: x }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: g.metadata,
                        children:
                            t.type === b.ABu.REDDIT
                                ? (0, m.oP)(r)
                                : t.type === b.ABu.STEAM
                                  ? (0, m.Dq)(r)
                                  : t.type === b.ABu.BLUESKY || t.type === b.ABu.MASTODON || t.type === b.ABu.TWITTER
                                    ? (0, m.rJ)(r)
                                    : t.type === b.ABu.PAYPAL
                                      ? (0, m.li)(r)
                                      : t.type === b.ABu.EBAY
                                        ? (0, m.ul)(r)
                                        : t.type === b.ABu.TIKTOK
                                          ? (0, m.hf)(r)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { connections: n, userId: t, className: i } = e,
        a = (0, r.e7)([x.default], () => x.default.locale);
    return 0 === n.length
        ? null
        : (0, l.jsx)("ul", {
              className: o()(g.container, i),
              children: n.map((e) =>
                  (0, l.jsx)(
                      I,
                      {
                          account: e,
                          userId: t,
                          locale: a,
                      },
                      "".concat(e.type, ":").concat(e.id),
                  ),
              ),
          });
}
