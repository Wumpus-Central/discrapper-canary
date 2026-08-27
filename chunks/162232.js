i.d(a, { A: () => c });
var e = i(477900);
i(582128);
var r = i(97808),
    n = i(778712),
    s = i(854627),
    l = i(19575),
    d = i(375708);
let u = l.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    c = function (t) {
        let {
                user: a,
                guildId: i,
                avatarOverride: r,
                avatarDecorationOverride: l,
                status: c,
                avatarSize: o = n._3.SIZE_120,
                "aria-hidden": h = !1,
                className: p,
                animateOnHover: g = !1,
                questPreviewRewardAssetUrl: _ = null,
                decorationName: b,
            } = t,
            {
                avatarDecorationSrc: f,
                avatarSrc: k,
                eventHandlers: w,
            } = (0, s.A)({
                userId: a.id,
                guildId: i,
                size: o,
                showPending: !0,
                avatarOverride: r,
                avatarDecorationOverride: l,
                animateOnHover: g,
            }),
            x = (() => {
                if (!h)
                    return "string" == typeof b
                        ? d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: b })
                        : null === b
                          ? d.intl.string(d.t["7hRBmC"])
                          : d.intl.string(d.t.lqaIxI);
            })();
        return (0, e.jsx)(u, {
            avatarDecoration: f ?? _,
            src: k,
            size: o,
            status: c,
            "aria-label": x,
            "aria-hidden": h,
            className: p,
            ...w,
        });
    };
