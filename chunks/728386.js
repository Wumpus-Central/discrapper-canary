var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(232713),
    c = r(532772),
    d = r(570220),
    f = r(540059),
    _ = r(28546),
    h = r(443603),
    p = r(957825),
    m = r(388032),
    g = r(553796);
function E(e, n) {
    let { disabled: r, type: i } = e,
        [o, E] = (0, _.Iu)((e) => [e.activeView, e.pickerId], u.X),
        v = s.useContext(d.ZP),
        I = !1,
        [T, b] = s.useState(!1),
        y = o === p.X1.STICKER,
        S = !1,
        A = s.useCallback(() => {
            (0, _.RO)(p.X1.STICKER, i);
        }, [i]);
    s.useEffect(() => {
        let e = () => {
                requestAnimationFrame(() => {
                    b(!0);
                });
            },
            n = () => {
                requestAnimationFrame(() => {
                    b(!1);
                });
            };
        return (
            v.addListener('sticker-suggestions-shown', e),
            v.addListener('sticker-suggestions-hidden', n),
            () => {
                v.removeListener('sticker-suggestions-shown', e), v.removeListener('sticker-suggestions-hidden', n);
            }
        );
    }, [v]);
    let { Component: N, events: C, play: R } = (0, c.z)(),
        O = (0, f.Q3)('ChannelStickerPickerButton');
    if (r) return null;
    let D = T;
    return (0, a.jsx)('div', {
        className: l()(p.CT, g.buttonContainer),
        ref: n,
        children: (0, a.jsx)(h.Z, {
            innerClassName: l()(g.button, g.stickerButton, { [g.stickerButtonTilted]: D && !y }),
            ...C,
            onClick: () => {
                A(), R();
            },
            isActive: y,
            'aria-label': m.intl.string(m.t.rZpidX),
            'aria-expanded': y,
            'aria-haspopup': 'dialog',
            'aria-controls': E,
            sparkle: I,
            notification: S ? h.j.UPDATE : null,
            children: (0, a.jsx)(N, {
                size: O ? 'refresh_sm' : void 0,
                color: 'currentColor'
            })
        })
    });
}
n.Z = s.memo(s.forwardRef(E));
