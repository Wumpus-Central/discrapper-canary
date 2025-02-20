n.d(t, {
    FW: () => u,
    fZ: () => f,
    py: () => p
}),
    n(47120),
    n(411104);
var r = n(911969),
    i = n(581364),
    o = n(752305),
    a = n(255963),
    s = n(365704),
    l = n(590921),
    c = n(185923);
function u(e) {
    var t;
    let { activeCommandOption: n, canMentionUsers: a = !0, canMentionRoles: s = !0, canMentionChannels: c = !0, canMentionEveryone: u, canMentionClyde: d = !1, useNewSlashCommands: f, canOnlyUseTextCommands: p, canSendStickers: _, canSendSoundmoji: h, hideMentionDescription: m, hidePersonalInformation: g, type: E, emojiIntention: v, editorRef: b, onSendMessage: y, onSendSticker: O, setValue: S } = e,
        I = {
            mentions: {
                channel: l.nS.DENY,
                global: l.VV.DENY,
                role: l.Fw.DENY,
                user: l.h3.DENY,
                clyde: l.cz.DENY
            },
            commands: l.L8.DISABLED,
            allowStickers: !0 === _,
            allowSoundmoji: !0 === h,
            forNonStringCommandOption: null != n && n.type !== r.jw.STRING,
            hideMentionDescription: !0 === m,
            hidePersonalInformation: !0 === g,
            chatInputType: E,
            emojiIntention: v,
            sendMessage: y,
            sendSticker: O,
            insertText: (e, t) => {
                var n;
                null === (n = b.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e);
            },
            replaceText: (e, t) => {
                S(e, null != t ? t : (0, o.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = b.current) || void 0 === e ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != n) {
        let e = (0, i.$z)(n);
        e.canMentionChannels && (I.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (I.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (I.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (I.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), (I.hideMentionDescription = !0);
    } else c && (I.mentions.channel = l.nS.ALLOW_SELECTABLE), s && (I.mentions.role = l.Fw.ALLOW_MENTIONABLE), a && (I.mentions.user = l.h3.ALLOW_CHANNEL), u && (I.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE), d && (I.mentions.clyde = l.cz.ALLOW);
    return (null === (t = E.commands) || void 0 === t ? void 0 : t.enabled) && (f ? (I.commands = p ? l.L8.NEW_TEXT_ONLY : l.L8.NEW) : (I.commands = l.L8.OLD_BUILT_INS)), null != n && null != n.channelTypes && (I.allowedChannelTypes = n.channelTypes), I;
}
function d(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: o, options: a } = e,
        l = s.W[t];
    if (null != l.sentinel) {
        if (!i.startsWith(l.sentinel)) return !1;
        i = i.substring(l.sentinel.length);
    }
    return !!(null == l.matches || l.matches(n, r, i, o, a));
}
function f(e) {
    let { channel: t, guild: n, options: r, currentWord: i, currentWordIsAtStart: o, textValue: u, optionText: f } = e,
        p = null;
    for (let e of s.R) {
        var _, h, m, g, E, v;
        let b = s.W[e];
        if (e === l.eq.GIFS || e === l.eq.CHOICES) {
            if (r.commands === l.L8.OLD_BUILT_INS) {
                if (
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: u,
                        isAtStart: !1,
                        options: r
                    })
                ) {
                    p = {
                        type: e,
                        typeInfo: b,
                        query: u
                    };
                    break;
                }
            } else if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: f,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: b,
                    query: f
                };
        } else if (e === l.eq.STICKERS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: f,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: b,
                    query: f
                };
        } else if (e === l.eq.COMMANDS && r.commands !== l.L8.OLD_BUILT_INS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: u,
                    isAtStart: !0,
                    options: r
                })
            ) {
                p = {
                    type: e,
                    typeInfo: b,
                    query: u.substring(null !== (h = null === (_ = b.sentinel) || void 0 === _ ? void 0 : _.length) && void 0 !== h ? h : 0)
                };
                break;
            }
        } else if (e === l.eq.LEGACY_COMMANDS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: u,
                    isAtStart: o,
                    options: r
                })
            ) {
                p = {
                    type: e,
                    typeInfo: b,
                    query: u
                };
                break;
            }
        } else if (e === l.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != i && i.length > 0 && (0, a.x)(c.qR.AutocompleteTyped),
                null != i &&
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: i,
                        isAtStart: o,
                        options: r
                    }))
            ) {
                p = {
                    type: e,
                    typeInfo: b,
                    query: i.substring(null !== (g = null === (m = b.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== g ? g : 0)
                };
                break;
            }
        } else if (
            null != i &&
            d({
                type: e,
                channel: t,
                guild: n,
                query: i,
                isAtStart: o,
                options: r
            })
        ) {
            p = {
                type: e,
                typeInfo: b,
                query: i.substring(null !== (v = null === (E = b.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== v ? v : 0)
            };
            break;
        }
    }
    return null == p ? null : ((p.query = p.query.toLocaleLowerCase()), p);
}
function p(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = l.eq.CHOICES;
    else
        switch (e.type) {
            case r.jw.BOOLEAN:
                n = l.eq.CHOICES;
                break;
            case r.jw.CHANNEL:
                n = l.eq.CHANNELS;
                break;
            case r.jw.ROLE:
            case r.jw.USER:
            case r.jw.MENTIONABLE:
                n = l.eq.MENTIONS;
                break;
            default:
                return null;
        }
    let i = s.W[n];
    return {
        type: n,
        typeInfo: i,
        query: t
    };
}
