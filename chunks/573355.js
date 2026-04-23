n.d(t, { SE: () => G, bc: () => L, cO: () => M, ES: () => F, Ef: () => D, VI: () => w });
var l = n(627968),
    i = n(64700),
    r = n(283973),
    a = n(497767),
    s = n(565829),
    o = n(49229),
    c = n(993401),
    u = n(17928),
    d = n(922016),
    m = n(550079),
    f = n(803664),
    x = n(509302),
    g = n(460597),
    A = n(994500),
    p = n(403362),
    E = n(183555),
    h = n(652215),
    N = n(985018);
function R(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, u.bG)([A.A], () => A.A.getRelationshipType(t.id) === h.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, E.NJ)(),
        a = (0, f.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        s = (0, x.A)({ user: t }),
        o = (0, g.A)({ user: t });
    return i.useMemo(() => [l ? null : a, s, o].filter(p.Vq), [s, a, l, o]);
}
function b(e) {
    let { menuItems: t, children: n, targetElementRef: i } = e;
    return (0, l.jsx)(d.Y, {
        targetElementRef: i,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(m.W, {
                "data-menu-migrated-auto": !0,
                navId: "user-profile-friend-request-buttons",
                onSelect: void 0,
                onClose: n,
                "aria-label": N.intl.string(N.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var v = n(682348),
    j = n(429913),
    I = n(834730),
    _ = n(137177),
    y = n(945691);
function C(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(I.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: y.wx,
                children: N.intl.string(N.t["Uv/eTx"]),
            }),
            (0, l.jsx)("div", {
                className: y.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: y.nM,
                                children: [
                                    (0, l.jsx)(_.A, { game: e, size: _.M.XXSMALL }),
                                    (0, l.jsx)(I.E, {
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
let P = [];
function T(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [a, o] = i.useState(!1),
        c = i.useCallback(() => o(!0), []),
        u = i.useMemo(
            () =>
                a
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : P,
            [a, t],
        ),
        d = (0, j.A)(u, a),
        m = i.useMemo(() => d.filter(p.Vq), [d]),
        { tooltipText: f, ariaLabel: x } = i.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, l.jsx)(C, { applications: m }),
                    ariaLabel:
                        (function (e) {
                            switch (e.length) {
                                case 0:
                                    return;
                                case 1:
                                    return e[0].name;
                                case 2:
                                    return N.intl.formatToPlainString(N.t["G/lpQU"], {
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
                                    return N.intl.formatToPlainString(N.t.PIMweg, { items: t, last: n.name });
                            }
                        })(m) ?? N.intl.string(N.t.ujfP6f),
                };
            if (n) {
                let e = N.intl.string(N.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = N.intl.string(N.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [m, t.length, n, r]);
    return {
        onMouseEnter: c,
        ariaLabel: x,
        tooltipText: f,
        icon: i.useMemo(() => {
            if (t.length > 0) return v._;
            if (n || r) return s.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var S = n(518477);
function O(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = i.useCallback(() => o.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: S.pt.SEND_FRIEND_REQUEST, icon: r.R, text: N.intl.string(N.t.w5uwoI), onClick: l };
}
function M(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        r = O({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(c.FD, { ...r, ...i });
}
function G(e) {
    let { userId: t, analyticsLocation: n, setFriendRequestSent: r } = e,
        [a, s] = i.useState(!1),
        { text: o, onClick: u, ...d } = O({ userId: t, analyticsLocation: n }),
        m = i.useCallback(async () => {
            s(!0);
            try {
                r?.(!0), await u?.();
            } catch {
                r?.(!1);
            } finally {
                s(!1);
            }
        }, [u, r]);
    return (0, l.jsx)(c.br, { tooltipText: o, ...d, onClick: m, loading: a });
}
let U = { [h.eA$.FRIEND]: a.V, [h.eA$.PENDING_OUTGOING]: s.l, [h.eA$.PENDING_INCOMING]: s.l },
    k = {
        [h.eA$.FRIEND]: () => N.intl.string(N.t.G7jMpU),
        [h.eA$.PENDING_OUTGOING]: () => N.intl.string(N.t["s/+byI"]),
        [h.eA$.PENDING_INCOMING]: () => N.intl.string(N.t["6QQCQ+"]),
    };
function D(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...a } = e,
        s = U[n],
        o = k[n](),
        u = R({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        m = { icon: s, tooltipText: o, ...a };
    return 0 === u.length
        ? (0, l.jsx)(c.q3, { ...m, disabled: !0 })
        : (0, l.jsx)(b, {
              targetElementRef: d,
              menuItems: u,
              children: (e) => (0, l.jsx)(c.q3, { buttonRef: d, ...e, ...m }),
          });
}
function L(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, toastShowing: a, ...s } = e,
        o = U[n],
        u = k[n](),
        d = R({ user: t, analyticsLocation: r }),
        m = i.useRef(null),
        f = { icon: o, tooltipText: u, ...s };
    return 0 === d.length
        ? (0, l.jsx)(c.br, { ...f, disabled: !0, tooltipPosition: a ? "right" : "top" })
        : (0, l.jsx)(b, {
              targetElementRef: m,
              menuItems: d,
              children: (e) => (0, l.jsx)(c.br, { buttonRef: m, ...e, ...f, tooltipPosition: a ? "right" : "top" }),
          });
}
function F(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = e,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: m,
            icon: f,
        } = T({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        x = R({ user: t, analyticsLocation: s }),
        g = i.useRef(null),
        A = { icon: f, __unsupportedReactNodeAsText: u, "aria-label": m, onMouseEnter: d, ...o };
    return 0 === x.length
        ? (0, l.jsx)(c.q3, { ...A, disabled: !0 })
        : (0, l.jsx)(b, {
              targetElementRef: g,
              menuItems: x,
              children: (e) =>
                  (0, l.jsx)(c.q3, {
                      buttonRef: g,
                      ...e,
                      ...A,
                      onMouseEnter: () => {
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
            hasIncomingPendingGameFriends: a,
            analyticsLocation: s,
            ...o
        } = e,
        {
            tooltipText: u,
            onMouseEnter: d,
            ariaLabel: m,
            icon: f,
        } = T({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        x = R({ user: t, analyticsLocation: s }),
        g = i.useRef(null),
        A = { icon: f, __unsupportedReactNodeAsText: u, "aria-label": m, onMouseEnter: d, ...o };
    return 0 === x.length
        ? (0, l.jsx)(c.br, { tooltipPosition: "left", tooltipAlign: "top", ...A, disabled: !0 })
        : (0, l.jsx)(b, {
              targetElementRef: g,
              menuItems: x,
              children: (e) =>
                  (0, l.jsx)(c.br, {
                      buttonRef: g,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...A,
                      onMouseEnter: () => {
                          d?.(), e.onMouseEnter?.();
                      },
                  }),
          });
}
