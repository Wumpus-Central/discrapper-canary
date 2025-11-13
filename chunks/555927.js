n.d(t, { Z: () => f }), n(539854), n(388685), n(361932), n(187205);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(906732),
    s = n(892001),
    o = n(841710),
    c = n(388032);
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
            (0, r.jsx)(l.sNh, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, r.jsx)(
                        o.Z,
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
            (0, r.jsx)(l.sNh, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, r.jsx)(
                        o.Z,
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
    let g = i - h.length;
    return (
        g > 0 &&
            h.push(
                (0, r.jsx)(l.sNh, {
                    id: "unknown-members-".concat(null == a ? void 0 : a.session_id),
                    render: (e) =>
                        (0, r.jsx)(
                            o.Y,
                            d(u({}, e), { label: c.intl.formatToPlainString(c.t["6Kqn9M"], { count: g }) }),
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
        { analyticsLocations: f } = (0, a.ZP)(),
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
        var g, m;
        return (0, r.jsx)(l.kSQ, {
            label: n.length > 1 ? c.intl.formatToPlainString(c.t.C4WXvc, { memberCount: n.length }) : void 0,
            children: p({
                priorityMembers: t,
                otherMembers: d,
                totalMembers: n.length,
                activity: null != (m = null == (g = s[0]) ? void 0 : g.activity) ? m : void 0,
                guildId: null == o ? void 0 : o.id,
                sourceAnalyticsLocations: f,
            }),
        });
    }
    let _ = s.map((e, n) => {
            let { playingMembers: i, game: a, activity: s } = e,
                c = new Set(i.map((e) => e.id));
            return (0, r.jsx)(
                l.kSQ,
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
        ..._,
        (0, r.jsx)(l.kSQ, {
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
