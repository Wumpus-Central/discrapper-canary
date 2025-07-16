(n.d(t, {
    Es: () => v,
    Eu: () => h,
    bt: () => b
}),
    n(388685),
    n(539854));
var r = n(73800),
    i = n(392711),
    l = n(442837),
    a = n(413523),
    o = n(358221),
    s = n(189786),
    c = n(314897),
    u = n(592125),
    d = n(271383),
    p = n(878884),
    f = n(19780),
    m = n(594174),
    g = n(979651),
    _ = n(823379);
function v(e, t) {
    let n = (0, l.e7)([p.Z, f.Z], () => (e === f.Z.getChannelId() ? p.Z.getDesyncedVoiceStates() : null)),
        a = (0, l.Wu)([o.Z], () => (null == e ? [] : [...o.Z.getGuildRingingUsers(e)])),
        c = (0, l.Wu)([m.default], () => a.map((e) => m.default.getUser(e)).filter(_.lm)),
        g = (0, l.e7)([u.Z], () => u.Z.getBasicChannel(e)),
        v = r.useMemo(
            () =>
                c.map((e) => ({
                    voiceState: new s.Z(e.id),
                    user: e,
                    member: (null == g ? void 0 : g.guild_id) != null ? d.ZP.getMember(null == g ? void 0 : g.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1
                })),
            [c, null == g ? void 0 : g.guild_id]
        );
    return r.useMemo(
        () =>
            (function (e, t, n) {
                if ((null == e || 0 === e.length) && 0 === n.length) return t;
                let r = [],
                    l = new Set();
                for (let e of t) (r.push(e), l.add(e.user.id));
                return (
                    null == e ||
                        e.forEach((e) => {
                            r.splice(
                                (0, i.sortedIndexBy)(r, e, (e) => {
                                    let { comparator: t } = e;
                                    return t;
                                }),
                                0,
                                e
                            );
                        }),
                    n.length > 0 &&
                        n.forEach((e) => {
                            l.has(e.user.id) ||
                                r.splice(
                                    (0, i.sortedIndexBy)(r, e, (e) => {
                                        let { comparator: t } = e;
                                        return t;
                                    }),
                                    0,
                                    e
                                );
                        }),
                    r
                );
            })(n, t, v),
        [n, t, v]
    );
}
function b(e, t) {
    let n = (0, l.e7)([p.Z, f.Z], () => (e === f.Z.getChannelId() ? p.Z.getDesyncedParticipants() : null));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, i.sortedIndexBy)(n, e, (e) => (0, a.Yr)(e)),
                            0,
                            e
                        );
                    }),
                    n
                );
            })(n, t),
        [n, t]
    );
}
function h(e, t) {
    let n = (0, l.e7)([c.default], () => c.default.getId() === t),
        i = (0, l.e7)([f.Z], () => f.Z.getChannelId()),
        a = r.useRef(null),
        [o, s] = r.useState(!1),
        [u, d] = r.useState(!1),
        p = (0, l.e7)([f.Z, g.Z], () => null != t && null != e && f.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && f.Z.isUserConnected(t)),
        m = (0, l.e7)([f.Z, g.Z], () => null != t && null != e && f.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && !f.Z.isUserConnected(t));
    return (
        r.useEffect(() => {
            p && d(!0);
        }, [p]),
        r.useEffect(() => {
            i !== e && d(!1);
        }, [e, i]),
        r.useEffect(
            () => (
                m && null == a.current
                    ? (a.current = setTimeout(() => {
                          ((a.current = null), s(!0));
                      }, 250))
                    : (clearTimeout(a.current), (a.current = null), s(!1)),
                () => {
                    (clearTimeout(a.current), (a.current = null));
                }
            ),
            [m]
        ),
        !n && u && o
    );
}
