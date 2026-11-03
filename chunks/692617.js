n.d(s, { A: () => m });
var i = n(477900);
n(582128);
var t = n(503698),
    l = n.n(t),
    c = n(435558),
    o = n.n(c),
    a = n(834730),
    r = n(866665),
    h = n(862482),
    u = n(573435),
    d = n(548118),
    A = n(166051);
function x(e) {
    switch (e) {
        case d.Ay.Sizes.SMOL:
            return A.nc;
        case d.Ay.Sizes.MINI:
            return A.qV;
        case d.Ay.Sizes.SMALLER:
        default:
            return A.q1;
    }
}
function S(e) {
    let { size: s, notched: n, width: t, children: l } = e,
        c = d.iu[s];
    return (0, i.jsx)(u.Ay, {
        mask: n ? u.l8[c] : u.Ay.Masks.SQUIRCLE,
        width: t ?? c,
        height: c,
        children: (0, i.jsx)("div", { className: A.A8, children: l }),
    });
}
function j(e) {
    let s,
        { count: n, size: t, notched: c, tooltip: o, onFocus: u, onClick: x } = e,
        j = (function (e) {
            switch (e) {
                case d.Ay.Sizes.SMOL:
                case d.Ay.Sizes.MINI:
                    return "footnote/semibold";
                case d.Ay.Sizes.SMALLER:
                default:
                    return "body-xs/medium";
            }
        })(t),
        m = n > 99 ? ">99" : `+${n}`,
        z = ((s = d.iu[t]), m.length <= 2 ? s : s + 8),
        k = (0, i.jsx)(h.$n, {
            className: l()(A.ju, A.lv),
            onFocus: u,
            onClick: (e) => x?.(e),
            look: h.$n.Looks.BLANK,
            size: h.$n.Sizes.NONE,
            children: (0, i.jsx)(a.E, { variant: j, children: m }),
        });
    return (0, i.jsx)(S, {
        size: t,
        notched: c,
        width: z,
        children: null != o ? (0, i.jsx)(r.m, { text: o, position: "top", asContainer: !0, children: k }) : k,
    });
}
function m(e) {
    let s,
        n,
        t,
        c,
        {
            className: a,
            maxGuilds: r,
            guilds: h,
            onFocus: u,
            onClick: m,
            size: z = d.Ay.Sizes.SMALLER,
            hideOverflowCount: k = !1,
            disableGuildNameTooltip: p = !1,
            overflowTooltip: y,
        } = e;
    return h.length <= 0
        ? null
        : (0, i.jsx)("ul", {
              className: l()(a, A.HD),
              children:
                  ((n = (s = h.length > r && !k) ? h.length - r + 1 : 0),
                  (t = s ? Math.min(h.length, r) - 1 : Math.min(h.length, r)),
                  (c = o()(h)
                      .take(t)
                      .map((e, n) =>
                          (0, i.jsx)(
                              "li",
                              {
                                  className: x(z),
                                  children: (0, i.jsx)(S, {
                                      size: z,
                                      notched: s || n !== t - 1,
                                      children: (0, i.jsx)(d.Ay, {
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
                            (0, i.jsx)(
                                "li",
                                {
                                    className: x(z),
                                    children: (0, i.jsx)(j, {
                                        count: n,
                                        size: z,
                                        notched: !1,
                                        tooltip: y,
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
