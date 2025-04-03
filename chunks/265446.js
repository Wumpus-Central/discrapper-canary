n.d(t, { Z: () => s }), n(301563), n(47120);
var r = n(53529),
    i = n(436660),
    o = n(887490);
let a = ['applicationCommand'];
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
            let o = t.split(/\r\n|\r|\n/);
            if (!l(e)) return void n(o.join(' '));
            r.T.withSingleEntry(e, () => {
                let t = !1;
                for (let r of o) t && i.Q.splitNodes(e, { always: !0 }), n(r), (t = !0);
            });
        }),
        e
    );
}
function l(e) {
    let t = o.bN.getCurrentBlock(e);
    return null != t && !a.includes(t[0].type);
}
