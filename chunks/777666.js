n.d(t, { EG: () => l, Gu: () => E, JI: () => u, Lp: () => c, SC: () => A, fk: () => I, hV: () => d, o6: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(661531),
    _ = n(95361);
let l = { ROUND: _.rS, ROUND_LEFT: _.Q2, ROUND_RIGHT: _.Hg, SQUARE: "" };
function o(e) {
    return e < 10 ? 16 : e < 100 ? 22 : 30;
}
function E(e) {
    return e < 1e3 ? `${e}` : `${Math.min(Math.floor(e / 1e3), 9)}k+`;
}
let d = (e) => {
        let {
            count: t,
            color: n = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: r = !1,
            shape: d = l.ROUND,
            className: c,
            style: u,
            renderBadgeCount: I = E,
            ...A
        } = e;
        return (0, i.jsx)("div", {
            className: a()(c, _.Do, d),
            style: { backgroundColor: r ? void 0 : n, width: o(t), ...u },
            ...A,
            children: I(t),
        });
    },
    c = (e) => {
        let {
            text: t,
            className: n,
            color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: o = l.ROUND,
            disableColor: E = !1,
            style: d,
            ...c
        } = e;
        return (0, i.jsx)("div", {
            className: a()(n, _.U1, o),
            style: { backgroundColor: E ? void 0 : r, ...d },
            ...c,
            children: t,
        });
    },
    u = (e) => {
        let { text: t, className: n, ...r } = e;
        return (0, i.jsx)(c, { className: a()(_.BE, n), text: t, ...r });
    },
    I = (e) => {
        let {
            icon: t,
            className: n,
            color: r = s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            shape: o = l.ROUND,
            disableColor: E = !1,
            style: d,
        } = e;
        return (0, i.jsx)("div", {
            className: a()(n, _.u3, o),
            style: { backgroundColor: E ? void 0 : r, ...d },
            children: (0, i.jsx)(t, { className: _.Kk, color: "currentColor" }),
        });
    },
    A = (e) => {
        let {
            className: t,
            color: n = s.A.colors.INTERACTIVE_TEXT_ACTIVE.css,
            shape: r = l.ROUND,
            disableColor: o = !1,
            style: E,
            ...d
        } = e;
        return (0, i.jsx)("div", {
            className: a()(t, _.Ky, r),
            style: { backgroundColor: o ? void 0 : n, ...E },
            ...d,
        });
    };
