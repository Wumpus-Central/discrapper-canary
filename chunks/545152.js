n.d(t, {
    A: () => B,
    x: () => Y,
}),
    n(733351),
    n(321073),
    n(65821),
    n(896048),
    n(114821),
    n(339614),
    n(747238),
    n(812715),
    n(866193);
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    s = n(843472),
    o = n(608299),
    l = n(803306),
    c = n(155718),
    u = n(884384),
    d = n(358579),
    f = n(58149),
    p = n(224868),
    _ = n(508675),
    h = n(7584),
    m = n(706727),
    g = n(296043),
    E = n(963852),
    b = n(195880),
    y = n(867455),
    O = n(773669),
    A = n(71393),
    v = n(522602),
    S = n(287809),
    I = n(453771),
    T = n(403362),
    C = n(292348),
    N = n(721768),
    R = n(360161),
    w = n(258363),
    P = n(842209),
    D = n(861382),
    x = n(392054),
    L = n(168186),
    j = n(652215),
    M = n(381941),
    k = n(985018);
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
async function B(e) {
    var t, n, r, s, l, u, d, _, h, m, g, E, b, A, S, I, T;
    let {
        command: C,
        optionValues: P,
        context: M,
        commandTargetId: k,
        maxSizeCallback: U,
        commandOrigin: G = x.iw.CHAT,
        sectionName: V,
        interactionLifecycleOptionsFactory: F = z,
        source: B,
    } = e;
    if (null == M.channel) return;
    let Y = null != (t = D.A.getSource(M.channel.id)) ? t : B,
        K = null != (n = D.A.getCommandOrigin(M.channel.id)) ? n : G;
    null == M.autocomplete &&
        a.h.dispatch({
            type: "APPLICATION_COMMAND_USED",
            context: M,
            command: C,
            commandOrigin: K,
        }),
        await y.A.unarchiveThreadIfNecessary(M.channel.id);
    let X = [],
        Z = [],
        Q = (0, L.Qr)(K);
    if (null != C.options)
        for (let e of C.options) {
            let t;
            if (e.type === c.n4.SUB_COMMAND || e.type === c.n4.SUB_COMMAND_GROUP || !(e.name in P)) continue;
            let n = (null == (_ = M.autocomplete) ? void 0 : _.name) === e.name || void 0;
            if (e.type === c.n4.STRING) {
                let r = null != (h = null == (m = w.Eq(P, e.name)) ? void 0 : m.trim()) ? h : "";
                if (
                    (null != e.choices
                        ? (t = (0, R.$7)(e.choices, r))
                        : e.autocomplete &&
                          (t = null != M.autocomplete && n ? M.autocomplete.query : (0, R.Xf)(M.channel.id, e.name, r)),
                    null == t && (t = r),
                    "" === t && null != M.autocomplete && !n)
                )
                    continue;
                i()(null != M.autocomplete || null != t, 'Option "'.concat(e.name, '" expects a value')),
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n,
                    });
                continue;
            }
            if (e.type === c.n4.ATTACHMENT) {
                if (null != M.autocomplete) continue;
                let t = v.A.getUpload(M.channel.id, e.name, Q);
                if (null == t) continue;
                let r = Z.length;
                Z.push(t),
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: r,
                        focused: n,
                    });
                continue;
            }
            let r = w.Gk(P[e.name]);
            if (
                (i()(
                    null != M.autocomplete || 1 === r.length,
                    'Option "'.concat(e.name, '" expects a single option type'),
                ),
                null == r[0] && !n)
            )
                continue;
            let a =
                null != (d = r[0])
                    ? d
                    : {
                          type: "text",
                          text: "",
                      };
            switch (e.type) {
                case c.n4.CHANNEL:
                    if ("channelMention" === a.type) t = a.channelId;
                    else if ("text" === a.type)
                        if ((0, L.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (g = M.guild) ? void 0 : g.id, M.channel.id);
                            i()(
                                (null == e ? void 0 : e.type) === "channelMention",
                                "Failed to resolve ".concat(a.text),
                            ),
                                (t = e.channelId);
                        }
                    break;
                case c.n4.ROLE:
                    if ("roleMention" === a.type) t = a.roleId;
                    else if ("text" === a.type)
                        if ((0, L.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (E = M.guild) ? void 0 : E.id, M.channel.id, {
                                allowUsers: !1,
                            });
                            i()((null == e ? void 0 : e.type) === "roleMention", "Failed to resolve ".concat(a.text)),
                                (t = e.roleId);
                        }
                    else
                        "textMention" === a.type &&
                            "@everyone" === a.text &&
                            (t = null == (b = M.guild) ? void 0 : b.id);
                    break;
                case c.n4.USER:
                    if ("userMention" === a.type) t = a.userId;
                    else if ("text" === a.type)
                        if ((0, L.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (A = M.guild) ? void 0 : A.id, M.channel.id, {
                                allowRoles: !1,
                            });
                            i()((null == e ? void 0 : e.type) === "userMention", "Failed to resolve ".concat(a.text)),
                                (t = e.userId);
                        }
                    break;
                case c.n4.MENTIONABLE:
                    if ("userMention" === a.type) t = a.userId;
                    else if ("roleMention" === a.type) t = a.roleId;
                    else if ("textMention" === a.type && "@everyone" === a.text)
                        t = null == (S = M.guild) ? void 0 : S.id;
                    else if ("text" === a.type)
                        if ((0, L.hT)(a.text)) t = a.text.trim();
                        else {
                            let e = (0, p.f)(a.text, null == (I = M.guild) ? void 0 : I.id, M.channel.id);
                            (null == e ? void 0 : e.type) === "userMention"
                                ? (t = e.userId)
                                : (null == e ? void 0 : e.type) === "roleMention"
                                  ? (t = e.roleId)
                                  : (null == e ? void 0 : e.type) === "textMention" && "@everyone" === e.text
                                    ? (t = null == (T = M.guild) ? void 0 : T.id)
                                    : i()(!1, "Failed to resolve ".concat(a.text));
                        }
                    break;
                case c.n4.BOOLEAN:
                    "text" === a.type && (t = (0, R.a5)(a.text.trim()));
                    break;
                case c.n4.INTEGER:
                    if ("text" === a.type) {
                        let r = a.text.trim();
                        null != e.choices
                            ? (t = (0, R.Bk)(e.choices, r))
                            : e.autocomplete &&
                              (t =
                                  null != M.autocomplete && n
                                      ? M.autocomplete.query
                                      : (0, R.lM)(M.channel.id, e.name, r)),
                            null == t && (t = Number(w.ib(O.default.locale, r)));
                    }
                    break;
                case c.n4.NUMBER:
                    if ("text" === a.type) {
                        let r = a.text.trim();
                        null != e.choices
                            ? (t = (0, R.Bk)(e.choices, r))
                            : e.autocomplete &&
                              (t =
                                  null != M.autocomplete && n
                                      ? M.autocomplete.query
                                      : (0, R.lM)(M.channel.id, e.name, r)),
                            null == t && (t = Number(w.ib(O.default.locale, r)));
                    }
                    break;
                default:
                    throw Error("Unsupported option type: ".concat(e.type));
            }
            ("" !== t || null == M.autocomplete || n) &&
                (i()(null != M.autocomplete || null != t, 'Unexpected value for option "'.concat(e.name, '"')),
                null != t &&
                    X.push({
                        type: e.type,
                        name: e.name,
                        value: t,
                        focused: n,
                    }));
        }
    if (null != C.subCommandPath)
        for (let e = C.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: t, type: n } = C.subCommandPath[e];
            X = [
                {
                    type: n,
                    name: t,
                    options: X,
                },
            ];
        }
    if (null != C.execute)
        return (
            f.Ay.trackWithMetadata(j.HAw.APPLICATION_COMMAND_USED, {
                command_id: C.id,
                application_id: C.applicationId,
                command_type: C.type,
                location: q(K),
                source: Y,
            }),
            C.execute(X, M)
        );
    if (
        C.inputType === x.y$.BUILT_IN ||
        C.inputType === x.y$.BUILT_IN_TEXT ||
        C.inputType === x.y$.BUILT_IN_INTEGRATION
    )
        return;
    let $ = {
            version: C.version,
            id: null != (r = null == (l = C.rootCommand) ? void 0 : l.id) ? r : C.id,
            guild_id: C.guildId,
            name: null != (s = null == (u = C.rootCommand) ? void 0 : u.name) ? s : C.untranslatedName,
            type: C.type,
            options: X,
            application_command: C.rootCommand,
        },
        J = () => {
            H(P);
        };
    null != k && ($.target_id = k),
        null != M.autocomplete
            ? (0, N.WL)(C, M, $)
            : (o.A.clearAll(M.channel.id, Q),
              W({
                  applicationId: C.applicationId,
                  data: $,
                  context: M,
                  attachments: Z,
                  maxSizeCallback: U,
                  onMessageSuccess: J,
                  analytics_location: q(K),
                  sectionName: V,
                  source: Y,
                  interactionLifecycleOptions: await F(C, M, $),
              }));
}
let H = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    "emoji" === e.type
                        ? new h.zT({
                              names: [e.name.replaceAll(":", "")],
                              surrogates: "",
                              unicodeVersion: 6,
                          })
                        : "customEmoji" === e.type
                          ? _.Ay.getCustomEmojiById(e.emojiId)
                          : null,
                )
                .filter(T.Vq),
        );
        t.length > 0 &&
            a.h.dispatch({
                type: "EMOJI_TRACK_USAGE",
                emojiUsed: t,
            });
    },
    Y = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = {
                channel: t,
                guild: null != t.guild_id ? A.A.getGuild(t.guild_id) : null,
            };
            W({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await z(n.command, r, e.interactionData),
            });
        }
    },
    W = (e) => {
        var t;
        let {
            applicationId: n,
            data: r,
            context: i,
            attachments: a,
            maxSizeCallback: s,
            onMessageSuccess: o,
            analytics_location: l,
            sectionName: u,
            source: d,
            interactionLifecycleOptions: f,
        } = e;
        if (null == i.channel) return;
        let { channel: p, guild: _ } = i,
            h = p.id,
            g = null == _ ? void 0 : _.id,
            E = {
                applicationId: n,
                channelId: h,
                guildId: g,
                data: r,
                nonce: null != (t = f.nonce) ? t : (0, b.m)(),
                attachments: a,
                maxSizeCallback: s,
                analytics_location: l,
                sectionName: u,
                source: d,
            };
        m.tU(E.nonce, {
            messageId: f.messageId,
            onCreate: f.onCreate,
            onSuccess: f.onSuccess,
            onFailure: f.onFailure,
            data: {
                interactionType: c.G4.APPLICATION_COMMAND,
                applicationId: n,
                channelId: h,
            },
        }),
            null != a && a.length > 0
                ? Z(a, E.nonce, g, s).then((e) => {
                      e && K(E, o);
                  })
                : K(E, o);
    };
