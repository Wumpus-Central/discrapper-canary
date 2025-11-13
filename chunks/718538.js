n.d(t, { V: () => l }), n(388685);
var i = n(442837),
    r = n(375954);
function l(e, t) {
    return (0, i.e7)([r.Z], () => {
        if (null == t) return;
        let n = r.Z.getMessages(e),
            i = n.findOldest((e) => e.author.id === t);
        if (null != i) {
            for (let e of n.toArray()) {
                if (e.author.id !== t) break;
                e.content.length > (null == i ? void 0 : i.content.length) && (i = e);
            }
            return i;
        }
    }, [e, t]);
}
