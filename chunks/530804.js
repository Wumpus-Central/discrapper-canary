n.d(t, { $n: () => A, uy: () => C, vp: () => p }), n(321073);
var i = n(64700),
    l = n(735438),
    a = n(17928),
    s = n(568598),
    r = n(313961),
    o = n(288737),
    d = n(495544),
    c = n(734057),
    u = n(696451),
    h = n(584569),
    _ = n(763827),
    m = n(287809),
    g = n(977997),
    f = n(403362);
function A(e, t) {
    let n = (0, a.bG)([h.A, _.A], () => (e === _.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null)),
        s = (0, a.yK)([r.A], () => (null == e ? [] : [...r.A.getGuildRingingUsers(e)])),
        d = (0, a.yK)([m.default], () => s.map((e) => m.default.getUser(e)).filter(f.Vq)),
        g = (0, a.bG)([c.A], () => c.A.getBasicChannel(e)),
        A = i.useMemo(
            () =>
                d.map((e) => ({
                    voiceState: new o.A(e.id),
                    user: e,
                    member: g?.guild_id != null ? u.Ay.getMember(g?.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [d, g?.guild_id],
        );
    return i.useMemo(
        () =>
            (function (e, t, n) {
                if ((null == e || 0 === e.length) && 0 === n.length) return t;
                let i = [],
                    a = new Set();
                for (let e of t) i.push(e), a.add(e.user.id);
                return (
                    e?.forEach((e) => {
                        i.splice(
                            (0, l.sortedIndexBy)(i, e, (e) => {
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
                                i.splice(
                                    (0, l.sortedIndexBy)(i, e, (e) => {
                                        let { comparator: t } = e;
                                        return t;
                                    }),
                                    0,
                                    e,
                                );
                        }),
                    i
                );
            })(n, t, A),
        [n, t, A],
    );
}
function p(e, t) {
    let n = (0, a.bG)([h.A, _.A], () => (e === _.A.getChannelId() ? h.A.getDesyncedParticipants() : null));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => (0, s.KU)(e)),
                            0,
                            e,
                        );
                    }),
                    n
                );
            })(n, t),
        [n, t],
    );
}
function C(e, t) {
    let n = (0, a.bG)([d.default], () => d.default.getId() === t),
        l = (0, a.bG)([_.A], () => _.A.getChannelId()),
        s = i.useRef(null),
        [r, o] = i.useState(!1),
        [c, u] = i.useState(!1),
        h = (0, a.bG)(
            [_.A, g.A],
            () =>
                null != t &&
                null != e &&
                _.A.getChannelId() === e &&
                null != g.A.isInChannel(e, t) &&
                _.A.isUserConnected(t),
        ),
        m = (0, a.bG)(
            [_.A, g.A],
            () =>
                null != t &&
                null != e &&
                _.A.getChannelId() === e &&
                null != g.A.isInChannel(e, t) &&
                !_.A.isUserConnected(t),
        );
    return (
        i.useEffect(() => {
            h && u(!0);
        }, [h]),
        i.useEffect(() => {
            l !== e && u(!1);
        }, [e, l]),
        i.useEffect(
            () => (
                m && null == s.current
                    ? (s.current = setTimeout(() => {
                          (s.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(s.current), (s.current = null), o(!1)),
                () => {
                    clearTimeout(s.current), (s.current = null);
                }
            ),
            [m],
        ),
        !n && c && r
    );
}
