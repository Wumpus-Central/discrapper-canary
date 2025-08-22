n.d(t, { W: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(704215),
    a = n(481060),
    s = n(515753),
    c = n(266454),
    u = n(243778),
    d = n(612659),
    p = n(819640),
    h = n(436952),
    f = n(54480),
    g = n(680783),
    m = n(13186),
    b = n(981631),
    O = n(921944),
    y = n(474936),
    _ = n(388032),
    j = n(865696),
    v = n(777091);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let C = i.memo(function (e) {
    let t = e.channel.id,
        n = e.selected,
        C = (0, c.Nj)(o.z.CHAT_WALLPAPERS_PICKER_COACHMARK),
        E = (0, l.e7)([p.Z], () => p.Z.getLayers().includes(b.S9g.USER_SETTINGS)),
        { canAccessPicker: S, entryPoint: P } = (0, f.m)({
            location: "ChatWallpaperDMListCoachmark",
            channelId: t,
        }),
        I = P === h.FN.CONTEXT_MENU,
        [N, w] = (0, u.US)(C && I && n && S && !E ? [o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK] : []),
        Z = (0, d.m)(y.p9.TIER_2),
        T = (0, g.Z)(t),
        A = N === o.z.CHAT_WALLPAPERS_DM_LIST_COACHMARK,
        R = (0, i.useRef)(null),
        D = (0, i.useRef)(null),
        M = (0, i.useRef)(null),
        [L, k] = (0, i.useState)(m.U.TOP);
    if (
        ((0, i.useLayoutEffect)(() => {
            if (null === R.current) return;
            let e = () => {
                var e, t, n;
                let r = null == (e = R.current) ? void 0 : e.getBoundingClientRect();
                if (null == r) return;
                let i = null != (n = null == (t = M.current) ? void 0 : t.getBoundingClientRect().height) ? n : 0;
                window.innerHeight - r.bottom < i ? k(m.U.BOTTOM) : k(m.U.TOP);
            };
            return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, [A]),
        !A)
    )
        return (0, r.jsx)(s.ZP, x({}, e));
    let U = () => {
            w(O.L.USER_DISMISS);
        },
        G = ((e, t) => {
            let n = null != t && !t.isPreview;
            return e ? (e && !n ? "no-wallpaper-nitro" : "has-wallpaper-nitro") : "non-nitro";
        })(Z, null != T ? T : null),
        B = "has-wallpaper-nitro" === G ? _.intl.string(_.t.T9dXPj) : _.intl.string(_.t.zyvzQ0),
        F = ((e) => {
            switch (e) {
                case "non-nitro":
                    return _.intl.string(_.t.VU8fxM);
                case "no-wallpaper-nitro":
                    return _.intl.string(_.t.BQBNjY);
                case "has-wallpaper-nitro":
                    return _.intl.string(_.t.eZMxlZ);
            }
        })(G);
    return (0, r.jsx)("div", {
        ref: R,
        children: (0, r.jsx)(a.yRy, {
            targetElementRef: D,
            align: L,
            position: "right",
            shouldShow: A,
            onRequestClose: U,
            renderPopout: () =>
                (0, r.jsx)(m.Z, {
                    ref: M,
                    onClose: U,
                    buttonText: _.intl.string(_.t["+IrDzM"]),
                    header: B,
                    art: (0, r.jsx)("img", {
                        src: v.Z,
                        alt: "",
                        className: j.chatWallpaperDMListCoachmarkArt,
                    }),
                    body: F,
                    align: L,
                }),
            children: (t) => {
                var n, i;
                return (0, r.jsx)(
                    s.ZP,
                    ((n = x({}, e)),
                    (i = i = { ref: D }),
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
                    n),
                );
            },
        }),
    });
});
