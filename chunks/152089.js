n.d(t, {
    FW: () => u,
    fZ: () => f,
    py: () => _
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
    let { activeCommandOption: n, canMentionUsers: a = !0, canMentionRoles: s = !0, canMentionChannels: c = !0, canMentionEveryone: u, canMentionClyde: d = !1, useNewSlashCommands: f, canOnlyUseTextCommands: _, canSendStickers: p, canSendSoundmoji: h, hideMentionDescription: m, hidePersonalInformation: g, type: E, emojiIntention: b, editorRef: y, onSendMessage: v, onSendSticker: O, setValue: I } = e,
        S = {
            mentions: {
                channel: l.nS.DENY,
                global: l.VV.DENY,
                role: l.Fw.DENY,
                user: l.h3.DENY,
                clyde: l.cz.DENY
            },
            commands: l.L8.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === h,
            forNonStringCommandOption: null != n && n.type !== r.jw.STRING,
            hideMentionDescription: !0 === m,
            hidePersonalInformation: !0 === g,
            chatInputType: E,
            emojiIntention: b,
            sendMessage: v,
            sendSticker: O,
            insertText: (e, t) => {
                var n;
                null == (n = y.current) || n.insertAutocomplete(e, null != t ? t : e);
            },
            replaceText: (e, t) => {
                I(e, null != t ? t : (0, o.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null == (e = y.current) ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != n) {
        let e = (0, i.$z)(n);
        e.canMentionChannels && (S.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (S.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (S.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (S.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), (S.hideMentionDescription = !0);
    } else c && (S.mentions.channel = l.nS.ALLOW_SELECTABLE), s && (S.mentions.role = l.Fw.ALLOW_MENTIONABLE), a && (S.mentions.user = l.h3.ALLOW_CHANNEL), u && (S.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE), d && (S.mentions.clyde = l.cz.ALLOW);
    return (null == (t = E.commands) ? void 0 : t.enabled) && (f ? (S.commands = _ ? l.L8.NEW_TEXT_ONLY : l.L8.NEW) : (S.commands = l.L8.OLD_BUILT_INS)), null != n && null != n.channelTypes && (S.allowedChannelTypes = n.channelTypes), S;
}
function d(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: o, options: a } = e,
        l = s.W[t];
    if (null != l.sentinel) {
        if (!i.startsWith(l.sentinel)) return !1;
        i = i.substring(l.sentinel.length);
    }
    return null == l.matches || !!l.matches(n, r, i, o, a);
}
function f(e) {
    let { channel: t, guild: n, options: r, currentWord: i, currentWordIsAtStart: o, textValue: u, optionText: f } = e,
        _ = null;
    for (let e of s.R) {
        var p, h, m, g, E, b;
        let y = s.W[e];
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
                    _ = {
                        type: e,
                        typeInfo: y,
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
                    typeInfo: y,
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
                    typeInfo: y,
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
                _ = {
                    type: e,
                    typeInfo: y,
                    query: u.substring(null != (h = null == (p = y.sentinel) ? void 0 : p.length) ? h : 0)
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
                _ = {
                    type: e,
                    typeInfo: y,
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
                _ = {
                    type: e,
                    typeInfo: y,
                    query: i.substring(null != (g = null == (m = y.sentinel) ? void 0 : m.length) ? g : 0)
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
            _ = {
                type: e,
                typeInfo: y,
                query: i.substring(null != (b = null == (E = y.sentinel) ? void 0 : E.length) ? b : 0)
            };
            break;
        }
    }
    return null == _ ? null : ((_.query = _.query.toLocaleLowerCase()), _);
}
function _(e, t) {
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
