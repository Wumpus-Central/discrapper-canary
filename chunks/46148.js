(n.d(t, { W: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(704215),
    s = n(481060),
    a = n(515753),
    c = n(266454),
    u = n(243778),
    d = n(612659),
    h = n(819640),
    p = n(436952),
    f = n(54480),
    g = n(680783),
    m = n(13186),
    b = n(981631),
    _ = n(921944),
    O = n(474936),
    y = n(388032),
    v = n(706442),
    C = n(777091);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let E = (e, t) => {
        let n = null != t && !t.isPreview;
        return e ? (e && !n ? 'no-wallpaper-nitro' : 'has-wallpaper-nitro') : 'non-nitro';
    },
    x = (e) => ('has-wallpaper-nitro' === e ? y.intl.string(y.t.T9dXPj) : y.intl.string(y.t.zyvzQ0)),
    S = (e) => {
        switch (e) {
            case 'non-nitro':
                return y.intl.string(y.t.VU8fxM);
            case 'no-wallpaper-nitro':
                return y.intl.string(y.t.BQBNjY);
            case 'has-wallpaper-nitro':
                return y.intl.string(y.t.eZMxlZ);
        }
    },
    I = i.memo(function (e) {
        let t = e.channel.id,
            n = e.selected,
            I = (0, c.Nj)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
            P = (0, l.e7)([h.Z], () => h.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
            { canAccessPicker: N, entryPoint: w } = (0, f.m)({
                location: 'ChatWallpaperDMListCoachmark',
                channelId: t
            }),
            Z = w === p.FN.CONTEXT_MENU,
            [T, A] = (0, u.US)(I && Z && n && N && !P ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
            R = (0, d.m)(O.p9.TIER_2),
            D = (0, g.Z)(t),
            L = T === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
            M = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            U = (0, i.useRef)(null),
            [G, B] = (0, i.useState)(m.U.TOP);
        if (
            ((0, i.useLayoutEffect)(() => {
                if (null === M.current) return;
                let e = () => {
                    var e, t, n;
                    let r = null == (e = M.current) ? void 0 : e.getBoundingClientRect();
                    if (null == r) return;
                    let i = null != (n = null == (t = U.current) ? void 0 : t.getBoundingClientRect().height) ? n : 0;
                    window.innerHeight - r.bottom < i ? B(m.U.BOTTOM) : B(m.U.TOP);
                };
                return (e(), window.addEventListener('resize', e), () => window.removeEventListener('resize', e));
            }, [L]),
            !L)
        )
            return (0, r.jsx)(a.ZP, j({}, e));
        let V = () => {
                A(_.L.USER_DISMISS);
            },
            F = E(R, null != D ? D : null),
            H = x(F),
            z = S(F);
        return (0, r.jsx)('div', {
            ref: M,
            children: (0, r.jsx)(s.yRy, {
                targetElementRef: k,
                align: G,
                position: 'right',
                shouldShow: L,
                onRequestClose: V,
                renderPopout: () =>
                    (0, r.jsx)(m.Z, {
                        ref: U,
                        onClose: V,
                        buttonText: y.intl.string(y.t['+IrDzM']),
                        header: H,
                        art: (0, r.jsx)('img', {
                            src: C.Z,
                            alt: '',
                            className: v.chatWallpaperDMListCoachmarkArt
                        }),
                        body: z,
                        align: G
                    }),
                children: (t) => {
                    var n, i;
                    return (0, r.jsx)(
                        a.ZP,
                        ((n = j({}, e)),
                        (i = i = { ref: k }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(i)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                              }),
                        n)
                    );
                }
            })
        });
    });
