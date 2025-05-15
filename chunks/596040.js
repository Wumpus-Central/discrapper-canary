n.d(t, { Z: () => s });
var r = n(73800),
    i = n(566620),
    l = n(782769),
    a = n(451576);
let o = (e) => null != e && '' !== e;
function s(e, t) {
    let n = (0, l.z)(null != t ? t : void 0),
        s = (0, a.Z)(t),
        c = o(e) || s;
    return (
        r.useEffect(() => {
            c && n && (0, i.w1)({ guildId: e });
        }, [e, n, c]),
        c && n
    );
}
