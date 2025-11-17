n.d(t, { Z: () => E }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(681715),
    i = n(481060),
    a = n(617136),
    s = n(915750),
    c = n(509212),
    u = n(497505),
    d = n(937797),
    m = n(215113),
    p = n(939389),
    f = n(46140),
    v = n(388032);
function E(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: E, isPortrait: g } = o.useContext(m.VideoQuestModalContext),
        O = (0, s.aM)(),
        { enabled: b, variant: h } = d.EO.useConfig({ location: f.dr.VIDEO_MODAL }),
        S = h === d.m_.OVERLAY_SHARE_ON_VIDEO,
        [C, y] = (0, p.G6)(v.intl.string(v.t.RDE0Sc), v.intl.string(v.t["+5kSoW"]), 1700),
        [_, x] = o.useState(!1),
        j = o.useRef(null),
        D = (0, c.vB)(n.config),
        P = o.useCallback(() => {
            D &&
                ((0, c.f2)(n.id, {
                    content: u.jn.VIDEO_MODAL,
                    ctaContent: a.jZ.COPY_QUEST_URL,
                    impressionId: O,
                    sourceQuestContent: E,
                }),
                (b || g) && (0, i.showToast)((0, i.createToast)(v.intl.string(v.t["+5kSoW"]), i.ToastType.SUCCESS)),
                y(),
                x(!0),
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => {
                    x(!1);
                }, 1700)));
        }, [O, D, n.id, E, y, b, g]);
    return (o.useEffect(
        () => () => {
            null != j.current && clearTimeout(j.current);
        },
        [],
    ),
    D)
        ? b || g
            ? (0, r.jsx)("div", {
                  style: { marginLeft: t ? "auto" : void 0 },
                  children: _
                      ? (0, r.jsx)(i.hU, {
                            variant: "active",
                            icon: i.owK,
                            onClick: P,
                            "aria-label": v.intl.string(v.t.RDE0Sc),
                        })
                      : (0, r.jsx)(l.u, {
                            text: S || !b ? void 0 : v.intl.string(v.t.WqhZss),
                            children: (0, r.jsx)(i.hU, {
                                variant: S ? "overlay-secondary" : "secondary",
                                icon: b ? i.aAc : i.TIy,
                                "aria-label": v.intl.string(v.t.RDE0Sc),
                                onClick: P,
                            }),
                        }),
              })
            : (0, r.jsx)(i.Button, {
                  variant: "secondary",
                  text: C,
                  onClick: P,
              })
        : null;
}
