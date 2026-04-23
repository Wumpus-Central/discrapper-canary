"use strict";
n.d(t, { A: () => l });
var r = n(186306),
    i = n(35277),
    s = n(711371);
let a = ["applicationCommand"],
    o = ["timestampMentionInput"];
function l(e) {
    let { insertBreak: t, insertText: n } = e;
    return (
        (e.insertBreak = () => {
            u(e) && t();
        }),
        (e.insertSoftBreak = () => {
            e.insertBreak();
        }),
        (e.insertText = (t) => {
            if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) return void n(t);
            let s = t.split(/\r\n|\r|\n/);
            u(e)
                ? r.o.withSingleEntry(e, () => {
                      let t = !1;
                      for (let r of s) t && i.b.splitNodes(e, { always: !0 }), n(r), (t = !0);
                  })
                : n(s.join(" "));
        }),
        e
    );
}
function u(e) {
    let t = s.VW.getCurrentBlock(e),
        n = s.VW.getCurrentInline(e);
    return null != t && !a.includes(t[0].type) && !o.includes(n?.[0]?.type);
}
