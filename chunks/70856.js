n.d(t, {
    A: () => f,
}),
    n(321073),
    n(896048),
    n(114821),
    n(339614);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(688810),
    s = n(657331),
    o = n(129831),
    c = n(985018);

function u(e) {
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

function d(e, t) {
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

function p(e) {
    let {
            priorityMembers: t,
            otherMembers: n,
            totalMembers: i,
            activity: a,
            guildId: p,
            sourceAnalyticsLocations: f,
        } = e,
        h = [];
    for (let { user: e, status: n } of t)
        h.push(
            (0, r.jsx)(l.Drp, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, r.jsx)(
                        o.A,
                        d(u({}, t), {
                            user: e,
                            status: n,
                            guildId: p,
                        }),
                    ),
                action: () =>
                    (0, s.openUserProfileModal)({
                        userId: e.id,
                        guildId: p,
                        sourceAnalyticsLocations: f,
                    }),
            }),
        );
    for (let e of n)
        h.push(
            (0, r.jsx)(l.Drp, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, r.jsx)(
                        o.A,
                        d(u({}, t), {
                            user: e,
                            guildId: p,
                        }),
                    ),
                action: () =>
                    (0, s.openUserProfileModal)({
                        userId: e.id,
                        guildId: p,
                        sourceAnalyticsLocations: f,
                    }),
            }),
        );
    let A = i - h.length;
    return (
        A > 0 &&
            h.push(
                (0, r.jsx)(l.Drp, {
                    id: "unknown-members-".concat(null == a ? void 0 : a.session_id),
                    render: (e) =>
                        (0, r.jsx)(
                            o.x,
                            d(u({}, e), {
                                label: c.intl.formatToPlainString(c.t["6Kqn9M"], {
                                    count: A,
                                }),
                            }),
                        ),
                }),
            ),
        h
    );
}

function f(e) {
    let { priorityMembers: t, partiedMembers: n, currentActivities: s, guildContext: o } = e,
        u = new Set(
            t.map((e) => {
                let { user: t } = e;
                return t.id;
            }),
        ),
        d = n.filter((e) => !u.has(e.id)),
        { analyticsLocations: f } = (0, a.Ay)(),
        h = i.useMemo(() => {
            let e = s
                .flatMap((e) => {
                    let { playingMembers: t } = e;
                    return t;
                })
                .map((e) => e.id);
            return n.filter((t) => !e.includes(t.id));
        }, [n, s]);
    if (s.length <= 1 && 0 === h.length) {
        var A, g;
        return (0, r.jsx)(l.rXV, {
            label:
                n.length > 1
                    ? c.intl.formatToPlainString(c.t.C4WXvc, {
                          memberCount: n.length,
                      })
                    : void 0,
            children: p({
                priorityMembers: t,
                otherMembers: d,
                totalMembers: n.length,
                activity: null != (A = null == (g = s[0]) ? void 0 : g.activity) ? A : void 0,
                guildId: null == o ? void 0 : o.id,
                sourceAnalyticsLocations: f,
            }),
        });
    }
    let m = s.map((e, n) => {
            let { playingMembers: i, game: a, activity: s } = e,
                c = new Set(i.map((e) => e.id));
            return (0, r.jsx)(
                l.rXV,
                {
                    label: "".concat(a.name, " - ").concat(i.length),
                    children: p({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return c.has(t.id);
                        }),
                        otherMembers: i.filter((e) => !u.has(e.id)),
                        totalMembers: i.length,
                        activity: null != s ? s : void 0,
                        guildId: null == o ? void 0 : o.id,
                        sourceAnalyticsLocations: f,
                    }),
                },
                n,
            );
        }),
        b = h.map((e) => e.id);
    return [
        ...m,
        (0, r.jsx)(l.rXV, {
            label: "".concat(c.intl.string(c.t["mIx+gG"]), " - ").concat(h.length),
            children: p({
                priorityMembers: t.filter((e) => {
                    let { user: t } = e;
                    return b.includes(t.id);
                }),
                otherMembers: h.filter((e) => !u.has(e.id)),
                totalMembers: h.length,
                guildId: null == o ? void 0 : o.id,
                sourceAnalyticsLocations: f,
            }),
        }),
    ];
}
