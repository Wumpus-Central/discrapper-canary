n.d(t, { A: () => o });
var i = n(64700),
    l = n(505779),
    a = n(311907),
    s = n(970163),
    r = n(184989);
let o = function (e, t) {
    let [n, o] = i.useState(),
        c = i.useRef(null),
        d = i.useRef(t);
    i.useEffect(() => {
        d.current = t;
    }, [t]);
    let u = (0, a.bG)([r.A], () => n?.guild?.id != null && r.A.isMember(n?.guild?.id)),
        m = i.useMemo(
            () =>
                e?.websites?.find((e) => {
                    let { category: t } = e;
                    return t === l.V.DISCORD;
                }),
            [e?.websites],
        );
    return (
        i.useEffect(() => {
            let e = async (e) => {
                let t = e.split("/").pop();
                if (null != t) {
                    if (c.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, s.A)(t);
                    !0 !== e.banned && ((c.current = t), o(e.invite), null != e.invite && d.current?.(e.invite));
                }
            };
            null != m && e(m.url);
        }, [m]),
        { invite: n, isMember: u }
    );
};
