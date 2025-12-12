let r;
n.d(t, { a: () => s });
var i = n(958209),
    a = n(340371),
    o = n(886649),
    _ = n(514962);
function s(e) {
    let t = "history";
    (0, i.Hj)(t, e), (0, i.D2)(t, c);
}
function c() {
    if (!(0, a.B)()) return;
    let e = _.m.onpopstate;
    function t(e) {
        return function (...t) {
            let n = t.length > 2 ? t[2] : void 0;
            if (n) {
                let e = r,
                    t = String(n);
                (r = t),
                    (0, i.rK)("history", {
                        from: e,
                        to: t,
                    });
            }
            return e.apply(this, t);
        };
    }
    (_.m.onpopstate = function (...t) {
        let n = _.m.location.href,
            a = r;
        if (
            ((r = n),
            (0, i.rK)("history", {
                from: a,
                to: n,
            }),
            e)
        )
            try {
                return e.apply(this, t);
            } catch (e) {}
    }),
        (0, o.hl)(_.m.history, "pushState", t),
        (0, o.hl)(_.m.history, "replaceState", t);
}
