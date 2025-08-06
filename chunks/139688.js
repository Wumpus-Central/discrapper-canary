n.d(t, { xE: () => s }), n(35282);
var r = n(73800),
    i = n(442837),
    o = n(339085);
let a = /^<(a?):(\w+):(\d+)>/;
function s(e) {
    let t = r.useMemo(() => {
        var t;
        return null == (t = a.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, i.e7)([o.ZP], () => (null == t ? null : o.ZP.getCustomEmojiById(t)));
}
