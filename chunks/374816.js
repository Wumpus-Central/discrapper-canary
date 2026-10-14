s.d(t, { u6: () => b, Vd: () => C, $b: () => A, PZ: () => E });
var a = s(343032),
    n = s(7807),
    r = s(713608),
    i = s(847696),
    l = s(532470),
    o = s(422751),
    u = s(137192),
    d = s(477900);
s(582128);
var c = s(661531),
    m = s(260612),
    h = s(953727);
function p(e) {
    let {
            size: t = "md",
            width: s,
            height: a,
            color: n = c.A.colors.INTERACTIVE_ICON_DEFAULT,
            colorClass: r = "",
            ...i
        } = e,
        l = (0, m.J)(t),
        o = l?.width ?? s,
        u = l?.height ?? a,
        p = "string" == typeof n ? n : n.css;
    return (0, d.jsxs)("svg", {
        ...(0, h.A)(i),
        width: o,
        height: u,
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, d.jsx)("path", {
                d: "M8.00002 8.00033C7.30688 8.00033 6.73728 8.79367 6.67277 9.80803C7.07947 9.93174 7.5283 10.0003 8.00002 10.0003C8.47174 10.0003 8.92057 9.93174 9.32727 9.80803C9.26276 8.79367 8.69315 8.00033 8.00002 8.00033Z",
                fill: p,
                className: r,
            }),
            (0, d.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM3.4038 4.36885C3.56846 4.03953 3.9689 3.90605 4.29822 4.07071L6.29822 5.07071C6.52408 5.18364 6.66675 5.41448 6.66675 5.66699C6.66675 5.91951 6.52408 6.15035 6.29822 6.26328L4.29822 7.26328C3.9689 7.42794 3.56846 7.29445 3.4038 6.96514C3.23914 6.63582 3.37262 6.23537 3.70194 6.07071L4.50937 5.66699L3.70194 5.26328C3.37262 5.09862 3.23914 4.69817 3.4038 4.36885ZM11.7019 4.07071C12.0313 3.90605 12.4317 4.03953 12.5964 4.36885C12.761 4.69817 12.6275 5.09862 12.2982 5.26328L11.4908 5.66699L12.2982 6.07071C12.6275 6.23537 12.761 6.63582 12.5964 6.96514C12.4317 7.29445 12.0313 7.42794 11.7019 7.26328L9.70194 6.26328C9.47608 6.15035 9.33341 5.91951 9.33341 5.66699C9.33341 5.41448 9.47608 5.18364 9.70194 5.07071L11.7019 4.07071ZM10.6667 10.0003C10.6667 11.8413 9.47284 13.3337 8.00008 13.3337C6.52732 13.3337 5.33341 11.8413 5.33341 10.0003C5.33341 8.15938 6.52732 6.66699 8.00008 6.66699C9.47284 6.66699 10.6667 8.15938 10.6667 10.0003Z",
                fill: p,
                className: r,
            }),
        ],
    });
}
var g = s(696016),
    S = s(268378),
    v = s(660183);
let C = 3,
    f = { ...(0, i.pv)(), ...(0, l.PC)(), ...(0, o.mk)(), ...(0, u.IR)() },
    I = { ...(0, i.HM)(), ...(0, l.dP)(), ...(0, o.K7)(), ...(0, u._n)() },
    y = { ...(0, i.aQ)(), ...(0, l.kv)(), ...(0, o.P3)(), ...(0, u.$l)() };
function b(e, t, s) {
    switch (t) {
        case g.Gy.LAUGHTER:
            return a.i;
        case g.Gy.SHOUTING:
            return p;
        case g.Gy.SOUNDBOARD:
            return n.J;
        case g.Gy.GAME_EVENT: {
            let t = null != e && null != s ? f[e]?.[s] : void 0;
            return void 0 === t ? r.q : t;
        }
        default:
            return null;
    }
}
function A(e, t, s) {
    switch (t) {
        case g.Gy.LAUGHTER:
        case g.Gy.SHOUTING:
            return 2;
        case g.Gy.SOUNDBOARD:
            return 1;
        case g.Gy.GAME_EVENT:
            if (null == b(e, t, s)) return 0;
            return 1e3 + ((null != e && null != s ? I[e]?.[s] : void 0) ?? 0);
        default:
            return 0;
    }
}
function E(e, t, s) {
    switch (t) {
        case g.Gy.LAUGHTER:
            return v.intl.string(S.default.bTC23D);
        case g.Gy.SHOUTING:
            return v.intl.string(S.default["3gqpuo"]);
        case g.Gy.GAME_EVENT: {
            let t = null != e && null != s ? y[e]?.[s] : void 0;
            return null != t ? v.intl.string(t) : null;
        }
        default:
            return null;
    }
}
