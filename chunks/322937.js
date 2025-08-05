n.d(t, { $: () => s });
var r = n(73800),
    i = n(774078),
    a = n(202107);
let o = 1000;
function s(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: s } = null != e ? e : {},
        l = (0, i.Z)(null != t ? Date.parse(t) : Date.now()),
        c = l.seconds,
        u = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () =>
                null == e || null == s || null == n
                    ? void clearTimeout(u.current)
                    : (c <= 0 &&
                          null == u.current &&
                          (u.current = setTimeout(() => {
                              a.Z.clearGuildMemberTimeout(s, n);
                          }, o)),
                      () => {
                          null != u.current && (clearTimeout(u.current), (u.current = null));
                      }),
            [s, n, c, t, e]
        ),
        l
    );
}
