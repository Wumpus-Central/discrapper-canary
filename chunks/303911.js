n.d(t, { Ce: () => o, Ut: () => _, fz: () => u, iX: () => c });
var i = n(51906),
    r = n(773669),
    a = n(935208),
    s = n(736347),
    l = n(652215);
let o = "#",
    d = (0, i.L_)((e) => new Intl.Collator(e, { sensitivity: "base", numeric: !0 }));
function c(e) {
    return e === l.clD.OFFLINE || e === l.clD.UNKNOWN;
}
function u(e, t) {
    let n = c(e.status);
    if (n !== c(t.status)) return n ? 1 : -1;
    let i = d(r.default.locale).compare(e.name, t.name);
    return 0 !== i ? i : a.default.compare(e.userId, t.userId);
}
function _(e, t) {
    if (e.type !== t.type) return e.type - t.type;
    if (e.type === s.ik.LETTER) {
        let n = e.label === o;
        if (n !== (t.label === o)) return n ? 1 : -1;
    }
    let n = d(r.default.locale).compare(e.label ?? "", t.label ?? "");
    return 0 !== n ? n : e.key < t.key ? -1 : +(e.key > t.key);
}
