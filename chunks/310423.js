n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(911969),
    d = n(906732),
    u = n(778087),
    m = n(603721),
    h = n(124072),
    f = n(171368),
    p = n(592125),
    _ = n(430824),
    g = n(594174),
    E = n(739566),
    C = n(981631),
    I = n(665692),
    x = n(388032),
    N = n(476521);
let v = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    T = { className: a()('mention', N.mention) };
function S(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(s.Text, {
            ...v,
            color: 'header-primary',
            children: e
        })
    });
}
t.Z = r.memo(function (e) {
    var t, n, l, a, A, b;
    let j,
        { channel: R, messageId: Z, interactionData: P } = e,
        { analyticsLocations: L } = (0, d.ZP)(),
        { onCopy: y, copyRef: O } = (0, u.Z)(R, null == P ? void 0 : null === (t = P.application_command) || void 0 === t ? void 0 : t.id),
        M = (0, o.e7)([_.Z], () => _.Z.getGuild(R.guild_id), [R.guild_id]);
    if (
        (r.useEffect(() => {
            (null == P || (P.type === c.yU.CHAT && void 0 === P.application_command)) && m.OG(R.id, Z);
        }, [R.id, Z, P]),
        null == P)
    )
        j = (0, i.jsx)(s.Spinner, {
            type: s.Spinner.Type.SPINNING_CIRCLE,
            className: N.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (a = null === (n = P.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== a ? a : []).map((e) => [e.name, e]));
        for (let n of null !== (A = P.options) && void 0 !== A ? A : [])
            e = e.concat(
                (function e(t) {
                    var n, l, a, o, d, u, m;
                    let N,
                        { option: A, channel: b, guild: j, messageId: R, parentOptionKey: Z, commandOptionSpec: P, sourceAnalyticsLocations: L } = t,
                        y = null != Z ? Z + ' ' + A.name : A.name;
                    if (A.type === c.jw.SUB_COMMAND || A.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    r.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(s.Text, {
                                                ...v,
                                                children: null !== (l = null == P ? void 0 : P.name_localized) && void 0 !== l ? l : A.name
                                            })
                                        ]
                                    },
                                    y
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (a = null == P ? void 0 : P.options) && void 0 !== a ? a : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (o = A.options) && void 0 !== o ? o : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: b,
                                    guild: j,
                                    messageId: R,
                                    parentOptionKey: y,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: L
                                })
                            );
                        return t;
                    }
                    let O = A.value;
                    if (null != A.value)
                        switch (A.type) {
                            case c.jw.USER: {
                                let e = A.value.toString(),
                                    t = g.default.getUser(e);
                                if (null != t) {
                                    let e = (0, E.ij)(t, b);
                                    N = (0, i.jsxs)(h.Z, {
                                        ...T,
                                        onClick: () =>
                                            (0, f.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: b.guild_id,
                                                channelId: b.id,
                                                messageId: R,
                                                sourceAnalyticsLocations: L,
                                                analyticsLocation: { section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                            }),
                                        children: [I.ME, e.nick]
                                    });
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = A.value.toString(),
                                    t = p.Z.getChannel(e);
                                null != t &&
                                    (N = (0, i.jsxs)(h.Z, {
                                        ...T,
                                        children: [I.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = A.value.toString(),
                                    t = null != j ? _.Z.getRole(j.id, e) : void 0;
                                null != t &&
                                    (N = (0, i.jsxs)(h.Z, {
                                        ...T,
                                        children: [I.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = A.value.toString(),
                                    t = null != j ? _.Z.getRole(j.id, e) : void 0;
                                if (null != t)
                                    N = (0, i.jsxs)(h.Z, {
                                        children: [I.ME, t.name]
                                    });
                                else {
                                    let t = g.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, E.ij)(t, b);
                                        N = (0, i.jsxs)(h.Z, {
                                            ...T,
                                            onClick: () =>
                                                (0, f.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: b.guild_id,
                                                    analyticsLocation: { section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [I.ME, e.nick]
                                        });
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                N = S(x.intl.string(x.t.nONJVV));
                                break;
                            default: {
                                let e = null == P ? void 0 : null === (d = P.choices) || void 0 === d ? void 0 : d.find((e) => e.value === A.value);
                                null != e && (O = null !== (u = e.name_localized) && void 0 !== u ? u : e.name);
                            }
                        }
                    return (
                        null == N && (N = S(null == O ? void 0 : O.toString())),
                        [
                            (0, i.jsxs)(
                                r.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(s.Text, {
                                            ...v,
                                            children: [' ', null !== (m = null == P ? void 0 : P.name_localized) && void 0 !== m ? m : A.name, ': ']
                                        }),
                                        N
                                    ]
                                },
                                y
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: R,
                    guild: M,
                    messageId: Z,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: L
                })
            );
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.Text, {
                    ...v,
                    children: ['/', null !== (b = null === (l = P.application_command) || void 0 === l ? void 0 : l.name_localized) && void 0 !== b ? b : P.name]
                }),
                e
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: N.container,
        onCopy: (e) => {
            var t, n, i;
            let r = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
            r.startsWith('/') && r.endsWith('\n') && y(e, P);
        },
        children: [
            (0, i.jsx)('div', {
                className: N.tooltip,
                ref: O,
                children: j
            }),
            (0, i.jsx)('div', { className: N.tooltipPointer })
        ]
    });
});
