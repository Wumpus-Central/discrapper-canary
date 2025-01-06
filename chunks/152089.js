r.d(n, {
    FW: function () {
        return _;
    },
    fZ: function () {
        return p;
    },
    py: function () {
        return m;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(911969),
    o = r(581364),
    l = r(752305),
    u = r(255963),
    c = r(365704),
    d = r(590921),
    f = r(185923);
function _(e) {
    var n;
    let { activeCommandOption: r, canMentionUsers: i = !0, canMentionRoles: a = !0, canMentionChannels: u = !0, canMentionEveryone: c, canMentionClyde: f = !1, useNewSlashCommands: _, canOnlyUseTextCommands: h, canSendStickers: p, canSendSoundmoji: m, hideMentionDescription: g, hidePersonalInformation: E, type: v, emojiIntention: I, editorRef: T, onSendMessage: b, onSendSticker: y, setValue: S } = e,
        A = {
            mentions: {
                channel: d.nS.DENY,
                global: d.VV.DENY,
                role: d.Fw.DENY,
                user: d.h3.DENY,
                clyde: d.cz.DENY
            },
            commands: d.L8.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === m,
            forNonStringCommandOption: null != r && r.type !== s.jw.STRING,
            hideMentionDescription: !0 === g,
            hidePersonalInformation: !0 === E,
            chatInputType: v,
            emojiIntention: I,
            sendMessage: b,
            sendSticker: y,
            insertText: (e, n) => {
                var r;
                null === (r = T.current) || void 0 === r || r.insertAutocomplete(e, null != n ? n : e);
            },
            replaceText: (e, n) => {
                S(e, null != n ? n : (0, l.JM)(e));
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.getCommandOptionValues();
            }
        };
    if (null != r) {
        let e = (0, o.$z)(r);
        e.canMentionChannels && (A.mentions.channel = d.nS.ALLOW_SELECTABLE), e.canMentionEveryone && (A.mentions.global = e.canMentionHere ? d.VV.ALLOW_EVERYONE_OR_HERE : d.VV.ALLOW_EVERYONE), e.canMentionRoles && (A.mentions.role = e.canMentionNonMentionableRoles ? d.Fw.ALLOW_ALL : d.Fw.ALLOW_MENTIONABLE), e.canMentionUsers && (A.mentions.user = e.canMentionAnyGuildUser ? d.h3.ALLOW_GUILD : d.h3.ALLOW_CHANNEL), (A.hideMentionDescription = !0);
    } else u && (A.mentions.channel = d.nS.ALLOW_SELECTABLE), a && (A.mentions.role = d.Fw.ALLOW_MENTIONABLE), i && (A.mentions.user = d.h3.ALLOW_CHANNEL), c && (A.mentions.global = d.VV.ALLOW_EVERYONE_OR_HERE), f && (A.mentions.clyde = d.cz.ALLOW);
    return (null === (n = v.commands) || void 0 === n ? void 0 : n.enabled) && (_ ? (A.commands = h ? d.L8.NEW_TEXT_ONLY : d.L8.NEW) : (A.commands = d.L8.OLD_BUILT_INS)), null != r && null != r.channelTypes && (A.allowedChannelTypes = r.channelTypes), A;
}
function h(e) {
    let { type: n, channel: r, guild: i, query: a, isAtStart: s, options: o } = e,
        l = c.W[n];
    if (null != l.sentinel) {
        if (!a.startsWith(l.sentinel)) return !1;
        a = a.substring(l.sentinel.length);
    }
    return !!(null == l.matches || l.matches(r, i, a, s, o)) || !1;
}
function p(e) {
    let { channel: n, guild: r, options: i, currentWord: a, currentWordIsAtStart: s, textValue: o, optionText: l } = e,
        _ = null;
    for (let e of c.R) {
        var p, m, g, E, v, I;
        let T = c.W[e];
        if (e === d.eq.GIFS || e === d.eq.CHOICES) {
            if (i.commands === d.L8.OLD_BUILT_INS) {
                if (
                    h({
                        type: e,
                        channel: n,
                        guild: r,
                        query: o,
                        isAtStart: !1,
                        options: i
                    })
                ) {
                    _ = {
                        type: e,
                        typeInfo: T,
                        query: o
                    };
                    break;
                }
            } else if (
                h({
                    type: e,
                    channel: n,
                    guild: r,
                    query: l,
                    isAtStart: !1,
                    options: i
                })
            )
                return {
                    type: e,
                    typeInfo: T,
                    query: l
                };
        } else if (e === d.eq.STICKERS) {
            if (
                h({
                    type: e,
                    channel: n,
                    guild: r,
                    query: l,
                    isAtStart: !1,
                    options: i
                })
            )
                return {
                    type: e,
                    typeInfo: T,
                    query: l
                };
        } else if (e === d.eq.COMMANDS && i.commands !== d.L8.OLD_BUILT_INS) {
            if (
                h({
                    type: e,
                    channel: n,
                    guild: r,
                    query: o,
                    isAtStart: !0,
                    options: i
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: T,
                    query: o.substring(null !== (m = null === (p = T.sentinel) || void 0 === p ? void 0 : p.length) && void 0 !== m ? m : 0)
                };
                break;
            }
        } else if (e === d.eq.LEGACY_COMMANDS) {
            if (
                h({
                    type: e,
                    channel: n,
                    guild: r,
                    query: o,
                    isAtStart: s,
                    options: i
                })
            ) {
                _ = {
                    type: e,
                    typeInfo: T,
                    query: o
                };
                break;
            }
        } else if (e === d.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != a && a.length > 0 && (0, u.x)(f.qR.AutocompleteTyped),
                null != a &&
                    h({
                        type: e,
                        channel: n,
                        guild: r,
                        query: a,
                        isAtStart: s,
                        options: i
                    }))
            ) {
                _ = {
                    type: e,
                    typeInfo: T,
                    query: a.substring(null !== (E = null === (g = T.sentinel) || void 0 === g ? void 0 : g.length) && void 0 !== E ? E : 0)
                };
                break;
            }
        } else if (
            null != a &&
            h({
                type: e,
                channel: n,
                guild: r,
                query: a,
                isAtStart: s,
                options: i
            })
        ) {
            _ = {
                type: e,
                typeInfo: T,
                query: a.substring(null !== (I = null === (v = T.sentinel) || void 0 === v ? void 0 : v.length) && void 0 !== I ? I : 0)
            };
            break;
        }
    }
    return null == _ ? null : ((_.query = _.query.toLocaleLowerCase()), _);
}
function m(e, n) {
    let r;
    if (null == n || null == e) return null;
    if (null != e.choices || e.autocomplete) r = d.eq.CHOICES;
    else
        switch (e.type) {
            case s.jw.BOOLEAN:
                r = d.eq.CHOICES;
                break;
            case s.jw.CHANNEL:
                r = d.eq.CHANNELS;
                break;
            case s.jw.ROLE:
            case s.jw.USER:
            case s.jw.MENTIONABLE:
                r = d.eq.MENTIONS;
                break;
            default:
                return null;
        }
    let i = c.W[r];
    return {
        type: r,
        typeInfo: i,
        query: n
    };
}
