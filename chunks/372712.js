n.d(t, { Z: () => l });
var i = n(192379),
    r = n(723184),
    a = n(476400),
    s = n.n(a),
    o = function (e) {
        var t = (0, r.default)({
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
        return i.createElement('div', { style: t.picker });
    };
(o.propTypes = {
    hsl: s().shape({
        h: s().number,
        s: s().number,
        l: s().number,
        a: s().number
    })
}),
    (o.defaultProps = {
        hsl: {
            a: 1,
            h: 249.94,
            l: 0.2,
            s: 0.5
        }
    });
let l = o;
