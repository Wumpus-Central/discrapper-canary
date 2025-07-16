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
    _ = n(592125),
    h = n(485386),
    g = n(430824),
    b = n(594174),
    E = n(739566),
    y = n(761652),
    x = n(388032),
    C = n(912861);
function v(e) {
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
    I = { className: a()('mention', C.mention) };
function S(e) {
    return (0, r.jsx)(
        s.Text,
        O(v({}, j), {
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
        { onCopy: L, copyRef: k } = (0, d.Z)(A, null == Z || null == (t = Z.application_command) ? void 0 : t.id),
        D = (0, o.e7)([g.Z], () => g.Z.getGuild(A.guild_id), [A.guild_id]);
    if (
        (i.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && p.OG(A.id, w);
        }, [A.id, w, Z]),
        null == Z)
    )
        P = (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: C.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null != (a = null == (n = Z.application_command) ? void 0 : n.options) ? a : []).map((e) => [e.name, e]));
        for (let n of null != (T = Z.options) ? T : [])
            e = e.concat(
                (function e(t) {
                    var n, l, a, o, u, d, p;
                    let g,
                        { option: C, channel: T, guild: N, messageId: P, parentOptionKey: A, commandOptionSpec: w, sourceAnalyticsLocations: Z } = t,
                        R = null != A ? A + ' ' + C.name : C.name;
                    if (C.type === c.jw.SUB_COMMAND || C.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [' ', (0, r.jsx)(s.Text, O(v({}, j), { children: null != (l = null == w ? void 0 : w.name_localized) ? l : C.name }))]
                                    },
                                    R
                                )
                            ],
                            c = Object.fromEntries(null == (n = null != (a = null == w ? void 0 : w.options) ? a : []) ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null != (o = C.options) ? o : [])
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
                    let L = C.value;
                    if (null != C.value)
                        switch (C.type) {
                            case c.jw.USER: {
                                let e = C.value.toString(),
                                    t = b.default.getUser(e);
                                if (null != t) {
                                    let e = (0, E.ij)(t, T);
                                    g = (0, r.jsxs)(
                                        m.Z,
                                        O(v({}, I), {
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: T.guild_id,
                                                    channelId: T.id,
                                                    messageId: P,
                                                    sourceAnalyticsLocations: Z
                                                }),
                                            children: [y.ME, e.nick]
                                        })
                                    );
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = C.value.toString(),
                                    t = _.Z.getChannel(e);
                                null != t &&
                                    (g = (0, r.jsxs)(
                                        m.Z,
                                        O(v({}, I), {
                                            children: [y.zy, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = C.value.toString(),
                                    t = null != N ? h.Z.getRole(N.id, e) : void 0;
                                null != t &&
                                    (g = (0, r.jsxs)(
                                        m.Z,
                                        O(v({}, I), {
                                            children: [y.ME, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = C.value.toString(),
                                    t = null != N ? h.Z.getRole(N.id, e) : void 0;
                                if (null != t)
                                    g = (0, r.jsxs)(m.Z, {
                                        children: [y.ME, t.name]
                                    });
                                else {
                                    let t = b.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, E.ij)(t, T);
                                        g = (0, r.jsxs)(
                                            m.Z,
                                            O(v({}, I), {
                                                onClick: () =>
                                                    (0, f.openUserProfileModal)({
                                                        userId: t.id,
                                                        guildId: T.guild_id,
                                                        sourceAnalyticsLocations: Z
                                                    }),
                                                children: [y.ME, e.nick]
                                            })
                                        );
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                g = S(x.intl.string(x.t.nONJVV));
                                break;
                            default: {
                                let e = null == w || null == (u = w.choices) ? void 0 : u.find((e) => e.value === C.value);
                                null != e && (L = null != (d = e.name_localized) ? d : e.name);
                            }
                        }
                    return (
                        null == g && (g = S(null == L ? void 0 : L.toString())),
                        [
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            s.Text,
                                            O(v({}, j), {
                                                children: [' ', null != (p = null == w ? void 0 : w.name_localized) ? p : C.name, ': ']
                                            })
                                        ),
                                        g
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
                    O(v({}, j), {
                        children: ['/', null != (N = null == (l = Z.application_command) ? void 0 : l.name_localized) ? N : Z.name]
                    })
                ),
                e
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: C.container,
        onCopy: (e) => {
            var t, n, r;
            let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? void 0 : t.toString()) ? r : '';
            i.startsWith('/') && i.endsWith('\n') && L(e, Z);
        },
        children: [
            (0, r.jsx)('div', {
                className: C.tooltip,
                ref: k,
                children: P
            }),
            (0, r.jsx)('div', { className: C.tooltipPointer })
        ]
    });
});
