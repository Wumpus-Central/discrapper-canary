n.d(t, { Z: () => l }), n(35282), n(388685);
var r = n(53529),
    i = n(436660),
    a = n(887490);
let o = ["applicationCommand"],
    s = ["gameMentionInput", "timestampMentionInput"];
function l(e) {
    let { insertBreak: t, insertText: n } = e;
    return (
        (e.insertBreak = () => {
            c(e) && t();
        }),
        (e.insertSoftBreak = () => {
            e.insertBreak();
        }),
        (e.insertText = (t) => {
            if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
            let a = t.split(/\r\n|\r|\n/);
            if (!c(e)) return void n(a.join(" "));
            r.T.withSingleEntry(e, () => {
                let t = !1;
                for (let r of a) t && i.Q.splitNodes(e, { always: !0 }), n(r), (t = !0);
            });
        }),
        e
    );
}
function c(e) {
    var t;
    let n = a.bN.getCurrentBlock(e),
        r = a.bN.getCurrentInline(e);
    return null != n && !o.includes(n[0].type) && !s.includes(null == r || null == (t = r[0]) ? void 0 : t.type);
}
