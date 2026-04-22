n.d(t, { findCommandOptionAutocompleteType: () => A, findMatchingAutocompleteType: () => y, getOptions: () => d });
var l = n(284009),
    r = n.n(l),
    i = n(155718),
    s = n(168186),
    o = n(408018),
    u = n(189551),
    a = n(404077),
    m = n(374803),
    c = n(307731);
function d(e) {
    let {
            activeCommandOption: t,
            canMentionUsers: n = !0,
            canMentionRoles: l = !0,
            canMentionChannels: r = !0,
            canMentionEveryone: u,
            canMentionOtherGlobals: a = !0,
            useNewSlashCommands: c,
            canOnlyUseTextCommands: d,
            canSendStickers: p,
            canSendSoundmoji: y,
            hideMentionDescription: A,
            hidePersonalInformation: h,
            type: g,
            emojiIntention: M,
            editorRef: I,
            onSendMessage: N,
            onSendSticker: E,
            setValue: S,
        } = e,
        C = {
            mentions: { channel: m.xS.DENY, global: m.VN.DENY, role: m.eP.DENY, user: m.Vf.DENY, otherGlobals: !1 },
            commands: m.Ze.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === y,
            forNonStringCommandOption: null != t && t.type !== i.n4.STRING,
            hideMentionDescription: !0 === A,
            hidePersonalInformation: !0 === h,
            chatInputType: g,
            emojiIntention: M,
            sendMessage: N,
            sendSticker: E,
            insertText: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                I.current?.insertAutocomplete(e, t ?? e, n);
            },
            replaceText: (e, t) => {
                S(e, t ?? (0, o.x7)(e));
            },
            insertAutocompleteInput: (e) => {
                I.current?.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                I.current?.replaceInlineAutocompleteInput(e, t, n ?? t);
            },
            getCommandOptionValues: () => I.current?.getCommandOptionValues(),
        };
    if (null != t) {
        let e = (0, s.XM)(t);
        e.canMentionChannels && (C.mentions.channel = m.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (C.mentions.global = e.canMentionHere ? m.VN.ALLOW_EVERYONE_OR_HERE : m.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (C.mentions.role = e.canMentionNonMentionableRoles ? m.eP.ALLOW_ALL : m.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (C.mentions.user = e.canMentionAnyGuildUser ? m.Vf.ALLOW_GUILD : m.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (C.mentions.otherGlobals = !0),
            (C.hideMentionDescription = !0);
    } else
        r && (C.mentions.channel = m.xS.ALLOW_SELECTABLE),
            l && (C.mentions.role = m.eP.ALLOW_MENTIONABLE),
            n && (C.mentions.user = m.Vf.ALLOW_CHANNEL),
            u && (C.mentions.global = m.VN.ALLOW_EVERYONE_OR_HERE),
            a && (C.mentions.otherGlobals = !0);
    return (
        g.commands?.enabled &&
            (c ? (C.commands = d ? m.Ze.NEW_TEXT_ONLY : m.Ze.NEW) : (C.commands = m.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (C.allowedChannelTypes = t.channelTypes),
        C
    );
}
function p(e) {
    let { type: t, channel: n, guild: l, query: r, isAtStart: i, options: s } = e,
        o = a.a[t];
    if (null != o.sentinel) {
        if (!r.startsWith(o.sentinel)) return !1;
        r = r.substring(o.sentinel.length);
    }
    return null == o.matches || !!o.matches(n, l, r, i, s);
}
function y(e) {
    let {
            channel: t,
            guild: n,
            options: l,
            currentWord: i,
            currentWordIsAtStart: s,
            textValue: o,
            optionText: d,
            parentAutocompleteInputType: y,
            parentAutocompleteInputValue: A,
        } = e,
        h = null;
    for (let e of a.S) {
        let g = a.a[e];
        if (null != y) {
            if (g.autocompleteInputElementType === y) {
                r()(null != A, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (h = { type: e, typeInfo: g, query: A });
                break;
            }
            continue;
        }
        if (null == g.autocompleteInputElementType) {
            if (e === m.DB.GIFS || e === m.DB.CHOICES) {
                if (l.commands === m.Ze.OLD_BUILT_INS) {
                    if (p({ type: e, channel: t, guild: n, query: o, isAtStart: !1, options: l })) {
                        h = { type: e, typeInfo: g, query: o };
                        break;
                    }
                } else if (p({ type: e, channel: t, guild: n, query: d, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: g, query: d };
            } else if (e === m.DB.STICKERS) {
                if (p({ type: e, channel: t, guild: n, query: d, isAtStart: !1, options: l }))
                    return { type: e, typeInfo: g, query: d };
            } else if (e === m.DB.COMMANDS && l.commands !== m.Ze.OLD_BUILT_INS) {
                if (p({ type: e, channel: t, guild: n, query: o, isAtStart: !0, options: l })) {
                    h = { type: e, typeInfo: g, query: o.substring(g.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === m.DB.LEGACY_COMMANDS) {
                if (p({ type: e, channel: t, guild: n, query: o, isAtStart: s, options: l })) {
                    h = { type: e, typeInfo: g, query: o };
                    break;
                }
            } else if (e === m.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != i && i.length > 0 && (0, u.K)(c.EmojiInteractionPoint.AutocompleteTyped),
                    null != i && p({ type: e, channel: t, guild: n, query: i, isAtStart: s, options: l }))
                ) {
                    h = { type: e, typeInfo: g, query: i.substring(g.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != i && p({ type: e, channel: t, guild: n, query: i, isAtStart: s, options: l })) {
                h = { type: e, typeInfo: g, query: i.substring(g.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == h ? null : ((h.query = h.query.toLocaleLowerCase()), h);
}
function A(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = m.DB.CHOICES;
    else
        switch (e.type) {
            case i.n4.BOOLEAN:
                n = m.DB.CHOICES;
                break;
            case i.n4.CHANNEL:
                n = m.DB.CHANNELS;
                break;
            case i.n4.ROLE:
            case i.n4.USER:
            case i.n4.MENTIONABLE:
                n = m.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let l = a.a[n];
    return { type: n, typeInfo: l, query: t };
}
