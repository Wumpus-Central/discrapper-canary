"use strict";
n.d(t, { ES: () => I, Ef: () => g, SE: () => h, VI: () => T, bc: () => A, cO: () => p });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(49229),
    o = n(993401),
    l = n(583311),
    u = n(588406),
    c = n(518477),
    d = n(652215),
    _ = n(985018);
function f(e) {
    let { userId: t, analyticsLocation: n } = e,
        r = i.useCallback(() => a.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: c.pt.SEND_FRIEND_REQUEST, icon: s.Rvf, text: _.intl.string(_.t.w5uwoI), onClick: r };
}
function p(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        s = f({ userId: t, analyticsLocation: n });
    return (0, r.jsx)(o.FD, { ...s, ...i });
}
function h(e) {
    let { userId: t, analyticsLocation: n, setFriendRequestSent: s } = e,
        [a, l] = i.useState(!1),
        { text: u, onClick: c, ...d } = f({ userId: t, analyticsLocation: n }),
        _ = i.useCallback(async () => {
            l(!0);
            try {
                s?.(!0), await c?.();
            } catch {
                s?.(!1);
            } finally {
                l(!1);
            }
        }, [c, s]);
    return (0, r.jsx)(o.br, { tooltipText: u, ...d, onClick: _, loading: a });
}
let m = { [d.eA$.FRIEND]: s.V1C, [d.eA$.PENDING_OUTGOING]: s.lI8, [d.eA$.PENDING_INCOMING]: s.lI8 },
    E = {
        [d.eA$.FRIEND]: () => _.intl.string(_.t.G7jMpU),
        [d.eA$.PENDING_OUTGOING]: () => _.intl.string(_.t["s/+byI"]),
        [d.eA$.PENDING_INCOMING]: () => _.intl.string(_.t["6QQCQ+"]),
    };
function g(e) {
    let { user: t, relationshipType: n, analyticsLocation: s, ...a } = e,
        u = m[n],
        c = E[n](),
        d = (0, l.T)({ user: t, analyticsLocation: s }),
        _ = i.useRef(null),
        f = { icon: u, tooltipText: c, ...a };
    return 0 === d.length
        ? (0, r.jsx)(o.q3, { ...f, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: _,
              menuItems: d,
              children: (e) => (0, r.jsx)(o.q3, { buttonRef: _, ...e, ...f }),
          });
}
function A(e) {
    let { user: t, relationshipType: n, analyticsLocation: s, toastShowing: a, ...u } = e,
        c = m[n],
        d = E[n](),
        _ = (0, l.T)({ user: t, analyticsLocation: s }),
        f = i.useRef(null),
        p = { icon: c, tooltipText: d, ...u };
    return 0 === _.length
        ? (0, r.jsx)(o.br, { ...p, disabled: !0, tooltipPosition: a ? "right" : "top" })
        : (0, r.jsx)(l.A, {
              targetElementRef: f,
              menuItems: _,
              children: (e) => (0, r.jsx)(o.br, { buttonRef: f, ...e, ...p, tooltipPosition: a ? "right" : "top" }),
          });
}
function I(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: s,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: c,
            ...d
        } = e,
        {
            tooltipText: _,
            onMouseEnter: f,
            ariaLabel: p,
            icon: h,
        } = (0, u.E)({ gameFriends: n, hasOutgoingPendingGameFriends: s, hasIncomingPendingGameFriends: a }),
        m = (0, l.T)({ user: t, analyticsLocation: c }),
        E = i.useRef(null),
        g = { icon: h, __unsupportedReactNodeAsText: _, "aria-label": p, onMouseEnter: f, ...d };
    return 0 === m.length
        ? (0, r.jsx)(o.q3, { ...g, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: E,
              menuItems: m,
              children: (e) => {
                  let t = () => {
                      f?.(), e.onMouseEnter?.();
                  };
                  return (0, r.jsx)(o.q3, { buttonRef: E, ...e, ...g, onMouseEnter: t });
              },
          });
}
function T(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: s,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: c,
            ...d
        } = e,
        {
            tooltipText: _,
            onMouseEnter: f,
            ariaLabel: p,
            icon: h,
        } = (0, u.E)({ gameFriends: n, hasOutgoingPendingGameFriends: s, hasIncomingPendingGameFriends: a }),
        m = (0, l.T)({ user: t, analyticsLocation: c }),
        E = i.useRef(null),
        g = { icon: h, __unsupportedReactNodeAsText: _, "aria-label": p, onMouseEnter: f, ...d };
    return 0 === m.length
        ? (0, r.jsx)(o.br, { tooltipPosition: "left", tooltipAlign: "top", ...g, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: E,
              menuItems: m,
              children: (e) => {
                  let t = () => {
                      f?.(), e.onMouseEnter?.();
                  };
                  return (0, r.jsx)(o.br, {
                      buttonRef: E,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...g,
                      onMouseEnter: t,
                  });
              },
          });
}
