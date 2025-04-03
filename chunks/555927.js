n.d(t, { Z: () => f }), n(653041), n(47120), n(13667), n(390547);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(906732),
    o = n(171368),
    s = n(841710),
    c = n(981631),
    u = n(388032);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e) {
    let { priorityMembers: t, otherMembers: n, totalMembers: i, activity: a, guildId: h, sourceAnalyticsLocations: f } = e,
        g = [];
    for (let { user: e, status: n } of t)
        g.push(
            (0, r.jsx)(l.sNh, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, r.jsx)(
                        s.Z,
                        p(d({}, t), {
                            user: e,
                            status: n,
                            guildId: h
                        })
                    ),
                action: () =>
                    (0, o.openUserProfileModal)({
                        userId: e.id,
                        guildId: h,
                        sourceAnalyticsLocations: f,
                        analyticsLocation: { section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU }
                    })
            })
        );
    for (let e of n)
        g.push(
            (0, r.jsx)(l.sNh, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) =>
                    (0, r.jsx)(
                        s.Z,
                        p(d({}, t), {
                            user: e,
                            guildId: h
                        })
                    ),
                action: () =>
                    (0, o.openUserProfileModal)({
                        userId: e.id,
                        guildId: h,
                        sourceAnalyticsLocations: f,
                        analyticsLocation: { section: c.jXE.ACTIVITY_FEED_NOW_PLAYING_CONTEXT_MENU }
                    })
            })
        );
    let m = i - g.length;
    return (
        m > 0 &&
            g.push(
                (0, r.jsx)(l.sNh, {
                    id: 'unknown-members-'.concat(null == a ? void 0 : a.session_id),
                    render: (e) => (0, r.jsx)(s.Y, p(d({}, e), { label: u.NW.formatToPlainString(u.t['6Kqn9P'], { count: m }) }))
                })
            ),
        g
    );
}
function f(e) {
    let { priorityMembers: t, partiedMembers: n, currentActivities: o, guildContext: s } = e,
        c = new Set(
            t.map((e) => {
                let { user: t } = e;
                return t.id;
            })
        ),
        d = n.filter((e) => !c.has(e.id)),
        { analyticsLocations: p } = (0, a.ZP)(),
        f = i.useMemo(() => {
            let e = o
                .flatMap((e) => {
                    let { playingMembers: t } = e;
                    return t;
                })
                .map((e) => e.id);
            return n.filter((t) => !e.includes(t.id));
        }, [n, o]);
    if (o.length <= 1 && 0 === f.length) {
        var g, m;
        return (0, r.jsx)(l.kSQ, {
            label: n.length > 1 ? u.NW.formatToPlainString(u.t.C4WXvb, { memberCount: n.length }) : void 0,
            children: h({
                priorityMembers: t,
                otherMembers: d,
                totalMembers: n.length,
                activity: null != (m = null == (g = o[0]) ? void 0 : g.activity) ? m : void 0,
                guildId: null == s ? void 0 : s.id,
                sourceAnalyticsLocations: p
            })
        });
    }
    let b = o.map((e, n) => {
            let { playingMembers: i, game: a, activity: o } = e,
                u = new Set(i.map((e) => e.id));
            return (0, r.jsx)(
                l.kSQ,
                {
                    label: ''.concat(a.name, ' - ').concat(i.length),
                    children: h({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return u.has(t.id);
                        }),
                        otherMembers: i.filter((e) => !c.has(e.id)),
                        totalMembers: i.length,
                        activity: null != o ? o : void 0,
                        guildId: null == s ? void 0 : s.id,
                        sourceAnalyticsLocations: p
                    })
                },
                n
            );
        }),
        _ = f.map((e) => e.id);
    return [
        ...b,
        (0, r.jsx)(l.kSQ, {
            label: ''.concat(u.NW.string(u.t['mIx+gI']), ' - ').concat(f.length),
            children: h({
                priorityMembers: t.filter((e) => {
                    let { user: t } = e;
                    return _.includes(t.id);
                }),
                otherMembers: f.filter((e) => !c.has(e.id)),
                totalMembers: f.length,
                guildId: null == s ? void 0 : s.id,
                sourceAnalyticsLocations: p
            })
        })
    ];
}
