i.d(t, { $n: () => f, uy: () => S, vp: () => p }), i(321073);
var n = i(64700),
    a = i(735438),
    l = i(311907),
    r = i(568598),
    s = i(313961),
    o = i(288737),
    d = i(961350),
    c = i(734057),
    u = i(696451),
    m = i(584569),
    _ = i(383501),
    A = i(287809),
    g = i(977997),
    h = i(403362);
function f(e, t) {
    let i = (0, l.bG)([m.A, _.A], () => (e === _.A.getChannelId() ? m.A.getDesyncedVoiceStates() : null)),
        r = (0, l.yK)([s.A], () => (null == e ? [] : [...s.A.getGuildRingingUsers(e)])),
        d = (0, l.yK)([A.default], () => r.map((e) => A.default.getUser(e)).filter(h.Vq)),
        g = (0, l.bG)([c.A], () => c.A.getBasicChannel(e)),
        f = n.useMemo(
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
    return n.useMemo(
        () =>
            (function (e, t, i) {
                if ((null == e || 0 === e.length) && 0 === i.length) return t;
                let n = [],
                    l = new Set();
                for (let e of t) n.push(e), l.add(e.user.id);
                return (
                    e?.forEach((e) => {
                        n.splice(
                            (0, a.sortedIndexBy)(n, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e,
                        );
                    }),
                    i.length > 0 &&
                        i.forEach((e) => {
                            l.has(e.user.id) ||
                                n.splice(
                                    (0, a.sortedIndexBy)(n, e, (e) => {
                                        let { comparator: t } = e;
                                        return t;
                                    }),
                                    0,
                                    e,
                                );
                        }),
                    n
                );
            })(i, t, f),
        [i, t, f],
    );
}
function p(e, t) {
    let i = (0, l.bG)([m.A, _.A], () => (e === _.A.getChannelId() ? m.A.getDesyncedParticipants() : null));
    return n.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let i = [...t];
                return (
                    e.forEach((e) => {
                        i.splice(
                            (0, a.sortedIndexBy)(i, e, (e) => (0, r.KU)(e)),
                            0,
                            e,
                        );
                    }),
                    i
                );
            })(i, t),
        [i, t],
    );
}
function S(e, t) {
    let i = (0, l.bG)([d.default], () => d.default.getId() === t),
        a = (0, l.bG)([_.A], () => _.A.getChannelId()),
        r = n.useRef(null),
        [s, o] = n.useState(!1),
        [c, u] = n.useState(!1),
        m = (0, l.bG)(
            [_.A, g.A],
            () =>
                null != t &&
                null != e &&
                _.A.getChannelId() === e &&
                null != g.A.isInChannel(e, t) &&
                _.A.isUserConnected(t),
        ),
        A = (0, l.bG)(
            [_.A, g.A],
            () =>
                null != t &&
                null != e &&
                _.A.getChannelId() === e &&
                null != g.A.isInChannel(e, t) &&
                !_.A.isUserConnected(t),
        );
    return (
        n.useEffect(() => {
            m && u(!0);
        }, [m]),
        n.useEffect(() => {
            a !== e && u(!1);
        }, [e, a]),
        n.useEffect(
            () => (
                A && null == r.current
                    ? (r.current = setTimeout(() => {
                          (r.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(r.current), (r.current = null), o(!1)),
                () => {
                    clearTimeout(r.current), (r.current = null);
                }
            ),
            [A],
        ),
        !i && c && s
    );
}
