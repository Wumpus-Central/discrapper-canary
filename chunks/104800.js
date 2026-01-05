n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(793030),
    s = n(692547),
    c = n(228488),
    u = n(617136),
    d = n(915750),
    m = n(49436),
    f = n(184299),
    p = n(937797),
    v = n(475595),
    E = n(304696),
    g = n(602667),
    O = n(215113),
    h = n(874010),
    C = n(684245),
    b = n(324805),
    S = n(388032),
    _ = n(209668);
function y(e) {
    let { quest: t, sourceQuestContent: n } = e,
        l = o.useMemo(() => (0, v.fh)(t, v.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
    return null == l
        ? null
        : (0, r.jsx)(g.A, {
              questOrQuests: t,
              questContent: m.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: n,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: "Video thumbnail",
                      className: _.stillFrameImageCard,
                  }),
          });
}
function x(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: c } = e,
        [u, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(a.P3F, {
        className: i()(_.endScreenPanel, _.accentOnHover, c),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: s,
        children: (0, r.jsxs)("div", {
            className: _.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: _.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-md/semibold",
                            className: _.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-sm/normal",
                            className: _.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(h.Z, { color: "#747783" }),
                (0, r.jsx)(l, {
                    size: "md",
                    color: u ? "#FFFFFF" : "#B5BAC1",
                    className: _.endScreenIcon,
                }),
            ],
        }),
    });
}
function j(e) {
    let { asset: t } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              src: t.url,
              alt: "",
              className: _.endScreenImageBackground,
          });
}
function D(e) {
    let { quest: t, asset: n, sourceQuestContent: o, orientation: l } = e;
    return null == n
        ? null
        : (0, r.jsx)(g.A, {
              questOrQuests: t,
              questContent: m.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: o,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: "Video thumbnail",
                      className: i()(_.endScreenCard, { [_.endScreenCardPortrait]: "portrait" === l }),
                  }),
          });
}
function P(e) {
    let { ctaBtnLabel: t, title: n, subtitle: o, onCTAClick: l, orientation: s } = e;
    return (0, r.jsxs)("div", {
        className: i()(_.endScreenCtaContainer, { [_.endScreenCtaContainerPortrait]: "portrait" === s }),
        children: [
            (0, r.jsx)(T, {
                title: n,
                subtitle: o,
            }),
            (0, r.jsx)(R, {
                label: t,
                icon: a.d4D,
                onClick: l,
            }),
        ],
    });
}
function T(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: _.endScreenCtaTitleContainer,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-md/semibold",
                className: _.endScreenCtaTitle,
                children: t,
            }),
            (0, r.jsx)(a.X6q, {
                variant: "heading-sm/normal",
                className: _.endScreenCtaSubtitle,
                children: n,
            }),
        ],
    });
}
function R(e) {
    let { label: t, icon: n, onClick: l, className: c } = e,
        [u, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsxs)(a.P3F, {
        className: i()(_.endScreenCtaBtn, _.accentOnHover, c),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: l,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: "heading-md/semibold",
                className: _.endScreenCtaBtnTitle,
                children: t,
            }),
            (0, r.jsx)(n, {
                size: "md",
                color: u ? s.Z.colors.WHITE : "#B5BAC1",
                className: _.endScreenIcon,
            }),
        ],
    });
}
function N(e) {
    var t;
    let {
            videoRef: n,
            onExitFullScreen: l,
            onTrackQuestVideoFullscreenChanged: s,
            onTrackQuestContentClick: g,
            orientation: h,
        } = e,
        { onClose: T, sourceQuestContent: R, quest: N } = o.useContext(O.VideoQuestModalContext),
        I = (0, f.ZP)((e) => e.fullScreenEnabled),
        A = (0, f.ZP)((e) => e.setFullScreenEnabled),
        L = (0, d.aM)(),
        w = (0, C.e)({
            quest: N,
            onClose: T,
            sourceQuestContent: R,
            impressionId: L,
        }),
        k = o.useCallback(
            (e) => {
                if (I) {
                    var t;
                    let e = (0, c.fn)(null == (t = n.current) ? void 0 : t.parentNode, n.current);
                    null != e && (e.removeEventListener(c.NO, l), (0, c.Pr)(e), A(!1), s(!1));
                }
                g(e, u.jZ.LEARN_MORE), w(e, u.jZ.OPEN_GAME_LINK);
            },
            [I, n, l, A, s, w, g],
        ),
        { title: M, subtitle: V } = {
            title: (0, E.V_)(N),
            subtitle: null != (t = N.config.ctaConfig.subtitle) ? t : S.intl.string(S.t.mxaHfx),
        },
        { enabled: Z } = p.VG.useConfig({ location: b.dr.VIDEO_MODAL }),
        F = o.useMemo(() => (0, v.fh)(N, v.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [N]);
    return Z
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(j, { asset: F }),
                  (0, r.jsx)("div", { className: _.endScreenOverlay }),
                  (0, r.jsxs)("div", {
                      className: i()(_.endScreenContainer, { [_.endScreenContainerPortrait]: "portrait" === h }),
                      children: [
                          (0, r.jsx)(D, {
                              quest: N,
                              asset: F,
                              sourceQuestContent: R,
                              orientation: h,
                          }),
                          (0, r.jsx)(P, {
                              title: M,
                              subtitle: V,
                              ctaBtnLabel: N.config.ctaConfig.buttonLabel,
                              onCTAClick: () => k(m.jn.VIDEO_MODAL),
                              orientation: h,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(y, {
                      quest: N,
                      sourceQuestContent: R,
                  }),
                  (0, r.jsx)("div", { className: _.videoContOverlay }),
                  (0, r.jsx)(x, {
                      title: M,
                      subtitle: V,
                      icon: a.d4D,
                      className: _.endScreenPanelRight,
                      onClick: () => k(m.jn.VIDEO_MODAL),
                  }),
              ],
          });
}
