n.d(t, { A: () => v });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(265872),
    o = n(305866),
    d = n(22231),
    u = n(983851),
    c = n(834730),
    g = n(241326),
    m = n(565645),
    _ = n(287809),
    A = n(927578),
    h = n(536432),
    p = n(792348),
    x = n(674168),
    E = n(989799),
    T = n(69217),
    S = n(985018),
    f = n(902460);
function b(e) {
    let { onSelect: t } = e,
        [n, a] = s.useState(!1),
        u = (0, l.bG)([_.default], () => _.default.getCurrentUser()),
        c = A.Ay.canUseCustomCallSounds(u),
        g = s.useRef(null);
    function m(e) {
        c && (a(!1), t?.(e));
    }
    return (0, i.jsx)(r.Y, {
        targetElementRef: g,
        shouldShow: n,
        position: "left",
        onRequestClose: () => a(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(o.l, {
                children: (0, i.jsx)(E.A, {
                    suppressPlaySound: !0,
                    shouldShowLockedSounds: !1,
                    guildId: null,
                    channel: null,
                    onClose: t,
                    onSelect: m,
                    gridNotice: c ? null : (0, i.jsx)(x.m, {}),
                    analyticsSource: "call sounds edit setting",
                }),
            });
        },
        children: (e) =>
            (0, i.jsx)(T.dT, {
                ...e,
                ref: g,
                onClick: () => {
                    a(!n);
                },
                text: S.intl.string(S.t.uOe0Az),
                children: (0, i.jsx)(d.R, { size: "md", color: "currentColor", className: f.Wo }),
            }),
    });
}
function C(e) {
    let { sound: t } = e,
        { previewSound: n } = (0, p.A)(t, null),
        s =
            0 === (0, h.wH)()
                ? S.intl.string(S.t.OASXjt)
                : S.intl.formatToPlainString(S.t["/8fYO5"], { emojiName: t.emojiName, soundName: t.name });
    return (0, i.jsx)(T.dT, {
        onClick: n,
        text: s,
        children: (0, i.jsx)(u.H, { size: "md", color: "currentColor", className: f.wg }),
    });
}
function v(e) {
    let { sound: t, isGlobal: n, onSelect: s } = e,
        l = null != t,
        r = t?.emojiId,
        o = t?.emojiName,
        d = l && (null != o || null != r);
    return (0, i.jsxs)("div", {
        className: f.D6,
        children: [
            (0, i.jsxs)("div", {
                className: f.kL,
                children: [
                    d && (0, i.jsx)(m.A, { emojiId: r, emojiName: o, className: f.Zg }),
                    (0, i.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-strong",
                        className: f.dj,
                        children:
                            null == t
                                ? S.intl.string(S.t.PoWNfe)
                                : n
                                  ? S.intl.format(S.t.B6HU6O, {
                                        soundName: t.name,
                                        subtextHook: (e) =>
                                            (0, i.jsx)(c.E, {
                                                variant: "text-xs/medium",
                                                color: "text-default",
                                                tag: "span",
                                                children: e,
                                            }),
                                    })
                                  : t.name,
                    }),
                    l
                        ? (0, i.jsx)(C, { sound: t })
                        : (0, i.jsx)(u.H, { size: "md", color: "currentColor", className: f.Gk }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: f.kL,
                children: [
                    (0, i.jsx)(b, { onSelect: s }),
                    l &&
                        !n &&
                        (0, i.jsx)(T.dT, {
                            onClick: () => s(null),
                            text: S.intl.string(S.t.jmtcGA),
                            children: (0, i.jsx)(g.u, {
                                size: "md",
                                color: a.A.unsafe_rawColors.RED_400.css,
                                className: f.Wo,
                            }),
                        }),
                ],
            }),
        ],
    });
}
