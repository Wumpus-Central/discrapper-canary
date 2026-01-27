n.d(t, {
    L7: () => g,
    Z0: () => f,
    kt: () => h,
}),
    n(896048),
    n(638769),
    n(839272);
var r = n(64700),
    l = n(311907),
    i = n(775602),
    s = n(21119),
    a = n(696451),
    o = n(287809),
    c = n(607567),
    u = n(403362),
    d = n(605431),
    p = n(366251);

function h(e) {
    let { channel: t } = e,
        n = (0, l.bG)([s.A], () => s.A.getUserAffinitiesMap(), []),
        i = null == t ? void 0 : t.guild_id,
        d = new Set(
            (0, l.bG)([c.Ay], () => (null == t ? [] : c.Ay.getVoiceStatesForChannel(t).map((e) => e.user.id)), [t]),
        ),
        p = (0, l.yK)(
            [a.Ay, o.default],
            () =>
                a.Ay.getMembers(i)
                    .map((e) => o.default.getUser(e.userId))
                    .filter(u.Vq)
                    .filter((e) => !d.has(e.id)),
            [i, d],
        );
    return r
        .useMemo(
            () =>
                p.toSorted((e, t) => {
                    var r, l, i, s;
                    let { id: a } = e,
                        { id: o } = t;
                    return (
                        (null != (r = null == (i = n.get(o)) ? void 0 : i.vcProbability) ? r : 0) -
                        (null != (l = null == (s = n.get(a)) ? void 0 : s.vcProbability) ? l : 0)
                    );
                }),
            [p, n],
        )
        .slice(0, 5);
}

function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { collapsed: n = !1 } = t,
        i = (0, l.bG)([p.A], () => p.A.getShouldShowPopover(e.id), [e.id]);
    return {
        shouldShow: i && !n,
        dismiss: r.useCallback(() => {
            (0, d.w)(e.id);
        }, [e]),
    };
}

function g(e) {
    let [t, n] = r.useState(!1),
        [s, a] = r.useState(!1),
        o = (0, l.bG)([i.A], () => i.A.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), a(!1);
        let r = () => n(!0),
            l = () => n(!1),
            i = () => a(!0),
            s = (e) => {
                t.contains(e.relatedTarget) || a(!1);
            };
        return (
            t.addEventListener("mouseenter", r),
            t.addEventListener("mouseleave", l),
            t.addEventListener("focusin", i),
            t.addEventListener("focusout", s),
            () => {
                t.removeEventListener("mouseenter", r),
                    t.removeEventListener("mouseleave", l),
                    t.removeEventListener("focusin", i),
                    t.removeEventListener("focusout", s);
            }
        );
    }, [e]);
    let c = o && s;
    return {
        isHovering: t,
        isFocusing: c,
        isHoveringOrFocusing: t || c,
    };
}
