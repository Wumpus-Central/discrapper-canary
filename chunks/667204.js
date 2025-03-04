n.d(t, {
    Z: () => Z,
    d: () => W
}),
    n(566702),
    n(653041),
    n(411104),
    n(47120),
    n(13667),
    n(390547),
    n(627494),
    n(757143),
    n(301563);
var r = n(512722),
    i = n.n(r),
    o = n(570140),
    a = n(904245),
    s = n(166459),
    l = n(232567),
    c = n(911969),
    u = n(673750),
    d = n(687294),
    f = n(367907),
    _ = n(465343),
    p = n(339085),
    h = n(906411),
    g = n(633302),
    m = n(603721),
    E = n(188597),
    v = n(3148),
    b = n(48854),
    y = n(346479),
    O = n(706454),
    S = n(430824),
    I = n(117530),
    T = n(594174),
    N = n(403182),
    A = n(823379),
    C = n(861990),
    R = n(555573),
    P = n(160062),
    D = n(456007),
    w = n(10718),
    L = n(998698),
    x = n(895924),
    M = n(581364),
    k = n(981631),
    j = n(959517),
    U = n(388032);
function G(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function B(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                G(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function Z(e) {
    var t, n, r, a, l, u, d, p, h, g, m, E, v, b, S, T, N;
    let { command: A, optionValues: C, context: w, commandTargetId: j, maxSizeCallback: U, commandOrigin: G = x.bB.CHAT, sectionName: B, interactionLifecycleOptionsFactory: V = z, source: F, clientSupportsContextlessActivityLaunch: Z } = e;
    if (null == w.channel) return;
    let W = null !== (r = L.Z.getSource(w.channel.id)) && void 0 !== r ? r : F,
        K = null !== (a = L.Z.getCommandOrigin(w.channel.id)) && void 0 !== a ? a : G;
    null == w.autocomplete &&
        o.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: w,
            command: A,
            commandOrigin: K
        }),
        await y.Z.unarchiveThreadIfNecessary(w.channel.id);
    let Q = [],
        X = [],
        J = (0, M.D7)(K);
    if (null != A.options)
        for (let e of A.options) {
            let t;
            if (e.type === c.jw.SUB_COMMAND || e.type === c.jw.SUB_COMMAND_GROUP || !(e.name in C)) continue;
            let n = (null === (l = w.autocomplete) || void 0 === l ? void 0 : l.name) === e.name || void 0;
            if (e.type === c.jw.STRING) {
                let r = null !== (d = null === (u = D.li(C, e.name)) || void 0 === u ? void 0 : u.trim()) && void 0 !== d ? d : '';
                if ((null != e.choices ? (t = (0, P.cT)(e.choices, r)) : e.autocomplete && (t = null != w.autocomplete && n ? w.autocomplete.query : (0, P.Wv)(w.channel.id, e.name, r)), null == t && (t = r), '' === t && null != w.autocomplete && !n)) continue;
                i()(null != w.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')),
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n
                    });
                continue;
            }
            if (e.type === c.jw.ATTACHMENT) {
                if (null != w.autocomplete) continue;
                let t = I.Z.getUpload(w.channel.id, e.name, J);
                if (null == t) continue;
                let r = X.length;
                X.push(t),
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: n
                    });
                continue;
            }
            let r = D.OU(C[e.name]);
            if ((i()(null != w.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !n)) continue;
            let o =
                null !== (p = r[0]) && void 0 !== p
                    ? p
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case c.jw.CHANNEL:
                    if ('channelMention' === o.type) t = o.channelId;
                    else if ('text' === o.type) {
                        if ((0, M.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null === (h = w.guild) || void 0 === h ? void 0 : h.id, w.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(o.text)), (t = e.channelId);
                        }
                    }
                    break;
                case c.jw.ROLE:
                    if ('roleMention' === o.type) t = o.roleId;
                    else if ('text' === o.type) {
                        if ((0, M.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null === (g = w.guild) || void 0 === g ? void 0 : g.id, w.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(o.text)), (t = e.roleId);
                        }
                    } else 'textMention' === o.type && '@everyone' === o.text && (t = null === (m = w.guild) || void 0 === m ? void 0 : m.id);
                    break;
                case c.jw.USER:
                    if ('userMention' === o.type) t = o.userId;
                    else if ('text' === o.type) {
                        if ((0, M.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null === (E = w.guild) || void 0 === E ? void 0 : E.id, w.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(o.text)), (t = e.userId);
                        }
                    }
                    break;
                case c.jw.MENTIONABLE:
                    if ('userMention' === o.type) t = o.userId;
                    else if ('roleMention' === o.type) t = o.roleId;
                    else if ('textMention' === o.type && '@everyone' === o.text) t = null === (v = w.guild) || void 0 === v ? void 0 : v.id;
                    else if ('text' === o.type) {
                        if ((0, M.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null === (b = w.guild) || void 0 === b ? void 0 : b.id, w.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (t = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (t = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (t = null === (S = w.guild) || void 0 === S ? void 0 : S.id) : i()(!1, 'Failed to resolve '.concat(o.text));
                        }
                    }
                    break;
                case c.jw.BOOLEAN:
                    'text' === o.type && (t = (0, P.Kl)(o.text.trim()));
                    break;
                case c.jw.INTEGER:
                    if ('text' === o.type) {
                        let r = o.text.trim();
                        null != e.choices ? (t = (0, P.l1)(e.choices, r)) : e.autocomplete && (t = null != w.autocomplete && n ? w.autocomplete.query : (0, P.xg)(w.channel.id, e.name, r)), null == t && (t = Number(D.AS(O.default.locale, r)));
                    }
                    break;
                case c.jw.NUMBER:
                    if ('text' === o.type) {
                        let r = o.text.trim();
                        null != e.choices ? (t = (0, P.l1)(e.choices, r)) : e.autocomplete && (t = null != w.autocomplete && n ? w.autocomplete.query : (0, P.xg)(w.channel.id, e.name, r)), null == t && (t = Number(D.AS(O.default.locale, r)));
                    }
                    break;
                default:
                    throw Error('Unsupported option type: '.concat(e.type));
            }
            ('' !== t || null == w.autocomplete || n) &&
                (i()(null != w.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')),
                null != t &&
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n
                    }));
        }
    if (null != A.subCommandPath)
        for (let e = A.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = A.subCommandPath[e];
            Q = [
                {
                    type: n,
                    name: t,
                    options: Q
                }
            ];
        }
    if (null != A.execute)
        return (
            f.ZP.trackWithMetadata(k.rMx.APPLICATION_COMMAND_USED, {
                command_id: A.id,
                application_id: A.applicationId,
                command_type: A.type,
                location: q(K),
                source: W
            }),
            A.execute(Q, w)
        );
    if (A.inputType === x.iw.BUILT_IN || A.inputType === x.iw.BUILT_IN_TEXT || A.inputType === x.iw.BUILT_IN_INTEGRATION) return;
    let $ = {
            version: A.version,
            id: null !== (T = null === (t = A.rootCommand) || void 0 === t ? void 0 : t.id) && void 0 !== T ? T : A.id,
            guild_id: A.guildId,
            name: null !== (N = null === (n = A.rootCommand) || void 0 === n ? void 0 : n.name) && void 0 !== N ? N : A.untranslatedName,
            type: A.type,
            options: Q,
            application_command: A.rootCommand
        },
        ee = () => {
            H(C);
        };
    null != j && ($.target_id = j),
        Z && ($.client_supports_contextless_activity_launch = !0),
        null != w.autocomplete
            ? (0, R.GV)(A, w, $)
            : (s.Z.clearAll(w.channel.id, J),
              Y({
                  applicationId: A.applicationId,
                  data: $,
                  context: w,
                  attachments: X,
                  maxSizeCallback: U,
                  onMessageSuccess: ee,
                  analytics_location: q(K),
                  sectionName: B,
                  source: W,
                  interactionLifecycleOptions: await V(A, w, $)
              }));
}
let H = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new g.dy({
                              type: h.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? p.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(A.lm)
        );
        t.length > 0 &&
            o.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    W = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? S.Z.getGuild(t.guild_id) : null
            };
            Y({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await z(n.command, r, e.interactionData)
            });
        }
    },
    Y = (e) => {
        var t;
        let { applicationId: n, data: r, context: i, attachments: o, maxSizeCallback: a, onMessageSuccess: s, analytics_location: l, sectionName: u, source: d, interactionLifecycleOptions: f } = e;
        if (null == i.channel) return;
        let { channel: _, guild: p } = i,
            h = _.id,
            g = null == p ? void 0 : p.id,
            E = {
                applicationId: n,
                channelId: h,
                guildId: g,
                data: r,
                nonce: null !== (t = f.nonce) && void 0 !== t ? t : (0, b.r)(),
                attachments: o,
                maxSizeCallback: a,
                analytics_location: l,
                sectionName: u,
                source: d
            };
        m.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: c.B8.APPLICATION_COMMAND,
                applicationId: n,
                channelId: h
            }
        }),
            null != o && o.length > 0
                ? X(o, E.nonce, g, a).then((e) => {
                      e && K(E, s);
                  })
                : K(E, s);
    };
