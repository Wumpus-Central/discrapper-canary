n.d(t, { $: () => r });
var i = n(192379),
    l = n(774078),
    a = n(202107);
function r(e) {
    let { communicationDisabledUntil: t, userId: n, guildId: r } = null != e ? e : {},
        s = (0, l.Z)(null != t ? Date.parse(t) : Date.now()),
        o = s.seconds,
        c = (0, i.useRef)(null);
    return (
        (0, i.useEffect)(() => {
            if (null == e || null == r || null == n) {
                clearTimeout(c.current);
                return;
            }
            return (
                o <= 0 &&
                    null == c.current &&
                    (c.current = setTimeout(() => {
                        a.Z.clearGuildMemberTimeout(r, n);
                    }, 1000)),
                () => {
                    null != c.current && (clearTimeout(c.current), (c.current = null));
                }
            );
        }, [r, n, o, t, e]),
        s
    );
}
