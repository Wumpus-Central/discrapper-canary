n.d(t, { Z: () => s });
var r = n(73800),
    i = n(566620),
    l = n(790920),
    o = n(451576);
let a = (e) => null != e && '' !== e;
function s(e, t) {
    let n = (0, l.z)(),
        s = (0, o.Z)(t),
        c = a(e) || s;
    return (
        r.useEffect(() => {
            c && n && (0, i.w1)({ guildId: e });
        }, [e, n, c]),
        c && n
    );
}
