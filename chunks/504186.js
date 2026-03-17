n.d(t, { A: () => r }), n(321073);
var a = n(64700),
    l = n(808380);
let i = [l.Y.DESKTOP, l.Y.XBOX, l.Y.PLAYSTATION, l.Y.NINTENDO];
function r(e) {
    return a.useMemo(() => {
        let t = new Set(e.platforms),
            n = [...t];
        return (
            !t.has(l.Y.DESKTOP) && (t.has(l.Y.MACOS) || t.has(l.Y.LINUX)) && n.push(l.Y.DESKTOP),
            n.filter((e) => i.includes(e)).sort((e, t) => i.indexOf(e) - i.indexOf(t))
        );
    }, [e.platforms]);
}
