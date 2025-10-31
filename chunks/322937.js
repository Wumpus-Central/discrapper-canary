n.d(t, { $: () => a });
var r = n(647438),
    i = n(774078),
    l = n(202107);
function a(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: a } = null != e ? e : {},
        o = (0, i.Z)(null != t ? Date.parse(t) : Date.now()),
        s = o.seconds,
        c = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () =>
                null == e || null == a || null == n
                    ? void clearTimeout(c.current)
                    : (s <= 0 &&
                          null == c.current &&
                          (c.current = setTimeout(() => {
                              l.Z.clearGuildMemberTimeout(a, n);
                          }, 1000)),
                      () => {
                          null != c.current && (clearTimeout(c.current), (c.current = null));
                      }),
            [a, n, s, t, e],
        ),
        o
    );
}
