n.d(t, {
    Tu: () => g,
    UM: () => m,
    j1: () => f,
}),
    n(388685),
    n(387201),
    n(642613);
var i = n(647438),
    r = n(442837),
    l = n(607070),
    a = n(71133),
    o = n(752048),
    s = n(271383),
    c = n(594174),
    u = n(938475),
    d = n(823379),
    p = n(406463),
    h = n(78332);
function f(e) {
    let { channel: t } = e,
        n = (0, r.e7)([o.Z], () => o.Z.getUserAffinitiesMap(), []),
        l = null == t ? void 0 : t.guild_id,
        a = new Set(
            (0, r.e7)([u.ZP], () => (null == t ? [] : u.ZP.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        p = (0, r.e7)(
            [s.ZP, c.default],
            () =>
                s.ZP.getMembers(l)
                    .map((e) => c.default.getUser(e.userId))
                    .filter(d.lm)
                    .filter((e) => !a.has(e.id)),
            [l, a],
        );
    return i
        .useMemo(
            () =>
                p.toSorted((e, t) => {
                    var i, r, l, a;
                    let { id: o } = e,
                        { id: s } = t;
                    return (
                        (null != (l = null == (i = n.get(s)) ? void 0 : i.vcProbability) ? l : 0) -
                        (null != (a = null == (r = n.get(o)) ? void 0 : r.vcProbability) ? a : 0)
                    );
                }),
            [p, n],
        )
        .slice(0, 5);
}
function m(e) {
    let { enabled: t } = (0, a.o)({
            autoTrackExposure: !1,
            guildId: e.guild_id,
            location: "VoiceInviteSuggestionsUtils",
        }),
        n = (0, r.e7)([h.Z], () => h.Z.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: t && n,
        dismiss: i.useCallback(() => {
            (0, p.o)(e.id);
        }, [e]),
    };
}
function g(e) {
    let [t, n] = i.useState(!1),
        [a, o] = i.useState(!1),
        s = (0, r.e7)([l.Z], () => l.Z.keyboardModeEnabled);
    i.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), o(!1);
        let i = () => n(!0),
            r = () => n(!1),
            l = () => o(!0),
            a = (e) => {
                t.contains(e.relatedTarget) || o(!1);
            };
        return (
            t.addEventListener("mouseenter", i),
            t.addEventListener("mouseleave", r),
            t.addEventListener("focusin", l),
            t.addEventListener("focusout", a),
            () => {
                t.removeEventListener("mouseenter", i),
                    t.removeEventListener("mouseleave", r),
                    t.removeEventListener("focusin", l),
                    t.removeEventListener("focusout", a);
            }
        );
    }, [e]);
    let c = s && a;
    return {
        isHovering: t,
        isFocusing: c,
        isHoveringOrFocusing: t || c,
    };
}
