n.d(t, { Z: () => o });
var i = n(192379),
    l = n(566620),
    a = n(782769),
    r = n(451576);
let s = (e) => null != e && '' !== e;
function o(e, t) {
    let n = (0, a.z)(null != t ? t : void 0),
        o = (0, r.Z)(t),
        c = s(e) || o;
    return (
        i.useEffect(() => {
            c && n && (0, l.w1)({ guildId: e });
        }, [e, n, c]),
        c && n
    );
}
