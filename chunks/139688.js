(n.d(t, { xE: () => i }), n(35282));
var s = n(73800),
    a = n(442837),
    r = n(339085);
let l = /^<(a?):(\w+):(\d+)>/;
function i(e) {
    let t = s.useMemo(() => {
        var t;
        return null == (t = l.exec(e)) ? void 0 : t[3];
    }, [e]);
    return (0, a.e7)([r.ZP], () => (null == t ? null : r.ZP.getCustomEmojiById(t)));
}
