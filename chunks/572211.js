n.d(t, { h: () => v, u: () => x }), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(299619),
    d = n(172218),
    c = n(939249),
    u = n(834730),
    m = n(408278),
    p = n(821609),
    A = n(17928),
    g = n(990078),
    I = n(775602),
    h = n(140651),
    C = n(495544),
    S = n(354287),
    E = n(768349),
    f = n(838541),
    _ = n(351280),
    x = (((i = {})[(i.BOT = 0)] = "BOT"), (i[(i.ACTIVITY = 1)] = "ACTIVITY"), i);
function T(e) {
    let { onClick: t, children: n, className: i } = e;
    return null != t
        ? (0, l.jsx)(c.D, { onClick: t, className: s()({ [_.or]: null != t }, i), children: n })
        : (0, l.jsx)("div", { className: i, children: n });
}
function v(e) {
    var t;
    let {
        title: n,
        header: i,
        footer: a,
        info: c,
        staticBannerSrc: x,
        videoBannerSrc: v,
        bannerAspectRatio: N = 0,
        iconSrc: y,
        actions: k = [],
        primaryActionFirst: b = !1,
        trackingConfig: L,
        onClickContent: R,
        onClickBanner: P,
    } = e;
    (t = L),
        (L = {
            id: t?.id ?? "0",
            linkType: t?.linkType ?? E.J.UNKNOWN,
            referrerId: t?.referrerId ?? C.default.getId(),
            activityCustomId: t?.activityCustomId,
            onView: t?.onView,
            onLinkCopied: t?.onLinkCopied,
            guildId: t?.guildId,
            channelId: t?.channelId,
            messageId: t?.messageId,
            isDeadEnd: t?.isDeadEnd ?? !1,
        });
    let { primaryColor: D, secondaryColor: O } = (0, h.A)(y ?? x),
        U = `linear-gradient(45deg, ${D}, ${O})`,
        j = (0, A.bG)([I.A], () => I.A.useReducedMotion),
        G = r.useRef(!1),
        M = (0, d.K)(
            (e) => {
                !1 === G.current &&
                    e &&
                    (L?.onView?.(),
                    (0, S.wV)({
                        appId: L.id,
                        linkType: L.linkType,
                        referrerId: L.referrerId,
                        customId: L.activityCustomId,
                        guildId: L.guildId,
                        channelId: L.channelId,
                        messageId: L.messageId,
                    }),
                    (G.current = !0));
            },
            void 0,
        ),
        B = null != x,
        w = null != v && !1 === j,
        V = B || w,
        F = 0 === N ? _.pv : _.$g,
        Y = r.useRef(null),
        W = r.useCallback(() => {
            let e = Y.current;
            null == e || ("hidden" === getComputedStyle(e).visibility ? e.pause() : e.play());
        }, []),
        H = r.useMemo(() => !!w && new URL(v).pathname.endsWith(".gif"), [w, v]),
        J = r.useMemo(() => {
            if (null != R)
                return (e) => {
                    R(e),
                        (0, S.gx)({
                            applicationId: L.id,
                            linkType: L.linkType,
                            area: S.kY.CONTENT,
                            referrerId: L.referrerId,
                            customId: L.activityCustomId,
                            isDeadEnd: L.isDeadEnd,
                        });
                };
        }, [R, L]),
        z = r.useMemo(() => {
            if (null != P)
                return (e) => {
                    P(e),
                        (0, S.gx)({
                            applicationId: L.id,
                            linkType: L.linkType,
                            area: S.kY.BANNER,
                            referrerId: L.referrerId,
                            customId: L.activityCustomId,
                            isDeadEnd: L.isDeadEnd,
                        });
                };
        }, [P, L]);
    return (0, l.jsxs)("div", {
        ref: M,
        className: _.E6,
        style: { background: U },
        children: [
            V &&
                (0, l.jsxs)(T, {
                    onClick: z,
                    className: s()(_.cy, F, { [_.wk]: w }),
                    children: [
                        w &&
                            (H
                                ? (0, l.jsx)("div", { className: _.O9, style: { backgroundImage: `url(${v})` } })
                                : (0, l.jsx)(o.A, {
                                      ref: Y,
                                      src: v,
                                      mediaLayoutType: f.dG.MOSAIC,
                                      loop: !0,
                                      muted: !0,
                                      className: _.O9,
                                  })),
                        B &&
                            (0, l.jsx)("div", {
                                className: _.LR,
                                style: { backgroundImage: `url(${x})` },
                                onTransitionEnd: W,
                            }),
                    ],
                }),
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsxs)("div", {
                        className: _.hQ,
                        children: [
                            null != i &&
                                (0, l.jsx)(u.E, {
                                    variant: "text-sm/semibold",
                                    color: "none",
                                    className: _.wx,
                                    children: i,
                                }),
                            (0, l.jsxs)(T, {
                                onClick: J,
                                className: s()(_.FG, { [_.ry]: null != J }),
                                children: [
                                    null != y &&
                                        (0, l.jsx)("div", { className: _._8, style: { backgroundImage: `url(${y})` } }),
                                    (0, l.jsxs)("div", {
                                        className: _.Qs,
                                        children: [
                                            (0, l.jsx)(u.E, {
                                                variant: "text-md/semibold",
                                                color: "none",
                                                lineClamp: 1,
                                                className: _.eu,
                                                children: n,
                                            }),
                                            (0, l.jsx)("div", { className: _.rj, children: c }),
                                        ],
                                    }),
                                ],
                            }),
                            k.length > 0 &&
                                (0, l.jsx)("div", {
                                    className: s()(_.AC, b ? _.ad : null),
                                    children: k.map((e, t) => {
                                        let {
                                                label: n,
                                                icon: i,
                                                onClick: r,
                                                disabled: a,
                                                disabledReason: s,
                                                submitting: o,
                                                trackingArea: d,
                                                isDeadEnd: c,
                                                iconButton: A,
                                                buttonRef: I,
                                            } = e,
                                            h = 0 === t;
                                        return A
                                            ? (0, l.jsx)(
                                                  g.m,
                                                  {
                                                      text: n,
                                                      targetElementRef: I,
                                                      children: (0, l.jsx)(m.K, {
                                                          variant: h ? "overlay-primary" : "overlay-secondary",
                                                          disabled: a || null != s,
                                                          loading: o,
                                                          icon: i,
                                                          "aria-label": n,
                                                          buttonRef: I,
                                                          onClick: (e) => {
                                                              r(e),
                                                                  (0, S.gx)({
                                                                      applicationId: L.id,
                                                                      linkType: L.linkType,
                                                                      area: d,
                                                                      referrerId: L.referrerId,
                                                                      customId: L.activityCustomId,
                                                                      isDeadEnd: c,
                                                                  });
                                                          },
                                                      }),
                                                  },
                                                  n,
                                              )
                                            : (0, l.jsxs)(
                                                  "div",
                                                  {
                                                      className: _.uc,
                                                      children: [
                                                          (0, l.jsx)(p.$, {
                                                              variant: h ? "overlay-primary" : "overlay-secondary",
                                                              disabled: a || null != s,
                                                              loading: o,
                                                              icon: i,
                                                              text: n,
                                                              buttonRef: I,
                                                              onClick: (e) => {
                                                                  r(e),
                                                                      (0, S.gx)({
                                                                          applicationId: L.id,
                                                                          linkType: L.linkType,
                                                                          area: d,
                                                                          referrerId: L.referrerId,
                                                                          customId: L.activityCustomId,
                                                                          isDeadEnd: c,
                                                                      });
                                                              },
                                                              fullWidth: !0,
                                                          }),
                                                          null != s &&
                                                              (0, l.jsx)(u.E, {
                                                                  variant: "text-xs/medium",
                                                                  color: "none",
                                                                  className: _.H$,
                                                                  children: s,
                                                              }),
                                                      ],
                                                  },
                                                  n,
                                              );
                                    }),
                                }),
                        ],
                    }),
                    null != a && a,
                ],
            }),
        ],
    });
}
