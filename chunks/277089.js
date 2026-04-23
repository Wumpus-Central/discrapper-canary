n.d(t, { A: () => o });
var l = n(64700),
    a = n(505779),
    i = n(311907),
    r = n(970163),
    s = n(184989);
let o = function (e, t) {
    let [n, o] = l.useState(),
        c = l.useRef(null),
        d = l.useRef(t);
    l.useEffect(() => {
        d.current = t;
    }, [t]);
    let u = (0, i.bG)([s.A], () => n?.guild?.id != null && s.A.isMember(n?.guild?.id)),
        m = l.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === a.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        l.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (c.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, r.A)(t);
                    !0 !== e.banned && ((c.current = t), o(e.invite), null != e.invite && d.current?.(e.invite));
                }
            };
            null != m && e(m.url);
        }, [m]),
        { invite: n, isMember: u }
    );
};
