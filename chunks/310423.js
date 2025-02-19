n.d(t, { Z: () => S }), n(977457), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(911969),
    d = n(906732),
    u = n(778087),
    p = n(603721),
    m = n(124072),
    f = n(171368),
    h = n(592125),
    g = n(430824),
    _ = n(594174),
    b = n(739566),
    v = n(981631),
    y = n(665692),
    x = n(388032),
    O = n(46944);
function E(e) {
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
function j(e, t) {
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
let N = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    C = { className: o()('mention', O.mention) };
function I(e) {
    return (0, r.jsx)(r.Fragment, {
        children: (0, r.jsx)(
            s.Text,
            j(E({}, N), {
                color: 'header-primary',
                children: e
            })
        )
    });
}
let S = i.memo(function (e) {
    var t, n, a, o, S, P;
    let T,
        { channel: A, messageId: w, interactionData: Z } = e,
        { analyticsLocations: k } = (0, d.ZP)(),
        { onCopy: R, copyRef: L } = (0, u.Z)(A, null == Z ? void 0 : null === (t = Z.application_command) || void 0 === t ? void 0 : t.id),
        D = (0, l.e7)([g.Z], () => g.Z.getGuild(A.guild_id), [A.guild_id]);
    if (
        (i.useEffect(() => {
            (null == Z || (Z.type === c.yU.CHAT && void 0 === Z.application_command)) && p.OG(A.id, w);
        }, [A.id, w, Z]),
        null == Z)
    )
        T = (0, r.jsx)(s.$jN, {
            type: s.$jN.Type.SPINNING_CIRCLE,
            className: O.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (o = null === (n = Z.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== o ? o : []).map((e) => [e.name, e]));
        for (let n of null !== (S = Z.options) && void 0 !== S ? S : [])
            e = e.concat(
                (function e(t) {
                    var n, a, o, l, d, u, p;
                    let O,
                        { option: S, channel: P, guild: T, messageId: A, parentOptionKey: w, commandOptionSpec: Z, sourceAnalyticsLocations: k } = t,
                        R = null != w ? w + ' ' + S.name : S.name;
                    if (S.type === c.jw.SUB_COMMAND || S.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, r.jsxs)(
                                    i.Fragment,
                                    {
                                        children: [' ', (0, r.jsx)(s.Text, j(E({}, N), { children: null !== (a = null == Z ? void 0 : Z.name_localized) && void 0 !== a ? a : S.name }))]
                                    },
                                    R
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (o = null == Z ? void 0 : Z.options) && void 0 !== o ? o : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (l = S.options) && void 0 !== l ? l : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: P,
                                    guild: T,
                                    messageId: A,
                                    parentOptionKey: R,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: k
                                })
                            );
                        return t;
                    }
                    let L = S.value;
                    if (null != S.value)
                        switch (S.type) {
                            case c.jw.USER: {
                                let e = S.value.toString(),
                                    t = _.default.getUser(e);
                                if (null != t) {
                                    let e = (0, b.ij)(t, P);
                                    O = (0, r.jsxs)(
                                        m.Z,
                                        j(E({}, C), {
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: P.guild_id,
                                                    channelId: P.id,
                                                    messageId: A,
                                                    sourceAnalyticsLocations: k,
                                                    analyticsLocation: { section: v.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [y.ME, e.nick]
                                        })
                                    );
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = S.value.toString(),
                                    t = h.Z.getChannel(e);
                                null != t &&
                                    (O = (0, r.jsxs)(
                                        m.Z,
                                        j(E({}, C), {
                                            children: [y.zy, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = S.value.toString(),
                                    t = null != T ? g.Z.getRole(T.id, e) : void 0;
                                null != t &&
                                    (O = (0, r.jsxs)(
                                        m.Z,
                                        j(E({}, C), {
                                            children: [y.ME, t.name]
                                        })
                                    ));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = S.value.toString(),
                                    t = null != T ? g.Z.getRole(T.id, e) : void 0;
                                if (null != t)
                                    O = (0, r.jsxs)(m.Z, {
                                        children: [y.ME, t.name]
                                    });
                                else {
                                    let t = _.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, b.ij)(t, P);
                                        O = (0, r.jsxs)(
                                            m.Z,
                                            j(E({}, C), {
                                                onClick: () =>
                                                    (0, f.openUserProfileModal)({
                                                        userId: t.id,
                                                        guildId: P.guild_id,
                                                        analyticsLocation: { section: v.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                    }),
                                                children: [y.ME, e.nick]
                                            })
                                        );
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                O = I(x.NW.string(x.t.nONJVV));
                                break;
                            default: {
                                let e = null == Z ? void 0 : null === (d = Z.choices) || void 0 === d ? void 0 : d.find((e) => e.value === S.value);
                                null != e && (L = null !== (u = e.name_localized) && void 0 !== u ? u : e.name);
                            }
                        }
                    return (
                        null == O && (O = I(null == L ? void 0 : L.toString())),
                        [
                            (0, r.jsxs)(
                                i.Fragment,
                                {
                                    children: [
                                        (0, r.jsxs)(
                                            s.Text,
                                            j(E({}, N), {
                                                children: [' ', null !== (p = null == Z ? void 0 : Z.name_localized) && void 0 !== p ? p : S.name, ': ']
                                            })
                                        ),
                                        O
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
                    sourceAnalyticsLocations: k
                })
            );
        T = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    s.Text,
                    j(E({}, N), {
                        children: ['/', null !== (P = null === (a = Z.application_command) || void 0 === a ? void 0 : a.name_localized) && void 0 !== P ? P : Z.name]
                    })
                ),
                e
            ]
        });
    }
    return (0, r.jsxs)('div', {
        className: O.container,
        onCopy: (e) => {
            var t, n, r;
            let i = null !== (r = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== r ? r : '';
            i.startsWith('/') && i.endsWith('\n') && R(e, Z);
        },
        children: [
            (0, r.jsx)('div', {
                className: O.tooltip,
                ref: L,
                children: T
            }),
            (0, r.jsx)('div', { className: O.tooltipPointer })
        ]
    });
});
