_.d(e, { x: () => n });
var a = _(116698),
    r = _(928541);
function n(t) {
    let e = [];
    function _(t) {
        return e.splice(e.indexOf(t), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: e,
        add: function (n) {
            if (!(void 0 === t || e.length < t))
                return (0, r.$2)(new a.b("Not adding Promise because buffer limit was reached."));
            let o = n();
            return -1 === e.indexOf(o) && e.push(o), o.then(() => _(o)).then(null, () => _(o).then(null, () => {})), o;
        },
        drain: function (t) {
            return new r.cW((_, a) => {
                let n = e.length;
                if (!n) return _(!0);
                let o = setTimeout(() => {
                    t && t > 0 && _(!1);
                }, t);
                e.forEach((t) => {
                    (0, r.WD)(t).then(() => {
                        --n || (clearTimeout(o), _(!0));
                    }, a);
                });
            });
        },
    };
}
