n.d(t, { SE: () => y, bc: () => G, cO: () => T, ES: () => F, Ef: () => D, VI: () => w });
var l = n(477900),
    i = n(582128),
    r = n(283973),
    o = n(497767),
    a = n(565829),
    s = n(717398),
    u = n(993401),
    c = n(17928),
    d = n(922016),
    f = n(980707),
    p = n(803664),
    R = n(509302),
    E = n(460597),
    m = n(994500),
    g = n(403362),
    A = n(183555),
    x = n(652215),
    I = n(660183);
function b(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, c.bG)([m.A], () => m.A.getRelationshipType(t.id) === x.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, A.NJ)(),
        o = (0, p.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        a = (0, R.A)({ user: t }),
        s = (0, E.A)({ user: t });
    return i.useMemo(() => [l ? null : o, a, s].filter(g.Vq), [a, o, l, s]);
}
function _(e) {
    let { menuItems: t, children: n, targetElementRef: i } = e;
    return (0, l.jsx)(d.Y, {
        targetElementRef: i,
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
var h = n(682348),
    O = n(429913),
    N = n(834730),
    v = n(769015),
    j = n(773544);
function C(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: j.wx,
                children: I.intl.string(I.t["Uv/eTx"]),
            }),
            (0, l.jsx)("div", {
                className: j.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: j.nM,
                                children: [
                                    (0, l.jsx)(v.A, { game: e, size: v.M.XXSMALL }),
                                    (0, l.jsx)(N.E, {
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
function S(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [o, s] = i.useState(!1),
        u = i.useCallback(() => s(!0), []),
        c = i.useMemo(
            () =>
                o
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : P,
            [o, t],
        ),
        d = (0, O.A)(c, o),
        f = i.useMemo(() => d.filter(g.Vq), [d]),
        { tooltipText: p, ariaLabel: R } = i.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, l.jsx)(C, { applications: f }),
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
            if (r) {
                let e = I.intl.string(I.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [f, t.length, n, r]);
    return {
        onMouseEnter: u,
        ariaLabel: R,
        tooltipText: p,
        icon: i.useMemo(() => {
            if (t.length > 0) return h._;
            if (n || r) return a.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var M = n(518477);
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = i.useCallback(() => s.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: M.pt.SEND_FRIEND_REQUEST, icon: r.R, text: I.intl.string(I.t.w5uwoI), onClick: l };
}
function T(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        r = k({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(u.FD, { ...r, ...i });
}
function y(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, o] = i.useState(!1),
        { text: a, onClick: s, ...c } = k({ userId: t, analyticsLocation: n }),
        d = i.useCallback(async () => {
            o(!0);
            try {
                await s?.();
            } finally {
                o(!1);
            }
        }, [s]);
    return (0, l.jsx)(u.br, { tooltipText: a, ...c, onClick: d, loading: r });
}
let L = { [x.eA$.FRIEND]: o.V, [x.eA$.PENDING_OUTGOING]: a.l, [x.eA$.PENDING_INCOMING]: a.l },
    U = {
        [x.eA$.FRIEND]: () => I.intl.string(I.t.G7jMpU),
        [x.eA$.PENDING_OUTGOING]: () => I.intl.string(I.t["s/+byI"]),
        [x.eA$.PENDING_INCOMING]: () => I.intl.string(I.t["6QQCQ+"]),
    };
function D(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        a = L[n],
        s = U[n](),
        c = b({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: a, tooltipText: s, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(_, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.q3, { buttonRef: d, ...e, ...f }),
          });
}
function G(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        a = L[n],
        s = U[n](),
        c = b({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: a, tooltipText: s, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.br, { ...f, disabled: !0, tooltipPosition: "top" })
        : (0, l.jsx)(_, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.br, { buttonRef: d, ...e, ...f, tooltipPosition: "top" }),
          });
}
function F(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: a,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: p,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        R = b({ user: t, analyticsLocation: a }),
        E = i.useRef(null),
        m = { icon: p, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === R.length
        ? (0, l.jsx)(u.q3, { ...m, disabled: !0 })
        : (0, l.jsx)(_, {
              targetElementRef: E,
              menuItems: R,
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      buttonRef: E,
                      ...e,
                      ...m,
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
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: a,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: p,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        R = b({ user: t, analyticsLocation: a }),
        E = i.useRef(null),
        m = { icon: p, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === R.length
        ? (0, l.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...m, disabled: !0 })
        : (0, l.jsx)(_, {
              targetElementRef: E,
              menuItems: R,
              children: (e) =>
                  (0, l.jsx)(u.br, {
                      buttonRef: E,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...m,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
                      },
                  }),
          });
}
