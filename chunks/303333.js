"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(990078),
    a = n(397927),
    o = n(309698),
    c = n(888697),
    d = n(581007),
    u = n(522435),
    h = n(493819),
    A = n(722884),
    m = n(148690),
    p = n(985018),
    g = n(72057);
function _(e) {
    let { channel: t, imageUrl: n } = e,
        l = s.useCallback(() => {
            (0, A.A)({ channel: t });
        }, [t]),
        o = s.useCallback(() => {
            (0, c.e)(t.id);
        }, [t.id]);
    return (0, i.jsxs)("div", {
        className: g.rs,
        children: [
            (0, i.jsx)("div", { className: g.ZS, children: (0, i.jsx)(h.A, { src: n, className: g.Sl }) }),
            (0, i.jsxs)("div", {
                className: g.n_,
                children: [
                    (0, i.jsx)(r.m, {
                        text: p.intl.string(m.default.XJ4UpB),
                        children: (0, i.jsx)(a.DUT, {
                            className: g.HF,
                            onClick: l,
                            children: (0, i.jsx)(a.R2l, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                    (0, i.jsx)(r.m, {
                        text: p.intl.string(m.default.XV4qT6),
                        children: (0, i.jsx)(a.DUT, {
                            className: g.HF,
                            onClick: o,
                            children: (0, i.jsx)(a.ucK, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            (0, A.A)({ channel: t });
        }, [t]);
    return (0, i.jsx)("div", {
        className: g._o,
        children: (0, i.jsxs)(a.DUT, {
            className: g.hH,
            onClick: n,
            children: [
                (0, i.jsx)(a.XGR, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: p.intl.string(m.default.NGcIOF),
                }),
            ],
        }),
    });
}
function x(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: r } = (0, d.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        a = (0, l.bG)([o.A], () => o.A.getChannelStatus(t), [t]),
        c = s.useMemo(() => (0, u.TP)(a), [a]),
        h = s.useMemo(() => (null == a ? null : (0, u.K7)(a)), [a]);
    return r
        ? null != a && c && null != h
            ? (0, i.jsx)(_, { channel: t, imageUrl: h })
            : n
              ? (0, i.jsx)(f, { channel: t })
              : null
        : null;
}
