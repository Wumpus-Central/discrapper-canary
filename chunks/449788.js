n.d(t, { Z: () => g }), n(388685);
var r = n(54381),
    o = n(473749),
    l = n(681715),
    i = n(481060),
    a = n(617136),
    s = n(915750),
    c = n(49436),
    u = n(937797),
    d = n(304696),
    m = n(283689),
    f = n(215113),
    p = n(939389),
    v = n(324805),
    E = n(388032);
function g(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: g, isPortrait: O } = o.useContext(f.VideoQuestModalContext),
        h = (0, s.aM)(),
        { enabled: b, variant: C } = u.EO.useConfig({ location: v.dr.VIDEO_MODAL }),
        S = C === u.m_.OVERLAY_SHARE_ON_VIDEO,
        [_, y] = (0, p.G6)(E.intl.string(E.t.RDE0Sc), E.intl.string(E.t["+5kSoW"]), 1700),
        [x, j] = o.useState(!1),
        P = o.useRef(null),
        D = (0, m.VB)(n.config),
        T = o.useCallback(() => {
            D &&
                ((0, d.f2)(n.id, {
                    content: c.jn.VIDEO_MODAL,
                    ctaContent: a.jZ.COPY_QUEST_URL,
                    impressionId: h,
                    sourceQuestContent: g,
                }),
                (b || O) && (0, i.showToast)((0, i.createToast)(E.intl.string(E.t["+5kSoW"]), i.ToastType.SUCCESS)),
                y(),
                j(!0),
                null != P.current && clearTimeout(P.current),
                (P.current = setTimeout(() => {
                    j(!1);
                }, 1700)));
        }, [h, D, n.id, g, y, b, O]);
    return (o.useEffect(
        () => () => {
            null != P.current && clearTimeout(P.current);
        },
        [],
    ),
    D)
        ? b || O
            ? (0, r.jsx)("div", {
                  style: { marginLeft: t ? "auto" : void 0 },
                  children:
                      x && !b
                          ? (0, r.jsx)(i.hU, {
                                variant: "active",
                                icon: i.owK,
                                onClick: T,
                                "aria-label": E.intl.string(E.t.RDE0Sc),
                            })
                          : (0, r.jsx)(l.u, {
                                text: b ? E.intl.string(E.t.WmfZHZ) : void 0,
                                children: (0, r.jsx)(i.hU, {
                                    variant: S ? "overlay-secondary" : "secondary",
                                    icon: b ? i.xPt : i.TIy,
                                    "aria-label": E.intl.string(E.t.RDE0Sc),
                                    onClick: T,
                                }),
                            }),
              })
            : (0, r.jsx)(i.Button, {
                  variant: "secondary",
                  text: _,
                  onClick: T,
              })
        : null;
}
