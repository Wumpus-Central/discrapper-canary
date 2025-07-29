let r;
a.d(e, { a: () => c });
var _ = a(578346),
    n = a(987886),
    o = a(370336),
    i = a(395848);
function c(t) {
    let e = 'history';
    ((0, _.Hj)(e, t), (0, _.D2)(e, E));
}
function E() {
    if (!(0, n.B)()) return;
    let t = i.m.onpopstate;
    function e(t) {
        return function (...e) {
            let a = e.length > 2 ? e[2] : void 0;
            if (a) {
                let t = r,
                    e = String(a);
                ((r = e),
                    (0, _.rK)('history', {
                        from: t,
                        to: e
                    }));
            }
            return t.apply(this, e);
        };
    }
    ((i.m.onpopstate = function (...e) {
        let a = i.m.location.href,
            n = r;
        if (
            ((r = a),
            (0, _.rK)('history', {
                from: n,
                to: a
            }),
            t)
        )
            try {
                return t.apply(this, e);
            } catch (t) {}
    }),
        (0, o.hl)(i.m.history, 'pushState', e),
        (0, o.hl)(i.m.history, 'replaceState', e));
}
