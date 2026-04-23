"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    r = n(735438),
    l = n(403581),
    s = n(311907),
    a = n(827734),
    o = n(192308),
    c = n(821609),
    u = n(834730),
    d = n(331322),
    _ = n(508770),
    E = n(863574),
    A = n(888675),
    m = n(639289),
    I = n(287809),
    T = n(166403),
    N = n(954571),
    g = n(203982),
    p = n(728458),
    C = n(427262),
    f = n(573359),
    R = n(59784),
    h = n(612669),
    S = n(88001),
    O = n(652215),
    x = n(466919),
    M = n(985018),
    D = n(539550),
    P = n(421438);
let U = (e) => {
        let { disabled: t, invite: s, isExistingSub: a } = e;
        return (0, i.jsx)(c.$, {
            variant: "expressive",
            size: "md",
            text: M.intl.string(x.default.rjuKse),
            icon: l.t,
            onClick: () => {
                if (null == s) return;
                let e = s.subscription,
                    t = s.id,
                    l = I.default.getUser(s.primary_user);
                if (null == l) return;
                let c = (0, C.$3)(l);
                N.default.track(O.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, { invite_id: t, subscription_id: e });
                let u = (0, r.uniqueId)("premium-group-accept-invite-modal"),
                    d = !1;
                (0, o.openModalLazy)(
                    async () => {
                        let { default: r } = await n.e("37691").then(n.bind(n, 159707));
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                premiumGroupSubscriptionId: e,
                                premiumGroupInviteId: t,
                                premiumGroupPrimaryName: c,
                                isExistingSub: a,
                                onClose: async () => {
                                    d ||
                                        ((d = !0),
                                        g._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                        f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                                            ? setTimeout(() => {
                                                  n.onClose();
                                              }, m.K)
                                            : await n.onClose());
                                },
                            });
                    },
                    {
                        onCloseRequest: () => {
                            d ||
                                ((d = !0),
                                g._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, o.closeModal)(u);
                                      }, m.K)
                                    : (0, o.closeModal)(u));
                        },
                        modalKey: u,
                    },
                );
            },
            disabled: t,
        });
    },
    y = (e) => {
        let { disabled: t, invite: r, channel: l } = e;
        return (0, i.jsx)(c.$, {
            variant: "secondary",
            size: "md",
            text: M.intl.string(x.default["eYHh+z"]),
            onClick: () => {
                if (null == r || !l.isDM())
                    return void p.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                        extra: {
                            inviteIsNull: null == r,
                            channelIsDM: l.isDM(),
                            channelId: l.id,
                            subscriptionGroupMemberId: r?.id,
                            subscriptionId: r?.subscription,
                            primaryUserId: r?.primary_user,
                        },
                    });
                let e = l.getRecipientId(),
                    t = I.default.getUser(e);
                null != t &&
                    (N.default.track(O.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: r.id,
                        subscription_id: r.subscription,
                        invited_user_id: e,
                    }),
                    (0, o.openModalLazy)(async () => {
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
    L = (e) => {
        let { message: t, header: n, body: r, compact: s, actionButton: o } = e;
        return (0, i.jsxs)(A.A, {
            className: D.og,
            compact: s,
            iconNode: (0, i.jsx)(l.t, { size: "md", color: a.A.colors.ICON_STRONG }),
            children: [
                (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-strong", children: t }),
                (0, i.jsxs)(d.B, {
                    direction: "horizontal",
                    className: D.x,
                    children: [
                        (0, i.jsx)("img", { src: P, alt: "", className: D.Sl }),
                        (0, i.jsxs)("div", {
                            className: D.Qs,
                            children: [
                                (0, i.jsx)(_.E, { type: "beta", variant: "expressive" }),
                                (0, i.jsx)("h2", { className: D.DD, children: n }),
                                (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
                                null != o && (0, i.jsx)("div", { className: D.UD, children: o }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    v = (e) => {
        let { message: t, channel: n, compact: r } = e,
            l = t.premiumGroupInviteId,
            {
                inviteState: a,
                isFetching: o,
                invite: c,
                currentUser: u,
                premiumSubscription: d,
            } = (0, s.cf)(
                [R.A, I.default, T.A],
                () => ({
                    inviteState: null != l ? R.A.getInviteState(l) : S.xI.NOT_FOUND,
                    isFetching: null != l && R.A.isFetching(l),
                    invite: null != l ? R.A.getInvite(l)?.invite : null,
                    currentUser: I.default.getCurrentUser(),
                    premiumSubscription: T.A.getPremiumSubscription(),
                }),
                [l],
            );
        if (null == u) return null;
        let _ = t.author,
            A = u.id === _.id;
        if (o || a === S.xI.FETCHING || a === S.xI.UNKNOWN) return (0, i.jsx)(E.Wb, { isHorizontal: !0 });
        let m = (0, h.o1)({ sender: _, channel: n, isSender: A, inviteState: a });
        if (null == m) return null;
        let N = a === S.xI.PENDING,
            g = null;
        return (
            (g = A
                ? N
                    ? (0, i.jsx)(y, { disabled: !1, invite: c, channel: n })
                    : a === S.xI.REMOVED
                      ? (0, i.jsx)(y, { disabled: !0, invite: c, channel: n })
                      : null
                : (0, i.jsx)(U, { disabled: !N, invite: c, isExistingSub: null != d })),
            (0, i.jsx)(L, { message: m.message, header: m.header, body: m.body, compact: r, actionButton: g })
        );
    };
