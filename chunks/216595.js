n.d(t, {
    A: () => E,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(934551),
    o = n(158954),
    l = n(311907),
    c = n(397927),
    u = n(47167),
    d = n(713654),
    f = n(598104),
    p = n(263063),
    _ = n(71393),
    h = n(985018),
    m = n(348635);
let g = {
    top: 8,
    bottom: 8,
    left: -4,
    right: -4,
};

function E(e) {
    let { channel: t, children: n } = e;
    return (0, r.jsx)(o.vN3, {
        offset: g,
        children: (0, r.jsxs)("div", {
            className: m.ZO,
            "data-recents-channel": t.id,
            children: [
                (0, r.jsx)(b, {
                    channel: t,
                }),
                t.isPrivate()
                    ? null
                    : (0, r.jsx)(s.ChevronSmallRightIcon, {
                          size: "xxs",
                      }),
                (0, r.jsx)(y, {
                    channel: t,
                }),
                n,
            ],
        }),
    });
}

function b(e) {
    let { channel: t } = e,
        n = (0, l.bG)([_.A], () => _.A.getGuild(t.guild_id));
    return null != n
        ? (0, r.jsx)(p.A, {
              className: m.Kk,
              guild: n,
              size: p.A.Sizes.SMALLER,
              "aria-hidden": !0,
          })
        : t.isGroupDM()
          ? (0, r.jsx)(f.A, {
                channel: t,
                size: c._3J.SIZE_24,
            })
          : (0, r.jsx)("div", {
                className: a()(m.Kk, m.ro),
                children: (0, r.jsx)(s.ChatIcon, {
                    size: "xxs",
                }),
            });
}

function y(e) {
    let { channel: t } = e,
        n = (0, l.bG)([_.A], () => _.A.getGuild(t.guild_id)),
        i = (0, u.Ay)(t, !1),
        a = (0, d.gU)(t, n),
        s = t.isPrivate() || null == a,
        o = t.isDM()
            ? h.intl.formatToPlainString(h.t.smD7XV, {
                  username: i,
              })
            : i;
    return (0, r.jsxs)("div", {
        className: m.yP,
        children: [
            s
                ? null
                : (0, r.jsx)(a, {
                      className: m.j1,
                      size: "xxs",
                  }),
            (0, r.jsx)(c.Heading, {
                variant: "text-md/semibold",
                color: "text-default",
                children: o,
            }),
        ],
    });
}
