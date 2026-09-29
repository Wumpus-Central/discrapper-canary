n.d(t, { SE: () => k, bc: () => G, cO: () => P, ES: () => F, Ef: () => L, VI: () => V });
var i = n(477900),
    l = n(582128),
    r = n(283973),
    s = n(497767),
    a = n(565829),
    o = n(717398),
    u = n(993401),
    c = n(17928),
    d = n(922016),
    E = n(980707),
    f = n(803664),
    R = n(509302),
    I = n(460597),
    p = n(994500),
    _ = n(403362),
    A = n(183555),
    g = n(652215),
    m = n(375708);
function O(e) {
    let { user: t, analyticsLocation: n } = e,
        i = (0, c.bG)([p.A], () => p.A.getRelationshipType(t.id) === g.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, A.NJ)(),
        s = (0, f.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        a = (0, R.A)({ user: t }),
        o = (0, I.A)({ user: t });
    return l.useMemo(() => [i ? null : s, a, o].filter(_.Vq), [a, s, i, o]);
}
function x(e) {
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
                "aria-label": m.intl.string(m.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var N = n(682348),
    b = n(429913),
    h = n(834730),
    v = n(769015),
    C = n(773544);
function S(e) {
    let { applications: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: C.wx,
                children: m.intl.string(m.t["Uv/eTx"]),
            }),
            (0, i.jsx)("div", {
                className: C.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: C.nM,
                                children: [
                                    (0, i.jsx)(v.A, { game: e, size: v.M.XXSMALL }),
                                    (0, i.jsx)(h.E, {
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
function M(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [s, o] = l.useState(!1),
        u = l.useCallback(() => o(!0), []),
        c = l.useMemo(
            () =>
                s
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : T,
            [s, t],
        ),
        d = (0, b.A)(c, s),
        E = l.useMemo(() => d.filter(_.Vq), [d]),
        { tooltipText: f, ariaLabel: R } = l.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, i.jsx)(S, { applications: E }),
                    ariaLabel:
                        (function (e) {
                            switch (e.length) {
                                case 0:
                                    return;
                                case 1:
                                    return e[0].name;
                                case 2:
                                    return m.intl.formatToPlainString(m.t["G/lpQU"], {
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
                                    return m.intl.formatToPlainString(m.t.PIMweg, { items: t, last: n.name });
                            }
                        })(E) ?? m.intl.string(m.t.ujfP6f),
                };
            if (n) {
                let e = m.intl.string(m.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = m.intl.string(m.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [E, t.length, n, r]);
    return {
        onMouseEnter: u,
        ariaLabel: R,
        tooltipText: f,
        icon: l.useMemo(() => {
            if (t.length > 0) return N._;
            if (n || r) return a.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var j = n(518477);
function D(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = l.useCallback(() => o.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: j.pt.SEND_FRIEND_REQUEST, icon: r.R, text: m.intl.string(m.t.w5uwoI), onClick: i };
}
function P(e) {
    let { userId: t, analyticsLocation: n, ...l } = e,
        r = D({ userId: t, analyticsLocation: n });
    return (0, i.jsx)(u.FD, { ...r, ...l });
}
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, s] = l.useState(!1),
        { text: a, onClick: o, ...c } = D({ userId: t, analyticsLocation: n }),
        d = l.useCallback(async () => {
            s(!0);
            try {
                await o?.();
            } finally {
                s(!1);
            }
        }, [o]);
    return (0, i.jsx)(u.br, { tooltipText: a, ...c, onClick: d, loading: r });
}
let U = { [g.eA$.FRIEND]: s.V, [g.eA$.PENDING_OUTGOING]: a.l, [g.eA$.PENDING_INCOMING]: a.l },
    y = {
        [g.eA$.FRIEND]: () => m.intl.string(m.t.G7jMpU),
        [g.eA$.PENDING_OUTGOING]: () => m.intl.string(m.t["s/+byI"]),
        [g.eA$.PENDING_INCOMING]: () => m.intl.string(m.t["6QQCQ+"]),
    };
function L(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...s } = e,
        a = U[n],
        o = y[n](),
        c = O({ user: t, analyticsLocation: r }),
        d = l.useRef(null),
        E = { icon: a, tooltipText: o, ...s };
    return 0 === c.length
        ? (0, i.jsx)(u.q3, { ...E, disabled: !0 })
        : (0, i.jsx)(x, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, i.jsx)(u.q3, { buttonRef: d, ...e, ...E }),
          });
}
function G(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...s } = e,
        a = U[n],
        o = y[n](),
        c = O({ user: t, analyticsLocation: r }),
        d = l.useRef(null),
        E = { icon: a, tooltipText: o, ...s };
    return 0 === c.length
        ? (0, i.jsx)(u.br, { ...E, disabled: !0, tooltipPosition: "top" })
        : (0, i.jsx)(x, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, i.jsx)(u.br, { buttonRef: d, ...e, ...E, tooltipPosition: "top" }),
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
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: E,
            icon: f,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s }),
        R = O({ user: t, analyticsLocation: a }),
        I = l.useRef(null),
        p = { icon: f, __unsupportedReactNodeAsText: c, "aria-label": E, onMouseEnter: d, ...o };
    return 0 === R.length
        ? (0, i.jsx)(u.q3, { ...p, disabled: !0 })
        : (0, i.jsx)(x, {
              targetElementRef: I,
              menuItems: R,
              children: (e) =>
                  (0, i.jsx)(u.q3, {
                      buttonRef: I,
                      ...e,
                      ...p,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
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
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: E,
            icon: f,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s }),
        R = O({ user: t, analyticsLocation: a }),
        I = l.useRef(null),
        p = { icon: f, __unsupportedReactNodeAsText: c, "aria-label": E, onMouseEnter: d, ...o };
    return 0 === R.length
        ? (0, i.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...p, disabled: !0 })
        : (0, i.jsx)(x, {
              targetElementRef: I,
              menuItems: R,
              children: (e) =>
                  (0, i.jsx)(u.br, {
                      buttonRef: I,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...p,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
                      },
                  }),
          });
}
