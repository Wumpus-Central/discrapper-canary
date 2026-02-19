"use strict";
n.d(t, { a: () => c });
var i = n(311907),
    s = n(696451),
    l = n(287809),
    r = n(821124),
    a = n(212455),
    o = n(652215);
function c(e) {
    let t = e?.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, i.bG)([a.A, l.default, s.Ay], () => {
            if (null == e) return;
            let t = a.A.getRequest(e.id),
                n = l.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = s.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, r.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
