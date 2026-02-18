n.d(t, { Z: () => p, k: () => A }), n(839272);
var i = n(64700),
    l = n(311907),
    s = n(394577),
    a = n(21119),
    r = n(696451),
    o = n(287809),
    d = n(607567),
    c = n(403362),
    u = n(605431),
    h = n(366251);
function A(e) {
    let { channel: t } = e,
        n = t?.guild_id,
        { totalSuggestions: u } = s.A.useExperiment(
            { guildId: n, location: "useVoiceInviteSuggestions" },
            { autoTrackExposure: !1 },
        ),
        h = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap(), []),
        A = new Set(
            (0, l.bG)([d.Ay], () => (null == t ? [] : d.Ay.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        p = (0, l.yK)(
            [r.Ay, o.default],
            () =>
                r.Ay.getMembers(n)
                    .map((e) => o.default.getUser(e.userId))
                    .filter(c.Vq)
                    .filter((e) => !A.has(e.id)),
            [n, A],
        );
    return i
        .useMemo(
            () =>
                p.toSorted((e, t) => {
                    let { id: n } = e,
                        { id: i } = t;
                    return (h.get(i)?.vcProbability ?? 0) - (h.get(n)?.vcProbability ?? 0);
                }),
            [p, h],
        )
        .slice(0, u);
}
function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        s = (0, l.bG)([h.A], () => h.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: s && !n,
        dismiss: i.useCallback(() => {
            (0, u.w)(e.id);
        }, [e]),
    };
}
