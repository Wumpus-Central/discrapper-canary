n.d(t, {
    Z: () => V,
    d: () => H
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
    h = n(633302),
    m = n(603721),
    g = n(188597),
    E = n(3148),
    b = n(48854),
    y = n(346479),
    v = n(706454),
    O = n(430824),
    I = n(117530),
    S = n(594174),
    T = n(403182),
    N = n(823379),
    A = n(861990),
    C = n(555573),
    R = n(160062),
    P = n(456007),
    w = n(10718),
    D = n(998698),
    L = n(895924),
    x = n(581364),
    M = n(981631),
    k = n(959517),
    j = n(388032);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
function B(e, t) {
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
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function V(e) {
    var t, n, r, a, l, u, d, p, h, m, g, E, b, O, S, T, N;
    let { command: A, optionValues: w, context: k, commandTargetId: j, maxSizeCallback: U, commandOrigin: G = L.bB.CHAT, sectionName: B, interactionLifecycleOptionsFactory: F = K, source: V, clientSupportsContextlessActivityLaunch: H } = e;
    if (null == k.channel) return;
    let Y = null != (r = D.Z.getSource(k.channel.id)) ? r : V,
        q = null != (a = D.Z.getCommandOrigin(k.channel.id)) ? a : G;
    null == k.autocomplete &&
        o.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: k,
            command: A,
            commandOrigin: q
        }),
        await y.Z.unarchiveThreadIfNecessary(k.channel.id);
    let Q = [],
        X = [],
        J = (0, x.D7)(q);
    if (null != A.options)
        for (let e of A.options) {
            let t;
            if (e.type === c.jw.SUB_COMMAND || e.type === c.jw.SUB_COMMAND_GROUP || !(e.name in w)) continue;
            let n = (null == (l = k.autocomplete) ? void 0 : l.name) === e.name || void 0;
            if (e.type === c.jw.STRING) {
                let r = null != (d = null == (u = P.li(w, e.name)) ? void 0 : u.trim()) ? d : '';
                if ((null != e.choices ? (t = (0, R.cT)(e.choices, r)) : e.autocomplete && (t = null != k.autocomplete && n ? k.autocomplete.query : (0, R.Wv)(k.channel.id, e.name, r)), null == t && (t = r), '' === t && null != k.autocomplete && !n)) continue;
                i()(null != k.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')),
                    Q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n
                    });
                continue;
            }
            if (e.type === c.jw.ATTACHMENT) {
                if (null != k.autocomplete) continue;
                let t = I.Z.getUpload(k.channel.id, e.name, J);
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
            let r = P.OU(w[e.name]);
            if ((i()(null != k.autocomplete || 1 === r.length, 'Option "'.concat(e.name, '" expects a single option type')), null == r[0] && !n)) continue;
            let o =
                null != (p = r[0])
                    ? p
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case c.jw.CHANNEL:
                    if ('channelMention' === o.type) t = o.channelId;
                    else if ('text' === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (h = k.guild) ? void 0 : h.id, k.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(o.text)), (t = e.channelId);
                        }
                    break;
                case c.jw.ROLE:
                    if ('roleMention' === o.type) t = o.roleId;
                    else if ('text' === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (m = k.guild) ? void 0 : m.id, k.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(o.text)), (t = e.roleId);
                        }
                    else 'textMention' === o.type && '@everyone' === o.text && (t = null == (g = k.guild) ? void 0 : g.id);
                    break;
                case c.jw.USER:
                    if ('userMention' === o.type) t = o.userId;
                    else if ('text' === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (E = k.guild) ? void 0 : E.id, k.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(o.text)), (t = e.userId);
                        }
                    break;
                case c.jw.MENTIONABLE:
                    if ('userMention' === o.type) t = o.userId;
                    else if ('roleMention' === o.type) t = o.roleId;
                    else if ('textMention' === o.type && '@everyone' === o.text) t = null == (b = k.guild) ? void 0 : b.id;
                    else if ('text' === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (O = k.guild) ? void 0 : O.id, k.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (t = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (t = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (t = null == (S = k.guild) ? void 0 : S.id) : i()(!1, 'Failed to resolve '.concat(o.text));
                        }
                    break;
                case c.jw.BOOLEAN:
                    'text' === o.type && (t = (0, R.Kl)(o.text.trim()));
                    break;
                case c.jw.INTEGER:
                    if ('text' === o.type) {
                        let r = o.text.trim();
                        null != e.choices ? (t = (0, R.l1)(e.choices, r)) : e.autocomplete && (t = null != k.autocomplete && n ? k.autocomplete.query : (0, R.xg)(k.channel.id, e.name, r)), null == t && (t = Number(P.AS(v.default.locale, r)));
                    }
                    break;
                case c.jw.NUMBER:
                    if ('text' === o.type) {
                        let r = o.text.trim();
                        null != e.choices ? (t = (0, R.l1)(e.choices, r)) : e.autocomplete && (t = null != k.autocomplete && n ? k.autocomplete.query : (0, R.xg)(k.channel.id, e.name, r)), null == t && (t = Number(P.AS(v.default.locale, r)));
                    }
                    break;
                default:
                    throw Error('Unsupported option type: '.concat(e.type));
            }
            ('' !== t || null == k.autocomplete || n) &&
                (i()(null != k.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')),
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
            f.ZP.trackWithMetadata(M.rMx.APPLICATION_COMMAND_USED, {
                command_id: A.id,
                application_id: A.applicationId,
                command_type: A.type,
                location: z(q),
                source: Y
            }),
            A.execute(Q, k)
        );
    if (A.inputType === L.iw.BUILT_IN || A.inputType === L.iw.BUILT_IN_TEXT || A.inputType === L.iw.BUILT_IN_INTEGRATION) return;
    let $ = {
            version: A.version,
            id: null != (T = null == (t = A.rootCommand) ? void 0 : t.id) ? T : A.id,
            guild_id: A.guildId,
            name: null != (N = null == (n = A.rootCommand) ? void 0 : n.name) ? N : A.untranslatedName,
            type: A.type,
            options: Q,
            application_command: A.rootCommand
        },
        ee = () => {
            Z(w);
        };
    null != j && ($.target_id = j),
        H && ($.client_supports_contextless_activity_launch = !0),
        null != k.autocomplete
            ? (0, C.GV)(A, k, $)
            : (s.Z.clearAll(k.channel.id, J),
              W({
                  applicationId: A.applicationId,
                  data: $,
                  context: k,
                  attachments: X,
                  maxSizeCallback: U,
                  onMessageSuccess: ee,
                  analytics_location: z(q),
                  sectionName: B,
                  source: Y,
                  interactionLifecycleOptions: await F(A, k, $)
              }));
}
let Z = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    'emoji' === e.type
                        ? new h.dy({
                              names: [e.name.replaceAll(':', '')],
                              surrogates: '',
                              unicodeVersion: 6
                          })
                        : 'customEmoji' === e.type
                          ? p.ZP.getCustomEmojiById(e.emojiId)
                          : null
                )
                .filter(N.lm)
        );
        t.length > 0 &&
            o.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    H = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? O.Z.getGuild(t.guild_id) : null
            };
            W({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await K(n.command, r, e.interactionData)
            });
        }
    },
    W = (e) => {
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
                nonce: null != (t = f.nonce) ? t : (0, b.r)(),
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
                ? Q(o, E.nonce, g, a).then((e) => {
                      e && Y(E, s);
                  })
                : Y(E, s);
    };
