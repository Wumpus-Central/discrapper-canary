n.d(t, { s: () => x }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    s = n(481060),
    a = n(605236),
    c = n(243778),
    u = n(612659),
    d = n(819640),
    h = n(436952),
    p = n(54480),
    f = n(680783),
    g = n(13186),
    m = n(981631),
    b = n(921944),
    y = n(474936),
    O = n(388032),
    v = n(706442),
    _ = n(777091);
let C = (e, t) => {
        let n = null != t && !t.isPreview;
        return e ? (e && !n ? 'no-wallpaper-nitro' : 'has-wallpaper-nitro') : 'non-nitro';
    },
    j = (e) => ('has-wallpaper-nitro' === e ? O.intl.string(O.t.T9dXPj) : O.intl.string(O.t.zyvzQ0)),
    S = (e) => {
        switch (e) {
            case 'non-nitro':
                return O.intl.string(O.t.VU8fxM);
            case 'no-wallpaper-nitro':
                return O.intl.string(O.t.BQBNjY);
            case 'has-wallpaper-nitro':
                return O.intl.string(O.t.eZMxlZ);
        }
    },
    x = (e) => {
        let { children: t, channelId: n, selectedChannelId: x } = e,
            E = (0, a.wE)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            P = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(m.S9g.USER_SETTINGS)),
            I = x === n,
            { canAccessPicker: w, entryPoint: N } = (0, p.m)({
                location: 'ChatWallpaperDMListCoachmark',
                selectedChannelId: x
            }),
            Z = N === h.FN.CONTEXT_MENU,
            [T, A] = (0, c.US)(E && Z && I && w && !P ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            R = (0, u.m)(y.p9.TIER_2),
            D = (0, f.Z)(n),
            L = T === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
            M = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            U = (0, i.useRef)(null),
            [G, B] = (0, i.useState)(g.U.TOP);
        if (
            ((0, i.useLayoutEffect)(() => {
                if (null === M.current) return;
                let e = () => {
                    var e, t, n;
                    let r = null == (e = M.current) ? void 0 : e.getBoundingClientRect();
                    if (null == r) return;
                    let i = null != (n = null == (t = U.current) ? void 0 : t.getBoundingClientRect().height) ? n : 0;
                    window.innerHeight - r.bottom < i ? B(g.U.BOTTOM) : B(g.U.TOP);
                };
                return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [L]),
            !L)
        )
            return t;
        let V = () => {
                A(b.L.USER_DISMISS);
            },
            H = C(R, null != D ? D : null),
            F = j(H),
            z = S(H);
        return (0, r.jsx)('div', {
            ref: M,
            children: (0, r.jsx)(s.yRy, {
                targetElementRef: k,
                align: G,
                position: 'right',
                shouldShow: L,
                onRequestClose: V,
                renderPopout: () =>
                    (0, r.jsx)(g.Z, {
                        ref: U,
                        onClose: V,
                        buttonText: O.intl.string(O.t['+IrDzM']),
                        header: F,
                        art: (0, r.jsx)('img', {
                            src: _.Z,
                            alt: '',
                            className: v.chatWallpaperDMListCoachmarkArt
                        }),
                        body: z,
                        align: G
                    }),
                children: () => (0, i.cloneElement)(t, { ref: k })
            })
        });
    };
