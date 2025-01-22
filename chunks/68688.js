var i = r(192379),
    a = r(723184),
    o = function (e) {
        var n = e.direction,
            r = (0, a.default)(
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
                { vertical: 'vertical' === n }
            );
        return i.createElement('div', { style: r.picker });
    };
n.Z = o;
