n.d(t, {
    Ys: () => o,
}),
    n(747238);
var r = n(64700),
    i = n(311907),
    a = n(508675);
let s = /^<(a?):(\w+):(\d+)>/;

function o(e) {
    let t = r.useMemo(() => {
        var t;
        return null == (t = s.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, i.bG)([a.Ay], () => (null == t ? null : a.Ay.getCustomEmojiById(t)));
}
