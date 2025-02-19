n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(981729),
    s = n(481060),
    l = n(674563),
    c = n(388032),
    u = n(901535);
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
function p(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
    let t,
        { invertColor: n = !1, type: i = l.Hb.BOT, className: d, verified: p, hideIcon: h = !1, useRemSizes: m = !1, children: g = [] } = e,
        E = null,
        v = c.NW.string(c.t.g76OcH);
    switch (i) {
        case l.Hb.SYSTEM_DM:
        case l.Hb.OFFICIAL:
            (p = !0), (v = c.NW.string(c.t['7s687u'])), (E = c.NW.string(c.t.lKQ7Wl));
            break;
        case l.Hb.SERVER:
            E = c.NW.string(c.t.PuJGuL);
            break;
        case l.Hb.ORIGINAL_POSTER:
            E = c.NW.string(c.t.fyE8sL);
            break;
        case l.Hb.STAFF_ONLY_DM:
            E = c.NW.string(c.t.oMx98P);
            break;
        case l.Hb.AI:
            (p = !0), (v = c.NW.string(c.t.d5YwQE)), (E = c.NW.string(c.t.pLTJZG));
            break;
        case l.Hb.REMIX:
            (p = !1), (E = c.NW.string(c.t.uXDG39));
            break;
        case l.Hb.BOT:
        default:
            E = c.NW.string(c.t['9RNkeH']);
    }
    let b = i === l.Hb.ORIGINAL_POSTER,
        y = i === l.Hb.REMIX,
        O = null;
    p &&
        (O = (0, r.jsx)(a.u, {
            text: v,
            align: 'center',
            position: 'top',
            children: (e) =>
                (0, r.jsx)(
                    s.kSu,
                    _(f({}, e), {
                        className: u.botTagVerified,
                        color: s.TVs.colors.WHITE
                    })
                )
        })),
        (t = i === l.Hb.AI ? u.botTagAI : n ? u.botTagInvert : u.botTagRegular);
    let S = (e) =>
        (0, r.jsxs)(
            'span',
            _(f({}, e), {
                className: o()(d, t, m ? u.rem : u.px, {
                    [u.botTagOP]: b,
                    [u.botTagRemix]: y
                }),
                children: [
                    h ? null : O,
                    g,
                    (0, r.jsx)('span', {
                        className: u.botText,
                        children: E
                    })
                ]
            })
        );
    switch (i) {
        case l.Hb.REMIX:
            return (0, r.jsx)(a.u, {
                text: c.NW.string(c.t.xb0str),
                position: 'top',
                children: (e) => S(e)
            });
        case l.Hb.ORIGINAL_POSTER:
            return (0, r.jsx)(a.u, {
                text: c.NW.string(c.t.uN6Emp),
                position: 'top',
                children: (e) => S(e)
            });
        default:
            return S();
    }
};
h.Types = l.Hb;
let m = h;
