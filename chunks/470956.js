n.d(t, {
    Es: () => O,
    Eu: () => h,
    bt: () => y
}),
    n(47120),
    n(653041);
var r = n(192379),
    l = n(392711),
    i = n(442837),
    o = n(413523),
    a = n(358221),
    s = n(189786),
    c = n(314897),
    u = n(592125),
    d = n(271383),
    p = n(878884),
    f = n(19780),
    m = n(594174),
    g = n(979651),
    b = n(823379);
function O(e, t) {
    let n = (0, i.e7)([p.Z, f.ZP], () => (e === f.ZP.getChannelId() ? p.Z.getDesyncedVoiceStates() : null)),
        o = (0, i.Wu)([a.Z], () => (null == e ? [] : [...a.Z.getGuildRingingUsers(e)])),
        c = (0, i.Wu)([m.default], () => o.map((e) => m.default.getUser(e)).filter(b.lm)),
        g = (0, i.e7)([u.Z], () => u.Z.getBasicChannel(e)),
        O = r.useMemo(
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
            })(n, t, O),
        [n, t, O]
    );
}
function y(e, t) {
    let n = (0, i.e7)([p.Z, f.ZP], () => (e === f.ZP.getChannelId() ? p.Z.getDesyncedParticipants() : null));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => (0, o.Yr)(e)),
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
    let n = (0, i.e7)([c.default], () => c.default.getId() === t),
        l = (0, i.e7)([f.ZP], () => f.ZP.getChannelId()),
        o = r.useRef(null),
        [a, s] = r.useState(!1),
        [u, d] = r.useState(!1),
        p = (0, i.e7)([f.ZP, g.Z], () => null != t && null != e && f.ZP.getChannelId() === e && null != g.Z.isInChannel(e, t) && f.ZP.isUserConnected(t)),
        m = (0, i.e7)([f.ZP, g.Z], () => null != t && null != e && f.ZP.getChannelId() === e && null != g.Z.isInChannel(e, t) && !f.ZP.isUserConnected(t));
    return (
        r.useEffect(() => {
            p && d(!0);
        }, [p]),
        r.useEffect(() => {
            l !== e && d(!1);
        }, [e, l]),
        r.useEffect(
            () => (
                m && null == o.current
                    ? (o.current = setTimeout(() => {
                          (o.current = null), s(!0);
                      }, 250))
                    : (clearTimeout(o.current), (o.current = null), s(!1)),
                () => {
                    clearTimeout(o.current), (o.current = null);
                }
            ),
            [m]
        ),
        !n && u && a
    );
}
