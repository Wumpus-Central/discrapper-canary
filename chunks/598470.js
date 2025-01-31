a.d(e, { x: () => o });
var r = a(116698),
    n = a(928541);
function o(t) {
    let e = [];
    function a(t) {
        return e.splice(e.indexOf(t), 1)[0] || Promise.resolve(void 0);
    }
    return {
        $: e,
        add: function (o) {
            if (!(void 0 === t || e.length < t)) return (0, n.$2)(new r.b('Not adding Promise because buffer limit was reached.'));
            let _ = o();
            return -1 === e.indexOf(_) && e.push(_), _.then(() => a(_)).then(null, () => a(_).then(null, () => {})), _;
        },
        drain: function (t) {
            return new n.cW((a, r) => {
                let o = e.length;
                if (!o) return a(!0);
                let _ = setTimeout(() => {
                    t && t > 0 && a(!1);
                }, t);
                e.forEach((t) => {
                    (0, n.WD)(t).then(() => {
                        --o || (clearTimeout(_), a(!0));
                    }, r);
                });
            });
        }
    };
}
