n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(981729),
    s = n(481060),
    l = n(674563),
    c = n(388032),
    u = n(575302);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
    let { invertColor: t = !1, type: n = l.Hb.BOT, className: i, verified: d, hideIcon: _ = !1, useRemSizes: h = !1, children: m = [] } = e,
        g = null,
        E = c.intl.string(c.t.g76OcH);
    switch (n) {
        case l.Hb.SYSTEM_DM:
        case l.Hb.OFFICIAL:
            (d = !0), (E = c.intl.string(c.t['7s687u'])), (g = c.intl.string(c.t.lKQ7Wl));
            break;
        case l.Hb.SERVER:
            g = c.intl.string(c.t.PuJGuL);
            break;
        case l.Hb.ORIGINAL_POSTER:
            g = c.intl.string(c.t.fyE8sL);
            break;
        case l.Hb.STAFF_ONLY_DM:
            g = c.intl.string(c.t.oMx98P);
            break;
        case l.Hb.REMIX:
            (d = !1), (g = c.intl.string(c.t.uXDG39));
            break;
        case l.Hb.BOT:
        default:
            g = c.intl.string(c.t['9RNkeH']);
    }
    let b = n === l.Hb.ORIGINAL_POSTER,
        y = n === l.Hb.REMIX,
        O = null;
    d &&
        (O = (0, r.jsx)(o.u, {
            text: E,
            align: 'center',
            position: 'top',
            children: (e) =>
                (0, r.jsx)(
                    s.kSu,
                    p(f({}, e), {
                        className: u.botTagVerified,
                        color: s.TVs.colors.WHITE
                    })
                )
        }));
    let v = t ? u.botTagInvert : u.botTagRegular,
        I = (e) =>
            (0, r.jsxs)(
                'span',
                p(f({}, e), {
                    className: a()(i, v, h ? u.rem : u.px, {
                        [u.botTagOP]: b,
                        [u.botTagRemix]: y
                    }),
                    children: [
                        _ ? null : O,
                        m,
                        (0, r.jsx)('span', {
                            className: u.botText,
                            children: g
                        })
                    ]
                })
            );
    switch (n) {
        case l.Hb.REMIX:
            return (0, r.jsx)(o.u, {
                text: c.intl.string(c.t.xb0str),
                position: 'top',
                children: (e) => I(e)
            });
        case l.Hb.ORIGINAL_POSTER:
            return (0, r.jsx)(o.u, {
                text: c.intl.string(c.t.uN6Emp),
                position: 'top',
                children: (e) => I(e)
            });
        default:
            return I();
    }
};
h.Types = l.Hb;
let m = h;
