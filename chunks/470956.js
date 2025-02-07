n.d(t, {
    Es: () => v,
    Eu: () => I,
    bt: () => S
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
    h = n(19780),
    g = n(594174),
    f = n(979651),
    p = n(823379);
function v(e, t) {
    let n = (0, r.e7)([m.Z, h.Z], () => (e === h.Z.getChannelId() ? m.Z.getDesyncedVoiceStates() : null)),
        a = (0, r.Wu)([s.Z], () => (null == e ? [] : [...s.Z.getGuildRingingUsers(e)])),
        u = (0, r.Wu)([g.default], () => a.map((e) => g.default.getUser(e)).filter(p.lm)),
        f = (0, r.e7)([c.Z], () => c.Z.getBasicChannel(e)),
        v = l.useMemo(
            () =>
                u.map((e) => ({
                    voiceState: new o.Z(e.id),
                    user: e,
                    member: (null == f ? void 0 : f.guild_id) != null ? d.ZP.getMember(null == f ? void 0 : f.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1
                })),
            [u, null == f ? void 0 : f.guild_id]
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
            })(n, t, v),
        [n, t, v]
    );
}
function S(e, t) {
    let n = (0, r.e7)([m.Z, h.Z], () => (e === h.Z.getChannelId() ? m.Z.getDesyncedParticipants() : null));
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
function I(e, t) {
    let n = (0, r.e7)([u.default], () => u.default.getId() === t),
        i = (0, r.e7)([h.Z], () => h.Z.getChannelId()),
        a = l.useRef(null),
        [s, o] = l.useState(!1),
        [c, d] = l.useState(!1),
        m = (0, r.e7)([h.Z, f.Z], () => null != t && null != e && h.Z.getChannelId() === e && null != f.Z.isInChannel(e, t) && h.Z.isUserConnected(t)),
        g = (0, r.e7)([h.Z, f.Z], () => null != t && null != e && h.Z.getChannelId() === e && null != f.Z.isInChannel(e, t) && !h.Z.isUserConnected(t));
    return (
        l.useEffect(() => {
            m && d(!0);
        }, [m]),
        l.useEffect(() => {
            i !== e && d(!1);
        }, [e, i]),
        l.useEffect(
            () => (
                g && null == a.current
                    ? (a.current = setTimeout(() => {
                          (a.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(a.current), (a.current = null), o(!1)),
                () => {
                    clearTimeout(a.current), (a.current = null);
                }
            ),
            [g]
        ),
        !n && c && s
    );
}
