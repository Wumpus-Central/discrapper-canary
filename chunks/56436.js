n.d(t, {
    $E: () => f,
    Ny: () => _,
    QC: () => h,
}),
    n(896048),
    n(65821);
var r = n(284009),
    i = n.n(r),
    a = n(155718),
    s = n(168186),
    o = n(408018),
    l = n(189551),
    c = n(404077),
    u = n(374803),
    d = n(307731);

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
            canOnlyUseTextCommands: h,
            canSendStickers: m,
            canSendSoundmoji: g,
            hideMentionDescription: E,
            hidePersonalInformation: b,
            type: y,
            emojiIntention: O,
            editorRef: A,
            onSendMessage: v,
            onSendSticker: S,
            setValue: I,
            isEditorIdle: T,
            currentFullWord: C,
        } = e,
        { query: N } = t,
        R = {
            mentions: {
                channel: u.xS.DENY,
                global: u.VN.DENY,
                role: u.eP.DENY,
                user: u.Vf.DENY,
                otherGlobals: !1,
            },
            commands: u.Ze.DISABLED,
            allowStickers: !0 === m,
            allowSoundmoji: !0 === g,
            forNonStringCommandOption: null != i && i.type !== a.n4.STRING,
            hideMentionDescription: !0 === E,
            hidePersonalInformation: !0 === b,
            chatInputType: y,
            emojiIntention: O,
            sendMessage: v,
            sendSticker: S,
            currentFullWord: C,
            isEditorIdle: T,
            currentAutocompleteType: null != (n = null == N ? void 0 : N.type) ? n : null,
            insertText: function (e, t) {
                var n;
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                null == (n = A.current) || n.insertAutocomplete(e, null != t ? t : e, r);
            },
            replaceText: (e, t) => {
                I(e, null != t ? t : (0, o.x7)(e));
            },
            insertAutocompleteInput: (e) => {
                var t;
                null == (t = A.current) || t.insertInlineAutocompleteElement(e);
            },
            replaceInlineInput: (e, t, n) => {
                var r;
                null == (r = A.current) || r.replaceInlineAutocompleteInput(e, t, null != n ? n : t);
            },
            getCommandOptionValues: () => {
                var e;
                return null == (e = A.current) ? void 0 : e.getCommandOptionValues();
            },
        };
    if (null != i) {
        let e = (0, s.XM)(i);
        e.canMentionChannels && (R.mentions.channel = u.xS.ALLOW_SELECTABLE),
            e.canMentionEveryone &&
                (R.mentions.global = e.canMentionHere ? u.VN.ALLOW_EVERYONE_OR_HERE : u.VN.ALLOW_EVERYONE),
            e.canMentionRoles &&
                (R.mentions.role = e.canMentionNonMentionableRoles ? u.eP.ALLOW_ALL : u.eP.ALLOW_MENTIONABLE),
            e.canMentionUsers && (R.mentions.user = e.canMentionAnyGuildUser ? u.Vf.ALLOW_GUILD : u.Vf.ALLOW_CHANNEL),
            e.canMentionOtherGlobals && (R.mentions.otherGlobals = !0),
            (R.hideMentionDescription = !0);
    } else
        d && (R.mentions.channel = u.xS.ALLOW_SELECTABLE),
            c && (R.mentions.role = u.eP.ALLOW_MENTIONABLE),
            l && (R.mentions.user = u.Vf.ALLOW_CHANNEL),
            f && (R.mentions.global = u.VN.ALLOW_EVERYONE_OR_HERE),
            p && (R.mentions.otherGlobals = !0);
    return (
        (null == (r = y.commands) ? void 0 : r.enabled) &&
            (_ ? (R.commands = h ? u.Ze.NEW_TEXT_ONLY : u.Ze.NEW) : (R.commands = u.Ze.OLD_BUILT_INS)),
        null != i && null != i.channelTypes && (R.allowedChannelTypes = i.channelTypes),
        R
    );
}

