n.d(t, {
    $n: () => _,
    uy: () => A,
    vp: () => b,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(735438),
    l = n(311907),
    a = n(568598),
    s = n(313961),
    o = n(288737),
    c = n(961350),
    u = n(734057),
    d = n(696451),
    p = n(584569),
    f = n(383501),
    m = n(287809),
    g = n(977997),
    y = n(403362);

function _(e, t) {
    let n = (0, l.bG)([p.A, f.A], () => (e === f.A.getChannelId() ? p.A.getDesyncedVoiceStates() : null)),
        a = (0, l.yK)([s.A], () => (null == e ? [] : [...s.A.getGuildRingingUsers(e)])),
        c = (0, l.yK)([m.default], () => a.map((e) => m.default.getUser(e)).filter(y.Vq)),
        g = (0, l.bG)([u.A], () => u.A.getBasicChannel(e)),
        _ = r.useMemo(
            () =>
                c.map((e) => ({
                    voiceState: new o.A(e.id),
                    user: e,
                    member:
                        (null == g ? void 0 : g.guild_id) != null
                            ? d.Ay.getMember(null == g ? void 0 : g.guild_id, e.id)
                            : null,
                    nick: e.globalName,
                    comparator: e.globalName,
                    _isPlaceholder: !1,
                })),
            [c, null == g ? void 0 : g.guild_id],
        );
    return r.useMemo(
        () =>
            (function (e, t, n) {
                if ((null == e || 0 === e.length) && 0 === n.length) return t;
                let r = [],
                    l = new Set();
                for (let e of t) r.push(e), l.add(e.user.id);
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
                            l.has(e.user.id) ||
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
            })(n, t, _),
        [n, t, _],
    );
}

function b(e, t) {
    let n = (0, l.bG)([p.A, f.A], () => (e === f.A.getChannelId() ? p.A.getDesyncedParticipants() : null));
    return r.useMemo(
        () =>
            (function (e, t) {
                if (null == e || 0 === e.length) return t;
                let n = [...t];
                return (
                    e.forEach((e) => {
                        n.splice(
                            (0, i.sortedIndexBy)(n, e, (e) => (0, a.KU)(e)),
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

function A(e, t) {
    let n = (0, l.bG)([c.default], () => c.default.getId() === t),
        i = (0, l.bG)([f.A], () => f.A.getChannelId()),
        a = r.useRef(null),
        [s, o] = r.useState(!1),
        [u, d] = r.useState(!1),
        p = (0, l.bG)(
            [f.A, g.A],
            () =>
                null != t &&
                null != e &&
                f.A.getChannelId() === e &&
                null != g.A.isInChannel(e, t) &&
                f.A.isUserConnected(t),
        ),
        m = (0, l.bG)(
            [f.A, g.A],
            () =>
                null != t &&
                null != e &&
                f.A.getChannelId() === e &&
                null != g.A.isInChannel(e, t) &&
                !f.A.isUserConnected(t),
        );
    return (
        r.useEffect(() => {
            p && d(!0);
        }, [p]),
        r.useEffect(() => {
            i !== e && d(!1);
        }, [e, i]),
        r.useEffect(
            () => (
                m && null == a.current
                    ? (a.current = setTimeout(() => {
                          (a.current = null), o(!0);
                      }, 250))
                    : (clearTimeout(a.current), (a.current = null), o(!1)),
                () => {
                    clearTimeout(a.current), (a.current = null);
                }
            ),
            [m],
        ),
        !n && u && s
    );
}
