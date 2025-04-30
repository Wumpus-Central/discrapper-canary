n.d(t, { Z: () => I }), n(467055), n(388685);
var r = n(200651),
    i = n(192379),
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
    h = n(592125),
    g = n(430824),
    _ = n(594174),
    b = n(739566),
    x = n(761652),
    y = n(388032),
    E = n(912861);
function v(e) {
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
    C = { className: a()('mention', E.mention) };
function S(e) {
    return (0, r.jsx)(
        s.Text,
        O(v({}, j), {
            color: 'header-primary',
            children: e
        })
    );
}
let I = i.memo(function (e) {
    var t, n, l, a, I, N;
    let T,
        { channel: P, messageId: A, interactionData: w } = e,
        { analyticsLocations: Z } = (0, u.ZP)(),
        { onCopy: R, copyRef: k } = (0, d.Z)(P, null == w || null == (t = w.application_command) ? void 0 : t.id),
        D = (0, o.e7)([g.Z], () => g.Z.getGuild(P.guild_id), [P.guild_id]);
    if (
        (i.useEffect(() => {
            (null == w || (w.type === c.yU.CHAT && void 0 === w.application_command)) && p.OG(P.id, A);
        }, [P.id, A, w]),
        null == w)
    )
        T = (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: E.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null != (a = null == (n = w.application_command) ? void 0 : n.options) ? a : []).map((e) => [e.name, e]));
        for (let n of null != (I = w.options) ? I : [])
            e = e.concat(
                (function e(t) {
                    var n, l, a, o, u, d, p;
                    let E,
                        { option: I, channel: N, guild: T, messageId: P, parentOptionKey: A, commandOptionSpec: w, sourceAnalyticsLocations: Z } = t,
                        R = null != A ? A + ' ' + I.name : I.name;
                    if (I.type === c.jw.SUB_COMMAND || I.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [' ', (0, r.jsx)(s.Text, O(v({}, j), { children: null != (l = null == w ? void 0 : w.name_localized) ? l : I.name }))]
                                    },
                                    R
                                )
                            ],
                            c = Object.fromEntries(null == (n = null != (a = null == w ? void 0 : w.options) ? a : []) ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null != (o = I.options) ? o : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: N,
                                    guild: T,
                                    messageId: P,
                                    parentOptionKey: R,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: Z
                                })
                            );
                        return t;
                    }
                    let k = I.value;
                    if (null != I.value)
                        switch (I.type) {
                            case c.jw.USER: {
                                let e = I.value.toString(),
                                    t = _.default.getUser(e);
                                if (null != t) {
                                    let e = (0, b.ij)(t, N);
                                    E = (0, r.jsxs)(
                                        m.Z,
                                        O(v({}, C), {
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: N.guild_id,
                                                    channelId: N.id,
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
                                let e = I.value.toString(),
                                    t = h.Z.getChannel(e);
                                null != t &&
                                    (E = (0, r.jsxs)(
                                        m.Z,
                                        O(v({}, C), {
                                            children: [x.zy, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = I.value.toString(),
                                    t = null != T ? g.Z.getRole(T.id, e) : void 0;
                                null != t &&
                                    (E = (0, r.jsxs)(
                                        m.Z,
                                        O(v({}, C), {
                                            children: [x.ME, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = I.value.toString(),
                                    t = null != T ? g.Z.getRole(T.id, e) : void 0;
                                if (null != t)
                                    E = (0, r.jsxs)(m.Z, {
                                        children: [x.ME, t.name]
                                    });
                                else {
                                    let t = _.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, b.ij)(t, N);
                                        E = (0, r.jsxs)(
                                            m.Z,
                                            O(v({}, C), {
                                                onClick: () =>
                                                    (0, f.openUserProfileModal)({
                                                        userId: t.id,
                                                        guildId: N.guild_id,
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
                                E = S(y.intl.string(y.t.nONJVV));
                                break;
                            default: {
                                let e = null == w || null == (u = w.choices) ? void 0 : u.find((e) => e.value === I.value);
                                null != e && (k = null != (d = e.name_localized) ? d : e.name);
                            }
                        }
                    return (
                        null == E && (E = S(null == k ? void 0 : k.toString())),
                        [
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            s.Text,
                                            O(v({}, j), {
                                                children: [' ', null != (p = null == w ? void 0 : w.name_localized) ? p : I.name, ': ']
                                            })
                                        ),
                                        E
                                    ]
                                },
                                R
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: P,
                    guild: D,
                    messageId: A,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: Z
                })
            );
        T = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    s.Text,
                    O(v({}, j), {
                        children: ['/', null != (N = null == (l = w.application_command) ? void 0 : l.name_localized) ? N : w.name]
                    })
                ),
                e
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: E.container,
        onCopy: (e) => {
            var t, n, r;
            let i = null != (r = null == (n = window) || null == (t = n.getSelection()) ? void 0 : t.toString()) ? r : '';
            i.startsWith('/') && i.endsWith('\n') && R(e, w);
        },
        children: [
            (0, r.jsx)('div', {
                className: E.tooltip,
                ref: k,
                children: T
            }),
            (0, r.jsx)('div', { className: E.tooltipPointer })
        ]
    });
});
