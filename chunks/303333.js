n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    s = n(990078),
    a = n(939249),
    r = n(22231),
    o = n(241326),
    d = n(750943),
    c = n(834730),
    u = n(442433),
    h = n(743674),
    A = n(888697),
    _ = n(581007),
    m = n(522435),
    g = n(493819),
    p = n(722884),
    f = n(844045),
    E = n(985018),
    x = n(31950);
function I(e) {
    let { channel: t, imageUrl: d, animatedUrl: c, canModifyHangout: _ } = e,
        I = (0, h.S)(d),
        C = (0, m.je)(t),
        b = l.useCallback(() => {
            (0, p.A)({ channel: t });
        }, [t]),
        N = l.useCallback(() => {
            (0, A.e2)(t.id);
        }, [t.id]),
        S = l.useCallback(
            (e) => {
                C
                    ? (0, u.L3)(e, async () => {
                          let { default: e } = await n.e("55558").then(n.bind(n, 316421));
                          return (n) => (0, i.jsx)(e, { ...n, channel: t });
                      })
                    : e.preventDefault();
            },
            [t, C],
        );
    return (0, i.jsxs)("div", {
        className: x.rs,
        onContextMenu: S,
        children: [
            (0, i.jsx)("div", {
                className: x.ZS,
                style: null != I ? { backgroundColor: I } : void 0,
                children: (0, i.jsx)(g.A, { imageUrl: d, animatedUrl: c, className: x.Sl }),
            }),
            _
                ? (0, i.jsxs)("div", {
                      className: x.n_,
                      children: [
                          (0, i.jsx)(s.m, {
                              text: E.intl.string(f.default.XJ4UpB),
                              children: (0, i.jsx)(a.D, {
                                  className: x.HF,
                                  onClick: b,
                                  children: (0, i.jsx)(r.R, { size: "xs", color: "currentColor" }),
                              }),
                          }),
                          (0, i.jsx)(s.m, {
                              text: E.intl.string(f.default.XV4qT6),
                              children: (0, i.jsx)(a.D, {
                                  className: x.HF,
                                  onClick: N,
                                  children: (0, i.jsx)(o.u, { size: "xs", color: "currentColor" }),
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
        className: x._o,
        children: (0, i.jsxs)(a.D, {
            className: x.hH,
            onClick: n,
            children: [
                (0, i.jsx)(d.X, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(c.E, {
                    variant: "text-sm/medium",
                    color: "currentColor",
                    children: E.intl.string(f.default.NGcIOF),
                }),
            ],
        }),
    });
}
function b(e) {
    let { channel: t, isConnected: n } = e,
        { enableHangoutWindow: s } = (0, _.Dm)({ guildId: t.guild_id, location: "HangoutWindow" }),
        a = (0, m.W6)(t),
        r = n && a,
        o = t.voiceHangout,
        d = o?.banner_hash,
        c = l.useMemo(
            () => (null == d || null == t.guild_id ? null : (0, m.Sq)({ guildId: t.guild_id, bannerHash: d })),
            [t.guild_id, d],
        );
    return s
        ? null != c
            ? (0, i.jsx)(I, { channel: t, imageUrl: c.imageUrl, animatedUrl: c.animatedUrl, canModifyHangout: r })
            : r
              ? (0, i.jsx)(C, { channel: t })
              : null
        : null;
}
