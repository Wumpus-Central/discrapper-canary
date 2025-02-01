n.d(t, { C: () => a });
var i = n(192379),
    r = n(723184);
let a = function (e) {
    var t = e.onClick,
        n = e.label,
        a = e.children,
        s = e.active,
        o = (0, r.default)(
            {
                default: {
                    button: {
                        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
                        border: '1px solid #878787',
                        borderRadius: '2px',
                        height: '20px',
                        boxShadow: '0 1px 0 0 #EAEAEA',
                        fontSize: '14px',
                        color: '#000',
                        lineHeight: '20px',
                        textAlign: 'center',
                        marginBottom: '10px',
                        cursor: 'pointer'
                    }
                },
                active: { button: { boxShadow: '0 0 0 1px #878787' } }
            },
            { active: s }
        );
    return i.createElement(
        'div',
        {
            style: o.button,
            onClick: t
        },
        n || a
    );
};
