n.d(t, { Z: () => s }), n(539854), n(472816), n(794429), n(388685);
var i = n(647438),
    r = n(442837),
    l = n(339085),
    a = n(633302),
    o = n(866071);
function s(e) {
    let t = (0, r.e7)([l.ZP], () => l.ZP.getGuilds()),
        n = i.useRef([]);
    return (
        i.useEffect(() => {
            a.ZP.forEach((e) => n.current.push(e));
        }, []),
        i.useMemo(
            () => [
                ...Object.values(t)
                    .map((t) => t.emojis.filter((t) => (0, o.K)(t, e)))
                    .flat(),
                ...n.current,
            ],
            [t, e],
        )
    );
}
