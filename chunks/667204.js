r.d(n, {
    Z: function () {
        return W;
    },
    d: function () {
        return z;
    }
});
var i = r(653041);
var a = r(411104);
var o = r(47120);
var s = r(390547);
var l = r(627494);
var u = r(757143);
var c = r(512722),
    d = r.n(c),
    f = r(570140),
    p = r(904245),
    h = r(166459),
    _ = r(232567),
    m = r(911969),
    g = r(673750),
    E = r(687294),
    v = r(367907),
    y = r(465343),
    b = r(339085),
    I = r(906411),
    T = r(633302),
    S = r(603721),
    A = r(188597),
    C = r(3148),
    N = r(48854),
    R = r(346479),
    O = r(706454),
    D = r(430824),
    L = r(117530),
    x = r(594174),
    w = r(403182),
    P = r(823379),
    M = r(861990),
    k = r(555573),
    U = r(160062),
    B = r(456007),
    G = r(10718),
    Z = r(998698),
    F = r(895924),
    V = r(581364),
    j = r(981631),
    H = r(959517),
    Y = r(388032);
async function W(e) {
    var n, r, i, a, o, s, l, u, c, p, _, g, E, b, I, T, S;
    let { command: A, optionValues: C, context: N, commandTargetId: D, maxSizeCallback: x, commandOrigin: w = F.bB.CHAT, sectionName: P, interactionLifecycleOptionsFactory: M = X, source: G, clientSupportsContextlessActivityLaunch: H } = e;
    if (null == N.channel) return;
    let Y = null !== (i = Z.Z.getSource(N.channel.id)) && void 0 !== i ? i : G,
        W = null !== (a = Z.Z.getCommandOrigin(N.channel.id)) && void 0 !== a ? a : w;
    null == N.autocomplete &&
        f.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: N,
            command: A,
            commandOrigin: W
        }),
        await R.Z.unarchiveThreadIfNecessary(N.channel.id);
    let z = [],
        Q = [],
        $ = (0, V.D7)(W);
    if (null != A.options)
        for (let e of A.options) {
            let n;
            if (e.type === m.jw.SUB_COMMAND || e.type === m.jw.SUB_COMMAND_GROUP || !(e.name in C)) continue;
            let r = (null === (o = N.autocomplete) || void 0 === o ? void 0 : o.name) === e.name || void 0;
            if (e.type === m.jw.STRING) {
                let i = null !== (l = null === (s = B.li(C, e.name)) || void 0 === s ? void 0 : s.trim()) && void 0 !== l ? l : '';
                if ((null != e.choices ? (n = (0, U.cT)(e.choices, i)) : e.autocomplete && (n = null != N.autocomplete && r ? N.autocomplete.query : (0, U.Wv)(N.channel.id, e.name, i)), null == n && (n = i), '' === n && null != N.autocomplete && !r)) continue;
                d()(null != N.autocomplete || null != n, 'Option "'.concat(e.name, '" expects a value')),
                    z.push({
                        type: e.type,
                        name: e.name,
                        value: n,
                        focused: r
                    });
                continue;
            }
            if (e.type === m.jw.ATTACHMENT) {
                if (null != N.autocomplete) continue;
                let n = L.Z.getUpload(N.channel.id, e.name, $);
                if (null == n) continue;
                let i = Q.length;
                Q.push(n),
                    z.push({
                        type: e.type,
                        name: e.name,
                        value: i,
                        focused: r
                    });
                continue;
            }
            let i = B.OU(C[e.name]);
            if ((d()(null != N.autocomplete || 1 === i.length, 'Option "'.concat(e.name, '" expects a single option type')), null == i[0] && !r)) continue;
            let a =
                null !== (u = i[0]) && void 0 !== u
                    ? u
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case m.jw.CHANNEL:
                    if ('channelMention' === a.type) n = a.channelId;
                    else if ('text' === a.type) {
                        if ((0, V.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, y.K)(a.text, null === (c = N.guild) || void 0 === c ? void 0 : c.id, N.channel.id);
                            d()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (n = e.channelId);
                        }
                    }
                    break;
                case m.jw.ROLE:
                    if ('roleMention' === a.type) n = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, V.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, y.K)(a.text, null === (p = N.guild) || void 0 === p ? void 0 : p.id, N.channel.id, { allowUsers: !1 });
                            d()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (n = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (n = null === (_ = N.guild) || void 0 === _ ? void 0 : _.id);
                    break;
                case m.jw.USER:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('text' === a.type) {
                        if ((0, V.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, y.K)(a.text, null === (g = N.guild) || void 0 === g ? void 0 : g.id, N.channel.id, { allowRoles: !1 });
                            d()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (n = e.userId);
                        }
                    }
                    break;
                case m.jw.MENTIONABLE:
                    if ('userMention' === a.type) n = a.userId;
                    else if ('roleMention' === a.type) n = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) n = null === (E = N.guild) || void 0 === E ? void 0 : E.id;
                    else if ('text' === a.type) {
                        if ((0, V.BH)(a.text)) n = a.text.trim();
                        else {
                            let e = (0, y.K)(a.text, null === (b = N.guild) || void 0 === b ? void 0 : b.id, N.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (n = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (n = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (n = null === (I = N.guild) || void 0 === I ? void 0 : I.id) : d()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case m.jw.BOOLEAN:
                    'text' === a.type && (n = (0, U.Kl)(a.text.trim()));
                    break;
                case m.jw.INTEGER:
                    if ('text' === a.type) {
                        let i = a.text.trim();
                        null != e.choices ? (n = (0, U.l1)(e.choices, i)) : e.autocomplete && (n = null != N.autocomplete && r ? N.autocomplete.query : (0, U.xg)(N.channel.id, e.name, i)), null == n && (n = Number(B.AS(O.default.locale, i)));
                    }
                    break;
                case m.jw.NUMBER:
                    if ('text' === a.type) {
                        let i = a.text.trim();
                        null != e.choices ? (n = (0, U.l1)(e.choices, i)) : e.autocomplete && (n = null != N.autocomplete && r ? N.autocomplete.query : (0, U.xg)(N.channel.id, e.name, i)), null == n && (n = Number(B.AS(O.default.locale, i)));
                    }
                    break;
                default:
                    throw Error('Unsupported option type: '.concat(e.type));
            }
            if ('' !== n || null == N.autocomplete || !!r)
                d()(null != N.autocomplete || null != n, 'Unexpected value for option "'.concat(e.name, '"')),
                    null != n &&
                        z.push({
                            type: e.type,
                            name: e.name,
                            value: n,
                            focused: r
                        });
        }
    if (null != A.subCommandPath)
        for (let e = A.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: r } = A.subCommandPath[e];
            z = [
                {
                    type: r,
                    name: n,
                    options: z
                }
            ];
        }
    if (null != A.execute)
        return (
            v.ZP.trackWithMetadata(j.rMx.APPLICATION_COMMAND_USED, {
                command_id: A.id,
                application_id: A.applicationId,
                command_type: A.type,
                location: J(W),
                source: Y
            }),
            A.execute(z, N)
        );
    if (A.inputType === F.iw.BUILT_IN || A.inputType === F.iw.BUILT_IN_TEXT || A.inputType === F.iw.BUILT_IN_INTEGRATION) return;
    let ee = {
            version: A.version,
            id: null !== (T = null === (n = A.rootCommand) || void 0 === n ? void 0 : n.id) && void 0 !== T ? T : A.id,
            guild_id: A.guildId,
            name: null !== (S = null === (r = A.rootCommand) || void 0 === r ? void 0 : r.name) && void 0 !== S ? S : A.untranslatedName,
            type: A.type,
            options: z,
            application_command: A.rootCommand
        },
        et = () => {
            K(C);
        };
    null != D && (ee.target_id = D),
        H && (ee.client_supports_contextless_activity_launch = !0),
        null != N.autocomplete
            ? (0, k.GV)(A, N, ee)
            : (h.Z.clearAll(N.channel.id, $),
              q({
                  applicationId: A.applicationId,
                  data: ee,
                  context: N,
                  attachments: Q,
                  maxSizeCallback: x,
                  onMessageSuccess: et,
                  analytics_location: J(W),
                  sectionName: P,
                  source: Y,
                  interactionLifecycleOptions: await M(A, N, ee)
              }));
}
let K = (e) => {
        let n = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new T.dy({
                              type: I.B.UNICODE,
                              names: [e.name.replaceAll(':', '')],
                              surrogates: ''
                          })
                        : 'customEmoji' === e.type
                          ? b.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(P.lm)
        );
        n.length > 0 &&
            f.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: n
            });
    },
    z = async (e, n, r) => {
        if (e.isCommandType() && null != e.interactionData && null != r.command) {
            let i = {
                channel: n,
                guild: null != n.guild_id ? D.Z.getGuild(n.guild_id) : null
            };
            q({
                applicationId: r.command.applicationId,
                data: e.interactionData,
                context: i,
                interactionLifecycleOptions: await X(r.command, i, e.interactionData)
            });
        }
    },
    q = (e) => {
        var n;
        let { applicationId: r, data: i, context: a, attachments: o, maxSizeCallback: s, onMessageSuccess: l, analytics_location: u, sectionName: c, source: d, interactionLifecycleOptions: f } = e;
        if (null == a.channel) return;
        let { channel: p, guild: h } = a,
            _ = p.id,
            g = null == h ? void 0 : h.id,
            E = {
                applicationId: r,
                channelId: _,
                guildId: g,
                data: i,
                nonce: null !== (n = f.nonce) && void 0 !== n ? n : (0, N.r)(),
                attachments: o,
                maxSizeCallback: s,
                analytics_location: u,
                sectionName: c,
                source: d
            };
        S.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: m.B8.APPLICATION_COMMAND,
                applicationId: r,
                channelId: _
            }
        }),
            null != o && o.length > 0
                ? ee(o, E.nonce, g, s).then((e) => {
                      if (!!e) Q(E, l);
                  })
                : Q(E, l);
    };
