n.d(t, { EG: () => o, Gu: () => c, JI: () => u, Lp: () => E, SC: () => I, fk: () => A, hV: () => _, o6: () => d });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(661531),
    l = n(95361);
let o = { ROUND: l.rS, ROUND_LEFT: l.Q2, ROUND_RIGHT: l.Hg, SQUARE: "" };
function d(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function c(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
let _ = (e) => {
        let {
            count: t,
            color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: a = !1,
            shape: _ = o.ROUND,
            className: E,
            style: u,
            renderBadgeCount: A = c,
            ...I
        } = e;
        return (0, i.jsx)("div", {
            className: r()(E, l.Do, _),
            style: { backgroundColor: a ? void 0 : n, width: d(t), ...u },
            ...I,
            children: A(t),
        });
    },
    E = (e) => {
        let {
            text: t,
            className: n,
            color: a = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: d = o.ROUND,
            disableColor: c = !1,
            style: _,
            ...E
        } = e;
        return (0, i.jsx)("div", {
            className: r()(n, l.U1, d),
            style: { backgroundColor: c ? void 0 : a, ..._ },
            ...E,
            children: t,
        });
    },
    u = (e) => {
        let { text: t, className: n, ...a } = e;
        return (0, i.jsx)(E, { className: r()(l.BE, n), text: t, ...a });
    },
    A = (e) => {
        let {
            icon: t,
            className: n,
            color: a = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: d = o.ROUND,
            disableColor: c = !1,
            style: _,
        } = e;
        return (0, i.jsx)("div", {
            className: r()(n, l.u3, d),
            style: { backgroundColor: c ? void 0 : a, ..._ },
            children: (0, i.jsx)(t, { className: l.Kk, color: "currentColor" }),
        });
    },
    I = (e) => {
        let {
            className: t,
            color: n = s.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
            shape: a = o.ROUND,
            disableColor: d = !1,
            style: c,
            ..._
        } = e;
        return (0, i.jsx)("div", {
            className: r()(t, l.Ky, a),
            style: { backgroundColor: d ? void 0 : n, ...c },
            ..._,
        });
    };
