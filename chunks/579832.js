n.d(t, { Z: () => T });
var r = n(54381),
    i = n(793030),
    a = n(442837),
    o = n(481060),
    s = n(568836),
    l = n(834129),
    c = n(594174),
    u = n(51144),
    d = n(703995),
    f = n(537363),
    p = n(282793),
    _ = n(606097),
    m = n(388032),
    h = n(887819),
    g = n(617842);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
        let { disabled: t, invite: a } = e,
            s = () => {
                if (null == a) return;
                let e = a.subscription,
                    t = c.default.getUser(a.primary_user);
                if (null == t) return;
                let i = (0, u.XM)(t);
                (0, o.ZDy)(async () => {
                    let { default: t } = await n.e("26450").then(n.bind(n, 382927));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            O(b({}, n), {
                                premiumGroupSubscriptionId: e,
                                premiumGroupPrimaryName: i,
                                isExistingSub: !1,
                            }),
                        );
                });
            };
        return (0, r.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: m.intl.string(_.default.rjuKse),
            icon: i.SrA,
            onClick: s,
            disabled: t,
        });
    },
    S = (e) => {
        let { disabled: t } = e,
            n = () => {};
        return (0, r.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: m.intl.string(_.default["eYHh+z"]),
            onClick: n,
            disabled: t,
        });
    },
    I = (e) => {
        let { message: t, header: n, body: a, compact: s, actionButton: c } = e;
        return (0, r.jsxs)(l.Z, {
            className: h.systemMessageContainer,
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
                    className: h.embedContainer,
                    children: [
                        (0, r.jsx)("img", {
                            src: g,
                            alt: "",
                            className: h.image,
                        }),
                        (0, r.jsxs)("div", {
                            className: h.content,
                            children: [
                                (0, r.jsx)(o.Cts, {
                                    type: "beta",
                                    variant: "expressive",
                                }),
                                (0, r.jsx)("h2", {
                                    className: h.title,
                                    children: n,
                                }),
                                (0, r.jsx)(o.Text, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: a,
                                }),
                                (0, r.jsx)("div", {
                                    className: h.buttonContainer,
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    T = (e) => {
        let { message: t, channel: n, compact: i } = e,
            o = t.premiumGroupInviteId,
            {
                inviteState: l,
                isFetching: u,
                invite: _,
                currentUser: m,
            } = (0, a.cj)([d.Z, c.default], () => {
                var e;
                return {
                    inviteState: null != o ? d.Z.getInviteState(o) : p.bZ.NOT_FOUND,
                    isFetching: null != o && d.Z.isFetching(o),
                    invite: null != o ? (null == (e = d.Z.getInvite(o)) ? void 0 : e.invite) : null,
                    currentUser: c.default.getCurrentUser(),
                };
            }, [o]);
        if (null == m) return null;
        let h = t.author,
            g = m.id === h.id;
        if (u || l === p.bZ.FETCHING || l === p.bZ.UNKNOWN) return (0, r.jsx)(s.OR, { isHorizontal: !0 });
        let E = (0, f.x)({
            sender: h,
            channel: n,
            isSender: g,
            inviteState: l,
        });
        if (null == E) return null;
        let b = l === p.bZ.PENDING,
            y = g
                ? (0, r.jsx)(S, { disabled: !b })
                : (0, r.jsx)(v, {
                      disabled: !b,
                      invite: _,
                  });
        return (0, r.jsx)(I, {
            message: E.message,
            header: E.header,
            body: E.body,
            compact: i,
            actionButton: y,
        });
    };
