n.d(t, { A: () => k, x: () => F }), n(321073);
var i = n(284009),
    r = n.n(i),
    a = n(228366),
    s = n(148494),
    l = n(608299),
    o = n(803306),
    d = n(155718),
    c = n(779185),
    u = n(358579),
    _ = n(95561),
    E = n(224868),
    A = n(236285),
    h = n(7584),
    I = n(706727),
    f = n(743738),
    p = n(963852),
    T = n(195880),
    m = n(867455),
    g = n(773669),
    S = n(71393),
    N = n(522602),
    C = n(287809),
    O = n(453771),
    R = n(403362),
    L = n(292348),
    y = n(721768),
    D = n(360161),
    v = n(459016),
    b = n(842209),
    M = n(861382),
    P = n(392054),
    U = n(168186),
    w = n(652215),
    G = n(381941),
    x = n(375708);
async function k(e) {
    let {
        command: t,
        optionValues: n,
        context: i,
        commandTargetId: s,
        maxSizeCallback: o,
        commandOrigin: c = P.iw.CHAT,
        sectionName: u,
        interactionLifecycleOptionsFactory: I = H,
        source: f,
    } = e;
    if (null == i.channel) return;
    let p = M.A.getSource(i.channel.id) ?? f,
        T = M.A.getCommandOrigin(i.channel.id) ?? c;
    null == i.autocomplete &&
        a.h.dispatch({ type: "APPLICATION_COMMAND_USED", context: i, command: t, commandOrigin: T }),
        await m.A.unarchiveThreadIfNecessary(i.channel.id);
    let S = [],
        C = [],
        O = (0, U.Qr)(T);
    if (null != t.options)
        for (let e of t.options) {
            let t;
            if (e.type === d.n4.SUB_COMMAND || e.type === d.n4.SUB_COMMAND_GROUP || !(e.name in n)) continue;
            let a = i.autocomplete?.name === e.name || void 0;
            if (e.type === d.n4.STRING) {
                let s = v.getOptionalString(n, e.name)?.trim() ?? "";
                if (
                    (null != e.choices
                        ? (t = (0, D.$7)(e.choices, s))
                        : e.autocomplete &&
                          (t = null != i.autocomplete && a ? i.autocomplete.query : (0, D.Xf)(i.channel.id, e.name, s)),
                    null == t && (t = s),
                    "" === t && null != i.autocomplete && !a)
                )
                    continue;
                r()(null != i.autocomplete || null != t, `Option "${e.name}" expects a value`),
                    S.push({ type: e.type, name: e.name, value: t, focused: a });
                continue;
            }
            if (e.type === d.n4.ATTACHMENT) {
                if (null != i.autocomplete) continue;
                let t = N.A.getUpload(i.channel.id, e.name, O);
                if (null == t) continue;
                let n = C.length;
                C.push(t), S.push({ type: e.type, name: e.name, value: n, focused: a });
                continue;
            }
            let s = v.filterEmpty(n[e.name]);
            if (
                (r()(null != i.autocomplete || 1 === s.length, `Option "${e.name}" expects a single option type`),
                null == s[0] && !a)
            )
                continue;
            let l = s[0] ?? { type: "text", text: "" };
            switch (e.type) {
                case d.n4.CHANNEL:
                    if ("channelMention" === l.type) t = l.channelId;
                    else if ("text" === l.type)
                        if ((0, U.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, E.f)(l.text, i.guild?.id, i.channel.id);
                            r()(e?.type === "channelMention", `Failed to resolve ${l.text}`), (t = e.channelId);
                        }
                    break;
                case d.n4.ROLE:
                    if ("roleMention" === l.type) t = l.roleId;
                    else if ("text" === l.type)
                        if ((0, U.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, E.f)(l.text, i.guild?.id, i.channel.id, { allowUsers: !1 });
                            r()(e?.type === "roleMention", `Failed to resolve ${l.text}`), (t = e.roleId);
                        }
                    else "textMention" === l.type && "@everyone" === l.text && (t = i.guild?.id);
                    break;
                case d.n4.USER:
                    if ("userMention" === l.type) t = l.userId;
                    else if ("text" === l.type)
                        if ((0, U.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, E.f)(l.text, i.guild?.id, i.channel.id, { allowRoles: !1 });
                            r()(e?.type === "userMention", `Failed to resolve ${l.text}`), (t = e.userId);
                        }
                    break;
                case d.n4.MENTIONABLE:
                    if ("userMention" === l.type) t = l.userId;
                    else if ("roleMention" === l.type) t = l.roleId;
                    else if ("textMention" === l.type && "@everyone" === l.text) t = i.guild?.id;
                    else if ("text" === l.type)
                        if ((0, U.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, E.f)(l.text, i.guild?.id, i.channel.id);
                            e?.type === "userMention"
                                ? (t = e.userId)
                                : e?.type === "roleMention"
                                  ? (t = e.roleId)
                                  : e?.type === "textMention" && "@everyone" === e.text
                                    ? (t = i.guild?.id)
                                    : r()(!1, `Failed to resolve ${l.text}`);
                        }
                    break;
                case d.n4.BOOLEAN:
                    "text" === l.type && (t = (0, D.a5)(l.text.trim()));
                    break;
                case d.n4.INTEGER:
                    if ("text" === l.type) {
                        let n = l.text.trim();
                        null != e.choices
                            ? (t = (0, D.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != i.autocomplete && a
                                      ? i.autocomplete.query
                                      : (0, D.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(v.normalizeNumericString(g.default.locale, n)));
                    }
                    break;
                case d.n4.NUMBER:
                    if ("text" === l.type) {
                        let n = l.text.trim();
                        null != e.choices
                            ? (t = (0, D.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != i.autocomplete && a
                                      ? i.autocomplete.query
                                      : (0, D.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(v.normalizeNumericString(g.default.locale, n)));
                    }
                    break;
                default:
                    throw Error(`Unsupported option type: ${e.type}`);
            }
            ("" !== t || null == i.autocomplete || a) &&
                (r()(null != i.autocomplete || null != t, `Unexpected value for option "${e.name}"`),
                null != t && S.push({ type: e.type, name: e.name, value: t, focused: a }));
        }
    if (null != t.subCommandPath)
        for (let e = t.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: i } = t.subCommandPath[e];
            S = [{ type: i, name: n, options: S }];
        }
    if (null != t.execute)
        return (
            _.Ay.trackWithMetadata(w.HAw.APPLICATION_COMMAND_USED, {
                command_id: t.id,
                application_id: t.applicationId,
                command_type: t.type,
                location: j(T),
                source: p,
            }),
            t.execute(S, i)
        );
    if (
        t.inputType === P.y$.BUILT_IN ||
        t.inputType === P.y$.BUILT_IN_TEXT ||
        t.inputType === P.y$.BUILT_IN_INTEGRATION
    )
        return;
    let L = {
        version: t.version,
        id: t.rootCommand?.id ?? t.id,
        guild_id: t.guildId,
        name: t.rootCommand?.name ?? t.untranslatedName,
        type: t.type,
        options: S,
        application_command: t.rootCommand,
    };
    null != s && (L.target_id = s),
        null != i.autocomplete
            ? (0, y.WL)(t, i, L)
            : (l.A.clearAll(i.channel.id, O),
              V({
                  applicationId: t.applicationId,
                  data: L,
                  context: i,
                  attachments: C,
                  maxSizeCallback: o,
                  onMessageSuccess: function () {
                      let e;
                      (e = Object.values(n).flatMap((e) =>
                          e
                              .map((e) =>
                                  "emoji" === e.type
                                      ? new h.zT({
                                            names: [e.name.replaceAll(":", "")],
                                            surrogates: "",
                                            unicodeVersion: 6,
                                        })
                                      : "customEmoji" === e.type
                                        ? A.Ay.getCustomEmojiById(e.emojiId)
                                        : null,
                              )
                              .filter(R.Vq),
                      )).length > 0 && a.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: e });
                  },
                  analytics_location: j(T),
                  sectionName: u,
                  source: p,
                  interactionLifecycleOptions: await I(t, i, L),
              }));
}
async function F(e, t, n) {
    if (e.isCommandType() && null != e.interactionData && null != n.command) {
        let i = { channel: t, guild: null != t.guild_id ? S.A.getGuild(t.guild_id) : null };
        V({
            applicationId: n.command.applicationId,
            data: e.interactionData,
            context: i,
            interactionLifecycleOptions: await H(n.command, i, e.interactionData),
        });
    }
}
function V(e) {
    let {
        applicationId: t,
        data: n,
        context: i,
        attachments: r,
        maxSizeCallback: a,
        onMessageSuccess: s,
        analytics_location: l,
        sectionName: o,
        source: c,
        interactionLifecycleOptions: u,
    } = e;
    if (null == i.channel) return;
    let { channel: _, guild: E } = i,
        A = _.id,
        h = E?.id,
        f = {
            applicationId: t,
            channelId: A,
            guildId: h,
            data: n,
            nonce: u.nonce ?? (0, T.m)(),
            attachments: r,
            maxSizeCallback: a,
            analytics_location: l,
            sectionName: o,
            source: c,
        };
    I.tU(f.nonce, {
        messageId: u.messageId,
        onCreate: u.onCreate,
        onSuccess: u.onSuccess,
        onFailure: u.onFailure,
        data: { interactionType: d.G4.APPLICATION_COMMAND, applicationId: t, channelId: A },
    }),
        null != r && r.length > 0
            ? Y(r, f.nonce, h, a).then((e) => {
                  e && B(f, s);
              })
            : B(f, s);
}
function B(e, t) {
    c.Ay.enqueue({ type: c.AZ.COMMAND, message: e }, (n) => {
        (0, f.wy)(e.nonce, n, e.applicationId, e.channelId, e.guildId ?? null), n.ok && null != t && t();
    });
}
async function H(e, t, n) {
    if (null == t.channel) return {};
    let i = b.s$({ channel: t.channel, type: "channel" }, n.type, e.applicationId);
    if (null == i) return {};
    let r = i.application?.bot;
    if (null == r && null != i.botId)
        try {
            await o.getUser(i.botId);
        } catch {}
    let l = {
        ...(0, p.Ay)({
            channelId: t.channel.id,
            content: "",
            type: n.type === d.kc.CHAT ? w.lAJ.CHAT_INPUT_COMMAND : w.lAJ.CONTEXT_MENU_COMMAND,
            author: r ?? { id: i.id, username: i.name, discriminator: w.h3J, avatar: null, bot: !0 },
        }),
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: d.G4.APPLICATION_COMMAND,
            user: (0, p.Vi)(C.default.getCurrentUser()),
        },
        interaction_data: n,
    };
    return (
        s.A.receiveMessage(t.channel.id, l, !0, { applicationId: e.applicationId, command: e }),
        {
            get messageId() {
                return l.id;
            },
            get nonce() {
                return l.id;
            },
            onCreate: (e) => {
                null != l.interaction && (l.interaction.id = e);
            },
            onSuccess: () => {},
            onFailure: (n, i, r, o) => {
                if (null == t.channel) return;
                null == i && null != n && s.A.sendClydeError(t.channel.id, n);
                let d = i;
                null == d && null != o && (d = (0, f.sW)(o, e.applicationId)),
                    a.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: l.id, channelId: t.channel.id, reason: d });
            },
        }
    );
}
function j(e) {
    switch (e) {
        case P.iw.APPLICATION_LAUNCHER:
            return P.Oh.APP_LAUNCHER;
        case P.iw.APP_LAUNCHER_APPLICATION_VIEW:
            return P.Oh.APP_LAUNCHER_APPLICATION_VIEW;
        case P.iw.IMAGE_RECS_MENU:
            return P.Oh.IMAGE_RECS_MENU;
        case P.iw.IMAGE_RECS_SUBMENU:
            return P.Oh.IMAGE_RECS_SUBMENU;
        case P.iw.ACTIVITY_INSTANCE_EMBED:
            return P.Oh.ACTIVITY_INSTANCE_EMBED;
        case P.iw.ACTIVITY_BOOKMARK_EMBED:
            return P.Oh.ACTIVITY_BOOKMARK_EMBED;
        case P.iw.MINI_SHELF:
            return P.Oh.ACTIVITIES_MINI_SHELF;
        case P.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return P.Oh.VC_TILE_ACTIVITY_SUGGESTION;
        case P.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return P.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return P.Oh.SLASH_UI;
    }
}
async function W(e, t) {
    let n = 0,
        i = 0;
    for (let r of e) {
        let e = t ? (r.currentSize ?? 0) : await r.getSize();
        e > i && (i = e), (n += e);
    }
    return { totalSize: n, largestUploadedFileSize: i };
}
async function Y(e, t, n, i) {
    let r = (0, O.o2)(n);
    function a(e) {
        i?.(r, e), I.C1(t, w.t02.ENTITY_TOO_LARGE, x.intl.formatToPlainString(x.t.fxEKdS, { maxSize: (0, O.Hb)(r) }));
    }
    let { totalSize: s, largestUploadedFileSize: l } = await W(e, !1);
    if (l > Math.max(r, G.VP) || s > L.eM) return a(l), !1;
    try {
        await (0, u.A)(e);
    } catch {
        I.C1(t, void 0, x.intl.formatToPlainString(x.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: s, largestUploadedFileSize: l } = await W(e, !0)),
        (!e.some((e) => e.error === w.t02.ENTITY_TOO_LARGE) && !(s > L.eM)) || (a(l), !1)
    );
}
