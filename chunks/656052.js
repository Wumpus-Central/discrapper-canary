var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(916218),
    o = n(855986),
    u = n(403581),
    d = n(834730),
    c = n(803306),
    g = n(287809),
    m = n(166403),
    A = n(427262),
    E = n(99618),
    h = n(682901),
    S = n(50302),
    T = n(792996),
    f = n(379912),
    p = n(808532);
function x(e) {
    var t, n;
    let s,
        r,
        m,
        { subscription: x } = e,
        I = (0, E.MJ)(x),
        _ =
            ((t = "pending" === I.kind ? null : I.recipientUserId),
            (s = (0, o.bG)([g.default], () => (null != t ? g.default.getUser(t) : null))),
            (r = (0, A.xG)(s, { decoration: "auto" })),
            l.useEffect(() => {
                null != t &&
                    (async function (e) {
                        try {
                            await (0, c.wz)(e);
                        } catch {}
                    })(t);
            }, [t]),
            null != s ? r : null),
        b = null != _ ? T.intl.formatToPlainString(S.default.kVUGot, { username: _ }) : null,
        N = [],
        C = null;
    switch (I.kind) {
        case "pending":
            N = [T.intl.formatToPlainString(T.t.nZBvUR, { hours: Math.max(0, (0, a.A)(I.expiresAt, new Date())) })];
            break;
        case "active":
            N = [b, T.intl.formatToPlainString(f.default.MR4VnX, { renewalDate: I.renewsAt })];
            break;
        case "canceled":
        case "payment_failed":
            ((N = [b]), (C = T.intl.string("canceled" === I.kind ? S.default.bWW0Gp : S.default.nZIlOV)));
    }
    let y = N.filter((e) => null != e);
    return (0, i.jsxs)("div", {
        className: p.nM,
        children: [
            (0, i.jsxs)("div", {
                className: p.M4,
                children: [
                    (0, i.jsx)("div", {
                        className: p.Kk,
                        "aria-hidden": !0,
                        children: (0, i.jsx)(u.NitroWheelIcon, { size: "md", color: "currentColor" }),
                    }),
                    (0, i.jsxs)("div", {
                        className: p.zH,
                        children: [
                            (0, i.jsx)(d.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                tag: "span",
                                lineClamp: 1,
                                children:
                                    ((n = x.planId),
                                    null == (m = (0, E.Tr)(n))
                                        ? T.intl.string(T.t.lG6a5x)
                                        : T.intl.formatToPlainString(
                                              m.interval === h.WT.MONTH ? S.default.DLvbaf : S.default.eXhipA,
                                              { intervalCount: m.intervalCount },
                                          )),
                            }),
                            y.length > 0 &&
                                (0, i.jsx)(d.E, {
                                    variant: "body-sm/medium",
                                    color: "text-muted",
                                    tag: "span",
                                    lineClamp: 1,
                                    children: y.map((e, t) =>
                                        (0, i.jsxs)(
                                            l.Fragment,
                                            {
                                                children: [
                                                    t > 0 && (0, i.jsx)("span", { className: p.me, children: "\xb7" }),
                                                    e,
                                                ],
                                            },
                                            e,
                                        ),
                                    ),
                                }),
                        ],
                    }),
                ],
            }),
            null != C &&
                (0, i.jsx)(d.E, {
                    variant: "body-md/medium",
                    color: "text-feedback-warning",
                    tag: "span",
                    children: C,
                }),
        ],
    });
}
let I = l.memo(function (e) {
    let { subscriptionId: t } = e,
        n = (0, o.bG)([m.A], () => m.A.getSubscriptionById(t));
    return null != n && (0, E.VF)(n) ? (0, i.jsx)(x, { subscription: n }) : null;
});
n.d(
    t,
    {},
    {
        A: function (e) {
            let { subscriptionIds: t, className: n } = e;
            return (0, i.jsxs)("div", {
                className: r()(p.uW, n),
                children: [
                    (0, i.jsx)(d.E, {
                        variant: "body-lg/medium",
                        color: "text-strong",
                        children: T.intl.string(S.default.HLHZSh),
                    }),
                    (0, i.jsx)("div", {
                        className: p.p_,
                        children: t.map((e) => (0, i.jsx)(I, { subscriptionId: e }, e)),
                    }),
                ],
            });
        },
    },
);
