"use strict";
n.d(t, { A: () => r }), n(321073);
var l = n(64700),
    a = n(808380);
let i = [a.Y.DESKTOP, a.Y.XBOX, a.Y.PLAYSTATION, a.Y.NINTENDO];
function r(e) {
    return l.useMemo(() => {
        let t = new Set(e.platforms),
            n = [...t];
        return (
            !t.has(a.Y.DESKTOP) && (t.has(a.Y.MACOS) || t.has(a.Y.LINUX)) && n.push(a.Y.DESKTOP),
            n.filter((e) => i.includes(e)).sort((e, t) => i.indexOf(e) - i.indexOf(t))
        );
    }, [e.platforms]);
}
