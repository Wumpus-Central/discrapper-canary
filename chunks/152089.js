n.d(t, {
    FW: () => f,
    fZ: () => p,
    py: () => h,
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
            useNewSlashCommands: _,
            canOnlyUseTextCommands: p,
            canSendStickers: h,
            canSendSoundmoji: m,
            hideMentionDescription: g,
            hidePersonalInformation: E,
            type: b,
            emojiIntention: y,
            editorRef: O,
            onSendMessage: v,
            onSendSticker: I,
            setValue: T,
            isEditorIdle: S,
            currentFullWord: A,
        } = e,
        { query: C } = t,
        N = {
            mentions: {
                channel: u.nS.DENY,
                global: u.VV.DENY,
                role: u.Fw.DENY,
                user: u.h3.DENY,
            },
            commands: u.L8.DISABLED,
            allowStickers: !0 === h,
            allowSoundmoji: !0 === m,
            forNonStringCommandOption: null != i && i.type !== a.jw.STRING,
            hideMentionDescription: !0 === g,
            hidePersonalInformation: !0 === E,
            chatInputType: b,
            emojiIntention: y,
            sendMessage: v,
            sendSticker: I,
            currentFullWord: A,
            isEditorIdle: S,
            currentAutocompleteType: null != (r = null == C ? void 0 : C.type) ? r : null,
            insertText: function (e, t) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null == (n = O.current) || n.insertAutocomplete(e, null != t ? t : e, r);
            },
            replaceText: (e, t) => {
                T(e, null != t ? t : (0, s.JM)(e));
            },
            insertAutocompleteInput: (e) => {
                var t;
                null == (t = O.current) || t.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                var r;
                null == (r = O.current) || r.replaceInlineAutocompleteInput(e, t, null != n ? n : t);
            },
            getCommandOptionValues: () => {
                var e;
                return null == (e = O.current) ? void 0 : e.getCommandOptionValues();
            },
        };
    if (null != i) {
        let e = (0, o.$z)(i);
        e.canMentionChannels && (N.mentions.channel = u.nS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (N.mentions.global = e.canMentionHere ? u.VV.ALLOW_EVERYONE_OR_HERE : u.VV.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (N.mentions.role = e.canMentionNonMentionableRoles ? u.Fw.ALLOW_ALL : u.Fw.ALLOW_MENTIONABLE),
            e.canMentionUsers && (N.mentions.user = e.canMentionAnyGuildUser ? u.h3.ALLOW_GUILD : u.h3.ALLOW_CHANNEL),
            (N.hideMentionDescription = !0);
    } else
        d && (N.mentions.channel = u.nS.ALLOW_SELECTABLE),
            c && (N.mentions.role = u.Fw.ALLOW_MENTIONABLE),
            l && (N.mentions.user = u.h3.ALLOW_CHANNEL),
            f && (N.mentions.global = u.VV.ALLOW_EVERYONE_OR_HERE);
    return (
        (null == (n = b.commands) ? void 0 : n.enabled) &&
            (_ ? (N.commands = p ? u.L8.NEW_TEXT_ONLY : u.L8.NEW) : (N.commands = u.L8.OLD_BUILT_INS)),
        null != i && null != i.channelTypes && (N.allowedChannelTypes = i.channelTypes),
        N
    );
}
function _(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: o } = e,
        s = c.W[t];
    if (null != s.sentinel) {
        if (!i.startsWith(s.sentinel)) return !1;
        i = i.substring(s.sentinel.length);
    }
    return null == s.matches || !!s.matches(n, r, i, a, o);
}
function p(e) {
    let {
            channel: t,
            guild: n,
            options: r,
            currentWord: a,
            currentWordIsAtStart: o,
            textValue: s,
            optionText: f,
            parentAutocompleteInputType: p,
            parentAutocompleteInputValue: h,
        } = e,
        m = null;
    for (let e of c.R) {
        var g, E, b, y, O, v;
        let I = c.W[e];
        if (e === u.eq.GIFS || e === u.eq.CHOICES) {
            if (r.commands === u.L8.OLD_BUILT_INS) {
                if (
                    _({
                        type: e,
                        channel: t,
                        guild: n,
                        query: s,
                        isAtStart: !1,
                        options: r,
                    })
                ) {
                    m = {
                        type: e,
                        typeInfo: I,
                        query: s,
                    };
                    break;
                }
            } else if (
                _({
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
                    typeInfo: I,
                    query: f,
                };
        } else if (e === u.eq.STICKERS) {
            if (
                _({
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
                    typeInfo: I,
                    query: f,
                };
        } else if (e === u.eq.COMMANDS && r.commands !== u.L8.OLD_BUILT_INS) {
            if (
                _({
                    type: e,
                    channel: t,
                    guild: n,
                    query: s,
                    isAtStart: !0,
                    options: r,
                })
            ) {
                m = {
                    type: e,
                    typeInfo: I,
                    query: s.substring(null != (E = null == (g = I.sentinel) ? void 0 : g.length) ? E : 0),
                };
                break;
            }
        } else if (e === u.eq.LEGACY_COMMANDS) {
            if (
                _({
                    type: e,
                    channel: t,
                    guild: n,
                    query: s,
                    isAtStart: o,
                    options: r,
                })
            ) {
                m = {
                    type: e,
                    typeInfo: I,
                    query: s,
                };
                break;
            }
        } else if (e === u.eq.EMOJIS_AND_STICKERS) {
            if (
                (null != a && a.length > 0 && (0, l.x)(d.qR.AutocompleteTyped),
                null != a &&
                    _({
                        type: e,
                        channel: t,
                        guild: n,
                        query: a,
                        isAtStart: o,
                        options: r,
                    }))
            ) {
                m = {
                    type: e,
                    typeInfo: I,
                    query: a.substring(null != (y = null == (b = I.sentinel) ? void 0 : b.length) ? y : 0),
                };
                break;
            }
        } else if (null != I.autocompleteInputElementType)
            I.autocompleteInputElementType === p &&
                (i()(null != h, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                (m = {
                    type: e,
                    typeInfo: I,
                    query: h,
                }));
        else if (
            null != a &&
            _({
                type: e,
                channel: t,
                guild: n,
                query: a,
                isAtStart: o,
                options: r,
            })
        ) {
            m = {
                type: e,
                typeInfo: I,
                query: a.substring(null != (v = null == (O = I.sentinel) ? void 0 : O.length) ? v : 0),
            };
            break;
        }
    }
    return null == m ? null : ((m.query = m.query.toLocaleLowerCase()), m);
}
function h(e, t) {
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
