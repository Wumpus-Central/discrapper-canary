"use strict";
n.d(t, { $E: () => _, Ny: () => p, QC: () => h });
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(168186),
    o = n(408018),
    l = n(189551),
    u = n(404077),
    c = n(374803),
    d = n(307731);
function _(e, t) {
    let {
            activeCommandOption: n,
            canMentionUsers: r = !0,
            canMentionRoles: i = !0,
            canMentionChannels: l = !0,
            canMentionEveryone: u,
            canMentionOtherGlobals: d = !0,
            useNewSlashCommands: _,
            canOnlyUseTextCommands: f,
            canSendStickers: p,
            canSendSoundmoji: h,
            hideMentionDescription: m,
            hidePersonalInformation: g,
            type: E,
            emojiIntention: A,
            editorRef: I,
            onSendMessage: T,
            onSendSticker: y,
            setValue: S,
            isEditorIdle: v,
            currentFullWord: C,
        } = e,
        { query: b } = t,
        N = {
            mentions: { channel: c.xS.DENY, global: c.VN.DENY, role: c.eP.DENY, user: c.Vf.DENY, otherGlobals: !1 },
            commands: c.Ze.DISABLED,
            allowStickers: !0 === p,
            allowSoundmoji: !0 === h,
            forNonStringCommandOption: null != n && n.type !== a.n4.STRING,
            hideMentionDescription: !0 === m,
            hidePersonalInformation: !0 === g,
            chatInputType: E,
            emojiIntention: A,
            sendMessage: T,
            sendSticker: y,
            currentFullWord: C,
            isEditorIdle: v,
            currentAutocompleteType: b?.type ?? null,
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
    if (null != n) {
        let e = (0, s.XM)(n);
        e.canMentionChannels && (N.mentions.channel = c.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (N.mentions.global = e.canMentionHere ? c.VN.ALLOW_EVERYONE_OR_HERE : c.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (N.mentions.role = e.canMentionNonMentionableRoles ? c.eP.ALLOW_ALL : c.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (N.mentions.user = e.canMentionAnyGuildUser ? c.Vf.ALLOW_GUILD : c.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (N.mentions.otherGlobals = !0),
            (N.hideMentionDescription = !0);
    } else
        l && (N.mentions.channel = c.xS.ALLOW_SELECTABLE),
            i && (N.mentions.role = c.eP.ALLOW_MENTIONABLE),
            r && (N.mentions.user = c.Vf.ALLOW_CHANNEL),
            u && (N.mentions.global = c.VN.ALLOW_EVERYONE_OR_HERE),
            d && (N.mentions.otherGlobals = !0);
    return (
        E.commands?.enabled &&
            (_ ? (N.commands = f ? c.Ze.NEW_TEXT_ONLY : c.Ze.NEW) : (N.commands = c.Ze.OLD_BUILT_INS)),
        null != n && null != n.channelTypes && (N.allowedChannelTypes = n.channelTypes),
        N
    );
}
function f(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: s } = e,
        o = u.a[t];
    if (null != o.sentinel) {
        if (!i.startsWith(o.sentinel)) return !1;
        i = i.substring(o.sentinel.length);
    }
    return null == o.matches || !!o.matches(n, r, i, a, s);
}
function p(e) {
    let {
            channel: t,
            guild: n,
            options: r,
            currentWord: a,
            currentWordIsAtStart: s,
            textValue: o,
            optionText: _,
            parentAutocompleteInputType: p,
            parentAutocompleteInputValue: h,
        } = e,
        m = null;
    for (let e of u.S) {
        let g = u.a[e];
        if (null != p) {
            if (g.autocompleteInputElementType === p) {
                i()(null != h, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (m = { type: e, typeInfo: g, query: h });
                break;
            }
            continue;
        }
        if (null == g.autocompleteInputElementType) {
            if (e === c.DB.GIFS || e === c.DB.CHOICES) {
                if (r.commands === c.Ze.OLD_BUILT_INS) {
                    if (f({ type: e, channel: t, guild: n, query: o, isAtStart: !1, options: r })) {
                        m = { type: e, typeInfo: g, query: o };
                        break;
                    }
                } else if (f({ type: e, channel: t, guild: n, query: _, isAtStart: !1, options: r }))
                    return { type: e, typeInfo: g, query: _ };
            } else if (e === c.DB.STICKERS) {
                if (f({ type: e, channel: t, guild: n, query: _, isAtStart: !1, options: r }))
                    return { type: e, typeInfo: g, query: _ };
            } else if (e === c.DB.COMMANDS && r.commands !== c.Ze.OLD_BUILT_INS) {
                if (f({ type: e, channel: t, guild: n, query: o, isAtStart: !0, options: r })) {
                    m = { type: e, typeInfo: g, query: o.substring(g.sentinel?.length ?? 0) };
                    break;
                }
            } else if (e === c.DB.LEGACY_COMMANDS) {
                if (f({ type: e, channel: t, guild: n, query: o, isAtStart: s, options: r })) {
                    m = { type: e, typeInfo: g, query: o };
                    break;
                }
            } else if (e === c.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != a && a.length > 0 && (0, l.K)(d.Vl.AutocompleteTyped),
                    null != a && f({ type: e, channel: t, guild: n, query: a, isAtStart: s, options: r }))
                ) {
                    m = { type: e, typeInfo: g, query: a.substring(g.sentinel?.length ?? 0) };
                    break;
                }
            } else if (null != a && f({ type: e, channel: t, guild: n, query: a, isAtStart: s, options: r })) {
                m = { type: e, typeInfo: g, query: a.substring(g.sentinel?.length ?? 0) };
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
            case a.n4.BOOLEAN:
                n = c.DB.CHOICES;
                break;
            case a.n4.CHANNEL:
                n = c.DB.CHANNELS;
                break;
            case a.n4.ROLE:
            case a.n4.USER:
            case a.n4.MENTIONABLE:
                n = c.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let r = u.a[n];
    return { type: n, typeInfo: r, query: t };
}
