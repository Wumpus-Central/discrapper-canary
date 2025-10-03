n.d(t, { j: () => O });
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
    f = n(626135),
    h = n(316496),
    g = n(55185),
    m = n(981631),
    b = n(921944),
    _ = n(46140);
let O = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: O, popoutTargetRef: y } = e,
        v = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isEnabled: n, showActivitySharingIndicatorWhenSharing: r } = (0, h.D)("SharingPrivacyPopout"),
                { isQuestBarEmpty: i, hasLoadedQuestBar: o } = (0, c.Ws)({ location: _.dr.CONFLICT_CHECKS }),
                a = u.G6.useSetting(),
                f = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(m.S9g.USER_SETTINGS)),
                b = (0, l.e7)([p.Z], () => p.Z.getStatus()),
                { isOpen: O } = (0, s.Z)();
            if (((i && o) || t) && !f && !O && !__OVERLAY__ && n) {
                if (r && a && b !== m.Skl.INVISIBLE) return t ? g.NK.Activity : null;
                if (!a && b === m.Skl.INVISIBLE) return t ? g.NK.ActivityAndStatus : g.NK.ActivityAndStatusNux;
                if (!a) return t ? g.NK.Activity : g.NK.ActivityNux;
                if (b === m.Skl.INVISIBLE) return t ? g.NK.Status : g.NK.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, i.useEffect)(() => {
        n && f.default.track(m.rMx.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let j = n ? [] : [o.z.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(a.ZP, {
        contentTypes: j,
        children: (e) => {
            let { visibleContent: i, markAsDismissed: l } = e,
                a = i === o.z.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(g.I, {
                showPopout: a,
                popoutState: v,
                handleClose: () => {
                    l(b.L.USER_DISMISS), O(!1);
                },
                popoutTargetRef: y,
                children: t,
            });
        },
    });
};
