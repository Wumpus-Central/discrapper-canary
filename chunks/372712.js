r.d(t, { Z: () => s });
var n = r(192379),
    o = r(723184),
    a = r(476400),
    i = r.n(a),
    l = function (e) {
        var t = (0, o.default)({
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
        return n.createElement('div', { style: t.picker });
    };
(l.propTypes = {
    hsl: i().shape({
        h: i().number,
        s: i().number,
        l: i().number,
        a: i().number
    })
}),
    (l.defaultProps = {
        hsl: {
            a: 1,
            h: 249.94,
            l: 0.2,
            s: 0.5
        }
    });
let s = l;
