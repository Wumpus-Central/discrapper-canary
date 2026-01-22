n.d(t, {
    ES: () => T,
    Ef: () => S,
    SE: () => O,
    VI: () => C,
    bc: () => I,
    cO: () => y,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(49229),
    o = n(993401),
    l = n(583311),
    c = n(588406),
    u = n(518477),
    d = n(652215),
    f = n(985018);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function b(e) {
    let { userId: t, analyticsLocation: n } = e,
        r = i.useCallback(() => {
            s.A.addRelationship({
                userId: t,
                context: { location: n },
            });
        }, [n, t]);
    return {
        action: u.pt.SEND_FRIEND_REQUEST,
        icon: a.Rvf,
        text: f.intl.string(f.t.w5uwoI),
        onClick: r,
    };
}
function y(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = g(e, ["userId", "analyticsLocation"]),
        a = b({
            userId: t,
            analyticsLocation: n,
        });
    return (0, r.jsx)(o.FD, _({}, a, i));
}
function O(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = b({
            userId: t,
            analyticsLocation: n,
        }),
        { text: a } = i,
        s = g(i, ["text"]);
    return (0, r.jsx)(o.br, _({ tooltipText: a }, s));
}
let A = {
        [d.eA$.FRIEND]: a.V1C,
        [d.eA$.PENDING_OUTGOING]: a.lI8,
        [d.eA$.PENDING_INCOMING]: a.lI8,
    },
    v = {
        [d.eA$.FRIEND]: () => f.intl.string(f.t.G7jMpU),
        [d.eA$.PENDING_OUTGOING]: () => f.intl.string(f.t["s/+byI"]),
        [d.eA$.PENDING_INCOMING]: () => f.intl.string(f.t["6QQCQ+"]),
    };
function S(e) {
    let { user: t, relationshipType: n, analyticsLocation: a } = e,
        s = g(e, ["user", "relationshipType", "analyticsLocation"]),
        c = A[n],
        u = v[n](),
        d = (0, l.T)({
            user: t,
            analyticsLocation: a,
        }),
        f = i.useRef(null),
        p = _(
            {
                icon: c,
                tooltipText: u,
            },
            s,
        );
    return 0 === d.length
        ? (0, r.jsx)(o.q3, m(_({}, p), { disabled: !0 }))
        : (0, r.jsx)(l.A, {
              targetElementRef: f,
              menuItems: d,
              children: (e) => (0, r.jsx)(o.q3, _({ buttonRef: f }, e, p)),
          });
}
function I(e) {
    let { user: t, relationshipType: n, analyticsLocation: a } = e,
        s = g(e, ["user", "relationshipType", "analyticsLocation"]),
        c = A[n],
        u = v[n](),
        d = (0, l.T)({
            user: t,
            analyticsLocation: a,
        }),
        f = i.useRef(null),
        p = _(
            {
                icon: c,
                tooltipText: u,
            },
            s,
        );
    return 0 === d.length
        ? (0, r.jsx)(o.br, m(_({}, p), { disabled: !0 }))
        : (0, r.jsx)(l.A, {
              targetElementRef: f,
              menuItems: d,
              children: (e) => (0, r.jsx)(o.br, _({ buttonRef: f }, e, p)),
          });
}
function T(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: s,
            analyticsLocation: u,
        } = e,
        d = g(e, [
            "user",
            "gameFriends",
            "hasOutgoingPendingGameFriends",
            "hasIncomingPendingGameFriends",
            "analyticsLocation",
        ]),
        {
            tooltipText: f,
            onMouseEnter: p,
            ariaLabel: h,
            icon: E,
        } = (0, c.E)({
            gameFriends: n,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: s,
        }),
        b = (0, l.T)({
            user: t,
            analyticsLocation: u,
        }),
        y = i.useRef(null),
        O = _(
            {
                icon: E,
                __unsupportedReactNodeAsText: f,
                "aria-label": h,
                onMouseEnter: p,
            },
            d,
        );
    return 0 === b.length
        ? (0, r.jsx)(o.q3, m(_({}, O), { disabled: !0 }))
        : (0, r.jsx)(l.A, {
              targetElementRef: y,
              menuItems: b,
              children: (e) => {
                  let t = () => {
                      var t;
                      null == p || p(), null == (t = e.onMouseEnter) || t.call(e);
                  };
                  return (0, r.jsx)(o.q3, m(_({ buttonRef: y }, e, O), { onMouseEnter: t }));
              },
          });
}
function C(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: s,
            analyticsLocation: u,
        } = e,
        d = g(e, [
            "user",
            "gameFriends",
            "hasOutgoingPendingGameFriends",
            "hasIncomingPendingGameFriends",
            "analyticsLocation",
        ]),
        {
            tooltipText: f,
            onMouseEnter: p,
            ariaLabel: h,
            icon: E,
        } = (0, c.E)({
            gameFriends: n,
            hasOutgoingPendingGameFriends: a,
            hasIncomingPendingGameFriends: s,
        }),
        b = (0, l.T)({
            user: t,
            analyticsLocation: u,
        }),
        y = i.useRef(null),
        O = _(
            {
                icon: E,
                __unsupportedReactNodeAsText: f,
                "aria-label": h,
                onMouseEnter: p,
            },
            d,
        );
    return 0 === b.length
        ? (0, r.jsx)(
              o.br,
              m(
                  _(
                      {
                          tooltipPosition: "left",
                          tooltipAlign: "top",
                      },
                      O,
                  ),
                  { disabled: !0 },
              ),
          )
        : (0, r.jsx)(l.A, {
              targetElementRef: y,
              menuItems: b,
              children: (e) => {
                  let t = () => {
                      var t;
                      null == p || p(), null == (t = e.onMouseEnter) || t.call(e);
                  };
                  return (0, r.jsx)(
                      o.br,
                      m(
                          _(
                              {
                                  buttonRef: y,
                                  tooltipPosition: "left",
                                  tooltipAlign: "top",
                              },
                              e,
                              O,
                          ),
                          { onMouseEnter: t },
                      ),
                  );
              },
          });
}
