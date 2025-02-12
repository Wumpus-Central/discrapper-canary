a.d(e, { x: () => _ });
var r = a(116698),
    n = a(928541);
function _(t) {
    let e = [];
    function a(t) {
        return e.splice(e.indexOf(t), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: e,
        add: function (_) {
            if (!(void 0 === t || e.length < t)) return (0, n.$2)(new r.b('Not adding Promise because buffer limit was reached.'));
            let o = _();
            return -1 === e.indexOf(o) && e.push(o), o.then(() => a(o)).then(null, () => a(o).then(null, () => {})), o;
        },
        drain: function (t) {
            return new n.cW((a, r) => {
                let _ = e.length;
                if (!_) return a(!0);
                let o = setTimeout(() => {
                    t && t > 0 && a(!1);
                }, t);
                e.forEach((t) => {
                    (0, n.WD)(t).then(() => {
                        --_ || (clearTimeout(o), a(!0));
                    }, r);
                });
            });
        }
    };
}
