n.d(t, { k: () => m }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(119617),
    s = n(40851),
    o = n(745510),
    l = n(661637),
    u = n(146128),
    c = n(981631);
let d = 1000 / 60,
    f = 24,
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
    p = ['#FFFFFF'],
    h = [n(123353), ...(0, l.Z)(['snowflake'])];
function m(e) {
    let { children: t } = e,
        [n, l] = r.useState(!1),
        m = (0, s.bp)(),
        [g, E] = r.useState(null),
        { confettiCanvas: v } = r.useContext(o.h),
        y = (0, a.uR)(v, g),
        I = r.useMemo(
            () => ({
                triggerAnimation: () => l(!0),
                untriggerAnimation: () => l(!1)
            }),
            []
        ),
        b = r.useCallback(() => {
            let e = null == v ? void 0 : v.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            y.createConfetti({
                ..._,
                position: {
                    type: 'static-random',
                    minValue: {
                        x: -t.width / 2,
                        y: -f
                    },
                    maxValue: {
                        x: t.width,
                        y: -f
                    }
                }
            });
        }, [y, v]);
    return (r.useEffect(() => {
        let e = n ? setInterval(b, d) : null;
        return () => clearInterval(e);
    }, [n, b]),
    m === c.IlC.OVERLAY)
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsxs)(u.Rm.Provider, {
              value: I,
              children: [
                  t,
                  (0, i.jsx)(a.Ji, {
                      ref: E,
                      colors: p,
                      sprites: h,
                      spriteWidth: f,
                      spriteHeight: f
                  })
              ]
          });
}
