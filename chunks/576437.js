n.d(t, {
    M: () => A,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(379848),
    o = n(832248),
    c = n(201805),
    u = n(253932),
    d = n(995377),
    p = n(461213),
    h = n(954571),
    g = n(130802),
    f = n(652215),
    m = n(49999),
    b = n(654487);
let A = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: A, popoutTargetRef: y } = e,
        O = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: r } = (0, c.c9)({
                    location: b.rE.CONFLICT_CHECKS,
                }),
                l = u.tz.useSetting(),
                s = (0, d.G)(),
                a = (0, i.bG)([p.A], () => p.A.getStatus()),
                { isOpen: h } = (0, o.A)();
            if (((n && r) || t) && !s && !h && !__OVERLAY__) {
                if (!l && a === f.clD.INVISIBLE) return t ? g.u5.ActivityAndStatus : g.u5.ActivityAndStatusNux;
                if (!l) return t ? g.u5.Activity : g.u5.ActivityNux;
                if (a === f.clD.INVISIBLE) return t ? g.u5.Status : g.u5.StatusNux;
            }
            return null;
        })({
            isForceShowSharingPopout: n,
        });
    (0, l.useEffect)(() => {
        n &&
            h.default.track(f.HAw.OPEN_POPOUT, {
                type: "SharingPrivacyPopout",
            });
    }, [n]);
    let j = n ? [] : [s.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, r.jsx)(a.Ay, {
        contentTypes: j,
        children: (e) => {
            let { visibleContent: l, markAsDismissed: i } = e,
                a = l === s.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, r.jsx)(g.zd, {
                showPopout: a,
                popoutState: O,
                handleClose: () => {
                    i(m.i.USER_DISMISS), A(!1);
                },
                popoutTargetRef: y,
                children: t,
            });
        },
    });
};
