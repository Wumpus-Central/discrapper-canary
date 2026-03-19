s.d(t, { default: () => C }), s(321073);
var a = s(627968),
    r = s(64700),
    i = s(158954),
    n = s(311907),
    l = s(397927),
    c = s(718213),
    _ = s(964486),
    d = s(780964),
    u = s(840065),
    E = s(954571),
    m = s(427262),
    o = s(761546),
    h = s(677185),
    R = s(233317),
    M = s(5818),
    I = s(298492),
    U = s(88001),
    p = s(652215),
    S = s(518582),
    P = s(985018),
    b = s(37182),
    T = s(788396);
let g = (e) => {
        let { onInvite: t, onClose: s, subscriptionId: _, ...d } = e,
            [u, h] = r.useState([]),
            [I, T] = r.useState(""),
            g = (0, c.A)(I, 400),
            f = (0, n.bG)([R.A], () => R.A.getNumAvailableInvites()),
            {
                eligibleUsers: C,
                getNextRows: y,
                hasError: N,
                isFetching: O,
            } = (0, M.A)({ subscriptionId: _, searchQuery: g }),
            [x, A] = r.useState(!1),
            F = r.useCallback(
                (e) => {
                    h((t) => t.filter((t) => !e.has(t.id)));
                },
                [h],
            ),
            G = r.useMemo(() => u.map((e) => ({ id: e.id, label: m.Ay.getName(e) })), [u]);
        return N
            ? (0, a.jsx)(i.Modal, {
                  size: "sm",
                  title: P.intl.string(S.default["54lM5y"]),
                  subtitle: P.intl.string(S.default.zrtwpV),
                  onClose: s,
                  actions: [],
                  ...d,
              })
            : 0 !== C.length || O || 0 !== g.length
              ? (0, a.jsx)(i.Modal, {
                    size: "md",
                    title: P.intl.string(S.default["Um/7BM"]),
                    subtitle: P.intl.format(S.default.qSWXaf, {
                        totalSeats: U.LM,
                        premiumGroupProductName: (0, U.DP)(),
                        helpCenterLink: U.TE,
                    }),
                    onClose: s,
                    input: (0, a.jsx)("div", {
                        className: b.c,
                        children: (0, a.jsx)(l.ksK, {
                            value: I,
                            onChange: T,
                            placeholder: 0 === u.length ? P.intl.string(S.default.wRS8vo) : "",
                            leading: { type: "tags", label: P.intl.string(S.default["Um/7BM"]), items: G, onRemove: F },
                        }),
                    }),
                    actions: [],
                    actionBarInput: (0, a.jsx)(l.Button, {
                        variant: "primary",
                        disabled: 0 === u.length || x,
                        text: P.intl.string(S.default["5fZHp3"]),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            E.default.track(p.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                invited_user_ids: u.map((e) => e.id),
                            }),
                                A(!0),
                                await t(u),
                                A(!1);
                        },
                    }),
                    ...d,
                    children: (0, a.jsx)(o.A, {
                        users: C,
                        isUserSelected: (e) => u.some((t) => t.id === e.id),
                        onSelectionChange: (e, t) => {
                            h((s) => (t ? [...s, e] : s.filter((t) => t.id !== e.id))), t && T("");
                        },
                        isUserDisabled: (e) => (u.length >= f && !u.some((t) => t.id === e.id)) || !e.eligible,
                        isFetching: O,
                        onFetchMore: y,
                        searchQuery: g,
                        emptySearchContent: {
                            header: P.intl.string(S.default.gaamNe),
                            body: P.intl.string(S.default.nQcM39),
                        },
                        className: b.p_,
                        tooltipConfig: {
                            text: (e) =>
                                P.intl.formatToPlainString(S.default["5tzM9V"], {
                                    disabledUserName: m.Ay.getName(e),
                                    premiumGroupProductName: (0, U.DP)(),
                                }),
                            isActive: (e, t) => !!(t && !e.eligible),
                        },
                    }),
                })
              : (0, a.jsx)(i.Modal, {
                    size: "sm",
                    title: P.intl.string(S.default.ONaJLH),
                    subtitle: P.intl.format(S.default["0LHbPc"], { helpCenterLink: U.TE }),
                    onClose: s,
                    actions: [],
                    ...d,
                });
    },
    f = (e) => {
        let { onClose: t, inviteUsersResult: s, ...r } = e;
        return (0, a.jsx)(i.ExpressiveModal, {
            graphic: { type: "image", src: T.A },
            gradientColor: "nitro-pink",
            title: P.intl.formatToPlainString(S.default.MIiPur, {
                premiumGroupProductName: (0, U.DP)(),
                sentCount: s.filter((e) => e.isSuccess).length,
            }),
            subtitle: P.intl.format(S.default.olkQkj, {
                onClick: () => {
                    t(), (0, u.openUserSettings)(d.X.SUBSCRIPTIONS_PANEL);
                },
            }),
            onClose: t,
            ...r,
            children: (0, a.jsx)("div", {
                className: b.yk,
                children: s.map((e) =>
                    (0, a.jsx)(I.q, { recipient: e.user, isSuccess: e.isSuccess, onClose: t }, e.user.id),
                ),
            }),
        });
    },
    C = (e) => {
        let { subscription: t, isFromPurchaseFlow: s = !1, ...i } = e,
            [n, l] = r.useState([]);
        (0, _.Ay)(() => {
            E.default.track(p.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card",
            });
        });
        let [c, d] = r.useState(1),
            u = async (e) => {
                let s = new Map(),
                    a = [];
                for (let t of e) s.set(t.id, t), a.push(t.id);
                let r = await (0, h.n2)(t.id, a);
                if (null == r) {
                    E.default.track(p.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: a,
                    }),
                        l(e.map((e) => ({ user: e, isSuccess: !1 }))),
                        d(2);
                    return;
                }
                let { invitedUsers: i, ineligibleUsers: n } = r;
                E.default.track(p.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: i,
                    failed_user_ids: n,
                }),
                    l([
                        ...i.map((e) => ({ user: s.get(e), isSuccess: !0 })),
                        ...n.map((e) => ({ user: s.get(e), isSuccess: !1 })),
                    ]),
                    d(2);
            };
        return 1 === c
            ? (0, a.jsx)(g, { ...i, onInvite: u, subscriptionId: t.id })
            : 2 === c
              ? (0, a.jsx)(f, { ...i, inviteUsersResult: n })
              : void 0;
    };
