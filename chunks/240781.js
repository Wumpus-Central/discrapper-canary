n.d(t, { Z: () => O }), n(314940);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(884697),
    u = n(449217),
    m = n(29121),
    p = n(222062),
    h = n(706454),
    v = n(158776),
    x = n(55935),
    g = n(74538),
    f = n(204418),
    j = n(388032),
    _ = n(843347);
let P = [
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
    y = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([h.default], () => h.default.locale),
            i = (0, d.qS)(t),
            l = null != t.expiresAt ? (0, x.TD)(Date.now(), t.expiresAt) : null,
            a = (0, m.ag)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: "long",
                year: "numeric",
            });
        return (0, r.jsxs)("div", {
            className: _.purchaseInfo,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "header-primary",
                    children: a,
                }),
                null != l &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.Io7ozn, { days: l.days.toString() }),
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        i ? j.intl.format(j.t["req+eY"], { dateAcquired: s }) : j.intl.format(j.t.gW9R4B, { date: s }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("br", {}),
                                    j.intl.format(j.t.eZSTa5, {
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
                        children: j.intl.string(j.t.nKdAlO),
                    }),
            ],
        });
    },
    O = (e) => {
        let { user: t, guildId: n, avatarDecoration: l, className: h } = e,
            x = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id)),
            { product: O, purchase: w } = (0, u.Z)(null == l ? void 0 : l.skuId),
            C = g.ZP.canUseCollectibles(t),
            S = (0, d.qS)(w),
            I = (0, d.G1)(O),
            b = !C && S,
            E = (0, p.M)(!I || C),
            A = (0, m.kd)(O),
            T = i.useMemo(
                () =>
                    b
                        ? j.intl.string(j.t["7vkeu5"])
                        : (0, s.EQ)([I, C, E])
                              .with([!0, !0, !1], () => j.intl.string(j.t.hmyYK8))
                              .with([!0, !1, !0], () => j.intl.string(j.t.q0PlFn))
                              .with([!0, !1, !1], () => j.intl.string(j.t["0xs2sA"]))
                              .otherwise(() => j.intl.string(j.t.fEGjVQ)),
                [b, I, C, E],
            );
        return null != O && (null == w || b)
            ? (0, r.jsxs)("div", {
                  className: a()(_.modalPreview, _.shopPreviewContainer, h),
                  children: [
                      (0, r.jsx)("div", {
                          className: _.shopPreviewBanner,
                          children: (0, r.jsx)(f.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: l,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: _.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/semibold",
                                  children: A,
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: T,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: a()(_.modalPreview, h),
                  children: [
                      (0, r.jsxs)("div", {
                          className: _.previewSections,
                          children: [
                              (0, r.jsx)("div", {
                                  className: _.decorationPreview,
                                  children: (0, r.jsx)(f.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: l,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: _.smallDecorationPreviewsContainer,
                                  children: P.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          "div",
                                          {
                                              className: _.smallDecorationPreview,
                                              children: (0, r.jsx)(f.Z, {
                                                  user: t,
                                                  guildId: n,
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
                      null != w && (0, r.jsx)(y, { purchase: w }),
                  ],
              });
    };
