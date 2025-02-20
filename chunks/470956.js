n.d(t, {
    Es: () => b,
    Eu: () => v,
    bt: () => h
}),
    n(47120),
    n(653041);
var r = n(192379),
    l = n(392711),
    i = n(442837),
    a = n(413523),
    o = n(358221),
    s = n(189786),
    c = n(314897),
    u = n(592125),
    d = n(271383),
    f = n(878884),
    p = n(19780),
    m = n(594174),
    g = n(979651),
    y = n(823379);
function b(e, t) {
    let n = (0, i.e7)([f.Z, p.Z], () => (e === p.Z.getChannelId() ? f.Z.getDesyncedVoiceStates() : null)),
        a = (0, i.Wu)([o.Z], () => (null == e ? [] : [...o.Z.getGuildRingingUsers(e)])),
        c = (0, i.Wu)([m.default], () => a.map((e) => m.default.getUser(e)).filter(y.lm)),
        g = (0, i.e7)([u.Z], () => u.Z.getBasicChannel(e)),
        b = r.useMemo(
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
                    i = new Set();
                for (let e of t) r.push(e), i.add(e.user.id);
                return (null == e ||
                    e.forEach((e) => {
                        r.splice(
                            (0, l.sortedIndexBy)(r, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e
                        );
                    }),
                n.length > 0)
                    ? [...r, ...n]
                    : r;
            })(n, t, b),
        [n, t, b]
    );
}
function h(e, t) {
    let n = (0, i.e7)([f.Z, p.Z], () => (e === p.Z.getChannelId() ? f.Z.getDesyncedParticipants() : null));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => (0, a.Yr)(e)),
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
function v(e, t) {
    let n = (0, i.e7)([c.default], () => c.default.getId() === t),
        l = (0, i.e7)([p.Z], () => p.Z.getChannelId()),
        a = r.useRef(null),
        [o, s] = r.useState(!1),
        [u, d] = r.useState(!1),
        f = (0, i.e7)([p.Z, g.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && p.Z.isUserConnected(t)),
        m = (0, i.e7)([p.Z, g.Z], () => null != t && null != e && p.Z.getChannelId() === e && null != g.Z.isInChannel(e, t) && !p.Z.isUserConnected(t));
    return (
        r.useEffect(() => {
            f && d(!0);
        }, [f]),
        r.useEffect(() => {
            l !== e && d(!1);
        }, [e, l]),
        r.useEffect(
            () => (
                m && null == a.current
                    ? (a.current = setTimeout(() => {
                          (a.current = null), s(!0);
                      }, 250))
                    : (clearTimeout(a.current), (a.current = null), s(!1)),
                () => {
                    clearTimeout(a.current), (a.current = null);
                }
            ),
            [m]
        ),
        !n && u && o
    );
}
