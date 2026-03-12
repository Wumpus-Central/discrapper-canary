"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(990078),
    r = n(397927),
    o = n(309698),
    c = n(888697),
    d = n(581007),
    u = n(522435),
    h = n(493819),
    A = n(722884),
    m = n(924804),
    p = n(985018),
    g = n(229320);
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
                    (0, i.jsx)(a.m, {
                        text: p.intl.string(m.default.XJ4UpB),
                        children: (0, i.jsx)(r.DUT, {
                            className: g.HF,
                            onClick: l,
                            children: (0, i.jsx)(r.R2l, { size: "xs", color: "currentColor" }),
                        }),
                    }),
                    (0, i.jsx)(a.m, {
                        text: p.intl.string(m.default.XV4qT6),
                        children: (0, i.jsx)(r.DUT, {
                            className: g.HF,
                            onClick: o,
                            children: (0, i.jsx)(r.ucK, { size: "xs", color: "currentColor" }),
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
        children: (0, i.jsxs)(r.DUT, {
            className: g.hH,
            onClick: n,
            children: [
                (0, i.jsx)(r.XGR, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(r.Text, {
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
        { enableHangoutWindow: a } = (0, d.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        r = (0, l.bG)([o.A], () => o.A.getChannelStatus(t), [t]),
        c = s.useMemo(() => (0, u.TP)(r), [r]),
        h = s.useMemo(() => (null == r ? null : (0, u.K7)(r)), [r]);
    return a
        ? null != r && c && null != h
            ? (0, i.jsx)(_, { channel: t, imageUrl: h })
            : n
              ? (0, i.jsx)(f, { channel: t })
              : null
        : null;
}
