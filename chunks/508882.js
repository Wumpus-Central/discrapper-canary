n.d(t, { SE: () => y, cO: () => k, VI: () => w, ES: () => F, bc: () => G, Ef: () => U });
var l = n(477900),
    r = n(582128),
    i = n(283973),
    o = n(497767),
    a = n(565829),
    s = n(49229),
    u = n(993401),
    c = n(855986),
    d = n(265872),
    f = n(165862),
    A = n(803664),
    p = n(509302),
    E = n(460597),
    g = n(994500),
    _ = n(403362),
    I = n(183555),
    R = n(652215),
    m = n(792996);
function O(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, c.bG)([g.A], () => g.A.getRelationshipType(t.id) === R.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: i } = (0, I.NJ)(),
        o = (0, A.A)({
            user: t,
            location: n,
            onFriendRemove: () => i({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => i({ action: "SEND_FRIEND_REQUEST" }),
        }),
        a = (0, p.A)({ user: t }),
        s = (0, E.A)({ user: t });
    return r.useMemo(() => [l ? null : o, a, s].filter(_.Vq), [a, o, l, s]);
}
function h(e) {
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
                "aria-label": m.intl.string(m.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var b = n(682348),
    x = n(429913),
    N = n(834730),
    v = n(769015),
    S = n(773544);
function C(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.E, {
                variant: "body-xs/semibold",
                color: "text-default",
                className: S.wx,
                children: m.intl.string(m.t["Uv/eTx"]),
            }),
            (0, l.jsx)("div", {
                className: S.p_,
                children: t.map((e) => {
                    if (null != e)
                        return (0, l.jsxs)(
                            "div",
                            {
                                className: S.nM,
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
        [o, s] = r.useState(!1),
        u = r.useCallback(() => s(!0), []),
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
        d = (0, x.A)(c, o),
        f = r.useMemo(() => d.filter(_.Vq), [d]),
        { tooltipText: A, ariaLabel: p } = r.useMemo(() => {
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
                        })(f) ?? m.intl.string(m.t.ujfP6f),
                };
            if (n) {
                let e = m.intl.string(m.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (i) {
                let e = m.intl.string(m.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [f, t.length, n, i]);
    return {
        onMouseEnter: u,
        ariaLabel: p,
        tooltipText: A,
        icon: r.useMemo(() => {
            if (t.length > 0) return b.UserPlatformIcon;
            if (n || i) return a.UserClockIcon;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, i]),
    };
}
var T = n(518477);
function M(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = r.useCallback(() => s.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: T.pt.SEND_FRIEND_REQUEST, icon: i.UserPlusIcon, text: m.intl.string(m.t.w5uwoI), onClick: l };
}
function k(e) {
    let { userId: t, analyticsLocation: n, ...r } = e,
        i = M({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(u.FD, { ...i, ...r });
}
function y(e) {
    let { userId: t, analyticsLocation: n } = e,
        [i, o] = r.useState(!1),
        { text: a, onClick: s, ...c } = M({ userId: t, analyticsLocation: n }),
        d = r.useCallback(async () => {
            o(!0);
            try {
                await s?.();
            } finally {
                o(!1);
            }
        }, [s]);
    return (0, l.jsx)(u.br, { tooltipText: a, ...c, onClick: d, loading: i });
}
let L = {
        [R.eA$.FRIEND]: o.UserCheckIcon,
        [R.eA$.PENDING_OUTGOING]: a.UserClockIcon,
        [R.eA$.PENDING_INCOMING]: a.UserClockIcon,
    },
    D = {
        [R.eA$.FRIEND]: () => m.intl.string(m.t.G7jMpU),
        [R.eA$.PENDING_OUTGOING]: () => m.intl.string(m.t["s/+byI"]),
        [R.eA$.PENDING_INCOMING]: () => m.intl.string(m.t["6QQCQ+"]),
    };
function U(e) {
    let { user: t, relationshipType: n, analyticsLocation: i, ...o } = e,
        a = L[n],
        s = D[n](),
        c = O({ user: t, analyticsLocation: i }),
        d = r.useRef(null),
        f = { icon: a, tooltipText: s, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(h, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.q3, { buttonRef: d, ...e, ...f }),
          });
}
function G(e) {
    let { user: t, relationshipType: n, analyticsLocation: i, ...o } = e,
        a = L[n],
        s = D[n](),
        c = O({ user: t, analyticsLocation: i }),
        d = r.useRef(null),
        f = { icon: a, tooltipText: s, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.br, { ...f, disabled: !0, tooltipPosition: "top" })
        : (0, l.jsx)(h, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.br, { buttonRef: d, ...e, ...f, tooltipPosition: "top" }),
          });
}
function F(e) {
    let {
            user: t,
            gameFriends: n,
            hasOutgoingPendingGameFriends: i,
            hasIncomingPendingGameFriends: o,
            analyticsLocation: a,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: A,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: o }),
        p = O({ user: t, analyticsLocation: a }),
        E = r.useRef(null),
        g = { icon: A, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === p.length
        ? (0, l.jsx)(u.q3, { ...g, disabled: !0 })
        : (0, l.jsx)(h, {
              targetElementRef: E,
              menuItems: p,
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      buttonRef: E,
                      ...e,
                      ...g,
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
            analyticsLocation: a,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: A,
        } = P({ gameFriends: n, hasOutgoingPendingGameFriends: i, hasIncomingPendingGameFriends: o }),
        p = O({ user: t, analyticsLocation: a }),
        E = r.useRef(null),
        g = { icon: A, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === p.length
        ? (0, l.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...g, disabled: !0 })
        : (0, l.jsx)(h, {
              targetElementRef: E,
              menuItems: p,
              children: (e) =>
                  (0, l.jsx)(u.br, {
                      buttonRef: E,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...g,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
                      },
                  }),
          });
}
