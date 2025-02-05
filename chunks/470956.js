n.d(t, {
    Es: () => g,
    Eu: () => Z,
    bt: () => E
}),
    n(47120),
    n(653041);
var l = n(192379),
    i = n(392711),
    r = n(442837),
    a = n(413523),
    s = n(358221),
    o = n(189786),
    u = n(314897),
    c = n(592125),
    d = n(271383),
    m = n(878884),
    f = n(19780),
    h = n(594174),
    p = n(979651),
    v = n(823379);
function g(e, t) {
    let n = (0, r.e7)([m.Z, f.Z], () => (e === f.Z.getChannelId() ? m.Z.getDesyncedVoiceStates() : null)),
        a = (0, r.Wu)([s.Z], () => [...s.Z.getGuildRingingUsers(e)]),
        u = (0, r.Wu)([h.default], () => a.map((e) => h.default.getUser(e)).filter(v.lm)),
        p = (0, r.e7)([c.Z], () => c.Z.getBasicChannel(e)),
        g = l.useMemo(
            () =>
                u.map((e) => ({
                    voiceState: new o.Z(e.id),
                    user: e,
                    member: (null == p ? void 0 : p.guild_id) != null ? d.ZP.getMember(null == p ? void 0 : p.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1
                })),
            [u, null == p ? void 0 : p.guild_id]
        );
    return l.useMemo(
        () =>
            (function (e, t, n) {
                if ((null == e || 0 === e.length) && 0 === n.length) return t;
                let l = [],
                    r = new Set();
                for (let e of t) l.push(e), r.add(e.user.id);
                return (null == e ||
                    e.forEach((e) => {
                        l.splice(
                            (0, i.sortedIndexBy)(l, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e
                        );
                    }),
                n.length > 0)
                    ? [...l, ...n]
                    : l;
            })(n, t, g),
        [n, t, g]
    );
}
function E(e, t) {
    let n = (0, r.e7)([m.Z, f.Z], () => (e === f.Z.getChannelId() ? m.Z.getDesyncedParticipants() : null));
    return l.useMemo(
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
function Z(e, t) {
    let n = (0, r.e7)([u.default], () => u.default.getId() === t),
        i = (0, r.e7)([f.Z], () => f.Z.getChannelId()),
        a = l.useRef(null),
        [s, o] = l.useState(!1),
        [c, d] = l.useState(!1),
        m = (0, r.e7)([f.Z, p.Z], () => null != t && null != e && f.Z.getChannelId() === e && null != p.Z.isInChannel(e, t) && f.Z.isUserConnected(t)),
        h = (0, r.e7)([f.Z, p.Z], () => null != t && null != e && f.Z.getChannelId() === e && null != p.Z.isInChannel(e, t) && !f.Z.isUserConnected(t));
    return (
        l.useEffect(() => {
            m && d(!0);
        }, [m]),
        l.useEffect(() => {
            i !== e && d(!1);
        }, [e, i]),
        l.useEffect(
            () => (
                h && null == a.current
                    ? (a.current = setTimeout(() => {
                          (a.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(a.current), (a.current = null), o(!1)),
                () => {
                    clearTimeout(a.current), (a.current = null);
                }
            ),
            [h]
        ),
        !n && c && s
    );
}
