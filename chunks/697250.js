n.d(t, { ES: () => v, Ef: () => N, SE: () => E, VI: () => b, bc: () => R, cO: () => g });
var l = n(627968),
    i = n(64700),
    r = n(283973),
    a = n(497767),
    s = n(565829),
    o = n(49229),
    c = n(993401),
    u = n(583311),
    d = n(588406),
    m = n(518477),
    f = n(652215),
    x = n(985018);
function A(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = i.useCallback(() => o.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: m.pt.SEND_FRIEND_REQUEST, icon: r.R, text: x.intl.string(x.t.w5uwoI), onClick: l };
}
function g(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        r = A({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(c.FD, { ...r, ...i });
}
function E(e) {
    let { userId: t, analyticsLocation: n, setFriendRequestSent: r } = e,
        [a, s] = i.useState(!1),
        { text: o, onClick: u, ...d } = A({ userId: t, analyticsLocation: n }),
        m = i.useCallback(async () => {
            s(!0);
            try {
                r?.(!0), await u?.();
            } catch {
                r?.(!1);
            } finally {
                s(!1);
            }
        }, [u, r]);
    return (0, l.jsx)(c.br, { tooltipText: o, ...d, onClick: m, loading: a });
}
let p = { [f.eA$.FRIEND]: a.V, [f.eA$.PENDING_OUTGOING]: s.l, [f.eA$.PENDING_INCOMING]: s.l },
    h = {
        [f.eA$.FRIEND]: () => x.intl.string(x.t.G7jMpU),
        [f.eA$.PENDING_OUTGOING]: () => x.intl.string(x.t["s/+byI"]),
        [f.eA$.PENDING_INCOMING]: () => x.intl.string(x.t["6QQCQ+"]),
    };
function N(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...a } = e,
        s = p[n],
        o = h[n](),
        d = (0, u.T)({ user: t, analyticsLocation: r }),
        m = i.useRef(null),
        f = { icon: s, tooltipText: o, ...a };
    return 0 === d.length
        ? (0, l.jsx)(c.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(u.A, {
              targetElementRef: m,
              menuItems: d,
              children: (e) => (0, l.jsx)(c.q3, { buttonRef: m, ...e, ...f }),
          });
}
function R(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, toastShowing: a, ...s } = e,
        o = p[n],
        d = h[n](),
        m = (0, u.T)({ user: t, analyticsLocation: r }),
        f = i.useRef(null),
        x = { icon: o, tooltipText: d, ...s };
    return 0 === m.length
        ? (0, l.jsx)(c.br, { ...x, disabled: !0, tooltipPosition: a ? "right" : "top" })
        : (0, l.jsx)(u.A, {
              targetElementRef: f,
              menuItems: m,
              children: (e) => (0, l.jsx)(c.br, { buttonRef: f, ...e, ...x, tooltipPosition: a ? "right" : "top" }),
          });
}
function v(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = e,
        {
            tooltipText: m,
            onMouseEnter: f,
            ariaLabel: x,
            icon: A,
        } = (0, d.E)({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        g = (0, u.T)({ user: t, analyticsLocation: s }),
        E = i.useRef(null),
        p = { icon: A, __unsupportedReactNodeAsText: m, "aria-label": x, onMouseEnter: f, ...o };
    return 0 === g.length
        ? (0, l.jsx)(c.q3, { ...p, disabled: !0 })
        : (0, l.jsx)(u.A, {
              targetElementRef: E,
              menuItems: g,
              children: (e) =>
                  (0, l.jsx)(c.q3, {
                      buttonRef: E,
                      ...e,
                      ...p,
                      onMouseEnter: () => {
                          f?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
function b(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = e,
        {
            tooltipText: m,
            onMouseEnter: f,
            ariaLabel: x,
            icon: A,
        } = (0, d.E)({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        g = (0, u.T)({ user: t, analyticsLocation: s }),
        E = i.useRef(null),
        p = { icon: A, __unsupportedReactNodeAsText: m, "aria-label": x, onMouseEnter: f, ...o };
    return 0 === g.length
        ? (0, l.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...p, disabled: !0 })
        : (0, l.jsx)(u.A, {
              targetElementRef: E,
              menuItems: g,
              children: (e) =>
                  (0, l.jsx)(c.br, {
                      buttonRef: E,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...p,
                      onMouseEnter: () => {
                          f?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
