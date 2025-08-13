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
    o = n(570140),
    a = n(904245),
    s = n(166459),
    l = n(232567),
    c = n(911969),
    u = n(673750),
    d = n(237992),
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
    T = n(594174),
    S = n(403182),
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
    j = n(959517),
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
function Z(e, t) {
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
    var t, n, r, a, l, u, d, p, h, m, g, E, b, v, T, S, A;
    let {
        command: N,
        optionValues: w,
        context: j,
        commandTargetId: k,
        maxSizeCallback: U,
        commandOrigin: G = L.bB.CHAT,
        sectionName: B,
        interactionLifecycleOptionsFactory: Z = K,
        source: F,
    } = e;
    if (null == j.channel) return;
    let H = null != (r = D.Z.getSource(j.channel.id)) ? r : F,
        W = null != (a = D.Z.getCommandOrigin(j.channel.id)) ? a : G;
    null == j.autocomplete &&
        o.Z.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: j,
            command: N,
            commandOrigin: W,
        }),
        await y.Z.unarchiveThreadIfNecessary(j.channel.id);
    let q = [],
        X = [],
        Q = (0, x.D7)(W);
    if (null != N.options)
        for (let e of N.options) {
            let t;
            if (e.type === c.jw.SUB_COMMAND || e.type === c.jw.SUB_COMMAND_GROUP || !(e.name in w)) continue;
            let n = (null == (l = j.autocomplete) ? void 0 : l.name) === e.name || void 0;
            if (e.type === c.jw.STRING) {
                let r = null != (d = null == (u = P.li(w, e.name)) ? void 0 : u.trim()) ? d : "";
                if (
                    (null != e.choices
                        ? (t = (0, R.cT)(e.choices, r))
                        : e.autocomplete &&
                          (t = null != j.autocomplete && n ? j.autocomplete.query : (0, R.Wv)(j.channel.id, e.name, r)),
                    null == t && (t = r),
                    "" === t && null != j.autocomplete && !n)
                )
                    continue;
                i()(null != j.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')),
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n,
                    });
                continue;
            }
            if (e.type === c.jw.ATTACHMENT) {
                if (null != j.autocomplete) continue;
                let t = I.Z.getUpload(j.channel.id, e.name, Q);
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
            let r = P.OU(w[e.name]);
            if (
                (i()(
                    null != j.autocomplete || 1 === r.length,
                    'Option "'.concat(e.name, '" expects a single option type'),
                ),
                null == r[0] && !n)
            )
                continue;
            let o =
                null != (p = r[0])
                    ? p
                    : {
                          type: "text",
                          text: "",
                      };
            switch (e.type) {
                case c.jw.CHANNEL:
                    if ("channelMention" === o.type) t = o.channelId;
                    else if ("text" === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (h = j.guild) ? void 0 : h.id, j.channel.id);
                            i()(
                                (null == e ? void 0 : e.type) === "channelMention",
                                "Failed to resolve ".concat(o.text),
                            ),
                                (t = e.channelId);
                        }
                    break;
                case c.jw.ROLE:
                    if ("roleMention" === o.type) t = o.roleId;
                    else if ("text" === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (m = j.guild) ? void 0 : m.id, j.channel.id, {
                                allowUsers: !1,
                            });
                            i()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(o.text)),
                                (t = e.roleId);
                        }
                    else
                        "textMention" === o.type &&
                            "@everyone" === o.text &&
                            (t = null == (g = j.guild) ? void 0 : g.id);
                    break;
                case c.jw.USER:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("text" === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (E = j.guild) ? void 0 : E.id, j.channel.id, {
                                allowRoles: !1,
                            });
                            i()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(o.text)),
                                (t = e.userId);
                        }
                    break;
                case c.jw.MENTIONABLE:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("roleMention" === o.type) t = o.roleId;
                    else if ("textMention" === o.type && "@everyone" === o.text)
                        t = null == (b = j.guild) ? void 0 : b.id;
                    else if ("text" === o.type)
                        if ((0, x.BH)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, _.K)(o.text, null == (v = j.guild) ? void 0 : v.id, j.channel.id);
                            (null == e ? void 0 : e.type) === "userMention"
                                ? (t = e.userId)
                                : (null == e ? void 0 : e.type) === "roleMention"
                                  ? (t = e.roleId)
                                  : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text
                                    ? (t = null == (T = j.guild) ? void 0 : T.id)
                                    : i()(!1, "Failed to resolve ".concat(o.text));
                        }
                    break;
                case c.jw.BOOLEAN:
                    "text" === o.type && (t = (0, R.Kl)(o.text.trim()));
                    break;
                case c.jw.INTEGER:
                    if ("text" === o.type) {
                        let r = o.text.trim();
                        null != e.choices
                            ? (t = (0, R.l1)(e.choices, r))
                            : e.autocomplete &&
                              (t =
                                  null != j.autocomplete && n
                                      ? j.autocomplete.query
                                      : (0, R.xg)(j.channel.id, e.name, r)),
                            null == t && (t = Number(P.AS(O.default.locale, r)));
                    }
                    break;
                case c.jw.NUMBER:
                    if ("text" === o.type) {
                        let r = o.text.trim();
                        null != e.choices
                            ? (t = (0, R.l1)(e.choices, r))
                            : e.autocomplete &&
                              (t =
                                  null != j.autocomplete && n
                                      ? j.autocomplete.query
                                      : (0, R.xg)(j.channel.id, e.name, r)),
                            null == t && (t = Number(P.AS(O.default.locale, r)));
                    }
                    break;
                default:
                    throw Error("Unsupported option type: ".concat(e.type));
            }
            ("" !== t || null == j.autocomplete || n) &&
                (i()(null != j.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')),
                null != t &&
                    q.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n,
                    }));
        }
    if (null != N.subCommandPath)
        for (let e = N.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = N.subCommandPath[e];
            q = [
                {
                    type: n,
                    name: t,
                    options: q,
                },
            ];
        }
    if (null != N.execute)
        return (
            f.ZP.trackWithMetadata(M.rMx.APPLICATION_COMMAND_USED, {
                command_id: N.id,
                application_id: N.applicationId,
                command_type: N.type,
                location: z(W),
                source: H,
            }),
            N.execute(q, j)
        );
    if (
        N.inputType === L.iw.BUILT_IN ||
        N.inputType === L.iw.BUILT_IN_TEXT ||
        N.inputType === L.iw.BUILT_IN_INTEGRATION
    )
        return;
    let J = {
            version: N.version,
            id: null != (S = null == (t = N.rootCommand) ? void 0 : t.id) ? S : N.id,
            guild_id: N.guildId,
            name: null != (A = null == (n = N.rootCommand) ? void 0 : n.name) ? A : N.untranslatedName,
            type: N.type,
            options: q,
            application_command: N.rootCommand,
        },
        $ = () => {
            V(w);
        };
    null != k && (J.target_id = k),
        null != j.autocomplete
            ? (0, C.GV)(N, j, J)
            : (s.Z.clearAll(j.channel.id, Q),
              Y({
                  applicationId: N.applicationId,
                  data: J,
                  context: j,
                  attachments: X,
                  maxSizeCallback: U,
                  onMessageSuccess: $,
                  analytics_location: z(W),
                  sectionName: B,
                  source: H,
                  interactionLifecycleOptions: await Z(N, j, J),
              }));
}
let V = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    "emoji" === e.type
                        ? new h.dy({
                              names: [e.name.replaceAll(":", "")],
                              surrogates: "",
                              unicodeVersion: 6,
                          })
                        : "customEmoji" === e.type
                          ? p.ZP.getCustomEmojiById(e.emojiId)
                          : null,
                )
                .filter(A.lm),
        );
        t.length > 0 &&
            o.Z.dispatch({
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
            attachments: o,
            maxSizeCallback: a,
            onMessageSuccess: s,
            analytics_location: l,
            sectionName: u,
            source: d,
            interactionLifecycleOptions: f,
        } = e;
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
                source: d,
            };
        m.kz(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: c.B8.APPLICATION_COMMAND,
                applicationId: n,
                channelId: h,
            },
        }),
            null != o && o.length > 0
                ? X(o, E.nonce, g, a).then((e) => {
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
    let u = Z(
        G(
            {},
            (0, E.ZP)({
                channelId: t.channel.id,
                content: "",
                type: n.type === c.yU.CHAT ? M.uaV.CHAT_INPUT_COMMAND : M.uaV.CONTEXT_MENU_COMMAND,
                author:
                    null != s
                        ? s
                        : {
                              id: i.id,
                              username: i.name,
                              discriminator: M.fo$,
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
                user: (0, E.pe)(T.default.getCurrentUser()),
            },
            interaction_data: n,
        },
    );
    return (
        a.Z.receiveMessage(t.channel.id, u, !0, {
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
                null == r && null != n && a.Z.sendClydeError(t.channel.id, n);
                let l = r;
                null == l && null != s && (l = (0, g.A0)(s, e.applicationId)),
                    o.Z.dispatch({
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
        largestUploadedFileSize: r,
    };
}
async function X(e, t, n, r) {
    let i = (0, S.dg)(n),
        o = (e) => {
            null == r || r(i, e),
                m.yr(t, M.evJ.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdX, { maxSize: (0, S.Ng)(i) }));
        },
        { totalSize: a, largestUploadedFileSize: s } = await q(e, !1);
    if (s > Math.max(i, j.Y1) || a > N.zz) return o(s), !1;
    try {
        await (0, d.Z)(e);
    } catch (n) {
        m.yr(t, void 0, k.intl.formatToPlainString(k.t["9h1/1t"], { count: e.length }));
    }
    return (
        ({ totalSize: a, largestUploadedFileSize: s } = await q(e, !0)),
        (!e.some((e) => e.error === M.evJ.ENTITY_TOO_LARGE) && !(a > N.zz)) || (o(s), !1)
    );
}
