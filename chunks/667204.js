r.d(n, {
    Z: function () {
        return q;
    },
    d: function () {
        return X;
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
    k = r(174212),
    U = r(456007),
    B = r(10718),
    G = r(998698),
    F = r(895924),
    Z = r(581364),
    V = r(689079),
    j = r(981631),
    H = r(959517),
    Y = r(388032);
let W = (e, n) => {
        var r;
        return null == e ? void 0 : null === (r = e.find((e) => e.displayName === n)) || void 0 === r ? void 0 : r.value;
    },
    K = function (e, n, r) {
        var i, a;
        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : (e) => e;
        if (e.name === (null === (i = r.autocomplete) || void 0 === i ? void 0 : i.name)) return r.autocomplete.query;
        if ('' === n) return null;
        let o = k.Z.getAutocompleteLastChoices(r.channel.id, e.name);
        return null != o ? (null !== (a = W(o, n)) && void 0 !== a ? a : s(n)) : s(n);
    },
    z = (e) => {
        let n = e.toLowerCase() === V.WO.toLowerCase(),
            r = e.toLowerCase() === V.Lu.toLowerCase();
        return n || r ? n : null;
    };
async function q(e) {
    var n, r, i, a, s, o, l, u, f, h, m, g, I, T, b, y, S;
    let { command: A, optionValues: N, context: O, commandTargetId: L, maxSizeCallback: x, commandOrigin: w = F.bB.CHAT, sectionName: P, interactionLifecycleOptionsFactory: k = ee, source: B } = e,
        V = null !== (i = G.Z.getSource(O.channel.id)) && void 0 !== i ? i : B,
        H = null !== (a = G.Z.getCommandOrigin(O.channel.id)) && void 0 !== a ? a : w;
    null == O.autocomplete &&
        d.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: O,
            command: A,
            commandOrigin: H
        }),
        await C.Z.unarchiveThreadIfNecessary(O.channel.id);
    let Y = [],
        q = [],
        X = (0, Z.D7)(H);
    if (null != A.options)
        for (let e of A.options) {
            if (e.type === p.jw.SUB_COMMAND || e.type === p.jw.SUB_COMMAND_GROUP || !(e.name in N)) continue;
            let n = (null === (s = O.autocomplete) || void 0 === s ? void 0 : s.name) === e.name || void 0,
                r = null;
            if (e.type === p.jw.STRING) {
                let i = null !== (l = null === (o = U.li(N, e.name)) || void 0 === o ? void 0 : o.trim()) && void 0 !== l ? l : '';
                (r = null != e.choices ? W(e.choices, i) : e.autocomplete ? K(e, i, O) : i),
                    c()(null != O.autocomplete || null != r, 'Option "'.concat(e.name, '" expects a value')),
                    null != r &&
                        Y.push({
                            type: e.type,
                            name: e.name,
                            value: r,
                            focused: n
                        });
                continue;
            }
            if (e.type === p.jw.ATTACHMENT) {
                if (null != O.autocomplete) continue;
                let r = D.Z.getUpload(O.channel.id, e.name, X);
                if (null == r) continue;
                let i = q.length;
                q.push(r),
                    Y.push({
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
                        if ((0, Z.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (f = O.guild) || void 0 === f ? void 0 : f.id, O.channel.id);
                            c()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (r = e.channelId);
                        }
                    }
                    break;
                case p.jw.ROLE:
                    if ('roleMention' === a.type) r = a.roleId;
                    else if ('text' === a.type) {
                        if ((0, Z.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (h = O.guild) || void 0 === h ? void 0 : h.id, O.channel.id, { allowUsers: !1 });
                            c()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (r = e.roleId);
                        }
                    } else 'textMention' === a.type && '@everyone' === a.text && (r = null === (m = O.guild) || void 0 === m ? void 0 : m.id);
                    break;
                case p.jw.USER:
                    if ('userMention' === a.type) r = a.userId;
                    else if ('text' === a.type) {
                        if ((0, Z.BH)(a.text)) r = a.text.trim();
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
                        if ((0, Z.BH)(a.text)) r = a.text.trim();
                        else {
                            let e = (0, v.K)(a.text, null === (T = O.guild) || void 0 === T ? void 0 : T.id, O.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (r = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (r = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (r = null === (b = O.guild) || void 0 === b ? void 0 : b.id) : c()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    }
                    break;
                case p.jw.BOOLEAN:
                    'text' === a.type && (r = z(a.text.trim()));
                    break;
                case p.jw.INTEGER:
                    if ('text' === a.type) {
                        let n = a.text.trim();
                        r = null != e.choices ? Number(W(e.choices, n)) : e.autocomplete ? K(e, n, O, Number) : Number(U.AS(R.default.locale, n));
                    }
                    break;
                case p.jw.NUMBER:
                    if ('text' === a.type) {
                        let n = a.text.trim();
                        r = null != e.choices ? Number(W(e.choices, n)) : e.autocomplete ? K(e, n, O, Number) : Number(U.AS(R.default.locale, n));
                    }
                    break;
                default:
                    c()(!1, 'Unsupported option type: '.concat(e.type));
                    continue;
            }
            c()(null != O.autocomplete || null != r, 'Unexpected value for option "'.concat(e.name, '"')),
                null != r &&
                    Y.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: n
                    });
        }
    if (null != A.subCommandPath)
        for (let e = A.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: r } = A.subCommandPath[e];
            Y = [
                {
                    type: r,
                    name: n,
                    options: Y
                }
            ];
        }
    if (null != A.execute)
        return (
            E.ZP.trackWithMetadata(j.rMx.APPLICATION_COMMAND_USED, {
                command_id: A.id,
                application_id: A.applicationId,
                command_type: A.type,
                location: et(H),
                source: V
            }),
            A.execute(Y, O)
        );
    if (A.inputType === F.iw.BUILT_IN || A.inputType === F.iw.BUILT_IN_TEXT || A.inputType === F.iw.BUILT_IN_INTEGRATION) return;
    let $ = {
            version: A.version,
            id: null !== (y = null === (n = A.rootCommand) || void 0 === n ? void 0 : n.id) && void 0 !== y ? y : A.id,
            guild_id: A.guildId,
            name: null !== (S = null === (r = A.rootCommand) || void 0 === r ? void 0 : r.name) && void 0 !== S ? S : A.untranslatedName,
            type: A.type,
            options: Y,
            application_command: A.rootCommand
        },
        en = () => {
            Q(N);
        };
    null != L && ($.target_id = L),
        null != O.autocomplete
            ? (0, M.GV)(A, O, $)
            : (_.Z.clearAll(O.channel.id, X),
              J({
                  applicationId: A.applicationId,
                  data: $,
                  context: O,
                  attachments: q,
                  maxSizeCallback: x,
                  onMessageSuccess: en,
                  analytics_location: et(H),
                  sectionName: P,
                  source: V,
                  interactionLifecycleOptions: await k(A, O, $)
              }));
}
let Q = (e) => {
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
    X = async (e, n, r) => {
        if (e.isCommandType() && null != e.interactionData && null != r.command) {
            let i = {
                channel: n,
                guild: null != n.guild_id ? O.Z.getGuild(n.guild_id) : null
            };
            J({
                applicationId: r.command.applicationId,
                data: e.interactionData,
                context: i,
                interactionLifecycleOptions: await ee(r.command, i, e.interactionData)
            });
        }
    },
    J = (e) => {
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
                ? er(s, E.nonce, g, o).then((e) => {
                      if (!!e) $(E, l);
                  })
                : $(E, l);
    };
function $(e, n) {
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
async function ee(e, n, r) {
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
            type: r.type === p.yU.CHAT ? j.uaV.CHAT_INPUT_COMMAND : j.uaV.CONTEXT_MENU_COMMAND,
            author:
                null != s
                    ? s
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
function et(e) {
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
async function en(e, n) {
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
async function er(e, n, r, i) {
    let a = e,
        s = (0, x.dg)(r),
        o = (e) => {
            null == i || i(s, e), y.yr(n, j.evJ.ENTITY_TOO_LARGE, Y.intl.formatToPlainString(Y.t.fxEKdX, { maxSize: (0, x.Ng)(s) }));
        },
        { totalSize: l, largestUploadedFileSize: u } = await en(a, !1);
    if (u > Math.max(s, H.Y1) || l > P.zz) return o(u), !1;
    try {
        await (0, g.$)(a);
    } catch {
        y.yr(n, void 0, Y.intl.formatToPlainString(Y.t['9h1/1t'], { count: a.length }));
    }
    return ({ totalSize: l, largestUploadedFileSize: u } = await en(a, !0)), (!a.some((e) => e.error === j.evJ.ENTITY_TOO_LARGE) && !(l > P.zz)) || (o(u), !1);
}
