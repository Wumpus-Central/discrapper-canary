n.d(t, { Z: () => p });
var r = n(54381),
    o = n(473749),
    l = n(681715),
    i = n(481060),
    a = n(617136),
    s = n(915750),
    c = n(49436),
    u = n(304696),
    d = n(283689),
    m = n(215113),
    f = n(388032);
function p(e) {
    let { floatRight: t } = e,
        { quest: n, sourceQuestContent: p } = o.useContext(m.VideoQuestModalContext),
        v = (0, s.aM)(),
        E = (0, d.VB)(n.config),
        g = o.useCallback(() => {
            E &&
                ((0, u.f2)(n.id, {
                    content: c.jn.VIDEO_MODAL,
                    ctaContent: a.jZ.COPY_QUEST_URL,
                    impressionId: v,
                    sourceQuestContent: p,
                }),
                (0, i.showToast)((0, i.createToast)(f.intl.string(f.t["+5kSoW"]), i.ToastType.SUCCESS)));
        }, [v, E, n.id, p]);
    return E
        ? (0, r.jsx)("div", {
              style: { marginLeft: t ? "auto" : void 0 },
              children: (0, r.jsx)(l.u, {
                  text: f.intl.string(f.t.WmfZHZ),
                  children: (0, r.jsx)(i.hU, {
                      variant: "overlay-secondary",
                      icon: i.xPt,
                      "aria-label": f.intl.string(f.t.RDE0Sc),
                      onClick: g,
                  }),
              }),
          })
        : null;
}
