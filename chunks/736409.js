n.d(t, { j: () => _ });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(243778),
    s = n(7093),
    c = n(667105),
    u = n(695346),
    d = n(819640),
    p = n(885110),
    h = n(626135),
    f = n(55185),
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
                { isOpen: h } = (0, s.Z)();
            if (((n && r) || t) && !o && !h && !__OVERLAY__) {
                if (!i && a === g.Skl.INVISIBLE) return t ? f.NK.ActivityAndStatus : f.NK.ActivityAndStatusNux;
                if (!i) return t ? f.NK.Activity : f.NK.ActivityNux;
                if (a === g.Skl.INVISIBLE) return t ? f.NK.Status : f.NK.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, i.useEffect)(() => {
        n && h.default.track(g.rMx.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let v = n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(a.ZP, {
        contentTypes: v,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                a = i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(f.I, {
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
