t.d(n, { $n: () => b, uy: () => C, vp: () => m }), t(321073);
var u = t(64700),
    l = t(735438),
    r = t(17928),
    i = t(568598),
    s = t(313961),
    a = t(288737),
    c = t(495544),
    d = t(734057),
    o = t(696451),
    A = t(584569),
    f = t(763827),
    g = t(287809),
    h = t(977997),
    p = t(403362);
function b(e, n) {
    let t = (0, r.bG)([A.A, f.A], () => (e === f.A.getChannelId() ? A.A.getDesyncedVoiceStates() : null)),
        i = (0, r.yK)([s.A], () => (null == e ? [] : [...s.A.getGuildRingingUsers(e)])),
        c = (0, r.yK)([g.default], () => i.map((e) => g.default.getUser(e)).filter(p.Vq)),
        h = (0, r.bG)([d.A], () => d.A.getBasicChannel(e)),
        b = u.useMemo(
            () =>
                c.map((e) => ({
                    voiceState: new a.A(e.id),
                    user: e,
                    member: h?.guild_id != null ? o.Ay.getMember(h?.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [c, h?.guild_id],
        );
    return u.useMemo(
        () =>
            (function (e, n, t) {
                if ((null == e || 0 === e.length) && 0 === t.length) return n;
                let u = [],
                    r = new Set();
                for (let e of n) u.push(e), r.add(e.user.id);
                return (
                    e?.forEach((e) => {
                        u.splice(
                            (0, l.sortedIndexBy)(u, e, (e) => {
                                let { comparator: n } = e;
                                return n;
                            }),
                            0,
                            e,
                        );
                    }),
                    t.length > 0 &&
                        t.forEach((e) => {
                            r.has(e.user.id) ||
                                u.splice(
                                    (0, l.sortedIndexBy)(u, e, (e) => {
                                        let { comparator: n } = e;
                                        return n;
                                    }),
                                    0,
                                    e,
                                );
                        }),
                    u
                );
            })(t, n, b),
        [t, n, b],
    );
}
function m(e, n) {
    let t = (0, r.bG)([A.A, f.A], () => (e === f.A.getChannelId() ? A.A.getDesyncedParticipants() : null));
    return u.useMemo(
        () =>
            (function (e, n) {
                if (null == e || 0 === e.length) return n;
                let t = [...n];
                return (
                    e.forEach((e) => {
                        t.splice(
                            (0, l.sortedIndexBy)(t, e, (e) => (0, i.KU)(e)),
                            0,
                            e,
                        );
                    }),
                    t
                );
            })(t, n),
        [t, n],
    );
}
function C(e, n) {
    let t = (0, r.bG)([c.default], () => c.default.getId() === n),
        l = (0, r.bG)([f.A], () => f.A.getChannelId()),
        i = u.useRef(null),
        [s, a] = u.useState(!1),
        [d, o] = u.useState(!1),
        A = (0, r.bG)(
            [f.A, h.A],
            () =>
                null != n &&
                null != e &&
                f.A.getChannelId() === e &&
                null != h.A.isInChannel(e, n) &&
                f.A.isUserConnected(n),
        ),
        g = (0, r.bG)(
            [f.A, h.A],
            () =>
                null != n &&
                null != e &&
                f.A.getChannelId() === e &&
                null != h.A.isInChannel(e, n) &&
                !f.A.isUserConnected(n),
        );
    return (
        u.useEffect(() => {
            A && o(!0);
        }, [A]),
        u.useEffect(() => {
            l !== e && o(!1);
        }, [e, l]),
        u.useEffect(
            () => (
                g && null == i.current
                    ? (i.current = setTimeout(() => {
                          (i.current = null), a(!0);
                      }, 250))
                    : (clearTimeout(i.current), (i.current = null), a(!1)),
                () => {
                    clearTimeout(i.current), (i.current = null);
                }
            ),
            [g],
        ),
        !t && d && s
    );
}
