t.d(l, { A: () => I });
var n = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    s = t(311907),
    a = t(990078),
    o = t(397927),
    d = t(573648),
    c = t(58149),
    u = t(681819),
    f = t(370480),
    p = t(169869),
    m = t(532197),
    x = t(773669),
    A = t(307600),
    j = t(652215),
    h = t(783419),
    g = t(985018),
    v = t(882119);
function b(e) {
    var l, t;
    let i,
        { account: r, locale: s, userId: x } = e,
        b = null != (l = r.metadata) ? l : {},
        I = (0, f.An)(b[h.pK.CREATED_AT], s),
        y = d.A.get((0, u.ML)(r.type));
    return (0, n.jsxs)("li", {
        className: v.FI,
        children: [
            (0, n.jsx)(a.m, {
                __unsupportedReactNodeAsText: null == y ? void 0 : y.name,
                children: (0, n.jsx)("div", {
                    className: v.k_,
                    children: (0, n.jsx)("img", {
                        alt: g.intl.formatToPlainString(g.t.rtm15P, { name: null == y ? void 0 : y.name }),
                        className: v.tV,
                        src: null == y ? void 0 : y.icon.lightPNG,
                    }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: v.Hd,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            null == (i = null == y || null == (t = y.getPlatformUserUrl) ? void 0 : t.call(y, r))
                                ? (0, n.jsx)(a.m, {
                                      overflowOnly: !0,
                                      text: r.name,
                                      children: (0, n.jsx)(o.Text, {
                                          variant: "text-sm/normal",
                                          className: v.GW,
                                          children: r.name,
                                      }),
                                  })
                                : (0, n.jsx)(o.MzZ, {
                                      href: i,
                                      className: v.Y2,
                                      useDefaultUnderlineStyles: !1,
                                      "aria-label":
                                          (null == y ? void 0 : y.name) != null
                                              ? ""
                                                    .concat(y.name, ", ")
                                                    .concat(r.name, ", ")
                                                    .concat(g.intl.string(g.t.q5jLJB))
                                              : "".concat(r.name, ", ").concat(g.intl.string(g.t.q5jLJB)),
                                      onClick: (e) => {
                                          (0, c.zV)(j.HAw.CONNECTED_ACCOUNT_VIEWED, {
                                              platform_type: r.type,
                                              other_user_id: x,
                                          }),
                                              (0, A.h)(
                                                  {
                                                      href: i,
                                                      trusted: (null == y ? void 0 : y.type) !== j.fg2.DOMAIN,
                                                  },
                                                  e,
                                              );
                                      },
                                      children: (0, n.jsxs)("div", {
                                          className: v.vi,
                                          children: [
                                              (0, n.jsx)(a.m, {
                                                  overflowOnly: !0,
                                                  text: r.name,
                                                  children: (0, n.jsx)(o.Text, {
                                                      variant: "text-sm/normal",
                                                      className: v.GW,
                                                      children: r.name,
                                                  }),
                                              }),
                                              (0, n.jsx)(m.A, {
                                                  className: v.E4,
                                                  direction: m.A.Directions.RIGHT,
                                              }),
                                          ],
                                      }),
                                  }),
                            null != I &&
                                (0, n.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children: g.intl.format(g.t["9rfonh"], { date: I }),
                                }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: v.yu,
                        children:
                            r.type === j.fg2.REDDIT
                                ? (0, p.xE)(b)
                                : r.type === j.fg2.STEAM
                                  ? (0, p.dy)(b)
                                  : r.type === j.fg2.BLUESKY || r.type === j.fg2.MASTODON || r.type === j.fg2.TWITTER
                                    ? (0, p.ED)(b)
                                    : r.type === j.fg2.PAYPAL
                                      ? (0, p.gZ)(b)
                                      : r.type === j.fg2.EBAY
                                        ? (0, p.ub)(b)
                                        : r.type === j.fg2.TIKTOK
                                          ? (0, p.HU)(b)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let { connections: l, userId: t, className: i } = e,
        a = (0, s.bG)([x.default], () => x.default.locale);
    return 0 === l.length
        ? null
        : (0, n.jsx)("ul", {
              className: r()(v.kL, i),
              children: l.map((e) =>
                  (0, n.jsx)(
                      b,
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
