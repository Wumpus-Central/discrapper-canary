"use strict";
n.d(t, { A: () => f });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(435558),
    l = n.n(s),
    o = n(866665),
    d = n(862482),
    c = n(834730),
    u = n(573435),
    _ = n(548118),
    E = n(795502);
function A(e) {
    switch (e) {
        case _.Ay.Sizes.SMOL:
            return E.nc;
        case _.Ay.Sizes.MINI:
            return E.qV;
        case _.Ay.Sizes.SMALLER:
        default:
            return E.q1;
    }
}
function h(e) {
    let { size: t, notched: n, width: r, children: a } = e,
        s = _.iu[t];
    return (0, i.jsx)(u.Ay, {
        mask: n ? u.l8[s] : u.Ay.Masks.SQUIRCLE,
        width: r ?? s,
        height: s,
        children: (0, i.jsx)("div", { className: E.A8, children: a }),
    });
}
function I(e) {
    let t,
        { count: n, size: r, notched: s, tooltip: l, onFocus: u, onClick: A } = e,
        I = (function (e) {
            switch (e) {
                case _.Ay.Sizes.SMOL:
                case _.Ay.Sizes.MINI:
                    return "text-xxs/semibold";
                case _.Ay.Sizes.SMALLER:
                default:
                    return "text-xs/medium";
            }
        })(r),
        f = n > 99 ? ">99" : `+${n}`,
        p = ((t = _.iu[r]), f.length <= 2 ? t : t + 8),
        T = (0, i.jsx)(d.$n, {
            className: a()(E.ju, E.lv),
            onFocus: u,
            onClick: (e) => A?.(e),
            look: d.$n.Looks.BLANK,
            size: d.$n.Sizes.NONE,
            children: (0, i.jsx)(c.E, { variant: I, children: f }),
        });
    return (0, i.jsx)(h, {
        size: r,
        notched: s,
        width: p,
        children: null != l ? (0, i.jsx)(o.m, { text: l, position: "top", asContainer: !0, children: T }) : T,
    });
}
function f(e) {
    let t,
        n,
        r,
        s,
        {
            className: o,
            maxGuilds: d,
            guilds: c,
            onFocus: u,
            onClick: f,
            size: p = _.Ay.Sizes.SMALLER,
            hideOverflowCount: T = !1,
            disableGuildNameTooltip: m = !1,
            overflowTooltip: g,
        } = e;
    return c.length <= 0
        ? null
        : (0, i.jsx)("ul", {
              className: a()(o, E.HD),
              children:
                  ((n = (t = c.length > d && !T) ? c.length - d + 1 : 0),
                  (r = t ? Math.min(c.length, d) - 1 : Math.min(c.length, d)),
                  (s = l()(c)
                      .take(r)
                      .map((e, n) =>
                          (0, i.jsx)(
                              "li",
                              {
                                  className: A(p),
                                  children: (0, i.jsx)(h, {
                                      size: p,
                                      notched: t || n !== r - 1,
                                      children: (0, i.jsx)(_.Ay, {
                                          guild: e,
                                          active: !0,
                                          onClick: f,
                                          size: p,
                                          showTooltip: !m,
                                      }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                      .value()),
                  t
                      ? [
                            ...s,
                            (0, i.jsx)(
                                "li",
                                {
                                    className: A(p),
                                    children: (0, i.jsx)(I, {
                                        count: n,
                                        size: p,
                                        notched: !1,
                                        tooltip: g,
                                        onFocus: u,
                                        onClick: f,
                                    }),
                                },
                                "overflow",
                            ),
                        ]
                      : s),
          });
}
