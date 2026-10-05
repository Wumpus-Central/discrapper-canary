n.d(t, { SE: () => L, bc: () => D, cO: () => k, ES: () => F, Ef: () => U, VI: () => w });
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
    E = n(803664),
    R = n(509302),
    p = n(460597),
    A = n(994500),
    m = n(403362),
    g = n(183555),
    I = n(652215),
    x = n(375708);
function _(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, c.bG)([A.A], () => A.A.getRelationshipType(t.id) === I.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, g.NJ)(),
        o = (0, E.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        a = (0, R.A)({ user: t }),
        s = (0, p.A)({ user: t });
    return i.useMemo(() => [l ? null : o, a, s].filter(m.Vq), [a, o, l, s]);
}
function b(e) {
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
                "aria-label": x.intl.string(x.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var O = n(682348),
    N = n(429913),
    h = n(834730),
    v = n(769015),
    j = n(773544);
function P(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(h.E, {
                variant: "text-xs/semibold",
                color: "text-default",
                className: j.wx,
                children: x.intl.string(x.t["Uv/eTx"]),
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
        [o, s] = i.useState(!1),
        u = i.useCallback(() => s(!0), []),
        c = i.useMemo(
            () =>
                o
                    ? t.map((e) => {
                          let { applicationId: t } = e;
                          return t;
                      })
                    : C,
            [o, t],
        ),
        d = (0, N.A)(c, o),
        f = i.useMemo(() => d.filter(m.Vq), [d]),
        { tooltipText: E, ariaLabel: R } = i.useMemo(() => {
            if (t.length > 0)
                return {
                    tooltipText: (0, l.jsx)(P, { applications: f }),
                    ariaLabel:
                        (function (e) {
                            switch (e.length) {
                                case 0:
                                    return;
                                case 1:
                                    return e[0].name;
                                case 2:
                                    return x.intl.formatToPlainString(x.t["G/lpQU"], {
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
                                    return x.intl.formatToPlainString(x.t.PIMweg, { items: t, last: n.name });
                            }
                        })(f) ?? x.intl.string(x.t.ujfP6f),
                };
            if (n) {
                let e = x.intl.string(x.t["0eWeav"]);
                return { tooltipText: e, ariaLabel: e };
            }
            if (r) {
                let e = x.intl.string(x.t.MCgl9c);
                return { tooltipText: e, ariaLabel: e };
            }
            throw Error("[GameRelationshipButton] Tooltip text and aria label should not be undefined.");
        }, [f, t.length, n, r]);
    return {
        onMouseEnter: u,
        ariaLabel: R,
        tooltipText: E,
        icon: i.useMemo(() => {
            if (t.length > 0) return O._;
            if (n || r) return a.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var T = n(518477);
function S(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = i.useCallback(() => s.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: T.pt.SEND_FRIEND_REQUEST, icon: r.R, text: x.intl.string(x.t.w5uwoI), onClick: l };
}
function k(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        r = S({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(u.FD, { ...r, ...i });
}
function L(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, o] = i.useState(!1),
        { text: a, onClick: s, ...c } = S({ userId: t, analyticsLocation: n }),
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
let y = { [I.eA$.FRIEND]: o.V, [I.eA$.PENDING_OUTGOING]: a.l, [I.eA$.PENDING_INCOMING]: a.l },
    G = {
        [I.eA$.FRIEND]: () => x.intl.string(x.t.G7jMpU),
        [I.eA$.PENDING_OUTGOING]: () => x.intl.string(x.t["s/+byI"]),
        [I.eA$.PENDING_INCOMING]: () => x.intl.string(x.t["6QQCQ+"]),
    };
function U(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        a = y[n],
        s = G[n](),
        c = _({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: a, tooltipText: s, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.q3, { ...f, disabled: !0 })
        : (0, l.jsx)(b, {
              targetElementRef: d,
              menuItems: c,
              children: (e) => (0, l.jsx)(u.q3, { buttonRef: d, ...e, ...f }),
          });
}
function D(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        a = y[n],
        s = G[n](),
        c = _({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: a, tooltipText: s, ...o };
    return 0 === c.length
        ? (0, l.jsx)(u.br, { ...f, disabled: !0, tooltipPosition: "top" })
        : (0, l.jsx)(b, {
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
            icon: E,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        R = _({ user: t, analyticsLocation: a }),
        p = i.useRef(null),
        A = { icon: E, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === R.length
        ? (0, l.jsx)(u.q3, { ...A, disabled: !0 })
        : (0, l.jsx)(b, {
              targetElementRef: p,
              menuItems: R,
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      buttonRef: p,
                      ...e,
                      ...A,
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
            icon: E,
        } = M({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        R = _({ user: t, analyticsLocation: a }),
        p = i.useRef(null),
        A = { icon: E, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...s };
    return 0 === R.length
        ? (0, l.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...A, disabled: !0 })
        : (0, l.jsx)(b, {
              targetElementRef: p,
              menuItems: R,
              children: (e) =>
                  (0, l.jsx)(u.br, {
                      buttonRef: p,
                      tooltipPosition: "left",
                      tooltipAlign: "top",
                      ...e,
                      ...A,
                      onMouseEnter: function () {
                          (d?.(), e.onMouseEnter?.());
                      },
                  }),
          });
}
