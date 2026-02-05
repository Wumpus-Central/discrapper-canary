n.d(t, { A: () => N });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(990078),
    d = n(397927),
    o = n(573648),
    c = n(58149),
    u = n(681819),
    A = n(370480),
    x = n(169869),
    m = n(532197),
    p = n(773669),
    h = n(307600),
    f = n(652215),
    g = n(783419),
    I = n(985018),
    j = n(882119);
function _(e) {
    let t,
        { account: n, locale: s, userId: l } = e,
        a = n.metadata ?? {},
        p = (0, A.An)(a[g.pK.CREATED_AT], s),
        _ = o.A.get((0, u.ML)(n.type));
    return (0, i.jsxs)("li", {
        className: j.FI,
        children: [
            (0, i.jsx)(r.m, {
                __unsupportedReactNodeAsText: _?.name,
                children: (0, i.jsx)("div", {
                    className: j.k_,
                    children: (0, i.jsx)("img", {
                        alt: I.intl.formatToPlainString(I.t.rtm15P, { name: _?.name }),
                        className: j.tV,
                        src: _?.icon.lightPNG,
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: j.Hd,
                children: [
                    (0, i.jsxs)("div", {
                        children: [
                            null == (t = _?.getPlatformUserUrl?.(n))
                                ? (0, i.jsx)(r.m, {
                                      overflowOnly: !0,
                                      text: n.name,
                                      children: (0, i.jsx)(d.Text, {
                                          variant: "text-sm/normal",
                                          className: j.GW,
                                          children: n.name,
                                      }),
                                  })
                                : (0, i.jsx)(d.MzZ, {
                                      href: t,
                                      className: j.Y2,
                                      useDefaultUnderlineStyles: !1,
                                      "aria-label":
                                          _?.name != null
                                              ? `${_.name}, ${n.name}, ${I.intl.string(I.t.q5jLJB)}`
                                              : `${n.name}, ${I.intl.string(I.t.q5jLJB)}`,
                                      onClick: (e) => {
                                          (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, {
                                              platform_type: n.type,
                                              other_user_id: l,
                                          }),
                                              (0, h.h)({ href: t, trusted: _?.type !== f.fg2.DOMAIN }, e);
                                      },
                                      children: (0, i.jsxs)("div", {
                                          className: j.vi,
                                          children: [
                                              (0, i.jsx)(r.m, {
                                                  overflowOnly: !0,
                                                  text: n.name,
                                                  children: (0, i.jsx)(d.Text, {
                                                      variant: "text-sm/normal",
                                                      className: j.GW,
                                                      children: n.name,
                                                  }),
                                              }),
                                              (0, i.jsx)(m.A, { className: j.E4, direction: m.A.Directions.RIGHT }),
                                          ],
                                      }),
                                  }),
                            null != p &&
                                (0, i.jsx)(d.Text, {
                                    variant: "text-xs/normal",
                                    children: I.intl.format(I.t["9rfonh"], { date: p }),
                                }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: j.yu,
                        children:
                            n.type === f.fg2.REDDIT
                                ? (0, x.xE)(a)
                                : n.type === f.fg2.STEAM
                                  ? (0, x.dy)(a)
                                  : n.type === f.fg2.BLUESKY || n.type === f.fg2.MASTODON || n.type === f.fg2.TWITTER
                                    ? (0, x.ED)(a)
                                    : n.type === f.fg2.PAYPAL
                                      ? (0, x.gZ)(a)
                                      : n.type === f.fg2.EBAY
                                        ? (0, x.ub)(a)
                                        : n.type === f.fg2.TIKTOK
                                          ? (0, x.HU)(a)
                                          : null,
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { connections: t, userId: n, className: s } = e,
        r = (0, a.bG)([p.default], () => p.default.locale);
    return 0 === t.length
        ? null
        : (0, i.jsx)("ul", {
              className: l()(j.kL, s),
              children: t.map((e) => (0, i.jsx)(_, { account: e, userId: n, locale: r }, `${e.type}:${e.id}`)),
          });
}
