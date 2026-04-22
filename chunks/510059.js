l.d(n, { A: () => E });
var t = l(627968);
l(64700);
var i = l(503698),
    r = l.n(i),
    s = l(311907),
    a = l(990078),
    o = l(834730),
    d = l(349288),
    c = l(509434),
    u = l(573648),
    g = l(58149),
    A = l(681819),
    m = l(370480),
    f = l(169869),
    p = l(773669),
    x = l(486020),
    h = l(307600),
    v = l(652215),
    j = l(783419),
    I = l(985018),
    b = l(985176);
function C(e) {
    let { account: n, locale: l, userId: i } = e,
        r = n.metadata ?? {},
        s = (0, m.An)(r[j.pK.CREATED_AT], l),
        p = u.A.get((0, A.ML)(n.type));
    return (0, t.jsx)(y, {
        renderAccountName: () => {
            let e = p?.getPlatformUserUrl?.(n);
            return null == e
                ? (0, t.jsx)(a.m, {
                      overflowOnly: !0,
                      text: n.name,
                      children: (0, t.jsx)(o.E, { variant: "text-sm/normal", className: b.GW, children: n.name }),
                  })
                : (0, t.jsx)(d.Anchor, {
                      href: e,
                      className: b.Y2,
                      useDefaultUnderlineStyles: !1,
                      "aria-label":
                          p?.name != null
                              ? `${p.name}, ${n.name}, ${I.intl.string(I.t.q5jLJB)}`
                              : `${n.name}, ${I.intl.string(I.t.q5jLJB)}`,
                      onClick: (l) => {
                          (0, g.zV)(v.HAw.CONNECTED_ACCOUNT_VIEWED, { platform_type: n.type, other_user_id: i }),
                              (0, h.h)({ href: e, trusted: p?.type !== v.fg2.DOMAIN }, l);
                      },
                      children: (0, t.jsxs)("div", {
                          className: b.vi,
                          children: [
                              (0, t.jsx)(a.m, {
                                  overflowOnly: !0,
                                  text: n.name,
                                  children: (0, t.jsx)(o.E, {
                                      variant: "text-sm/normal",
                                      className: b.GW,
                                      children: n.name,
                                  }),
                              }),
                              (0, t.jsx)(c.I, { size: "xs", color: "currentColor" }),
                          ],
                      }),
                  });
        },
        renderMetadata: () =>
            n.type === v.fg2.REDDIT
                ? (0, f.xE)(r)
                : n.type === v.fg2.STEAM
                  ? (0, f.dy)(r)
                  : n.type === v.fg2.BLUESKY || n.type === v.fg2.MASTODON || n.type === v.fg2.TWITTER
                    ? (0, f.ED)(r)
                    : n.type === v.fg2.PAYPAL
                      ? (0, f.gZ)(r)
                      : n.type === v.fg2.EBAY
                        ? (0, f.ub)(r)
                        : n.type === v.fg2.TIKTOK
                          ? (0, f.HU)(r)
                          : null,
        platformIcon: p?.icon.lightPNG,
        platformName: p?.name,
        createdAtDate: s,
    });
}
function N(e) {
    let { identityWithApplication: n } = e,
        { identity: l, application: i } = n;
    if (null == l.profile || null == l.profile.username || null == i) return null;
    let r = x.Ay.getApplicationIconURL({ id: i.id, icon: i.icon });
    return (0, t.jsx)(y, {
        renderAccountName: () =>
            (0, t.jsx)(a.m, {
                overflowOnly: !0,
                text: l.profile.username,
                children: (0, t.jsx)(o.E, { variant: "text-sm/normal", className: b.GW, children: l.profile.username }),
            }),
        renderMetadata: () => null,
        platformIcon: r,
        platformName: i.name,
        createdAtDate: void 0,
        applyIconBorderRadius: !0,
    });
}
function y(e) {
    let {
        renderAccountName: n,
        renderMetadata: l,
        platformName: i,
        platformIcon: s,
        createdAtDate: d,
        applyIconBorderRadius: c = !1,
    } = e;
    return (0, t.jsxs)("li", {
        className: b.FI,
        children: [
            (0, t.jsx)(a.m, {
                __unsupportedReactNodeAsText: i,
                children: (0, t.jsx)("div", {
                    className: b.k_,
                    children: (0, t.jsx)("img", {
                        alt: I.intl.formatToPlainString(I.t.rtm15P, { name: i }),
                        className: r()(b.tV, c ? b.sN : null),
                        src: s,
                    }),
                }),
            }),
            (0, t.jsxs)("div", {
                className: b.Hd,
                children: [
                    (0, t.jsxs)("div", {
                        children: [
                            n(),
                            null != d &&
                                (0, t.jsx)(o.E, {
                                    variant: "text-xs/normal",
                                    children: I.intl.format(I.t["9rfonh"], { date: d }),
                                }),
                        ],
                    }),
                    (0, t.jsx)("div", { className: b.yu, children: l() }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { connections: n, applicationIdentities: l, userId: i, className: a } = e,
        o = (0, s.bG)([p.default], () => p.default.locale);
    return 0 === n.length && 0 === l.length
        ? null
        : (0, t.jsxs)("ul", {
              className: r()(b.kL, a),
              children: [
                  n.map((e) => (0, t.jsx)(C, { account: e, userId: i, locale: o }, `${e.type}:${e.id}`)),
                  l?.map((e) => (0, t.jsx)(N, { identityWithApplication: e }, e.identity.application_id)),
              ],
          });
}
