n.d(e, { SE: () => U, bc: () => D, cO: () => O, ES: () => F, Ef: () => L, VI: () => Q });
var i = n(627968),
    l = n(64700),
    r = n(283973),
    a = n(497767),
    s = n(565829),
    o = n(717398),
    c = n(993401),
    u = n(17928),
    d = n(922016),
    m = n(980707),
    x = n(803664),
    f = n(509302),
    E = n(460597),
    g = n(994500),
    p = n(403362),
    R = n(183555),
    N = n(652215),
    A = n(375708);
function j(t) {
    let { user: e, analyticsLocation: n } = t,
        i = (0, u.bG)([g.A], () => g.A.getRelationshipType(e.id) === N.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, R.NJ)(),
        a = (0, x.A)({
            user: e,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        s = (0, f.A)({ user: e }),
        o = (0, E.A)({ user: e });
    return l.useMemo(() => [i ? null : a, s, o].filter(p.Vq), [s, a, i, o]);
}
function h(t) {
    let { menuItems: e, children: n, targetElementRef: l } = t;
    return (0, i.jsx)(d.Y, {
        targetElementRef: l,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, i.jsx)(m.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": A.intl.string(A.t.Jszi3G),
                children: e,
            });
        },
        children: (t) => n(t),
    });
}
var b = n(682348),
    I = n(429913),
    v = n(834730),
    _ = n(769015),
    C = n(945691);
