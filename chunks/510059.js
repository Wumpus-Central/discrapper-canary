t.d(n, { A: () => y });
var l = t(627968);
t(64700);
var i = t(503698),
    r = t.n(i),
    a = t(311907),
    s = t(990078),
    o = t(834730),
    d = t(349288),
    c = t(509434),
    u = t(573648),
    g = t(58149),
    A = t(681819),
    f = t(370480),
    m = t(169869),
    p = t(773669),
    x = t(486020),
    h = t(307600),
    v = t(652215),
    j = t(783419),
    I = t(985018),
    b = t(985176);
function C(e) {
    let { account: n, locale: t, userId: i } = e,
        r = n.metadata ?? {},
        a = (0, f.An)(r[j.pK.CREATED_AT], t),
        p = u.A.get((0, A.ML)(n.type));
    return (0, l.jsx)(E, {
        renderAccountName: () => {
            let e = p?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, l.jsx)(s.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, l.jsx)(o.E, { variant: "text-sm/normal", className: b.GW, children: n.name }),
                  })
                : (0, l.jsx)(d.Anchor, {
                      href: e,
                      className: b.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          p?.name != null
                              ? `${p.name}, ${n.name}, ${I.intl.string(I.t.q5jLJB)}`
                              : `${n.name}, ${I.intl.string(I.t.q5jLJB)}`,
                      onClick: (t) => {
                          (0, g.zV)(v.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, h.h)({ href: e, trusted: p?.type !== v.fg2.DOMAIN }, t);
                      },
                      children: (0, l.jsxs)("div", {
                          className: b.vi,
                          children: [
                              (0, l.jsx)(s.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, l.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      className: b.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, l.jsx)(c.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === v.fg2.REDDIT
                ? (0, m.xE)(r)
                : n.type === v.fg2.STEAM
                  ? (0, m.dy)(r)
                  : n.type === v.fg2.BLUESKY || n.type === v.fg2.MASTODON || n.type === v.fg2.TWITTER
                    ? (0, m.ED)(r)
                    : n.type === v.fg2.PAYPAL
                      ? (0, m.gZ)(r)
                      : n.type === v.fg2.EBAY
                        ? (0, m.ub)(r)
                        : n.type === v.fg2.TIKTOK
                          ? (0, m.HU)(r)
                          : null,
        platformIcon: p?.icon.lightPNG,
        platformName: p?.name,
        createdAtDate: a,
    });
}
function N(e) {
    let { identityWithApplication: n } = e,
        { identity: t, application: i } = n;
    if (null == t.profile || null == t.profile.username || null == i) return null;
    let r = x.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, l.jsx)(E, {
        renderAccountName: () =>
            (0, l.jsx)(s.m, {
                overflowOnly: !0,
                text: t.profile.username,
                children: (0, l.jsx)(o.E, { variant: "text-sm/normal", className: b.GW, children: t.profile.username }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function E(e) {
    let {
        renderAccountName: n,
        renderMetadata: t,
        platformName: i,
        platformIcon: a,
        createdAtDate: d,
        applyIconBorderRadius: c = !1,
    } = e;
    return (0, l.jsxs)("li", {
        className: b.FI,
        children: [
            (0, l.jsx)(s.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, l.jsx)("div", {
                    className: b.k_,
                    children: (0, l.jsx)("img", {
                        alt: I.intl.formatToPlainString(I.t.rtm15P, { name: i }),
                        className: r()(b.tV, c ? b.sN : null),
                        src: a,
                    }),
                }),
            }),
            (0, l.jsxs)("div", {
                className: b.Hd,
                children: [
                    (0, l.jsxs)("div", {
                        children: [
                            n(),
                            null != d &&
                                (0, l.jsx)(o.E, {
                                    variant: "text-xs/normal",
                                    children: I.intl.format(I.t["9rfonh"], { date: d }),
                                }),
                        ],
                    }),
                    (0, l.jsx)("div", { className: b.yu, children: t() }),
                ],
            }),
        ],
    });
}
function y(e) {
    let { connections: n, applicationIdentities: t, userId: i, className: s } = e,
        o = (0, a.bG)([p.default], () => p.default.locale);
    return 0 === n.length && 0 === t.length
        ? null
        : (0, l.jsxs)("ul", {
              className: r()(b.kL, s),
              children: [
                  n.map((e) => (0, l.jsx)(C, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  t?.map((e) => (0, l.jsx)(N, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
