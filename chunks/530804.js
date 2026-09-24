(t.d(n, { $n: () => A, uy: () => o, vp: () => f }), t(321073));
var u = t(582128),
    r = t(435558),
    l = t(17928),
    s = t(568598),
    c = t(280450),
    i = t(584569),
    a = t(763827),
    d = t(977997);
function A(e, n) {
    let t = (0, l.bG)([i.A, a.A], () => (e === a.A.getChannelId() ? i.A.getDesyncedVoiceStates() : null));
    return u.useMemo(
        () =>
            (function (e, n) {
                if (null == e || 0 === e.length) return n;
                let t = [],
                    u = new Set();
                for (let e of n) (t.push(e), u.add(e.user.id));
                return (
                    e?.forEach((e) => {
                        t.splice(
                            (0, r.sortedIndexBy)(t, e, (e) => {
                                let { comparator: n } = e;
                                return n;
                            }),
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
function f(e, n) {
    let t = (0, l.bG)([i.A, a.A], () => (e === a.A.getChannelId() ? i.A.getDesyncedParticipants() : null));
    return u.useMemo(
        () =>
            (function (e, n) {
                if (null == e || 0 === e.length) return n;
                let t = [...n];
                return (
                    e.forEach((e) => {
                        t.splice(
                            (0, r.sortedIndexBy)(t, e, (e) => (0, s.KU)(e)),
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
function o(e, n) {
    let t = (0, l.bG)([c.default], () => c.default.getId() === n),
        r = (0, l.bG)([a.A], () => a.A.getChannelId()),
        s = u.useRef(null),
        [i, A] = u.useState(!1),
        [f, o] = u.useState(!1),
        h = (0, l.bG)(
            [a.A, d.A],
            () =>
                null != n &&
                null != e &&
                a.A.getChannelId() === e &&
                null != d.A.isInChannel(e, n) &&
                a.A.isUserConnected(n),
        ),
        C = (0, l.bG)(
            [a.A, d.A],
            () =>
                null != n &&
                null != e &&
                a.A.getChannelId() === e &&
                null != d.A.isInChannel(e, n) &&
                !a.A.isUserConnected(n),
        );
    return (
        u.useEffect(() => {
            h && o(!0);
        }, [h]),
        u.useEffect(() => {
            r !== e && o(!1);
        }, [e, r]),
        u.useEffect(
            () => (
                C && null == s.current
                    ? (s.current = setTimeout(() => {
                          ((s.current = null), A(!0));
                      }, 250))
                    : (clearTimeout(s.current), (s.current = null), A(!1)),
                () => {
                    (clearTimeout(s.current), (s.current = null));
                }
            ),
            [C],
        ),
        !t && f && i
    );
}
