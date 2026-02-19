"use strict";
n.d(t, { M: () => f });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(379848),
    o = n(832248),
    c = n(201805),
    d = n(253932),
    u = n(995377),
    h = n(461213),
    A = n(954571),
    p = n(130802),
    g = n(652215),
    m = n(49999),
    _ = n(654487);
let f = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: f, popoutTargetRef: x } = e,
        C = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, c.c9)({ location: _.rE.CONFLICT_CHECKS }),
                s = d.tz.useSetting(),
                r = (0, u.G)(),
                a = (0, l.bG)([h.A], () => h.A.getStatus()),
                { isOpen: A } = (0, o.A)();
            if (((n && i) || t) && !r && !A && !__OVERLAY__) {
                if (!s && a === g.clD.INVISIBLE) return t ? p.u5.ActivityAndStatus : p.u5.ActivityAndStatusNux;
                if (!s) return t ? p.u5.Activity : p.u5.ActivityNux;
                if (a === g.clD.INVISIBLE) return t ? p.u5.Status : p.u5.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && A.default.track(g.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let E = n ? [] : [r.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, i.jsx)(a.Ay, {
        contentTypes: E,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: l } = e,
                a = s === r.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, i.jsx)(p.zd, {
                showPopout: a,
                popoutState: C,
                handleClose: () => {
                    l(m.i.USER_DISMISS), f(!1);
                },
                popoutTargetRef: x,
                children: t,
            });
        },
    });
};
