n.d(t, {
    f: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(311907),
    l = n(299091),
    a = n(408213),
    s = n(212455),
    o = n(652215);

function c(e) {
    let [t, n] = r.useState(!0),
        c = (0, i.bG)([s.A], () => (null != e ? s.A.getJoinRequestGuild(e) : void 0)),
        u = r.useCallback(async (e) => {
            try {
                let t = l.A.getInviteKeyForGuildId(e);
                null != t && (await a.Ay.fetchVerificationForm(e, t));
            } finally {
                n(!1);
            }
        }, []);
    return (
        r.useEffect(() => {
            null == e ? n(!1) : (n(!0), u(e));
        }, [e, u]),
        {
            canReapply: null != c && c.features.has(o.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
            isLoading: t,
        }
    );
}
