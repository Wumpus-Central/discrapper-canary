"use strict";
n.d(t, { A: () => V, x: () => U });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    u = n(397927),
    c = n(241524),
    d = n(915089),
    _ = n(164956),
    f = n(615405),
    p = n(486020),
    h = n(500345),
    m = n(599941),
    g = n(922975),
    E = n(700206),
    A = n(218597),
    I = n(320137),
    T = n(881288),
    y = n(417360),
    S = n(792105),
    v = n(35275),
    C = n(366334),
    b = n(237867),
    N = n(98211),
    R = n(700974),
    O = n(2242),
    D = n(652215),
    L = n(985018),
    w = n(541757);
let x = 24,
    P = 5,
    M = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [s, o] = i.useState(!1),
            l = s ? t : t.slice(0, P),
            c = t.length > P,
            _ = t.length - P,
            f = L.intl.formatToPlainString(L.t.XSdy72, { numTruncated: _ }),
            p = () => o((e) => !e),
            m = (0, d.GV)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: w.uO,
                  children: [
                      (0, r.jsx)(u.Heading, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: w.bV,
                          id: m,
                          children: n,
                      }),
                      (0, r.jsx)(u.hKd, { size: 12 }),
                      (0, r.jsx)("ul", {
                          className: w.Pp,
                          "aria-labelledby": m,
                          children: l.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  { children: (0, r.jsx)(C.A, { guildId: a, benefit: e }, (0, h.nh)(e)) },
                                  t,
                              ),
                          ),
                      }),
                      c && (0, r.jsx)(G, { isViewAll: s, onToggle: p, showMoreText: f }),
                  ],
              });
    },
    k = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, I.A)(t),
            [a] = g.UN(n, t),
            s = i.filter((e) => a.has(e.id));
        function o(e) {
            return p.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: x });
        }
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  className: w.uO,
                  children: [
                      (0, r.jsx)(u.Heading, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: w.bV,
                          children: L.intl.format(L.t.NAnXEo, { count: s.length }),
                      }),
                      (0, r.jsx)(u.hKd, { size: 12 }),
                      (0, r.jsx)("div", {
                          className: w.vX,
                          children: s.map((e, t) =>
                              (0, r.jsx)(
                                  l.m_,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, r.jsx)("img", {
                                          className: w.x6,
                                          src: o(e),
                                          width: x,
                                          height: x,
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
    U = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            a = (0, T.A)(n, t),
            [o] = g.lZ(t),
            l = (0, y.A)(o),
            [c] = g.$O(t),
            d = g.It(t, n),
            [_] = g.UN(t, n);
        return null == a && 0 === l.length && 0 === c.length && 0 === _.size
            ? null
            : (0, r.jsxs)("div", {
                  className: s()(w.bp, i),
                  children: [
                      null != a &&
                          (0, r.jsxs)(u.Fmo, {
                              component: (0, r.jsx)(u.Heading, {
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  className: w.bV,
                                  children: L.intl.string(L.t.FJZmYx),
                              }),
                              children: [
                                  (0, r.jsx)(u.hKd, { size: 8 }),
                                  (0, r.jsx)(S.A, { role: d, guildId: n, className: w.gP }),
                              ],
                          }),
                      (0, r.jsx)(M, { header: L.intl.string(L.t.LtfhAj), benefits: l, guildId: n }),
                      (0, r.jsx)(M, { header: L.intl.string(L.t["8oxWpO"]), benefits: c, guildId: n }),
                      (0, r.jsx)(k, { guildId: n, listingId: t }),
                  ],
              });
    },
    G = (e) => {
        let { onToggle: t, isViewAll: n, showMoreText: i } = e,
            a = n ? L.intl.string(L.t["r/xxPU"]) : i;
        return (0, r.jsx)(u.QWc, { text: a, onClick: t, textVariant: "text-xs/medium", variant: "secondary" });
    },
    V = (e) => {
        let { listingId: t, guildId: n, groupListingId: a, analyticsLocation: d } = e,
            p = (0, m.dB)(t),
            {
                openModal: I,
                canOpenModal: T,
                cannotOpenReason: y,
                isCheckingTrialEligibility: S,
            } = (0, R.A)(p, n, a, d),
            C = (0, o.bG)([f.A], () => f.A.isSyncing),
            { activeSubscription: x, activeSubscriptionListing: P } = (0, E.A)(a),
            M = P?.id === t,
            k = x?.status === D.Dmq.CANCELED,
            [V, F] = i.useState(!1),
            [B, j] = i.useState(!1),
            H = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), j(t);
            }, []),
            [Y] = g.tx(t),
            [W] = g.I8(t),
            [K] = g.V_(t),
            [z] = g.hh(t),
            $ = (0, A.A)(n, t),
            q = null != K && null == x && $,
            Z = () => F((e) => !e),
            Q = (0, c.A)(O.Yl),
            [X, J] = i.useState(!1),
            ee = X || !Q,
            et = () => J((e) => !e),
            en = (0, o.bG)([_.A], () => _.A.isViewingServerShop(n)),
            er = p?.published === !0,
            ei = p?.soft_deleted === !0,
            ea = L.intl.string(L.t.KzmEA9);
        return (er || en) && !ei
            ? (0, r.jsxs)("article", {
                  className: w.kL,
                  "aria-label": Y,
                  children: [
                      q &&
                          (0, r.jsxs)("div", {
                              className: s()(w.G_, w.rF),
                              children: [
                                  L.intl.format(L.t.L2ouip, {
                                      trialPeriodDuration: (0, h.Gg)({
                                          interval: K.interval,
                                          interval_count: K.interval_count,
                                      }),
                                  }),
                                  (0, r.jsx)(l.m_, {
                                      text: L.intl.formatToPlainString(L.t.FYyR4o, { activeTrialUserLimit: z ?? 0 }),
                                      children: (0, r.jsx)(u.mir, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: w.Xz,
                                      }),
                                  }),
                              ],
                          }),
                      (0, r.jsxs)("div", {
                          className: q ? void 0 : w.e1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: w.Og,
                                  children: [
                                      Q
                                          ? (0, r.jsx)(N.$, {
                                                listingId: t,
                                                isListingPublished: er,
                                                expanded: ee,
                                                onToggleExpanded: et,
                                            })
                                          : (0, r.jsx)(b.Hs, { listingId: t, isListingPublished: er }),
                                      ee &&
                                          (0, r.jsxs)(u.BJc, {
                                              gap: 16,
                                              children: [
                                                  Q && (0, r.jsx)("div", { className: w.yF }),
                                                  M
                                                      ? (0, r.jsx)(u.Button, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: k ? "secondary" : "primary",
                                                            text: k
                                                                ? L.intl.string(L.t.iKHmu0)
                                                                : L.intl.string(L.t.XvAuMo),
                                                        })
                                                      : (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                T
                                                                    ? null
                                                                    : (0, r.jsx)(u.po8, {
                                                                          className: w.Ht,
                                                                          messageType: u.YCn.INFO,
                                                                          children: y,
                                                                      }),
                                                                (0, r.jsx)(u.Button, {
                                                                    fullWidth: !0,
                                                                    text: L.intl.string(L.t.fM5ZsX),
                                                                    disabled: !T || C,
                                                                    loading: S,
                                                                    onClick: I,
                                                                    icon: v.A,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, r.jsxs)(u.BJc, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, r.jsx)(u.Text, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: s()((!B || !V) && w.Zp),
                                                              children: (0, r.jsx)("div", { ref: H, children: W }),
                                                          }),
                                                          B &&
                                                              (0, r.jsx)(G, {
                                                                  isViewAll: V,
                                                                  onToggle: Z,
                                                                  showMoreText: ea,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              ee && (0, r.jsx)(u.Fmo, { children: (0, r.jsx)(U, { listingId: t, guildId: n }) }),
                          ],
                      }),
                  ],
              })
            : null;
    };
