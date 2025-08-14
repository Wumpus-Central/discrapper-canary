n.d(t, { Z: () => I }), n(314940);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(278074),
    l = n(442837),
    c = n(481060),
    u = n(884697),
    d = n(449217),
    f = n(29121),
    _ = n(222062),
    p = n(706454),
    h = n(158776),
    m = n(55935),
    g = n(74538),
    E = n(204418),
    b = n(388032),
    y = n(896830);
let O = [
        {
            avatarSize: c.EFr.SIZE_40,
            showStatus: !1,
        },
        {
            avatarSize: c.EFr.SIZE_32,
            showStatus: !1,
        },
        {
            avatarSize: c.EFr.SIZE_40,
            showStatus: !0,
        },
        {
            avatarSize: c.EFr.SIZE_32,
            showStatus: !0,
        },
    ],
    v = (e) => {
        let { purchase: t } = e,
            n = (0, l.e7)([p.default], () => p.default.locale),
            i = (0, u.qS)(t),
            o = null != t.expiresAt ? (0, m.TD)(Date.now(), t.expiresAt) : null,
            a = (0, f.ag)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: "long",
                year: "numeric",
            });
        return (0, r.jsxs)("div", {
            className: y.purchaseInfo,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: a,
                }),
                null != o &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: b.intl.format(b.t.Io7ozs, { days: o.days.toString() }),
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        i ? b.intl.format(b.t["req+eX"], { dateAcquired: s }) : b.intl.format(b.t.gW9R4O, { date: s }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("br", {}),
                                    b.intl.format(b.t.eZSTa2, {
                                        date: t.expiresAt.toLocaleDateString(n, {
                                            minute: "numeric",
                                            hour: "numeric",
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        }),
                                    }),
                                ],
                            }),
                    ],
                }),
                i &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: b.intl.string(b.t.nKdAlJ),
                    }),
            ],
        });
    },
    I = (e) => {
        let { user: t, guildId: n, avatarDecorationOverride: o, className: p } = e,
            m = (0, l.e7)([h.Z], () => h.Z.getStatus(t.id)),
            { product: I, purchase: T } = (0, d.Z)(null == o ? void 0 : o.skuId),
            S = g.ZP.canUseCollectibles(t),
            A = (0, u.qS)(T),
            N = (0, u.G1)(I),
            C = !S && A,
            R = (0, _.M)(!N || S),
            P = (0, f.kd)(I),
            w = i.useMemo(
                () =>
                    C
                        ? b.intl.string(b.t["7vkeu7"])
                        : (0, s.EQ)([N, S, R])
                              .with([!0, !0, !1], () => b.intl.string(b.t.hmyYKy))
                              .with([!0, !1, !0], () => b.intl.string(b.t.q0PlFh))
                              .with([!0, !1, !1], () => b.intl.string(b.t["0xs2sL"]))
                              .otherwise(() => b.intl.string(b.t.fEGjVV)),
                [C, N, S, R],
            );
        return null != I && (null == T || C)
            ? (0, r.jsxs)("div", {
                  className: a()(y.modalPreview, y.shopPreviewContainer, p),
                  children: [
                      (0, r.jsx)("div", {
                          className: y.shopPreviewBanner,
                          children: (0, r.jsx)(E.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: o,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: y.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/semibold",
                                  children: P,
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: w,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: a()(y.modalPreview, p),
                  children: [
                      (0, r.jsxs)("div", {
                          className: y.previewSections,
                          children: [
                              (0, r.jsx)("div", {
                                  className: y.decorationPreview,
                                  children: (0, r.jsx)(E.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: o,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: y.smallDecorationPreviewsContainer,
                                  children: O.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          "div",
                                          {
                                              className: y.smallDecorationPreview,
                                              children: (0, r.jsx)(E.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: o,
                                                  status: a ? m : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          "".concat(i).concat(a),
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != T && (0, r.jsx)(v, { purchase: T }),
                  ],
              });
    };
