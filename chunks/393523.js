let a;
_.d(e, { a: () => i });
var r = _(578346),
    n = _(987886),
    o = _(370336),
    E = _(395848);
function i(t) {
    let e = "history";
    (0, r.Hj)(e, t), (0, r.D2)(e, c);
}
function c() {
    if (!(0, n.B)()) return;
    let t = E.m.onpopstate;
    function e(t) {
        return function (...e) {
            let _ = e.length > 2 ? e[2] : void 0;
            if (_) {
                let t = a,
                    e = String(_);
                (a = e),
                    (0, r.rK)("history", {
                        from: t,
                        to: e,
                    });
            }
            return t.apply(this, e);
        };
    }
    (E.m.onpopstate = function (...e) {
        let _ = E.m.location.href,
            n = a;
        if (
            ((a = _),
            (0, r.rK)("history", {
                from: n,
                to: _,
            }),
            t)
        )
            try {
                return t.apply(this, e);
            } catch (t) {}
    }),
        (0, o.hl)(E.m.history, "pushState", e),
        (0, o.hl)(E.m.history, "replaceState", e);
}
