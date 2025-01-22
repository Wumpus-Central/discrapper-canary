var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(232713),
    c = r(532772),
    d = r(570220),
    f = r(540059),
    p = r(28546),
    h = r(443603),
    _ = r(957825),
    m = r(388032),
    g = r(553796);
function E(e, n) {
    let { disabled: r, type: i } = e,
        [s, E] = (0, p.Iu)((e) => [e.activeView, e.pickerId], u.X),
        v = o.useContext(d.ZP),
        y = !1,
        [b, I] = o.useState(!1),
        T = s === _.X1.STICKER,
        S = !1,
        A = o.useCallback(() => {
            (0, p.RO)(_.X1.STICKER, i);
        }, [i]);
    o.useEffect(() => {
        let e = () => {
                requestAnimationFrame(() => {
                    I(!0);
                });
            },
            n = () => {
                requestAnimationFrame(() => {
                    I(!1);
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
    let { Component: C, events: N, play: R } = (0, c.z)(),
        O = (0, f.Q3)('ChannelStickerPickerButton');
    if (r) return null;
    let D = b;
    return (0, a.jsx)('div', {
        className: l()(_.CT, g.buttonContainer),
        ref: n,
        children: (0, a.jsx)(h.Z, {
            innerClassName: l()(g.button, g.stickerButton, { [g.stickerButtonTilted]: D && !T }),
            ...N,
            onClick: () => {
                A(), R();
            },
            isActive: T,
            'aria-label': m.intl.string(m.t.rZpidX),
            'aria-expanded': T,
            'aria-haspopup': 'dialog',
            'aria-controls': E,
            sparkle: y,
            notification: S ? h.j.UPDATE : null,
            children: (0, a.jsx)(C, {
                size: O ? 'refresh_sm' : void 0,
                color: 'currentColor'
            })
        })
    });
}
n.Z = o.memo(o.forwardRef(E));
