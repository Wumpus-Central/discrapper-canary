"use strict";
n.d(t, { f: () => c });
var r = n(136722),
    i = n(311907),
    a = n(406704),
    s = n(696451),
    o = n(576705),
    l = n(287809),
    u = n(652215);
function c(e) {
    let t = e.getGuildId(),
        n = (0, i.bG)([s.Ay, l.default], () => {
            let e = l.default.getCurrentUser();
            return (null != t && null != e ? s.Ay.getMember(t, e.id)?.isPending : null) ?? !1;
        }),
        { messagesDisabled: c } = (0, i.cf)([o.A], () => {
            let t = e.isPrivate(),
                i = o.A.computePermissions(e),
                s = r.zy(i, u.xBc.SEND_MESSAGES),
                l = (0, a.UJ)(e);
            return { messagesDisabled: n || (!t && !s) || l };
        }, [e, n]);
    return !c;
}
