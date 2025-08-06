n.d(t, { Z: () => l });
var r = n(73800),
    i = n(566620),
    o = n(790920),
    a = n(451576);
let s = (e) => null != e && "" !== e;
function l(e, t) {
    let n = (0, o.z)(),
        l = (0, a.Z)(t),
        c = s(e) || l;
    return (
        r.useEffect(() => {
            c && n && (0, i.w1)({ guildId: e });
        }, [e, n, c]),
        c && n
    );
}
