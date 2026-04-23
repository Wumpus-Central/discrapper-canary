n.d(t, { X: () => s });
var i = n(64700),
    l = n(496431),
    a = n(592713);
function s(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: s } = e ?? {},
        r = (0, l.A)(null != t ? Date.parse(t) : Date.now()),
        o = r.seconds,
        c = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(
            () =>
                null == e || null == s || null == n
                    ? void clearTimeout(c.current)
                    : (o <= 0 &&
                          null == c.current &&
                          (c.current = setTimeout(() => {
                              a.A.clearGuildMemberTimeout(s, n);
                          }, 1e3)),
                      () => {
                          null != c.current && (clearTimeout(c.current), (c.current = null));
                      }),
            [s, n, o, t, e],
        ),
        r
    );
}
