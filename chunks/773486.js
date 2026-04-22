s.d(t, { default: () => P }), s(321073);
var i = s(627968),
    a = s(64700),
    l = s(189213),
    r = s(772707),
    n = s(311907),
    d = s(292666),
    u = s(821609),
    c = s(718213),
    o = s(964486),
    m = s(780964),
    f = s(858897),
    _ = s(954571),
    p = s(427262),
    g = s(761546),
    h = s(677185),
    S = s(233317),
    b = s(5818),
    x = s(298492),
    I = s(88001),
    N = s(652215),
    C = s(466919),
    v = s(985018),
    E = s(807735),
    M = s(788396);
let k = (e) => {
        let { onInvite: t, onClose: s, subscriptionId: r, ...o } = e,
            [m, f] = a.useState([]),
            [h, x] = a.useState(""),
            M = (0, c.A)(h, 400),
            k = (0, n.bG)([S.A], () => S.A.getNumAvailableInvites()),
            {
                eligibleUsers: A,
                getNextRows: P,
                hasError: y,
                isFetching: R,
            } = (0, b.A)({ subscriptionId: r, searchQuery: M }),
            [j, U] = a.useState(!1),
            w = a.useCallback(
                (e) => {
                    f((t) => t.filter((t) => !e.has(t.id)));
                },
                [f],
            ),
            T = a.useMemo(() => m.map((e) => ({ id: e.id, label: p.Ay.getName(e) })), [m]);
        return y
            ? (0, i.jsx)(l.Modal, {
                  size: "sm",
                  title: v.intl.string(C.default["54lM5y"]),
                  subtitle: v.intl.string(C.default.zrtwpV),
                  onClose: s,
                  actions: [],
                  ...o,
              })
            : 0 !== A.length || R || 0 !== M.length
              ? (0, i.jsx)(l.Modal, {
                    size: "md",
                    title: v.intl.string(C.default["Um/7BM"]),
                    subtitle: v.intl.format(C.default.qSWXaf, {
                        totalSeats: I.LM,
                        premiumGroupProductName: (0, I.DP)(),
                        helpCenterLink: I.TE,
                    }),
                    onClose: s,
                    input: (0, i.jsx)("div", {
                        className: E.c,
                        children: (0, i.jsx)(d.k, {
                            value: h,
                            onChange: x,
                            placeholder: 0 === m.length ? v.intl.string(C.default.wRS8vo) : "",
                            leading: { type: "tags", label: v.intl.string(C.default["Um/7BM"]), items: T, onRemove: w },
                        }),
                    }),
                    actions: [],
                    actionBarInput: (0, i.jsx)(u.$, {
                        variant: "primary",
                        disabled: 0 === m.length || j,
                        text: v.intl.string(C.default["5fZHp3"]),
                        size: "md",
                        fullWidth: !0,
                        onClick: async () => {
                            _.default.track(N.HAw.PREMIUM_GROUP_INVITE_FRIENDS_CTA_CLICKED, {
                                invited_user_ids: m.map((e) => e.id),
                            }),
                                U(!0),
                                await t(m),
                                U(!1);
                        },
                    }),
                    ...o,
                    children: (0, i.jsx)(g.A, {
                        users: A,
                        isUserSelected: (e) => m.some((t) => t.id === e.id),
                        onSelectionChange: (e, t) => {
                            f((s) => (t ? [...s, e] : s.filter((t) => t.id !== e.id))), t && x("");
                        },
                        isUserDisabled: (e) => (m.length >= k && !m.some((t) => t.id === e.id)) || !e.eligible,
                        isFetching: R,
                        onFetchMore: P,
                        searchQuery: M,
                        emptySearchContent: {
                            header: v.intl.string(C.default.gaamNe),
                            body: v.intl.string(C.default.nQcM39),
                        },
                        className: E.p_,
                        tooltipConfig: {
                            text: (e) =>
                                v.intl.formatToPlainString(C.default["5tzM9V"], {
                                    disabledUserName: p.Ay.getName(e),
                                    premiumGroupProductName: (0, I.DP)(),
                                }),
                            isActive: (e, t) => !!(t && !e.eligible),
                        },
                    }),
                })
              : (0, i.jsx)(l.Modal, {
                    size: "sm",
                    title: v.intl.string(C.default.ONaJLH),
                    subtitle: v.intl.format(C.default["0LHbPc"], { helpCenterLink: I.TE }),
                    onClose: s,
                    actions: [],
                    ...o,
                });
    },
    A = (e) => {
        let { onClose: t, inviteUsersResult: s, ...a } = e;
        return (0, i.jsx)(r.k, {
            graphic: { type: "image", src: M.A },
            gradientColor: "nitro-pink",
            title: v.intl.formatToPlainString(C.default.MIiPur, {
                premiumGroupProductName: (0, I.DP)(),
                sentCount: s.filter((e) => e.isSuccess).length,
            }),
            subtitle: v.intl.format(C.default.olkQkj, {
                onClick: () => {
                    t(), (0, f.openUserSettings)(m.X.SUBSCRIPTIONS_PANEL);
                },
            }),
            onClose: t,
            ...a,
            children: (0, i.jsx)("div", {
                className: E.yk,
                children: s.map((e) =>
                    (0, i.jsx)(x.q, { recipient: e.user, isSuccess: e.isSuccess, onClose: t }, e.user.id),
                ),
            }),
        });
    },
    P = (e) => {
        let { subscription: t, isFromPurchaseFlow: s = !1, ...l } = e,
            [r, n] = a.useState([]);
        (0, o.Ay)(() => {
            _.default.track(N.HAw.PREMIUM_GROUP_INVITE_FRIENDS_MODAL_VIEWED, {
                source: s ? "purchase_flow" : "subscription_card",
            });
        });
        let [d, u] = a.useState(1),
            c = async (e) => {
                let s = new Map(),
                    i = [];
                for (let t of e) s.set(t.id, t), i.push(t.id);
                let a = await (0, h.n2)(t.id, i);
                if (null == a) {
                    _.default.track(N.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                        successful_user_ids: [],
                        failed_user_ids: i,
                    }),
                        n(e.map((e) => ({ user: e, isSuccess: !1 }))),
                        u(2);
                    return;
                }
                let { invitedUsers: l, ineligibleUsers: r } = a;
                _.default.track(N.HAw.PREMIUM_GROUP_INVITE_FRIENDS_RESULT, {
                    successful_user_ids: l,
                    failed_user_ids: r,
                }),
                    n([
                        ...l.map((e) => ({ user: s.get(e), isSuccess: !0 })),
                        ...r.map((e) => ({ user: s.get(e), isSuccess: !1 })),
                    ]),
                    u(2);
            };
        return 1 === d
            ? (0, i.jsx)(k, { ...l, onInvite: c, subscriptionId: t.id })
            : 2 === d
              ? (0, i.jsx)(A, { ...l, inviteUsersResult: r })
              : void 0;
    };
