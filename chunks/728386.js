n.d(t, { Z: () => v }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(788347),
    l = n(532772),
    c = n(570220),
    u = n(540059),
    d = n(28546),
    f = n(443603),
    _ = n(957825),
    p = n(388032),
    h = n(302195);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t) {
    let { disabled: n, type: o } = e,
        [m, E] = (0, d.Iu)((e) => [e.activeView, e.pickerId], s.X),
        y = i.useContext(c.ZP),
        v = !1,
        [O, I] = i.useState(!1),
        S = m === _.X1.STICKER,
        T = !1,
        N = i.useCallback(() => {
            (0, d.RO)(_.X1.STICKER, o);
        }, [o]);
    i.useEffect(() => {
        let e = () => {
                requestAnimationFrame(() => {
                    I(!0);
                });
            },
            t = () => {
                requestAnimationFrame(() => {
                    I(!1);
                });
            };
        return (
            y.addListener('sticker-suggestions-shown', e),
            y.addListener('sticker-suggestions-hidden', t),
            () => {
                y.removeListener('sticker-suggestions-shown', e), y.removeListener('sticker-suggestions-hidden', t);
            }
        );
    }, [y]);
    let { Component: A, events: C, play: R } = (0, l.z)(),
        P = (0, u.Q3)('ChannelStickerPickerButton');
    if (n) return null;
    let w = O;
    return (0, r.jsx)('div', {
        className: a()(_.CT, h.buttonContainer),
        ref: t,
        children: (0, r.jsx)(
            f.Z,
            b(g({ innerClassName: a()(h.button, h.stickerButton, { [h.stickerButtonTilted]: w && !S }) }, C), {
                onClick: () => {
                    N(), R();
                },
                isActive: S,
                'aria-label': p.NW.string(p.t.rZpidX),
                'aria-expanded': S,
                'aria-haspopup': 'dialog',
                'aria-controls': E,
                sparkle: v,
                notification: T ? f.j.UPDATE : null,
                children: (0, r.jsx)(A, {
                    size: P ? 'refresh_sm' : void 0,
                    color: 'currentColor'
                })
            })
        )
    });
}
let v = i.memo(i.forwardRef(y));
