n.d(t, {
    a: () => c,
});
var r = n(311907),
    l = n(696451),
    i = n(287809),
    a = n(821124),
    s = n(212455),
    o = n(652215);

function c(e) {
    let t = null == e ? void 0 : e.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        n = (0, r.bG)([s.A, i.default, l.Ay], () => {
            if (null == e) return;
            let t = s.A.getRequest(e.id),
                n = i.default.getCurrentUser();
            if (null == n || null == t || t.userId !== n.id) return;
            let r = l.Ay.getMember(e.id, t.userId);
            if (!(null != r && !r.isPending) || (0, a.Oe)(t)) return t.applicationStatus;
        }, [e]);
    return t ? n : void 0;
}
