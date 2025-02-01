n.d(t, { Z: () => a });
var i = n(192379),
    r = n(723184);
let a = function (e) {
    var t = e.direction,
        n = (0, r.default)(
            {
                default: {
                    picker: {
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        transform: 'translate(-9px, -1px)',
                        backgroundColor: 'rgb(248, 248, 248)',
                        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
                    }
                },
                vertical: { picker: { transform: 'translate(-3px, -9px)' } }
            },
            { vertical: 'vertical' === t }
        );
    return i.createElement('div', { style: n.picker });
};
