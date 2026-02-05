n.d(t, { M: () => x });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(379848),
    o = n(832248),
    d = n(201805),
    c = n(253932),
    u = n(995377),
    h = n(461213),
    A = n(954571),
    g = n(130802),
    m = n(652215),
    p = n(49999),
    _ = n(654487);
let x = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: x, popoutTargetRef: f } = e,
        E = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, d.c9)({ location: _.rE.CONFLICT_CHECKS }),
                l = c.tz.useSetting(),
                a = (0, u.G)(),
                r = (0, s.bG)([h.A], () => h.A.getStatus()),
                { isOpen: A } = (0, o.A)();
            if (((n && i) || t) && !a && !A && !__OVERLAY__) {
                if (!l && r === m.clD.INVISIBLE) return t ? g.u5.ActivityAndStatus : g.u5.ActivityAndStatusNux;
                if (!l) return t ? g.u5.Activity : g.u5.ActivityNux;
                if (r === m.clD.INVISIBLE) return t ? g.u5.Status : g.u5.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, l.useEffect)(() => {
        n && A.default.track(m.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let C = n ? [] : [a.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, i.jsx)(r.Ay, {
        contentTypes: C,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: s } = e,
                r = l === a.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, i.jsx)(g.zd, {
                showPopout: r,
                popoutState: E,
                handleClose: () => {
                    s(p.i.USER_DISMISS), x(!1);
                },
                popoutTargetRef: f,
                children: t,
            });
        },
    });
};
