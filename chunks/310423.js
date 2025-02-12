n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(911969),
    d = n(906732),
    u = n(778087),
    m = n(603721),
    _ = n(124072),
    h = n(171368),
    p = n(592125),
    g = n(430824),
    f = n(594174),
    x = n(739566),
    C = n(981631),
    v = n(665692),
    E = n(388032),
    I = n(787694);
let N = {
        tag: 'span',
        variant: 'text-md/normal',
        color: 'header-secondary'
    },
    S = { className: r()('mention', I.mention) };
function T(e) {
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(o.Text, {
            ...N,
            color: 'header-primary',
            children: e
        })
    });
}
let b = l.memo(function (e) {
    var t, n, a, r, b, A;
    let j,
        { channel: y, messageId: Z, interactionData: R } = e,
        { analyticsLocations: L } = (0, d.ZP)(),
        { onCopy: P, copyRef: k } = (0, u.Z)(y, null == R ? void 0 : null === (t = R.application_command) || void 0 === t ? void 0 : t.id),
        M = (0, s.e7)([g.Z], () => g.Z.getGuild(y.guild_id), [y.guild_id]);
    if (
        (l.useEffect(() => {
            (null == R || (R.type === c.yU.CHAT && void 0 === R.application_command)) && m.OG(y.id, Z);
        }, [y.id, Z, R]),
        null == R)
    )
        j = (0, i.jsx)(o.$jN, {
            type: o.$jN.Type.SPINNING_CIRCLE,
            className: I.spinner
        });
    else {
        let e = [],
            t = Object.fromEntries((null !== (r = null === (n = R.application_command) || void 0 === n ? void 0 : n.options) && void 0 !== r ? r : []).map((e) => [e.name, e]));
        for (let n of null !== (b = R.options) && void 0 !== b ? b : [])
            e = e.concat(
                (function e(t) {
                    var n, a, r, s, d, u, m;
                    let I,
                        { option: b, channel: A, guild: j, messageId: y, parentOptionKey: Z, commandOptionSpec: R, sourceAnalyticsLocations: L } = t,
                        P = null != Z ? Z + ' ' + b.name : b.name;
                    if (b.type === c.jw.SUB_COMMAND || b.type === c.jw.SUB_COMMAND_GROUP) {
                        let t = [
                                (0, i.jsxs)(
                                    l.Fragment,
                                    {
                                        children: [
                                            ' ',
                                            (0, i.jsx)(o.Text, {
                                                ...N,
                                                children: null !== (a = null == R ? void 0 : R.name_localized) && void 0 !== a ? a : b.name
                                            })
                                        ]
                                    },
                                    P
                                )
                            ],
                            c = Object.fromEntries(null === (n = null !== (r = null == R ? void 0 : R.options) && void 0 !== r ? r : []) || void 0 === n ? void 0 : n.map((e) => [e.name, e]));
                        for (let n of null !== (s = b.options) && void 0 !== s ? s : [])
                            t = t.concat(
                                e({
                                    option: n,
                                    channel: A,
                                    guild: j,
                                    messageId: y,
                                    parentOptionKey: P,
                                    commandOptionSpec: c[n.name],
                                    sourceAnalyticsLocations: L
                                })
                            );
                        return t;
                    }
                    let k = b.value;
                    if (null != b.value)
                        switch (b.type) {
                            case c.jw.USER: {
                                let e = b.value.toString(),
                                    t = f.default.getUser(e);
                                if (null != t) {
                                    let e = (0, x.ij)(t, A);
                                    I = (0, i.jsxs)(_.Z, {
                                        ...S,
                                        onClick: () =>
                                            (0, h.openUserProfileModal)({
                                                userId: t.id,
                                                guildId: A.guild_id,
                                                channelId: A.id,
                                                messageId: y,
                                                sourceAnalyticsLocations: L,
                                                analyticsLocation: { section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                            }),
                                        children: [v.ME, e.nick]
                                    });
                                }
                                break;
                            }
                            case c.jw.CHANNEL: {
                                let e = b.value.toString(),
                                    t = p.Z.getChannel(e);
                                null != t &&
                                    (I = (0, i.jsxs)(_.Z, {
                                        ...S,
                                        children: [v.zy, t.name]
                                    }));
                                break;
                            }
                            case c.jw.ROLE: {
                                let e = b.value.toString(),
                                    t = null != j ? g.Z.getRole(j.id, e) : void 0;
                                null != t &&
                                    (I = (0, i.jsxs)(_.Z, {
                                        ...S,
                                        children: [v.ME, t.name]
                                    }));
                                break;
                            }
                            case c.jw.MENTIONABLE: {
                                let e = b.value.toString(),
                                    t = null != j ? g.Z.getRole(j.id, e) : void 0;
                                if (null != t)
                                    I = (0, i.jsxs)(_.Z, {
                                        children: [v.ME, t.name]
                                    });
                                else {
                                    let t = f.default.getUser(e);
                                    if (null != t) {
                                        let e = (0, x.ij)(t, A);
                                        I = (0, i.jsxs)(_.Z, {
                                            ...S,
                                            onClick: () =>
                                                (0, h.openUserProfileModal)({
                                                    userId: t.id,
                                                    guildId: A.guild_id,
                                                    analyticsLocation: { section: C.jXE.CHANNEL_TEXT_AREA_AUTOCOMPLETE }
                                                }),
                                            children: [v.ME, e.nick]
                                        });
                                    }
                                }
                                break;
                            }
                            case c.jw.ATTACHMENT:
                                I = T(E.intl.string(E.t.nONJVV));
                                break;
                            default: {
                                let e = null == R ? void 0 : null === (d = R.choices) || void 0 === d ? void 0 : d.find((e) => e.value === b.value);
                                null != e && (k = null !== (u = e.name_localized) && void 0 !== u ? u : e.name);
                            }
                        }
                    return (
                        null == I && (I = T(null == k ? void 0 : k.toString())),
                        [
                            (0, i.jsxs)(
                                l.Fragment,
                                {
                                    children: [
                                        (0, i.jsxs)(o.Text, {
                                            ...N,
                                            children: [' ', null !== (m = null == R ? void 0 : R.name_localized) && void 0 !== m ? m : b.name, ': ']
                                        }),
                                        I
                                    ]
                                },
                                P
                            )
                        ]
                    );
                })({
                    option: n,
                    channel: y,
                    guild: M,
                    messageId: Z,
                    parentOptionKey: null,
                    commandOptionSpec: t[n.name],
                    sourceAnalyticsLocations: L
                })
            );
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(o.Text, {
                    ...N,
                    children: ['/', null !== (A = null === (a = R.application_command) || void 0 === a ? void 0 : a.name_localized) && void 0 !== A ? A : R.name]
                }),
                e
            ]
        });
    }
    return (0, i.jsxs)('div', {
        className: I.container,
        onCopy: (e) => {
            var t, n, i;
            let l = null !== (i = null === (n = window) || void 0 === n ? void 0 : null === (t = n.getSelection()) || void 0 === t ? void 0 : t.toString()) && void 0 !== i ? i : '';
            l.startsWith('/') && l.endsWith('\n') && P(e, R);
        },
        children: [
            (0, i.jsx)('div', {
                className: I.tooltip,
                ref: k,
                children: j
            }),
            (0, i.jsx)('div', { className: I.tooltipPointer })
        ]
    });
});
