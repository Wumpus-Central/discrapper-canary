n.d(t, {
    Z: () => F,
    d: () => H,
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
    d = n(237992),
    f = n(367907),
    p = n(465343),
    _ = n(339085),
    m = n(633302),
    h = n(603721),
    g = n(188597),
    E = n(3148),
    b = n(48854),
    y = n(346479),
    O = n(706454),
    v = n(430824),
    S = n(117530),
    I = n(594174),
    T = n(403182),
    A = n(823379),
    C = n(861990),
    N = n(555573),
    P = n(160062),
    R = n(456007),
    w = n(10718),
    D = n(998698),
    x = n(895924),
    L = n(581364),
    j = n(981631),
    M = n(959517),
    k = n(388032);
function U(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                U(e, t, n[t]);
            });
    }
    return e;
}
function Z(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
async function F(e) {
    var t, n, r, o, l, u, d, _, m, h, g, E, b, v, I, T, A;
    let {
        command: C,
        optionValues: w,
        context: M,
        commandTargetId: k,
        maxSizeCallback: U,
        commandOrigin: G = x.bB.CHAT,
        sectionName: Z,
        interactionLifecycleOptionsFactory: B = K,
        source: F,
    } = e;
    if (null == M.channel) return;
    let H = null != (r = D.Z.getSource(M.channel.id)) ? r : F,
        W = null != (o = D.Z.getCommandOrigin(M.channel.id)) ? o : G;
    null == M.autocomplete &&
        a.Z.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: M,
            command: C,
            commandOrigin: W,
        }),
        await y.Z.unarchiveThreadIfNecessary(M.channel.id);
    let q = [],
        X = [],
        Q = (0, L.D7)(W);
    if (null != C.options)
        for (let e of C.options) {
            let t;
            if (e.type === c.jw.SUB_COMMAND || e.type === c.jw.SUB_COMMAND_GROUP || !(e.name in w)) continue;
            let n = (null == (l = M.autocomplete) ? void 0 : l.name) === e.name || void 0;
            if (e.type === c.jw.STRING) {
                let r = null != (d = null == (u = R.li(w, e.name)) ? void 0 : u.trim()) ? d : "";
                if (
                    (null != e.choices
                        ? (t = (0, P.cT)(e.choices, r))
                        : e.autocomplete &&
                          (t = null != M.autocomplete && n ? M.autocomplete.query : (0, P.Wv)(M.channel.id, e.name, r)),
                    null == t && (t = r),
                    "" === t && null != M.autocomplete && !n)
                )
                    continue;
                i()(null != M.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')),
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n,
                    });
                continue;
            }
            if (e.type === c.jw.ATTACHMENT) {
                if (null != M.autocomplete) continue;
                let t = S.Z.getUpload(M.channel.id, e.name, Q);
                if (null == t) continue;
                let r = X.length;
                X.push(t),
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: n,
                    });
                continue;
            }
            let r = R.OU(w[e.name]);
            if (
                (i()(
                    null != M.autocomplete || 1 === r.length,
                    'Option "'.concat(e.name, '" expects a single option type'),
                ),
                null == r[0] && !n)
            )
                continue;
            let a =
                null != (_ = r[0])
                    ? _
                    : {
                          type: "text",
                          text: "",
                      };
            switch (e.type) {
                case c.jw.CHANNEL:
                    if ("channelMention" === a.type) t = a.channelId;
                    else if ("text" === a.type)
                        if ((0, L.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.K)(a.text, null == (m = M.guild) ? void 0 : m.id, M.channel.id);
                            i()(
                                (null == e ? void 0 : e.type) === "channelMention",
                                "Failed to resolve ".concat(a.text),
                            ),
                                (t = e.channelId);
                        }
                    break;
                case c.jw.ROLE:
                    if ("roleMention" === a.type) t = a.roleId;
                    else if ("text" === a.type)
                        if ((0, L.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.K)(a.text, null == (h = M.guild) ? void 0 : h.id, M.channel.id, {
                                allowUsers: !1,
                            });
                            i()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(a.text)),
                                (t = e.roleId);
                        }
                    else
                        "textMention" === a.type &&
                            "@everyone" === a.text &&
                            (t = null == (g = M.guild) ? void 0 : g.id);
                    break;
                case c.jw.USER:
                    if ("userMention" === a.type) t = a.userId;
                    else if ("text" === a.type)
                        if ((0, L.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.K)(a.text, null == (E = M.guild) ? void 0 : E.id, M.channel.id, {
                                allowRoles: !1,
                            });
                            i()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(a.text)),
                                (t = e.userId);
                        }
                    break;
                case c.jw.MENTIONABLE:
                    if ("userMention" === a.type) t = a.userId;
                    else if ("roleMention" === a.type) t = a.roleId;
                    else if ("textMention" === a.type && "@everyone" === a.text)
                        t = null == (b = M.guild) ? void 0 : b.id;
                    else if ("text" === a.type)
                        if ((0, L.BH)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.K)(a.text, null == (v = M.guild) ? void 0 : v.id, M.channel.id);
                            (null == e ? void 0 : e.type) === "userMention"
                                ? (t = e.userId)
                                : (null == e ? void 0 : e.type) === "roleMention"
                                  ? (t = e.roleId)
                                  : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text
                                    ? (t = null == (I = M.guild) ? void 0 : I.id)
                                    : i()(!1, "Failed to resolve ".concat(a.text));
                        }
                    break;
                case c.jw.BOOLEAN:
                    "text" === a.type && (t = (0, P.Kl)(a.text.trim()));
                    break;
                case c.jw.INTEGER:
                    if ("text" === a.type) {
                        let r = a.text.trim();
                        null != e.choices
                            ? (t = (0, P.l1)(e.choices, r))
                            : e.autocomplete &&
                              (t =
                                  null != M.autocomplete && n
                                      ? M.autocomplete.query
                                      : (0, P.xg)(M.channel.id, e.name, r)),
                            null == t && (t = Number(R.AS(O.default.locale, r)));
                    }
                    break;
                case c.jw.NUMBER:
                    if ("text" === a.type) {
                        let r = a.text.trim();
                        null != e.choices
                            ? (t = (0, P.l1)(e.choices, r))
                            : e.autocomplete &&
                              (t =
                                  null != M.autocomplete && n
                                      ? M.autocomplete.query
                                      : (0, P.xg)(M.channel.id, e.name, r)),
                            null == t && (t = Number(R.AS(O.default.locale, r)));
                    }
                    break;
                default:
                    throw Error("Unsupported option type: ".concat(e.type));
            }
            ("" !== t || null == M.autocomplete || n) &&
                (i()(null != M.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')),
                null != t &&
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n,
                    }));
        }
    if (null != C.subCommandPath)
        for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = C.subCommandPath[e];
            q = [
                {
                    type: n,
                    name: t,
                    options: q,
                },
            ];
        }
    if (null != C.execute)
        return (
            f.ZP.trackWithMetadata(j.rMx.APPLICATION_COMMAND_USED, {
                command_id: C.id,
                application_id: C.applicationId,
                command_type: C.type,
                location: z(W),
                source: H,
            }),
            C.execute(q, M)
        );
    if (
        C.inputType === x.iw.BUILT_IN ||
        C.inputType === x.iw.BUILT_IN_TEXT ||
        C.inputType === x.iw.BUILT_IN_INTEGRATION
    )
        return;
    let J = {
            version: C.version,
            id: null != (T = null == (t = C.rootCommand) ? void 0 : t.id) ? T : C.id,
            guild_id: C.guildId,
            name: null != (A = null == (n = C.rootCommand) ? void 0 : n.name) ? A : C.untranslatedName,
            type: C.type,
            options: q,
            application_command: C.rootCommand,
        },
        $ = () => {
            V(w);
        };
    null != k && (J.target_id = k),
        null != M.autocomplete
            ? (0, N.GV)(C, M, J)
            : (s.Z.clearAll(M.channel.id, Q),
              Y({
                  applicationId: C.applicationId,
                  data: J,
                  context: M,
                  attachments: X,
                  maxSizeCallback: U,
                  onMessageSuccess: $,
                  analytics_location: z(W),
                  sectionName: Z,
                  source: H,
                  interactionLifecycleOptions: await B(C, M, J),
              }));
}
let V = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    "emoji" === e.type
                        ? new m.dy({
                              names: [e.name.replaceAll(":", "")],
                              surrogates: "",
                              unicodeVersion: 6,
                          })
                        : "customEmoji" === e.type
                          ? _.ZP.getCustomEmojiById(e.emojiId)
                          : null,
                )
                .filter(A.lm),
        );
        t.length > 0 &&
            a.Z.dispatch({
                type: "EMOJI_TRACK_USAGE",
                emojiUsed: t,
            });
    },
    H = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? v.Z.getGuild(t.guild_id) : null,
            };
            Y({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await K(n.command, r, e.interactionData),
            });
        }
    },
    Y = (e) => {
        var t;
        let {
            applicationId: n,
            data: r,
            context: i,
            attachments: a,
            maxSizeCallback: o,
            onMessageSuccess: s,
            analytics_location: l,
            sectionName: u,
            source: d,
            interactionLifecycleOptions: f,
        } = e;
        if (null == i.channel) return;
        let { channel: p, guild: _ } = i,
            m = p.id,
            g = null == _ ? void 0 : _.id,
            E = {
                applicationId: n,
                channelId: m,
                guildId: g,
                data: r,
                nonce: null != (t = f.nonce) ? t : (0, b.r)(),
                attachments: a,
                maxSizeCallback: o,
                analytics_location: l,
                sectionName: u,
                source: d,
            };
        h.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: c.B8.APPLICATION_COMMAND,
                applicationId: n,
                channelId: m,
            },
        }),
            null != a && a.length > 0
                ? X(a, E.nonce, g, o).then((e) => {
                      e && W(E, s);
                  })
                : W(E, s);
    };
