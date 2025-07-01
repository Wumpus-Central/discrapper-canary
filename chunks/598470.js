a.d(e, { x: () => n });
var r = a(116698),
    _ = a(928541);
function n(t) {
    let e = [];
    function a(t) {
        return e.splice(e.indexOf(t), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: e,
        add: function (n) {
            if (!(void 0 === t || e.length < t)) return (0, _.$2)(new r.b('Not adding Promise because buffer limit was reached.'));
            let o = n();
            return (-1 === e.indexOf(o) && e.push(o), o.then(() => a(o)).then(null, () => a(o).then(null, () => {})), o);
        },
        drain: function (t) {
            return new _.cW((a, r) => {
                let n = e.length;
                if (!n) return a(!0);
                let o = setTimeout(() => {
                    t && t > 0 && a(!1);
                }, t);
                e.forEach((t) => {
                    (0, _.WD)(t).then(() => {
                        --n || (clearTimeout(o), a(!0));
                    }, r);
                });
            });
        }
    };
}
