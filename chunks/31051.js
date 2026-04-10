"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(735438),
    s = n(158954),
    l = n(311907),
    a = n(827734),
    c = n(397927),
    o = n(863574),
    u = n(888675),
    d = n(639289),
    _ = n(287809),
    E = n(166403),
    A = n(954571),
    m = n(203982),
    I = n(728458),
    T = n(427262),
    g = n(573359),
    N = n(59784),
    f = n(612669),
    p = n(88001),
    C = n(652215),
    h = n(519412),
    S = n(985018),
    R = n(313902),
    x = n(421438);
let O = (e) => {
        let { disabled: t, invite: l, isExistingSub: a } = e;
        return (0, i.jsx)(c.Button, {
            variant: "expressive",
            size: "md",
            text: S.intl.string(h.default.rjuKse),
            icon: s.tvc,
            onClick: () => {
                if (null == l) return;
                let e = l.subscription,
                    t = l.id,
                    s = _.default.getUser(l.primary_user);
                if (null == s) return;
                let o = (0, T.$3)(s);
                A.default.track(C.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
                let u = (0, r.uniqueId)("premium-group-accept-invite-modal"),
                    E = !1;
                (0, c.mMO)(
                    async () => {
                        let { default: r } = await n.e("60072").then(n.bind(n, 159707));
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                premiumGroupSubscriptionId: e,
                                premiumGroupInviteId: t,
                                premiumGroupPrimaryName: o,
                                isExistingSub: a,
                                onClose: async () => {
                                    E ||
                                        ((E = !0),
                                        m._.dispatch(C.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                                            ? setTimeout(() => {
                                                  n.onClose();
                                              }, d.K)
                                            : await n.onClose());
                                },
                            });
                    },
                    {
                        onCloseRequest: () => {
                            E ||
                                ((E = !0),
                                m._.dispatch(C.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, c.OoC)(u);
                                      }, d.K)
                                    : (0, c.OoC)(u));
                        },
                        modalKey: u,
                    },
                );
            },
            disabled: t,
        });
    },
    M = (e) => {
        let { disabled: t, invite: r, channel: s } = e;
        return (0, i.jsx)(c.Button, {
            variant: "secondary",
            size: "md",
            text: S.intl.string(h.default["eYHh+z"]),
            onClick: () => {
                if (null == r || !s.isDM())
                    return void I.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                        extra: {
                            inviteIsNull: null == r,
                            channelIsDM: s.isDM(),
                            channelId: s.id,
                            subscriptionGroupMemberId: r?.id,
                            subscriptionId: r?.subscription,
                            primaryUserId: r?.primary_user,
                        },
                    });
                let e = s.getRecipientId(),
                    t = _.default.getUser(e);
                null != t &&
                    (A.default.track(C.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: r.id,
                        subscription_id: r.subscription,
                        invited_user_id: e,
                    }),
                    (0, c.mMO)(async () => {
                        let { default: e } = await n.e("15554").then(n.bind(n, 115225));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                subscriptionId: r.subscription,
                                invitedUser: t,
                                subscriptionGroupMemberId: r.id,
                            });
                    }));
            },
            disabled: t,
        });
    },
    D = (e) => {
        let { message: t, header: n, body: r, compact: l, actionButton: o } = e;
        return (0, i.jsxs)(u.A, {
            className: R.og,
            compact: l,
            iconNode: (0, i.jsx)(s.tvc, { size: "md", color: a.A.colors.ICON_STRONG }),
            children: [
                (0, i.jsx)(c.Text, { variant: "text-md/medium", color: "text-strong", children: t }),
                (0, i.jsxs)(c.BJc, {
                    direction: "horizontal",
                    className: R.x,
                    children: [
                        (0, i.jsx)("img", { src: x, alt: "", className: R.Sl }),
                        (0, i.jsxs)("div", {
                            className: R.Qs,
                            children: [
                                (0, i.jsx)(c.Exy, { type: "beta", variant: "expressive" }),
                                (0, i.jsx)("h2", { className: R.DD, children: n }),
                                (0, i.jsx)(c.Text, { variant: "text-md/medium", color: "text-subtle", children: r }),
                                null != o && (0, i.jsx)("div", { className: R.UD, children: o }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    U = (e) => {
        let { message: t, channel: n, compact: r } = e,
            s = t.premiumGroupInviteId,
            {
                inviteState: a,
                isFetching: c,
                invite: u,
                currentUser: d,
                premiumSubscription: A,
            } = (0, l.cf)(
                [N.A, _.default, E.A],
                () => ({
                    inviteState: null != s ? N.A.getInviteState(s) : p.xI.NOT_FOUND,
                    isFetching: null != s && N.A.isFetching(s),
                    invite: null != s ? N.A.getInvite(s)?.invite : null,
                    currentUser: _.default.getCurrentUser(),
                    premiumSubscription: E.A.getPremiumSubscription(),
                }),
                [s],
            );
        if (null == d) return null;
        let m = t.author,
            I = d.id === m.id;
        if (c || a === p.xI.FETCHING || a === p.xI.UNKNOWN) return (0, i.jsx)(o.Wb, { isHorizontal: !0 });
        let T = (0, f.o1)({ sender: m, channel: n, isSender: I, inviteState: a });
        if (null == T) return null;
        let g = a === p.xI.PENDING,
            C = null;
        return (
            (C = I
                ? g
                    ? (0, i.jsx)(M, { disabled: !1, invite: u, channel: n })
                    : a === p.xI.REMOVED
                      ? (0, i.jsx)(M, { disabled: !0, invite: u, channel: n })
                      : null
                : (0, i.jsx)(O, { disabled: !g, invite: u, isExistingSub: null != A })),
            (0, i.jsx)(D, { message: T.message, header: T.header, body: T.body, compact: r, actionButton: C })
        );
    };
