l.d(t, { A: () => C });
var n = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
    a = l(311907),
    r = l(990078),
    o = l(397927),
    d = l(573648),
    c = l(58149),
    u = l(681819),
    m = l(370480),
    p = l(169869),
    x = l(773669),
    A = l(486020),
    g = l(307600),
    f = l(652215),
    h = l(783419),
    j = l(985018),
    v = l(622376);
function I(e) {
    let { account: t, locale: l, userId: i } = e,
        s = t.metadata ?? {},
        a = (0, m.An)(s[h.pK.CREATED_AT], l),
        x = d.A.get((0, u.ML)(t.type));
    return (0, n.jsx)(y, {
        renderAccountName: () => {
            let e = x?.getPlatformUserUrl?.(t);
            return null == e
                ? (0, n.jsx)(r.m, {
                      overflowOnly: !0,
                      text: t.name,
                      children: (0, n.jsx)(o.Text, { variant: "text-sm/normal", className: v.GW, children: t.name }),
                  })
                : (0, n.jsx)(o.MzZ, {
                      href: e,
                      className: v.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          x?.name != null
                              ? `${x.name}, ${t.name}, ${j.intl.string(j.t.q5jLJB)}`
                              : `${t.name}, ${j.intl.string(j.t.q5jLJB)}`,
                      onClick: (l) => {
                          (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: t.type, other_user_id: i }),
                              (0, g.h)({ href: e, trusted: x?.type !== f.fg2.DOMAIN }, l);
                      },
                      children: (0, n.jsxs)("div", {
                          className: v.vi,
                          children: [
                              (0, n.jsx)(r.m, {
                                  overflowOnly: !0,
                                  text: t.name,
                                  children: (0, n.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      className: v.GW,
                                      children: t.name,
                                  }),
                              }),
                              (0, n.jsx)(o.I9m, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            t.type === f.fg2.REDDIT
                ? (0, p.xE)(s)
                : t.type === f.fg2.STEAM
                  ? (0, p.dy)(s)
                  : t.type === f.fg2.BLUESKY || t.type === f.fg2.MASTODON || t.type === f.fg2.TWITTER
                    ? (0, p.ED)(s)
                    : t.type === f.fg2.PAYPAL
                      ? (0, p.gZ)(s)
                      : t.type === f.fg2.EBAY
                        ? (0, p.ub)(s)
                        : t.type === f.fg2.TIKTOK
                          ? (0, p.HU)(s)
                          : null,
        platformIcon: x?.icon.lightPNG,
        platformName: x?.name,
        createdAtDate: a,
    });
}
function N(e) {
    let { identityWithApplication: t } = e,
        { identity: l, application: i } = t;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let s = A.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, n.jsx)(y, {
        renderAccountName: () =>
            (0, n.jsx)(r.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, n.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: v.GW,
                    children: l.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: s,
        platformName: i.name,
        createdAtDate: void 0,
    });
}
function y(e) {
    let { renderAccountName: t, renderMetadata: l, platformName: i, platformIcon: s, createdAtDate: a } = e;
    return (0, n.jsxs)("li", {
        className: v.FI,
        children: [
            (0, n.jsx)(r.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, n.jsx)("div", {
                    className: v.k_,
                    children: (0, n.jsx)("img", {
                        alt: j.intl.formatToPlainString(j.t.rtm15P, { name: i }),
                        className: v.tV,
                        src: s,
                    }),
                }),
            }),
            (0, n.jsxs)("div", {
                className: v.Hd,
                children: [
                    (0, n.jsxs)("div", {
                        children: [
                            t(),
                            null != a &&
                                (0, n.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children: j.intl.format(j.t["9rfonh"], { date: a }),
                                }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: v.yu, children: l() }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { connections: t, applicationIdentities: l, userId: i, className: r } = e,
        o = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === t.length && 0 === l.length
        ? null
        : (0, n.jsxs)("ul", {
              className: s()(v.kL, r),
              children: [
                  t.map((e) => (0, n.jsx)(I, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  l?.map((e) => (0, n.jsx)(N, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