function y(t) {
    let { applications: e } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: C.wx,
                children: A.intl.string(A.t["Uv/eTx"]),
            }),
            (0, i.jsx)("div", {
                className: C.p_,
                children: e.map((t) => {
                    if (null != t)
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: C.nM,
                                children: [
                                    (0, i.jsx)(_.A, { game: t, size: _.M.XXSMALL }),
                                    (0, i.jsx)(v.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: t.name,
                                    }),
                                ],
                            },
                            t.id,
                        );
                }),
            }),
        ],
    });
}
let T = [];
function P(t) {
    let { gameFriends: e, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = t,
        [a, o] = l.useState(!1),
        c = l.useCallback(() => o(!0), []),
        u = l.useMemo(
            () =>
                a
                    ? e.map((t) => {
                          let { applicationId: e } = t;
                          return e;
                      })
                    : T,
            [a, e],
        ),
        d = (0, I.A)(u, a),
        m = l.useMemo(() => d.filter(p.Vq), [d]),
        { tooltipText: x, ariaLabel: f } = l.useMemo(() => {
            if (e.length > 0)
                return {
                    tooltipText: (0, i.jsx)(y, { applications: m }),
                    ariaLabel:
                        (function (t) {
                            switch (t.length) {
                                case 0:
                                    return;
                                case 1:
                                    return t[0].name;
                                case 2:
                                    return A.intl.formatToPlainString(A.t["G/lpQU"], {
                                        item1: t[0].name,
                                        item2: t[1].name,
                                    });
                                default:
                                    let e = t
                                            .slice(0, -1)
                                            .map((t) => {
                                                let { name: e } = t;
                                                return e;
                                            })
                                            .join(", "),
                                        n = t[t.length - 1];
                                    return A.intl.formatToPlainString(A.t.PIMweg, { items: e, last: n.name });
                            }
                        })(m) ?? A.intl.string(A.t.ujfP6f),
                };
            if (n) {
                let t = A.intl.string(A.t["0eWeav"]);
                return { tooltipText: t, ariaLabel: t };
            }
            if (r) {
                let t = A.intl.string(A.t.MCgl9c);
                return { tooltipText: t, ariaLabel: t };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [m, e.length, n, r]);
    return {
        onMouseEnter: c,
        ariaLabel: f,
        tooltipText: x,
        icon: l.useMemo(() => {
            if (e.length > 0) return b._;
            if (n || r) return s.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [e.length, n, r]),
    };
}
var G = n(518477);
function S(t) {
    let { userId: e, analyticsLocation: n } = t,
        i = l.useCallback(() => o.A.addRelationship({ userId: e, context: { location: n } }), [n, e]);
    return { action: G.pt.SEND_FRIEND_REQUEST, icon: r.R, text: A.intl.string(A.t.w5uwoI), onClick: i };
}
function O(t) {
    let { userId: e, analyticsLocation: n, ...l } = t,
        r = S({ userId: e, analyticsLocation: n });
    return (0, i.jsx)(c.FD, { ...r, ...l });
}
function U(t) {
    let { userId: e, analyticsLocation: n } = t,
        [r, a] = l.useState(!1),
        { text: s, onClick: o, ...u } = S({ userId: e, analyticsLocation: n }),
        d = l.useCallback(async () => {
            a(!0);
            try {
                await o?.();
            } finally {
                a(!1);
            }
        }, [o]);
    return (0, i.jsx)(c.br, { tooltipText: s, ...u, onClick: d, loading: r });
}
let M = { [N.eA$.FRIEND]: a.V, [N.eA$.PENDING_OUTGOING]: s.l, [N.eA$.PENDING_INCOMING]: s.l },
    k = {
        [N.eA$.FRIEND]: () => A.intl.string(A.t.G7jMpU),
        [N.eA$.PENDING_OUTGOING]: () => A.intl.string(A.t["s/+byI"]),
        [N.eA$.PENDING_INCOMING]: () => A.intl.string(A.t["6QQCQ+"]),
    };
function L(t) {
    let { user: e, relationshipType: n, analyticsLocation: r, ...a } = t,
        s = M[n],
        o = k[n](),
        u = j({ user: e, analyticsLocation: r }),
        d = l.useRef(null),
        m = { icon: s, tooltipText: o, ...a };
    return 0 === u.length
        ? (0, i.jsx)(c.q3, { ...m, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: d,
              menuItems: u,
              children: (t) => (0, i.jsx)(c.q3, { buttonRef: d, ...t, ...m }),
          });
}
function D(t) {
    let { user: e, relationshipType: n, analyticsLocation: r, ...a } = t,
        s = M[n],
        o = k[n](),
        u = j({ user: e, analyticsLocation: r }),
        d = l.useRef(null),
        m = { icon: s, tooltipText: o, ...a };
    return 0 === u.length
        ? (0, i.jsx)(c.br, { ...m, disabled: !0, tooltipPosition: "top" })
        : (0, i.jsx)(h, {
              targetElementRef: d,
              menuItems: u,
              children: (t) => (0, i.jsx)(c.br, { buttonRef: d, ...t, ...m, tooltipPosition: "top" }),
          });
}
function F(t) {
    let {
            user: e,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = t,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: m,
            icon: x,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        f = j({ user: e, analyticsLocation: s }),
        E = l.useRef(null),
        g = { icon: x, __unsupportedReactNodeAsText: u, "aria-label": m, onMouseEnter: d, ...o };
    return 0 === f.length
        ? (0, i.jsx)(c.q3, { ...g, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: E,
              menuItems: f,
              children: (t) =>
                  (0, i.jsx)(c.q3, {
                      buttonRef: E,
                      ...t,
                      ...g,
                      onMouseEnter: function () {
                          d?.(), t.onMouseEnter?.();
                      },
                  }),
          });
}
function Q(t) {
    let {
            user: e,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = t,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: m,
            icon: x,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        f = j({ user: e, analyticsLocation: s }),
        E = l.useRef(null),
        g = { icon: x, __unsupportedReactNodeAsText: u, "aria-label": m, onMouseEnter: d, ...o };
    return 0 === f.length
        ? (0, i.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...g, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: E,
              menuItems: f,
              children: (t) =>
                  (0, i.jsx)(c.br, {
                      buttonRef: E,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...t,
                      ...g,
                      onMouseEnter: function () {
                          d?.(), t.onMouseEnter?.();
                      },
                  }),
          });
}
