n.d(t, { s: () => C }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(481060),
    s = n(605236),
    a = n(243778),
    c = n(612659),
    u = n(436952),
    d = n(54480),
    h = n(680783),
    p = n(13186),
    f = n(921944),
    g = n(474936),
    m = n(388032),
    b = n(706442),
    _ = n(777091);
let y = (e, t) => {
        let n = null != t && !t.isPreview;
        return e ? (e && !n ? 'no-wallpaper-nitro' : 'has-wallpaper-nitro') : 'non-nitro';
    },
    v = (e) => ('has-wallpaper-nitro' === e ? m.NW.string(m.t.T9dXPj) : m.NW.string(m.t.zyvzQ0)),
    O = (e) => {
        switch (e) {
            case 'non-nitro':
                return m.NW.string(m.t.VU8fxM);
            case 'no-wallpaper-nitro':
                return m.NW.string(m.t.BQBNjY);
            case 'has-wallpaper-nitro':
                return m.NW.string(m.t.eZMxlZ);
        }
    },
    C = (e) => {
        let { children: t, channelId: n, selectedChannelId: C } = e,
            S = (0, s.wE)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            j = C === n,
            { canAccessPicker: E, entryPoint: x } = (0, d.m)({
                location: 'ChatWallpaperDMListCoachmark',
                selectedChannelId: C
            }),
            N = x === u.FN.CONTEXT_MENU,
            [I, P] = (0, a.US)(S && N && j && E ? [l.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            w = (0, c.m)(g.p9.TIER_2),
            Z = (0, h.Z)(n),
            T = I === l.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
            A = (0, i.useRef)(null),
            R = (0, i.useRef)(null),
            [D, L] = (0, i.useState)(p.U.TOP);
        if (
            ((0, i.useLayoutEffect)(() => {
                if (null === A.current) return;
                let e = () => {
                    var e, t, n;
                    let r = null == (e = A.current) ? void 0 : e.getBoundingClientRect();
                    if (null == r) return;
                    let i = null != (n = null == (t = R.current) ? void 0 : t.getBoundingClientRect().height) ? n : 0;
                    window.innerHeight - r.bottom < i ? L(p.U.BOTTOM) : L(p.U.TOP);
                };
                return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [T]),
            !T)
        )
            return t;
        let k = () => {
                P(f.L.USER_DISMISS);
            },
            M = y(w, null != Z ? Z : null),
            U = v(M),
            G = O(M);
        return (0, r.jsx)('div', {
            ref: A,
            children: (0, r.jsx)(o.yRy, {
                align: D,
                position: 'right',
                shouldShow: T,
                onRequestClose: k,
                renderPopout: () =>
                    (0, r.jsx)(p.Z, {
                        ref: R,
                        onClose: k,
                        buttonText: m.NW.string(m.t['+IrDzM']),
                        header: U,
                        art: (0, r.jsx)('img', {
                            src: _.Z,
                            alt: '',
                            className: b.chatWallpaperDMListCoachmarkArt
                        }),
                        body: G,
                        align: D
                    }),
                children: () => t
            })
        });
    };
