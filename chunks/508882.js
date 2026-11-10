n.d(t, { SE: () => k, cO: () => P, VI: () => w, ES: () => F, bc: () => D, Ef: () => L });
var l = n(477900),
    i = n(582128),
    r = n(283973),
    a = n(497767),
    o = n(565829),
    s = n(49229),
    u = n(993401),
    c = n(855986),
    d = n(265872),
    f = n(165862),
    A = n(803664),
    E = n(509302),
    p = n(460597),
    g = n(994500),
    I = n(403362),
    R = n(183555),
    m = n(652215),
    _ = n(792996);
function b(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, c.bG)([g.A], () => g.A.getRelationshipType(t.id) === m.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, R.NJ)(),
        a = (0, A.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        o = (0, E.A)({ user: t }),
        s = (0, p.A)({ user: t });
    return i.useMemo(() => [l ? null : a, o, s].filter(I.Vq), [o, a, l, s]);
}
function N(e) {
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
                "aria-label": _.intl.string(_.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var O = n(682348),
    x = n(429913),
    h = n(834730),
    v = n(769015),
    j = n(773544);
function S(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.E, {
                variant: "body-xs/semibold",
                color: "text-default",
                className: j.wx,
                children: _.intl.string(_.t["Uv/eTx"]),
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
                                    (0, l.jsx)(h.E, {
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
let C = [];
function T(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [a, s] = i.useState(!1),
        u = i.useCallback(() => s(!0), []),
        c = i.useMemo(
            () =>
                a
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : C,
            [a, t],
        ),
        d = (0, x.A)(c, a),
        f = i.useMemo(() => d.filter(I.Vq), [d]),
        { tooltipText: A, ariaLabel: E } = i.useMemo(() => {
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
                                    return _.intl.formatToPlainString(_.t["G/lpQU"], {
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
                                    return _.intl.formatToPlainString(_.t.PIMweg, { items: t, last: n.name });
                            }
                        })(f) ?? _.intl.string(_.t.ujfP6f),
                };
            if (n) {
                let e = _.intl.string(_.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = _.intl.string(_.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [f, t.length, n, r]);
    return {
        onMouseEnter: u,
        ariaLabel: E,
        tooltipText: A,
        icon: i.useMemo(() => {
            if (t.length > 0) return O.UserPlatformIcon;
            if (n || r) return o.UserClockIcon;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var y = n(518477);
function M(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = i.useCallback(() => s.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: y.pt.SEND_FRIEND_REQUEST, icon: r.UserPlusIcon, text: _.intl.string(_.t.w5uwoI), onClick: l };
}
function P(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        r = M({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(u.FD, { ...r, ...i });
}
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, a] = i.useState(!1),
        { text: o, onClick: s, ...c } = M({ userId: t, analyticsLocation: n }),
        d = i.useCallback(async () => {
            a(!0);
            try {
                await s?.();
            } finally {
                a(!1);
            }
        }, [s]);
    return (0, l.jsx)(u.br, { tooltipText: o, ...c, onClick: d, loading: r });
}
let U = {
        [m.eA$.FRIEND]: a.UserCheckIcon,
        [m.eA$.PENDING_OUTGOING]: o.UserClockIcon,
        [m.eA$.PENDING_INCOMING]: o.UserClockIcon,
    },
    G = {
        [m.eA$.FRIEND]: () => _.intl.string(_.t.G7jMpU),
        [m.eA$.PENDING_OUTGOING]: () => _.intl.string(_.t["s/+byI"]),
        [m.eA$.PENDING_INCOMING]: () => _.intl.string(_.t["6QQCQ+"]),
    };
function L(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...a } = e,
        o = U[n],
        s = G[n](),
        c = b({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: o, tooltipText: s, ...a };
    return 0 === c.length
        ? (0, l.jsx)(u.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(N, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.q3, { buttonRef: d, ...e, ...f }),
          });
}
function D(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...a } = e,
        o = U[n],
        s = G[n](),
        c = b({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: o, tooltipText: s, ...a };
    return 0 === c.length
        ? (0, l.jsx)(u.br, { ...f, disabled: !0, tooltipPosition: "top" })
        : (0, l.jsx)(N, {
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
            hasIncomingPendingGameFriends: a,
            analyticsLocation: o,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: A,
        } = T({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        E = b({ user: t, analyticsLocation: o }),
        p = i.useRef(null),
        g = { icon: A, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === E.length
        ? (0, l.jsx)(u.q3, { ...g, disabled: !0 })
        : (0, l.jsx)(N, {
              targetElementRef: p,
              menuItems: E,
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      buttonRef: p,
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
            hasOutgoingPendingGameFriends: r,
            hasIncomingPendingGameFriends: a,
            analyticsLocation: o,
            ...s
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: A,
        } = T({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: a }),
        E = b({ user: t, analyticsLocation: o }),
        p = i.useRef(null),
        g = { icon: A, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === E.length
        ? (0, l.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...g, disabled: !0 })
        : (0, l.jsx)(N, {
              targetElementRef: p,
              menuItems: E,
              children: (e) =>
                  (0, l.jsx)(u.br, {
                      buttonRef: p,
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
