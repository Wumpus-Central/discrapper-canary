n.d(t, { a: () => d });
var i = n(311907),
    l = n(696451),
    s = n(287809),
    a = n(821124),
    r = n(212455),
    o = n(652215);
function d(e) {
    let t = e?.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, i.bG)([r.A, s.default, l.Ay], () => {
            if (null == e) return;
            let t = r.A.getRequest(e.id),
                n = s.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let i = l.Ay.getMember(e.id, t.userId);
            if (!(null != i && !i.isPending) || (0, a.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
