n.d(t, { A: () => d });
var i = n(17928),
    r = n(73153);
let a = new Map(),
    s = new Map(),
    l = new Set();
class o extends i.Ay.Store {
    getAttachments(e) {
        return a.get(e);
    }
    getAttachment(e) {
        return s.get(e);
    }
    wasLookedUp(e) {
        return l.has(e);
    }
}
let d = new o(r.h, {
    LOGOUT: function () {
        ((a = new Map()), (s = new Map()), l.clear());
    },
    CONJURE_STORED_ATTACHMENTS_FETCHED: function (e) {
        let { projectId: t, attachments: n } = e;
        a = new Map(a).set(t, n);
        let i = new Map(s);
        for (let e of n) i.set(e.id, e);
        s = i;
    },
    CONJURE_STORED_ATTACHMENT_LOOKUP: function (e) {
        let { attachmentId: t } = e;
        return (l.add(t), !1);
    },
});
