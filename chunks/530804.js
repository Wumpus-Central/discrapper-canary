i.d(t, { $n: () => f, uy: () => S, vp: () => T }), i(321073);
var n = i(64700),
    l = i(735438),
    r = i(311907),
    s = i(568598),
    a = i(313961),
    o = i(288737),
    d = i(961350),
    u = i(734057),
    c = i(696451),
    A = i(584569),
    m = i(383501),
    p = i(287809),
    h = i(977997),
    g = i(403362);
function f(e, t) {
    let i = (0, r.bG)([A.A, m.A], () => (e === m.A.getChannelId() ? A.A.getDesyncedVoiceStates() : null)),
        s = (0, r.yK)([a.A], () => (null == e ? [] : [...a.A.getGuildRingingUsers(e)])),
        d = (0, r.yK)([p.default], () => s.map((e) => p.default.getUser(e)).filter(g.Vq)),
        h = (0, r.bG)([u.A], () => u.A.getBasicChannel(e)),
        f = n.useMemo(
            () =>
                d.map((e) => ({
                    voiceState: new o.A(e.id),
                    user: e,
                    member: h?.guild_id != null ? c.Ay.getMember(h?.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [d, h?.guild_id],
        );
    return n.useMemo(
        () =>
            (function (e, t, i) {
                if ((null == e || 0 === e.length) && 0 === i.length) return t;
                let n = [],
                    r = new Set();
                for (let e of t) n.push(e), r.add(e.user.id);
                return (
                    e?.forEach((e) => {
                        n.splice(
                            (0, l.sortedIndexBy)(n, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e,
                        );
                    }),
                    i.length > 0 &&
                        i.forEach((e) => {
                            r.has(e.user.id) ||
                                n.splice(
                                    (0, l.sortedIndexBy)(n, e, (e) => {
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
function T(e, t) {
    let i = (0, r.bG)([A.A, m.A], () => (e === m.A.getChannelId() ? A.A.getDesyncedParticipants() : null));
    return n.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let i = [...t];
                return (
                    e.forEach((e) => {
                        i.splice(
                            (0, l.sortedIndexBy)(i, e, (e) => (0, s.KU)(e)),
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
    let i = (0, r.bG)([d.default], () => d.default.getId() === t),
        l = (0, r.bG)([m.A], () => m.A.getChannelId()),
        s = n.useRef(null),
        [a, o] = n.useState(!1),
        [u, c] = n.useState(!1),
        A = (0, r.bG)(
            [m.A, h.A],
            () =>
                null != t &&
                null != e &&
                m.A.getChannelId() === e &&
                null != h.A.isInChannel(e, t) &&
                m.A.isUserConnected(t),
        ),
        p = (0, r.bG)(
            [m.A, h.A],
            () =>
                null != t &&
                null != e &&
                m.A.getChannelId() === e &&
                null != h.A.isInChannel(e, t) &&
                !m.A.isUserConnected(t),
        );
    return (
        n.useEffect(() => {
            A && c(!0);
        }, [A]),
        n.useEffect(() => {
            l !== e && c(!1);
        }, [e, l]),
        n.useEffect(
            () => (
                p && null == s.current
                    ? (s.current = setTimeout(() => {
                          (s.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(s.current), (s.current = null), o(!1)),
                () => {
                    clearTimeout(s.current), (s.current = null);
                }
            ),
            [p],
        ),
        !i && u && a
    );
}
