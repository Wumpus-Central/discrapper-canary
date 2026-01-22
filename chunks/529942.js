n.d(t, {
    $u: () => C,
    IA: () => v,
    ID: () => N,
    Tk: () => A,
    Z$: () => R,
    rf: () => S,
}),
    n(896048);
var r = n(73153),
    i = n(58149),
    a = n(976860),
    s = n(734057),
    o = n(808728),
    l = n(696451),
    c = n(317525),
    u = n(576705),
    d = n(309010),
    f = n(543465),
    p = n(954571),
    _ = n(164956),
    h = n(209700),
    m = n(652215),
    g = n(746080);

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

function A(e, t) {
    p.default.track(
        m.HAw.VIEW_AS_ROLES_SELECTED,
        O(
            b(
                {
                    num_roles: Object.keys(t.roles).length,
                },
                (0, i.H$)(e),
            ),
            {
                is_viewing_as_member: t.type === h._.NEW_MEMBER,
            },
        ),
    ),
        r.h.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: t,
        }),
        I(e);
}

function v(e, t) {
    let n = _.A.getData(e);
    null != n &&
        n.type === t.type &&
        (p.default.track(
            m.HAw.VIEW_AS_ROLES_SELECTED,
            O(
                b(
                    {
                        num_roles: Object.keys(n.roles).length,
                    },
                    (0, i.H$)(e),
                ),
                {
                    is_viewing_as_member: n.type === h._.NEW_MEMBER,
                },
            ),
        ),
        r.h.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: b({}, n, t),
        }),
        I(e));
}

function S(e) {
    r.h.dispatch({
        type: "IMPERSONATE_STOP",
        guildId: e,
    });
}

function I(e) {
    let t = d.A.getChannelId(e),
        n = s.A.getChannel(t);
    if (!(null != t && (0, g.jq)(t)) && !u.A.can(m.xBc.VIEW_CHANNEL, n)) {
        let t = o.Ay.getDefaultChannel(e);
        null != t && (0, a.pX)(m.BVt.CHANNEL(e, t.id));
    }
}

function T(e, t) {
    let n = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)],
        r = Array.from(t);
    o.Ay.addConditionalChangeListener(() => {
        let t = l.Ay.getSelfMember(e);
        if (null == t) return !1;
        if (r.some((e) => !t.roles.includes(e))) return !0;
        let i = [...o.Ay.getSelectableChannelIds(e), ...o.Ay.getVocalChannelIds(e)].filter((e) => !n.includes(e));
        return i.length > 0 && C(e, i, []), !1;
    });
}

function C(e, t, n) {
    let r = new Set(f.Ay.getOptedInChannels(e));
    t.forEach((e) => r.add(e)),
        n.forEach((e) => r.delete(e)),
        v(e, {
            type: h._.NEW_MEMBER,
            optInChannels: r,
        });
}

function N(e, t) {
    T(e, t);
    let n = {};
    for (let r of c.A.getManyRoles(e, t)) n[r.id] = r;
    v(e, {
        type: h._.NEW_MEMBER,
        roles: n,
    });
}

function R(e, t) {
    v(
        e,
        b(
            {
                type: h._.NEW_MEMBER,
            },
            t,
        ),
    );
}
