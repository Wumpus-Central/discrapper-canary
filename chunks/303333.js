n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(397927),
    r = n(743674),
    o = n(888697),
    d = n(581007),
    c = n(522435),
    u = n(493819),
    h = n(722884),
    A = n(148690),
    _ = n(985018),
    m = n(591454);
function g(e) {
    let { channel: t, imageUrl: n, animatedUrl: d, canModifyHangout: c } = e,
        g = (0, r.S)(n),
        p = l.useCallback(() => {
            (0, h.A)({ channel: t });
        }, [t]),
        f = l.useCallback(() => {
            (0, o.e2)(t.id);
        }, [t.id]);
    return (0, i.jsxs)("div", {
        className: m.rs,
        children: [
            (0, i.jsx)("div", {
                className: m.ZS,
                style: null != g ? { backgroundColor: g } : void 0,
                children: (0, i.jsx)(u.A, { imageUrl: n, animatedUrl: d, className: m.Sl }),
            }),
            c
                ? (0, i.jsxs)("div", {
                      className: m.n_,
                      children: [
                          (0, i.jsx)(s.m, {
                              text: _.intl.string(A.default.XJ4UpB),
                              children: (0, i.jsx)(a.DUT, {
                                  className: m.HF,
                                  onClick: p,
                                  children: (0, i.jsx)(a.R2l, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, i.jsx)(s.m, {
                              text: _.intl.string(A.default.XV4qT6),
                              children: (0, i.jsx)(a.DUT, {
                                  className: m.HF,
                                  onClick: f,
                                  children: (0, i.jsx)(a.ucK, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function p(e) {
    let { channel: t } = e,
        n = l.useCallback(() => {
            (0, h.A)({ channel: t });
        }, [t]);
    return (0, i.jsx)("div", {
        className: m._o,
        children: (0, i.jsxs)(a.DUT, {
            className: m.hH,
            onClick: n,
            children: [
                (0, i.jsx)(a.XGR, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(a.Text, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: _.intl.string(A.default.NGcIOF),
                }),
            ],
        }),
    });
}
function f(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: s } = (0, d.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        a = (0, c.W6)(t),
        r = n && a,
        o = t.voiceHangout,
        u = o?.banner_hash,
        h = l.useMemo(
            () => (null == u || null == t.guild_id ? null : (0, c.Sq)({ guildId: t.guild_id, bannerHash: u })),
            [t.guild_id, u],
        );
    return s
        ? null != h
            ? (0, i.jsx)(g, { channel: t, imageUrl: h.imageUrl, animatedUrl: h.animatedUrl, canModifyHangout: r })
            : r
              ? (0, i.jsx)(p, { channel: t })
              : null
        : null;
}
