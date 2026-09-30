n.d(t, { SE: () => k, bc: () => G, cO: () => P, ES: () => F, Ef: () => y, VI: () => V });
var i = n(477900),
    l = n(582128),
    r = n(283973),
    a = n(497767),
    o = n(565829),
    s = n(717398),
    u = n(993401),
    c = n(17928),
    d = n(922016),
    E = n(980707),
    f = n(803664),
    R = n(509302),
    A = n(460597),
    _ = n(994500),
    p = n(403362),
    I = n(183555),
    g = n(652215),
    m = n(375708);
function O(e) {
    let { user: t, analyticsLocation: n } = e,
        i = (0, c.bG)([_.A], () => _.A.getRelationshipType(t.id) === g.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, I.NJ)(),
        a = (0, f.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        o = (0, R.A)({ user: t }),
        s = (0, A.A)({ user: t });
    return l.useMemo(() => [i ? null : a, o, s].filter(p.Vq), [o, a, i, s]);
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
var b = n(682348),
    N = n(429913),
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
        [a, s] = l.useState(!1),
        u = l.useCallback(() => s(!0), []),
        c = l.useMemo(
            () =>
                a
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : T,
            [a, t],
        ),
        d = (0, N.A)(c, a),
        E = l.useMemo(() => d.filter(p.Vq), [d]),
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
            if (t.length > 0) return b._;
            if (n || r) return o.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var j = n(518477);
function D(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = l.useCallback(() => s.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: j.pt.SEND_FRIEND_REQUEST, icon: r.R, text: m.intl.string(m.t.w5uwoI), onClick: i };
}
function P(e) {
    let { userId: t, analyticsLocation: n, ...l } = e,
        r = D({ userId: t, analyticsLocation: n });
    return (0, i.jsx)(u.FD, { ...r, ...l });
}
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, a] = l.useState(!1),
        { text: o, onClick: s, ...c } = D({ userId: t, analyticsLocation: n }),
        d = l.useCallback(async () => {
            a(!0);
            try {
                await s?.();
            } finally {
                a(!1);
            }
        }, [s]);
    return (0, i.jsx)(u.br, { tooltipText: o, ...c, onClick: d, loading: r });
}
let U = { [g.eA$.FRIEND]: a.V, [g.eA$.PENDING_OUTGOING]: o.l, [g.eA$.PENDING_INCOMING]: o.l },
    L = {
        [g.eA$.FRIEND]: () => m.intl.string(m.t.G7jMpU),
        [g.eA$.PENDING_OUTGOING]: () => m.intl.string(m.t["s/+byI"]),
        [g.eA$.PENDING_INCOMING]: () => m.intl.string(m.t["6QQCQ+"]),
    };
function y(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...a } = e,
        o = U[n],
        s = L[n](),
        c = O({ user: t, analyticsLocation: r }),
        d = l.useRef(null),
        E = { icon: o, tooltipText: s, ...a };
    return 0 === c.length
        ? (0, i.jsx)(u.q3, { ...E, disabled: !0 })
        : (0, i.jsx)(x, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, i.jsx)(u.q3, { buttonRef: d, ...e, ...E }),
          });
}
function G(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...a } = e,
        o = U[n],
        s = L[n](),
        c = O({ user: t, analyticsLocation: r }),
        d = l.useRef(null),
        E = { icon: o, tooltipText: s, ...a };
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
            hasIncomingPendingGameFriends: a,
            analyticsLocation: o,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: E,
            icon: f,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        R = O({ user: t, analyticsLocation: o }),
        A = l.useRef(null),
        _ = { icon: f, __unsupportedReactNodeAsText: c, "aria-label": E, onMouseEnter: d, ...s };
    return 0 === R.length
        ? (0, i.jsx)(u.q3, { ..._, disabled: !0 })
        : (0, i.jsx)(x, {
              targetElementRef: A,
              menuItems: R,
              children: (e) =>
                  (0, i.jsx)(u.q3, {
                      buttonRef: A,
                      ...e,
                      ..._,
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
            hasIncomingPendingGameFriends: a,
            analyticsLocation: o,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: E,
            icon: f,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        R = O({ user: t, analyticsLocation: o }),
        A = l.useRef(null),
        _ = { icon: f, __unsupportedReactNodeAsText: c, "aria-label": E, onMouseEnter: d, ...s };
    return 0 === R.length
        ? (0, i.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ..._, disabled: !0 })
        : (0, i.jsx)(x, {
              targetElementRef: A,
              menuItems: R,
              children: (e) =>
                  (0, i.jsx)(u.br, {
                      buttonRef: A,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ..._,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
                      },
                  }),
          });
}
