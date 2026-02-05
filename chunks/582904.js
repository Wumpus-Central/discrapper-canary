n.d(t, { L7: () => p, Z0: () => m, kt: () => g }), n(839272);
var i = n(64700),
    l = n(311907),
    s = n(775602),
    a = n(394577),
    r = n(21119),
    o = n(696451),
    d = n(287809),
    c = n(607567),
    u = n(403362),
    h = n(605431),
    A = n(366251);
function g(e) {
    let { channel: t } = e,
        n = t?.guild_id,
        { totalSuggestions: s } = a.A.useExperiment(
            { guildId: n, location: "useVoiceInviteSuggestions" },
            { autoTrackExposure: !1 },
        ),
        h = (0, l.bG)([r.A], () => r.A.getUserAffinitiesMap(), []),
        A = new Set(
            (0, l.bG)([c.Ay], () => (null == t ? [] : c.Ay.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        g = (0, l.yK)(
            [o.Ay, d.default],
            () =>
                o.Ay.getMembers(n)
                    .map((e) => d.default.getUser(e.userId))
                    .filter(u.Vq)
                    .filter((e) => !A.has(e.id)),
            [n, A],
        );
    return i
        .useMemo(
            () =>
                g.toSorted((e, t) => {
                    let { id: n } = e,
                        { id: i } = t;
                    return (h.get(i)?.vcProbability ?? 0) - (h.get(n)?.vcProbability ?? 0);
                }),
            [g, h],
        )
        .slice(0, s);
}
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        s = (0, l.bG)([A.A], () => A.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: s && !n,
        dismiss: i.useCallback(() => {
            (0, h.w)(e.id);
        }, [e]),
    };
}
function p(e) {
    let [t, n] = i.useState(!1),
        [a, r] = i.useState(!1),
        o = (0, l.bG)([s.A], () => s.A.keyboardModeEnabled);
    i.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), r(!1);
        let i = () => n(!0),
            l = () => n(!1),
            s = () => r(!0),
            a = (e) => {
                t.contains(e.relatedTarget) || r(!1);
            };
        return (
            t.addEventListener("mouseenter", i),
            t.addEventListener("mouseleave", l),
            t.addEventListener("focusin", s),
            t.addEventListener("focusout", a),
            () => {
                t.removeEventListener("mouseenter", i),
                    t.removeEventListener("mouseleave", l),
                    t.removeEventListener("focusin", s),
                    t.removeEventListener("focusout", a);
            }
        );
    }, [e]);
    let d = o && a;
    return { isHovering: t, isFocusing: d, isHoveringOrFocusing: t || d };
}
