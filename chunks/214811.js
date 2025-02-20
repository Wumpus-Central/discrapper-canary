n.d(t, { Z: () => s });
var r = n(192379),
    i = n(723184),
    o = n(329022),
    a = n(730320);
let s = function (e) {
    var t = e.onClick,
        n = e.onSwatchHover,
        s = e.group,
        l = e.active,
        c = (0, i.default)({
            default: {
                group: {
                    paddingBottom: '10px',
                    width: '40px',
                    float: 'left',
                    marginRight: '10px'
                }
            }
        });
    return r.createElement(
        'div',
        { style: c.group },
        (0, o.Z)(s, function (e, i) {
            return r.createElement(a.Z, {
                key: e,
                color: e,
                active: e.toLowerCase() === l,
                first: 0 === i,
                last: i === s.length - 1,
                onClick: t,
                onSwatchHover: n
            });
        })
    );
};
