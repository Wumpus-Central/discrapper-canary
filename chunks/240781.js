n.d(t, { Z: () => w }), n(314940);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(278074),
    c = n(442837),
    d = n(481060),
    u = n(884697),
    m = n(449217),
    p = n(29121),
    h = n(222062),
    x = n(706454),
    g = n(158776),
    f = n(55935),
    v = n(74538),
    b = n(204418),
    j = n(388032),
    P = n(314183);
let y = [
        {
            avatarSize: d.EFr.SIZE_40,
            showStatus: !1,
        },
        {
            avatarSize: d.EFr.SIZE_32,
            showStatus: !1,
        },
        {
            avatarSize: d.EFr.SIZE_40,
            showStatus: !0,
        },
        {
            avatarSize: d.EFr.SIZE_32,
            showStatus: !0,
        },
    ],
    O = (e) => {
        let { purchase: t } = e,
            n = (0, c.e7)([x.default], () => x.default.locale),
            i = (0, u.qS)(t),
            l = null != t.expiresAt ? (0, f.TD)(Date.now(), t.expiresAt) : null,
            a = (0, p.ag)(t),
            s = t.purchasedAt.toLocaleDateString(n, {
                month: "long",
                year: "numeric",
            });
        return (0, r.jsxs)("div", {
            className: P.purchaseInfo,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: a,
                }),
                null != l &&
                    (0, r.jsx)(d.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: j.intl.format(j.t.Io7ozn, { days: l.days.toString() }),
                    }),
                (0, r.jsxs)(d.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        j.intl.format(j.t.gW9R4B, { date: s }),
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
                    (0, r.jsx)(d.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: j.intl.string(j.t.nKdAlO),
                    }),
            ],
        });
    },
    w = (e) => {
        let { user: t, guildId: n, avatarDecoration: l, className: x } = e,
            f = (0, c.e7)([g.Z], () => g.Z.getStatus(t.id)),
            { product: w, purchase: S } = (0, m.Z)(null == l ? void 0 : l.skuId),
            C = v.ZP.canUseCollectibles(t),
            I = null != S ? (0, u.qS)(S) : (0, u.G1)(w),
            E = !C && I,
            A = (0, h.M)(!I || C),
            T = (0, p.ag)(S),
            _ = (0, p.kd)(w),
            D = i.useMemo(
                () =>
                    E
                        ? j.intl.string(j.t["7vkeu5"])
                        : (0, o.EQ)([I, C, A])
                              .with([!0, !0, !1], () => j.intl.string(j.t.hmyYK8))
                              .with([!0, !1, !0], () => j.intl.string(j.t.q0PlFn))
                              .with([!0, !1, !1], () => j.intl.string(j.t["0xs2sA"]))
                              .otherwise(() => j.intl.string(j.t.fEGjVQ)),
                [E, I, C, A],
            );
        return null == S || E
            ? (0, r.jsxs)("div", {
                  className: a()(P.modalPreview, P.shopPreviewContainer, x),
                  children: [
                      (0, r.jsx)("div", {
                          className: P.shopPreviewBanner,
                          children: (0, r.jsx)(b.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: l,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: P.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/semibold",
                                  children: (0, s.isEmpty)(T) ? _ : T,
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/normal",
                                  children: D,
                              }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: a()(P.modalPreview, x),
                  children: [
                      (0, r.jsxs)("div", {
                          className: P.previewSections,
                          children: [
                              (0, r.jsx)("div", {
                                  className: P.decorationPreview,
                                  children: (0, r.jsx)(b.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: l,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: P.smallDecorationPreviewsContainer,
                                  children: y.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          "div",
                                          {
                                              className: P.smallDecorationPreview,
                                              children: (0, r.jsx)(b.Z, {
                                                  user: t,
                                                  guildId: n,
                                                  avatarSize: i,
                                                  avatarDecorationOverride: l,
                                                  status: a ? f : void 0,
                                                  "aria-hidden": !0,
                                              }),
                                          },
                                          "".concat(i).concat(a),
                                      );
                                  }),
                              }),
                          ],
                      }),
                      null != S && (0, r.jsx)(O, { purchase: S }),
                  ],
              });
    };
