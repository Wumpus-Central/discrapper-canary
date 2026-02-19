"use strict";
n.d(t, { A: () => o }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(508675),
    r = n(7584),
    a = n(846218);
function o(e) {
    let t = (0, s.bG)([l.Ay], () => l.Ay.getGuilds()),
        n = i.useRef([]);
    return (
        i.useEffect(() => {
            r.Ay.forEach((e) => n.current.push(e));
        }, []),
        i.useMemo(
            () => [
                ...Object.values(t)
                    .map((t) => t.emojis.filter((t) => (0, a.n)(t, e)))
                    .flat(),
                ...n.current,
            ],
            [t, e],
        )
    );
}
