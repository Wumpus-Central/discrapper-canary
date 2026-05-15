"use strict";
n.d(t, { EG: () => l, Gu: () => c, JI: () => f, Lp: () => _, SC: () => p, fk: () => h, hV: () => d, o6: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(661531),
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
            disableColor: r = !1,
            shape: d = l.ROUND,
            className: _,
            style: f,
            renderBadgeCount: h = c,
            ...p
        } = e;
        return (0, i.jsx)("div", {
            className: s()(_, o.Do, d),
            style: { backgroundColor: r ? void 0 : n, width: u(t), ...f },
            ...p,
            children: h(t),
        });
    },
    _ = (e) => {
        let {
            text: t,
            className: n,
            color: r = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: c = !1,
            style: d,
            ..._
        } = e;
        return (0, i.jsx)("div", {
            className: s()(n, o.U1, u),
            style: { backgroundColor: c ? void 0 : r, ...d },
            ..._,
            children: t,
        });
    },
    f = (e) => {
        let { text: t, className: n, ...r } = e;
        return (0, i.jsx)(_, { className: s()(o.BE, n), text: t, ...r });
    },
    h = (e) => {
        let {
            icon: t,
            className: n,
            color: r = a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: u = l.ROUND,
            disableColor: c = !1,
            style: d,
            "aria-label": _,
        } = e;
        return (0, i.jsx)("div", {
            className: s()(n, o.u3, u),
            style: { backgroundColor: c ? void 0 : r, ...d },
            role: null != _ ? "img" : void 0,
            "aria-label": _,
            children: (0, i.jsx)(t, { className: o.Kk, color: "currentColor" }),
        });
    },
    p = (e) => {
        let {
            className: t,
            color: n = a.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
            shape: r = l.ROUND,
            disableColor: u = !1,
            style: c,
            ...d
        } = e;
        return (0, i.jsx)("div", {
            className: s()(t, o.Ky, r),
            style: { backgroundColor: u ? void 0 : n, ...c },
            ...d,
        });
    };
