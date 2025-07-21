(n.d(t, { Z: () => T }), n(467055), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    p = n(603721),
    m = n(124072),
    f = n(892001),
    g = n(592125),
    h = n(485386),
    _ = n(430824),
    b = n(594174),
    E = n(739566),
    x = n(761652),
    v = n(388032),
    y = n(912861);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function O(e, t) {
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
let j = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    I = { className: a()('mention', y.mention) };
function S(e) {
    return (0, r.jsx)(
        s.Text,
        O(C({}, j), {
            color: 'header-primary',
            children: e
        })
    );
}
let T = i.memo(function (e) {
    var t, n, l, a, T, N;
    let P,
        { channel: A, messageId: w, interactionData: Z } = e,
        { analyticsLocations: R } = (0, u.ZP)(),
        { onCopy: k, copyRef: L } = (0, d.Z)(A, null == Z || null == (t = Z.application_command) ? void 0 : t.id),
        D = (0, o.e7)([_.Z], () => _.Z.getGuild(A.guild_id), [A.guild_id]);
    if (
        (i.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && p.OG(A.id, w);
        }, [A.id, w, Z]),
        null == Z)
    )
        P = (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: y.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null != (a = null == (n = Z.application_command) ? void 0 : n.options) ? a : []).map((e) => [e.name, e]));
        for (let n of null != (T = Z.options) ? T : [])
            e = e.concat(
                (function e(t) {
                    var n, l, a, o, u, d, p;
                    let _,
                        { option: y, channel: T, guild: N, messageId: P, parentOptionKey: A, commandOptionSpec: w, sourceAnalyticsLocations: Z } = t,
                        R = null != A ? A + ' ' + y.name : y.name;
                    if (y.type === c.jw.SUB_COMMAND || y.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [' ', (0, r.jsx)(s.Text, O(C({}, j), { children: null != (l = null == w ? void 0 : w.name_localized) ? l : y.name }))]
                                    },
                                    R
                                )
                            ],
                            c = Object.fromEntries(null == (n = null != (a = null == w ? void 0 : w.options) ? a : []) ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null != (o = y.options) ? o : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: T,
                                    guild: N,
                                    messageId: P,
                                    parentOptionKey: R,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: Z
                                })
                            );
                        return t;
                    }
                    let k = y.value;
                    if (null != y.value)
                        switch (y.type) {
                            case c.jw.USER: {
                                let e = y.value.toString(),
                                    t = b.default.getUser(e);
                                if (null != t) {
                                    let e = (0, E.ij)(t, T);
                                    _ = (0, r.jsxs)(
                                        m.Z,
                                        O(C({}, I), {
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: T.guild_id,
                                                    channelId: T.id,
                                                    messageId: P,
                                                    sourceAnalyticsLocations: Z
                                                }),
                                            children: [x.ME, e.nick]
                                        })
                                    );
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = y.value.toString(),
                                    t = g.Z.getChannel(e);
                                null != t &&
                                    (_ = (0, r.jsxs)(
                                        m.Z,
                                        O(C({}, I), {
                                            children: [x.zy, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = y.value.toString(),
                                    t = null != N ? h.Z.getRole(N.id, e) : void 0;
                                null != t &&
                                    (_ = (0, r.jsxs)(
                                        m.Z,
                                        O(C({}, I), {
                                            children: [x.ME, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = y.value.toString(),
                                    t = null != N ? h.Z.getRole(N.id, e) : void 0;
                                if (null != t)
                                    _ = (0, r.jsxs)(m.Z, {
                                        children: [x.ME, t.name]
                                    });
                                else {
                                    let t = b.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, E.ij)(t, T);
                                        _ = (0, r.jsxs)(
                                            m.Z,
                                            O(C({}, I), {
                                                onClick: () =>
                                                    (0, f.openUserProfileModal)({
                                                        userId: t.id,
                                                        guildId: T.guild_id,
                                                        sourceAnalyticsLocations: Z
                                                    }),
                                                children: [x.ME, e.nick]
                                            })
                                        );
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                _ = S(v.intl.string(v.t.nONJVV));
                                break;
                            default: {
                                let e = null == w || null == (u = w.choices) ? void 0 : u.find((e) => e.value === y.value);
                                null != e && (k = null != (d = e.name_localized) ? d : e.name);
                            }
                        }
                    return (
                        null == _ && (_ = S(null == k ? void 0 : k.toString())),
                        [
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            s.Text,
                                            O(C({}, j), {
                                                children: [' ', null != (p = null == w ? void 0 : w.name_localized) ? p : y.name, ': ']
                                            })
                                        ),
                                        _
                                    ]
                                },
                                R
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: A,
                    guild: D,
                    messageId: w,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: R
                })
            );
        P = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    s.Text,
                    O(C({}, j), {
                        children: ['/', null != (N = null == (l = Z.application_command) ? void 0 : l.name_localized) ? N : Z.name]
                    })
                ),
                e
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: y.container,
        onCopy: (e) => {
            var t, n, r;
            let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? void 0 : t.toString()) ? r : '';
            i.startsWith('/') && i.endsWith('\n') && k(e, Z);
        },
        children: [
            (0, r.jsx)('div', {
                className: y.tooltip,
                ref: L,
                children: P
            }),
            (0, r.jsx)('div', { className: y.tooltipPointer })
        ]
    });
});
