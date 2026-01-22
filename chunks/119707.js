n.d(t, {
    A: () => l,
}),
    n(747238),
    n(896048);
var r = n(186306),
    i = n(35277),
    a = n(711371);
let s = ["applicationCommand"],
    o = ["gameMentionInput", "timestampMentionInput"];

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
            c(e)
                ? r.o.withSingleEntry(e, () => {
                      let t = !1;
                      for (let r of a)
                          t &&
                              i.b.splitNodes(e, {
                                  always: !0,
                              }),
                              n(r),
                              (t = !0);
                  })
                : n(a.join(" "));
        }),
        e
    );
}

function c(e) {
    var t;
    let n = a.VW.getCurrentBlock(e),
        r = a.VW.getCurrentInline(e);
    return null != n && !s.includes(n[0].type) && !o.includes(null == r || null == (t = r[0]) ? void 0 : t.type);
}
