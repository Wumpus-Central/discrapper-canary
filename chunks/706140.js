n.d(t, {
    EM: () => h,
    Tt: () => m,
    cv: () => _
});
var r = n(192379),
    i = n(442837),
    o = n(581883),
    a = n(914010),
    s = n(915486),
    l = n(68985),
    c = n(211644),
    u = n(605236),
    d = n(57207),
    f = n(526761);
function p(e, t, n, o, a) {
    let s = (0, c.ZP)((t) => null != e && t.currentlyShown.has(e)),
        d = (0, i.e7)([l.Z], () => null != e && l.Z.hasUserHitDCCap(e));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    (0, u.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: a
                        },
                        o
                    ),
                    () => {
                        if (null == e) return;
                        let t = !l.Z.hasUserHitDCCap();
                        (0, c.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, d, o, a]),
        s && null != e ? e : null
    );
}
function _(e, t, n) {
    let l = (0, i.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }),
        c = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
        _ = (0, d.i)(e),
        h = null;
    return (
        o.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (h = _.find((e) => null == l || !(0, s.jl)(l, e))) : null != l && (h = _.find((e) => !(0, s.jl)(l, e))),
        [
            p(h, c, t, n),
            r.useCallback(
                (e, n) => {
                    null != h &&
                        (0, u.EW)(h, {
                            dismissAction: e,
                            groupName: t,
                            guildId: c,
                            forceTrack: n
                        });
                },
                [h, t, c]
            )
        ]
    );
}
function h(e, t, n, s) {
    let l = (0, i.e7)([o.Z], () => {
            var t, n, r;
            return null !== e ? (null === (r = o.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        c = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
        _ = null;
    if (null != e) {
        let n = !(0, d.B)(e);
        o.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (_ = n && (null == l || l < t) ? e : null) : null != l && (_ = n && l < t ? e : null);
    }
    return [
        p(_, c, n, s, t),
        r.useCallback(
            (e, r) => {
                null != _ &&
                    (0, u.wH)(_, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: c,
                        forceTrack: r,
                        version: t
                    });
            },
            [_, n, c, t]
        )
    ];
}
function m(e, t, n, s) {
    let l = (0, i.e7)([o.Z], () => {
            var t, n, r;
            return null !== e ? (null === (r = o.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.lastDismissedAtMs) : void 0;
        }),
        c = null != l ? (Number.isNaN(Number(l)) ? void 0 : Number(l)) : void 0,
        _ = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
        h = null;
    if (null != e) {
        let n = !(0, d.B)(e),
            r = void 0 === c ? 0 : c + t.cooldownDurationMs,
            i = Date.now(),
            a = null == t.showAfterTimestamp || (i >= t.showAfterTimestamp && (null != c ? c : 0) <= t.showAfterTimestamp);
        o.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (h = n && a && (null == c || i >= r) ? e : null) : null != c && (h = n && a && i >= r ? e : null);
    }
    return [
        p(h, _, n, s),
        r.useCallback(
            (e, t) => {
                null != h &&
                    (0, u.Ow)(h, {
                        dismissAction: e,
                        groupName: n,
                        guildId: _,
                        forceTrack: t
                    });
            },
            [h, n, _]
        )
    ];
}
