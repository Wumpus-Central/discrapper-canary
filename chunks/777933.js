n.d(t, {
    A: () => p,
}),
    n(747238),
    n(812715),
    n(321073),
    n(896048);
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(803316),
    r = n(207133),
    a = n(155078),
    o = n(954571),
    c = n(307600),
    d = n(723702),
    u = n(837921),
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
let g = /^(tel|sms|mailto):([^?;]+)/;

function p(e, t, n, p) {
    let D = (0, r.A)(null == n ? void 0 : n.getChannelId());
    if (
        !d.isPlatformEmbedded ||
        null == e ||
        "" === e ||
        D ||
        (null == p ? void 0 : p.shouldHideMediaOptions) === !0 ||
        !(0, s.fW)(e)
    )
        return null;
    let _ = (0, a.E)(e),
        S = (e) => {
            o.default.track(
                A.HAw.CONTEXT_MENU_LINK_COPIED,
                m(
                    {
                        hostname: _,
                    },
                    (0, E.N)(),
                ),
            ),
                u.Ay.copy(e),
                (0, l.showToast)((0, l.createToast)(f.intl.string(f.t["L/PwZf"]), l.ToastType.SUCCESS));
        },
        I = (n, i) => {
            let l = !0 === i ? e.replace("tel:", "sms:") : e;
            o.default.track(
                A.HAw.CONTEXT_MENU_LINK_OPENED,
                m(
                    {
                        hostname: _,
                    },
                    (0, E.N)(),
                ),
            ),
                (0, c.h)(
                    {
                        href: l,
                        trusted: (0, c.m)(e, t),
                        shouldConfirm: !0,
                    },
                    n,
                );
        },
        h = [],
        y = e.match(g);
    if (null != y) {
        let e = f.intl.string("mailto" === y[1] ? f.t.ZYLVKo : f.t["3zozoR"]);
        h.push(
            (0, i.jsx)(
                l.Drp,
                {
                    id: "copy-native-contact",
                    label: e,
                    action: () => {
                        S(y[2]);
                    },
                },
                "copy-native-contact",
            ),
        ),
            "tel" === y[1] &&
                h.push(
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
                leadingAccessory: {
                    type: "icon",
                    icon: l.qYV,
                },
                action: () => {
                    S(e);
                },
            },
            "copy-native-link",
        ),
        ...h,
        (0, i.jsx)(
            l.Drp,
            {
                id: "open-native-link",
                label: f.intl.string(f.t.wuRE8M),
                trailingIndicator: {
                    type: "icon",
                    icon: l.I9m,
                },
                action: (e) => I(e),
            },
            "open-native-link",
        ),
    ];
}
