"use strict";
n.d(t, { M: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(554146),
    r = n(379848),
    o = n(832248),
    c = n(201805),
    d = n(253932),
    u = n(995377),
    h = n(461213),
    A = n(954571),
    m = n(130802),
    p = n(652215),
    _ = n(49999);
let g = (e) => {
    let { children: t, isForceShowSharingPopout: n, setIsForceShowSharingPopout: g, popoutTargetRef: f } = e,
        x = (function (e) {
            let { isForceShowSharingPopout: t } = e,
                { isQuestBarEmpty: n, hasLoadedQuestBar: i } = (0, c.c9)(),
                s = d.tz.useSetting(),
                a = (0, u.G)(),
                r = (0, l.bG)([h.A], () => h.A.getStatus()),
                { isOpen: A } = (0, o.A)();
            if (((n && i) || t) && !a && !A && !__OVERLAY__) {
                if (!s && r === p.clD.INVISIBLE) return t ? m.u5.ActivityAndStatus : m.u5.ActivityAndStatusNux;
                if (!s) return t ? m.u5.Activity : m.u5.ActivityNux;
                if (r === p.clD.INVISIBLE) return t ? m.u5.Status : m.u5.StatusNux;
            }
            return null;
        })({ isForceShowSharingPopout: n });
    (0, s.useEffect)(() => {
        n && A.default.track(p.HAw.OPEN_POPOUT, { type: "SharingPrivacyPopout" });
    }, [n]);
    let C = n ? [] : [a.M.SHARE_ACTIVITY_COACHMARK_V2];
    return (0, i.jsx)(r.Ay, {
        contentTypes: C,
        children: (e) => {
            let { visibleContent: s, markAsDismissed: l } = e,
                r = s === a.M.SHARE_ACTIVITY_COACHMARK_V2 || n;
            return (0, i.jsx)(m.zd, {
                showPopout: r,
                popoutState: x,
                handleClose: () => {
                    l(_.i.USER_DISMISS), g(!1);
                },
                popoutTargetRef: f,
                children: t,
            });
        },
    });
};
