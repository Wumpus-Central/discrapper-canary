var i = n(51906),
    r = n(773669),
    a = n(811091),
    s = n(736347),
    l = n(652215);
let o = (0, i.L_)((e) => new Intl.Collator(e, { sensitivity: "base", numeric: !0 }));
function d(e) {
    return e === l.clD.OFFLINE || e === l.clD.UNKNOWN;
}
let c = { [s.Vj.ACTIVE_NOW]: "active_now", [s.Vj.GAME]: "game", [s.Vj.ALPHABETICAL]: "alphabetical" };
n.d(
    t,
    {},
    {
        Ut: function (e, t) {
            if (e.type !== t.type) return e.type - t.type;
            if (e.type === s.ik.LETTER) {
                let n = "#" === e.label;
                if (n !== ("#" === t.label)) return n ? 1 : -1;
            }
            let n = o(r.default.locale).compare(e.label ?? "", t.label ?? "");
            return 0 !== n ? n : e.key < t.key ? -1 : +(e.key > t.key);
        },
        c7: function (e) {
            return c[e];
        },
        fz: function (e, t, n) {
            if (!n) {
                let n = d(e.status);
                if (n !== d(t.status)) return n ? 1 : -1;
            }
            let i = o(r.default.locale).compare(e.name, t.name);
            return 0 !== i ? i : a.default.compare(e.userId, t.userId);
        },
        iX: d,
        kR: function (e) {
            return e !== s.Vj.ALPHABETICAL;
        },
    },
);
