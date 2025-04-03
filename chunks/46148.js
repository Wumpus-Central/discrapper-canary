n.d(t, { s: () => O }), n(47120);
var r = n(200651),
    i = n(704215),
    l = n(481060),
    o = n(605236),
    a = n(243778),
    s = n(612659),
    c = n(436952),
    u = n(54480),
    d = n(680783),
    p = n(13186),
    h = n(921944),
    f = n(474936),
    g = n(388032),
    m = n(706442),
    b = n(777091);
let y = (e, t) => {
        let n = null != t && !t.isPreview;
        return e ? (e && !n ? 'no-wallpaper-nitro' : 'has-wallpaper-nitro') : 'non-nitro';
    },
    _ = (e) => ('has-wallpaper-nitro' === e ? g.NW.string(g.t.T9dXPj) : g.NW.string(g.t.zyvzQ0)),
    v = (e) => {
        switch (e) {
            case 'non-nitro':
                return g.NW.string(g.t.VU8fxM);
            case 'no-wallpaper-nitro':
                return g.NW.string(g.t.BQBNjY);
            case 'has-wallpaper-nitro':
                return g.NW.string(g.t.eZMxlZ);
        }
    },
    O = (e) => {
        let { children: t, channelId: n, selectedChannelId: O } = e,
            j = (0, o.wE)(i.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            x = O === n,
            { canAccessPicker: C, entryPoint: S } = (0, u.m)({
                location: 'ChatWallpaperDMListCoachmark',
                selectedChannelId: O
            }),
            P = S === c.FN.CONTEXT_MENU,
            [I, N] = (0, a.US)(j && P && x && C ? [i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            Z = (0, s.m)(f.p9.TIER_2),
            w = (0, d.Z)(n),
            E = I === i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK;
        if (!E) return t;
        let T = () => {
                N(h.L.USER_DISMISS);
            },
            A = y(Z, null != w ? w : null),
            D = _(A),
            R = v(A);
        return (0, r.jsx)(l.yRy, {
            shouldShow: E,
            onRequestClose: T,
            renderPopout: () =>
                (0, r.jsx)(p.Z, {
                    className: m.chatWallpaperDMListCoachmark,
                    onClose: T,
                    contentClassName: m.chatWallpaperDMListCoachmarkContent,
                    pointerClassName: m.chatWallpaperDMListCoachmarkPointer,
                    buttonText: g.NW.string(g.t['+IrDzM']),
                    header: D,
                    art: (0, r.jsx)('img', {
                        src: b.Z,
                        alt: '',
                        className: m.chatWallpaperDMListCoachmarkArt
                    }),
                    body: R
                }),
            children: () => t
        });
    };
