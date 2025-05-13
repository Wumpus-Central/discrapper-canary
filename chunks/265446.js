n.d(t, { Z: () => s }), n(35282), n(388685);
var r = n(53529),
    i = n(436660),
    a = n(887490);
let o = ['applicationCommand'];
function s(e) {
    let { insertBreak: t, insertText: n } = e;
    return (
        (e.insertBreak = () => {
            l(e) && t();
        }),
        (e.insertSoftBreak = () => {
            e.insertBreak();
        }),
        (e.insertText = (t) => {
            if (0 > t.indexOf('\r') && 0 > t.indexOf('\n')) return void n(t);
            let a = t.split(/\r\n|\r|\n/);
            if (!l(e)) return void n(a.join(' '));
            r.T.withSingleEntry(e, () => {
                let t = !1;
                for (let r of a) t && i.Q.splitNodes(e, { always: !0 }), n(r), (t = !0);
            });
        }),
        e
    );
}
function l(e) {
    let t = a.bN.getCurrentBlock(e);
    return null != t && !o.includes(t[0].type);
}
