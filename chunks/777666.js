"use strict";
n.d(t, { EG: () => l, Gu: () => d, JI: () => f, Lp: () => _, SC: () => h, fk: () => E, hV: () => c, o6: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    o = n(201345);
let l = { ROUND: o.rS, ROUND_LEFT: o.Q2, ROUND_RIGHT: o.Hg, SQUARE: "" };
function u(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function d(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
let c = (e) => {
        let {
            count: t,
            color: n = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: i = !1,
            shape: c = l.ROUND,
            className: _,
            style: f,
            renderBadgeCount: E = d,
            ...h
        } = e;
        return (0, r.jsx)("div", {
            className: s()(_, o.Do, c),
            style: { backgroundColor: i ? void 0 : n, width: u(t), ...f },
            ...h,
            children: E(t),
        });
    },
    _ = (e) => {
        let {
            text: t,
            className: n,
            color: i = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: d = !1,
            style: c,
            ..._
        } = e;
        return (0, r.jsx)("div", {
            className: s()(n, o.U1, u),
            style: { backgroundColor: d ? void 0 : i, ...c },
            ..._,
            children: t,
        });
    },
    f = (e) => {
        let { text: t, className: n, ...i } = e;
        return (0, r.jsx)(_, { className: s()(o.BE, n), text: t, ...i });
    },
    E = (e) => {
        let {
            icon: t,
            className: n,
            color: i = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: d = !1,
            style: c,
        } = e;
        return (0, r.jsx)("div", {
            className: s()(n, o.u3, u),
            style: { backgroundColor: d ? void 0 : i, ...c },
            children: (0, r.jsx)(t, { className: o.Kk, color: "currentColor" }),
        });
    },
    h = (e) => {
        let {
            className: t,
            color: n = a.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
            shape: i = l.ROUND,
            disableColor: u = !1,
            style: d,
            ...c
        } = e;
        return (0, r.jsx)("div", {
            className: s()(t, o.Ky, i),
            style: { backgroundColor: u ? void 0 : n, ...d },
            ...c,
        });
    };
