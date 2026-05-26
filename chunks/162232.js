i.d(t, { A: () => c });
var e = i(627968);
i(64700);
var r = i(97808),
    n = i(778712),
    s = i(854627),
    l = i(19575),
    d = i(375708);
let u = l.Ay.getEnableHardwareAcceleration() ? r.Js : r.eu,
    c = (a) => {
        let {
                user: t,
                guildId: i,
                avatarDecorationOverride: r,
                status: l,
                avatarSize: c = n._3.SIZE_120,
                "aria-hidden": o = !1,
                className: h,
                animateOnHover: p = !1,
                questPreviewRewardAssetUrl: g = null,
                decorationName: _,
            } = a,
            {
                avatarDecorationSrc: b,
                avatarSrc: k,
                eventHandlers: w,
            } = (0, s.A)({
                userId: t.id,
                guildId: i,
                size: c,
                showPending: !0,
                avatarDecorationOverride: r,
                animateOnHover: p,
            }),
            x = (() => {
                if (!o)
                    return "string" == typeof _
                        ? d.intl.formatToPlainString(d.t.Do2lxE, { a11y_text: _ })
                        : null === _
                          ? d.intl.string(d.t["7hRBmC"])
                          : d.intl.string(d.t.lqaIxI);
            })();
        return (0, e.jsx)(u, {
            avatarDecoration: b ?? g,
            src: k,
            size: c,
            status: l,
            "aria-label": x,
            "aria-hidden": o,
            className: h,
            ...w,
        });
    };
