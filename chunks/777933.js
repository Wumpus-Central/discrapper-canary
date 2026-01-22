n.d(t, { A: () => g }), n(747238), n(812715), n(321073), n(896048);
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(803316),
    s = n(207133),
    a = n(155078),
    o = n(954571),
    u = n(307600),
    c = n(723702),
    d = n(837921),
    E = n(179581),
    A = n(652215),
    f = n(985018);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let D = /^(tel|sms|mailto):([^?;]+)/;
function g(e, t, n, g) {
    let p = (0, s.A)(null == n ? void 0 : n.getChannelId());
    if (
        !c.isPlatformEmbedded ||
        null == e ||
        "" === e ||
        p ||
        (null == g ? void 0 : g.shouldHideMediaOptions) === !0 ||
        !(0, r.fW)(e)
    )
        return null;
    let _ = (0, a.E)(e),
        S = (e) => {
            o.default.track(A.HAw.CONTEXT_MENU_LINK_COPIED, m({ hostname: _ }, (0, E.N)())),
                d.Ay.copy(e),
                (0, l.showToast)((0, l.createToast)(f.intl.string(f.t["L/PwZf"]), l.ToastType.SUCCESS));
        },
        I = (n, i) => {
            let l = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(A.HAw.CONTEXT_MENU_LINK_OPENED, m({ hostname: _ }, (0, E.N)())),
                (0, u.h)(
                    {
                        href: l,
                        trusted: (0, u.m)(e, t),
                        shouldConfirm: !0,
                    },
                    n,
                );
        },
        N = [],
        h = e.match(D);
    if (null != h) {
        let e = f.intl.string("mailto" === h[1] ? f.t.ZYLVKo : f.t["3zozoR"]);
        N.push(
            (0, i.jsx)(
                l.Drp,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        S(h[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === h[1] &&
                N.push(
                    (0, i.jsx)(
                        l.Drp,
                        {
                            id: "native-send-sms",
                            label: f.intl.string(f.t["+wbjMW"]),
                            action: (e) => I(e, !0),
                        },
                        "native-send-sms",
                    ),
                );
    }
    return [
        (0, i.jsx)(
            l.Drp,
            {
                id: "copy-native-link",
                label: f.intl.string(f.t.WqhZss),
                action: () => {
                    S(e);
                },
            },
            "copy-native-link",
        ),
        ...N,
        (0, i.jsx)(
            l.Drp,
            {
                id: "open-native-link",
                label: f.intl.string(f.t.wuRE8M),
                action: (e) => I(e),
            },
            "open-native-link",
        ),
    ];
}
