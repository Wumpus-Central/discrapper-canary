"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(990078),
    u = n(421380),
    c = n(397927),
    d = n(263063),
    _ = n(175052);
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Ay.Sizes.SMALLER;
    switch (e) {
        case d.Ay.Sizes.SMOL:
            return _.nc;
        case d.Ay.Sizes.MINI:
            return _.qV;
        case d.Ay.Sizes.SMALLER:
        default:
            return _.q1;
    }
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.Ay.Sizes.SMALLER;
    switch (e) {
        case d.Ay.Sizes.SMOL:
        case d.Ay.Sizes.MINI:
            return "text-xxs/semibold";
        case d.Ay.Sizes.SMALLER:
        default:
            return "text-xs/medium";
    }
}
function h(e) {
    let {
            className: t,
            maxGuilds: n,
            guilds: i,
            onFocus: a,
            onClick: h,
            size: m = d.Ay.Sizes.SMALLER,
            hideOverflowCount: E = !1,
            disableGuildNameTooltip: g = !1,
        } = e,
        A = f(m);
    function I() {
        let e = i.length - n,
            t = e + 1,
            f = e > 0 && !E,
            I = Math.min(i.length, n) - 1,
            T = o()(i)
                .take(n)
                .map((e, t) => {
                    let n = e.name,
                        i = t === I && !f,
                        a = s()(_.my, A, i && _.NE);
                    return g
                        ? (0, r.jsx)("div", {
                              className: a,
                              children: (0, r.jsx)(d.Ay, { guild: e, onClick: h, size: m, showTooltip: !1 }),
                          })
                        : (0, r.jsx)(
                              l.m,
                              {
                                  asContainer: !0,
                                  text: n,
                                  children: (0, r.jsx)(d.Ay, { guild: e, onClick: h, size: m }),
                              },
                              e.id,
                          );
                })
                .value();
        if (f) {
            let e = p(m);
            T[T.length - 1] = (0, r.jsx)(u.$n, {
                className: s()(_.ju, A),
                onFocus: a,
                onClick: (e) => h?.(e),
                look: u.$n.Looks.BLANK,
                size: u.$n.Sizes.NONE,
                children: (0, r.jsx)(c.Text, { variant: e, children: t > 99 ? ">99" : `+${t}` }),
            });
        }
        return T;
    }
    return i.length <= 0 ? null : (0, r.jsx)("div", { className: s()(t, _.HD), children: I() });
}
