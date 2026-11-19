(n.r(e), n.d(e, { default: () => z }));
var l = n(477900),
    r = n(582128),
    u = n(855986),
    i = n(972013),
    s = n(503698),
    a = n.n(s),
    d = n(939249),
    o = n(834730),
    c = n(866665),
    f = n(152367),
    N = n(189252),
    A = n(318774),
    C = n(191850),
    h = n(792996),
    j = n(831283);
function E(t) {
    let { working: e } = t,
        [n, u] = r.useState(e);
    return (
        e && !n && u(!0),
        r.useEffect(() => {
            if (e || !n) return;
            let t = setTimeout(() => u(!1), 300);
            return () => clearTimeout(t);
        }, [e, n]),
        (0, l.jsx)("span", {
            className: j.W,
            "data-page": e ? void 0 : "chat",
            "data-thinking": e ? "" : void 0,
            role: e ? "img" : void 0,
            "aria-label": e ? h.intl.string(C.default["Y8pS+n"]) : void 0,
            "aria-hidden": !e || void 0,
            children: n ? (0, l.jsx)(A.DA, {}) : null,
        })
    );
}
var _ = n(381991),
    m = n(845079),
    T = n(738601),
    g = n(806163),
    R = n(751841),
    p = n(260498),
    x = n(352571),
    S = n(73153),
    O = n(287809),
    U = n(513425);
