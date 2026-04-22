n.d(t, { A: () => C });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(939249),
    r = n(22231),
    o = n(241326),
    d = n(750943),
    c = n(834730),
    u = n(743674),
    h = n(888697),
    A = n(581007),
    _ = n(522435),
    m = n(493819),
    g = n(722884),
    p = n(746216),
    f = n(985018),
    E = n(289102);
function x(e) {
    let { channel: t, imageUrl: n, animatedUrl: d, canModifyHangout: c } = e,
        A = (0, u.S)(n),
        _ = l.useCallback(() => {
            (0, g.A)({ channel: t });
        }, [t]),
        x = l.useCallback(() => {
            (0, h.e2)(t.id);
        }, [t.id]);
    return (0, i.jsxs)("div", {
        className: E.rs,
        children: [
            (0, i.jsx)("div", {
                className: E.ZS,
                style: null != A ? { backgroundColor: A } : void 0,
                children: (0, i.jsx)(m.A, { imageUrl: n, animatedUrl: d, className: E.Sl }),
            }),
            c
                ? (0, i.jsxs)("div", {
                      className: E.n_,
                      children: [
                          (0, i.jsx)(s.m, {
                              text: f.intl.string(p.default.XJ4UpB),
                              children: (0, i.jsx)(a.D, {
                                  className: E.HF,
                                  onClick: _,
                                  children: (0, i.jsx)(r.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, i.jsx)(s.m, {
                              text: f.intl.string(p.default.XV4qT6),
                              children: (0, i.jsx)(a.D, {
                                  className: E.HF,
                                  onClick: x,
                                  children: (0, i.jsx)(o.u, { size: "xs", color: "currentColor" }),
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
        n = l.useCallback(() => {
            (0, g.A)({ channel: t });
        }, [t]);
    return (0, i.jsx)("div", {
        className: E._o,
        children: (0, i.jsxs)(a.D, {
            className: E.hH,
            onClick: n,
            children: [
                (0, i.jsx)(d.X, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(c.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: f.intl.string(p.default.NGcIOF),
                }),
            ],
        }),
    });
}
function C(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: s } = (0, A.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        a = (0, _.W6)(t),
        r = n && a,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = l.useMemo(
            () => (null == d || null == t.guild_id ? null : (0, _.Sq)({ guildId: t.guild_id, bannerHash: d })),
            [t.guild_id, d],
        );
    return s
        ? null != c
            ? (0, i.jsx)(x, { channel: t, imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, canModifyHangout: r })
            : r
              ? (0, i.jsx)(I, { channel: t })
              : null
        : null;
}
