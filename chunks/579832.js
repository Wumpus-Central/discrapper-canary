n.d(t, { Z: () => x });
var r = n(54381),
    i = n(392711),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(568836),
    c = n(834129),
    u = n(518727),
    d = n(594174),
    f = n(78839),
    p = n(626135),
    _ = n(585483),
    m = n(960048),
    h = n(51144),
    g = n(453227),
    E = n(703995),
    b = n(260720),
    y = n(282793),
    O = n(981631),
    v = n(353149),
    S = n(388032),
    I = n(887547),
    T = n(617842);
function C(e, t, n) {
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
function A(e) {
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
                C(e, t, n[t]);
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
function P(e, t) {
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
let R = (e) => {
        let { disabled: t, invite: o, isExistingSub: l } = e,
            c = () => {
                if (null == o) return;
                let e = o.subscription,
                    t = o.id,
                    a = d.default.getUser(o.primary_user);
                if (null == a) return;
                let c = (0, h.XM)(a);
                p.default.track(O.rMx.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e,
                });
                let f = (0, i.uniqueId)("premium-group-accept-invite-modal"),
                    m = !1;
                (0, s.ZDy)(
                    async () => {
                        let { default: i } = await n.e("26450").then(n.bind(n, 382927));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                P(A({}, n), {
                                    premiumGroupSubscriptionId: e,
                                    premiumGroupInviteId: t,
                                    premiumGroupPrimaryName: c,
                                    isExistingSub: l,
                                    onClose: async () => {
                                        m ||
                                            ((m = !0),
                                            _.S.dispatch(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                            g.Z.isDisplayingWowMomentConfirmation && g.Z.isAnimated
                                                ? setTimeout(() => {
                                                      n.onClose();
                                                  }, u.P)
                                                : await n.onClose());
                                    },
                                }),
                            );
                    },
                    {
                        onCloseRequest: () => {
                            m ||
                                ((m = !0),
                                _.S.dispatch(O.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                g.Z.isDisplayingWowMomentConfirmation && g.Z.isAnimated
                                    ? setTimeout(() => {
                                          (0, s.Mr3)(f);
                                      }, u.P)
                                    : (0, s.Mr3)(f));
                        },
                        modalKey: f,
                    },
                );
            };
        return (0, r.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: S.intl.string(v.default.rjuKse),
            icon: a.SrA,
            onClick: c,
            disabled: t,
        });
    },
    w = (e) => {
        let { disabled: t, invite: i, channel: a } = e,
            o = () => {
                if (null == i || !a.isDM())
                    return void m.Z.captureMessage("CancelInviteButton onClick: unexpected state", {
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
                    (p.default.track(O.rMx.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: i.id,
                        subscription_id: i.subscription,
                        invited_user_id: e,
                    }),
                    (0, s.ZDy)(async () => {
                        let { default: e } = await n.e("72114").then(n.bind(n, 157312));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                P(A({}, n), {
                                    subscriptionId: i.subscription,
                                    invitedUser: t,
                                    subscriptionGroupMemberId: i.id,
                                }),
                            );
                    }));
            };
        return (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: S.intl.string(v.default["eYHh+z"]),
            onClick: o,
            disabled: t,
        });
    },
    D = (e) => {
        let { message: t, header: n, body: i, compact: o, actionButton: l } = e;
        return (0, r.jsxs)(c.Z, {
            className: I.systemMessageContainer,
            compact: o,
            iconNode: (0, r.jsx)(a.SrA, {
                size: "md",
                color: "currentColor",
            }),
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
                (0, r.jsxs)(s.Kqy, {
                    direction: "horizontal",
                    className: I.embedContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: T,
                            alt: "",
                            className: I.image,
                        }),
                        (0, r.jsxs)("div", {
                            className: I.content,
                            children: [
                                (0, r.jsx)(s.Cts, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: I.title,
                                    children: n,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: i,
                                }),
                                (0, r.jsx)("div", {
                                    className: I.buttonContainer,
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
                inviteState: s,
                isFetching: c,
                invite: u,
                currentUser: p,
                premiumSubscription: _,
            } = (0, o.cj)([E.Z, d.default, f.Z], () => {
                var e;
                return {
                    inviteState: null != a ? E.Z.getInviteState(a) : y.bZ.NOT_FOUND,
                    isFetching: null != a && E.Z.isFetching(a),
                    invite: null != a ? (null == (e = E.Z.getInvite(a)) ? void 0 : e.invite) : null,
                    currentUser: d.default.getCurrentUser(),
                    premiumSubscription: f.Z.getPremiumSubscription(),
                };
            }, [a]);
        if (null == p) return null;
        let m = t.author,
            h = p.id === m.id;
        if (c || s === y.bZ.FETCHING || s === y.bZ.UNKNOWN) return (0, r.jsx)(l.OR, { isHorizontal: !0 });
        let g = (0, b.xf)({
            sender: m,
            channel: n,
            isSender: h,
            inviteState: s,
        });
        if (null == g) return null;
        let O = s === y.bZ.PENDING,
            v = h
                ? (0, r.jsx)(w, {
                      disabled: !O,
                      invite: u,
                      channel: n,
                  })
                : (0, r.jsx)(R, {
                      disabled: !O,
                      invite: u,
                      isExistingSub: null != _,
                  });
        return (0, r.jsx)(D, {
            message: g.message,
            header: g.header,
            body: g.body,
            compact: i,
            actionButton: v,
        });
    };