let I = { turns: {} };
function v(t, e) {
    let { [t]: n, ...l } = I.turns;
    I = { turns: null == e ? l : { ...l, [t]: e } };
}
class w extends u.Ay.PersistedStore {
    static displayName = "ConjureOwnTurnsStore";
    static persistKey = "ConjureOwnTurns";
    initialize(t) {
        this.waitFor(O.default, U.A, p.Ay);
        let e = Date.now() - 6048e5;
        I = {
            turns: Object.fromEntries(
                Object.entries(t?.turns ?? {}).filter((t) => {
                    let [, n] = t;
                    return n.startedAt > e;
                }),
            ),
        };
    }
    getState() {
        return I;
    }
    getStartedAt(t) {
        let e = I.turns[t];
        return null != e && e.userId === O.default.getCurrentUser()?.id ? e.startedAt : null;
    }
}
function b(t) {
    let e = I.turns[t];
    return null != e && !e.settled && (v(t, { ...e, settled: !0 }), !0);
}
function k(t) {
    let { projectId: e, nonce: n } = t,
        l = I.turns[e];
    return !(null == l || (n ?? Date.now()) < l.startedAt) && b(e);
}
function D(t, e) {
    let n = I.turns[t];
    return n?.queuedBehind != null && e !== n.queuedBehind && (v(t, { ...n, queuedBehind: void 0 }), !0);
}
let J = new w(S.h, {
    CONJURE_CHAT_MESSAGE_APPEND: function (t) {
        let { projectId: e, id: n, userId: l, optimisticId: r } = t,
            u = I.turns[e];
        return null != r
            ? null != u && u.sendId === r && (v(e, { ...u, sendId: n }), !0)
            : null != l &&
                  (l === O.default.getCurrentUser()?.id
                      ? (v(e, { userId: l, startedAt: Date.now(), settled: !1, sendId: n }), !0)
                      : null != I.turns[e] && (v(e, null), !0));
    },
    CONJURE_CHAT_MESSAGE_DISPOSITION: function (t) {
        let { projectId: e, id: n, activeTurnId: l, disposition: r } = t,
            u = I.turns[e];
        if (null == u || u.sendId !== n) return !1;
        let i = "queued" === r || "restarting" === r ? l : void 0;
        return u.queuedBehind !== i && (v(e, { ...u, queuedBehind: i }), !0);
    },
    CONJURE_CHAT_RUNNING_TURN_SET: function (t) {
        let { projectId: e, turnId: n } = t;
        return null != n && D(e, n);
    },
    CONJURE_PROJECT_RUNNING_UPDATE: function (t) {
        let { projectId: e, running: n } = t;
        return n && D(e, null);
    },
    CONJURE_CHAT_TURN_FINISHED: function (t) {
        let { projectId: e } = t;
        return b(e);
    },
    CONJURE_TURN_SETTLED: k,
    CONJURE_TURN_NOTIFICATION: k,
    CONJURE_PROJECT_ACK: function (t) {
        let { projectId: e } = t,
            n = I.turns[e];
        return (
            !(n?.settled !== !0 || null != n.queuedBehind || U.A.isThinking(e) || p.Ay.isProjectRunning(e)) &&
            (v(e, null), !0)
        );
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (t) {
        let { projectId: e } = t;
        return null != I.turns[e] && (v(e, null), !0);
    },
});
function P(t) {
    return J.getStartedAt(t.id) ?? 0;
}
var y = n(162052),
    q = n(274158);
function B() {
    (0, _.A)();
}
function H(t) {
    let { project: e, working: n, unread: u, alone: i } = t,
        s = h.intl.formatToPlainString(n ? C.default["PsTKx+"] : u ? C.default.CgfUAd : C.default.G6HoRB, {
            name: e.name,
        }),
        c = e.id,
        f = r.useCallback(() => (0, _.A)(c), [c]);
    return (0, l.jsxs)(d.D, {
        tag: "div",
        role: "button",
        className: a()(q.MX, q.Dw, q.v_, { [q.Bq]: n, [q.QR]: i }),
        "aria-label": s,
        onClick: f,
        children: [
            u
                ? (0, l.jsx)("span", {
                      className: q.Iq,
                      "aria-hidden": !0,
                      children: (0, l.jsx)("span", { className: q.Zm }),
                  })
                : null,
            (0, l.jsx)("span", { className: q.VJ, children: (0, l.jsx)(m.A, { project: e, size: "header" }) }),
            (0, l.jsx)(o.E, {
                variant: "body-sm/medium",
                color: "none",
                lineClamp: 1,
                className: a()(q.j1, { [y.Hz]: n }),
                children: e.name,
            }),
        ],
    });
}
function G(t) {
    let { project: e, showWand: n, wandLabel: r } = t,
        u = (0, T.yX)(e.id),
        i = "working" === u,
        s = !i && "unread" === u;
    return (0, l.jsxs)("div", {
        className: q.lD,
        children: [
            (0, l.jsx)(E, { working: i }),
            (0, l.jsx)(H, { project: e, working: i, unread: s, alone: !n }),
            n
                ? (0, l.jsx)(c.m, {
                      position: "bottom",
                      text: r,
                      ariaHidden: !0,
                      children: (0, l.jsx)(d.D, {
                          tag: "div",
                          role: "button",
                          className: a()(q.MX, q.i1, { [q.Bq]: i }),
                          "aria-label": r,
                          onClick: B,
                          children: (0, l.jsx)(f.MagicWandIcon, { size: "sm", color: "currentColor" }),
                      }),
                  })
                : null,
        ],
    });
}
function M(t) {
    let { showWand: e } = t,
        n = (function () {
            let { pathname: t } = (0, g.zy)(),
                e = (0, u.yK)([J, p.Ay], () =>
                    p.Ay.getRailProjects()
                        .filter((t) => null != J.getStartedAt(t.id))
                        .sort((t, e) => P(e) - P(t)),
                );
            return (0, x.A)(e, (0, R.Xj)(t))[0] ?? null;
        })(),
        r = h.intl.string(C.default.uk6jhJ);
    return null != n || e
        ? (0, l.jsx)("div", {
              className: q.NI,
              children:
                  null != n
                      ? (0, l.jsx)(G, { project: n, showWand: e, wandLabel: r }, n.id)
                      : (0, l.jsx)(N.A, { icon: f.MagicWandIcon, tooltip: r, onClick: B }),
          })
        : null;
}
function z() {
    let t = (0, u.bG)([i.A], () => i.A.isPinned());
    return (0, l.jsx)(M, { showWand: !t });
}
