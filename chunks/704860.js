n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(71393),
    r = n(287809),
    o = n(715757),
    c = n(254143),
    d = n(778983),
    u = n(841362),
    h = n(285745);
function m(e) {
    let { channel: t, message: n, snapshot: m } = e,
        { moderatorReport: A } = m,
        g = A?.reported_user_id,
        _ = (0, a.bG)([r.default], () => (null != g ? r.default.getUser(g) : null)),
        p = (0, a.bG)([s.A], () => s.A.getGuild(t.guild_id));
    (0, o.ml)(n);
    let f = (0, c.A)({ channel: t, user: _, guild: p }),
        E = (0, u.A)({ channel: t, user: _, guild: p }),
        C = [
            (0, d.A)({ channel: t, message: n, user: _, guild: p }),
            f,
            E,
            (0, h.A)({ channel: t, user: _, guild: p }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== C.length
        ? (0, i.jsx)(i.Fragment, { children: C.map((e, t) => (0, i.jsx)(l.Fragment, { children: e }, t)) })
        : null;
}
function A(e) {
    let { message: t, channel: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: t.messageSnapshots.map((e, l) => (0, i.jsx)(m, { channel: n, message: t, snapshot: e }, l)),
    });
}
