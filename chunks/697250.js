n.d(t, { ES: () => R, Ef: () => N, SE: () => p, VI: () => b, bc: () => v, cO: () => g });
var l = n(627968),
    r = n(64700),
    i = n(283973),
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
        l = r.useCallback(() => o.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: m.pt.SEND_FRIEND_REQUEST, icon: i.R, text: x.intl.string(x.t.w5uwoI), onClick: l };
}
function g(e) {
    let { userId: t, analyticsLocation: n, ...r } = e,
        i = A({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(c.FD, { ...i, ...r });
}
function p(e) {
    let { userId: t, analyticsLocation: n, setFriendRequestSent: i } = e,
        [a, s] = r.useState(!1),
        { text: o, onClick: u, ...d } = A({ userId: t, analyticsLocation: n }),
        m = r.useCallback(async () => {
            s(!0);
            try {
                i?.(!0), await u?.();
            } catch {
                i?.(!1);
            } finally {
                s(!1);
            }
        }, [u, i]);
    return (0, l.jsx)(c.br, { tooltipText: o, ...d, onClick: m, loading: a });
}
let E = { [f.eA$.FRIEND]: a.V, [f.eA$.PENDING_OUTGOING]: s.l, [f.eA$.PENDING_INCOMING]: s.l },
    h = {
        [f.eA$.FRIEND]: () => x.intl.string(x.t.G7jMpU),
        [f.eA$.PENDING_OUTGOING]: () => x.intl.string(x.t["s/+byI"]),
        [f.eA$.PENDING_INCOMING]: () => x.intl.string(x.t["6QQCQ+"]),
    };
function N(e) {
    let { user: t, relationshipType: n, analyticsLocation: i, ...a } = e,
        s = E[n],
        o = h[n](),
        d = (0, u.T)({ user: t, analyticsLocation: i }),
        m = r.useRef(null),
        f = { icon: s, tooltipText: o, ...a };
    return 0 === d.length
        ? (0, l.jsx)(c.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(u.A, {
              targetElementRef: m,
              menuItems: d,
              children: (e) => (0, l.jsx)(c.q3, { buttonRef: m, ...e, ...f }),
          });
}
function v(e) {
    let { user: t, relationshipType: n, analyticsLocation: i, toastShowing: a, ...s } = e,
        o = E[n],
        d = h[n](),
        m = (0, u.T)({ user: t, analyticsLocation: i }),
        f = r.useRef(null),
        x = { icon: o, tooltipText: d, ...s };
    return 0 === m.length
        ? (0, l.jsx)(c.br, { ...x, disabled: !0, tooltipPosition: a ? "right" : "top" })
        : (0, l.jsx)(u.A, {
              targetElementRef: f,
              menuItems: m,
              children: (e) => (0, l.jsx)(c.br, { buttonRef: f, ...e, ...x, tooltipPosition: a ? "right" : "top" }),
          });
}
function R(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: i,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = e,
        {
            tooltipText: m,
            onMouseEnter: f,
            ariaLabel: x,
            icon: A,
        } = (0, d.E)({ gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: a }),
        g = (0, u.T)({ user: t, analyticsLocation: s }),
        p = r.useRef(null),
        E = { icon: A, __unsupportedReactNodeAsText: m, "aria-label": x, onMouseEnter: f, ...o };
    return 0 === g.length
        ? (0, l.jsx)(c.q3, { ...E, disabled: !0 })
        : (0, l.jsx)(u.A, {
              targetElementRef: p,
              menuItems: g,
              children: (e) =>
                  (0, l.jsx)(c.q3, {
                      buttonRef: p,
                      ...e,
                      ...E,
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
            hasOutgoingPendingGameFriends: i,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = e,
        {
            tooltipText: m,
            onMouseEnter: f,
            ariaLabel: x,
            icon: A,
        } = (0, d.E)({ gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: a }),
        g = (0, u.T)({ user: t, analyticsLocation: s }),
        p = r.useRef(null),
        E = { icon: A, __unsupportedReactNodeAsText: m, "aria-label": x, onMouseEnter: f, ...o };
    return 0 === g.length
        ? (0, l.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...E, disabled: !0 })
        : (0, l.jsx)(u.A, {
              targetElementRef: p,
              menuItems: g,
              children: (e) =>
                  (0, l.jsx)(c.br, {
                      buttonRef: p,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...E,
                      onMouseEnter: () => {
                          f?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
