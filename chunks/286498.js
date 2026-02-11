n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(311907),
    c = n(435371),
    d = n(397927),
    u = n(49229),
    h = n(297413),
    m = n(966327),
    A = n(793574),
    g = n(235986),
    p = n(803664),
    f = n(583311),
    _ = n(290863),
    E = n(584777),
    C = n(994500),
    x = n(427262),
    S = n(652215),
    T = n(985018),
    N = n(318880);
let I = (e) => {
    let { user: t, handleTrackAction: n } = e,
        s = (0, o.bG)([C.A], () => C.A.getRelationshipType(t.id)),
        [a, r] = l.useState(!1),
        h = (0, p.A)({ user: t, location: A.A.NEW_GROUP_DM_INVITE_MODAL, setLoading: r }),
        m = l.useRef(null),
        g = l.useCallback(async () => {
            n(),
                r(!0),
                await u.A.addRelationship({ userId: t.id, context: { location: A.A.NEW_GROUP_DM_INVITE_MODAL } }),
                r(!1);
        }, [n, t.id]);
    if (t.bot) return null;
    switch (s) {
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
                            loading: a,
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
                    onClick: g,
                    variant: "icon-only",
                    "aria-label": T.intl.string(T.t.w5uwoI),
                    icon: d.Rvf,
                    loading: a,
                }),
            });
    }
};
function v(e) {
    let t,
        {
            user: n,
            section: l,
            row: s,
            hideDiscriminator: u,
            comparator: A,
            selected: p,
            checked: f,
            disabled: C = !1,
            onClick: S,
            onMessageClick: v,
            onMouseEnter: y,
            "aria-setsize": b,
            "aria-posinset": j,
            handleTrackAction: R,
            inImprovedDMExperiment: M,
            disabledTooltipText: D,
            staffOverride: O,
        } = e,
        L = (0, o.bG)([_.A], () => _.A.getStatus(n.id));
    t =
        l === E.A.GUILD_MEMBERS
            ? O
                ? (0, i.jsx)("div", { className: N.ch, children: (0, i.jsx)(d.P7L, { checked: f }) })
                : (0, i.jsx)(c.m_, {
                      asContainer: !0,
                      text: C ? D : T.intl.string(T.t["6Urw1t"]),
                      children: (0, i.jsx)(d.K0, {
                          "aria-label": "",
                          size: "sm",
                          variant: "secondary",
                          icon: d.ggM,
                          onClick: () => {
                              R(l, s, "message"), v?.(n.id);
                          },
                          disabled: C,
                      }),
                  })
            : (0, i.jsx)(d.P7L, { checked: f, disabled: C });
    let P = (0, r.rm)(String(n.id)),
        w = (!C && l === E.A.FRIENDS) || O;
    return (0, i.jsx)(d.DUT, {
        id: `user-row-${s}`,
        className: a()(N.Se, { [N.r9]: !w }),
        onClick: w
            ? () => {
                  R(l, s, "select"), S?.(n.id);
              }
            : void 0,
        onMouseEnter: () => {
            y?.(l, s);
        },
        ...P,
        role: "option",
        "aria-selected": f,
        "aria-disabled": C,
        "aria-setsize": b,
        "aria-posinset": j,
        children: (0, i.jsxs)(g.A, {
            align: g.A.Align.CENTER,
            className: a()(N.Bc, { [N.oz]: p }),
            children: [
                (0, i.jsx)(m.A, { user: n, status: L, className: N.my }),
                (0, i.jsxs)("div", {
                    className: N.YW,
                    children: [
                        (0, i.jsx)(d.Text, {
                            tag: "strong",
                            className: N.$R,
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
                                className: N.xK,
                                forceUsername: !0,
                            }),
                        }),
                    ],
                }),
                l !== E.A.FRIENDS && M ? (0, i.jsx)(I, { user: n, handleTrackAction: () => R(l, s, "friend") }) : null,
                t,
            ],
        }),
    });
}
