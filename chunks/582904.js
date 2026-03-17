"use strict";
n.d(t, { Ln: () => _, Z0: () => g, kt: () => p }), n(839272);
var i = n(64700),
    s = n(311907),
    l = n(394577),
    r = n(21119),
    a = n(696451),
    o = n(576705),
    c = n(287809),
    d = n(607567),
    u = n(403362),
    h = n(605431),
    A = n(366251),
    m = n(652215);
function p(e) {
    let { channel: t } = e,
        n = t?.guild_id,
        { totalSuggestions: o } = l.A.useExperiment(
            { guildId: n, location: "useVoiceInviteSuggestions" },
            { autoTrackExposure: !1 },
        ),
        h = (0, s.bG)([r.A], () => r.A.getUserAffinitiesMap(), []),
        A = new Set(
            (0, s.bG)([d.Ay], () => (null == t ? [] : d.Ay.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        m = (0, s.yK)(
            [a.Ay, c.default],
            () =>
                a.Ay.getMembers(n)
                    .map((e) => c.default.getUser(e.userId))
                    .filter(u.Vq)
                    .filter((e) => !A.has(e.id)),
            [n, A],
        );
    return i
        .useMemo(
            () =>
                m.toSorted((e, t) => {
                    let { id: n } = e,
                        { id: i } = t;
                    return (h.get(i)?.vcProbability ?? 0) - (h.get(n)?.vcProbability ?? 0);
                }),
            [m, h],
        )
        .slice(0, o);
}
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        l = (0, s.bG)([A.A], () => A.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: l && !n,
        dismiss: i.useCallback(() => {
            (0, h.w)(e.id);
        }, [e]),
    };
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        i = A.A.getShouldShowPopover(e.id),
        s = o.A.can(m.xBc.CREATE_INSTANT_INVITE, e);
    return i && s && !n;
}
