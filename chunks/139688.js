n.d(t, { xE: () => s }), n(35282);
var r = n(473749),
    i = n(442837),
    a = n(339085);
let o = /^<(a?):(\w+):(\d+)>/;
function s(e) {
    let t = r.useMemo(() => {
        var t;
        return null == (t = o.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, i.e7)([a.ZP], () => (null == t ? null : a.ZP.getCustomEmojiById(t)));
}