function W(e, t) {
    u.ZP.enqueue(
        {
            type: u.$V.COMMAND,
            message: e,
        },
        (n) => {
            var r;
            (0, g.Sg)(e.nonce, n, e.applicationId, e.channelId, null != (r = e.guildId) ? r : null),
                n.ok && null != t && t();
        },
    );
}
async function K(e, t, n) {
    var r;
    if (null == t.channel) return {};
    let i = w.Nk(
        {
            channel: t.channel,
            type: "channel",
        },
        n.type,
        e.applicationId,
    );
    if (null == i) return {};
    let s = null == (r = i.application) ? void 0 : r.bot;
    if (null == s && null != i.botId)
        try {
            await l.PR(i.botId);
        } catch (e) {}
    let u = B(
        G(
            {},
            (0, E.ZP)({
                channelId: t.channel.id,
                content: "",
                type: n.type === c.yU.CHAT ? j.uaV.CHAT_INPUT_COMMAND : j.uaV.CONTEXT_MENU_COMMAND,
                author:
                    null != s
                        ? s
                        : {
                              id: i.id,
                              username: i.name,
                              discriminator: j.fo$,
                              avatar: null,
                              bot: !0,
                          },
            }),
        ),
        {
            application: i.application,
            interaction: {
                id: n.id,
                name: n.name,
                name_localized: e.displayName,
                type: c.B8.APPLICATION_COMMAND,
                user: (0, E.pe)(I.default.getCurrentUser()),
            },
            interaction_data: n,
        },
    );
    return (
        o.Z.receiveMessage(t.channel.id, u, !0, {
            applicationId: e.applicationId,
            command: e,
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
                        type: "MESSAGE_SEND_FAILED",
                        messageId: u.id,
                        channelId: t.channel.id,
                        reason: l,
                    });
            },
        }
    );
}
function z(e) {
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
        largestUploadedFileSize: r,
    };
}
async function X(e, t, n, r) {
    let i = (0, T.dg)(n),
        a = (e) => {
            null == r || r(i, e),
                h.yr(t, j.evJ.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdS, { maxSize: (0, T.Ng)(i) }));
        },
        { totalSize: o, largestUploadedFileSize: s } = await q(e, !1);
    if (s > Math.max(i, M.Y1) || o > C.zz) return a(s), !1;
    try {
        await (0, d.Z)(e);
    } catch (n) {
        h.yr(t, void 0, k.intl.formatToPlainString(k.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: o, largestUploadedFileSize: s } = await q(e, !0)),
        (!e.some((e) => e.error === j.evJ.ENTITY_TOO_LARGE) && !(o > C.zz)) || (a(s), !1)
    );
}
