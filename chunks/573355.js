n.d(t, { SE: () => D, bc: () => G, cO: () => k, ES: () => F, Ef: () => L, VI: () => w });
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
    f = n(803664),
    m = n(509302),
    x = n(460597),
    R = n(994500),
    g = n(403362),
    p = n(183555),
    I = n(652215),
    A = n(375708);
function _(e) {
    let { user: t, analyticsLocation: n } = e,
        i = (0, u.bG)([R.A], () => R.A.getRelationshipType(t.id) === I.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, p.NJ)(),
        s = (0, f.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        a = (0, m.A)({ user: t }),
        o = (0, x.A)({ user: t });
    return l.useMemo(() => [i ? null : s, a, o].filter(g.Vq), [a, s, i, o]);
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
                "aria-label": A.intl.string(A.t.Jszi3G),
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
                children: A.intl.string(A.t["Uv/eTx"]),
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
        E = l.useMemo(() => d.filter(g.Vq), [d]),
        { tooltipText: f, ariaLabel: m } = l.useMemo(() => {
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
                                    return A.intl.formatToPlainString(A.t["G/lpQU"], {
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
                                    return A.intl.formatToPlainString(A.t.PIMweg, { items: t, last: n.name });
                            }
                        })(E) ?? A.intl.string(A.t.ujfP6f),
                };
            if (n) {
                let e = A.intl.string(A.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = A.intl.string(A.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [E, t.length, n, r]);
    return {
        onMouseEnter: c,
        ariaLabel: m,
        tooltipText: f,
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
    return { action: M.pt.SEND_FRIEND_REQUEST, icon: r.R, text: A.intl.string(A.t.w5uwoI), onClick: i };
}
function k(e) {
    let { userId: t, analyticsLocation: n, ...l } = e,
        r = P({ userId: t, analyticsLocation: n });
    return (0, i.jsx)(c.FD, { ...r, ...l });
}
function D(e) {
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
let y = { [I.eA$.FRIEND]: s.V, [I.eA$.PENDING_OUTGOING]: a.l, [I.eA$.PENDING_INCOMING]: a.l },
    U = {
        [I.eA$.FRIEND]: () => A.intl.string(A.t.G7jMpU),
        [I.eA$.PENDING_OUTGOING]: () => A.intl.string(A.t["s/+byI"]),
        [I.eA$.PENDING_INCOMING]: () => A.intl.string(A.t["6QQCQ+"]),
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
            icon: f,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s }),
        m = _({ user: t, analyticsLocation: a }),
        x = l.useRef(null),
        R = { icon: f, __unsupportedReactNodeAsText: u, "aria-label": E, onMouseEnter: d, ...o };
    return 0 === m.length
        ? (0, i.jsx)(c.q3, { ...R, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: x,
              menuItems: m,
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
function w(e) {
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
            icon: f,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: s }),
        m = _({ user: t, analyticsLocation: a }),
        x = l.useRef(null),
        R = { icon: f, __unsupportedReactNodeAsText: u, "aria-label": E, onMouseEnter: d, ...o };
    return 0 === m.length
        ? (0, i.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...R, disabled: !0 })
        : (0, i.jsx)(h, {
              targetElementRef: x,
              menuItems: m,
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
