n.d(e, { SE: () => U, bc: () => L, cO: () => S, ES: () => F, Ef: () => D, VI: () => Q });
var i = n(627968),
    l = n(64700),
    r = n(283973),
    a = n(497767),
    o = n(565829),
    s = n(717398),
    c = n(993401),
    u = n(17928),
    d = n(922016),
    m = n(980707),
    x = n(803664),
    E = n(509302),
    f = n(460597),
    g = n(994500),
    p = n(403362),
    R = n(183555),
    A = n(652215),
    N = n(375708);
function h(t) {
    let { user: e, analyticsLocation: n } = t,
        i = (0, u.bG)([g.A], () => g.A.getRelationshipType(e.id) === A.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, R.NJ)(),
        a = (0, x.A)({
            user: e,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        o = (0, E.A)({ user: e }),
        s = (0, f.A)({ user: e });
    return l.useMemo(() => [i ? null : a, o, s].filter(p.Vq), [o, a, i, s]);
}
function j(t) {
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
                "aria-label": N.intl.string(N.t.Jszi3G),
                children: e,
            });
        },
        children: (t) => n(t),
    });
}
var I = n(682348),
    b = n(429913),
    v = n(834730),
    _ = n(137177),
    C = n(945691);
function T(t) {
    let { applications: e } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: C.wx,
                children: N.intl.string(N.t["Uv/eTx"]),
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
let y = [];
function P(t) {
    let { gameFriends: e, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = t,
        [a, s] = l.useState(!1),
        c = l.useCallback(() => s(!0), []),
        u = l.useMemo(
            () =>
                a
                    ? e.map((t) => {
                          let { applicationId: e } = t;
                          return e;
                      })
                    : y,
            [a, e],
        ),
        d = (0, b.A)(u, a),
        m = l.useMemo(() => d.filter(p.Vq), [d]),
        { tooltipText: x, ariaLabel: E } = l.useMemo(() => {
            if (e.length > 0)
                return {
                    tooltipText: (0, i.jsx)(T, { applications: m }),
                    ariaLabel:
                        (function (t) {
                            switch (t.length) {
                                case 0:
                                    return;
                                case 1:
                                    return t[0].name;
                                case 2:
                                    return N.intl.formatToPlainString(N.t["G/lpQU"], {
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
                                    return N.intl.formatToPlainString(N.t.PIMweg, { items: e, last: n.name });
                            }
                        })(m) ?? N.intl.string(N.t.ujfP6f),
                };
            if (n) {
                let t = N.intl.string(N.t["0eWeav"]);
                return { tooltipText: t, ariaLabel: t };
            }
            if (r) {
                let t = N.intl.string(N.t.MCgl9c);
                return { tooltipText: t, ariaLabel: t };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [m, e.length, n, r]);
    return {
        onMouseEnter: c,
        ariaLabel: E,
        tooltipText: x,
        icon: l.useMemo(() => {
            if (e.length > 0) return I._;
            if (n || r) return o.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [e.length, n, r]),
    };
}
var G = n(518477);
function O(t) {
    let { userId: e, analyticsLocation: n } = t,
        i = l.useCallback(() => s.A.addRelationship({ userId: e, context: { location: n } }), [n, e]);
    return { action: G.pt.SEND_FRIEND_REQUEST, icon: r.R, text: N.intl.string(N.t.w5uwoI), onClick: i };
}
function S(t) {
    let { userId: e, analyticsLocation: n, ...l } = t,
        r = O({ userId: e, analyticsLocation: n });
    return (0, i.jsx)(c.FD, { ...r, ...l });
}
function U(t) {
    let { userId: e, analyticsLocation: n, setFriendRequestSent: r } = t,
        [a, o] = l.useState(!1),
        { text: s, onClick: u, ...d } = O({ userId: e, analyticsLocation: n }),
        m = l.useCallback(async () => {
            o(!0);
            try {
                r?.(!0), await u?.();
            } catch {
                r?.(!1);
            } finally {
                o(!1);
            }
        }, [u, r]);
    return (0, i.jsx)(c.br, { tooltipText: s, ...d, onClick: m, loading: a });
}
let M = { [A.eA$.FRIEND]: a.V, [A.eA$.PENDING_OUTGOING]: o.l, [A.eA$.PENDING_INCOMING]: o.l },
    k = {
        [A.eA$.FRIEND]: () => N.intl.string(N.t.G7jMpU),
        [A.eA$.PENDING_OUTGOING]: () => N.intl.string(N.t["s/+byI"]),
        [A.eA$.PENDING_INCOMING]: () => N.intl.string(N.t["6QQCQ+"]),
    };
function D(t) {
    let { user: e, relationshipType: n, analyticsLocation: r, ...a } = t,
        o = M[n],
        s = k[n](),
        u = h({ user: e, analyticsLocation: r }),
        d = l.useRef(null),
        m = { icon: o, tooltipText: s, ...a };
    return 0 === u.length
        ? (0, i.jsx)(c.q3, { ...m, disabled: !0 })
        : (0, i.jsx)(j, {
              targetElementRef: d,
              menuItems: u,
              children: (t) => (0, i.jsx)(c.q3, { buttonRef: d, ...t, ...m }),
          });
}
function L(t) {
    let { user: e, relationshipType: n, analyticsLocation: r, toastShowing: a, ...o } = t,
        s = M[n],
        u = k[n](),
        d = h({ user: e, analyticsLocation: r }),
        m = l.useRef(null),
        x = { icon: s, tooltipText: u, ...o };
    return 0 === d.length
        ? (0, i.jsx)(c.br, { ...x, disabled: !0, tooltipPosition: a ? "right" : "top" })
        : (0, i.jsx)(j, {
              targetElementRef: m,
              menuItems: d,
              children: (t) => (0, i.jsx)(c.br, { buttonRef: m, ...t, ...x, tooltipPosition: a ? "right" : "top" }),
          });
}
function F(t) {
    let {
            user: e,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: o,
            ...s
        } = t,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: m,
            icon: x,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        E = h({ user: e, analyticsLocation: o }),
        f = l.useRef(null),
        g = { icon: x, __unsupportedReactNodeAsText: u, "aria-label": m, onMouseEnter: d, ...s };
    return 0 === E.length
        ? (0, i.jsx)(c.q3, { ...g, disabled: !0 })
        : (0, i.jsx)(j, {
              targetElementRef: f,
              menuItems: E,
              children: (t) =>
                  (0, i.jsx)(c.q3, {
                      buttonRef: f,
                      ...t,
                      ...g,
                      onMouseEnter: () => {
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
            analyticsLocation: o,
            ...s
        } = t,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: m,
            icon: x,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        E = h({ user: e, analyticsLocation: o }),
        f = l.useRef(null),
        g = { icon: x, __unsupportedReactNodeAsText: u, "aria-label": m, onMouseEnter: d, ...s };
    return 0 === E.length
        ? (0, i.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...g, disabled: !0 })
        : (0, i.jsx)(j, {
              targetElementRef: f,
              menuItems: E,
              children: (t) =>
                  (0, i.jsx)(c.br, {
                      buttonRef: f,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...t,
                      ...g,
                      onMouseEnter: () => {
                          d?.(), t.onMouseEnter?.();
                      },
                  }),
          });
}
