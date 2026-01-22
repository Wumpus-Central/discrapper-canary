n.d(t, {
    A: () => o,
}),
    n(321073),
    n(864466),
    n(443073),
    n(896048);
var r = n(64700),
    l = n(311907),
    i = n(508675),
    a = n(7584),
    s = n(846218);

function o(e) {
    let t = (0, l.bG)([i.Ay], () => i.Ay.getGuilds()),
        n = r.useRef([]);
    return (
        r.useEffect(() => {
            a.Ay.forEach((e) => n.current.push(e));
        }, []),
        r.useMemo(
            () => [
                ...Object.values(t)
                    .map((t) => t.emojis.filter((t) => (0, s.n)(t, e)))
                    .flat(),
                ...n.current,
            ],
            [t, e],
        )
    );
}
