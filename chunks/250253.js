i.d(t, { A: () => H, x: () => B });
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(311907),
    c = i(990078),
    d = i(534514),
    o = i(696986),
    u = i(707554),
    m = i(123292),
    x = i(885574),
    h = i(331322),
    g = i(821609),
    v = i(512950),
    j = i(834730),
    A = i(241524),
    f = i(915089),
    p = i(164956),
    _ = i(615405),
    N = i(486020),
    b = i(500345),
    I = i(599941),
    C = i(922975),
    E = i(700206),
    T = i(218597),
    S = i(320137),
    L = i(881288),
    y = i(417360),
    k = i(792105),
    R = i(35275),
    G = i(366334),
    D = i(237867),
    P = i(98211),
    O = i(700974),
    M = i(2242),
    U = i(652215),
    F = i(985018),
    w = i(631616);
let V = (e) => {
        let { benefits: t, header: i, guildId: s } = e,
            [a, r] = n.useState(!1),
            c = a ? t : t.slice(0, 5),
            u = t.length > 5,
            m = t.length - 5,
            x = F.intl.formatToPlainString(F.t.XSdy72, { numTruncated: m }),
            h = (0, f.GV)();
        return 0 === t.length
            ? null
            : (0, l.jsxs)("div", {
                  className: w.uO,
                  children: [
                      (0, l.jsx)(d.D, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: w.bV,
                          id: h,
                          children: i,
                      }),
                      (0, l.jsx)(o.h, { size: 12 }),
                      (0, l.jsx)("ul", {
                          className: w.Pp,
                          "aria-labelledby": h,
                          children: c.map((e, t) =>
                              (0, l.jsx)(
                                  "li",
                                  { children: (0, l.jsx)(G.A, { guildId: s, benefit: e }, (0, b.nh)(e)) },
                                  t,
                              ),
                          ),
                      }),
                      u && (0, l.jsx)(Y, { isViewAll: a, onToggle: () => r((e) => !e), showMoreText: x }),
                  ],
              });
    },
    z = (e) => {
        let { guildId: t, listingId: i } = e,
            n = (0, S.A)(t),
            [s] = C.UN(i, t),
            a = n.filter((e) => s.has(e.id));
        return 0 === a.length
            ? null
            : (0, l.jsxs)("div", {
                  className: w.uO,
                  children: [
                      (0, l.jsx)(d.D, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: w.bV,
                          children: F.intl.format(F.t.NAnXEo, { count: a.length }),
                      }),
                      (0, l.jsx)(o.h, { size: 12 }),
                      (0, l.jsx)("div", {
                          className: w.vX,
                          children: a.map((e, t) =>
                              (0, l.jsx)(
                                  c.m,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, l.jsx)("img", {
                                          className: w.x6,
                                          src: N.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: 24 }),
                                          width: 24,
                                          height: 24,
                                          alt: e.name,
                                      }),
                                  },
                                  e.id ?? t,
                              ),
                          ),
                      }),
                  ],
              });
    },
    B = (e) => {
        let { listingId: t, guildId: i, className: n } = e,
            s = (0, L.A)(i, t),
            [r] = C.lZ(t),
            c = (0, y.A)(r),
            [m] = C.$O(t),
            x = C.It(t, i),
            [h] = C.UN(t, i);
        return null == s && 0 === c.length && 0 === m.length && 0 === h.size
            ? null
            : (0, l.jsxs)("div", {
                  className: a()(w.bp, n),
                  children: [
                      null != s &&
                          (0, l.jsxs)(u.F, {
                              component: (0, l.jsx)(d.D, {
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  className: w.bV,
                                  children: F.intl.string(F.t.FJZmYx),
                              }),
                              children: [
                                  (0, l.jsx)(o.h, { size: 8 }),
                                  (0, l.jsx)(k.A, { role: x, guildId: i, className: w.gP }),
                              ],
                          }),
                      (0, l.jsx)(V, { header: F.intl.string(F.t.LtfhAj), benefits: c, guildId: i }),
                      (0, l.jsx)(V, { header: F.intl.string(F.t["8oxWpO"]), benefits: m, guildId: i }),
                      (0, l.jsx)(z, { guildId: i, listingId: t }),
                  ],
              });
    },
    Y = (e) => {
        let { onToggle: t, isViewAll: i, showMoreText: n } = e,
            s = i ? F.intl.string(F.t["r/xxPU"]) : n;
        return (0, l.jsx)(m.Q, { text: s, onClick: t, textVariant: "text-xs/medium", variant: "secondary" });
    },
    H = (e) => {
        let { listingId: t, guildId: i, groupListingId: s, analyticsLocation: d } = e,
            o = (0, I.dB)(t),
            {
                openModal: m,
                canOpenModal: f,
                cannotOpenReason: N,
                isCheckingTrialEligibility: S,
            } = (0, O.A)(o, i, s, d),
            L = (0, r.bG)([_.A], () => _.A.isSyncing),
            { activeSubscription: y, activeSubscriptionListing: k } = (0, E.A)(s),
            G = k?.id === t,
            V = y?.status === U.Dmq.CANCELED,
            [z, H] = n.useState(!1),
            [X, K] = n.useState(!1),
            W = n.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), K(t);
            }, []),
            [$] = C.tx(t),
            [q] = C.I8(t),
            [Q] = C.V_(t),
            [Z] = C.hh(t),
            J = (0, T.A)(i, t),
            ee = null != Q && null == y && J,
            et = (0, A.A)(M.Yl),
            [ei, el] = n.useState(!1),
            en = ei || !et,
            es = (0, r.bG)([p.A], () => p.A.isViewingServerShop(i)),
            ea = o?.published === !0,
            er = o?.soft_deleted === !0,
            ec = F.intl.string(F.t.KzmEA9);
        return (ea || es) && !er
            ? (0, l.jsxs)("article", {
                  className: w.kL,
                  "aria-label": $,
                  children: [
                      ee &&
                          (0, l.jsxs)("div", {
                              className: a()(w.G_, w.rF),
                              children: [
                                  F.intl.format(F.t.L2ouip, {
                                      trialPeriodDuration: (0, b.Gg)({
                                          interval: Q.interval,
                                          interval_count: Q.interval_count,
                                      }),
                                  }),
                                  (0, l.jsx)(c.m, {
                                      text: F.intl.formatToPlainString(F.t.FYyR4o, { activeTrialUserLimit: Z ?? 0 }),
                                      children: (0, l.jsx)(x.m, { size: "xs", color: "currentColor", className: w.Xz }),
                                  }),
                              ],
                          }),
                      (0, l.jsxs)("div", {
                          className: ee ? void 0 : w.e1,
                          children: [
                              (0, l.jsxs)("div", {
                                  className: w.Og,
                                  children: [
                                      et
                                          ? (0, l.jsx)(P.$, {
                                                listingId: t,
                                                isListingPublished: ea,
                                                expanded: en,
                                                onToggleExpanded: () => el((e) => !e),
                                            })
                                          : (0, l.jsx)(D.Hs, { listingId: t, isListingPublished: ea }),
                                      en &&
                                          (0, l.jsxs)(h.B, {
                                              gap: 16,
                                              children: [
                                                  et && (0, l.jsx)("div", { className: w.yF }),
                                                  G
                                                      ? (0, l.jsx)(g.$, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: V ? "secondary" : "primary",
                                                            text: V
                                                                ? F.intl.string(F.t.iKHmu0)
                                                                : F.intl.string(F.t.XvAuMo),
                                                        })
                                                      : (0, l.jsxs)(l.Fragment, {
                                                            children: [
                                                                f
                                                                    ? null
                                                                    : (0, l.jsx)(v.p, {
                                                                          className: w.Ht,
                                                                          messageType: v.Y.INFO,
                                                                          children: N,
                                                                      }),
                                                                (0, l.jsx)(g.$, {
                                                                    fullWidth: !0,
                                                                    text: F.intl.string(F.t.fM5ZsX),
                                                                    disabled: !f || L,
                                                                    loading: S,
                                                                    onClick: m,
                                                                    icon: R.A,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, l.jsxs)(h.B, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, l.jsx)(j.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: a()((!X || !z) && w.Zp),
                                                              children: (0, l.jsx)("div", { ref: W, children: q }),
                                                          }),
                                                          X &&
                                                              (0, l.jsx)(Y, {
                                                                  isViewAll: z,
                                                                  onToggle: () => H((e) => !e),
                                                                  showMoreText: ec,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              en && (0, l.jsx)(u.F, { children: (0, l.jsx)(B, { listingId: t, guildId: i }) }),
                          ],
                      }),
                  ],
              })
            : null;
    };
