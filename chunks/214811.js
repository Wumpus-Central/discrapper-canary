var i = r(192379),
    a = r(723184),
    o = r(329022),
    s = r(730320),
    l = function (e) {
        var n = e.onClick,
            r = e.onSwatchHover,
            l = e.group,
            u = e.active,
            c = (0, a.default)({
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
            { style: c.group },
            (0, o.Z)(l, function (e, a) {
                return i.createElement(s.Z, {
                    key: e,
                    color: e,
                    active: e.toLowerCase() === u,
                    first: 0 === a,
                    last: a === l.length - 1,
                    onClick: n,
                    onSwatchHover: r
                });
            })
        );
    };
n.Z = l;
