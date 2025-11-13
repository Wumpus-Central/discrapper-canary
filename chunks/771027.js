n.d(t, {
    Lb: () => f,
    Tu: () => m,
    j1: () => h,
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
    c = n(19780),
    u = n(594174),
    d = n(938475),
    p = n(823379);
function h(e) {
    let { channel: t } = e,
        n = (0, r.e7)([o.Z], () => o.Z.getUserAffinitiesMap(), []),
        l = null == t ? void 0 : t.guild_id,
        a = new Set(
            (0, r.e7)([d.ZP], () => (null == t ? [] : d.ZP.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        c = (0, r.e7)(
            [s.ZP, u.default],
            () =>
                s.ZP.getMembers(l)
                    .map((e) => u.default.getUser(e.userId))
                    .filter(p.lm)
                    .filter((e) => !a.has(e.id)),
            [l, a],
        );
    return i
        .useMemo(
            () =>
                c.toSorted((e, t) => {
                    var i, r, l, a;
                    let { id: o } = e,
                        { id: s } = t;
                    return (
                        (null != (l = null == (i = n.get(s)) ? void 0 : i.vcProbability) ? l : 0) -
                        (null != (a = null == (r = n.get(o)) ? void 0 : r.vcProbability) ? a : 0)
                    );
                }),
            [c, n],
        )
        .slice(0, 5);
}
function f(e) {
    let [t, n] = i.useState(!1),
        { enabled: l } = (0, a.o)({
            autoTrackExposure: !1,
            guildId: e.guild_id,
            location: "VoiceUsers",
        }),
        o = (0, r.e7)([c.Z], () => {
            let t = c.Z.getChannelId();
            return c.Z.isConnected() && t === e.id;
        }, [e.id]),
        s = i.useCallback(() => {
            n(!0);
        }, []);
    return (
        i.useEffect(() => {
            o || n(!1);
        }, [o]),
        {
            shouldShow: l && o && !t,
            dismiss: s,
        }
    );
}
function m(e) {
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
