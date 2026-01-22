n.d(e, {
    A: () => b,
}),
    n(747238),
    n(812715),
    n(321073),
    n(896048);
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(803316),
    a = n(207133),
    o = n(155078),
    c = n(954571),
    s = n(307600),
    u = n(723702),
    d = n(837921),
    p = n(179581),
    v = n(652215),
    f = n(985018);

function y(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
let E = /^(tel|sms|mailto):([^?;]+)/;

function b(t, e, n, b) {
    let g = (0, a.A)(null == n ? void 0 : n.getChannelId());
    if (
        !u.isPlatformEmbedded ||
        null == t ||
        "" === t ||
        g ||
        (null == b ? void 0 : b.shouldHideMediaOptions) === !0 ||
        !(0, i.fW)(t)
    )
        return null;
    let T = (0, o.E)(t),
        h = (t) => {
            c.default.track(
                v.HAw.CONTEXT_MENU_LINK_COPIED,
                y(
                    {
                        hostname: T,
                    },
                    (0, p.N)(),
                ),
            ),
                d.Ay.copy(t),
                (0, r.showToast)((0, r.createToast)(f.intl.string(f.t["L/PwZf"]), r.ToastType.SUCCESS));
        },
        m = (n, l) => {
            let r = !0 === l ? t.replace("tel:", "sms:") : t;
            c.default.track(
                v.HAw.CONTEXT_MENU_LINK_OPENED,
                y(
                    {
                        hostname: T,
                    },
                    (0, p.N)(),
                ),
            ),
                (0, s.h)(
                    {
                        href: r,
                        trusted: (0, s.m)(t, e),
                        shouldConfirm: !0,
                    },
                    n,
                );
        },
        O = [],
        _ = t.match(E);
    if (null != _) {
        let t = f.intl.string("mailto" === _[1] ? f.t.ZYLVKo : f.t["3zozoR"]);
        O.push(
            (0, l.jsx)(
                r.Drp,
                {
                    id: "copy-native-contact",
                    label: t,
                    action: () => {
                        h(_[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === _[1] &&
                O.push(
                    (0, l.jsx)(
                        r.Drp,
                        {
                            id: "native-send-sms",
                            label: f.intl.string(f.t["+wbjMW"]),
                            action: (t) => m(t, !0),
                        },
                        "native-send-sms",
                    ),
                );
    }
    return [
        (0, l.jsx)(
            r.Drp,
            {
                id: "copy-native-link",
                label: f.intl.string(f.t.WqhZss),
                action: () => {
                    h(t);
                },
            },
            "copy-native-link",
        ),
        ...O,
        (0, l.jsx)(
            r.Drp,
            {
                id: "open-native-link",
                label: f.intl.string(f.t.wuRE8M),
                action: (t) => m(t),
            },
            "open-native-link",
        ),
    ];
}
