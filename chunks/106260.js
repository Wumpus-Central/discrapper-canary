let n;
r.d(t, { a: () => s });
var a = r(958209),
    i = r(340371),
    o = r(886649),
    _ = r(514962);
function s(e) {
    let t = "history";
    (0, a.Hj)(t, e), (0, a.D2)(t, c);
}
function c() {
    if (!(0, i.B)()) return;
    let e = _.m.onpopstate;
    function t(e) {
        return function (...t) {
            let r = t.length > 2 ? t[2] : void 0;
            if (r) {
                let e = n,
                    t = String(r);
                (n = t),
                    (0, a.rK)("history", {
                        from: e,
                        to: t,
                    });
            }
            return e.apply(this, t);
        };
    }
    (_.m.onpopstate = function (...t) {
        let r = _.m.location.href,
            i = n;
        if (
            ((n = r),
            (0, a.rK)("history", {
                from: i,
                to: r,
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
