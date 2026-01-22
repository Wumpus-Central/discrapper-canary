n.d(t, {
    $n: () => E,
    uy: () => A,
    vp: () => O,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(568598),
    o = n(313961),
    l = n(288737),
    c = n(961350),
    u = n(734057),
    d = n(696451),
    f = n(584569),
    p = n(383501),
    _ = n(287809),
    h = n(977997),
    m = n(403362);

function g(e, t, n) {
    if ((null == e || 0 === e.length) && 0 === n.length) return t;
    let r = [],
        a = new Set();
    for (let e of t) r.push(e), a.add(e.user.id);
    return (
        null == e ||
            e.forEach((e) => {
                r.splice(
                    (0, i.sortedIndexBy)(r, e, (e) => {
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
                    r.splice(
                        (0, i.sortedIndexBy)(r, e, (e) => {
                            let { comparator: t } = e;
                            return t;
                        }),
                        0,
                        e,
                    );
            }),
        r
    );
}

function E(e, t) {
    let n = (0, a.bG)([f.A, p.A], () => (e === p.A.getChannelId() ? f.A.getDesyncedVoiceStates() : null)),
        i = (0, a.yK)([o.A], () => (null == e ? [] : [...o.A.getGuildRingingUsers(e)])),
        s = (0, a.yK)([_.default], () => i.map((e) => _.default.getUser(e)).filter(m.Vq)),
        c = (0, a.bG)([u.A], () => u.A.getBasicChannel(e)),
        h = r.useMemo(
            () =>
                s.map((e) => ({
                    voiceState: new l.A(e.id),
                    user: e,
                    member:
                        (null == c ? void 0 : c.guild_id) != null
                            ? d.Ay.getMember(null == c ? void 0 : c.guild_id, e.id)
                            : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [s, null == c ? void 0 : c.guild_id],
        );
    return r.useMemo(() => g(n, t, h), [n, t, h]);
}

function b(e, t) {
    if (null == e || 0 === e.length) return t;
    let n = [...t];
    return (
        e.forEach((e) => {
            n.splice(
                (0, i.sortedIndexBy)(n, e, (e) => (0, s.KU)(e)),
                0,
                e,
            );
        }),
        n
    );
}

function y(e) {
    return (0, a.bG)([f.A, p.A], () => (e === p.A.getChannelId() ? f.A.getDesyncedParticipants() : null));
}

function O(e, t) {
    let n = y(e);
    return r.useMemo(() => b(n, t), [n, t]);
}

function A(e, t) {
    let n = (0, a.bG)([c.default], () => c.default.getId() === t),
        i = (0, a.bG)([p.A], () => p.A.getChannelId()),
        s = r.useRef(null),
        [o, l] = r.useState(!1),
        [u, d] = r.useState(!1),
        f = (0, a.bG)(
            [p.A, h.A],
            () =>
                null != t &&
                null != e &&
                p.A.getChannelId() === e &&
                null != h.A.isInChannel(e, t) &&
                p.A.isUserConnected(t),
        ),
        _ = (0, a.bG)(
            [p.A, h.A],
            () =>
                null != t &&
                null != e &&
                p.A.getChannelId() === e &&
                null != h.A.isInChannel(e, t) &&
                !p.A.isUserConnected(t),
        );
    return (
        r.useEffect(() => {
            f && d(!0);
        }, [f]),
        r.useEffect(() => {
            i !== e && d(!1);
        }, [e, i]),
        r.useEffect(
            () => (
                _ && null == s.current
                    ? (s.current = setTimeout(() => {
                          (s.current = null), l(!0);
                      }, 250))
                    : (clearTimeout(s.current), (s.current = null), l(!1)),
                () => {
                    clearTimeout(s.current), (s.current = null);
                }
            ),
            [_],
        ),
        !n && u && o
    );
}
