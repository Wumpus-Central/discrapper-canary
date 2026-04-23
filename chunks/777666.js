"use strict";
n.d(t, { EG: () => l, Gu: () => c, JI: () => f, Lp: () => _, SC: () => h, fk: () => p, hV: () => d, o6: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    o = n(95361);
let l = { ROUND: o.rS, ROUND_LEFT: o.Q2, ROUND_RIGHT: o.Hg, SQUARE: "" };
function u(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function c(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
let d = (e) => {
        let {
            count: t,
            color: n = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: i = !1,
            shape: d = l.ROUND,
            className: _,
            style: f,
            renderBadgeCount: p = c,
            ...h
        } = e;
        return (0, r.jsx)("div", {
            className: s()(_, o.Do, d),
            style: { backgroundColor: i ? void 0 : n, width: u(t), ...f },
            ...h,
            children: p(t),
        });
    },
    _ = (e) => {
        let {
            text: t,
            className: n,
            color: i = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: c = !1,
            style: d,
            ..._
        } = e;
        return (0, r.jsx)("div", {
            className: s()(n, o.U1, u),
            style: { backgroundColor: c ? void 0 : i, ...d },
            ..._,
            children: t,
        });
    },
    f = (e) => {
        let { text: t, className: n, ...i } = e;
        return (0, r.jsx)(_, { className: s()(o.BE, n), text: t, ...i });
    },
    p = (e) => {
        let {
            icon: t,
            className: n,
            color: i = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: c = !1,
            style: d,
        } = e;
        return (0, r.jsx)("div", {
            className: s()(n, o.u3, u),
            style: { backgroundColor: c ? void 0 : i, ...d },
            children: (0, r.jsx)(t, { className: o.Kk, color: "currentColor" }),
        });
    },
    h = (e) => {
        let {
            className: t,
            color: n = a.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
            shape: i = l.ROUND,
            disableColor: u = !1,
            style: c,
            ...d
        } = e;
        return (0, r.jsx)("div", {
            className: s()(t, o.Ky, i),
            style: { backgroundColor: u ? void 0 : n, ...c },
            ...d,
        });
    };
