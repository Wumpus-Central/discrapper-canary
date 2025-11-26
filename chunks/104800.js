n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(793030),
    s = n(228488),
    c = n(617136),
    u = n(915750),
    d = n(49436),
    m = n(509212),
    f = n(184299),
    p = n(475595),
    v = n(602667),
    E = n(215113),
    g = n(874010),
    O = n(684245),
    h = n(388032),
    b = n(273339);
function C(e) {
    let { quest: t, sourceQuestContent: n } = e,
        l = o.useMemo(() => (0, p.fh)(t, p.eC.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
    return null == l
        ? null
        : (0, r.jsx)(v.A, {
              questOrQuests: t,
              questContent: d.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: n,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: l.url,
                      alt: "Video thumbnail",
                      className: b.stillFrameImageCard,
                  }),
          });
}
function S(e) {
    let { title: t, subtitle: n, icon: l, onClick: s, className: c } = e,
        [u, d] = o.useState(!1),
        m = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(a.P3F, {
        className: i()(b.endScreenPanel, b.accentOnHover, c),
        onMouseEnter: m,
        onMouseLeave: f,
        onFocus: m,
        onBlur: f,
        onClick: s,
        children: (0, r.jsxs)("div", {
            className: b.endScreenPanelInner,
            children: [
                (0, r.jsxs)("div", {
                    className: b.endScreenPanelTextCont,
                    children: [
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-md/semibold",
                            className: b.endScreenPanelTextTitle,
                            children: t,
                        }),
                        (0, r.jsx)(a.X6q, {
                            variant: "heading-sm/normal",
                            className: b.endScreenPanelTextSubtitle,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(g.Z, { color: "#747783" }),
                (0, r.jsx)(l, {
                    size: "md",
                    color: u ? "#FFFFFF" : "#B5BAC1",
                    className: b.endScreenIcon,
                }),
            ],
        }),
    });
}
function _(e) {
    var t;
    let { videoRef: n, onExitFullScreen: l, onTrackQuestVideoFullscreenChanged: i, onTrackQuestContentClick: p } = e,
        { onClose: v, sourceQuestContent: g, quest: _ } = o.useContext(E.VideoQuestModalContext),
        y = (0, f.ZP)((e) => e.fullScreenEnabled),
        x = (0, f.ZP)((e) => e.setFullScreenEnabled),
        j = (0, u.aM)(),
        P = (0, O.e)({
            quest: _,
            onClose: v,
            sourceQuestContent: g,
            impressionId: j,
        }),
        D = o.useCallback(
            (e) => {
                if (y) {
                    var t;
                    let e = (0, s.fn)(null == (t = n.current) ? void 0 : t.parentNode, n.current);
                    null != e && (e.removeEventListener(s.NO, l), (0, s.Pr)(e), x(!1), i(!1));
                }
                p(e, c.jZ.LEARN_MORE), P(e, c.jZ.OPEN_GAME_LINK);
            },
            [y, n, l, x, i, P, p],
        ),
        { title: R, subtitle: T } = {
            title: (0, m.V_)(_),
            subtitle: null != (t = _.config.ctaConfig.subtitle) ? t : h.intl.string(h.t.mxaHfx),
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(C, {
                quest: _,
                sourceQuestContent: g,
            }),
            (0, r.jsx)("div", { className: b.videoContOverlay }),
            (0, r.jsx)(S, {
                title: R,
                subtitle: T,
                icon: a.d4D,
                className: b.endScreenPanelRight,
                onClick: () => D(d.jn.VIDEO_MODAL),
            }),
        ],
    });
}
