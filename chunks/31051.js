n.d(t, { A: () => P });
var i = n(627968),
    a = n(735438),
    l = n(158954),
    r = n(311907),
    s = n(827734),
    o = n(397927),
    c = n(863574),
    d = n(888675),
    u = n(639289),
    _ = n(287809),
    m = n(166403),
    A = n(954571),
    E = n(203982),
    I = n(728458),
    T = n(427262),
    f = n(573359),
    N = n(59784),
    C = n(612669),
    g = n(88001),
    h = n(652215),
    p = n(518582),
    R = n(985018),
    x = n(498581),
    S = n(421438);
let O = (e) => {
        let { disabled: t, invite: r, isExistingSub: s } = e;
        return (0, i.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: R.intl.string(p.default.rjuKse),
            icon: l.tvc,
            onClick: () => {
                if (null == r) return;
                let e = r.subscription,
                    t = r.id,
                    l = _.default.getUser(r.primary_user);
                if (null == l) return;
                let c = (0, T.$3)(l);
                A.default.track(h.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
                let d = (0, a.uniqueId)("premium-group-accept-invite-modal"),
                    m = !1;
                (0, o.mMO)(
                    async () => {
                        let { default: a } = await n.e("60072").then(n.bind(n, 159707));
                        return (n) =>
                            (0, i.jsx)(a, {
                                ...n,
                                premiumGroupSubscriptionId: e,
                                premiumGroupInviteId: t,
                                premiumGroupPrimaryName: c,
                                isExistingSub: s,
                                onClose: async () => {
                                    m ||
                                        ((m = !0),
                                        E._.dispatch(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                                            ? setTimeout(() => {
                                                  n.onClose();
                                              }, u.K)
                                            : await n.onClose());
                                },
                            });
                    },
                    {
                        onCloseRequest: () => {
                            m ||
                                ((m = !0),
                                E._.dispatch(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, o.OoC)(d);
                                      }, u.K)
                                    : (0, o.OoC)(d));
                        },
                        modalKey: d,
                    },
                );
            },
            disabled: t,
        });
    },
    M = (e) => {
        let { disabled: t, invite: a, channel: l } = e;
        return (0, i.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: R.intl.string(p.default["eYHh+z"]),
            onClick: () => {
                if (null == a || !l.isDM())
                    return void I.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                        extra: {
                            inviteIsNull: null == a,
                            channelIsDM: l.isDM(),
                            channelId: l.id,
                            subscriptionGroupMemberId: a?.id,
                            subscriptionId: a?.subscription,
                            primaryUserId: a?.primary_user,
                        },
                    });
                let e = l.getRecipientId(),
                    t = _.default.getUser(e);
                null != t &&
                    (A.default.track(h.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: a.id,
                        subscription_id: a.subscription,
                        invited_user_id: e,
                    }),
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("15554").then(n.bind(n, 115225));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                subscriptionId: a.subscription,
                                invitedUser: t,
                                subscriptionGroupMemberId: a.id,
                            });
                    }));
            },
            disabled: t,
        });
    },
    D = (e) => {
        let { message: t, header: n, body: a, compact: r, actionButton: c } = e;
        return (0, i.jsxs)(d.A, {
            className: x.og,
            compact: r,
            iconNode: (0, i.jsx)(l.tvc, { size: "md", color: s.A.colors.ICON_STRONG }),
            children: [
                (0, i.jsx)(o.Text, { variant: "text-md/medium", color: "text-strong", children: t }),
                (0, i.jsxs)(o.BJc, {
                    direction: "horizontal",
                    className: x.x,
                    children: [
                        (0, i.jsx)("img", { src: S, alt: "", className: x.Sl }),
                        (0, i.jsxs)("div", {
                            className: x.Qs,
                            children: [
                                (0, i.jsx)(o.Exy, { type: "beta", variant: "expressive" }),
                                (0, i.jsx)("h2", { className: x.DD, children: n }),
                                (0, i.jsx)(o.Text, { variant: "text-md/medium", color: "text-subtle", children: a }),
                                null != c && (0, i.jsx)("div", { className: x.UD, children: c }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    P = (e) => {
        let { message: t, channel: n, compact: a } = e,
            l = t.premiumGroupInviteId,
            {
                inviteState: s,
                isFetching: o,
                invite: d,
                currentUser: u,
                premiumSubscription: A,
            } = (0, r.cf)(
                [N.A, _.default, m.A],
                () => ({
                    inviteState: null != l ? N.A.getInviteState(l) : g.xI.NOT_FOUND,
                    isFetching: null != l && N.A.isFetching(l),
                    invite: null != l ? N.A.getInvite(l)?.invite : null,
                    currentUser: _.default.getCurrentUser(),
                    premiumSubscription: m.A.getPremiumSubscription(),
                }),
                [l],
            );
        if (null == u) return null;
        let E = t.author,
            I = u.id === E.id;
        if (o || s === g.xI.FETCHING || s === g.xI.UNKNOWN) return (0, i.jsx)(c.Wb, { isHorizontal: !0 });
        let T = (0, C.o1)({ sender: E, channel: n, isSender: I, inviteState: s });
        if (null == T) return null;
        let f = s === g.xI.PENDING,
            h = null;
        return (
            (h = I
                ? f
                    ? (0, i.jsx)(M, { disabled: !1, invite: d, channel: n })
                    : s === g.xI.REMOVED
                      ? (0, i.jsx)(M, { disabled: !0, invite: d, channel: n })
                      : null
                : (0, i.jsx)(O, { disabled: !f, invite: d, isExistingSub: null != A })),
            (0, i.jsx)(D, { message: T.message, header: T.header, body: T.body, compact: a, actionButton: h })
        );
    };
