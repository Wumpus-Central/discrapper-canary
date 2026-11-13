n.d(t, { SE: () => y, cO: () => T, VI: () => w, ES: () => G, bc: () => F, Ef: () => U });
var l = n(477900),
    r = n(582128),
    i = n(283973),
    o = n(497767),
    s = n(565829),
    a = n(49229),
    u = n(993401),
    c = n(855986),
    d = n(265872),
    f = n(165862),
    p = n(803664),
    E = n(509302),
    R = n(460597),
    _ = n(994500),
    g = n(403362),
    A = n(183555),
    m = n(652215),
    I = n(792996);
function h(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, c.bG)([_.A], () => _.A.getRelationshipType(t.id) === m.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: i } = (0, A.NJ)(),
        o = (0, p.A)({
            user: t,
            location: n,
            onFriendRemove: () => i({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => i({ action: "SEND_FRIEND_REQUEST" }),
        }),
        s = (0, E.A)({ user: t }),
        a = (0, R.A)({ user: t });
    return r.useMemo(() => [l ? null : o, s, a].filter(g.Vq), [s, o, l, a]);
}
function x(e) {
    let { menuItems: t, children: n, targetElementRef: r } = e;
    return (0, l.jsx)(d.Y, {
        targetElementRef: r,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, l.jsx)(f.W, {
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
var O = n(682348),
    b = n(429913),
    N = n(834730),
    v = n(769015),
    C = n(773544);
function S(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.E, {
                variant: "body-xs/semibold",
                color: "text-default",
                className: C.wx,
                children: I.intl.string(I.t["Uv/eTx"]),
            }),
            (0, l.jsx)("div", {
                className: C.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: C.nM,
                                children: [
                                    (0, l.jsx)(v.A, { game: e, size: v.M.XXSMALL }),
                                    (0, l.jsx)(N.E, {
                                        variant: "body-xs/normal",
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
let j = [];
function P(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: i } = e,
        [o, a] = r.useState(!1),
        u = r.useCallback(() => a(!0), []),
        c = r.useMemo(
            () =>
                o
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : j,
            [o, t],
        ),
        d = (0, b.A)(c, o),
        f = r.useMemo(() => d.filter(g.Vq), [d]),
        { tooltipText: p, ariaLabel: E } = r.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, l.jsx)(S, { applications: f }),
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
                        })(f) ?? I.intl.string(I.t.ujfP6f),
                };
            if (n) {
                let e = I.intl.string(I.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (i) {
                let e = I.intl.string(I.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [f, t.length, n, i]);
    return {
        onMouseEnter: u,
        ariaLabel: E,
        tooltipText: p,
        icon: r.useMemo(() => {
            if (t.length > 0) return O.UserPlatformIcon;
            if (n || i) return s.UserClockIcon;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, i]),
    };
}
var k = n(518477);
function M(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = r.useCallback(() => a.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: k.pt.SEND_FRIEND_REQUEST, icon: i.UserPlusIcon, text: I.intl.string(I.t.w5uwoI), onClick: l };
}
function T(e) {
    let { userId: t, analyticsLocation: n, ...r } = e,
        i = M({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(u.FD, { ...i, ...r });
}
function y(e) {
    let { userId: t, analyticsLocation: n } = e,
        [i, o] = r.useState(!1),
        { text: s, onClick: a, ...c } = M({ userId: t, analyticsLocation: n }),
        d = r.useCallback(async () => {
            o(!0);
            try {
                await a?.();
            } finally {
                o(!1);
            }
        }, [a]);
    return (0, l.jsx)(u.br, { tooltipText: s, ...c, onClick: d, loading: i });
}
let D = {
        [m.eA$.FRIEND]: o.UserCheckIcon,
        [m.eA$.PENDING_OUTGOING]: s.UserClockIcon,
        [m.eA$.PENDING_INCOMING]: s.UserClockIcon,
    },
    L = {
        [m.eA$.FRIEND]: () => I.intl.string(I.t.G7jMpU),
        [m.eA$.PENDING_OUTGOING]: () => I.intl.string(I.t["s/+byI"]),
        [m.eA$.PENDING_INCOMING]: () => I.intl.string(I.t["6QQCQ+"]),
    };
function U(e) {
    let { user: t, relationshipType: n, analyticsLocation: i, ...o } = e,
        s = D[n],
        a = L[n](),
        c = h({ user: t, analyticsLocation: i }),
        d = r.useRef(null),
        f = { icon: s, tooltipText: a, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(x, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.q3, { buttonRef: d, ...e, ...f }),
          });
}
function F(e) {
    let { user: t, relationshipType: n, analyticsLocation: i, ...o } = e,
        s = D[n],
        a = L[n](),
        c = h({ user: t, analyticsLocation: i }),
        d = r.useRef(null),
        f = { icon: s, tooltipText: a, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.br, { ...f, disabled: !0, tooltipPosition: "top" })
        : (0, l.jsx)(x, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.br, { buttonRef: d, ...e, ...f, tooltipPosition: "top" }),
          });
}
function G(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: i,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: s,
            ...a
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: p,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: o }),
        E = h({ user: t, analyticsLocation: s }),
        R = r.useRef(null),
        _ = { icon: p, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...a };
    return 0 === E.length
        ? (0, l.jsx)(u.q3, { ..._, disabled: !0 })
        : (0, l.jsx)(x, {
              targetElementRef: R,
              menuItems: E,
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      buttonRef: R,
                      ...e,
                      ..._,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
                      },
                  }),
          });
}
function w(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: i,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: s,
            ...a
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: p,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: o }),
        E = h({ user: t, analyticsLocation: s }),
        R = r.useRef(null),
        _ = { icon: p, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...a };
    return 0 === E.length
        ? (0, l.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ..._, disabled: !0 })
        : (0, l.jsx)(x, {
              targetElementRef: R,
              menuItems: E,
              children: (e) =>
                  (0, l.jsx)(u.br, {
                      buttonRef: R,
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
