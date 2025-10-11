r.d(t, { Z: () => P }), r(314940);
var n = r(951288),
    i = r(647438),
    l = r(120356),
    s = r.n(l),
    a = r(278074),
    o = r(442837),
    c = r(481060),
    u = r(884697),
    d = r(449217),
    m = r(29121),
    p = r(222062),
    h = r(706454),
    x = r(158776),
    g = r(55935),
    v = r(74538),
    j = r(204418),
    y = r(388032),
    O = r(843347);
let f = [
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
    S = (e) => {
        let { purchase: t } = e,
            r = (0, o.e7)([h.default], () => h.default.locale),
            i = (0, u.qS)(t),
            l = null != t.expiresAt ? (0, g.TD)(Date.now(), t.expiresAt) : null,
            s = (0, m.ag)(t),
            a = t.purchasedAt.toLocaleDateString(r, {
                month: "long",
                year: "numeric",
            });
        return (0, n.jsxs)("div", {
            className: O.purchaseInfo,
            children: [
                (0, n.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: s,
                }),
                null != l &&
                    (0, n.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: y.intl.format(y.t.Io7ozs, { days: l.days.toString() }),
                    }),
                (0, n.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        i ? y.intl.format(y.t["req+eX"], { dateAcquired: a }) : y.intl.format(y.t.gW9R4O, { date: a }),
                        null != t.expiresAt &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("br", {}),
                                    y.intl.format(y.t.eZSTa2, {
                                        date: t.expiresAt.toLocaleDateString(r, {
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
                    (0, n.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: y.intl.string(y.t.nKdAlJ),
                    }),
            ],
        });
    },
    P = (e) => {
        let { user: t, guildId: r, avatarDecorationOverride: l, className: h } = e,
            g = (0, o.e7)([x.Z], () => x.Z.getStatus(t.id)),
            { product: P, purchase: b } = (0, d.Z)(null == l ? void 0 : l.skuId),
            E = v.ZP.canUseCollectibles(t),
            I = (0, u.qS)(b),
            C = (0, u.G1)(P),
            A = !E && I,
            w = (0, p.M)(!C || E),
            T = (0, m.kd)(P),
            N = i.useMemo(
                () =>
                    A
                        ? y.intl.string(y.t["7vkeu7"])
                        : (0, a.EQ)([C, E, w])
                              .with([!0, !0, !1], () => y.intl.string(y.t.hmyYKy))
                              .with([!0, !1, !0], () => y.intl.string(y.t.q0PlFh))
                              .with([!0, !1, !1], () => y.intl.string(y.t["0xs2sL"]))
                              .otherwise(() => y.intl.string(y.t.fEGjVV)),
                [A, C, E, w],
            );
        return null != P && (null == b || A)
            ? (0, n.jsxs)("div", {
                  className: s()(O.modalPreview, O.shopPreviewContainer, h),
                  children: [
                      (0, n.jsx)("div", {
                          className: O.shopPreviewBanner,
                          children: (0, n.jsx)(j.Z, {
                              user: t,
                              guildId: r,
                              avatarDecorationOverride: l,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          className: O.shopPreviewTextContainer,
                          children: [
                              (0, n.jsx)(c.Text, {
                                  variant: "text-sm/semibold",
                                  children: T,
                              }),
                              (0, n.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: N,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: s()(O.modalPreview, h),
                  children: [
                      (0, n.jsxs)("div", {
                          className: O.previewSections,
                          children: [
                              (0, n.jsx)("div", {
                                  className: O.decorationPreview,
                                  children: (0, n.jsx)(j.Z, {
                                      user: t,
                                      guildId: r,
                                      avatarDecorationOverride: l,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: O.smallDecorationPreviewsContainer,
                                  children: f.map((e) => {
                                      let { avatarSize: i, showStatus: s } = e;
                                      return (0, n.jsx)(
                                          "div",
                                          {
                                              className: O.smallDecorationPreview,
                                              children: (0, n.jsx)(j.Z, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: l,
                                                  status: s ? g : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          "".concat(i).concat(s),
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != b && (0, n.jsx)(S, { purchase: b }),
                  ],
              });
    };
