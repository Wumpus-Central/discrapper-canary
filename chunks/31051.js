n.d(t, {
    A: () => P,
});
var r = n(627968),
    i = n(735438),
    l = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(863574),
    c = n(888675),
    u = n(639289),
    d = n(287809),
    p = n(166403),
    m = n(954571),
    f = n(203982),
    g = n(728458),
    h = n(427262),
    _ = n(573359),
    b = n(59784),
    A = n(612669),
    y = n(88001),
    v = n(652215),
    x = n(519412),
    O = n(985018),
    E = n(260171),
    j = n(421438);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (e) => {
        let { disabled: t, invite: a, isExistingSub: o } = e;
        return (0, r.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: O.intl.string(x.default.rjuKse),
            icon: l.tvc,
            onClick: () => {
                if (null == a) return;
                let e = a.subscription,
                    t = a.id,
                    l = d.default.getUser(a.primary_user);
                if (null == l) return;
                let c = (0, h.$3)(l);
                m.default.track(v.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e,
                });
                let p = (0, i.uniqueId)("premium-group-accept-invite-modal"),
                    g = !1;
                (0, s.mMO)(
                    async () => {
                        let { default: i } = await n.e("60072").then(n.bind(n, 159707));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                I(C({}, n), {
                                    premiumGroupSubscriptionId: e,
                                    premiumGroupInviteId: t,
                                    premiumGroupPrimaryName: c,
                                    isExistingSub: o,
                                    onClose: async () => {
                                        g ||
                                            ((g = !0),
                                            f._.dispatch(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                            _.A.isDisplayingWowMomentConfirmation && _.A.isAnimated
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
                            g ||
                                ((g = !0),
                                f._.dispatch(v.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                                _.A.isDisplayingWowMomentConfirmation && _.A.isAnimated
                                    ? setTimeout(() => {
                                          (0, s.OoC)(p);
                                      }, u.K)
                                    : (0, s.OoC)(p));
                        },
                        modalKey: p,
                    },
                );
            },
            disabled: t,
        });
    },
    T = (e) => {
        let { disabled: t, invite: i, channel: l } = e;
        return (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: O.intl.string(x.default["eYHh+z"]),
            onClick: () => {
                if (null == i || !l.isDM())
                    return void g.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                        extra: {
                            inviteIsNull: null == i,
                            channelIsDM: l.isDM(),
                            channelId: l.id,
                            subscriptionGroupMemberId: null == i ? void 0 : i.id,
                            subscriptionId: null == i ? void 0 : i.subscription,
                            primaryUserId: null == i ? void 0 : i.primary_user,
                        },
                    });
                let e = l.getRecipientId(),
                    t = d.default.getUser(e);
                null != t &&
                    (m.default.track(v.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                        invite_id: i.id,
                        subscription_id: i.subscription,
                        invited_user_id: e,
                    }),
                    (0, s.mMO)(async () => {
                        let { default: e } = await n.e("15554").then(n.bind(n, 115225));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                I(C({}, n), {
                                    subscriptionId: i.subscription,
                                    invitedUser: t,
                                    subscriptionGroupMemberId: i.id,
                                }),
                            );
                    }));
            },
            disabled: t,
        });
    },
    N = (e) => {
        let { message: t, header: n, body: i, compact: a, actionButton: o } = e;
        return (0, r.jsxs)(c.A, {
            className: E.og,
            compact: a,
            iconNode: (0, r.jsx)(l.tvc, {
                size: "md",
                color: "currentColor",
            }),
            children: [
                (0, r.jsx)(s.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: t,
                }),
                (0, r.jsxs)(s.BJc, {
                    direction: "horizontal",
                    className: E.x,
                    children: [
                        (0, r.jsx)("img", {
                            src: j,
                            alt: "",
                            className: E.Sl,
                        }),
                        (0, r.jsxs)("div", {
                            className: E.Qs,
                            children: [
                                (0, r.jsx)(s.Exy, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: E.DD,
                                    children: n,
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: i,
                                }),
                                (0, r.jsx)("div", {
                                    className: E.UD,
                                    children: o,
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
            l = t.premiumGroupInviteId,
            {
                inviteState: s,
                isFetching: c,
                invite: u,
                currentUser: m,
                premiumSubscription: f,
            } = (0, a.cf)([b.A, d.default, p.A], () => {
                var e;
                return {
                    inviteState: null != l ? b.A.getInviteState(l) : y.xI.NOT_FOUND,
                    isFetching: null != l && b.A.isFetching(l),
                    invite: null != l ? (null == (e = b.A.getInvite(l)) ? void 0 : e.invite) : null,
                    currentUser: d.default.getCurrentUser(),
                    premiumSubscription: p.A.getPremiumSubscription(),
                };
            }, [l]);
        if (null == m) return null;
        let g = t.author,
            h = m.id === g.id;
        if (c || s === y.xI.FETCHING || s === y.xI.UNKNOWN)
            return (0, r.jsx)(o.Wb, {
                isHorizontal: !0,
            });
        let _ = (0, A.o1)({
            sender: g,
            channel: n,
            isSender: h,
            inviteState: s,
        });
        if (null == _) return null;
        let v = s === y.xI.PENDING,
            x = h
                ? (0, r.jsx)(T, {
                      disabled: !v,
                      invite: u,
                      channel: n,
                  })
                : (0, r.jsx)(S, {
                      disabled: !v,
                      invite: u,
                      isExistingSub: null != f,
                  });
        return (0, r.jsx)(N, {
            message: _.message,
            header: _.header,
            body: _.body,
            compact: i,
            actionButton: x,
        });
    };
