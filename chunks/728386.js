n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(532772),
    u = n(570220),
    c = n(540059),
    d = n(28546),
    f = n(443603),
    _ = n(957825),
    p = n(388032),
    h = n(553796);
function m(e, t) {
    let { disabled: n, type: a } = e,
        [m, g] = (0, d.Iu)((e) => [e.activeView, e.pickerId], o.X),
        E = r.useContext(u.ZP),
        v = !1,
        [y, I] = r.useState(!1),
        b = m === _.X1.STICKER,
        T = !1,
        S = r.useCallback(() => {
            (0, d.RO)(_.X1.STICKER, a);
        }, [a]);
    r.useEffect(() => {
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
            E.addListener('sticker-suggestions-shown', e),
            E.addListener('sticker-suggestions-hidden', t),
            () => {
                E.removeListener('sticker-suggestions-shown', e), E.removeListener('sticker-suggestions-hidden', t);
            }
        );
    }, [E]);
    let { Component: A, events: N, play: C } = (0, l.z)(),
        R = (0, c.Q3)('ChannelStickerPickerButton');
    if (n) return null;
    let O = y;
    return (0, i.jsx)('div', {
        className: s()(_.CT, h.buttonContainer),
        ref: t,
        children: (0, i.jsx)(f.Z, {
            innerClassName: s()(h.button, h.stickerButton, { [h.stickerButtonTilted]: O && !b }),
            ...N,
            onClick: () => {
                S(), C();
            },
            isActive: b,
            'aria-label': p.intl.string(p.t.rZpidX),
            'aria-expanded': b,
            'aria-haspopup': 'dialog',
            'aria-controls': g,
            sparkle: v,
            notification: T ? f.j.UPDATE : null,
            children: (0, i.jsx)(A, {
                size: R ? 'refresh_sm' : void 0,
                color: 'currentColor'
            })
        })
    });
}
let g = r.memo(r.forwardRef(m));
