n.d(t, { s: () => _ }), n(47120);
var r = n(200651),
    i = n(704215),
    o = n(481060),
    l = n(605236),
    a = n(243778),
    s = n(765585),
    c = n(612659),
    u = n(436952),
    d = n(680783),
    p = n(921944),
    h = n(474936),
    f = n(388032),
    g = n(817064),
    m = n(777091);
let b = (e, t) => {
        let n = null != t && !t.isPreview;
        return e ? (e && !n ? 'no-wallpaper-nitro' : 'has-wallpaper-nitro') : 'non-nitro';
    },
    v = (e) => ('has-wallpaper-nitro' === e ? f.NW.string(f.t.T9dXPj) : f.NW.string(f.t.zyvzQ0)),
    y = (e) => {
        switch (e) {
            case 'non-nitro':
                return f.NW.string(f.t.VU8fxM);
            case 'no-wallpaper-nitro':
                return f.NW.string(f.t.BQBNjY);
            case 'has-wallpaper-nitro':
                return f.NW.string(f.t.eZMxlZ);
        }
    },
    _ = (e) => {
        let { children: t, channelId: n, selectedChannelId: _ } = e,
            O = (0, l.wE)(i.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            j = (0, u.sX)({ location: 'channel_context_menu' }).entryPoint === u.FN.CONTEXT_MENU,
            x = _ === n,
            [C, S] = (0, a.US)(O && j && x ? [i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            P = (0, c.m)(h.p9.TIER_2),
            I = (0, d.Z)(n),
            N = C === i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK;
        if (!N) return t;
        let Z = () => {
                S(p.L.TAKE_ACTION);
            },
            w = () => {
                S(p.L.USER_DISMISS);
            },
            E = b(P, null != I ? I : null),
            T = v(E),
            A = y(E);
        return (0, r.jsx)(o.yRy, {
            shouldShow: N,
            onRequestClose: w,
            renderPopout: () =>
                (0, r.jsx)(s.Z, {
                    onClose: w,
                    onDismissIconClick: w,
                    contentClassName: g.chatWallpaperDMListCoachmarkContent,
                    pointerClassName: g.chatWallpaperDMListCoachmarkPointer,
                    onTryFeature: Z,
                    position: 'right',
                    align: 'top',
                    tryItText: f.NW.string(f.t['+IrDzM']),
                    header: T,
                    hideDismissButton: !0,
                    art: (0, r.jsx)('img', {
                        src: m.Z,
                        alt: '',
                        className: g.chatWallpaperDMListCoachmarkArt
                    }),
                    inlineArt: !0,
                    body: A,
                    dismissibleContent: i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
                    tryItButtonColor: o.zxk.Colors.BRAND
                }),
            children: () => t
        });
    };
