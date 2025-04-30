n.d(t, {
    Z: () => F,
    d: () => H
}),
    n(781311),
    n(539854),
    n(415506),
    n(388685),
    n(361932),
    n(187205),
    n(804061),
    n(704826),
    n(35282);
var r = n(512722),
    i = n.n(r),
    a = n(570140),
    o = n(904245),
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
    O = n(706454),
    v = n(430824),
    I = n(117530),
    S = n(594174),
    T = n(403182),
    A = n(823379),
    N = n(861990),
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
function V(e, t) {
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
async function F(e) {
    var t, n, r, o, l, u, d, p, h, m, g, E, b, v, S, T, A;
    let { command: N, optionValues: w, context: k, commandTargetId: j, maxSizeCallback: U, commandOrigin: G = L.bB.CHAT, sectionName: B, interactionLifecycleOptionsFactory: V = K, source: F, clientSupportsContextlessActivityLaunch: H } = e;
    if (null == k.channel) return;
    let W = null != (r = D.Z.getSource(k.channel.id)) ? r : F,
        q = null != (o = D.Z.getCommandOrigin(k.channel.id)) ? o : G;
    null == k.autocomplete &&
        a.Z.dispatch({
            type: 'APPLICATION_COMMAND_USED',
            context: k,
            command: N,
            commandOrigin: q
        }),
        await y.Z.unarchiveThreadIfNecessary(k.channel.id);
    let Q = [],
        X = [],
        J = (0, x.D7)(q);
    if (null != N.options)
        for (let e of N.options) {
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
            let a =
                null != (p = r[0])
                    ? p
                    : {
                          type: 'text',
                          text: ''
                      };
            switch (e.type) {
                case c.jw.CHANNEL:
                    if ('channelMention' === a.type) t = a.channelId;
                    else if ('text' === a.type)
                        if ((0, x.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null == (h = k.guild) ? void 0 : h.id, k.channel.id);
                            i()((null == e ? void 0 : e.type) === 'channelMention', 'Failed to resolve '.concat(a.text)), (t = e.channelId);
                        }
                    break;
                case c.jw.ROLE:
                    if ('roleMention' === a.type) t = a.roleId;
                    else if ('text' === a.type)
                        if ((0, x.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null == (m = k.guild) ? void 0 : m.id, k.channel.id, { allowUsers: !1 });
                            i()((null == e ? void 0 : e.type) === 'roleMention', 'Failed to resolve '.concat(a.text)), (t = e.roleId);
                        }
                    else 'textMention' === a.type && '@everyone' === a.text && (t = null == (g = k.guild) ? void 0 : g.id);
                    break;
                case c.jw.USER:
                    if ('userMention' === a.type) t = a.userId;
                    else if ('text' === a.type)
                        if ((0, x.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null == (E = k.guild) ? void 0 : E.id, k.channel.id, { allowRoles: !1 });
                            i()((null == e ? void 0 : e.type) === 'userMention', 'Failed to resolve '.concat(a.text)), (t = e.userId);
                        }
                    break;
                case c.jw.MENTIONABLE:
                    if ('userMention' === a.type) t = a.userId;
                    else if ('roleMention' === a.type) t = a.roleId;
                    else if ('textMention' === a.type && '@everyone' === a.text) t = null == (b = k.guild) ? void 0 : b.id;
                    else if ('text' === a.type)
                        if ((0, x.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, _.K)(a.text, null == (v = k.guild) ? void 0 : v.id, k.channel.id);
                            (null == e ? void 0 : e.type) === 'userMention' ? (t = e.userId) : (null == e ? void 0 : e.type) === 'roleMention' ? (t = e.roleId) : (null == e ? void 0 : e.type) === 'textMention' && '@everyone' === e.text ? (t = null == (S = k.guild) ? void 0 : S.id) : i()(!1, 'Failed to resolve '.concat(a.text));
                        }
                    break;
                case c.jw.BOOLEAN:
                    'text' === a.type && (t = (0, R.Kl)(a.text.trim()));
                    break;
                case c.jw.INTEGER:
                    if ('text' === a.type) {
                        let r = a.text.trim();
                        null != e.choices ? (t = (0, R.l1)(e.choices, r)) : e.autocomplete && (t = null != k.autocomplete && n ? k.autocomplete.query : (0, R.xg)(k.channel.id, e.name, r)), null == t && (t = Number(P.AS(O.default.locale, r)));
                    }
                    break;
                case c.jw.NUMBER:
                    if ('text' === a.type) {
                        let r = a.text.trim();
                        null != e.choices ? (t = (0, R.l1)(e.choices, r)) : e.autocomplete && (t = null != k.autocomplete && n ? k.autocomplete.query : (0, R.xg)(k.channel.id, e.name, r)), null == t && (t = Number(P.AS(O.default.locale, r)));
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
    if (null != N.subCommandPath)
        for (let e = N.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = N.subCommandPath[e];
            Q = [
                {
                    type: n,
                    name: t,
                    options: Q
                }
            ];
        }
    if (null != N.execute)
        return (
            f.ZP.trackWithMetadata(M.rMx.APPLICATION_COMMAND_USED, {
                command_id: N.id,
                application_id: N.applicationId,
                command_type: N.type,
                location: z(q),
                source: W
            }),
            N.execute(Q, k)
        );
    if (N.inputType === L.iw.BUILT_IN || N.inputType === L.iw.BUILT_IN_TEXT || N.inputType === L.iw.BUILT_IN_INTEGRATION) return;
    let $ = {
            version: N.version,
            id: null != (T = null == (t = N.rootCommand) ? void 0 : t.id) ? T : N.id,
            guild_id: N.guildId,
            name: null != (A = null == (n = N.rootCommand) ? void 0 : n.name) ? A : N.untranslatedName,
            type: N.type,
            options: Q,
            application_command: N.rootCommand
        },
        ee = () => {
            Z(w);
        };
    null != j && ($.target_id = j),
        H && ($.client_supports_contextless_activity_launch = !0),
        null != k.autocomplete
            ? (0, C.GV)(N, k, $)
            : (s.Z.clearAll(k.channel.id, J),
              Y({
                  applicationId: N.applicationId,
                  data: $,
                  context: k,
                  attachments: X,
                  maxSizeCallback: U,
                  onMessageSuccess: ee,
                  analytics_location: z(q),
                  sectionName: B,
                  source: W,
                  interactionLifecycleOptions: await V(N, k, $)
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
                .filter(A.lm)
        );
        t.length > 0 &&
            a.Z.dispatch({
                type: 'EMOJI_TRACK_USAGE',
                emojiUsed: t
            });
    },
    H = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? v.Z.getGuild(t.guild_id) : null
            };
            Y({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await K(n.command, r, e.interactionData)
            });
        }
    },
    Y = (e) => {
        var t;
        let { applicationId: n, data: r, context: i, attachments: a, maxSizeCallback: o, onMessageSuccess: s, analytics_location: l, sectionName: u, source: d, interactionLifecycleOptions: f } = e;
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
                attachments: a,
                maxSizeCallback: o,
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
            null != a && a.length > 0
                ? Q(a, E.nonce, g, o).then((e) => {
                      e && W(E, s);
                  })
                : W(E, s);
    };
function W(e, t) {
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
    let u = V(
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
        o.Z.receiveMessage(t.channel.id, u, !0, {
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
                null == r && null != n && o.Z.sendClydeError(t.channel.id, n);
                let l = r;
                null == l && null != s && (l = (0, g.A0)(s, e.applicationId)),
                    a.Z.dispatch({
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
    for (let a of e) {
        var i;
        let e = t ? (null != (i = a.currentSize) ? i : 0) : await a.getSize();
        e > r && (r = e), (n += e);
    }
    return {
        totalSize: n,
        largestUploadedFileSize: r
    };
}
async function Q(e, t, n, r) {
    let i = e,
        a = (0, T.dg)(n),
        o = (e) => {
            null == r || r(a, e), m.yr(t, M.evJ.ENTITY_TOO_LARGE, j.intl.formatToPlainString(j.t.fxEKdX, { maxSize: (0, T.Ng)(a) }));
        },
        { totalSize: s, largestUploadedFileSize: l } = await q(i, !1);
    if (l > Math.max(a, k.Y1) || s > N.zz) return o(l), !1;
    try {
        await (0, d.$)(i);
    } catch (e) {
        m.yr(t, void 0, j.intl.formatToPlainString(j.t['9h1/1t'], { count: i.length }));
    }
    return ({ totalSize: s, largestUploadedFileSize: l } = await q(i, !0)), (!i.some((e) => e.error === M.evJ.ENTITY_TOO_LARGE) && !(s > N.zz)) || (o(l), !1);
}