function Q(e, n) {
    g.ZP.enqueue(
        {
            type: g.$V.COMMAND,
            message: e
        },
        (r) => {
            var i;
            (0, A.Sg)(e.nonce, r, e.applicationId, e.channelId, null !== (i = e.guildId) && void 0 !== i ? i : null), r.ok && null != n && n();
        }
    );
}
async function X(e, n, r) {
    var i;
    if (null == n.channel) return {};
    let a = G.Nk(
        {
            channel: n.channel,
            type: 'channel'
        },
        r.type,
        e.applicationId
    );
    if (null == a) return {};
    let o = null === (i = a.application) || void 0 === i ? void 0 : i.bot;
    if (null == o && null != a.botId)
        try {
            await _.PR(a.botId);
        } catch {}
    let s = {
        ...(0, C.ZP)({
            channelId: n.channel.id,
            content: '',
            type: r.type === m.yU.CHAT ? j.uaV.CHAT_INPUT_COMMAND : j.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != o
                    ? o
                    : {
                          id: a.id,
                          username: a.name,
                          discriminator: j.fo$,
                          avatar: null,
                          bot: !0
                      }
        }),
        application: a.application,
        interaction: {
            id: r.id,
            name: r.name,
            name_localized: e.displayName,
            type: m.B8.APPLICATION_COMMAND,
            user: (0, C.pe)(x.default.getCurrentUser())
        },
        interaction_data: r
    };
    return (
        p.Z.receiveMessage(n.channel.id, s, !0, {
            applicationId: e.applicationId,
            command: e
        }),
        {
            get messageId() {
                return s.id;
            },
            get nonce() {
                return s.id;
            },
            onCreate: (e) => {
                null != s.interaction && (s.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (r, i, a, o) => {
                if (null == n.channel) return;
                null == i && null != r && p.Z.sendClydeError(n.channel.id, r);
                let l = i;
                null == l && null != o && (l = (0, A.A0)(o, e.applicationId)),
                    f.Z.dispatch({
                        type: 'MESSAGE_SEND_FAILED',
                        messageId: s.id,
                        channelId: n.channel.id,
                        reason: l
                    });
            }
        }
    );
}
function J(e) {
    switch (e) {
        case F.bB.APPLICATION_LAUNCHER:
            return F.Vh.APP_LAUNCHER;
        case F.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return F.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case F.bB.IMAGE_RECS_MENU:
            return F.Vh.IMAGE_RECS_MENU;
        case F.bB.IMAGE_RECS_SUBMENU:
            return F.Vh.IMAGE_RECS_SUBMENU;
        case F.bB.ACTIVITY_INSTANCE_EMBED:
            return F.Vh.ACTIVITY_INSTANCE_EMBED;
        case F.bB.ACTIVITY_BOOKMARK_EMBED:
            return F.Vh.ACTIVITY_BOOKMARK_EMBED;
        case F.bB.MINI_SHELF:
            return F.Vh.ACTIVITIES_MINI_SHELF;
        case F.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return F.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case F.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return F.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return F.Vh.SLASH_UI;
    }
}
async function $(e, n) {
    let r = 0,
        i = 0;
    for (let o of e) {
        var a;
        let e = n ? (null !== (a = o.currentSize) && void 0 !== a ? a : 0) : await o.getSize();
        e > i && (i = e), (r += e);
    }
    return {
        totalSize: r,
        largestUploadedFileSize: i
    };
}
async function ee(e, n, r, i) {
    let a = e,
        o = (0, w.dg)(r),
        s = (e) => {
            null == i || i(o, e), S.yr(n, j.evJ.ENTITY_TOO_LARGE, Y.intl.formatToPlainString(Y.t.fxEKdX, { maxSize: (0, w.Ng)(o) }));
        },
        { totalSize: l, largestUploadedFileSize: u } = await $(a, !1);
    if (u > Math.max(o, H.Y1) || l > M.zz) return s(u), !1;
    try {
        await (0, E.$)(a);
    } catch {
        S.yr(n, void 0, Y.intl.formatToPlainString(Y.t['9h1/1t'], { count: a.length }));
    }
    return ({ totalSize: l, largestUploadedFileSize: u } = await $(a, !0)), (!a.some((e) => e.error === j.evJ.ENTITY_TOO_LARGE) && !(l > M.zz)) || (s(u), !1);
}
