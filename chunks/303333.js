"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(309698),
    u = n(262763),
    h = n(743674),
    A = n(888697),
    m = n(581007),
    _ = n(522435),
    p = n(493819),
    g = n(722884),
    f = n(924804),
    x = n(985018),
    E = n(73131);
function C(e) {
    let { channel: t, imageUrl: n, isConnected: l } = e,
        a = (0, h.S)(n),
        d = s.useCallback(() => {
            (0, g.A)({ channel: t });
        }, [t]),
        m = s.useCallback(() => {
            (0, A.e)(t.id);
        }, [t.id]),
        _ = s.useCallback(() => {
            u.A.handleVoiceConnect({ channel: t, connected: !1, needSubscriptionToAccess: !1 });
        }, [t]),
        C = null != a ? { backgroundColor: a } : void 0;
    return (0, i.jsxs)("div", {
        className: E.rs,
        children: [
            l
                ? (0, i.jsx)("div", {
                      className: E.ZS,
                      style: C,
                      children: (0, i.jsx)(p.A, { src: n, className: E.Sl }),
                  })
                : (0, i.jsx)(c.DUT, {
                      className: r()(E.ZS, E.jI),
                      style: C,
                      onClick: _,
                      children: (0, i.jsx)(p.A, { src: n, className: E.Sl }),
                  }),
            l
                ? (0, i.jsxs)("div", {
                      className: E.n_,
                      children: [
                          (0, i.jsx)(o.m, {
                              text: x.intl.string(f.default.XJ4UpB),
                              children: (0, i.jsx)(c.DUT, {
                                  className: E.HF,
                                  onClick: d,
                                  children: (0, i.jsx)(c.R2l, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, i.jsx)(o.m, {
                              text: x.intl.string(f.default.XV4qT6),
                              children: (0, i.jsx)(c.DUT, {
                                  className: E.HF,
                                  onClick: m,
                                  children: (0, i.jsx)(c.ucK, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function I(e) {
    let { channel: t } = e,
        n = s.useCallback(() => {
            (0, g.A)({ channel: t });
        }, [t]);
    return (0, i.jsx)("div", {
        className: E._o,
        children: (0, i.jsxs)(c.DUT, {
            className: E.hH,
            onClick: n,
            children: [
                (0, i.jsx)(c.XGR, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: x.intl.string(f.default.NGcIOF),
                }),
            ],
        }),
    });
}
function N(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: l } = (0, m.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        r = (0, a.bG)([d.A], () => d.A.getChannelStatus(t), [t]),
        o = s.useMemo(() => (0, _.TP)(r), [r]),
        c = s.useMemo(() => (null == r ? null : (0, _.K7)(r)), [r]);
    return l
        ? null != r && o && null != c
            ? (0, i.jsx)(C, { channel: t, imageUrl: c, isConnected: n })
            : n
              ? (0, i.jsx)(I, { channel: t })
              : null
        : null;
}
