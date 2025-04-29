n.d(t, { s: () => E }), n(388685);
var r = n(200651),
    i = n(192379),
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
    _ = n(388032),
    v = n(706442),
    O = n(777091);
let C = (e, t) => {
        let n = null != t && !t.isPreview;
        return e ? (e && !n ? 'no-wallpaper-nitro' : 'has-wallpaper-nitro') : 'non-nitro';
    },
    j = (e) => ('has-wallpaper-nitro' === e ? _.intl.string(_.t.T9dXPj) : _.intl.string(_.t.zyvzQ0)),
    S = (e) => {
        switch (e) {
            case 'non-nitro':
                return _.intl.string(_.t.VU8fxM);
            case 'no-wallpaper-nitro':
                return _.intl.string(_.t.BQBNjY);
            case 'has-wallpaper-nitro':
                return _.intl.string(_.t.eZMxlZ);
        }
    },
    E = (e) => {
        let { children: t, channelId: n, selectedChannelId: E } = e,
            x = (0, a.wE)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            P = (0, l.e7)([d.Z], () => d.Z.getLayers().includes(m.S9g.USER_SETTINGS)),
            I = E === n,
            { canAccessPicker: w, entryPoint: N } = (0, p.m)({
                location: 'ChatWallpaperDMListCoachmark',
                selectedChannelId: E
            }),
            Z = N === h.FN.CONTEXT_MENU,
            [T, A] = (0, c.US)(x && Z && I && w && !P ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            R = (0, u.m)(y.p9.TIER_2),
            D = (0, f.Z)(n),
            L = T === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
            k = (0, i.useRef)(null),
            M = (0, i.useRef)(null),
            [U, G] = (0, i.useState)(g.U.TOP);
        if (
            ((0, i.useLayoutEffect)(() => {
                if (null === k.current) return;
                let e = () => {
                    var e, t, n;
                    let r = null == (e = k.current) ? void 0 : e.getBoundingClientRect();
                    if (null == r) return;
                    let i = null != (n = null == (t = M.current) ? void 0 : t.getBoundingClientRect().height) ? n : 0;
                    window.innerHeight - r.bottom < i ? G(g.U.BOTTOM) : G(g.U.TOP);
                };
                return e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e);
            }, [L]),
            !L)
        )
            return t;
        let B = () => {
                A(b.L.USER_DISMISS);
            },
            V = C(R, null != D ? D : null),
            H = j(V),
            F = S(V);
        return (0, r.jsx)('div', {
            ref: k,
            children: (0, r.jsx)(s.yRy, {
                align: U,
                position: 'right',
                shouldShow: L,
                onRequestClose: B,
                renderPopout: () =>
                    (0, r.jsx)(g.Z, {
                        ref: M,
                        onClose: B,
                        buttonText: _.intl.string(_.t['+IrDzM']),
                        header: H,
                        art: (0, r.jsx)('img', {
                            src: O.Z,
                            alt: '',
                            className: v.chatWallpaperDMListCoachmarkArt
                        }),
                        body: F,
                        align: U
                    }),
                children: () => t
            })
        });
    };
