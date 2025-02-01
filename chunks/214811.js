n.d(t, { Z: () => o });
var i = n(192379),
    r = n(723184),
    a = n(329022),
    s = n(730320);
let o = function (e) {
    var t = e.onClick,
        n = e.onSwatchHover,
        o = e.group,
        l = e.active,
        u = (0, r.default)({
            default: {
                group: {
                    paddingBottom: '10px',
                    width: '40px',
                    float: 'left',
                    marginRight: '10px'
                }
            }
        });
    return i.createElement(
        'div',
        { style: u.group },
        (0, a.Z)(o, function (e, r) {
            return i.createElement(s.Z, {
                key: e,
                color: e,
                active: e.toLowerCase() === l,
                first: 0 === r,
                last: r === o.length - 1,
                onClick: t,
                onSwatchHover: n
            });
        })
    );
};
