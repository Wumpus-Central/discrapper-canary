n.d(t, { T: () => o });
var i = n(200651),
    r = n(192379),
    a = n(952265),
    s = n(813197);
let o = r.forwardRef(function (e, t) {
    let o = r.useRef(null);
    function l(t, r) {
        (0, a.ZD)(async () => {
            let { default: a } = await Promise.all([n.e('70687'), n.e('48017'), n.e('89517')]).then(n.bind(n, 850085));
            return (n) =>
                (0, i.jsx)(a, {
                    imgURI: t,
                    file: r,
                    onCrop: e.onChange,
                    ...n
                });
        });
    }
    return (
        r.useImperativeHandle(
            t,
            () => ({
                focus: () => null,
                activate: () => {
                    var e;
                    return null === (e = o.current) || void 0 === e || e.activateUploadDialogue(), !1;
                }
            }),
            []
        ),
        (0, i.jsx)('div', {
            style: { position: 'relative' },
            children: (0, i.jsx)(s.ZP, {
                ...e,
                ref: o,
                onChange: l
            })
        })
    );
});
