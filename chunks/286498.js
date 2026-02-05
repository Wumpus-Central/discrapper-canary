n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(837381),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(49229),
    h = n(297413),
    m = n(966327),
    A = n(793574),
    p = n(235986),
    g = n(803664),
    f = n(583311),
    _ = n(290863),
    E = n(584777),
    C = n(994500),
    x = n(427262),
    S = n(652215),
    T = n(985018),
    I = n(318880);
let N = (e) => {
    let { user: t, handleTrackAction: n } = e,
        a = (0, o.bG)([C.A], () => C.A.getRelationshipType(t.id)),
        [s, r] = l.useState(!1),
        h = (0, g.A)({ user: t, location: A.A.NEW_GROUP_DM_INVITE_MODAL, setLoading: r }),
        m = l.useRef(null),
        p = l.useCallback(async () => {
            n(),
                r(!0),
                await u.A.addRelationship({ userId: t.id, context: { location: A.A.NEW_GROUP_DM_INVITE_MODAL } }),
                r(!1);
        }, [n, t.id]);
    if (t.bot) return null;
    switch (a) {
        case S.eA$.FRIEND:
            return null;
        case S.eA$.PENDING_INCOMING:
            return (0, i.jsx)(f.A, {
                targetElementRef: m,
                menuItems: [h],
                children: (e) =>
                    (0, i.jsx)(c.m_, {
                        asContainer: !0,
                        text: T.intl.string(T.t["6QQCQ+"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(d.K0, {
                            ...e,
                            buttonRef: m,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": T.intl.string(T.t["6QQCQ+"]),
                            icon: d.lI8,
                            loading: s,
                        }),
                    }),
            });
        case S.eA$.PENDING_OUTGOING:
            return (0, i.jsx)(c.m_, {
                asContainer: !0,
                text: T.intl.string(T.t["s/+byI"]),
                ariaHidden: !0,
                children: (0, i.jsx)(d.K0, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": T.intl.string(T.t["s/+byI"]),
                    icon: d.lI8,
                    disabled: !0,
                }),
            });
        default:
            return (0, i.jsx)(c.m_, {
                asContainer: !0,
                text: T.intl.string(T.t.w5uwoI),
                ariaHidden: !0,
                children: (0, i.jsx)(d.K0, {
                    size: "sm",
                    onClick: p,
                    variant: "icon-only",
                    "aria-label": T.intl.string(T.t.w5uwoI),
                    icon: d.Rvf,
                    loading: s,
                }),
            });
    }
};
function v(e) {
    let t,
        {
            user: n,
            section: l,
            row: a,
            hideDiscriminator: u,
            comparator: A,
            selected: g,
            checked: f,
            disabled: C = !1,
            onClick: S,
            onMouseEnter: v,
            onMessageClick: y,
            "aria-setsize": b,
            "aria-posinset": R,
            numSelected: j,
            staffOverride: M,
            handleTrackAction: D,
            showFriendButton: O = !1,
        } = e,
        L = (0, o.bG)([_.A], () => _.A.getStatus(n.id)),
        P = (0, r.rm)(String(n.id));
    return (
        (t = M
            ? (0, i.jsx)(d.P7L, { checked: f, disabled: C })
            : 0 === j
              ? (0, i.jsx)(d.Button, {
                    variant: "secondary",
                    text: T.intl.string(T.t["g33r/P"]),
                    size: "sm",
                    onClick: () => {
                        D(l, a, "message"), null != y && y(n.id);
                    },
                })
              : (0, i.jsx)(c.m_, {
                    asContainer: !0,
                    text: T.intl.string(T.t.z9qAt9),
                    children: (0, i.jsx)(d.P7L, { checked: f, disabled: !0 }),
                })),
        (0, i.jsx)(d.DUT, {
            id: `user-row-${a}`,
            className: s()(I.Se, { [I.r9]: C }),
            onClick:
                l === E.A.FRIENDS || M
                    ? () => {
                          D(l, a, "select"), null != S && S(n.id);
                      }
                    : void 0,
            onMouseEnter: () => {
                null != v && v(l, a);
            },
            ...P,
            role: "option",
            "aria-selected": f,
            "aria-disabled": C,
            "aria-setsize": b,
            "aria-posinset": R,
            children: (0, i.jsxs)(p.A, {
                align: p.A.Align.CENTER,
                className: s()(I.Bc, { [I.oz]: g }),
                children: [
                    (0, i.jsx)(m.A, { user: n, status: L, className: I.my }),
                    (0, i.jsxs)("div", {
                        className: I.YW,
                        children: [
                            (0, i.jsx)(d.Text, {
                                tag: "strong",
                                className: I.$R,
                                "aria-hidden": !0,
                                variant: "text-md/medium",
                                children:
                                    null != A && A === n.tag
                                        ? x.Ay.getName(n)
                                        : null != A && "" !== A
                                          ? A
                                          : x.Ay.getName(n),
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: (0, i.jsx)(h.A, {
                                    user: n,
                                    hideDiscriminator: u,
                                    className: I.xK,
                                    usernameClass: I.__invalid_weightMedium,
                                    discriminatorClass: I.__invalid_weightMedium,
                                    forceUsername: !0,
                                }),
                            }),
                        ],
                    }),
                    l !== E.A.FRIENDS && O
                        ? (0, i.jsx)(N, { user: n, handleTrackAction: () => D(l, a, "friend") })
                        : null,
                    l === E.A.FRIENDS ? (0, i.jsx)(d.P7L, { checked: f, disabled: C }) : t,
                ],
            }),
        })
    );
}
