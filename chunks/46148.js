n.d(t, { s: () => j }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(704215),
    o = n(481060),
    a = n(605236),
    s = n(243778),
    c = n(612659),
    u = n(436952),
    d = n(54480),
    p = n(680783),
    h = n(13186),
    f = n(921944),
    g = n(474936),
    m = n(388032),
    b = n(706442),
    y = n(777091);
let _ = (e, t) => {
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
    j = (e) => {
        let { children: t, channelId: n, selectedChannelId: j } = e,
            x = (0, a.wE)(l.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            C = j === n,
            { canAccessPicker: S, entryPoint: P } = (0, d.m)({
                location: 'ChatWallpaperDMListCoachmark',
                selectedChannelId: j
            }),
            I = P === u.FN.CONTEXT_MENU,
            [N, Z] = (0, s.US)(x && I && C && S ? [l.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            w = (0, c.m)(g.p9.TIER_2),
            E = (0, p.Z)(n),
            T = N === l.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
            A = (0, i.useRef)(null),
            D = (0, i.useRef)(null),
            [R, L] = (0, i.useState)(h.U.TOP);
        if (
            ((0, i.useLayoutEffect)(() => {
                if (null === A.current) return;
                let e = () => {
                    var e, t, n;
                    let r = null == (e = A.current) ? void 0 : e.getBoundingClientRect();
                    if (null == r) return;
                    let i = null != (n = null == (t = D.current) ? void 0 : t.getBoundingClientRect().height) ? n : 0;
                    window.innerHeight - r.bottom < i ? L(h.U.BOTTOM) : L(h.U.TOP);
                };
                return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [T]),
            !T)
        )
            return t;
        let k = () => {
                Z(f.L.USER_DISMISS);
            },
            M = _(w, null != E ? E : null),
            G = v(M),
            B = O(M);
        return (0, r.jsx)('div', {
            ref: A,
            children: (0, r.jsx)(o.yRy, {
                align: R,
                position: 'right',
                shouldShow: T,
                onRequestClose: k,
                renderPopout: () =>
                    (0, r.jsx)(h.Z, {
                        ref: D,
                        onClose: k,
                        buttonText: m.NW.string(m.t['+IrDzM']),
                        header: G,
                        art: (0, r.jsx)('img', {
                            src: y.Z,
                            alt: '',
                            className: b.chatWallpaperDMListCoachmarkArt
                        }),
                        body: B,
                        align: R
                    }),
                children: () => t
            })
        });
    };
