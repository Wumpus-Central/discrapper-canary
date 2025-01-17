r.d(n, {
    Z: function () {
        return Y;
    },
    d: function () {
        return K;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(390547);
var o = r(627494);
var l = r(757143);
var u = r(512722),
    c = r.n(u),
    d = r(570140),
    f = r(904245),
    _ = r(166459),
    h = r(232567),
    p = r(911969),
    m = r(673750),
    g = r(687294),
    E = r(367907),
    v = r(465343),
    I = r(339085),
    T = r(906411),
    b = r(633302),
    y = r(603721),
    S = r(188597),
    A = r(3148),
    N = r(48854),
    C = r(346479),
    R = r(706454),
    O = r(430824),
    D = r(117530),
    L = r(594174),
    x = r(403182),
    w = r(823379),
    P = r(861990),
    M = r(555573),
    k = r(160062),
    U = r(456007),
    B = r(10718),
    G = r(998698),
    Z = r(895924),
    F = r(581364),
    V = r(981631),
    j = r(959517),
    H = r(388032);
async function Y(e) {
    var n, r, i, a, s, o, l, u, f, h, m, g, I, T, b, y, S;
    let { command: A, optionValues: N, context: O, commandTargetId: L, maxSizeCallback: x, commandOrigin: w = Z.bB.CHAT, sectionName: P, interactionLifecycleOptionsFactory: B = Q, source: j, clientSupportsContextlessActivityLaunch: H } = e,
        Y = null !== (i = G.Z.getSource(O.channel.id)) && void 0 !== i ? i : j,
        K = null !== (a = G.Z.getCommandOrigin(O.channel.id)) && void 0 !== a ? a : w;
    null == O.autocomplete &&
        d.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: O,
            command: A,
            commandOrigin: K
        }),
        await C.Z.unarchiveThreadIfNecessary(O.channel.id);
    let q = [],
        J = [],
        $ = (0, F.D7)(K);
    if (null != A.options)
        for (let e of A.options) {
            if (e.type === p.jw.SUB_COMMAND || e.type === p.jw.SUB_COMMAND_GROUP || !(e.name in N)) continue;
            let n = (null === (s = O.autocomplete) || void 0 === s ? void 0 : s.name) === e.name || void 0,
                r = null;
            if (e.type === p.jw.STRING) {
                let i = null !== (l = null === (o = U.li(N, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== l ? l : '';
                null != e.choices ? (r = (0, k.cT)(e.choices, i)) : e.autocomplete && (r = null != O.autocomplete && n ? O.autocomplete.query : (0, k.Wv)(O.channel.id, e.name, i)),
                    null == r && (r = i),
                    c()(null != O.autocomplete || null != r, 'Option "'.concat(e.name, '" expects a value')),
                    null != r &&
                        q.push({
                            type: e.type,
                            name: e.name,
                            value: r,
                            focused: n
                        });
                continue;
            }
            if (e.type === p.jw.ATTACHMENT) {
                if (null != O.autocomplete) continue;
                let r = D.Z.getUpload(O.channel.id, e.name, $);
                if (null == r) continue;
                let i = J.length;
                J.push(r),
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: i,
                        focused: n
                    });
                continue;
            }
            let i = U.OU(N[e.name]);
            if ((c()(null != O.autocomplete || 1 === i.length, 'Option "'.concat(e.name, '" expects a single option type')), null == i[0] && !n)) continue;
            let a =
                null !== (u = i[0]) && void 0 !== u
                    ? u
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case p.jw.CHANNEL:
                    if ('channelMention' === a.type) r = a.channelId;
                    else if ('text' === a.type) {
                        if ((0, F.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (f = O.guild) || void 0 === f ? void 0 : f.id, O.channel.id);
                            c()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (r = e.channelId);
                        }
                    }
                    break;
                case p.jw.ROLE:
                    if ('roleMention' === a.type) r = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, F.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (h = O.guild) || void 0 === h ? void 0 : h.id, O.channel.id, { allowUsers: !1 });
                            c()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (r = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (r = null === (m = O.guild) || void 0 === m ? void 0 : m.id);
                    break;
                case p.jw.USER:
                    if ('userMention' === a.type) r = a.userId;
                    else if ('text' === a.type) {
                        if ((0, F.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (g = O.guild) || void 0 === g ? void 0 : g.id, O.channel.id, { allowRoles: !1 });
                            c()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (r = e.userId);
                        }
                    }
                    break;
                case p.jw.MENTIONABLE:
                    if ('userMention' === a.type) r = a.userId;
                    else if ('roleMention' === a.type) r = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) r = null === (I = O.guild) || void 0 === I ? void 0 : I.id;
                    else if ('text' === a.type) {
                        if ((0, F.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (T = O.guild) || void 0 === T ? void 0 : T.id, O.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (r = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (r = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (r = null === (b = O.guild) || void 0 === b ? void 0 : b.id) : c()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case p.jw.BOOLEAN:
                    'text' === a.type && (r = (0, k.Kl)(a.text.trim()));
                    break;
                case p.jw.INTEGER:
                    if ('text' === a.type) {
                        let i = a.text.trim();
                        null != e.choices ? (r = (0, k.l1)(e.choices, i)) : e.autocomplete && (r = null != O.autocomplete && n ? O.autocomplete.query : (0, k.xg)(O.channel.id, e.name, i)), null == r && (r = Number(U.AS(R.default.locale, i)));
                    }
                    break;
                case p.jw.NUMBER:
                    if ('text' === a.type) {
                        let i = a.text.trim();
                        null != e.choices ? (r = (0, k.l1)(e.choices, i)) : e.autocomplete && (r = null != O.autocomplete && n ? O.autocomplete.query : (0, k.xg)(O.channel.id, e.name, i)), null == r && (r = Number(U.AS(R.default.locale, i)));
                    }
                    break;
                default:
                    c()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            c()(null != O.autocomplete || null != r, 'Unexpected value for option "'.concat(e.name, '"')),
                null != r &&
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: n
                    });
        }
    if (null != A.subCommandPath)
        for (let e = A.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: r } = A.subCommandPath[e];
            q = [
                {
                    type: r,
                    name: n,
                    options: q
                }
            ];
        }
    if (null != A.execute)
        return (
            E.ZP.trackWithMetadata(V.rMx.APPLICATION_COMMAND_USED, {
                command_id: A.id,
                application_id: A.applicationId,
                command_type: A.type,
                location: X(K),
                source: Y
            }),
            A.execute(q, O)
        );
    if (A.inputType === Z.iw.BUILT_IN || A.inputType === Z.iw.BUILT_IN_TEXT || A.inputType === Z.iw.BUILT_IN_INTEGRATION) return;
    let ee = {
            version: A.version,
            id: null !== (y = null === (n = A.rootCommand) || void 0 === n ? void 0 : n.id) && void 0 !== y ? y : A.id,
            guild_id: A.guildId,
            name: null !== (S = null === (r = A.rootCommand) || void 0 === r ? void 0 : r.name) && void 0 !== S ? S : A.untranslatedName,
            type: A.type,
            options: q,
            application_command: A.rootCommand
        },
        et = () => {
            W(N);
        };
    null != L && (ee.target_id = L),
        H && (ee.client_supports_contextless_activity_launch = !0),
        null != O.autocomplete
            ? (0, M.GV)(A, O, ee)
            : (_.Z.clearAll(O.channel.id, $),
              z({
                  applicationId: A.applicationId,
                  data: ee,
                  context: O,
                  attachments: J,
                  maxSizeCallback: x,
                  onMessageSuccess: et,
                  analytics_location: X(K),
                  sectionName: P,
                  source: Y,
                  interactionLifecycleOptions: await B(A, O, ee)
              }));
}
let W = (e) => {
        let n = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new b.dy({
                              type: T.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? I.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(w.lm)
        );
        n.length > 0 &&
            d.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: n
            });
    },
    K = async (e, n, r) => {
        if (e.isCommandType() && null != e.interactionData && null != r.command) {
            let i = {
                channel: n,
                guild: null != n.guild_id ? O.Z.getGuild(n.guild_id) : null
            };
            z({
                applicationId: r.command.applicationId,
                data: e.interactionData,
                context: i,
                interactionLifecycleOptions: await Q(r.command, i, e.interactionData)
            });
        }
    },
    z = (e) => {
        var n;
        let { applicationId: r, data: i, context: a, attachments: s, maxSizeCallback: o, onMessageSuccess: l, analytics_location: u, sectionName: c, source: d, interactionLifecycleOptions: f } = e,
            { channel: _, guild: h } = a,
            m = _.id,
            g = null == h ? void 0 : h.id,
            E = {
                applicationId: r,
                channelId: m,
                guildId: g,
                data: i,
                nonce: null !== (n = f.nonce) && void 0 !== n ? n : (0, N.r)(),
                attachments: s,
                maxSizeCallback: o,
                analytics_location: u,
                sectionName: c,
                source: d
            };
        y.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: p.B8.APPLICATION_COMMAND,
                channelId: m
            }
        }),
            null != s
                ? $(s, E.nonce, g, o).then((e) => {
                      if (!!e) q(E, l);
                  })
                : q(E, l);
    };