function Y(e, t) {
    u.ZP.enqueue(
        {
            type: u.$V.COMMAND,
            message: e
        },
        (n) => {
            var r;
            (0, g.Sg)(e.nonce, n, e.applicationId, e.channelId, null != (r = e.guildId) ? r : null), n.ok && null != t && t();
        }
    );
}
async function K(e, t, n) {
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
    let s = null == (r = i.application) ? void 0 : r.bot;
    if (null == s && null != i.botId)
        try {
            await l.PR(i.botId);
        } catch (e) {}
    let u = F(
        G(
            {},
            (0, E.ZP)({
                channelId: t.channel.id,
                content: '',
                type: n.type === c.yU.CHAT ? M.uaV.CHAT_INPUT_COMMAND : M.uaV.CONTEXT_MENU_COMMAND,
                author:
                    null != s
                        ? s
                        : {
                              id: i.id,
                              username: i.name,
                              discriminator: M.fo$,
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
                user: (0, E.pe)(S.default.getCurrentUser())
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
                null == l && null != s && (l = (0, g.A0)(s, e.applicationId)),
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
function z(e) {
    switch (e) {
        case L.bB.APPLICATION_LAUNCHER:
            return L.Vh.APP_LAUNCHER;
        case L.bB.APP_LAUNCHER_APPLICATION_VIEW:
            return L.Vh.APP_LAUNCHER_APPLICATION_VIEW;
        case L.bB.IMAGE_RECS_MENU:
            return L.Vh.IMAGE_RECS_MENU;
        case L.bB.IMAGE_RECS_SUBMENU:
            return L.Vh.IMAGE_RECS_SUBMENU;
        case L.bB.ACTIVITY_INSTANCE_EMBED:
            return L.Vh.ACTIVITY_INSTANCE_EMBED;
        case L.bB.ACTIVITY_BOOKMARK_EMBED:
            return L.Vh.ACTIVITY_BOOKMARK_EMBED;
        case L.bB.MINI_SHELF:
            return L.Vh.ACTIVITIES_MINI_SHELF;
        case L.bB.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return L.Vh.VC_TILE_ACTIVITY_SUGGESTION;
        case L.bB.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return L.Vh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return L.Vh.SLASH_UI;
    }
}
async function q(e, t) {
    let n = 0,
        r = 0;
    for (let o of e) {
        var i;
        let e = t ? (null != (i = o.currentSize) ? i : 0) : await o.getSize();
        e > r && (r = e), (n += e);
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    };
}
async function Q(e, t, n, r) {
    let i = e,
        o = (0, T.dg)(n),
        a = (e) => {
            null == r || r(o, e), m.yr(t, M.evJ.ENTITY_TOO_LARGE, j.NW.formatToPlainString(j.t.fxEKdX, { maxSize: (0, T.Ng)(o) }));
        },
        { totalSize: s, largestUploadedFileSize: l } = await q(i, !1);
    if (l > Math.max(o, k.Y1) || s > A.zz) return a(l), !1;
    try {
        await (0, d.$)(i);
    } catch (e) {
        m.yr(t, void 0, j.NW.formatToPlainString(j.t['9h1/1t'], { count: i.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: l } = await q(i, !0)), (!i.some((e) => e.error === M.evJ.ENTITY_TOO_LARGE) && !(s > A.zz)) || (a(l), !1);
}
