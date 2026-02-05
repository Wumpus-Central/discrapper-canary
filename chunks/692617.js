"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(990078),
    u = n(421380),
    c = n(397927),
    d = n(263063),
    _ = n(232358);
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.A.Sizes.SMALLER;
    switch (e) {
        case d.A.Sizes.SMOL:
            return _.nc;
        case d.A.Sizes.MINI:
            return _.qV;
        case d.A.Sizes.SMALLER:
        default:
            return _.q1;
    }
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.A.Sizes.SMALLER;
    switch (e) {
        case d.A.Sizes.SMOL:
        case d.A.Sizes.MINI:
            return "text-xxs/semibold";
        case d.A.Sizes.SMALLER:
        default:
            return "text-xs/medium";
    }
}
function h(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: s,
            onClick: h,
            size: m = d.A.Sizes.SMALLER,
            hideOverflowCount: g = !1,
            disableGuildNameTooltip: E = !1,
        } = e,
        A = f(m);
    function I() {
        let e = i.length - n,
            t = e + 1,
            f = e > 0 && !g,
            I = Math.min(i.length, n) - 1,
            T = o()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === I && !f,
                        s = a()(_.my, A, i && _.NE);
                    return E
                        ? (0, r.jsx)("div", {
                              className: s,
                              children: (0, r.jsx)(d.A, { guild: e, onClick: h, size: m, showTooltip: !1 }),
                          })
                        : (0, r.jsx)(
                              l.m,
                              {
                                  asContainer: !0,
                                  text: n,
                                  children: (0, r.jsx)(d.A, { guild: e, onClick: h, size: m }),
                              },
                              e.id,
                          );
                })
                .value();
        if (f) {
            let e = p(m);
            T[T.length - 1] = (0, r.jsx)(u.$n, {
                className: a()(_.ju, A),
                onFocus: s,
                onClick: (e) => h?.(e),
                look: u.$n.Looks.BLANK,
                size: u.$n.Sizes.NONE,
                children: (0, r.jsx)(c.Text, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
            });
        }
        return T;
    }
    return i.length <= 0 ? null : (0, r.jsx)("div", { className: a()(t, _.HD), children: I() });
}
