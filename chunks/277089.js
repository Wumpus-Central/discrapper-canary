"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    l = n(505779),
    a = n(311907),
    r = n(970163),
    s = n(184989);
let c = function (e, t) {
    let [n, c] = i.useState(),
        o = i.useRef(null),
        d = i.useRef(t);
    i.useEffect(() => {
        d.current = t;
    }, [t]);
    let u = (0, a.bG)([s.A], () => n?.guild?.id != null && s.A.isMember(n?.guild?.id)),
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
                    if (o.current?.toLowerCase() === t.toLowerCase()) return;
                    let e = await (0, r.A)(t);
                    !0 !== e.banned && ((o.current = t), c(e.invite), null != e.invite && d.current?.(e.invite));
                }
            };
            null != m && e(m.url);
        }, [m]),
        { invite: n, isMember: u }
    );
};
