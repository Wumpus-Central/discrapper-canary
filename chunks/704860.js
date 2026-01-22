n.d(t, {
    A: () => h,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(71393),
    s = n(287809),
    o = n(715757),
    c = n(254143),
    u = n(778983),
    d = n(841362),
    f = n(285745);

function p(e) {
    let { channel: t, message: n, snapshot: p } = e,
        { moderatorReport: h } = p,
        b = null == h ? void 0 : h.reported_user_id,
        g = (0, i.bG)([s.default], () => (null != b ? s.default.getUser(b) : null)),
        m = (0, i.bG)([a.A], () => a.A.getGuild(t.guild_id));
    (0, o.ml)(n);
    let A = (0, c.A)({
            channel: t,
            user: g,
            guild: m,
        }),
        y = (0, d.A)({
            channel: t,
            user: g,
            guild: m,
        }),
        O = [
            (0, u.A)({
                channel: t,
                message: n,
                user: g,
                guild: m,
            }),
            A,
            y,
            (0, f.A)({
                channel: t,
                user: g,
                guild: m,
            }),
        ].filter((e) => null != e);
    return t.isModeratorReportChannel() && 0 !== O.length
        ? (0, r.jsx)(r.Fragment, {
              children: O.map((e, t) =>
                  (0, r.jsx)(
                      l.Fragment,
                      {
                          children: e,
                      },
                      t,
                  ),
              ),
          })
        : null;
}

function h(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(r.Fragment, {
        children: t.messageSnapshots.map((e, l) =>
            (0, r.jsx)(
                p,
                {
                    channel: n,
                    message: t,
                    snapshot: e,
                },
                l,
            ),
        ),
    });
}