function K(e, t) {
    u.ZP.enqueue(
        {
            type: u.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, E.Sg)(e.nonce, n, e.applicationId, e.channelId, null !== (r = e.guildId) && void 0 !== r ? r : null), n.ok && null != t && t();
        }
    );
}
async function z(e, t, n) {
    var r;
    if (null == t.channel) return {};
    let i = w.Nk(
        {
            channel: t.channel,
            type: 'channel'
        },
        n.type,
        e.applicationId
    );
    if (null == i) return {};
    let s = null === (r = i.application) || void 0 === r ? void 0 : r.bot;
    if (null == s && null != i.botId)
        try {
            await l.PR(i.botId);
        } catch (e) {}
    let u = F(
        B(
            {},
            (0, v.ZP)({
                channelId: t.channel.id,
                content: '',
                type: n.type === c.yU.CHAT ? k.uaV.CHAT_INPUT_COMMAND : k.uaV.CONTEXT_MENU_COMMAND,
                author:
                    null != s
                        ? s
                        : {
                              id: i.id,
                              username: i.name,
                              discriminator: k.fo$,
                              avatar: null,
                              bot: !0
                          }
            })
        ),
        {
            application: i.application,
            interaction: {
                id: n.id,
                name: n.name,
                name_localized: e.displayName,
                type: c.B8.APPLICATION_COMMAND,
                user: (0, v.pe)(T.default.getCurrentUser())
            },
            interaction_data: n
        }
    );
    return (
        a.Z.receiveMessage(t.channel.id, u, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return u.id;
            },
            get nonce() {
                return u.id;
            },
            onCreate: (e) => {
                null != u.interaction && (u.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (n, r, i, s) => {
                if (null == t.channel) return;
                null == r && null != n && a.Z.sendClydeError(t.channel.id, n);
                let l = r;
                null == l && null != s && (l = (0, E.A0)(s, e.applicationId)),
                    o.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: u.id,
                        channelId: t.channel.id,
                        reason: l
                    });
            }
        }
    );
}
function q(e) {
    switch (e) {
        case x.bB.APPLICATION_LAUNCHER:
            return x.Vh.APP_LAUNCHER;
        case x.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return x.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case x.bB.IMAGE_RECS_MENU:
            return x.Vh.IMAGE_RECS_MENU;
        case x.bB.IMAGE_RECS_SUBMENU:
            return x.Vh.IMAGE_RECS_SUBMENU;
        case x.bB.ACTIVITY_INSTANCE_EMBED:
            return x.Vh.ACTIVITY_INSTANCE_EMBED;
        case x.bB.ACTIVITY_BOOKMARK_EMBED:
            return x.Vh.ACTIVITY_BOOKMARK_EMBED;
        case x.bB.MINI_SHELF:
            return x.Vh.ACTIVITIES_MINI_SHELF;
        case x.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return x.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case x.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return x.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return x.Vh.SLASH_UI;
    }
}
async function Q(e, t) {
    let n = 0,
        r = 0;
    for (let o of e) {
        var i;
        let e = t ? (null !== (i = o.currentSize) && void 0 !== i ? i : 0) : await o.getSize();
        e > r && (r = e), (n += e);
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    };
}
async function X(e, t, n, r) {
    let i = e,
        o = (0, N.dg)(n),
        a = (e) => {
            null == r || r(o, e), m.yr(t, k.evJ.ENTITY_TOO_LARGE, U.NW.formatToPlainString(U.t.fxEKdX, { maxSize: (0, N.Ng)(o) }));
        },
        { totalSize: s, largestUploadedFileSize: l } = await Q(i, !1);
    if (l > Math.max(o, j.Y1) || s > C.zz) return a(l), !1;
    try {
        await (0, d.$)(i);
    } catch (e) {
        m.yr(t, void 0, U.NW.formatToPlainString(U.t['9h1/1t'], { count: i.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: l } = await Q(i, !0)), (!i.some((e) => e.error === k.evJ.ENTITY_TOO_LARGE) && !(s > C.zz)) || (a(l), !1);
}
