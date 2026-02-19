"use strict";
n.d(t, { Z: () => p, k: () => A }), n(839272);
var i = n(64700),
    s = n(311907),
    l = n(394577),
    r = n(21119),
    a = n(696451),
    o = n(287809),
    c = n(607567),
    d = n(403362),
    u = n(605431),
    h = n(366251);
function A(e) {
    let { channel: t } = e,
        n = t?.guild_id,
        { totalSuggestions: u } = l.A.useExperiment(
            { guildId: n, location: "useVoiceInviteSuggestions" },
            { autoTrackExposure: !1 },
        ),
        h = (0, s.bG)([r.A], () => r.A.getUserAffinitiesMap(), []),
        A = new Set(
            (0, s.bG)([c.Ay], () => (null == t ? [] : c.Ay.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        p = (0, s.yK)(
            [a.Ay, o.default],
            () =>
                a.Ay.getMembers(n)
                    .map((e) => o.default.getUser(e.userId))
                    .filter(d.Vq)
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
        l = (0, s.bG)([h.A], () => h.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: l && !n,
        dismiss: i.useCallback(() => {
            (0, u.w)(e.id);
        }, [e]),
    };
}
