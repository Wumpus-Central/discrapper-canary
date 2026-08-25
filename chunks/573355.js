n.d(t, { SE: () => k, bc: () => G, cO: () => P, ES: () => F, Ef: () => y, VI: () => w });
var i = n(477900),
    l = n(582128),
    r = n(283973),
    o = n(497767),
    s = n(565829),
    a = n(717398),
    u = n(993401),
    d = n(17928),
    c = n(922016),
    E = n(980707),
    f = n(803664),
    R = n(509302),
    p = n(460597),
    I = n(994500),
    g = n(403362),
    A = n(183555),
    _ = n(652215),
    O = n(375708);
function m(e) {
    let { user: t, analyticsLocation: n } = e,
        i = (0, d.bG)([I.A], () => I.A.getRelationshipType(t.id) === _.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, A.NJ)(),
        o = (0, f.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        s = (0, R.A)({ user: t }),
        a = (0, p.A)({ user: t });
    return l.useMemo(() => [i ? null : o, s, a].filter(g.Vq), [s, o, i, a]);
}
function h(e) {
    let { menuItems: t, children: n, targetElementRef: l } = e;
    return (0, i.jsx)(c.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(E.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": O.intl.string(O.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var b = n(682348),
    x = n(429913),
    N = n(834730),
    T = n(769015),
    v = n(773544);
function S(e) {
    let { applications: t } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: v.wx,
                children: O.intl.string(O.t["Uv/eTx"]),
            }),
            (0, i.jsx)("div", {
                className: v.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, i.jsxs)(
                            "div",
                            {
                                className: v.nM,
                                children: [
                                    (0, i.jsx)(T.A, { game: e, size: T.M.XXSMALL }),
                                    (0, i.jsx)(N.E, {
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
let C = [];
function M(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [o, a] = l.useState(!1),
        u = l.useCallback(() => a(!0), []),
        d = l.useMemo(
            () =>
                o
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : C,
            [o, t],
        ),
        c = (0, x.A)(d, o),
        E = l.useMemo(() => c.filter(g.Vq), [c]),
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
                                    return O.intl.formatToPlainString(O.t["G/lpQU"], {
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
                                    return O.intl.formatToPlainString(O.t.PIMweg, { items: t, last: n.name });
                            }
                        })(E) ?? O.intl.string(O.t.ujfP6f),
                };
            if (n) {
                let e = O.intl.string(O.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = O.intl.string(O.t.MCgl9c);
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
            if (n || r) return s.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var D = n(518477);
function j(e) {
    let { userId: t, analyticsLocation: n } = e,
        i = l.useCallback(() => a.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: D.pt.SEND_FRIEND_REQUEST, icon: r.R, text: O.intl.string(O.t.w5uwoI), onClick: i };
}
function P(e) {
    let { userId: t, analyticsLocation: n, ...l } = e,
        r = j({ userId: t, analyticsLocation: n });
    return (0, i.jsx)(u.FD, { ...r, ...l });
}
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, o] = l.useState(!1),
        { text: s, onClick: a, ...d } = j({ userId: t, analyticsLocation: n }),
        c = l.useCallback(async () => {
            o(!0);
            try {
                await a?.();
            } finally {
                o(!1);
            }
        }, [a]);
    return (0, i.jsx)(u.br, { tooltipText: s, ...d, onClick: c, loading: r });
}
let U = { [_.eA$.FRIEND]: o.V, [_.eA$.PENDING_OUTGOING]: s.l, [_.eA$.PENDING_INCOMING]: s.l },
    L = {
        [_.eA$.FRIEND]: () => O.intl.string(O.t.G7jMpU),
        [_.eA$.PENDING_OUTGOING]: () => O.intl.string(O.t["s/+byI"]),
        [_.eA$.PENDING_INCOMING]: () => O.intl.string(O.t["6QQCQ+"]),
    };
function y(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        s = U[n],
        a = L[n](),
        d = m({ user: t, analyticsLocation: r }),
        c = l.useRef(null),
        E = { icon: s, tooltipText: a, ...o };
    return 0 === d.length
        ? (0, i.jsx)(u.q3, { ...E, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: c,
              menuItems: d,
              children: (e) => (0, i.jsx)(u.q3, { buttonRef: c, ...e, ...E }),
          });
}
function G(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        s = U[n],
        a = L[n](),
        d = m({ user: t, analyticsLocation: r }),
        c = l.useRef(null),
        E = { icon: s, tooltipText: a, ...o };
    return 0 === d.length
        ? (0, i.jsx)(u.br, { ...E, disabled: !0, tooltipPosition: "top" })
        : (0, i.jsx)(h, {
              targetElementRef: c,
              menuItems: d,
              children: (e) => (0, i.jsx)(u.br, { buttonRef: c, ...e, ...E, tooltipPosition: "top" }),
          });
}
function F(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: s,
            ...a
        } = e,
        {
            tooltipText: d,
            onMouseEnter: c,
            ariaLabel: E,
            icon: f,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        R = m({ user: t, analyticsLocation: s }),
        p = l.useRef(null),
        I = { icon: f, __unsupportedReactNodeAsText: d, "aria-label": E, onMouseEnter: c, ...a };
    return 0 === R.length
        ? (0, i.jsx)(u.q3, { ...I, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: p,
              menuItems: R,
              children: (e) =>
                  (0, i.jsx)(u.q3, {
                      buttonRef: p,
                      ...e,
                      ...I,
                      onMouseEnter: function () {
                          c?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
function w(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: s,
            ...a
        } = e,
        {
            tooltipText: d,
            onMouseEnter: c,
            ariaLabel: E,
            icon: f,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        R = m({ user: t, analyticsLocation: s }),
        p = l.useRef(null),
        I = { icon: f, __unsupportedReactNodeAsText: d, "aria-label": E, onMouseEnter: c, ...a };
    return 0 === R.length
        ? (0, i.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...I, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: p,
              menuItems: R,
              children: (e) =>
                  (0, i.jsx)(u.br, {
                      buttonRef: p,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...I,
                      onMouseEnter: function () {
                          c?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
