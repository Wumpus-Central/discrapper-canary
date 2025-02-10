n.d(t, {
    Z: () => B,
    d: () => F
}),
    n(653041),
    n(411104),
    n(47120),
    n(390547),
    n(627494),
    n(757143);
var i = n(512722),
    r = n.n(i),
    a = n(570140),
    s = n(904245),
    o = n(166459),
    l = n(232567),
    u = n(911969),
    c = n(673750),
    d = n(687294),
    f = n(367907),
    _ = n(465343),
    p = n(339085),
    h = n(906411),
    m = n(633302),
    g = n(603721),
    E = n(188597),
    v = n(3148),
    y = n(48854),
    I = n(346479),
    T = n(706454),
    b = n(430824),
    S = n(117530),
    A = n(594174),
    N = n(403182),
    C = n(823379),
    R = n(861990),
    O = n(555573),
    D = n(160062),
    L = n(456007),
    x = n(10718),
    P = n(998698),
    w = n(895924),
    M = n(581364),
    k = n(981631),
    U = n(959517),
    G = n(388032);
async function B(e) {
    var t, n, i, s, l, c, d, p, h, m, g, E, v, y, b, A, N;
    let { command: C, optionValues: R, context: x, commandTargetId: U, maxSizeCallback: G, commandOrigin: B = w.bB.CHAT, sectionName: F, interactionLifecycleOptionsFactory: j = H, source: W, clientSupportsContextlessActivityLaunch: K } = e;
    if (null == x.channel) return;
    let z = null !== (i = P.Z.getSource(x.channel.id)) && void 0 !== i ? i : W,
        q = null !== (s = P.Z.getCommandOrigin(x.channel.id)) && void 0 !== s ? s : B;
    null == x.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: x,
            command: C,
            commandOrigin: q
        }),
        await I.Z.unarchiveThreadIfNecessary(x.channel.id);
    let Q = [],
        X = [],
        J = (0, M.D7)(q);
    if (null != C.options)
        for (let e of C.options) {
            let t;
            if (e.type === u.jw.SUB_COMMAND || e.type === u.jw.SUB_COMMAND_GROUP || !(e.name in R)) continue;
            let n = (null === (l = x.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0;
            if (e.type === u.jw.STRING) {
                let i = null !== (d = null === (c = L.li(R, e.name)) || void 0 === c ? void 0 : c.trim()) && void 0 !== d ? d : '';
                if ((null != e.choices ? (t = (0, D.cT)(e.choices, i)) : e.autocomplete && (t = null != x.autocomplete && n ? x.autocomplete.query : (0, D.Wv)(x.channel.id, e.name, i)), null == t && (t = i), '' === t && null != x.autocomplete && !n)) continue;
                r()(null != x.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')),
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n
                    });
                continue;
            }
            if (e.type === u.jw.ATTACHMENT) {
                if (null != x.autocomplete) continue;
                let t = S.Z.getUpload(x.channel.id, e.name, J);
                if (null == t) continue;
                let i = X.length;
                X.push(t),
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: i,
                        focused: n
                    });
                continue;
            }
            let i = L.OU(R[e.name]);
            if ((r()(null != x.autocomplete || 1 === i.length, 'Option "'.concat(e.name, '" expects a single option type')), null == i[0] && !n)) continue;
            let a =
                null !== (p = i[0]) && void 0 !== p
                    ? p
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case u.jw.CHANNEL:
                    if ('channelMention' === a.type) t = a.channelId;
                    else if ('text' === a.type) {
                        if ((0, M.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (h = x.guild) || void 0 === h ? void 0 : h.id, x.channel.id);
                            r()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (t = e.channelId);
                        }
                    }
                    break;
                case u.jw.ROLE:
                    if ('roleMention' === a.type) t = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, M.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (m = x.guild) || void 0 === m ? void 0 : m.id, x.channel.id, { allowUsers: !1 });
                            r()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (t = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (t = null === (g = x.guild) || void 0 === g ? void 0 : g.id);
                    break;
                case u.jw.USER:
                    if ('userMention' === a.type) t = a.userId;
                    else if ('text' === a.type) {
                        if ((0, M.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (E = x.guild) || void 0 === E ? void 0 : E.id, x.channel.id, { allowRoles: !1 });
                            r()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (t = e.userId);
                        }
                    }
                    break;
                case u.jw.MENTIONABLE:
                    if ('userMention' === a.type) t = a.userId;
                    else if ('roleMention' === a.type) t = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) t = null === (v = x.guild) || void 0 === v ? void 0 : v.id;
                    else if ('text' === a.type) {
                        if ((0, M.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null === (y = x.guild) || void 0 === y ? void 0 : y.id, x.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (t = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (t = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (t = null === (b = x.guild) || void 0 === b ? void 0 : b.id) : r()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case u.jw.BOOLEAN:
                    'text' === a.type && (t = (0, D.Kl)(a.text.trim()));
                    break;
                case u.jw.INTEGER:
                    if ('text' === a.type) {
                        let i = a.text.trim();
                        null != e.choices ? (t = (0, D.l1)(e.choices, i)) : e.autocomplete && (t = null != x.autocomplete && n ? x.autocomplete.query : (0, D.xg)(x.channel.id, e.name, i)), null == t && (t = Number(L.AS(T.default.locale, i)));
                    }
                    break;
                case u.jw.NUMBER:
                    if ('text' === a.type) {
                        let i = a.text.trim();
                        null != e.choices ? (t = (0, D.l1)(e.choices, i)) : e.autocomplete && (t = null != x.autocomplete && n ? x.autocomplete.query : (0, D.xg)(x.channel.id, e.name, i)), null == t && (t = Number(L.AS(T.default.locale, i)));
                    }
                    break;
                default:
                    throw Error('Unsupported option type: '.concat(e.type));
            }
            ('' !== t || null == x.autocomplete || n) &&
                (r()(null != x.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')),
                null != t &&
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n
                    }));
        }
    if (null != C.subCommandPath)
        for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = C.subCommandPath[e];
            Q = [
                {
                    type: n,
                    name: t,
                    options: Q
                }
            ];
        }
    if (null != C.execute)
        return (
            f.ZP.trackWithMetadata(k.rMx.APPLICATION_COMMAND_USED, {
                command_id: C.id,
                application_id: C.applicationId,
                command_type: C.type,
                location: Y(q),
                source: z
            }),
            C.execute(Q, x)
        );
    if (C.inputType === w.iw.BUILT_IN || C.inputType === w.iw.BUILT_IN_TEXT || C.inputType === w.iw.BUILT_IN_INTEGRATION) return;
    let $ = {
            version: C.version,
            id: null !== (A = null === (t = C.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== A ? A : C.id,
            guild_id: C.guildId,
            name: null !== (N = null === (n = C.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== N ? N : C.untranslatedName,
            type: C.type,
            options: Q,
            application_command: C.rootCommand
        },
        ee = () => {
            Z(R);
        };
    null != U && ($.target_id = U),
        K && ($.client_supports_contextless_activity_launch = !0),
        null != x.autocomplete
            ? (0, O.GV)(C, x, $)
            : (o.Z.clearAll(x.channel.id, J),
              V({
                  applicationId: C.applicationId,
                  data: $,
                  context: x,
                  attachments: X,
                  maxSizeCallback: G,
                  onMessageSuccess: ee,
                  analytics_location: Y(q),
                  sectionName: F,
                  source: z,
                  interactionLifecycleOptions: await j(C, x, $)
              }));
}
let Z = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new m.dy({
                              type: h.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? p.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(C.lm)
        );
        t.length > 0 &&
            a.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    F = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let i = {
                channel: t,
                guild: null != t.guild_id ? b.Z.getGuild(t.guild_id) : null
            };
            V({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: i,
                interactionLifecycleOptions: await H(n.command, i, e.interactionData)
            });
        }
    },
    V = (e) => {
        var t;
        let { applicationId: n, data: i, context: r, attachments: a, maxSizeCallback: s, onMessageSuccess: o, analytics_location: l, sectionName: c, source: d, interactionLifecycleOptions: f } = e;
        if (null == r.channel) return;
        let { channel: _, guild: p } = r,
            h = _.id,
            m = null == p ? void 0 : p.id,
            E = {
                applicationId: n,
                channelId: h,
                guildId: m,
                data: i,
                nonce: null !== (t = f.nonce) && void 0 !== t ? t : (0, y.r)(),
                attachments: a,
                maxSizeCallback: s,
                analytics_location: l,
                sectionName: c,
                source: d
            };
        g.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: u.B8.APPLICATION_COMMAND,
                applicationId: n,
                channelId: h
            }
        }),
            null != a && a.length > 0
                ? K(a, E.nonce, m, s).then((e) => {
                      e && j(E, o);
                  })
                : j(E, o);
    };
