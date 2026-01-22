n.d(e, { A: () => b });
var l = n(627968);
n(64700);
var a = n(397927),
    r = n(182592),
    i = n(950191),
    o = n(718019),
    s = n(31432),
    u = n(915614),
    c = n(946356),
    d = n(810396),
    m = n(159218),
    f = n(562153),
    g = n(996988),
    p = n(985018),
    h = n(98167);
function b(t) {
    var e;
    let { user: n, previewText: b, previewEmoji: T, previewStatus: A, placeHolderText: y, transitionState: O } = t,
        S = (0, i.Ay)(n.id),
        j =
            (null != b && "" !== b) || null != T
                ? p.intl.formatToPlainString(p.t.UpF5Qa, {
                      emoji: null != (e = null == T ? void 0 : T.name) ? e : "",
                      status: b,
                  })
                : "".concat(p.intl.string(p.t.EVV6uZ), ": ").concat(y);
    return (0, l.jsx)("div", {
        role: "img",
        "aria-label": j,
        children: (0, l.jsxs)(c.A, {
            user: n,
            displayProfile: S,
            themeType: g.d.POPOUT,
            className: h.ti,
            "aria-hidden": "true",
            children: [
                (0, l.jsxs)("header", {
                    children: [
                        (0, l.jsx)(u.A, {
                            user: n,
                            displayProfile: S,
                            themeType: g.d.POPOUT,
                        }),
                        (0, l.jsx)("div", {
                            inert: !0,
                            children: (0, l.jsx)(o.A, {
                                user: n,
                                displayProfile: S,
                                themeType: g.d.POPOUT,
                                previewStatus: A,
                                className: h.my,
                            }),
                        }),
                        (0, l.jsx)(m.A, {
                            user: n,
                            themeType: g.d.POPOUT,
                            previewText: b,
                            previewEmoji: T,
                            placeholderText: y,
                            hasEntered: O === a.ip4.ENTERED,
                        }),
                    ],
                }),
                (null == S ? void 0 : S.profileEffect) != null && (0, l.jsx)(r.A, { skuId: S.profileEffect.skuId }),
                (0, l.jsx)("div", {
                    className: h.QV,
                    inert: !0,
                    children: (0, l.jsx)(d.A, {
                        user: n,
                        nickname: f.Ay.getName(null, null, n),
                        pronouns: null == S ? void 0 : S.pronouns,
                        tags: (0, l.jsx)(s.A, {
                            displayProfile: S,
                            themeType: g.d.POPOUT,
                        }),
                    }),
                }),
            ],
        }),
    });
}
