r.d(e, {
    default: () => d,
});
var n = r(627968),
    l = r(23339),
    o = r(158954),
    i = r(975571),
    a = r(307600),
    p = r(665171),
    s = r(800007),
    c = r(652215),
    u = r(294726),
    f = r(985018);

function d(t) {
    let { provider: e, onAccept: r } = t,
        d = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                l,
                o = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(t); l < r.length; l++)
                    (n = r[l]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
                return o;
            }
            if (
                ((o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        l = {},
                        o = Object.getOwnPropertyNames(t);
                    for (n = 0; n < o.length; n++)
                        (r = o[n]),
                            !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (l[r] = t[r]);
                    return l;
                })(t, e)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(t); l < r.length; l++)
                    (n = r[l]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            return o;
        })(t, ["provider", "onAccept"]);
    return (0, n.jsx)(o.Modal, {
        title: f.intl.string(u.default.ny8Szd),
        subtitle: f.intl.format(u.default.D3STVx, {
            provider: (0, l.$G)(e),
            providerUrl: () =>
                (0, a.h)({
                    href: s.eh[e],
                }),
            helpCenterUrl: i.A.getArticleURL(c.MVz.GAME_SERVER_HOSTING),
        }),
        size: "md",
        actions: [
            {
                text: f.intl.string(f.t["/g10LC"]),
                onClick: d.onClose,
                variant: "secondary",
            },
            {
                text: f.intl.string(u.default.K1xIXf),
                onClick: () => {
                    (0, p.Wp)(!0, e), null == r || r(), d.onClose();
                },
                variant: "primary",
            },
        ],
        transitionState: d.transitionState,
        onClose: d.onClose,
    });
}
