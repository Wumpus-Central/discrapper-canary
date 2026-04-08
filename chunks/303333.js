n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(990078),
    d = n(397927),
    c = n(309698),
    u = n(262763),
    h = n(743674),
    A = n(888697),
    _ = n(581007),
    m = n(522435),
    g = n(493819),
    p = n(722884),
    f = n(148690),
    x = n(985018),
    E = n(591454);
function I(e) {
    let { channel: t, imageUrl: n, isConnected: s } = e,
        r = (0, h.S)(n),
        c = l.useCallback(() => {
            (0, p.A)({ channel: t });
        }, [t]),
        _ = l.useCallback(() => {
            (0, A.e)(t.id);
        }, [t.id]),
        m = l.useCallback(() => {
            u.A.handleVoiceConnect({ channel: t, connected: !1, needSubscriptionToAccess: !1 });
        }, [t]),
        I = null != r ? { backgroundColor: r } : void 0;
    return (0, i.jsxs)("div", {
        className: E.rs,
        children: [
            s
                ? (0, i.jsx)("div", {
                      className: E.ZS,
                      style: I,
                      children: (0, i.jsx)(g.A, { src: n, className: E.Sl }),
                  })
                : (0, i.jsx)(d.DUT, {
                      className: a()(E.ZS, E.jI),
                      style: I,
                      onClick: m,
                      children: (0, i.jsx)(g.A, { src: n, className: E.Sl }),
                  }),
            s
                ? (0, i.jsxs)("div", {
                      className: E.n_,
                      children: [
                          (0, i.jsx)(o.m, {
                              text: x.intl.string(f.default.XJ4UpB),
                              children: (0, i.jsx)(d.DUT, {
                                  className: E.HF,
                                  onClick: c,
                                  children: (0, i.jsx)(d.R2l, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, i.jsx)(o.m, {
                              text: x.intl.string(f.default.XV4qT6),
                              children: (0, i.jsx)(d.DUT, {
                                  className: E.HF,
                                  onClick: _,
                                  children: (0, i.jsx)(d.ucK, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function C(e) {
    let { channel: t } = e,
        n = l.useCallback(() => {
            (0, p.A)({ channel: t });
        }, [t]);
    return (0, i.jsx)("div", {
        className: E._o,
        children: (0, i.jsxs)(d.DUT, {
            className: E.hH,
            onClick: n,
            children: [
                (0, i.jsx)(d.XGR, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(d.Text, {
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
        { enableHangoutWindow: s } = (0, _.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        a = (0, r.bG)([c.A], () => c.A.getChannelStatus(t), [t]),
        o = l.useMemo(() => (0, m.TP)(a), [a]),
        d = l.useMemo(() => (null == a ? null : (0, m.K7)(a)), [a]);
    return s
        ? null != a && o && null != d
            ? (0, i.jsx)(I, { channel: t, imageUrl: d, isConnected: n })
            : n
              ? (0, i.jsx)(C, { channel: t })
              : null
        : null;
}
