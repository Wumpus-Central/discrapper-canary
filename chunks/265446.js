r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(53529),
    o = r(436660),
    s = r(887490);
let l = ['applicationCommand'];
function u(e) {
    let { insertBreak: n, insertText: r } = e;
    return (
        (e.insertBreak = () => {
            c(e) && n();
        }),
        (e.insertSoftBreak = () => {
            e.insertBreak();
        }),
        (e.insertText = (n) => {
            if (0 > n.indexOf('\r') && 0 > n.indexOf('\n')) {
                r(n);
                return;
            }
            let i = n.split(/\r\n|\r|\n/);
            if (!c(e)) {
                r(i.join(' '));
                return;
            }
            a.T.withSingleEntry(e, () => {
                let n = !1;
                for (let a of i) n && o.Q.splitNodes(e, { always: !0 }), r(a), (n = !0);
            });
        }),
        e
    );
}
function c(e) {
    let n = s.bN.getCurrentBlock(e);
    return null != n && !l.includes(n[0].type);
}
