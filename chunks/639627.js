r.d(n, {
    T: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(952265),
    s = r(813197);
let l = a.forwardRef(function (e, n) {
    let l = a.useRef(null);
    function u(n, a) {
        (0, o.ZD)(async () => {
            let { default: o } = await Promise.all([r.e('70687'), r.e('48017'), r.e('89517')]).then(r.bind(r, 850085));
            return (r) =>
                (0, i.jsx)(o, {
                    imgURI: n,
                    file: a,
                    onCrop: e.onChange,
                    ...r
                });
        });
    }
    return (
        a.useImperativeHandle(
            n,
            () => ({
                focus: () => null,
                activate: () => {
                    var e;
                    return null === (e = l.current) || void 0 === e || e.activateUploadDialogue(), !1;
                }
            }),
            []
        ),
        (0, i.jsx)('div', {
            style: { position: 'relative' },
            children: (0, i.jsx)(s.ZP, {
                ...e,
                ref: l,
                onChange: u
            })
        })
    );
});
