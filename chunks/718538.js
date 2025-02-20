n.d(t, { V: () => l }), n(47120);
var r = n(442837),
    i = n(375954);
function l(e, t) {
    return (0, r.e7)(
        [i.Z],
        () => {
            if (null == t) return;
            let n = i.Z.getMessages(e),
                r = n.findOldest((e) => e.author.id === t);
            if (null != r) {
                for (let e of n.toArray()) {
                    if (e.author.id !== t) break;
                    e.content.length > (null == r ? void 0 : r.content.length) && (r = e);
                }
                return r;
            }
        },
        [e, t]
    );
}
