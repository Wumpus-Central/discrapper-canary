s.d(t, { default: () => M }), s(321073);
var a = s(627968),
    i = s(64700),
    l = s(189213),
    r = s(772707),
    n = s(311907),
    c = s(292666),
    d = s(821609),
    u = s(718213),
    o = s(964486),
    m = s(780964),
    f = s(858897),
    _ = s(954571),
    h = s(427262),
    x = s(761546),
    p = s(677185),
    b = s(233317),
    g = s(5818),
    v = s(298492),
    N = s(88001),
    S = s(652215),
    j = s(466919),
    k = s(985018),
    C = s(807735),
    I = s(788396);
let E = (e) => {
        let { onInvite: t, onClose: s, subscriptionId: r, ...o } = e,
            [m, f] = i.useState([]),
            [p, v] = i.useState(""),
            I = (0, u.A)(p, 400),
            E = (0, n.bG)([b.A], () => b.A.getNumAvailableInvites()),
            {
                eligibleUsers: A,
                getNextRows: M,
                hasError: y,
                isFetching: P,
            } = (0, g.A)({ subscriptionId: r, searchQuery: I }),
            [R, U] = i.useState(!1),
            T = i.useCallback(
                (e) => {
                    f((t) => t.filter((t) => !e.has(t.id)));
                },
                [f],
            ),
            w = i.useMemo(() => m.map((e) => ({ id: e.id, label: h.Ay.getName(e) })), [m]);
        return y
            ? (0, a.jsx)(l.Modal, {
                  size: "sm",
                  title: k.intl.string(j.default["54lM5y"]),
                  subtitle: k.intl.string(j.default.zrtwpV),
                  onClose: s,
                  actions: [],
                  ...o,
              })
            : 0 !== A.length || P || 0 !== I.length
              ? (0, a.jsx)(l.Modal, {
                    size: "md",
                    title: k.intl.string(j.default["Um/7BM"]),
                    subtitle: k.intl.format(j.default.qSWXaf, {
                        totalSeats: N.LM,
                        premiumGroupProductName: (0, N.DP)(),
                        helpCenterLink: N.TE,
                    }),
                    onClose: s,
                    input: (0, a.jsx)("div", {
                        className: C.c,
                        children: (0, a.jsx)(c.k, {
                            value: p,
                            onChange: v,
                            placeholder: 0 === m.length ? k.intl.string(j.default.wRS8vo) : "",
                            leading: { type: "tags", label: k.intl.string(j.default["Um/7BM"]), items: w, onRemove: T },
                        }),
                    }),
                    actions: [],
                    actionBarInput: (0, a.jsx)(d.$, {
                        variant: "primary",
                        disabled: 0 === m.length || R,
                        text: k.intl.string(j.default["5fZHp3"]),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            _.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                invited_user_ids: m.map((e) => e.id),
                            }),
                                U(!0),
                                await t(m),
                                U(!1);
                        },
                    }),
                    ...o,
                    children: (0, a.jsx)(x.A, {
                        users: A,
                        isUserSelected: (e) => m.some((t) => t.id === e.id),
                        onSelectionChange: (e, t) => {
                            f((s) => (t ? [...s, e] : s.filter((t) => t.id !== e.id))), t && v("");
                        },
                        isUserDisabled: (e) => (m.length >= E && !m.some((t) => t.id === e.id)) || !e.eligible,
                        isFetching: P,
                        onFetchMore: M,
                        searchQuery: I,
                        emptySearchContent: {
                            header: k.intl.string(j.default.gaamNe),
                            body: k.intl.string(j.default.nQcM39),
                        },
                        className: C.p_,
                        tooltipConfig: {
                            text: (e) =>
                                k.intl.formatToPlainString(j.default["5tzM9V"], {
                                    disabledUserName: h.Ay.getName(e),
                                    premiumGroupProductName: (0, N.DP)(),
                                }),
                            isActive: (e, t) => !!(t && !e.eligible),
                        },
                    }),
                })
              : (0, a.jsx)(l.Modal, {
                    size: "sm",
                    title: k.intl.string(j.default.ONaJLH),
                    subtitle: k.intl.format(j.default["0LHbPc"], { helpCenterLink: N.TE }),
                    onClose: s,
                    actions: [],
                    ...o,
                });
    },
    A = (e) => {
        let { onClose: t, inviteUsersResult: s, ...i } = e;
        return (0, a.jsx)(r.k, {
            graphic: { type: "image", src: I.A },
            gradientColor: "nitro-pink",
            title: k.intl.formatToPlainString(j.default.MIiPur, {
                premiumGroupProductName: (0, N.DP)(),
                sentCount: s.filter((e) => e.isSuccess).length,
            }),
            subtitle: k.intl.format(j.default.olkQkj, {
                onClick: () => {
                    t(), (0, f.openUserSettings)(m.X.SUBSCRIPTIONS_PANEL);
                },
            }),
            onClose: t,
            ...i,
            children: (0, a.jsx)("div", {
                className: C.yk,
                children: s.map((e) =>
                    (0, a.jsx)(v.q, { recipient: e.user, isSuccess: e.isSuccess, onClose: t }, e.user.id),
                ),
            }),
        });
    },
    M = (e) => {
        let { subscription: t, isFromPurchaseFlow: s = !1, ...l } = e,
            [r, n] = i.useState([]);
        (0, o.Ay)(() => {
            _.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card",
            });
        });
        let [c, d] = i.useState(1),
            u = async (e) => {
                let s = new Map(),
                    a = [];
                for (let t of e) s.set(t.id, t), a.push(t.id);
                let i = await (0, p.n2)(t.id, a);
                if (null == i) {
                    _.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: a,
                    }),
                        n(e.map((e) => ({ user: e, isSuccess: !1 }))),
                        d(2);
                    return;
                }
                let { invitedUsers: l, ineligibleUsers: r } = i;
                _.default.track(S.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: l,
                    failed_user_ids: r,
                }),
                    n([
                        ...l.map((e) => ({ user: s.get(e), isSuccess: !0 })),
                        ...r.map((e) => ({ user: s.get(e), isSuccess: !1 })),
                    ]),
                    d(2);
            };
        return 1 === c
            ? (0, a.jsx)(E, { ...l, onInvite: u, subscriptionId: t.id })
            : 2 === c
              ? (0, a.jsx)(A, { ...l, inviteUsersResult: r })
              : void 0;
    };