function q(e, n) {
    m.ZP.enqueue(
        {
            type: m.$V.COMMAND,
            message: e
        },
        (r) => {
            var i;
            (0, S.Sg)(e.nonce, r, e.applicationId, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null), r.ok && null != n && n();
        }
    );
}
async function Q(e, n, r) {
    var i;
    let a = B.Nk(n.channel, r.type, e.applicationId);
    if (null == a) return {};
    let s = null === (i = a.application) || void 0 === i ? void 0 : i.bot;
    if (null == s && null != a.botId)
        try {
            await h.PR(a.botId);
        } catch {}
    let o = {
        ...(0, A.ZP)({
            channelId: n.channel.id,
            content: '',
            type: r.type === p.yU.CHAT ? V.uaV.CHAT_INPUT_COMMAND : V.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != s
                    ? s
                    : {
                          id: a.id,
                          username: a.name,
                          discriminator: V.fo$,
                          avatar: null,
                          bot: !0
                      }
        }),
        application: a.application,
        interaction: {
            id: r.id,
            name: r.name,
            name_localized: e.displayName,
            type: p.B8.APPLICATION_COMMAND,
            user: (0, A.pe)(L.default.getCurrentUser())
        },
        interaction_data: r
    };
    return (
        f.Z.receiveMessage(n.channel.id, o, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return o.id;
            },
            get nonce() {
                return o.id;
            },
            onCreate: (e) => {
                null != o.interaction && (o.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (r, i, a, s) => {
                null == i && null != r && f.Z.sendClydeError(n.channel.id, r);
                let l = i;
                null == l && null != s && (l = (0, S.A0)(s, e.applicationId)),
                    d.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: o.id,
                        channelId: n.channel.id,
                        reason: l
                    });
            }
        }
    );
}
function X(e) {
    switch (e) {
        case Z.bB.APPLICATION_LAUNCHER:
            return Z.Vh.APP_LAUNCHER;
        case Z.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return Z.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case Z.bB.IMAGE_RECS_MENU:
            return Z.Vh.IMAGE_RECS_MENU;
        case Z.bB.IMAGE_RECS_SUBMENU:
            return Z.Vh.IMAGE_RECS_SUBMENU;
        case Z.bB.ACTIVITY_INSTANCE_EMBED:
            return Z.Vh.ACTIVITY_INSTANCE_EMBED;
        case Z.bB.ACTIVITY_BOOKMARK_EMBED:
            return Z.Vh.ACTIVITY_BOOKMARK_EMBED;
        case Z.bB.MINI_SHELF:
            return Z.Vh.ACTIVITIES_MINI_SHELF;
        case Z.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return Z.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case Z.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return Z.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return Z.Vh.SLASH_UI;
    }
}
async function J(e, n) {
    let r = 0,
        i = 0;
    for (let s of e) {
        var a;
        let e = n ? (null !== (a = s.currentSize) && void 0 !== a ? a : 0) : await s.getSize();
        e > i && (i = e), (r += e);
    }
    return {
        totalSize: r,
        largestUploadedFileSize: i
    };
}
async function $(e, n, r, i) {
    let a = e,
        s = (0, x.dg)(r),
        o = (e) => {
            null == i || i(s, e), y.yr(n, V.evJ.ENTITY_TOO_LARGE, H.intl.formatToPlainString(H.t.fxEKdX, { maxSize: (0, x.Ng)(s) }));
        },
        { totalSize: l, largestUploadedFileSize: u } = await J(a, !1);
    if (u > Math.max(s, j.Y1) || l > P.zz) return o(u), !1;
    try {
        await (0, g.$)(a);
    } catch {
        y.yr(n, void 0, H.intl.formatToPlainString(H.t['9h1/1t'], { count: a.length }));
    }
    return ({ totalSize: l, largestUploadedFileSize: u } = await J(a, !0)), (!a.some((e) => e.error === V.evJ.ENTITY_TOO_LARGE) && !(l > P.zz)) || (o(u), !1);
}