function p(e) {
    let { type: t, channel: n, guild: r, query: i, isAtStart: a, options: s } = e,
        o = c.a[t];
    if (null != o.sentinel) {
        if (!i.startsWith(o.sentinel)) return !1;
        i = i.substring(o.sentinel.length);
    }
    return null == o.matches || !!o.matches(n, r, i, a, s);
}

function _(e) {
    let {
            channel: t,
            guild: n,
            options: r,
            currentWord: a,
            currentWordIsAtStart: s,
            textValue: o,
            optionText: f,
            parentAutocompleteInputType: _,
            parentAutocompleteInputValue: h,
        } = e,
        m = null;
    for (let e of c.S) {
        var g, E, b, y, O, A;
        let v = c.a[e];
        if (null != _) {
            if (v.autocompleteInputElementType === _) {
                i()(null != h, "parentAutocompleteInputValue is null, but we're in an inline autocomplete object"),
                    (m = {
                        type: e,
                        typeInfo: v,
                        query: h,
                    });
                break;
            }
            continue;
        }
        if (null == v.autocompleteInputElementType) {
            if (e === u.DB.GIFS || e === u.DB.CHOICES) {
                if (r.commands === u.Ze.OLD_BUILT_INS) {
                    if (
                        p({
                            type: e,
                            channel: t,
                            guild: n,
                            query: o,
                            isAtStart: !1,
                            options: r,
                        })
                    ) {
                        m = {
                            type: e,
                            typeInfo: v,
                            query: o,
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
                        typeInfo: v,
                        query: f,
                    };
            } else if (e === u.DB.STICKERS) {
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
                        typeInfo: v,
                        query: f,
                    };
            } else if (e === u.DB.COMMANDS && r.commands !== u.Ze.OLD_BUILT_INS) {
                if (
                    p({
                        type: e,
                        channel: t,
                        guild: n,
                        query: o,
                        isAtStart: !0,
                        options: r,
                    })
                ) {
                    m = {
                        type: e,
                        typeInfo: v,
                        query: o.substring(null != (g = null == (E = v.sentinel) ? void 0 : E.length) ? g : 0),
                    };
                    break;
                }
            } else if (e === u.DB.LEGACY_COMMANDS) {
                if (
                    p({
                        type: e,
                        channel: t,
                        guild: n,
                        query: o,
                        isAtStart: s,
                        options: r,
                    })
                ) {
                    m = {
                        type: e,
                        typeInfo: v,
                        query: o,
                    };
                    break;
                }
            } else if (e === u.DB.EMOJIS_AND_STICKERS) {
                if (
                    (null != a && a.length > 0 && (0, l.K)(d.Vl.AutocompleteTyped),
                    null != a &&
                        p({
                            type: e,
                            channel: t,
                            guild: n,
                            query: a,
                            isAtStart: s,
                            options: r,
                        }))
                ) {
                    m = {
                        type: e,
                        typeInfo: v,
                        query: a.substring(null != (b = null == (y = v.sentinel) ? void 0 : y.length) ? b : 0),
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
                    isAtStart: s,
                    options: r,
                })
            ) {
                m = {
                    type: e,
                    typeInfo: v,
                    query: a.substring(null != (O = null == (A = v.sentinel) ? void 0 : A.length) ? O : 0),
                };
                break;
            }
        }
    }
    return null == m ? null : ((m.query = m.query.toLocaleLowerCase()), m);
}

function h(e, t) {
    let n;
    if (null == t || null == e) return null;
    if (null != e.choices || e.autocomplete) n = u.DB.CHOICES;
    else
        switch (e.type) {
            case a.n4.BOOLEAN:
                n = u.DB.CHOICES;
                break;
            case a.n4.CHANNEL:
                n = u.DB.CHANNELS;
                break;
            case a.n4.ROLE:
            case a.n4.USER:
            case a.n4.MENTIONABLE:
                n = u.DB.MENTIONS;
                break;
            default:
                return null;
        }
    let r = c.a[n];
    return {
        type: n,
        typeInfo: r,
        query: t,
    };
}
