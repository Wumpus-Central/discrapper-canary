n.d(l, { A: () => C });
var t = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(573648),
    c = n(58149),
    u = n(681819),
    m = n(370480),
    p = n(169869),
    x = n(773669),
    A = n(486020),
    g = n(307600),
    f = n(652215),
    h = n(783419),
    j = n(985018),
    v = n(622376);
function I(e) {
    let { account: l, locale: n, userId: i } = e,
        s = l.metadata ?? {},
        a = (0, m.An)(s[h.pK.CREATED_AT], n),
        x = d.A.get((0, u.ML)(l.type));
    return (0, t.jsx)(y, {
        renderAccountName: () => {
            let e = x?.getPlatformUserUrl?.(l);
            return null == e
                ? (0, t.jsx)(r.m, {
                      overflowOnly: !0,
                      text: l.name,
                      children: (0, t.jsx)(o.Text, { variant: "text-sm/normal", className: v.GW, children: l.name }),
                  })
                : (0, t.jsx)(o.MzZ, {
                      href: e,
                      className: v.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          x?.name != null
                              ? `${x.name}, ${l.name}, ${j.intl.string(j.t.q5jLJB)}`
                              : `${l.name}, ${j.intl.string(j.t.q5jLJB)}`,
                      onClick: (n) => {
                          (0, c.zV)(f.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: l.type, other_user_id: i }),
                              (0, g.h)({ href: e, trusted: x?.type !== f.fg2.DOMAIN }, n);
                      },
                      children: (0, t.jsxs)("div", {
                          className: v.vi,
                          children: [
                              (0, t.jsx)(r.m, {
                                  overflowOnly: !0,
                                  text: l.name,
                                  children: (0, t.jsx)(o.Text, {
                                      variant: "text-sm/normal",
                                      className: v.GW,
                                      children: l.name,
                                  }),
                              }),
                              (0, t.jsx)(o.I9m, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            l.type === f.fg2.REDDIT
                ? (0, p.xE)(s)
                : l.type === f.fg2.STEAM
                  ? (0, p.dy)(s)
                  : l.type === f.fg2.BLUESKY || l.type === f.fg2.MASTODON || l.type === f.fg2.TWITTER
                    ? (0, p.ED)(s)
                    : l.type === f.fg2.PAYPAL
                      ? (0, p.gZ)(s)
                      : l.type === f.fg2.EBAY
                        ? (0, p.ub)(s)
                        : l.type === f.fg2.TIKTOK
                          ? (0, p.HU)(s)
                          : null,
        platformIcon: x?.icon.lightPNG,
        platformName: x?.name,
        createdAtDate: a,
    });
}
function N(e) {
    let { identityWithApplication: l } = e,
        { identity: n, application: i } = l;
    if (null == n.profile || null == n.profile.username || null == i) return null;
    let s = A.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(y, {
        renderAccountName: () =>
            (0, t.jsx)(r.m, {
                overflowOnly: !0,
                text: n.profile.username,
                children: (0, t.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    className: v.GW,
                    children: n.profile.username,
                }),
            }),
        renderMetadata: () => null,
        platformIcon: s,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function y(e) {
    let {
        renderAccountName: l,
        renderMetadata: n,
        platformName: i,
        platformIcon: a,
        createdAtDate: d,
        applyIconBorderRadius: c = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: v.FI,
        children: [
            (0, t.jsx)(r.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: v.k_,
                    children: (0, t.jsx)("img", {
                        alt: j.intl.formatToPlainString(j.t.rtm15P, { name: i }),
                        className: s()(v.tV, c ? v.sN : null),
                        src: a,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: v.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            l(),
                            null != d &&
                                (0, t.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    children: j.intl.format(j.t["9rfonh"], { date: d }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: v.yu, children: n() }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { connections: l, applicationIdentities: n, userId: i, className: r } = e,
        o = (0, a.bG)([x.default], () => x.default.locale);
    return 0 === l.length && 0 === n.length
        ? null
        : (0, t.jsxs)("ul", {
              className: s()(v.kL, r),
              children: [
                  l.map((e) => (0, t.jsx)(I, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  n?.map((e) => (0, t.jsx)(N, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
