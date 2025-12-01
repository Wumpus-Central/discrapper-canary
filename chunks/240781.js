r.d(t, { Z: () => O }), r(314940);
var n = r(54381),
    i = r(473749),
    l = r(120356),
    a = r.n(l),
    s = r(278074),
    o = r(442837),
    c = r(481060),
    d = r(884697),
    u = r(449217),
    m = r(29121),
    p = r(222062),
    h = r(706454),
    v = r(158776),
    x = r(55935),
    g = r(74538),
    f = r(204418),
    j = r(388032),
    _ = r(843347);
let y = [
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
    P = (e) => {
        let { purchase: t } = e,
            r = (0, o.e7)([h.default], () => h.default.locale),
            i = (0, d.qS)(t),
            l = null != t.expiresAt ? (0, x.TD)(Date.now(), t.expiresAt) : null,
            a = (0, m.ag)(t),
            s = t.purchasedAt.toLocaleDateString(r, {
                month: "long",
                year: "numeric",
            });
        return (0, n.jsxs)("div", {
            className: _.purchaseInfo,
            children: [
                (0, n.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: a,
                }),
                null != l &&
                    (0, n.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.Io7ozn, { days: l.days.toString() }),
                    }),
                (0, n.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        i ? j.intl.format(j.t["req+eY"], { dateAcquired: s }) : j.intl.format(j.t.gW9R4B, { date: s }),
                        null != t.expiresAt &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)("br", {}),
                                    j.intl.format(j.t.eZSTa5, {
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
                        children: j.intl.string(j.t.nKdAlO),
                    }),
            ],
        });
    },
    O = (e) => {
        let { user: t, guildId: r, avatarDecoration: l, className: h } = e,
            x = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id)),
            { product: O, purchase: w } = (0, u.Z)(null == l ? void 0 : l.skuId),
            I = g.ZP.canUseCollectibles(t),
            C = (0, d.qS)(w),
            S = (0, d.G1)(O),
            b = !I && C,
            E = (0, p.M)(!S || I),
            T = (0, m.kd)(O),
            A = i.useMemo(
                () =>
                    b
                        ? j.intl.string(j.t["7vkeu5"])
                        : (0, s.EQ)([S, I, E])
                              .with([!0, !0, !1], () => j.intl.string(j.t.hmyYK8))
                              .with([!0, !1, !0], () => j.intl.string(j.t.q0PlFn))
                              .with([!0, !1, !1], () => j.intl.string(j.t["0xs2sA"]))
                              .otherwise(() => j.intl.string(j.t.fEGjVQ)),
                [b, S, I, E],
            );
        return null != O && (null == w || b)
            ? (0, n.jsxs)("div", {
                  className: a()(_.modalPreview, _.shopPreviewContainer, h),
                  children: [
                      (0, n.jsx)("div", {
                          className: _.shopPreviewBanner,
                          children: (0, n.jsx)(f.Z, {
                              user: t,
                              guildId: r,
                              avatarDecorationOverride: l,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          className: _.shopPreviewTextContainer,
                          children: [
                              (0, n.jsx)(c.Text, {
                                  variant: "text-sm/semibold",
                                  children: T,
                              }),
                              (0, n.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: A,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, n.jsxs)("div", {
                  className: a()(_.modalPreview, h),
                  children: [
                      (0, n.jsxs)("div", {
                          className: _.previewSections,
                          children: [
                              (0, n.jsx)("div", {
                                  className: _.decorationPreview,
                                  children: (0, n.jsx)(f.Z, {
                                      user: t,
                                      guildId: r,
                                      avatarDecorationOverride: l,
                                  }),
                              }),
                              (0, n.jsx)("div", {
                                  className: _.smallDecorationPreviewsContainer,
                                  children: y.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, n.jsx)(
                                          "div",
                                          {
                                              className: _.smallDecorationPreview,
                                              children: (0, n.jsx)(f.Z, {
                                                  user: t,
                                                  guildId: r,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: l,
                                                  status: a ? x : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          "".concat(i).concat(a),
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != w && (0, n.jsx)(P, { purchase: w }),
                  ],
              });
    };
