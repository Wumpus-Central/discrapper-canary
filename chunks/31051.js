n.d(t, { A: () => x });
var r = n(627968),
    i = n(735438),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(863574),
    c = n(888675),
    u = n(639289),
    d = n(287809),
    f = n(166403),
    p = n(954571),
    _ = n(203982),
    h = n(728458),
    m = n(427262),
    g = n(573359),
    E = n(59784),
    b = n(612669),
    y = n(88001),
    O = n(652215),
    A = n(519412),
    v = n(985018),
    S = n(260171),
    I = n(421438);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = (e) => {
        let { disabled: t, invite: s, isExistingSub: l } = e,
            c = () => {
                if (null == s) return;
                let e = s.subscription,
                    t = s.id,
                    a = d.default.getUser(s.primary_user);
                if (null == a) return;
                let c = (0, m.$3)(a);
                p.default.track(O.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e,
                });
                let f = (0, i.uniqueId)("premium-group-accept-invite-modal"),
                    h = !1;
                (0, o.mMO)(
                    async () => {
                        let { default: i } = await n.e("60072").then(n.bind(n, 159707));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                R(C({}, n), {
                                    premiumGroupSubscriptionId: e,
                                    premiumGroupInviteId: t,
                                    premiumGroupPrimaryName: c,
                                    isExistingSub: l,
                                    onClose: async () => {
                                        h ||
                                            ((h = !0),
                                            _._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                            g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                                                ? setTimeout(() => {
                                                      n.onClose();
                                                  }, u.K)
                                                : await n.onClose());
                                    },
                                }),
                            );
                    },
                    {
                        onCloseRequest: () => {
                            h ||
                                ((h = !0),
                                _._.dispatch(O.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, o.OoC)(f);
                                      }, u.K)
                                    : (0, o.OoC)(f));
                        },
                        modalKey: f,
                    },
                );
            };
        return (0, r.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: v.intl.string(A.default.rjuKse),
            icon: a.tvc,
            onClick: c,
            disabled: t,
        });
    },
    P = (e) => {
        let { disabled: t, invite: i, channel: a } = e,
            s = () => {
                if (null == i || !a.isDM())
                    return void h.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                        extra: {
                            inviteIsNull: null == i,
                            channelIsDM: a.isDM(),
                            channelId: a.id,
                            subscriptionGroupMemberId: null == i ? void 0 : i.id,
                            subscriptionId: null == i ? void 0 : i.subscription,
                            primaryUserId: null == i ? void 0 : i.primary_user,
                        },
                    });
                let e = a.getRecipientId(),
                    t = d.default.getUser(e);
                null != t &&
                    (p.default.track(O.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: i.id,
                        subscription_id: i.subscription,
                        invited_user_id: e,
                    }),
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("15554").then(n.bind(n, 115225));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                R(C({}, n), {
                                    subscriptionId: i.subscription,
                                    invitedUser: t,
                                    subscriptionGroupMemberId: i.id,
                                }),
                            );
                    }));
            };
        return (0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: v.intl.string(A.default["eYHh+z"]),
            onClick: s,
            disabled: t,
        });
    },
    D = (e) => {
        let { message: t, header: n, body: i, compact: s, actionButton: l } = e;
        return (0, r.jsxs)(c.A, {
            className: S.og,
            compact: s,
            iconNode: (0, r.jsx)(a.tvc, {
                size: "md",
                color: "currentColor",
            }),
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
                (0, r.jsxs)(o.BJc, {
                    direction: "horizontal",
                    className: S.x,
                    children: [
                        (0, r.jsx)("img", {
                            src: I,
                            alt: "",
                            className: S.Sl,
                        }),
                        (0, r.jsxs)("div", {
                            className: S.Qs,
                            children: [
                                (0, r.jsx)(o.Exy, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: S.DD,
                                    children: n,
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: i,
                                }),
                                (0, r.jsx)("div", {
                                    className: S.UD,
                                    children: l,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    x = (e) => {
        let { message: t, channel: n, compact: i } = e,
            a = t.premiumGroupInviteId,
            {
                inviteState: o,
                isFetching: c,
                invite: u,
                currentUser: p,
                premiumSubscription: _,
            } = (0, s.cf)([E.A, d.default, f.A], () => {
                var e;
                return {
                    inviteState: null != a ? E.A.getInviteState(a) : y.xI.NOT_FOUND,
                    isFetching: null != a && E.A.isFetching(a),
                    invite: null != a ? (null == (e = E.A.getInvite(a)) ? void 0 : e.invite) : null,
                    currentUser: d.default.getCurrentUser(),
                    premiumSubscription: f.A.getPremiumSubscription(),
                };
            }, [a]);
        if (null == p) return null;
        let h = t.author,
            m = p.id === h.id;
        if (c || o === y.xI.FETCHING || o === y.xI.UNKNOWN) return (0, r.jsx)(l.Wb, { isHorizontal: !0 });
        let g = (0, b.o1)({
            sender: h,
            channel: n,
            isSender: m,
            inviteState: o,
        });
        if (null == g) return null;
        let O = o === y.xI.PENDING,
            A = m
                ? (0, r.jsx)(P, {
                      disabled: !O,
                      invite: u,
                      channel: n,
                  })
                : (0, r.jsx)(w, {
                      disabled: !O,
                      invite: u,
                      isExistingSub: null != _,
                  });
        return (0, r.jsx)(D, {
            message: g.message,
            header: g.header,
            body: g.body,
            compact: i,
            actionButton: A,
        });
    };
