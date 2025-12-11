n.d(t, { Z: () => w }), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    l = n.n(a),
    s = n(278074),
    o = n(442837),
    c = n(481060),
    d = n(884697),
    u = n(449217),
    m = n(29121),
    p = n(222062),
    h = n(706454),
    x = n(158776),
    f = n(55935),
    v = n(74538),
    g = n(204418),
    b = n(388032),
    j = n(314183);
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
    O = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([h.default], () => h.default.locale),
            i = (0, d.qS)(t),
            a = null != t.expiresAt ? (0, f.TD)(Date.now(), t.expiresAt) : null,
            l = (0, m.ag)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: "long",
                year: "numeric",
            });
        return (0, r.jsxs)("div", {
            className: j.purchaseInfo,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: l,
                }),
                null != a &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: b.intl.format(b.t.Io7ozn, { days: a.days.toString() }),
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        i ? b.intl.format(b.t["req+eY"], { dateAcquired: s }) : b.intl.format(b.t.gW9R4B, { date: s }),
                        null != t.expiresAt &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("br", {}),
                                    b.intl.format(b.t.eZSTa5, {
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
                        children: b.intl.string(b.t.nKdAlO),
                    }),
            ],
        });
    },
    w = (e) => {
        let { user: t, guildId: n, avatarDecoration: a, className: h } = e,
            f = (0, o.e7)([x.Z], () => x.Z.getStatus(t.id)),
            { product: w, purchase: y } = (0, u.Z)(null == a ? void 0 : a.skuId),
            C = v.ZP.canUseCollectibles(t),
            S = (0, d.qS)(y),
            I = (0, d.G1)(w),
            E = !C && S,
            A = (0, p.M)(!I || C),
            T = (0, m.kd)(w),
            _ = i.useMemo(
                () =>
                    E
                        ? b.intl.string(b.t["7vkeu5"])
                        : (0, s.EQ)([I, C, A])
                              .with([!0, !0, !1], () => b.intl.string(b.t.hmyYK8))
                              .with([!0, !1, !0], () => b.intl.string(b.t.q0PlFn))
                              .with([!0, !1, !1], () => b.intl.string(b.t["0xs2sA"]))
                              .otherwise(() => b.intl.string(b.t.fEGjVQ)),
                [E, I, C, A],
            );
        return null != w && (null == y || E)
            ? (0, r.jsxs)("div", {
                  className: l()(j.modalPreview, j.shopPreviewContainer, h),
                  children: [
                      (0, r.jsx)("div", {
                          className: j.shopPreviewBanner,
                          children: (0, r.jsx)(g.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: a,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: j.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/semibold",
                                  children: T,
                              }),
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/normal",
                                  children: _,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: l()(j.modalPreview, h),
                  children: [
                      (0, r.jsxs)("div", {
                          className: j.previewSections,
                          children: [
                              (0, r.jsx)("div", {
                                  className: j.decorationPreview,
                                  children: (0, r.jsx)(g.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: a,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: j.smallDecorationPreviewsContainer,
                                  children: P.map((e) => {
                                      let { avatarSize: i, showStatus: l } = e;
                                      return (0, r.jsx)(
                                          "div",
                                          {
                                              className: j.smallDecorationPreview,
                                              children: (0, r.jsx)(g.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: a,
                                                  status: l ? f : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          "".concat(i).concat(l),
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != y && (0, r.jsx)(O, { purchase: y }),
                  ],
              });
    };
