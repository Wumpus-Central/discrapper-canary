n.d(t, {
    Es: function () {
        return v;
    },
    Eu: function () {
        return I;
    },
    bt: function () {
        return S;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    l = n(392711),
    r = n(442837),
    a = n(413523),
    s = n(358221),
    o = n(189786),
    c = n(314897),
    u = n(592125),
    d = n(271383),
    m = n(878884),
    f = n(19780),
    p = n(594174),
    h = n(979651),
    g = n(823379);
function v(e, t) {
    let n = (0, r.e7)([m.Z, f.Z], () => (e === f.Z.getChannelId() ? m.Z.getDesyncedVoiceStates() : null)),
        a = (0, r.Wu)([s.Z], () => [...s.Z.getGuildRingingUsers(e)]),
        c = (0, r.Wu)([p.default], () => a.map((e) => p.default.getUser(e)).filter(g.lm)),
        h = (0, r.e7)([u.Z], () => u.Z.getBasicChannel(e)),
        v = i.useMemo(
            () =>
                c.map((e) => ({
                    voiceState: new o.Z(e.id),
                    user: e,
                    member: (null == h ? void 0 : h.guild_id) != null ? d.ZP.getMember(null == h ? void 0 : h.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1
                })),
            [c, null == h ? void 0 : h.guild_id]
        );
    return i.useMemo(
        () =>
            (function (e, t, n) {
                if ((null == e || 0 === e.length) && 0 === n.length) return t;
                let i = [],
                    r = new Set();
                for (let e of t) i.push(e), r.add(e.user.id);
                return (null == e ||
                    e.forEach((e) => {
                        i.splice(
                            (0, l.sortedIndexBy)(i, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e
                        );
                    }),
                n.length > 0)
                    ? [...i, ...n]
                    : i;
            })(n, t, v),
        [n, t, v]
    );
}
function S(e, t) {
    var n;
    let s = ((n = e), (0, r.e7)([m.Z, f.Z], () => (n === f.Z.getChannelId() ? m.Z.getDesyncedParticipants() : null)));
    return i.useMemo(
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
            })(s, t),
        [s, t]
    );
}
function I(e, t) {
    let n = (0, r.e7)([c.default], () => c.default.getId() === t),
        l = (0, r.e7)([f.Z], () => f.Z.getChannelId()),
        a = i.useRef(null),
        [s, o] = i.useState(!1),
        [u, d] = i.useState(!1),
        m = (0, r.e7)([f.Z, h.Z], () => null != t && null != e && f.Z.getChannelId() === e && null != h.Z.isInChannel(e, t) && f.Z.isUserConnected(t)),
        p = (0, r.e7)([f.Z, h.Z], () => null != t && null != e && f.Z.getChannelId() === e && null != h.Z.isInChannel(e, t) && !f.Z.isUserConnected(t));
    return (
        i.useEffect(() => {
            m && d(!0);
        }, [m]),
        i.useEffect(() => {
            l !== e && d(!1);
        }, [e, l]),
        i.useEffect(
            () => (
                p && null == a.current
                    ? (a.current = setTimeout(() => {
                          (a.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(a.current), (a.current = null), o(!1)),
                () => {
                    clearTimeout(a.current), (a.current = null);
                }
            ),
            [p]
        ),
        !n && u && s
    );
}
