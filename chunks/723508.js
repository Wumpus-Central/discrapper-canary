n.d(t, {
    X: () => a,
});
var r = n(64700),
    l = n(496431),
    i = n(592713);

function a(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: a } = null != e ? e : {},
        s = (0, l.A)(null != t ? Date.parse(t) : Date.now()),
        o = s.seconds,
        c = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () =>
                null == e || null == a || null == n
                    ? void clearTimeout(c.current)
                    : (o <= 0 &&
                          null == c.current &&
                          (c.current = setTimeout(() => {
                              i.A.clearGuildMemberTimeout(a, n);
                          }, 1e3)),
                      () => {
                          null != c.current && (clearTimeout(c.current), (c.current = null));
                      }),
            [a, n, o, t, e],
        ),
        s
    );
}
