n.d(t, {
    FW: () => u,
    fZ: () => _,
    py: () => f
}),
    n(388685),
    n(415506);
var r = n(911969),
    i = n(581364),
    a = n(752305),
    o = n(255963),
    s = n(365704),
    l = n(590921),
    c = n(185923);
function u(e) {
    var t;
    let { activeCommandOption: n, canMentionUsers: o = !0, canMentionRoles: s = !0, canMentionChannels: c = !0, canMentionEveryone: u, useNewSlashCommands: d, canOnlyUseTextCommands: _, canSendStickers: f, canSendSoundmoji: p, hideMentionDescription: h, hidePersonalInformation: m, type: g, emojiIntention: E, editorRef: b, onSendMessage: y, onSendSticker: O, setValue: v } = e,
        I = {
            mentions: {
                channel: l.nS.DENY,
                global: l.VV.DENY,
                role: l.Fw.DENY,
                user: l.h3.DENY
            },
            commands: l.L8.DISABLED,
            allowStickers: !0 === f,
            allowSoundmoji: !0 === p,
            forNonStringCommandOption: null != n && n.type !== r.jw.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === m,
            chatInputType: g,
            emojiIntention: E,
            sendMessage: y,
            sendSticker: O,
            insertText: (e, t) => {
                var n;
                null == (n = b.current) || n.insertAutocomplete(e, null != t ? t : e);
            },
            replaceText: (e, t) => {
                v(e, null != t ? t : (0, a.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null == (e = b.current) ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != n) {
        let e = (0, i.$z)(n);
        e.canMentionChannels && (I.mentions.channel = l.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (I.mentions.global = e.canMentionHere ? l.VV.ALLOW_EVERYONE_OR_HERE : l.VV.ALLOW_EVERYONE), e.canMentionRoles && (I.mentions.role = e.canMentionNonMentionableRoles ? l.Fw.ALLOW_ALL : l.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (I.mentions.user = e.canMentionAnyGuildUser ? l.h3.ALLOW_GUILD : l.h3.ALLOW_CHANNEL), (I.hideMentionDescription = !0);
    } else c && (I.mentions.channel = l.nS.ALLOW_SELECTABLE), s && (I.mentions.role = l.Fw.ALLOW_MENTIONABLE), o && (I.mentions.user = l.h3.ALLOW_CHANNEL), u && (I.mentions.global = l.VV.ALLOW_EVERYONE_OR_HERE);
    return (null == (t = g.commands) ? void 0 : t.enabled) && (d ? (I.commands = _ ? l.L8.NEW_TEXT_ONLY : l.L8.NEW) : (I.commands = l.L8.OLD_BUILT_INS)), null != n && null != n.channelTypes && (I.allowedChannelTypes = n.channelTypes), I;
}
function d(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: o } = e,
        l = s.W[t];
    if (null != l.sentinel) {
        if (!i.startsWith(l.sentinel)) return !1;
        i = i.substring(l.sentinel.length);
    }
    return null == l.matches || !!l.matches(n, r, i, a, o);
}
function _(e) {
    let { channel: t, guild: n, options: r, currentWord: i, currentWordIsAtStart: a, textValue: u, optionText: _ } = e,
        f = null;
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
                    f = {
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
                    query: _,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: y,
                    query: _
                };
        } else if (e === l.eq.STICKERS) {
            if (
                d({
                    type: e,
                    channel: t,
                    guild: n,
                    query: _,
                    isAtStart: !1,
                    options: r
                })
            )
                return {
                    type: e,
                    typeInfo: y,
                    query: _
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
                f = {
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
                    isAtStart: a,
                    options: r
                })
            ) {
                f = {
                    type: e,
                    typeInfo: y,
                    query: u
                };
                break;
            }
        } else if (e === l.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != i && i.length > 0 && (0, o.x)(c.qR.AutocompleteTyped),
                null != i &&
                    d({
                        type: e,
                        channel: t,
                        guild: n,
                        query: i,
                        isAtStart: a,
                        options: r
                    }))
            ) {
                f = {
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
                isAtStart: a,
                options: r
            })
        ) {
            f = {
                type: e,
                typeInfo: y,
                query: i.substring(null != (b = null == (E = y.sentinel) ? void 0 : E.length) ? b : 0)
            };
            break;
        }
    }
    return null == f ? null : ((f.query = f.query.toLocaleLowerCase()), f);
}
function f(e, t) {
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
