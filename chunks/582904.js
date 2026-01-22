n.d(t, {
    L7: () => g,
    Z0: () => b,
    kt: () => h,
}),
    n(896048),
    n(638769),
    n(839272);
var r = n(64700),
    l = n(311907),
    i = n(775602),
    a = n(400634),
    s = n(21119),
    o = n(696451),
    c = n(287809),
    u = n(607567),
    d = n(403362),
    f = n(605431),
    p = n(366251);

function h(e) {
    let { channel: t } = e,
        n = (0, l.bG)([s.A], () => s.A.getUserAffinitiesMap(), []),
        i = null == t ? void 0 : t.guild_id,
        a = new Set(
            (0, l.bG)([u.Ay], () => (null == t ? [] : u.Ay.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        f = (0, l.yK)(
            [o.Ay, c.default],
            () =>
                o.Ay.getMembers(i)
                    .map((e) => c.default.getUser(e.userId))
                    .filter(d.Vq)
                    .filter((e) => !a.has(e.id)),
            [i, a],
        );
    return r
        .useMemo(
            () =>
                f.toSorted((e, t) => {
                    var r, l, i, a;
                    let { id: s } = e,
                        { id: o } = t;
                    return (
                        (null != (r = null == (i = n.get(o)) ? void 0 : i.vcProbability) ? r : 0) -
                        (null != (l = null == (a = n.get(s)) ? void 0 : a.vcProbability) ? l : 0)
                    );
                }),
            [f, n],
        )
        .slice(0, 5);
}

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { enabled: n } = (0, a.B)({
            autoTrackExposure: !1,
            guildId: e.guild_id,
            location: "VoiceInviteSuggestionsUtils",
        }),
        { collapsed: i = !1 } = t,
        s = (0, l.bG)([p.A], () => p.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: n && s && !i,
        dismiss: r.useCallback(() => {
            (0, f.w)(e.id);
        }, [e]),
    };
}

function g(e) {
    let [t, n] = r.useState(!1),
        [a, s] = r.useState(!1),
        o = (0, l.bG)([i.A], () => i.A.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), s(!1);
        let r = () => n(!0),
            l = () => n(!1),
            i = () => s(!0),
            a = (e) => {
                t.contains(e.relatedTarget) || s(!1);
            };
        return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", l),
            t.addEventListener("focusin", i),
            t.addEventListener("focusout", a),
            () => {
                t.removeEventListener("mouseenter", r),
                    t.removeEventListener("mouseleave", l),
                    t.removeEventListener("focusin", i),
                    t.removeEventListener("focusout", a);
            }
        );
    }, [e]);
    let c = o && a;
    return {
        isHovering: t,
        isFocusing: c,
        isHoveringOrFocusing: t || c,
    };
}
