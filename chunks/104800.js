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
    C = n(273339);
function S(e) {
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
                      className: C.stillFrameImageCard,
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
        className: i()(C.endScreenPanel, C.accentOnHover, c),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: C.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: C.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-md/semibold",
                            className: C.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(s.X6q, {
                            variant: "heading-sm/normal",
                            className: C.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(O.Z, { color: "#747783" }),
                (0, r.jsx)(l, {
                    size: "md",
                    color: u ? "#FFFFFF" : "#B5BAC1",
                    className: C.endScreenIcon,
                }),
            ],
        }),
    });
}
function _(e) {
    var t;
    let { videoRef: n, onExitFullScreen: l, onTrackQuestVideoFullscreenChanged: i, onTrackQuestContentClick: a } = e,
        { onClose: v, sourceQuestContent: E, quest: O } = o.useContext(g.VideoQuestModalContext),
        { questConfig: _ } = o.useContext(g.VideoQuestConfigContext),
        x = (0, p.ZP)((e) => e.fullScreenEnabled),
        j = (0, p.ZP)((e) => e.setFullScreenEnabled),
        D = (0, d.aM)(),
        P = (0, h.e)({
            quest: O,
            onClose: v,
            sourceQuestContent: E,
            impressionId: D,
        }),
        T = o.useCallback(
            (e) => {
                if (x) {
                    var t;
                    let e = (0, c.fn)(null == (t = n.current) ? void 0 : t.parentNode, n.current);
                    null != e && (e.removeEventListener(c.NO, l), (0, c.Pr)(e), j(!1), i(!1));
                }
                a(e, u.jZ.LEARN_MORE), P(e, u.jZ.OPEN_GAME_LINK);
            },
            [x, n, l, j, i, P, a],
        ),
        { title: R, subtitle: I } = {
            title: (0, f.B2)(_),
            subtitle: null != (t = _.ctaConfig.subtitle) ? t : b.intl.string(b.t.mxaHfx),
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(S, {
                quest: O,
                sourceQuestContent: E,
            }),
            (0, r.jsx)("div", { className: C.videoContOverlay }),
            (0, r.jsx)(y, {
                title: R,
                subtitle: I,
                icon: s.d4D,
                className: C.endScreenPanelRight,
                onClick: () => T(m.jn.VIDEO_MODAL),
            }),
        ],
    });
}
