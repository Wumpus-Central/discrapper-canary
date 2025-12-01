n.d(t, {
    Es: () => E,
    Eu: () => v,
    bt: () => O,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(392711),
    a = n(442837),
    o = n(413523),
    s = n(358221),
    l = n(189786),
    c = n(314897),
    u = n(592125),
    d = n(271383),
    f = n(878884),
    p = n(19780),
    _ = n(594174),
    m = n(979651),
    h = n(823379);
function g(e, t, n) {
    if ((null == e || 0 === e.length) && 0 === n.length) return t;
    let r = [],
        a = new Set();
    for (let e of t) r.push(e), a.add(e.user.id);
    return (
        null == e ||
            e.forEach((e) => {
                r.splice(
                    (0, i.sortedIndexBy)(r, e, (e) => {
                        let { comparator: t } = e;
                        return t;
                    }),
                    0,
                    e,
                );
            }),
        n.length > 0 &&
            n.forEach((e) => {
                a.has(e.user.id) ||
                    r.splice(
                        (0, i.sortedIndexBy)(r, e, (e) => {
                            let { comparator: t } = e;
                            return t;
                        }),
                        0,
                        e,
                    );
            }),
        r
    );
}
function E(e, t) {
    let n = (0, a.e7)([f.Z, p.Z], () => (e === p.Z.getChannelId() ? f.Z.getDesyncedVoiceStates() : null)),
        i = (0, a.Wu)([s.Z], () => (null == e ? [] : [...s.Z.getGuildRingingUsers(e)])),
        o = (0, a.Wu)([_.default], () => i.map((e) => _.default.getUser(e)).filter(h.lm)),
        c = (0, a.e7)([u.Z], () => u.Z.getBasicChannel(e)),
        m = r.useMemo(
            () =>
                o.map((e) => ({
                    voiceState: new l.Z(e.id),
                    user: e,
                    member:
                        (null == c ? void 0 : c.guild_id) != null
                            ? d.ZP.getMember(null == c ? void 0 : c.guild_id, e.id)
                            : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [o, null == c ? void 0 : c.guild_id],
        );
    return r.useMemo(() => g(n, t, m), [n, t, m]);
}
function b(e, t) {
    if (null == e || 0 === e.length) return t;
    let n = [...t];
    return (
        e.forEach((e) => {
            n.splice(
                (0, i.sortedIndexBy)(n, e, (e) => (0, o.Yr)(e)),
                0,
                e,
            );
        }),
        n
    );
}
function y(e) {
    return (0, a.e7)([f.Z, p.Z], () => (e === p.Z.getChannelId() ? f.Z.getDesyncedParticipants() : null));
}
function O(e, t) {
    let n = y(e);
    return r.useMemo(() => b(n, t), [n, t]);
}
function v(e, t) {
    let n = (0, a.e7)([c.default], () => c.default.getId() === t),
        i = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        o = r.useRef(null),
        [s, l] = r.useState(!1),
        [u, d] = r.useState(!1),
        f = (0, a.e7)(
            [p.Z, m.Z],
            () =>
                null != t &&
                null != e &&
                p.Z.getChannelId() === e &&
                null != m.Z.isInChannel(e, t) &&
                p.Z.isUserConnected(t),
        ),
        _ = (0, a.e7)(
            [p.Z, m.Z],
            () =>
                null != t &&
                null != e &&
                p.Z.getChannelId() === e &&
                null != m.Z.isInChannel(e, t) &&
                !p.Z.isUserConnected(t),
        );
    return (
        r.useEffect(() => {
            f && d(!0);
        }, [f]),
        r.useEffect(() => {
            i !== e && d(!1);
        }, [e, i]),
        r.useEffect(
            () => (
                _ && null == o.current
                    ? (o.current = setTimeout(() => {
                          (o.current = null), l(!0);
                      }, 250))
                    : (clearTimeout(o.current), (o.current = null), l(!1)),
                () => {
                    clearTimeout(o.current), (o.current = null);
                }
            ),
            [_],
        ),
        !n && u && s
    );
}
