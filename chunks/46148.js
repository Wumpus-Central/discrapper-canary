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
    g = n(102695),
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
        let { children: t, channelId: n } = e,
            _ = (0, l.wE)(i.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            O = (0, u.sX)({ location: 'channel_context_menu' }).entryPoint === u.FN.CONTEXT_MENU,
            [j, x] = (0, a.US)(_ && O ? [i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            C = (0, c.m)(h.p9.TIER_2),
            S = (0, d.Z)(n);
        if (!j) return t;
        let P = j === i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
            I = () => {
                x(p.L.TAKE_ACTION);
            },
            N = () => {
                x(p.L.USER_DISMISS);
            },
            Z = b(C, null != S ? S : null),
            w = v(Z),
            E = y(Z);
        return (0, r.jsx)(o.yRy, {
            shouldShow: P,
            onRequestClose: N,
            renderPopout: () =>
                (0, r.jsx)(s.Z, {
                    onClose: N,
                    onDismissIconClick: N,
                    contentClassName: g.chatWallpaperDMListCoachmarkContent,
                    pointerClassName: g.chatWallpaperDMListCoachmarkPointer,
                    onTryFeature: I,
                    position: 'right',
                    align: 'top',
                    tryItText: f.NW.string(f.t['+IrDzM']),
                    header: w,
                    hideDismissButton: !0,
                    art: (0, r.jsx)('img', {
                        src: m.Z,
                        alt: '',
                        className: g.chatWallpaperDMListCoachmarkArt
                    }),
                    inlineArt: !0,
                    body: E,
                    dismissibleContent: i.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
                    tryItButtonColor: o.zxk.Colors.BRAND
                }),
            children: () => t
        });
    };
