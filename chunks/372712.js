n.d(t, { Z: () => l });
var r = n(192379),
    i = n(723184),
    o = n(476400),
    a = n.n(o),
    s = function (e) {
        var t = (0, i.default)({
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
        return r.createElement('div', { style: t.picker });
    };
(s.propTypes = {
    hsl: a().shape({
        h: a().number,
        s: a().number,
        l: a().number,
        a: a().number
    })
}),
    (s.defaultProps = {
        hsl: {
            a: 1,
            h: 249.94,
            l: 0.2,
            s: 0.5
        }
    });
let l = s;
