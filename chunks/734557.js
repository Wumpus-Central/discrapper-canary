l.d(t, { s: () => s }), l(47120), l(724458);
var n = l(192379),
    a = l(544891),
    i = l(981631);
let o = new Map();
function s(e) {
    let [t, l] = n.useState(o.has(e) ? Array.from(o.get(e)) : []),
        [s, r] = n.useState(!1),
        c = n.useMemo(() => t.map((e) => e.code), [t]),
        d = n.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
        C = n.useCallback(async () => {
            r(!0);
            let t = (
                await a.tn.get({
                    url: i.ANM.GUILD_INSTANT_INVITES(e),
                    rejectWithError: !0
                })
            ).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
            l(t), o.set(e, new Set(t)), r(!1);
        }, [e]);
    return (
        n.useEffect(() => {
            C();
        }, [e, C]),
        {
            invitesRaw: t,
            inviteCodes: c,
            invitesByCode: d,
            loading: s
        }
    );
}
