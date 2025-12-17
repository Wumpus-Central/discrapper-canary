n.d(t, { j: () => y });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(243778),
    s = n(7093),
    c = n(659302),
    u = n(695346),
    d = n(819640),
    f = n(885110),
    h = n(626135),
    p = n(55185),
    g = n(981631),
    b = n(921944),
    m = n(324805);
let y = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: y, popoutTargetRef: O } = e,
        v = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: r } = (0, c.Ws)({ location: m.dr.CONFLICT_CHECKS }),
                i = u.G6.useSetting(),
                a = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(g.S9g.USER_SETTINGS)),
                o = (0, l.e7)([f.Z], () => f.Z.getStatus()),
                { isOpen: h } = (0, s.Z)();
            if (((n && r) || t) && !a && !h && !__OVERLAY__) {
                if (!i && o === g.Skl.INVISIBLE) return t ? p.NK.ActivityAndStatus : p.NK.ActivityAndStatusNux;
                if (!i) return t ? p.NK.Activity : p.NK.ActivityNux;
                if (o === g.Skl.INVISIBLE) return t ? p.NK.Status : p.NK.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, i.useEffect)(() => {
        n && h.default.track(g.rMx.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let j = n ? [] : [a.z.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(o.ZP, {
        contentTypes: j,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                o = i === a.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(p.I, {
                showPopout: o,
                popoutState: v,
                handleClose: () => {
                    l(b.L.USER_DISMISS), y(!1);
                },
                popoutTargetRef: O,
                children: t,
            });
        },
    });
};
