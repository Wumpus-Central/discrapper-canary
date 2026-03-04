"use strict";
n.d(t, { $E: () => _, Ny: () => p, QC: () => h });
var r = n(284009),
    i = n.n(r),
    s = n(155718),
    a = n(168186),
    o = n(408018),
    l = n(189551),
    u = n(404077),
    c = n(374803),
    d = n(307731);
function _(e) {
    let {
            activeCommandOption: t,
            canMentionUsers: n = !0,
            canMentionRoles: r = !0,
            canMentionChannels: i = !0,
            canMentionEveryone: l,
            canMentionOtherGlobals: u = !0,
            useNewSlashCommands: d,
            canOnlyUseTextCommands: _,
            canSendStickers: f,
            canSendSoundmoji: p,
            hideMentionDescription: h,
            hidePersonalInformation: m,
            type: E,
            emojiIntention: g,
            editorRef: A,
            onSendMessage: I,
            onSendSticker: T,
            setValue: S,
        } = e,
        y = {
            mentions: { channel: c.xS.DENY, global: c.VN.DENY, role: c.eP.DENY, user: c.Vf.DENY, otherGlobals: !1 },
            commands: c.Ze.DISABLED,
            allowStickers: !0 === f,
            allowSoundmoji: !0 === p,
            forNonStringCommandOption: null != t && t.type !== s.n4.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === m,
            chatInputType: E,
            emojiIntention: g,
            sendMessage: I,
            sendSticker: T,
            insertText: function (e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                A.current?.insertAutocomplete(e, t ?? e, n);
            },
            replaceText: (e, t) => {
                S(e, t ?? (0, o.x7)(e));
            },
            insertAutocompleteInput: (e) => {
                A.current?.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                A.current?.replaceInlineAutocompleteInput(e, t, n ?? t);
            },
            getCommandOptionValues: () => A.current?.getCommandOptionValues(),
        };
    if (null != t) {
        let e = (0, a.XM)(t);
        e.canMentionChannels && (y.mentions.channel = c.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (y.mentions.global = e.canMentionHere ? c.VN.ALLOW_EVERYONE_OR_HERE : c.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (y.mentions.role = e.canMentionNonMentionableRoles ? c.eP.ALLOW_ALL : c.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (y.mentions.user = e.canMentionAnyGuildUser ? c.Vf.ALLOW_GUILD : c.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (y.mentions.otherGlobals = !0),
            (y.hideMentionDescription = !0);
    } else
        i && (y.mentions.channel = c.xS.ALLOW_SELECTABLE),
            r && (y.mentions.role = c.eP.ALLOW_MENTIONABLE),
            n && (y.mentions.user = c.Vf.ALLOW_CHANNEL),
            l && (y.mentions.global = c.VN.ALLOW_EVERYONE_OR_HERE),
            u && (y.mentions.otherGlobals = !0);
    return (
        E.commands?.enabled &&
            (d ? (y.commands = _ ? c.Ze.NEW_TEXT_ONLY : c.Ze.NEW) : (y.commands = c.Ze.OLD_BUILT_INS)),
        null != t && null != t.channelTypes && (y.allowedChannelTypes = t.channelTypes),
        y
    );
}
function f(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: s, options: a } = e,
        o = u.a[t];
    if (null != o.sentinel) {
        if (!i.startsWith(o.sentinel)) return !1;
        i = i.substring(o.sentinel.length);
    }
    return null == o.matches || !!o.matches(n, r, i, s, a);
}
function p(e) {
    let {
            channel: t,
            guild: n,
            options: r,
            currentWord: s,
            currentWordIsAtStart: a,
            textValue: o,
            optionText: _,
            parentAutocompleteInputType: p,
            parentAutocompleteInputValue: h,
        } = e,
        m = null;
    for (let e of u.S) {
        let E = u.a[e];
        if (null != p) {
            if (E.autocompleteInputElementType === p) {
                i()(null != h, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (m = { type: e, typeInfo: E, query: h });
                break;
            }
            continue;
        }
        if (null == E.autocompleteInputElementType) {
            if (e === c.DB.GIFS || e === c.DB.CHOICES) {
                if (r.commands === c.Ze.OLD_BUILT_INS) {
                    if (f({ type: e, channel: t, guild: n, query: o, isAtStart: !1, options: r })) {
                        m = { type: e, typeInfo: E, query: o };
                        break;
                    }
                } else if (f({ type: e, channel: t, guild: n, query: _, isAtStart: !1, options: r }))
                    return { type: e, typeInfo: E, query: _ };
            } else if (e === c.DB.STICKERS) {
                if (f({ type: e, channel: t, guild: n, query: _, isAtStart: !1, options: r }))
                    return { type: e, typeInfo: E, query: _ };
            } else if (e === c.DB.COMMANDS && r.commands !== c.Ze.OLD_BUILT_INS) {
                if (f({ type: e, channel: t, guild: n, query: o, isAtStart: !0, options: r })) {
                    m = { type: e, typeInfo: E, query: o.substring(E.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === c.DB.LEGACY_COMMANDS) {
                if (f({ type: e, channel: t, guild: n, query: o, isAtStart: a, options: r })) {
                    m = { type: e, typeInfo: E, query: o };
                    break;
                }
            } else if (e === c.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != s && s.length > 0 && (0, l.K)(d.Vl.AutocompleteTyped),
                    null != s && f({ type: e, channel: t, guild: n, query: s, isAtStart: a, options: r }))
                ) {
                    m = { type: e, typeInfo: E, query: s.substring(E.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != s && f({ type: e, channel: t, guild: n, query: s, isAtStart: a, options: r })) {
                m = { type: e, typeInfo: E, query: s.substring(E.sentinel?.length ?? 0) };
                break;
            }
        }
    }
    return null == m ? null : ((m.query = m.query.toLocaleLowerCase()), m);
}
function h(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = c.DB.CHOICES;
    else
        switch (e.type) {
            case s.n4.BOOLEAN:
                n = c.DB.CHOICES;
                break;
            case s.n4.CHANNEL:
                n = c.DB.CHANNELS;
                break;
            case s.n4.ROLE:
            case s.n4.USER:
            case s.n4.MENTIONABLE:
                n = c.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let r = u.a[n];
    return { type: n, typeInfo: r, query: t };
}
