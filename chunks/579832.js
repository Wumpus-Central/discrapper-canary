n.d(t, { Z: () => P });
var r = n(54381),
    i = n(793030),
    a = n(442837),
    o = n(481060),
    s = n(568836),
    l = n(834129),
    c = n(594174),
    u = n(78839),
    d = n(626135),
    f = n(960048),
    p = n(51144),
    _ = n(703995),
    m = n(260720),
    h = n(282793),
    g = n(981631),
    E = n(353149),
    b = n(388032),
    y = n(887547),
    O = n(617842);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = (e) => {
        let { disabled: t, invite: a, isExistingSub: s } = e,
            l = () => {
                if (null == a) return;
                let e = a.subscription,
                    t = a.id,
                    i = c.default.getUser(a.primary_user);
                if (null == i) return;
                let l = (0, p.XM)(i);
                d.default.track(g.rMx.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e,
                }),
                    (0, o.ZDy)(async () => {
                        let { default: i } = await n.e("26450").then(n.bind(n, 382927));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                T(S({}, n), {
                                    premiumGroupSubscriptionId: e,
                                    premiumGroupInviteId: t,
                                    premiumGroupPrimaryName: l,
                                    isExistingSub: s,
                                }),
                            );
                    });
            };
        return (0, r.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: b.intl.string(E.default.rjuKse),
            icon: i.SrA,
            onClick: l,
            disabled: t,
        });
    },
    A = (e) => {
        let { disabled: t, invite: i, channel: a } = e,
            s = () => {
                if (null == i || !a.isDM())
                    return void f.Z.captureMessage("CancelInviteButton onClick: unexpected state", {
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
                    t = c.default.getUser(e);
                null != t &&
                    (d.default.track(g.rMx.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: i.id,
                        subscription_id: i.subscription,
                        invited_user_id: e,
                    }),
                    (0, o.ZDy)(async () => {
                        let { default: e } = await n.e("72114").then(n.bind(n, 157312));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                T(S({}, n), {
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
            text: b.intl.string(E.default["eYHh+z"]),
            onClick: s,
            disabled: t,
        });
    },
    N = (e) => {
        let { message: t, header: n, body: a, compact: s, actionButton: c } = e;
        return (0, r.jsxs)(l.Z, {
            className: y.systemMessageContainer,
            compact: s,
            iconNode: (0, r.jsx)(i.SrA, {
                size: "md",
                color: "currentColor",
            }),
            children: [
                (0, r.jsx)(o.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
                (0, r.jsxs)(o.Kqy, {
                    direction: "horizontal",
                    className: y.embedContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: O,
                            alt: "",
                            className: y.image,
                        }),
                        (0, r.jsxs)("div", {
                            className: y.content,
                            children: [
                                (0, r.jsx)(o.Cts, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: y.title,
                                    children: n,
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: a,
                                }),
                                (0, r.jsx)("div", {
                                    className: y.buttonContainer,
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    P = (e) => {
        let { message: t, channel: n, compact: i } = e,
            o = t.premiumGroupInviteId,
            {
                inviteState: l,
                isFetching: d,
                invite: f,
                currentUser: p,
                premiumSubscription: g,
            } = (0, a.cj)([_.Z, c.default, u.Z], () => {
                var e;
                return {
                    inviteState: null != o ? _.Z.getInviteState(o) : h.bZ.NOT_FOUND,
                    isFetching: null != o && _.Z.isFetching(o),
                    invite: null != o ? (null == (e = _.Z.getInvite(o)) ? void 0 : e.invite) : null,
                    currentUser: c.default.getCurrentUser(),
                    premiumSubscription: u.Z.getPremiumSubscription(),
                };
            }, [o]);
        if (null == p) return null;
        let E = t.author,
            b = p.id === E.id;
        if (d || l === h.bZ.FETCHING || l === h.bZ.UNKNOWN) return (0, r.jsx)(s.OR, { isHorizontal: !0 });
        let y = (0, m.xf)({
            sender: E,
            channel: n,
            isSender: b,
            inviteState: l,
        });
        if (null == y) return null;
        let O = l === h.bZ.PENDING,
            v = b
                ? (0, r.jsx)(A, {
                      disabled: !O,
                      invite: f,
                      channel: n,
                  })
                : (0, r.jsx)(C, {
                      disabled: !O,
                      invite: f,
                      isExistingSub: null != g,
                  });
        return (0, r.jsx)(N, {
            message: y.message,
            header: y.header,
            body: y.body,
            compact: i,
            actionButton: v,
        });
    };
