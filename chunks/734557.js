n.d(t, { s: () => a }), n(388685), n(642613);
var r = n(192379),
    l = n(544891),
    o = n(981631);
let i = new Map();
function a(e) {
    let [t, n] = r.useState(i.has(e) ? Array.from(i.get(e)) : []),
        [a, s] = r.useState(!1),
        c = r.useMemo(() => t.map((e) => e.code), [t]),
        u = r.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
        d = r.useCallback(async () => {
            s(!0);
            let t = (
                await l.tn.get({
                    url: o.ANM.GUILD_INSTANT_INVITES(e),
                    rejectWithError: !0
                })
            ).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
            n(t), i.set(e, new Set(t)), s(!1);
        }, [e]);
    return (
        r.useEffect(() => {
            d();
        }, [e, d]),
        {
            invitesRaw: t,
            inviteCodes: c,
            invitesByCode: u,
            loading: a
        }
    );
}
