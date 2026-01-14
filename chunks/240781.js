n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(392711),
    o = n(442837),
    c = n(481060),
    d = n(884697),
    u = n(449217),
    m = n(29121),
    p = n(222062),
    f = n(706454),
    v = n(158776),
    x = n(55935),
    g = n(74538),
    h = n(204418),
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
    y = (e) => {
        let { purchase: t } = e,
            n = (0, o.e7)([f.default], () => f.default.locale),
            i = (0, d.qS)(t),
            l = null != t.expiresAt ? (0, x.TD)(Date.now(), t.expiresAt) : null,
            a = (0, m.ag)(t),
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
                    children: a,
                }),
                null != l &&
                    (0, r.jsx)(c.Text, {
                        variant: "text-xxs/normal",
                        color: "text-muted",
                        children: b.intl.format(b.t.Io7ozn, { days: l.days.toString() }),
                    }),
                (0, r.jsxs)(c.Text, {
                    variant: "text-xxs/normal",
                    color: "text-muted",
                    children: [
                        b.intl.format(b.t.gW9R4B, { date: s }),
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
    O = (e) => {
        let { user: t, guildId: n, avatarDecoration: l, className: f } = e,
            x = (0, o.e7)([v.Z], () => v.Z.getStatus(t.id)),
            { product: O, purchase: S } = (0, u.Z)(null == l ? void 0 : l.skuId),
            C = g.ZP.canUseCollectibles(t),
            w = null != S ? (0, d.qS)(S) : (0, d.G1)(O),
            I = !C && (0, d.qS)(S),
            E = (0, p.M)(!w || C),
            A = (0, m.ag)(S),
            T = (0, m.kd)(O),
            _ = i.useMemo(
                () =>
                    I
                        ? b.intl.string(b.t["7vkeu5"])
                        : w && C && !E
                          ? b.intl.string(b.t.hmyYK8)
                          : w && !C && E
                            ? b.intl.string(b.t.q0PlFn)
                            : !w || C || E
                              ? b.intl.string(b.t.fEGjVQ)
                              : b.intl.string(b.t["0xs2sA"]),
                [I, w, C, E],
            );
        return null != l && (null == S || I)
            ? (0, r.jsxs)("div", {
                  className: a()(j.modalPreview, j.shopPreviewContainer, f),
                  children: [
                      (0, r.jsx)("div", {
                          className: j.shopPreviewBanner,
                          children: (0, r.jsx)(h.Z, {
                              user: t,
                              guildId: n,
                              avatarDecorationOverride: l,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: j.shopPreviewTextContainer,
                          children: [
                              (0, r.jsx)(c.Text, {
                                  variant: "text-sm/semibold",
                                  children: (0, s.isEmpty)(A) ? T : A,
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
                  className: a()(j.modalPreview, f),
                  children: [
                      (0, r.jsxs)("div", {
                          className: j.previewSections,
                          children: [
                              (0, r.jsx)("div", {
                                  className: j.decorationPreview,
                                  children: (0, r.jsx)(h.Z, {
                                      user: t,
                                      guildId: n,
                                      avatarDecorationOverride: l,
                                  }),
                              }),
                              (0, r.jsx)("div", {
                                  className: j.smallDecorationPreviewsContainer,
                                  children: P.map((e) => {
                                      let { avatarSize: i, showStatus: a } = e;
                                      return (0, r.jsx)(
                                          "div",
                                          {
                                              className: j.smallDecorationPreview,
                                              children: (0, r.jsx)(h.Z, {
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
                      null != S && (0, r.jsx)(y, { purchase: S }),
                  ],
              });
    };
