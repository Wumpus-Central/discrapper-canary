n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(754700),
    s = n(793030),
    c = n(228488),
    u = n(617136),
    d = n(915750),
    m = n(49436),
    f = n(509212),
    p = n(184299),
    v = n(720293),
    E = n(602667),
    g = n(215113),
    O = n(874010),
    h = n(684245),
    b = n(388032),
    S = n(273339);
function C(e) {
    let { quest: t, sourceQuestContent: n } = e,
        l = o.useMemo(() => (0, v.z0)(t, a.X.WATCH_VIDEO, v.n1.VIDEO, v.O.THUMBNAIL), [t]);
    return null == l
        ? null
        : (0, r.jsx)(E.A, {
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
                      className: S.stillFrameImageCard,
                  }),
          });
}
function y(e) {
    let { title: t, subtitle: n, icon: l, onClick: a, className: c } = e,
        [u, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(s.P3F, {
        className: i()(S.endScreenPanel, S.accentOnHover, c),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: S.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: S.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-md/semibold",
                            className: S.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-sm/normal",
                            className: S.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(O.Z, { color: "#747783" }),
                (0, r.jsx)(l, {
                    size: "md",
                    color: u ? "#FFFFFF" : "#B5BAC1",
                    className: S.endScreenIcon,
                }),
            ],
        }),
    });
}
function _(e) {
    var t;
    let { videoRef: n, onExitFullScreen: l, onTrackQuestVideoFullscreenChanged: i, onTrackQuestContentClick: a } = e,
        { onClose: v, sourceQuestContent: E, quest: O } = o.useContext(g.VideoQuestModalContext),
        _ = (0, p.ZP)((e) => e.fullScreenEnabled),
        x = (0, p.ZP)((e) => e.setFullScreenEnabled),
        j = (0, d.aM)(),
        D = (0, h.e)({
            quest: O,
            onClose: v,
            sourceQuestContent: E,
            impressionId: j,
        }),
        P = o.useCallback(
            (e) => {
                if (_) {
                    var t;
                    let e = (0, c.fn)(null == (t = n.current) ? void 0 : t.parentNode, n.current);
                    null != e && (e.removeEventListener(c.NO, l), (0, c.Pr)(e), x(!1), i(!1));
                }
                a(e, u.jZ.LEARN_MORE), D(e, u.jZ.OPEN_GAME_LINK);
            },
            [_, n, l, x, i, D, a],
        ),
        { title: T, subtitle: R } = {
            title: (0, f.V_)(O),
            subtitle: null != (t = O.config.ctaConfig.subtitle) ? t : b.intl.string(b.t.mxaHfx),
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C, {
                quest: O,
                sourceQuestContent: E,
            }),
            (0, r.jsx)("div", { className: S.videoContOverlay }),
            (0, r.jsx)(y, {
                title: T,
                subtitle: R,
                icon: s.d4D,
                className: S.endScreenPanelRight,
                onClick: () => P(m.jn.VIDEO_MODAL),
            }),
        ],
    });
}
