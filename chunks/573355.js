n.d(t, { SE: () => k, bc: () => G, cO: () => y, ES: () => F, Ef: () => U, VI: () => w });
var l = n(477900),
    i = n(582128),
    r = n(283973),
    o = n(497767),
    s = n(565829),
    a = n(49229),
    u = n(993401),
    c = n(17928),
    d = n(265872),
    f = n(980707),
    p = n(803664),
    E = n(509302),
    R = n(460597),
    g = n(994500),
    A = n(403362),
    m = n(183555),
    I = n(652215),
    x = n(105292);
function b(e) {
    let { user: t, analyticsLocation: n } = e,
        l = (0, c.bG)([g.A], () => g.A.getRelationshipType(t.id) === I.eA$.PENDING_OUTGOING),
        { trackUserProfileAction: r } = (0, m.NJ)(),
        o = (0, p.A)({
            user: t,
            location: n,
            onFriendRemove: () => r({ action: "REMOVE_FRIEND" }),
            onFriendRequestSent: () => r({ action: "SEND_FRIEND_REQUEST" }),
        }),
        s = (0, E.A)({ user: t }),
        a = (0, R.A)({ user: t });
    return i.useMemo(() => [l ? null : o, s, a].filter(A.Vq), [s, o, l, a]);
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
                "aria-label": x.intl.string(x.t.Jszi3G),
                children: t,
            });
        },
        children: (e) => n(e),
    });
}
var O = n(682348),
    h = n(429913),
    N = n(834730),
    v = n(769015),
    j = n(773544);
function C(e) {
    let { applications: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(N.E, {
                variant: "body-xs/semibold",
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
let P = [];
function S(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: r } = e,
        [o, a] = i.useState(!1),
        u = i.useCallback(() => a(!0), []),
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
        d = (0, h.A)(c, o),
        f = i.useMemo(() => d.filter(A.Vq), [d]),
        { tooltipText: p, ariaLabel: E } = i.useMemo(() => {
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
        ariaLabel: E,
        tooltipText: p,
        icon: i.useMemo(() => {
            if (t.length > 0) return O._;
            if (n || r) return s.l;
            throw Error("[GameRelationshipButton] Icon should not be undefined.");
        }, [t.length, n, r]),
    };
}
var M = n(518477);
function T(e) {
    let { userId: t, analyticsLocation: n } = e,
        l = i.useCallback(() => a.A.addRelationship({ userId: t, context: { location: n } }), [n, t]);
    return { action: M.pt.SEND_FRIEND_REQUEST, icon: r.R, text: x.intl.string(x.t.w5uwoI), onClick: l };
}
function y(e) {
    let { userId: t, analyticsLocation: n, ...i } = e,
        r = T({ userId: t, analyticsLocation: n });
    return (0, l.jsx)(u.FD, { ...r, ...i });
}
function k(e) {
    let { userId: t, analyticsLocation: n } = e,
        [r, o] = i.useState(!1),
        { text: s, onClick: a, ...c } = T({ userId: t, analyticsLocation: n }),
        d = i.useCallback(async () => {
            o(!0);
            try {
                await a?.();
            } finally {
                o(!1);
            }
        }, [a]);
    return (0, l.jsx)(u.br, { tooltipText: s, ...c, onClick: d, loading: r });
}
let L = { [I.eA$.FRIEND]: o.V, [I.eA$.PENDING_OUTGOING]: s.l, [I.eA$.PENDING_INCOMING]: s.l },
    D = {
        [I.eA$.FRIEND]: () => x.intl.string(x.t.G7jMpU),
        [I.eA$.PENDING_OUTGOING]: () => x.intl.string(x.t["s/+byI"]),
        [I.eA$.PENDING_INCOMING]: () => x.intl.string(x.t["6QQCQ+"]),
    };
function U(e) {
    let { user: t, relationshipType: n, analyticsLocation: r, ...o } = e,
        s = L[n],
        a = D[n](),
        c = b({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: s, tooltipText: a, ...o };
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
        s = L[n],
        a = D[n](),
        c = b({ user: t, analyticsLocation: r }),
        d = i.useRef(null),
        f = { icon: s, tooltipText: a, ...o };
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
            analyticsLocation: s,
            ...a
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: p,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        E = b({ user: t, analyticsLocation: s }),
        R = i.useRef(null),
        g = { icon: p, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...a };
    return 0 === E.length
        ? (0, l.jsx)(u.q3, { ...g, disabled: !0 })
        : (0, l.jsx)(_, {
              targetElementRef: R,
              menuItems: E,
              children: (e) =>
                  (0, l.jsx)(u.q3, {
                      buttonRef: R,
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
            hasIncomingPendingGameFriends: o,
            analyticsLocation: s,
            ...a
        } = e,
        {
            tooltipText: c,
            onMouseEnter: d,
            ariaLabel: f,
            icon: p,
        } = S({ gameFriends: n, hasOutgoingPendingGameFriends: r, hasIncomingPendingGameFriends: o }),
        E = b({ user: t, analyticsLocation: s }),
        R = i.useRef(null),
        g = { icon: p, __unsupportedReactNodeAsText: c, "aria-label": f, onMouseEnter: d, ...a };
    return 0 === E.length
        ? (0, l.jsx)(u.br, { tooltipPosition: "left", tooltipAlign: "top", ...g, disabled: !0 })
        : (0, l.jsx)(_, {
              targetElementRef: R,
              menuItems: E,
              children: (e) =>
                  (0, l.jsx)(u.br, {
                      buttonRef: R,
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
