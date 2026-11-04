(n(129230), n(652215));
let i = ["COLD_START"],
    r = !0,
    a = new Map();
function s(e) {
    let t = (a.get(e) ?? 0) - 1;
    t <= 0 ? a.delete(e) : a.set(e, t);
}
function l() {
    return a.size > 0 || r;
}
function o(e) {
    (l(), (r = !1), e(), l());
}
n.d(
    t,
    {},
    {
        L7: function () {
            let e = [...(r ? i : []), ...a.keys()].sort();
            return e.length > 0 ? e.join(",") : "NO_REASONS";
        },
        qr: function (e) {
            o(() => s(e));
        },
        uG: function (e) {
            o(() => {
                let t;
                ((t = a.get(e) ?? 0), a.set(e, t + 1), s(`BRIDGE:${e}`));
            });
        },
    },
);
