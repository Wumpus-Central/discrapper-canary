var i = r(192379),
    a = r(723184),
    o = function (e) {
        var n = e.onClick,
            r = e.label,
            o = e.children,
            s = e.active,
            l = (0, a.default)(
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
                style: l.button,
                onClick: n
            },
            r || o
        );
    };
n.C = o;
