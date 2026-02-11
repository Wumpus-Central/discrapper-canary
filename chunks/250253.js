"use strict";
n.d(t, { A: () => V, x: () => G });
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
    h = n(486020),
    p = n(500345),
    g = n(599941),
    E = n(922975),
    A = n(700206),
    I = n(218597),
    T = n(320137),
    y = n(881288),
    S = n(417360),
    v = n(792105),
    C = n(35275),
    b = n(366334),
    N = n(237867),
    R = n(98211),
    O = n(700974),
    D = n(2242),
    L = n(652215),
    w = n(985018),
    x = n(541757);
let P = 24,
    M = 5,
    k = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [s, o] = i.useState(!1),
            l = s ? t : t.slice(0, M),
            c = t.length > M,
            _ = t.length - M,
            f = w.intl.formatToPlainString(w.t.XSdy72, { numTruncated: _ }),
            h = () => o((e) => !e),
            g = (0, d.GV)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: x.uO,
                  children: [
                      (0, r.jsx)(u.Heading, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: x.bV,
                          id: g,
                          children: n,
                      }),
                      (0, r.jsx)(u.hKd, { size: 12 }),
                      (0, r.jsx)("ul", {
                          className: x.Pp,
                          "aria-labelledby": g,
                          children: l.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  { children: (0, r.jsx)(b.A, { guildId: a, benefit: e }, (0, p.nh)(e)) },
                                  t,
                              ),
                          ),
                      }),
                      c && (0, r.jsx)(F, { isViewAll: s, onToggle: h, showMoreText: f }),
                  ],
              });
    },
    U = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, T.A)(t),
            [a] = E.UN(n, t),
            s = i.filter((e) => a.has(e.id));
        function o(e) {
            return h.Ay.getEmojiURL({ id: e.id, animated: e.animated, size: P });
        }
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  className: x.uO,
                  children: [
                      (0, r.jsx)(u.Heading, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: x.bV,
                          children: w.intl.format(w.t.NAnXEo, { count: s.length }),
                      }),
                      (0, r.jsx)(u.hKd, { size: 12 }),
                      (0, r.jsx)("div", {
                          className: x.vX,
                          children: s.map((e, t) =>
                              (0, r.jsx)(
                                  l.m_,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, r.jsx)("img", {
                                          className: x.x6,
                                          src: o(e),
                                          width: P,
                                          height: P,
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
    G = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            a = (0, y.A)(n, t),
            [o] = E.lZ(t),
            l = (0, S.A)(o),
            [c] = E.$O(t),
            d = E.It(t, n),
            [_] = E.UN(t, n);
        return null == a && 0 === l.length && 0 === c.length && 0 === _.size
            ? null
            : (0, r.jsxs)("div", {
                  className: s()(x.bp, i),
                  children: [
                      null != a &&
                          (0, r.jsxs)(u.Fmo, {
                              component: (0, r.jsx)(u.Heading, {
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  className: x.bV,
                                  children: w.intl.string(w.t.FJZmYx),
                              }),
                              children: [
                                  (0, r.jsx)(u.hKd, { size: 8 }),
                                  (0, r.jsx)(v.A, { role: d, guildId: n, className: x.gP }),
                              ],
                          }),
                      (0, r.jsx)(k, { header: w.intl.string(w.t.LtfhAj), benefits: l, guildId: n }),
                      (0, r.jsx)(k, { header: w.intl.string(w.t["8oxWpO"]), benefits: c, guildId: n }),
                      (0, r.jsx)(U, { guildId: n, listingId: t }),
                  ],
              });
    },
    F = (e) => {
        let { onToggle: t, isViewAll: n, showMoreText: i } = e,
            a = n ? w.intl.string(w.t["r/xxPU"]) : i;
        return (0, r.jsx)(u.QWc, { text: a, onClick: t, textVariant: "text-xs/medium", variant: "secondary" });
    },
    V = (e) => {
        let { listingId: t, guildId: n, groupListingId: a, analyticsLocation: d } = e,
            h = (0, g.dB)(t),
            {
                openModal: T,
                canOpenModal: y,
                cannotOpenReason: S,
                isCheckingTrialEligibility: v,
            } = (0, O.A)(h, n, a, d),
            b = (0, o.bG)([f.A], () => f.A.isSyncing),
            { activeSubscription: P, activeSubscriptionListing: M } = (0, A.A)(a),
            k = M?.id === t,
            U = P?.status === L.Dmq.CANCELED,
            [V, B] = i.useState(!1),
            [j, H] = i.useState(!1),
            Y = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), H(t);
            }, []),
            [W] = E.tx(t),
            [K] = E.I8(t),
            [$] = E.V_(t),
            [z] = E.hh(t),
            q = (0, I.A)(n, t),
            X = null != $ && null == P && q,
            Z = () => B((e) => !e),
            Q = (0, c.A)(D.Yl),
            [J, ee] = i.useState(!1),
            et = J || !Q,
            en = () => ee((e) => !e),
            er = (0, o.bG)([_.A], () => _.A.isViewingServerShop(n)),
            ei = h?.published === !0,
            ea = h?.soft_deleted === !0,
            es = w.intl.string(w.t.KzmEA9);
        return (ei || er) && !ea
            ? (0, r.jsxs)("article", {
                  className: x.kL,
                  "aria-label": W,
                  children: [
                      X &&
                          (0, r.jsxs)("div", {
                              className: s()(x.G_, x.rF),
                              children: [
                                  w.intl.format(w.t.L2ouip, {
                                      trialPeriodDuration: (0, p.Gg)({
                                          interval: $.interval,
                                          interval_count: $.interval_count,
                                      }),
                                  }),
                                  (0, r.jsx)(l.m_, {
                                      text: w.intl.formatToPlainString(w.t.FYyR4o, { activeTrialUserLimit: z ?? 0 }),
                                      children: (0, r.jsx)(u.mir, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: x.Xz,
                                      }),
                                  }),
                              ],
                          }),
                      (0, r.jsxs)("div", {
                          className: X ? void 0 : x.e1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: x.Og,
                                  children: [
                                      Q
                                          ? (0, r.jsx)(R.$, {
                                                listingId: t,
                                                isListingPublished: ei,
                                                expanded: et,
                                                onToggleExpanded: en,
                                            })
                                          : (0, r.jsx)(N.Hs, { listingId: t, isListingPublished: ei }),
                                      et &&
                                          (0, r.jsxs)(u.BJc, {
                                              gap: 16,
                                              children: [
                                                  Q && (0, r.jsx)("div", { className: x.yF }),
                                                  k
                                                      ? (0, r.jsx)(u.Button, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: U ? "secondary" : "primary",
                                                            text: U
                                                                ? w.intl.string(w.t.iKHmu0)
                                                                : w.intl.string(w.t.XvAuMo),
                                                        })
                                                      : (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                y
                                                                    ? null
                                                                    : (0, r.jsx)(u.po8, {
                                                                          className: x.Ht,
                                                                          messageType: u.YCn.INFO,
                                                                          children: S,
                                                                      }),
                                                                (0, r.jsx)(u.Button, {
                                                                    fullWidth: !0,
                                                                    text: w.intl.string(w.t.fM5ZsX),
                                                                    disabled: !y || b,
                                                                    loading: v,
                                                                    onClick: T,
                                                                    icon: C.A,
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
                                                              className: s()((!j || !V) && x.Zp),
                                                              children: (0, r.jsx)("div", { ref: Y, children: K }),
                                                          }),
                                                          j &&
                                                              (0, r.jsx)(F, {
                                                                  isViewAll: V,
                                                                  onToggle: Z,
                                                                  showMoreText: es,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              et && (0, r.jsx)(u.Fmo, { children: (0, r.jsx)(G, { listingId: t, guildId: n }) }),
                          ],
                      }),
                  ],
              })
            : null;
    };
