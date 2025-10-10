n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(981729),
    s = n(28664),
    l = n(481060),
    c = n(674563),
    u = n(388032),
    d = n(182171);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
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
function h(e, t) {
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
let m = (e) => {
    let {
            invertColor: t = !1,
            type: n = c.Hb.BOT,
            className: i,
            verified: f,
            hideIcon: p = !1,
            useRemSizes: m = !1,
            children: g = [],
        } = e,
        E = null,
        b = u.intl.string(u.t.g76OcH),
        y = t ? d.botTagInvert : d.botTagRegular;
    switch (n) {
        case c.Hb.SYSTEM_DM:
        case c.Hb.OFFICIAL:
            (f = !0), (b = u.intl.string(u.t["7s687u"])), (E = u.intl.string(u.t.lKQ7Wl));
            break;
        case c.Hb.SERVER:
            E = u.intl.string(u.t.PuJGuL);
            break;
        case c.Hb.ORIGINAL_POSTER:
            E = u.intl.string(u.t.fyE8sL);
            break;
        case c.Hb.STAFF_ONLY_DM:
            E = u.intl.string(u.t.oMx98P);
            break;
        case c.Hb.NOT_STAFF_WARNING:
            (E = u.intl.string(u.t.UWhXbG)), (y = d.botTagNotStaffWarning);
            break;
        case c.Hb.REMIX:
            (f = !1), (E = u.intl.string(u.t.uXDG39));
            break;
        case c.Hb.BOT:
        default:
            E = u.intl.string(u.t["9RNkeH"]);
    }
    let O = n === c.Hb.ORIGINAL_POSTER,
        v = n === c.Hb.REMIX,
        I = null;
    f &&
        (I = (0, r.jsx)(s.u, {
            text: b,
            align: "center",
            position: "top",
            children: (0, r.jsx)(l.kSu, {
                className: d.botTagVerified,
                color: l.TVs.colors.WHITE,
            }),
        }));
    let T = (e) =>
        (0, r.jsxs)(
            "span",
            h(_({}, e), {
                className: a()(i, y, m ? d.rem : d.px, {
                    [d.botTagOP]: O,
                    [d.botTagRemix]: v,
                }),
                children: [
                    p ? null : I,
                    g,
                    (0, r.jsx)("span", {
                        className: d.botText,
                        children: E,
                    }),
                ],
            }),
        );
    switch (n) {
        case c.Hb.REMIX:
            return (0, r.jsx)(o.u, {
                "data-migration-pending": !0,
                text: u.intl.string(u.t.xb0str),
                position: "top",
                children: (e) => T(e),
            });
        case c.Hb.ORIGINAL_POSTER:
            return (0, r.jsx)(o.u, {
                "data-migration-pending": !0,
                text: u.intl.string(u.t.uN6Emp),
                position: "top",
                children: (e) => T(e),
            });
        default:
            return T();
    }
};
m.Types = c.Hb;
let g = m;