function K(e, t) {
    u.Ay.enqueue(
        {
            type: u.AZ.COMMAND,
            message: e,
        },
        (n) => {
            var r;
            (0, g.wy)(e.nonce, n, e.applicationId, e.channelId, null != (r = e.guildId) ? r : null),
                n.ok && null != t && t();
        },
    );
}
async function z(e, t, n) {
    var r;
    if (null == t.channel) return {};
    let i = P.s$(
        {
            channel: t.channel,
            type: "channel",
        },
        n.type,
        e.applicationId,
    );
    if (null == i) return {};
    let o = null == (r = i.application) ? void 0 : r.bot;
    if (null == o && null != i.botId)
        try {
            await l.wz(i.botId);
        } catch (e) {}
    let u = F(
        G(
            {},
            (0, E.Ay)({
                channelId: t.channel.id,
                content: "",
                type: n.type === c.kc.CHAT ? j.lAJ.CHAT_INPUT_COMMAND : j.lAJ.CONTEXT_MENU_COMMAND,
                author:
                    null != o
                        ? o
                        : {
                              id: i.id,
                              username: i.name,
                              discriminator: j.h3J,
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
                type: c.G4.APPLICATION_COMMAND,
                user: (0, E.Vi)(S.default.getCurrentUser()),
            },
            interaction_data: n,
        },
    );
    return (
        s.A.receiveMessage(t.channel.id, u, !0, {
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
            onFailure: (n, r, i, o) => {
                if (null == t.channel) return;
                null == r && null != n && s.A.sendClydeError(t.channel.id, n);
                let l = r;
                null == l && null != o && (l = (0, g.sW)(o, e.applicationId)),
                    a.h.dispatch({
                        type: "MESSAGE_SEND_FAILED",
                        messageId: u.id,
                        channelId: t.channel.id,
                        reason: l,
                    });
            },
        }
    );
}
function q(e) {
    switch (e) {
        case x.iw.APPLICATION_LAUNCHER:
            return x.Oh.APP_LAUNCHER;
        case x.iw.APP_LAUNCHER_APPLICATION_VIEW:
            return x.Oh.APP_LAUNCHER_APPLICATION_VIEW;
        case x.iw.IMAGE_RECS_MENU:
            return x.Oh.IMAGE_RECS_MENU;
        case x.iw.IMAGE_RECS_SUBMENU:
            return x.Oh.IMAGE_RECS_SUBMENU;
        case x.iw.ACTIVITY_INSTANCE_EMBED:
            return x.Oh.ACTIVITY_INSTANCE_EMBED;
        case x.iw.ACTIVITY_BOOKMARK_EMBED:
            return x.Oh.ACTIVITY_BOOKMARK_EMBED;
        case x.iw.MINI_SHELF:
            return x.Oh.ACTIVITIES_MINI_SHELF;
        case x.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return x.Oh.VC_TILE_ACTIVITY_SUGGESTION;
        case x.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return x.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return x.Oh.SLASH_UI;
    }
}
async function X(e, t) {
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
async function Z(e, t, n, r) {
    let i = (0, I.o2)(n),
        a = (e) => {
            null == r || r(i, e),
                m.C1(t, j.t02.ENTITY_TOO_LARGE, k.intl.formatToPlainString(k.t.fxEKdS, { maxSize: (0, I.Hb)(i) }));
        },
        { totalSize: s, largestUploadedFileSize: o } = await X(e, !1);
    if (o > Math.max(i, M.VP) || s > C.eM) return a(o), !1;
    try {
        await (0, d.A)(e);
    } catch (n) {
        m.C1(t, void 0, k.intl.formatToPlainString(k.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: s, largestUploadedFileSize: o } = await X(e, !0)),
        (!e.some((e) => e.error === j.t02.ENTITY_TOO_LARGE) && !(s > C.eM)) || (a(o), !1)
    );
}
