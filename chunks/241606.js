n.d(t, { A: () => I });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(29540),
    o = n(481901),
    c = n(323384),
    d = n(922016),
    u = n(847374),
    h = n(246356),
    p = n(204651),
    m = n(75721),
    A = n(291706),
    f = n(77666),
    x = n(637443),
    g = n(389036),
    C = n(375708),
    y = n(270103),
    j = n(783842);
function I(e) {
    let { channel: t, returnsToRoom: n, className: a } = e,
        I = t.id,
        N = (0, m.WA)(t),
        v = (0, x.kM)(t),
        E = (0, m._f)(t),
        b = l.useRef(null),
        _ = n ? y.default.f7g0DK : C.t["3jrUBj"],
        T = C.intl.string(null == N ? g.default["2hwpCp"] : v ? _ : g.default["8FWvxm"]),
        S = { iconComponent: v ? (n ? r.u : o.d) : c.k, onClick: () => (0, A.s)(I), className: a };
    if (E && null != t.guild_id) {
        let e = t.guild_id;
        return (0, i.jsx)(d.Y, {
            targetElementRef: b,
            renderPopout: (t) => {
                let { closePopout: n } = t;
                return (0, i.jsx)(h.A, {
                    children: (0, i.jsx)(f.A, { channelId: I, guildId: e, selectedApplicationId: N, onClose: n }),
                });
            },
            align: "right",
            position: "bottom",
            animation: d.Y.Animation.FADE,
            spacing: 8,
            children: (e, t) => {
                let { onClick: n } = e,
                    { isShown: l } = t;
                return (0, i.jsxs)("div", {
                    ref: b,
                    className: s()(a, j.Zf, l && j.N9),
                    children: [
                        (0, i.jsx)(p.A, {
                            ...S,
                            className: j.UW,
                            onClick: null == N ? n : S.onClick,
                            onContextMenu: n,
                            label: T,
                        }),
                        (0, i.jsx)(p.A, {
                            iconComponent: u.a,
                            iconClassName: j.uV,
                            className: j.FH,
                            onClick: n,
                            shouldShowTooltip: !1,
                            "aria-label": C.intl.string(g.default["2hwpCp"]),
                        }),
                    ],
                });
            },
        });
    }
    return (0, i.jsx)("div", {
        className: s()(a, j.Zf),
        children: (0, i.jsx)(p.A, { ...S, className: j.Zb, label: T }),
    });
}
