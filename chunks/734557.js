n.d(t, { s: () => i }), n(47120), n(230036);
var r = n(192379),
    l = n(544891),
    o = n(981631);
let a = new Map();
function i(e) {
    let [t, n] = r.useState(a.has(e) ? Array.from(a.get(e)) : []),
        [i, s] = r.useState(!1),
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
            n(t), a.set(e, new Set(t)), s(!1);
        }, [e]);
    return (
        r.useEffect(() => {
            d();
        }, [e, d]),
        {
            invitesRaw: t,
            inviteCodes: c,
            invitesByCode: u,
            loading: i
        }
    );
}
