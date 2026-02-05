"use strict";
n.d(t, { ES: () => I, Ef: () => E, SE: () => h, VI: () => T, bc: () => A, cO: () => p });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(49229),
    o = n(993401),
    l = n(583311),
    u = n(588406),
    c = n(518477),
    d = n(652215),
    _ = n(985018);
function f(e) {
    let { userId: t, analyticsLocation: n } = e,
        r = i.useCallback(() => {
            s.A.addRelationship({ userId: t, context: { location: n } });
        }, [n, t]);
    return { action: c.pt.SEND_FRIEND_REQUEST, icon: a.Rvf, text: _.intl.string(_.t.w5uwoI), onClick: r };
}
function p(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        a = f({ userId: t, analyticsLocation: n });
    return (0, r.jsx)(o.FD, { ...a, ...i });
}
function h(e) {
    let { userId: t, analyticsLocation: n } = e,
        { text: i, ...a } = f({ userId: t, analyticsLocation: n });
    return (0, r.jsx)(o.br, { tooltipText: i, ...a });
}
let m = { [d.eA$.FRIEND]: a.V1C, [d.eA$.PENDING_OUTGOING]: a.lI8, [d.eA$.PENDING_INCOMING]: a.lI8 },
    g = {
        [d.eA$.FRIEND]: () => _.intl.string(_.t.G7jMpU),
        [d.eA$.PENDING_OUTGOING]: () => _.intl.string(_.t["s/+byI"]),
        [d.eA$.PENDING_INCOMING]: () => _.intl.string(_.t["6QQCQ+"]),
    };
function E(e) {
    let { user: t, relationshipType: n, analyticsLocation: a, ...s } = e,
        u = m[n],
        c = g[n](),
        d = (0, l.T)({ user: t, analyticsLocation: a }),
        _ = i.useRef(null),
        f = { icon: u, tooltipText: c, ...s };
    return 0 === d.length
        ? (0, r.jsx)(o.q3, { ...f, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: _,
              menuItems: d,
              children: (e) => (0, r.jsx)(o.q3, { buttonRef: _, ...e, ...f }),
          });
}
function A(e) {
    let { user: t, relationshipType: n, analyticsLocation: a, ...s } = e,
        u = m[n],
        c = g[n](),
        d = (0, l.T)({ user: t, analyticsLocation: a }),
        _ = i.useRef(null),
        f = { icon: u, tooltipText: c, ...s };
    return 0 === d.length
        ? (0, r.jsx)(o.br, { ...f, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: _,
              menuItems: d,
              children: (e) => (0, r.jsx)(o.br, { buttonRef: _, ...e, ...f }),
          });
}
function I(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: s,
            analyticsLocation: c,
            ...d
        } = e,
        {
            tooltipText: _,
            onMouseEnter: f,
            ariaLabel: p,
            icon: h,
        } = (0, u.E)({ gameFriends: n, hasOutgoingPendingGameFriends: a, hasIncomingPendingGameFriends: s }),
        m = (0, l.T)({ user: t, analyticsLocation: c }),
        g = i.useRef(null),
        E = { icon: h, __unsupportedReactNodeAsText: _, "aria-label": p, onMouseEnter: f, ...d };
    return 0 === m.length
        ? (0, r.jsx)(o.q3, { ...E, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: g,
              menuItems: m,
              children: (e) => {
                  let t = () => {
                      f?.(), e.onMouseEnter?.();
                  };
                  return (0, r.jsx)(o.q3, { buttonRef: g, ...e, ...E, onMouseEnter: t });
              },
          });
}
function T(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: s,
            analyticsLocation: c,
            ...d
        } = e,
        {
            tooltipText: _,
            onMouseEnter: f,
            ariaLabel: p,
            icon: h,
        } = (0, u.E)({ gameFriends: n, hasOutgoingPendingGameFriends: a, hasIncomingPendingGameFriends: s }),
        m = (0, l.T)({ user: t, analyticsLocation: c }),
        g = i.useRef(null),
        E = { icon: h, __unsupportedReactNodeAsText: _, "aria-label": p, onMouseEnter: f, ...d };
    return 0 === m.length
        ? (0, r.jsx)(o.br, { tooltipPosition: "left", tooltipAlign: "top", ...E, disabled: !0 })
        : (0, r.jsx)(l.A, {
              targetElementRef: g,
              menuItems: m,
              children: (e) => {
                  let t = () => {
                      f?.(), e.onMouseEnter?.();
                  };
                  return (0, r.jsx)(o.br, {
                      buttonRef: g,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...E,
                      onMouseEnter: t,
                  });
              },
          });
}
