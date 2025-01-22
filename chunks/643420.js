r.d(n, {
    k: function () {
        return E;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(119617),
    l = r(40851),
    u = r(745510),
    c = r(661637),
    d = r(146128),
    f = r(981631);
let p = 1000 / 60,
    h = 24,
    _ = {
        velocity: {
            type: 'static-random',
            minValue: {
                x: 8,
                y: 0
            },
            maxValue: {
                x: 50,
                y: 0
            }
        },
        rotation: {
            type: 'linear-random',
            minValue: {
                x: 0,
                y: 0,
                z: 0
            },
            maxValue: {
                x: 0,
                y: 0,
                z: 360
            },
            minAddValue: {
                x: 0,
                y: 0,
                z: -5
            },
            maxAddValue: {
                x: 0,
                y: 0,
                z: 5
            }
        },
        size: {
            type: 'static-random',
            minValue: 2,
            maxValue: 24,
            uniformVectorValues: !0
        },
        dragCoefficient: {
            type: 'static',
            value: 0.8
        },
        opacity: {
            type: 'static-random',
            minValue: 0.7,
            maxValue: 0.5
        }
    },
    m = ['#FFFFFF'],
    g = [r(123353), ...(0, c.Z)(['snowflake'])];
function E(e) {
    let { children: n } = e,
        [r, i] = o.useState(!1),
        c = (0, l.bp)(),
        [E, v] = o.useState(null),
        { confettiCanvas: y } = o.useContext(u.h),
        b = (0, s.uR)(y, E),
        I = o.useMemo(
            () => ({
                triggerAnimation: () => i(!0),
                untriggerAnimation: () => i(!1)
            }),
            []
        ),
        T = o.useCallback(() => {
            let e = null == y ? void 0 : y.getCanvas();
            if (null == e) return;
            let n = e.getBoundingClientRect();
            b.createConfetti({
                ..._,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -n.width / 2,
                        y: -h
                    },
                    maxValue: {
                        x: n.width,
                        y: -h
                    }
                }
            });
        }, [b, y]);
    return (o.useEffect(() => {
        let e = r ? setInterval(T, p) : null;
        return () => clearInterval(e);
    }, [r, T]),
    c === f.IlC.OVERLAY)
        ? (0, a.jsx)(a.Fragment, { children: n })
        : (0, a.jsxs)(d.Rm.Provider, {
              value: I,
              children: [
                  n,
                  (0, a.jsx)(s.Ji, {
                      ref: v,
                      colors: m,
                      sprites: g,
                      spriteWidth: h,
                      spriteHeight: h
                  })
              ]
          });
}
