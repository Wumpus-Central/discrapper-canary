n.d(t, { f: () => d });
var i = n(64700),
    r = n(311907),
    a = n(299091),
    l = n(408213),
    s = n(212455),
    o = n(652215);
function d(e) {
    let [t, n] = i.useState(!0),
        d = (0, r.bG)([s.A], () => (null != e ? s.A.getJoinRequestGuild(e) : void 0)),
        u = i.useCallback(async (e) => {
            try {
                let t = a.A.getInviteKeyForGuildId(e);
                null != t && (await l.Ay.fetchVerificationForm(e, t));
            } finally {
                n(!1);
            }
        }, []);
    return (
        i.useEffect(() => {
            null == e ? n(!1) : (n(!0), u(e));
        }, [e, u]),
        { canReapply: null != d && d.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL), isLoading: t }
    );
}