function j(e, t) {
    c.ZP.enqueue(
        {
            type: c.$V.COMMAND,
            message: e
        },
        (n) => {
            var i;
            (0, E.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null), n.ok && null != t && t();
        }
    );
}
async function H(e, t, n) {
    var i;
    if (null == t.channel) return {};
    let r = x.Nk(
        {
            channel: t.channel,
            type: 'channel'
        },
        n.type,
        e.applicationId
    );
    if (null == r) return {};
    let o = null === (i = r.application) || void 0 === i ? void 0 : i.bot;
    if (null == o && null != r.botId)
        try {
            await l.PR(r.botId);
        } catch {}
    let c = {
        ...(0, v.ZP)({
            channelId: t.channel.id,
            content: '',
            type: n.type === u.yU.CHAT ? k.uaV.CHAT_INPUT_COMMAND : k.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != o
                    ? o
                    : {
                          id: r.id,
                          username: r.name,
                          discriminator: k.fo$,
                          avatar: null,
                          bot: !0
                      }
        }),
        application: r.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: u.B8.APPLICATION_COMMAND,
            user: (0, v.pe)(A.default.getCurrentUser())
        },
        interaction_data: n
    };
    return (
        s.Z.receiveMessage(t.channel.id, c, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return c.id;
            },
            get nonce() {
                return c.id;
            },
            onCreate: (e) => {
                null != c.interaction && (c.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (n, i, r, o) => {
                if (null == t.channel) return;
                null == i && null != n && s.Z.sendClydeError(t.channel.id, n);
                let l = i;
                null == l && null != o && (l = (0, E.A0)(o, e.applicationId)),
                    a.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: c.id,
                        channelId: t.channel.id,
                        reason: l
                    });
            }
        }
    );
}
function Y(e) {
    switch (e) {
        case w.bB.APPLICATION_LAUNCHER:
            return w.Vh.APP_LAUNCHER;
        case w.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return w.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case w.bB.IMAGE_RECS_MENU:
            return w.Vh.IMAGE_RECS_MENU;
        case w.bB.IMAGE_RECS_SUBMENU:
            return w.Vh.IMAGE_RECS_SUBMENU;
        case w.bB.ACTIVITY_INSTANCE_EMBED:
            return w.Vh.ACTIVITY_INSTANCE_EMBED;
        case w.bB.ACTIVITY_BOOKMARK_EMBED:
            return w.Vh.ACTIVITY_BOOKMARK_EMBED;
        case w.bB.MINI_SHELF:
            return w.Vh.ACTIVITIES_MINI_SHELF;
        case w.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return w.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case w.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return w.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return w.Vh.SLASH_UI;
    }
}
async function W(e, t) {
    let n = 0,
        i = 0;
    for (let a of e) {
        var r;
        let e = t ? (null !== (r = a.currentSize) && void 0 !== r ? r : 0) : await a.getSize();
        e > i && (i = e), (n += e);
    }
    return {
        totalSize: n,
        largestUploadedFileSize: i
    };
}
async function K(e, t, n, i) {
    let r = e,
        a = (0, N.dg)(n),
        s = (e) => {
            null == i || i(a, e), g.yr(t, k.evJ.ENTITY_TOO_LARGE, G.intl.formatToPlainString(G.t.fxEKdX, { maxSize: (0, N.Ng)(a) }));
        },
        { totalSize: o, largestUploadedFileSize: l } = await W(r, !1);
    if (l > Math.max(a, U.Y1) || o > R.zz) return s(l), !1;
    try {
        await (0, d.$)(r);
    } catch {
        g.yr(t, void 0, G.intl.formatToPlainString(G.t['9h1/1t'], { count: r.length }));
    }
    return ({ totalSize: o, largestUploadedFileSize: l } = await W(r, !0)), (!r.some((e) => e.error === k.evJ.ENTITY_TOO_LARGE) && !(o > R.zz)) || (s(l), !1);
}
