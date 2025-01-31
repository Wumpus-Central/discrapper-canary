n.d(t, {
    FW: () => c,
    fZ: () => f,
    py: () => _
}),
    n(47120),
    n(411104);
var i = n(911969),
    r = n(581364),
    a = n(752305),
    s = n(255963),
    o = n(365704),
    l = n(590921),
    u = n(185923);
function c(e) {
    var t;
    let { activeCommandOption: n, canMentionUsers: s = !0, canMentionRoles: o = !0, canMentionChannels: u = !0, canMentionEveryone: c, canMentionClyde: d = !1, useNewSlashCommands: f, canOnlyUseTextCommands: _, canSendStickers: p, canSendSoundmoji: h, hideMentionDescription: m, hidePersonalInformation: g, type: E, emojiIntention: v, editorRef: y, onSendMessage: I, onSendSticker: b, setValue: T } = e,
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
            forNonStringCommandOption: null != n && n.type !== i.jw.STRING,
            hideMentionDescription: !0 === m,
            hidePersonalInformation: !0 === g,
            chatInputType: E,
            emojiIntention: v,
            sendMessage: I,
            sendSticker: b,
            insertText: (e, t) => {
                var n;
                null === (n = y.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e);
            },
            replaceText: (e, t) => {
                T(e, null != t ? t : (0, a.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = y.current) || void 0 === e ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != n) {
        let e = (0, r.$z)(n);
        e.canMentionChannels && (S.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (S.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (S.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (S.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), (S.hideMentionDescription = !0);
    } else u && (S.mentions.channel = l.nS.ALLOW_SELECTABLE), o && (S.mentions.role = l.Fw.ALLOW_MENTIONABLE), s && (S.mentions.user = l.h3.ALLOW_CHANNEL), c && (S.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE), d && (S.mentions.clyde = l.cz.ALLOW);
    return (null === (t = E.commands) || void 0 === t ? void 0 : t.enabled) && (f ? (S.commands = _ ? l.L8.NEW_TEXT_ONLY : l.L8.NEW) : (S.commands = l.L8.OLD_BUILT_INS)), null != n && null != n.channelTypes && (S.allowedChannelTypes = n.channelTypes), S;
}
function d(e) {
    let { type: t, channel: n, guild: i, query: r, isAtStart: a, options: s } = e,
        l = o.W[t];
    if (null != l.sentinel) {
        if (!r.startsWith(l.sentinel)) return !1;
        r = r.substring(l.sentinel.length);
    }
    return !!(null == l.matches || l.matches(n, i, r, a, s));
}
function f(e) {
    let { channel: t, guild: n, options: i, currentWord: r, currentWordIsAtStart: a, textValue: c, optionText: f } = e,
        _ = null;
    for (let e of o.R) {
        var p, h, m, g, E, v;
        let y = o.W[e];
        if (e === l.eq.GIFS || e === l.eq.CHOICES) {
            if (i.commands === l.L8.OLD_BUILT_INS) {
                if (
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: c,
                        isAtStart: !1,
                        options: i
                    })
                ) {
                    _ = {
                        type: e,
                        typeInfo: y,
                        query: c
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
                    options: i
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
                    options: i
                })
            )
                return {
                    type: e,
                    typeInfo: y,
                    query: f
                };
        } else if (e === l.eq.COMMANDS && i.commands !== l.L8.OLD_BUILT_INS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: c,
                    isAtStart: !0,
                    options: i
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: y,
                    query: c.substring(null !== (h = null === (p = y.sentinel) || void 0 === p ? void 0 : p.length) && void 0 !== h ? h : 0)
                };
                break;
            }
        } else if (e === l.eq.LEGACY_COMMANDS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: c,
                    isAtStart: a,
                    options: i
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: y,
                    query: c
                };
                break;
            }
        } else if (e === l.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != r && r.length > 0 && (0, s.x)(u.qR.AutocompleteTyped),
                null != r &&
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: r,
                        isAtStart: a,
                        options: i
                    }))
            ) {
                _ = {
                    type: e,
                    typeInfo: y,
                    query: r.substring(null !== (g = null === (m = y.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== g ? g : 0)
                };
                break;
            }
        } else if (
            null != r &&
            d({
                type: e,
                channel: t,
                guild: n,
                query: r,
                isAtStart: a,
                options: i
            })
        ) {
            _ = {
                type: e,
                typeInfo: y,
                query: r.substring(null !== (v = null === (E = y.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== v ? v : 0)
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
            case i.jw.BOOLEAN:
                n = l.eq.CHOICES;
                break;
            case i.jw.CHANNEL:
                n = l.eq.CHANNELS;
                break;
            case i.jw.ROLE:
            case i.jw.USER:
            case i.jw.MENTIONABLE:
                n = l.eq.MENTIONS;
                break;
            default:
                return null;
        }
    let r = o.W[n];
    return {
        type: n,
        typeInfo: r,
        query: t
    };
}
