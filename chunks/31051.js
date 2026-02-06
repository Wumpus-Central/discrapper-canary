n.d(t, { A: () => y });
var i = n(627968),
    l = n(735438),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(863574),
    d = n(888675),
    c = n(639289),
    u = n(287809),
    m = n(166403),
    _ = n(954571),
    h = n(203982),
    p = n(728458),
    g = n(427262),
    A = n(573359),
    f = n(59784),
    x = n(612669),
    E = n(88001),
    C = n(652215),
    I = n(519412),
    T = n(985018),
    v = n(260171),
    N = n(421438);
let S = (e) => {
        let { disabled: t, invite: r, isExistingSub: o } = e;
        return (0, i.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: T.intl.string(I.default.rjuKse),
            icon: a.tvc,
            onClick: () => {
                if (null == r) return;
                let e = r.subscription,
                    t = r.id,
                    a = u.default.getUser(r.primary_user);
                if (null == a) return;
                let d = (0, g.$3)(a);
                _.default.track(C.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
                let m = (0, l.uniqueId)("premium-group-accept-invite-modal"),
                    p = !1;
                (0, s.mMO)(
                    async () => {
                        let { default: l } = await n.e("60072").then(n.bind(n, 159707));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                premiumGroupSubscriptionId: e,
                                premiumGroupInviteId: t,
                                premiumGroupPrimaryName: d,
                                isExistingSub: o,
                                onClose: async () => {
                                    p ||
                                        ((p = !0),
                                        h._.dispatch(C.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        A.A.isDisplayingWowMomentConfirmation && A.A.isAnimated
                                            ? setTimeout(() => {
                                                  n.onClose();
                                              }, c.K)
                                            : await n.onClose());
                                },
                            });
                    },
                    {
                        onCloseRequest: () => {
                            p ||
                                ((p = !0),
                                h._.dispatch(C.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                A.A.isDisplayingWowMomentConfirmation && A.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, s.OoC)(m);
                                      }, c.K)
                                    : (0, s.OoC)(m));
                        },
                        modalKey: m,
                    },
                );
            },
            disabled: t,
        });
    },
    b = (e) => {
        let { disabled: t, invite: l, channel: a } = e;
        return (0, i.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: T.intl.string(I.default["eYHh+z"]),
            onClick: () => {
                if (null == l || !a.isDM())
                    return void p.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                        extra: {
                            inviteIsNull: null == l,
                            channelIsDM: a.isDM(),
                            channelId: a.id,
                            subscriptionGroupMemberId: l?.id,
                            subscriptionId: l?.subscription,
                            primaryUserId: l?.primary_user,
                        },
                    });
                let e = a.getRecipientId(),
                    t = u.default.getUser(e);
                null != t &&
                    (_.default.track(C.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: l.id,
                        subscription_id: l.subscription,
                        invited_user_id: e,
                    }),
                    (0, s.mMO)(async () => {
                        let { default: e } = await n.e("15554").then(n.bind(n, 115225));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                subscriptionId: l.subscription,
                                invitedUser: t,
                                subscriptionGroupMemberId: l.id,
                            });
                    }));
            },
            disabled: t,
        });
    },
    j = (e) => {
        let { message: t, header: n, body: l, compact: r, actionButton: o } = e;
        return (0, i.jsxs)(d.A, {
            className: v.og,
            compact: r,
            iconNode: (0, i.jsx)(a.tvc, { size: "md", color: "currentColor" }),
            children: [
                (0, i.jsx)(s.Text, { variant: "text-md/medium", color: "text-strong", children: t }),
                (0, i.jsxs)(s.BJc, {
                    direction: "horizontal",
                    className: v.x,
                    children: [
                        (0, i.jsx)("img", { src: N, alt: "", className: v.Sl }),
                        (0, i.jsxs)("div", {
                            className: v.Qs,
                            children: [
                                (0, i.jsx)(s.Exy, { type: "beta", variant: "expressive" }),
                                (0, i.jsx)("h2", { className: v.DD, children: n }),
                                (0, i.jsx)(s.Text, { variant: "text-md/medium", color: "text-subtle", children: l }),
                                null != o && (0, i.jsx)("div", { className: v.UD, children: o }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    y = (e) => {
        let { message: t, channel: n, compact: l } = e,
            a = t.premiumGroupInviteId,
            {
                inviteState: s,
                isFetching: d,
                invite: c,
                currentUser: _,
                premiumSubscription: h,
            } = (0, r.cf)(
                [f.A, u.default, m.A],
                () => ({
                    inviteState: null != a ? f.A.getInviteState(a) : E.xI.NOT_FOUND,
                    isFetching: null != a && f.A.isFetching(a),
                    invite: null != a ? f.A.getInvite(a)?.invite : null,
                    currentUser: u.default.getCurrentUser(),
                    premiumSubscription: m.A.getPremiumSubscription(),
                }),
                [a],
            );
        if (null == _) return null;
        let p = t.author,
            g = _.id === p.id;
        if (d || s === E.xI.FETCHING || s === E.xI.UNKNOWN) return (0, i.jsx)(o.Wb, { isHorizontal: !0 });
        let A = (0, x.o1)({ sender: p, channel: n, isSender: g, inviteState: s });
        if (null == A) return null;
        let C = s === E.xI.PENDING,
            I = null;
        return (
            (I = g
                ? C
                    ? (0, i.jsx)(b, { disabled: !1, invite: c, channel: n })
                    : s === E.xI.REMOVED
                      ? (0, i.jsx)(b, { disabled: !0, invite: c, channel: n })
                      : null
                : (0, i.jsx)(S, { disabled: !C, invite: c, isExistingSub: null != h })),
            (0, i.jsx)(j, { message: A.message, header: A.header, body: A.body, compact: l, actionButton: I })
        );
    };
