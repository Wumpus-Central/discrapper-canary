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
    _ = n(19780),
    p = n(594174),
    h = n(979651),
    m = n(823379);
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
    let n = (0, a.e7)([f.Z, _.Z], () => (e === _.Z.getChannelId() ? f.Z.getDesyncedVoiceStates() : null)),
        i = (0, a.Wu)([s.Z], () => (null == e ? [] : [...s.Z.getGuildRingingUsers(e)])),
        o = (0, a.Wu)([p.default], () => i.map((e) => p.default.getUser(e)).filter(m.lm)),
        c = (0, a.e7)([u.Z], () => u.Z.getBasicChannel(e)),
        h = r.useMemo(
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
    return r.useMemo(() => g(n, t, h), [n, t, h]);
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
    return (0, a.e7)([f.Z, _.Z], () => (e === _.Z.getChannelId() ? f.Z.getDesyncedParticipants() : null));
}
function O(e, t) {
    let n = y(e);
    return r.useMemo(() => b(n, t), [n, t]);
}
function v(e, t) {
    let n = (0, a.e7)([c.default], () => c.default.getId() === t),
        i = (0, a.e7)([_.Z], () => _.Z.getChannelId()),
        o = r.useRef(null),
        [s, l] = r.useState(!1),
        [u, d] = r.useState(!1),
        f = (0, a.e7)(
            [_.Z, h.Z],
            () =>
                null != t &&
                null != e &&
                _.Z.getChannelId() === e &&
                null != h.Z.isInChannel(e, t) &&
                _.Z.isUserConnected(t),
        ),
        p = (0, a.e7)(
            [_.Z, h.Z],
            () =>
                null != t &&
                null != e &&
                _.Z.getChannelId() === e &&
                null != h.Z.isInChannel(e, t) &&
                !_.Z.isUserConnected(t),
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
                p && null == o.current
                    ? (o.current = setTimeout(() => {
                          (o.current = null), l(!0);
                      }, 250))
                    : (clearTimeout(o.current), (o.current = null), l(!1)),
                () => {
                    clearTimeout(o.current), (o.current = null);
                }
            ),
            [p],
        ),
        !n && u && s
    );
}
