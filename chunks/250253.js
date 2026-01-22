n.d(t, {
    A: () => G,
    x: () => k,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    c = n(397927),
    u = n(241524),
    d = n(915089),
    f = n(164956),
    p = n(615405),
    _ = n(486020),
    h = n(500345),
    m = n(599941),
    g = n(922975),
    E = n(700206),
    b = n(218597),
    y = n(320137),
    O = n(881288),
    A = n(417360),
    v = n(792105),
    S = n(35275),
    I = n(366334),
    T = n(237867),
    C = n(98211),
    N = n(700974),
    R = n(2242),
    w = n(652215),
    P = n(985018),
    D = n(541757);
let x = 24,
    L = 5,
    j = (e) => {
        let { benefits: t, header: n, guildId: a } = e,
            [s, o] = i.useState(!1),
            l = s ? t : t.slice(0, L),
            u = t.length > L,
            f = t.length - L,
            p = P.intl.formatToPlainString(P.t.XSdy72, {
                numTruncated: f,
            }),
            _ = () => o((e) => !e),
            m = (0, d.GV)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)("div", {
                  className: D.uO,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: D.bV,
                          id: m,
                          children: n,
                      }),
                      (0, r.jsx)(c.hKd, {
                          size: 12,
                      }),
                      (0, r.jsx)("ul", {
                          className: D.Pp,
                          "aria-labelledby": m,
                          children: l.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      children: (0, r.jsx)(
                                          I.A,
                                          {
                                              guildId: a,
                                              benefit: e,
                                          },
                                          (0, h.nh)(e),
                                      ),
                                  },
                                  t,
                              ),
                          ),
                      }),
                      u &&
                          (0, r.jsx)(U, {
                              isViewAll: s,
                              onToggle: _,
                              showMoreText: p,
                          }),
                  ],
              });
    },
    M = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, y.A)(t),
            [a] = g.UN(n, t),
            s = i.filter((e) => a.has(e.id));

        function o(e) {
            return _.Ay.getEmojiURL({
                id: e.id,
                animated: e.animated,
                size: x,
            });
        }
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  className: D.uO,
                  children: [
                      (0, r.jsx)(c.Heading, {
                          variant: "text-xs/bold",
                          color: "text-default",
                          className: D.bV,
                          children: P.intl.format(P.t.NAnXEo, {
                              count: s.length,
                          }),
                      }),
                      (0, r.jsx)(c.hKd, {
                          size: 12,
                      }),
                      (0, r.jsx)("div", {
                          className: D.vX,
                          children: s.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  l.m_,
                                  {
                                      text: e.name,
                                      "aria-label": !1,
                                      children: (0, r.jsx)("img", {
                                          className: D.x6,
                                          src: o(e),
                                          width: x,
                                          height: x,
                                          alt: e.name,
                                      }),
                                  },
                                  null != (n = e.id) ? n : t,
                              );
                          }),
                      }),
                  ],
              });
    },
    k = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            a = (0, O.A)(n, t),
            [o] = g.lZ(t),
            l = (0, A.A)(o),
            [u] = g.$O(t),
            d = g.It(t, n),
            [f] = g.UN(t, n);
        return null == a && 0 === l.length && 0 === u.length && 0 === f.size
            ? null
            : (0, r.jsxs)("div", {
                  className: s()(D.bp, i),
                  children: [
                      null != a &&
                          (0, r.jsxs)(c.Fmo, {
                              component: (0, r.jsx)(c.Heading, {
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  className: D.bV,
                                  children: P.intl.string(P.t.FJZmYx),
                              }),
                              children: [
                                  (0, r.jsx)(c.hKd, {
                                      size: 8,
                                  }),
                                  (0, r.jsx)(v.A, {
                                      role: d,
                                      guildId: n,
                                      className: D.gP,
                                  }),
                              ],
                          }),
                      (0, r.jsx)(j, {
                          header: P.intl.string(P.t.LtfhAj),
                          benefits: l,
                          guildId: n,
                      }),
                      (0, r.jsx)(j, {
                          header: P.intl.string(P.t["8oxWpO"]),
                          benefits: u,
                          guildId: n,
                      }),
                      (0, r.jsx)(M, {
                          guildId: n,
                          listingId: t,
                      }),
                  ],
              });
    },
    U = (e) => {
        let { onToggle: t, isViewAll: n, showMoreText: i } = e,
            a = n ? P.intl.string(P.t["r/xxPU"]) : i;
        return (0, r.jsx)(c.QWc, {
            text: a,
            onClick: t,
            textVariant: "text-xs/medium",
            variant: "secondary",
        });
    },
    G = (e) => {
        let { listingId: t, guildId: n, groupListingId: a, analyticsLocation: d } = e,
            _ = (0, m.dB)(t),
            {
                openModal: y,
                canOpenModal: O,
                cannotOpenReason: A,
                isCheckingTrialEligibility: v,
            } = (0, N.A)(_, n, a, d),
            I = (0, o.bG)([p.A], () => p.A.isSyncing),
            { activeSubscription: x, activeSubscriptionListing: L } = (0, E.A)(a),
            j = (null == L ? void 0 : L.id) === t,
            M = (null == x ? void 0 : x.status) === w.Dmq.CANCELED,
            [G, V] = i.useState(!1),
            [F, B] = i.useState(!1),
            H = i.useCallback((e) => {
                let t = !1;
                null != e && (t = e.scrollHeight - e.clientHeight > 1), B(t);
            }, []),
            [Y] = g.tx(t),
            [W] = g.I8(t),
            [K] = g.V_(t),
            [z] = g.hh(t),
            q = (0, b.A)(n, t),
            X = null != K && null == x && q,
            Z = () => V((e) => !e),
            Q = (0, u.A)(R.Yl),
            [$, J] = i.useState(!1),
            ee = $ || !Q,
            et = () => J((e) => !e),
            en = (0, o.bG)([f.A], () => f.A.isViewingServerShop(n)),
            er = (null == _ ? void 0 : _.published) === !0,
            ei = (null == _ ? void 0 : _.soft_deleted) === !0,
            ea = P.intl.string(P.t.KzmEA9);
        return (er || en) && !ei
            ? (0, r.jsxs)("article", {
                  className: D.kL,
                  "aria-label": Y,
                  children: [
                      X &&
                          (0, r.jsxs)("div", {
                              className: s()(D.G_, D.rF),
                              children: [
                                  P.intl.format(P.t.L2ouip, {
                                      trialPeriodDuration: (0, h.Gg)({
                                          interval: K.interval,
                                          interval_count: K.interval_count,
                                      }),
                                  }),
                                  (0, r.jsx)(l.m_, {
                                      text: P.intl.formatToPlainString(P.t.FYyR4o, {
                                          activeTrialUserLimit: null != z ? z : 0,
                                      }),
                                      children: (0, r.jsx)(c.mir, {
                                          size: "xs",
                                          color: "currentColor",
                                          className: D.Xz,
                                      }),
                                  }),
                              ],
                          }),
                      (0, r.jsxs)("div", {
                          className: X ? void 0 : D.e1,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: D.Og,
                                  children: [
                                      Q
                                          ? (0, r.jsx)(C.$, {
                                                listingId: t,
                                                isListingPublished: er,
                                                expanded: ee,
                                                onToggleExpanded: et,
                                            })
                                          : (0, r.jsx)(T.Hs, {
                                                listingId: t,
                                                isListingPublished: er,
                                            }),
                                      ee &&
                                          (0, r.jsxs)(c.BJc, {
                                              gap: 16,
                                              children: [
                                                  Q &&
                                                      (0, r.jsx)("div", {
                                                          className: D.yF,
                                                      }),
                                                  j
                                                      ? (0, r.jsx)(c.Button, {
                                                            disabled: !0,
                                                            fullWidth: !0,
                                                            variant: M ? "secondary" : "primary",
                                                            text: M
                                                                ? P.intl.string(P.t.iKHmu0)
                                                                : P.intl.string(P.t.XvAuMo),
                                                        })
                                                      : (0, r.jsxs)(r.Fragment, {
                                                            children: [
                                                                O
                                                                    ? null
                                                                    : (0, r.jsx)(c.po8, {
                                                                          className: D.Ht,
                                                                          messageType: c.YCn.INFO,
                                                                          children: A,
                                                                      }),
                                                                (0, r.jsx)(c.Button, {
                                                                    fullWidth: !0,
                                                                    text: P.intl.string(P.t.fM5ZsX),
                                                                    disabled: !O || I,
                                                                    loading: v,
                                                                    onClick: y,
                                                                    icon: S.A,
                                                                    variant: "primary",
                                                                }),
                                                            ],
                                                        }),
                                                  (0, r.jsxs)(c.BJc, {
                                                      gap: 8,
                                                      align: "center",
                                                      children: [
                                                          (0, r.jsx)(c.Text, {
                                                              variant: "text-sm/normal",
                                                              color: "text-default",
                                                              className: s()((!F || !G) && D.Zp),
                                                              children: (0, r.jsx)("div", {
                                                                  ref: H,
                                                                  children: W,
                                                              }),
                                                          }),
                                                          F &&
                                                              (0, r.jsx)(U, {
                                                                  isViewAll: G,
                                                                  onToggle: Z,
                                                                  showMoreText: ea,
                                                              }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                              ee &&
                                  (0, r.jsx)(c.Fmo, {
                                      children: (0, r.jsx)(k, {
                                          listingId: t,
                                          guildId: n,
                                      }),
                                  }),
                          ],
                      }),
                  ],
              })
            : null;
    };
