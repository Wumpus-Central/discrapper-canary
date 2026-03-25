"use strict";
n.d(t, { $n: () => g, uy: () => x, vp: () => f }), n(321073);
var i = n(64700),
    s = n(735438),
    l = n(311907),
    r = n(568598),
    a = n(313961),
    o = n(288737),
    c = n(961350),
    d = n(734057),
    u = n(696451),
    h = n(584569),
    A = n(383501),
    m = n(287809),
    _ = n(977997),
    p = n(403362);
function g(e, t) {
    let n = (0, l.bG)([h.A, A.A], () => (e === A.A.getChannelId() ? h.A.getDesyncedVoiceStates() : null)),
        r = (0, l.yK)([a.A], () => (null == e ? [] : [...a.A.getGuildRingingUsers(e)])),
        c = (0, l.yK)([m.default], () => r.map((e) => m.default.getUser(e)).filter(p.Vq)),
        _ = (0, l.bG)([d.A], () => d.A.getBasicChannel(e)),
        g = i.useMemo(
            () =>
                c.map((e) => ({
                    voiceState: new o.A(e.id),
                    user: e,
                    member: _?.guild_id != null ? u.Ay.getMember(_?.guild_id, e.id) : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [c, _?.guild_id],
        );
    return i.useMemo(
        () =>
            (function (e, t, n) {
                if ((null == e || 0 === e.length) && 0 === n.length) return t;
                let i = [],
                    l = new Set();
                for (let e of t) i.push(e), l.add(e.user.id);
                return (
                    e?.forEach((e) => {
                        i.splice(
                            (0, s.sortedIndexBy)(i, e, (e) => {
                                let { comparator: t } = e;
                                return t;
                            }),
                            0,
                            e,
                        );
                    }),
                    n.length > 0 &&
                        n.forEach((e) => {
                            l.has(e.user.id) ||
                                i.splice(
                                    (0, s.sortedIndexBy)(i, e, (e) => {
                                        let { comparator: t } = e;
                                        return t;
                                    }),
                                    0,
                                    e,
                                );
                        }),
                    i
                );
            })(n, t, g),
        [n, t, g],
    );
}
function f(e, t) {
    let n = (0, l.bG)([h.A, A.A], () => (e === A.A.getChannelId() ? h.A.getDesyncedParticipants() : null));
    return i.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, s.sortedIndexBy)(n, e, (e) => (0, r.KU)(e)),
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
function x(e, t) {
    let n = (0, l.bG)([c.default], () => c.default.getId() === t),
        s = (0, l.bG)([A.A], () => A.A.getChannelId()),
        r = i.useRef(null),
        [a, o] = i.useState(!1),
        [d, u] = i.useState(!1),
        h = (0, l.bG)(
            [A.A, _.A],
            () =>
                null != t &&
                null != e &&
                A.A.getChannelId() === e &&
                null != _.A.isInChannel(e, t) &&
                A.A.isUserConnected(t),
        ),
        m = (0, l.bG)(
            [A.A, _.A],
            () =>
                null != t &&
                null != e &&
                A.A.getChannelId() === e &&
                null != _.A.isInChannel(e, t) &&
                !A.A.isUserConnected(t),
        );
    return (
        i.useEffect(() => {
            h && u(!0);
        }, [h]),
        i.useEffect(() => {
            s !== e && u(!1);
        }, [e, s]),
        i.useEffect(
            () => (
                m && null == r.current
                    ? (r.current = setTimeout(() => {
                          (r.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(r.current), (r.current = null), o(!1)),
                () => {
                    clearTimeout(r.current), (r.current = null);
                }
            ),
            [m],
        ),
        !n && d && a
    );
}
