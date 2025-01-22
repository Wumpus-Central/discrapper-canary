var i = r(192379),
    a = r(723184),
    o = r(476400),
    s = r.n(o),
    l = function (e) {
        var n = (0, a.default)({
            default: {
                picker: {
                    width: '20px',
                    height: '20px',
                    borderRadius: '22px',
                    transform: 'translate(-10px, -7px)',
                    background: 'hsl(' + Math.round(e.hsl.h) + ', 100%, 50%)',
                    border: '2px white solid'
                }
            }
        });
        return i.createElement('div', { style: n.picker });
    };
(l.propTypes = {
    hsl: s().shape({
        h: s().number,
        s: s().number,
        l: s().number,
        a: s().number
    })
}),
    (l.defaultProps = {
        hsl: {
            a: 1,
            h: 249.94,
            l: 0.2,
            s: 0.5
        }
    }),
    (n.Z = l);
