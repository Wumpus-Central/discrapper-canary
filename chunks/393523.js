let r;
a.d(e, { a: () => c });
var n = a(578346),
    o = a(987886),
    _ = a(370336),
    i = a(395848);
function c(t) {
    let e = 'history';
    (0, n.Hj)(e, t), (0, n.D2)(e, s);
}
function s() {
    if (!(0, o.B)()) return;
    let t = i.m.onpopstate;
    function e(t) {
        return function (...e) {
            let a = e.length > 2 ? e[2] : void 0;
            if (a) {
                let t = r,
                    e = String(a);
                (r = e),
                    (0, n.rK)('history', {
                        from: t,
                        to: e
                    });
            }
            return t.apply(this, e);
        };
    }
    (i.m.onpopstate = function (...e) {
        let a = i.m.location.href,
            o = r;
        if (
            ((r = a),
            (0, n.rK)('history', {
                from: o,
                to: a
            }),
            t)
        )
            try {
                return t.apply(this, e);
            } catch (t) {}
    }),
        (0, _.hl)(i.m.history, 'pushState', e),
        (0, _.hl)(i.m.history, 'replaceState', e);
}
