i.d(s, { A: () => m });
var n = i(477900);
i(582128);
var t = i(503698),
    l = i.n(t),
    c = i(435558),
    a = i.n(c),
    o = i(834730),
    r = i(866665),
    h = i(862482),
    u = i(573435),
    d = i(548118),
    x = i(166051);
function A(e) {
    switch (e) {
        case d.Ay.Sizes.SMOL:
            return x.nc;
        case d.Ay.Sizes.MINI:
            return x.qV;
        case d.Ay.Sizes.SMALLER:
        default:
            return x.q1;
    }
}
function S(e) {
    let { size: s, notched: i, width: t, children: l } = e,
        c = d.iu[s];
    return (0, n.jsx)(u.Ay, {
        mask: i ? u.l8[c] : u.Ay.Masks.SQUIRCLE,
        width: t ?? c,
        height: c,
        children: (0, n.jsx)("div", { className: x.A8, children: l }),
    });
}
function j(e) {
    let s,
        { count: i, size: t, notched: c, tooltip: a, onFocus: u, onClick: A } = e,
        j = (function (e) {
            switch (e) {
                case d.Ay.Sizes.SMOL:
                case d.Ay.Sizes.MINI:
                    return "text-xxs/semibold";
                case d.Ay.Sizes.SMALLER:
                default:
                    return "text-xs/medium";
            }
        })(t),
        m = i > 99 ? ">99" : `+${i}`,
        z = ((s = d.iu[t]), m.length <= 2 ? s : s + 8),
        k = (0, n.jsx)(h.$n, {
            className: l()(x.ju, x.lv),
            onFocus: u,
            onClick: (e) => A?.(e),
            look: h.$n.Looks.BLANK,
            size: h.$n.Sizes.NONE,
            children: (0, n.jsx)(o.E, { variant: j, children: m }),
        });
    return (0, n.jsx)(S, {
        size: t,
        notched: c,
        width: z,
        children: null != a ? (0, n.jsx)(r.m, { text: a, position: "top", asContainer: !0, children: k }) : k,
    });
}
function m(e) {
    let s,
        i,
        t,
        c,
        {
            className: o,
            maxGuilds: r,
            guilds: h,
            onFocus: u,
            onClick: m,
            size: z = d.Ay.Sizes.SMALLER,
            hideOverflowCount: k = !1,
            disableGuildNameTooltip: p = !1,
            overflowTooltip: L,
        } = e;
    return h.length <= 0
        ? null
        : (0, n.jsx)("ul", {
              className: l()(o, x.HD),
              children:
                  ((i = (s = h.length > r && !k) ? h.length - r + 1 : 0),
                  (t = s ? Math.min(h.length, r) - 1 : Math.min(h.length, r)),
                  (c = a()(h)
                      .take(t)
                      .map((e, i) =>
                          (0, n.jsx)(
                              "li",
                              {
                                  className: A(z),
                                  children: (0, n.jsx)(S, {
                                      size: z,
                                      notched: s || i !== t - 1,
                                      children: (0, n.jsx)(d.Ay, {
                                          guild: e,
                                          active: !0,
                                          onClick: m,
                                          size: z,
                                          showTooltip: !p,
                                      }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                      .value()),
                  s
                      ? [
                            ...c,
                            (0, n.jsx)(
                                "li",
                                {
                                    className: A(z),
                                    children: (0, n.jsx)(j, {
                                        count: i,
                                        size: z,
                                        notched: !1,
                                        tooltip: L,
                                        onFocus: u,
                                        onClick: m,
                                    }),
                                },
                                "overflow",
                            ),
                        ]
                      : c),
          });
}
