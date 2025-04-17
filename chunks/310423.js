n.d(t, { Z: () => I }), n(467055), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(911969),
    u = n(906732),
    d = n(778087),
    p = n(603721),
    m = n(124072),
    f = n(171368),
    h = n(592125),
    g = n(430824),
    _ = n(594174),
    b = n(739566),
    x = n(981631),
    y = n(761652),
    v = n(388032),
    E = n(912861);
function O(e) {
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
function N(e, t) {
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
    C = { className: l()('mention', E.mention) };
function S(e) {
    return (0, r.jsx)(
        s.Text,
        N(O({}, j), {
            color: 'header-primary',
            children: e
        })
    );
}
let I = i.memo(function (e) {
    var t, n, a, l, I, T;
    let P,
        { channel: A, messageId: w, interactionData: Z } = e,
        { analyticsLocations: R } = (0, u.ZP)(),
        { onCopy: k, copyRef: D } = (0, d.Z)(A, null == Z || null == (t = Z.application_command) ? void 0 : t.id),
        L = (0, o.e7)([g.Z], () => g.Z.getGuild(A.guild_id), [A.guild_id]);
    if (
        (i.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && p.OG(A.id, w);
        }, [A.id, w, Z]),
        null == Z)
    )
        P = (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: E.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null != (l = null == (n = Z.application_command) ? void 0 : n.options) ? l : []).map((e) => [e.name, e]));
        for (let n of null != (I = Z.options) ? I : [])
            e = e.concat(
                (function e(t) {
                    var n, a, l, o, u, d, p;
                    let E,
                        { option: I, channel: T, guild: P, messageId: A, parentOptionKey: w, commandOptionSpec: Z, sourceAnalyticsLocations: R } = t,
                        k = null != w ? w + ' ' + I.name : I.name;
                    if (I.type === c.jw.SUB_COMMAND || I.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [' ', (0, r.jsx)(s.Text, N(O({}, j), { children: null != (a = null == Z ? void 0 : Z.name_localized) ? a : I.name }))]
                                    },
                                    k
                                )
                            ],
                            c = Object.fromEntries(null == (n = null != (l = null == Z ? void 0 : Z.options) ? l : []) ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null != (o = I.options) ? o : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: T,
                                    guild: P,
                                    messageId: A,
                                    parentOptionKey: k,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: R
                                })
                            );
                        return t;
                    }
                    let D = I.value;
                    if (null != I.value)
                        switch (I.type) {
                            case c.jw.USER: {
                                let e = I.value.toString(),
                                    t = _.default.getUser(e);
                                if (null != t) {
                                    let e = (0, b.ij)(t, T);
                                    E = (0, r.jsxs)(
                                        m.Z,
                                        N(O({}, C), {
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: T.guild_id,
                                                    channelId: T.id,
                                                    messageId: A,
                                                    sourceAnalyticsLocations: R,
                                                    analyticsLocation: { section: x.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [y.ME, e.nick]
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
                                        N(O({}, C), {
                                            children: [y.zy, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = I.value.toString(),
                                    t = null != P ? g.Z.getRole(P.id, e) : void 0;
                                null != t &&
                                    (E = (0, r.jsxs)(
                                        m.Z,
                                        N(O({}, C), {
                                            children: [y.ME, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = I.value.toString(),
                                    t = null != P ? g.Z.getRole(P.id, e) : void 0;
                                if (null != t)
                                    E = (0, r.jsxs)(m.Z, {
                                        children: [y.ME, t.name]
                                    });
                                else {
                                    let t = _.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, b.ij)(t, T);
                                        E = (0, r.jsxs)(
                                            m.Z,
                                            N(O({}, C), {
                                                onClick: () =>
                                                    (0, f.openUserProfileModal)({
                                                        userId: t.id,
                                                        guildId: T.guild_id,
                                                        analyticsLocation: { section: x.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                    }),
                                                children: [y.ME, e.nick]
                                            })
                                        );
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                E = S(v.NW.string(v.t.nONJVV));
                                break;
                            default: {
                                let e = null == Z || null == (u = Z.choices) ? void 0 : u.find((e) => e.value === I.value);
                                null != e && (D = null != (d = e.name_localized) ? d : e.name);
                            }
                        }
                    return (
                        null == E && (E = S(null == D ? void 0 : D.toString())),
                        [
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            s.Text,
                                            N(O({}, j), {
                                                children: [' ', null != (p = null == Z ? void 0 : Z.name_localized) ? p : I.name, ': ']
                                            })
                                        ),
                                        E
                                    ]
                                },
                                k
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: A,
                    guild: L,
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
                    N(O({}, j), {
                        children: ['/', null != (T = null == (a = Z.application_command) ? void 0 : a.name_localized) ? T : Z.name]
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
            i.startsWith('/') && i.endsWith('\n') && k(e, Z);
        },
        children: [
            (0, r.jsx)('div', {
                className: E.tooltip,
                ref: D,
                children: P
            }),
            (0, r.jsx)('div', { className: E.tooltipPointer })
        ]
    });
});
