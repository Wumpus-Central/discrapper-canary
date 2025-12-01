n.d(t, {
    FW: () => f,
    fZ: () => _,
    py: () => m,
}),
    n(388685),
    n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(911969),
    o = n(581364),
    s = n(752305),
    l = n(255963),
    c = n(365704),
    u = n(590921),
    d = n(185923);
function f(e, t) {
    var n, r;
    let {
            activeCommandOption: i,
            canMentionUsers: l = !0,
            canMentionRoles: c = !0,
            canMentionChannels: d = !0,
            canMentionEveryone: f,
            canMentionOtherGlobals: p = !0,
            useNewSlashCommands: _,
            canOnlyUseTextCommands: m,
            canSendStickers: h,
            canSendSoundmoji: g,
            hideMentionDescription: E,
            hidePersonalInformation: b,
            type: y,
            emojiIntention: O,
            editorRef: v,
            onSendMessage: S,
            onSendSticker: I,
            setValue: T,
            isEditorIdle: A,
            currentFullWord: C,
        } = e,
        { query: N } = t,
        P = {
            mentions: {
                channel: u.nS.DENY,
                global: u.VV.DENY,
                role: u.Fw.DENY,
                user: u.h3.DENY,
                otherGlobals: !1,
            },
            commands: u.L8.DISABLED,
            allowStickers: !0 === h,
            allowSoundmoji: !0 === g,
            forNonStringCommandOption: null != i && i.type !== a.jw.STRING,
            hideMentionDescription: !0 === E,
            hidePersonalInformation: !0 === b,
            chatInputType: y,
            emojiIntention: O,
            sendMessage: S,
            sendSticker: I,
            currentFullWord: C,
            isEditorIdle: A,
            currentAutocompleteType: null != (r = null == N ? void 0 : N.type) ? r : null,
            insertText: function (e, t) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null == (n = v.current) || n.insertAutocomplete(e, null != t ? t : e, r);
            },
            replaceText: (e, t) => {
                T(e, null != t ? t : (0, s.JM)(e));
            },
            insertAutocompleteInput: (e) => {
                var t;
                null == (t = v.current) || t.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                var r;
                null == (r = v.current) || r.replaceInlineAutocompleteInput(e, t, null != n ? n : t);
            },
            getCommandOptionValues: () => {
                var e;
                return null == (e = v.current) ? void 0 : e.getCommandOptionValues();
            },
        };
    if (null != i) {
        let e = (0, o.$z)(i);
        e.canMentionChannels && (P.mentions.channel = u.nS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (P.mentions.global = e.canMentionHere ? u.VV.ALLOW_EVERYONE_OR_HERE : u.VV.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (P.mentions.role = e.canMentionNonMentionableRoles ? u.Fw.ALLOW_ALL : u.Fw.ALLOW_MENTIONABLE),
            e.canMentionUsers && (P.mentions.user = e.canMentionAnyGuildUser ? u.h3.ALLOW_GUILD : u.h3.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (P.mentions.otherGlobals = !0),
            (P.hideMentionDescription = !0);
    } else
        d && (P.mentions.channel = u.nS.ALLOW_SELECTABLE),
            c && (P.mentions.role = u.Fw.ALLOW_MENTIONABLE),
            l && (P.mentions.user = u.h3.ALLOW_CHANNEL),
            f && (P.mentions.global = u.VV.ALLOW_EVERYONE_OR_HERE),
            p && (P.mentions.otherGlobals = !0);
    return (
        (null == (n = y.commands) ? void 0 : n.enabled) &&
            (_ ? (P.commands = m ? u.L8.NEW_TEXT_ONLY : u.L8.NEW) : (P.commands = u.L8.OLD_BUILT_INS)),
        null != i && null != i.channelTypes && (P.allowedChannelTypes = i.channelTypes),
        P
    );
}
function p(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: o } = e,
        s = c.W[t];
    if (null != s.sentinel) {
        if (!i.startsWith(s.sentinel)) return !1;
        i = i.substring(s.sentinel.length);
    }
    return null == s.matches || !!s.matches(n, r, i, a, o);
}
function _(e) {
    let {
            channel: t,
            guild: n,
            options: r,
            currentWord: a,
            currentWordIsAtStart: o,
            textValue: s,
            optionText: f,
            parentAutocompleteInputType: _,
            parentAutocompleteInputValue: m,
        } = e,
        h = null;
    for (let e of c.R) {
        var g, E, b, y, O, v;
        let S = c.W[e];
        if (null != _) {
            if (S.autocompleteInputElementType === _) {
                i()(null != m, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (h = {
                        type: e,
                        typeInfo: S,
                        query: m,
                    });
                break;
            }
            continue;
        }
        if (null == S.autocompleteInputElementType) {
            if (e === u.eq.GIFS || e === u.eq.CHOICES) {
                if (r.commands === u.L8.OLD_BUILT_INS) {
                    if (
                        p({
                            type: e,
                            channel: t,
                            guild: n,
                            query: s,
                            isAtStart: !1,
                            options: r,
                        })
                    ) {
                        h = {
                            type: e,
                            typeInfo: S,
                            query: s,
                        };
                        break;
                    }
                } else if (
                    p({
                        type: e,
                        channel: t,
                        guild: n,
                        query: f,
                        isAtStart: !1,
                        options: r,
                    })
                )
                    return {
                        type: e,
                        typeInfo: S,
                        query: f,
                    };
            } else if (e === u.eq.STICKERS) {
                if (
                    p({
                        type: e,
                        channel: t,
                        guild: n,
                        query: f,
                        isAtStart: !1,
                        options: r,
                    })
                )
                    return {
                        type: e,
                        typeInfo: S,
                        query: f,
                    };
            } else if (e === u.eq.COMMANDS && r.commands !== u.L8.OLD_BUILT_INS) {
                if (
                    p({
                        type: e,
                        channel: t,
                        guild: n,
                        query: s,
                        isAtStart: !0,
                        options: r,
                    })
                ) {
                    h = {
                        type: e,
                        typeInfo: S,
                        query: s.substring(null != (E = null == (g = S.sentinel) ? void 0 : g.length) ? E : 0),
                    };
                    break;
                }
            } else if (e === u.eq.LEGACY_COMMANDS) {
                if (
                    p({
                        type: e,
                        channel: t,
                        guild: n,
                        query: s,
                        isAtStart: o,
                        options: r,
                    })
                ) {
                    h = {
                        type: e,
                        typeInfo: S,
                        query: s,
                    };
                    break;
                }
            } else if (e === u.eq.EMOJIS_AND_STICKERS) {
                if (
                    (null != a && a.length > 0 && (0, l.x)(d.qR.AutocompleteTyped),
                    null != a &&
                        p({
                            type: e,
                            channel: t,
                            guild: n,
                            query: a,
                            isAtStart: o,
                            options: r,
                        }))
                ) {
                    h = {
                        type: e,
                        typeInfo: S,
                        query: a.substring(null != (y = null == (b = S.sentinel) ? void 0 : b.length) ? y : 0),
                    };
                    break;
                }
            } else if (
                null != a &&
                p({
                    type: e,
                    channel: t,
                    guild: n,
                    query: a,
                    isAtStart: o,
                    options: r,
                })
            ) {
                h = {
                    type: e,
                    typeInfo: S,
                    query: a.substring(null != (v = null == (O = S.sentinel) ? void 0 : O.length) ? v : 0),
                };
                break;
            }
        }
    }
    return null == h ? null : ((h.query = h.query.toLocaleLowerCase()), h);
}
function m(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = u.eq.CHOICES;
    else
        switch (e.type) {
            case a.jw.BOOLEAN:
                n = u.eq.CHOICES;
                break;
            case a.jw.CHANNEL:
                n = u.eq.CHANNELS;
                break;
            case a.jw.ROLE:
            case a.jw.USER:
            case a.jw.MENTIONABLE:
                n = u.eq.MENTIONS;
                break;
            default:
                return null;
        }
    let r = c.W[n];
    return {
        type: n,
        typeInfo: r,
        query: t,
    };
}
