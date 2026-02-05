"use strict";
n.d(t, { A: () => l });
var r = n(186306),
    i = n(35277),
    a = n(711371);
let s = ["applicationCommand"],
    o = ["gameMentionInput", "timestampMentionInput"];
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
            let a = t.split(/\r\n|\r|\n/);
            u(e)
                ? r.o.withSingleEntry(e, () => {
                      let t = !1;
                      for (let r of a) t && i.b.splitNodes(e, { always: !0 }), n(r), (t = !0);
                  })
                : n(a.join(" "));
        }),
        e
    );
}
function u(e) {
    let t = a.VW.getCurrentBlock(e),
        n = a.VW.getCurrentInline(e);
    return null != t && !s.includes(t[0].type) && !o.includes(n?.[0]?.type);
}
