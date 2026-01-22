n.d(t, { M: () => A });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(554146),
    s = n(379848),
    o = n(832248),
    c = n(201805),
    u = n(253932),
    d = n(186111),
    f = n(461213),
    p = n(954571),
    h = n(130802),
    b = n(652215),
    g = n(49999),
    m = n(654487);
let A = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: A, popoutTargetRef: y } = e,
        O = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: r } = (0, c.c9)({ location: m.rE.CONFLICT_CHECKS }),
                l = u.tz.useSetting(),
                a = (0, i.bG)([d.A], () => d.A.getLayers().includes(b.zgK.USER_SETTINGS)),
                s = (0, i.bG)([f.A], () => f.A.getStatus()),
                { isOpen: p } = (0, o.A)();
            if (((n && r) || t) && !a && !p && !__OVERLAY__) {
                if (!l && s === b.clD.INVISIBLE) return t ? h.u5.ActivityAndStatus : h.u5.ActivityAndStatusNux;
                if (!l) return t ? h.u5.Activity : h.u5.ActivityNux;
                if (s === b.clD.INVISIBLE) return t ? h.u5.Status : h.u5.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, l.useEffect)(() => {
        n && p.default.track(b.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let j = n ? [] : [a.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(s.Ay, {
        contentTypes: j,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: i } = e,
                s = l === a.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(h.zd, {
                showPopout: s,
                popoutState: O,
                handleClose: () => {
                    i(g.i.USER_DISMISS), A(!1);
                },
                popoutTargetRef: y,
                children: t,
            });
        },
    });
};
