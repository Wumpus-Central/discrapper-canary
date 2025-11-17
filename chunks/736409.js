n.d(t, { j: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(704215),
    a = n(243778),
    s = n(7093),
    c = n(667105),
    u = n(695346),
    d = n(819640),
    p = n(885110),
    f = n(626135),
    h = n(55185),
    g = n(981631),
    m = n(921944),
    b = n(46140);
let _ = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: _, popoutTargetRef: y } = e,
        O = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: r } = (0, c.Ws)({ location: b.dr.CONFLICT_CHECKS }),
                i = u.G6.useSetting(),
                o = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(g.S9g.USER_SETTINGS)),
                a = (0, l.e7)([p.Z], () => p.Z.getStatus()),
                { isOpen: f } = (0, s.Z)();
            if (((n && r) || t) && !o && !f && !__OVERLAY__) {
                if (!i && a === g.Skl.INVISIBLE) return t ? h.NK.ActivityAndStatus : h.NK.ActivityAndStatusNux;
                if (!i) return t ? h.NK.Activity : h.NK.ActivityNux;
                if (a === g.Skl.INVISIBLE) return t ? h.NK.Status : h.NK.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, i.useEffect)(() => {
        n && f.default.track(g.rMx.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let v = n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(a.ZP, {
        contentTypes: v,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                a = i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(h.I, {
                showPopout: a,
                popoutState: O,
                handleClose: () => {
                    l(m.L.USER_DISMISS), _(!1);
                },
                popoutTargetRef: y,
                children: t,
            });
        },
    });
};
