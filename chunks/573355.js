n.d(t, { SE: () => k, bc: () => G, cO: () => D, ES: () => F, Ef: () => L, VI: () => V });
var i = n(477900),
    l = n(582128),
    r = n(283973),
    s = n(497767),
    a = n(565829),
    o = n(717398),
    c = n(993401),
    u = n(17928),
    d = n(922016),
    E = n(980707),
    m = n(803664),
    f = n(509302),
    x = n(460597),
    R = n(994500),
    p = n(403362),
    g = n(183555),
    A = n(652215),
    I = n(375708);
function _(e) {
    let { user: t, analyticsLocation: n } = e,
        i = (0, u.bG)([R.A], () => R.A.getRelationshipType(t.id) === A.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, g.NJ)(),
        s = (0, m.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        a = (0, f.A)({ user: t }),
        o = (0, x.A)({ user: t });
    return l.useMemo(() => [i ? null : s, a, o].filter(p.Vq), [a, s, i, o]);
}
function h(e) {
    let { menuItems: t, children: n, targetElementRef: l } = e;
    return (0, i.jsx)(d.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(E.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": I.intl.string(I.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var N = n(682348),
    v = n(429913),
    O = n(834730),
    b = n(769015),
    j = n(425459);
function C(e) {
    let { applications: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(O.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: j.wx,
                children: I.intl.string(I.t["Uv/eTx"]),
            }),
            (0, i.jsx)("div", {
                className: j.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: j.nM,
                                children: [
                                    (0, i.jsx)(b.A, { game: e, size: b.M.XXSMALL }),
                                    (0, i.jsx)(O.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: e.name,
                                    }),
                                ],
                            },
                            e.id,
                        );
                }),
            }),
        ],
    });
}
let T = [];
function S(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [s, o] = l.useState(!1),
        c = l.useCallback(() => o(!0), []),
        u = l.useMemo(
            () =>
                s
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : T,
            [s, t],
        ),
        d = (0, v.A)(u, s),
        E = l.useMemo(() => d.filter(p.Vq), [d]),
        { tooltipText: m, ariaLabel: f } = l.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, i.jsx)(C, { applications: E }),
                    ariaLabel:
                        (function (e) {
                            switch (e.length) {
                                case 0:
                                    return;
                                case 1:
                                    return e[0].name;
                                case 2:
                                    return I.intl.formatToPlainString(I.t["G/lpQU"], {
                                        item1: e[0].name,
                                        item2: e[1].name,
                                    });
                                default:
                                    let t = e
                                            .slice(0, -1)
                                            .map((e) => {
                                                let { name: t } = e;
                                                return t;
                                            })
                                            .join(", "),
                                        n = e[e.length - 1];
                                    return I.intl.formatToPlainString(I.t.PIMweg, { items: t, last: n.name });
                            }
                        })(E) ?? I.intl.string(I.t.ujfP6f),
                };
            if (n) {
                let e = I.intl.string(I.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = I.intl.string(I.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [E, t.length, n, r]);
    return {
        onMouseEnter: c,
        ariaLabel: f,
        tooltipText: m,
        icon: l.useMemo(() => {
            if (t.length > 0) return N._;
            if (n || r) return a.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var M = n(518477);
function P(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = l.useCallback(() => o.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: M.pt.SEND_FRIEND_REQUEST, icon: r.R, text: I.intl.string(I.t.w5uwoI), onClick: i };
}
function D(e) {
    let { userId: t, analyticsLocation: n, ...l } = e,
        r = P({ userId: t, analyticsLocation: n });
    return (0, i.jsx)(c.FD, { ...r, ...l });
}
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, s] = l.useState(!1),
        { text: a, onClick: o, ...u } = P({ userId: t, analyticsLocation: n }),
        d = l.useCallback(async () => {
            s(!0);
            try {
                await o?.();
            } finally {
                s(!1);
            }
        }, [o]);
    return (0, i.jsx)(c.br, { tooltipText: a, ...u, onClick: d, loading: r });
}
let y = { [A.eA$.FRIEND]: s.V, [A.eA$.PENDING_OUTGOING]: a.l, [A.eA$.PENDING_INCOMING]: a.l },
    U = {
        [A.eA$.FRIEND]: () => I.intl.string(I.t.G7jMpU),
        [A.eA$.PENDING_OUTGOING]: () => I.intl.string(I.t["s/+byI"]),
        [A.eA$.PENDING_INCOMING]: () => I.intl.string(I.t["6QQCQ+"]),
    };
function L(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...s } = e,
        a = y[n],
        o = U[n](),
        u = _({ user: t, analyticsLocation: r }),
        d = l.useRef(null),
        E = { icon: a, tooltipText: o, ...s };
    return 0 === u.length
        ? (0, i.jsx)(c.q3, { ...E, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: d,
              menuItems: u,
              children: (e) => (0, i.jsx)(c.q3, { buttonRef: d, ...e, ...E }),
          });
}
function G(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...s } = e,
        a = y[n],
        o = U[n](),
        u = _({ user: t, analyticsLocation: r }),
        d = l.useRef(null),
        E = { icon: a, tooltipText: o, ...s };
    return 0 === u.length
        ? (0, i.jsx)(c.br, { ...E, disabled: !0, tooltipPosition: "top" })
        : (0, i.jsx)(h, {
              targetElementRef: d,
              menuItems: u,
              children: (e) => (0, i.jsx)(c.br, { buttonRef: d, ...e, ...E, tooltipPosition: "top" }),
          });
}
function F(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: s,
            analyticsLocation: a,
            ...o
        } = e,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: E,
            icon: m,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s }),
        f = _({ user: t, analyticsLocation: a }),
        x = l.useRef(null),
        R = { icon: m, __unsupportedReactNodeAsText: u, "aria-label": E, onMouseEnter: d, ...o };
    return 0 === f.length
        ? (0, i.jsx)(c.q3, { ...R, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: x,
              menuItems: f,
              children: (e) =>
                  (0, i.jsx)(c.q3, {
                      buttonRef: x,
                      ...e,
                      ...R,
                      onMouseEnter: function () {
                          d?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
function V(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: s,
            analyticsLocation: a,
            ...o
        } = e,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: E,
            icon: m,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s }),
        f = _({ user: t, analyticsLocation: a }),
        x = l.useRef(null),
        R = { icon: m, __unsupportedReactNodeAsText: u, "aria-label": E, onMouseEnter: d, ...o };
    return 0 === f.length
        ? (0, i.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...R, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: x,
              menuItems: f,
              children: (e) =>
                  (0, i.jsx)(c.br, {
                      buttonRef: x,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...R,
                      onMouseEnter: function () {
                          d?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
