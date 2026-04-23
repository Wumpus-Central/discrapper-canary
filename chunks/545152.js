"use strict";
n.d(t, { A: () => G, x: () => V }), n(321073);
var r = n(284009),
    i = n.n(r),
    s = n(73153),
    a = n(843472),
    o = n(608299),
    l = n(803306),
    u = n(155718),
    c = n(884384),
    d = n(358579),
    _ = n(58149),
    f = n(224868),
    p = n(508675),
    h = n(7584),
    E = n(706727),
    m = n(296043),
    g = n(963852),
    A = n(195880),
    I = n(867455),
    T = n(773669),
    S = n(71393),
    y = n(522602),
    N = n(287809),
    v = n(453771),
    C = n(403362),
    O = n(292348),
    R = n(721768),
    b = n(360161),
    D = n(258363),
    L = n(842209),
    w = n(861382),
    M = n(392054),
    P = n(168186),
    x = n(652215),
    k = n(381941),
    U = n(985018);
async function G(e) {
    let {
        command: t,
        optionValues: n,
        context: r,
        commandTargetId: a,
        maxSizeCallback: l,
        commandOrigin: c = M.iw.CHAT,
        sectionName: d,
        interactionLifecycleOptionsFactory: p = j,
        source: h,
    } = e;
    if (null == r.channel) return;
    let E = w.A.getSource(r.channel.id) ?? h,
        m = w.A.getCommandOrigin(r.channel.id) ?? c;
    null == r.autocomplete &&
        s.h.dispatch({ type: "APPLICATION_COMMAND_USED", context: r, command: t, commandOrigin: m }),
        await I.A.unarchiveThreadIfNecessary(r.channel.id);
    let g = [],
        A = [],
        S = (0, P.Qr)(m);
    if (null != t.options)
        for (let e of t.options) {
            let t;
            if (e.type === u.n4.SUB_COMMAND || e.type === u.n4.SUB_COMMAND_GROUP || !(e.name in n)) continue;
            let s = r.autocomplete?.name === e.name || void 0;
            if (e.type === u.n4.STRING) {
                let a = D.getOptionalString(n, e.name)?.trim() ?? "";
                if (
                    (null != e.choices
                        ? (t = (0, b.$7)(e.choices, a))
                        : e.autocomplete &&
                          (t = null != r.autocomplete && s ? r.autocomplete.query : (0, b.Xf)(r.channel.id, e.name, a)),
                    null == t && (t = a),
                    "" === t && null != r.autocomplete && !s)
                )
                    continue;
                i()(null != r.autocomplete || null != t, `Option "${e.name}" expects a value`),
                    g.push({ type: e.type, name: e.name, value: t, focused: s });
                continue;
            }
            if (e.type === u.n4.ATTACHMENT) {
                if (null != r.autocomplete) continue;
                let t = y.A.getUpload(r.channel.id, e.name, S);
                if (null == t) continue;
                let n = A.length;
                A.push(t), g.push({ type: e.type, name: e.name, value: n, focused: s });
                continue;
            }
            let a = D.filterEmpty(n[e.name]);
            if (
                (i()(null != r.autocomplete || 1 === a.length, `Option "${e.name}" expects a single option type`),
                null == a[0] && !s)
            )
                continue;
            let o = a[0] ?? { type: "text", text: "" };
            switch (e.type) {
                case u.n4.CHANNEL:
                    if ("channelMention" === o.type) t = o.channelId;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, f.f)(o.text, r.guild?.id, r.channel.id);
                            i()(e?.type === "channelMention", `Failed to resolve ${o.text}`), (t = e.channelId);
                        }
                    break;
                case u.n4.ROLE:
                    if ("roleMention" === o.type) t = o.roleId;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, f.f)(o.text, r.guild?.id, r.channel.id, { allowUsers: !1 });
                            i()(e?.type === "roleMention", `Failed to resolve ${o.text}`), (t = e.roleId);
                        }
                    else "textMention" === o.type && "@everyone" === o.text && (t = r.guild?.id);
                    break;
                case u.n4.USER:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, f.f)(o.text, r.guild?.id, r.channel.id, { allowRoles: !1 });
                            i()(e?.type === "userMention", `Failed to resolve ${o.text}`), (t = e.userId);
                        }
                    break;
                case u.n4.MENTIONABLE:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("roleMention" === o.type) t = o.roleId;
                    else if ("textMention" === o.type && "@everyone" === o.text) t = r.guild?.id;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, f.f)(o.text, r.guild?.id, r.channel.id);
                            e?.type === "userMention"
                                ? (t = e.userId)
                                : e?.type === "roleMention"
                                  ? (t = e.roleId)
                                  : e?.type === "textMention" && "@everyone" === e.text
                                    ? (t = r.guild?.id)
                                    : i()(!1, `Failed to resolve ${o.text}`);
                        }
                    break;
                case u.n4.BOOLEAN:
                    "text" === o.type && (t = (0, b.a5)(o.text.trim()));
                    break;
                case u.n4.INTEGER:
                    if ("text" === o.type) {
                        let n = o.text.trim();
                        null != e.choices
                            ? (t = (0, b.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != r.autocomplete && s
                                      ? r.autocomplete.query
                                      : (0, b.lM)(r.channel.id, e.name, n)),
                            null == t && (t = Number(D.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                case u.n4.NUMBER:
                    if ("text" === o.type) {
                        let n = o.text.trim();
                        null != e.choices
                            ? (t = (0, b.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != r.autocomplete && s
                                      ? r.autocomplete.query
                                      : (0, b.lM)(r.channel.id, e.name, n)),
                            null == t && (t = Number(D.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                default:
                    throw Error(`Unsupported option type: ${e.type}`);
            }
            ("" !== t || null == r.autocomplete || s) &&
                (i()(null != r.autocomplete || null != t, `Unexpected value for option "${e.name}"`),
                null != t && g.push({ type: e.type, name: e.name, value: t, focused: s }));
        }
    if (null != t.subCommandPath)
        for (let e = t.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: r } = t.subCommandPath[e];
            g = [{ type: r, name: n, options: g }];
        }
    if (null != t.execute)
        return (
            _.Ay.trackWithMetadata(x.HAw.APPLICATION_COMMAND_USED, {
                command_id: t.id,
                application_id: t.applicationId,
                command_type: t.type,
                location: Y(m),
                source: E,
            }),
            t.execute(g, r)
        );
    if (
        t.inputType === M.y$.BUILT_IN ||
        t.inputType === M.y$.BUILT_IN_TEXT ||
        t.inputType === M.y$.BUILT_IN_INTEGRATION
    )
        return;
    let N = {
        version: t.version,
        id: t.rootCommand?.id ?? t.id,
        guild_id: t.guildId,
        name: t.rootCommand?.name ?? t.untranslatedName,
        type: t.type,
        options: g,
        application_command: t.rootCommand,
    };
    null != a && (N.target_id = a),
        null != r.autocomplete
            ? (0, R.WL)(t, r, N)
            : (o.A.clearAll(r.channel.id, S),
              B({
                  applicationId: t.applicationId,
                  data: N,
                  context: r,
                  attachments: A,
                  maxSizeCallback: l,
                  onMessageSuccess: () => {
                      F(n);
                  },
                  analytics_location: Y(m),
                  sectionName: d,
                  source: E,
                  interactionLifecycleOptions: await p(t, r, N),
              }));
}
let F = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    "emoji" === e.type
                        ? new h.zT({ names: [e.name.replaceAll(":", "")], surrogates: "", unicodeVersion: 6 })
                        : "customEmoji" === e.type
                          ? p.Ay.getCustomEmojiById(e.emojiId)
                          : null,
                )
                .filter(C.Vq),
        );
        t.length > 0 && s.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: t });
    },
    V = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = { channel: t, guild: null != t.guild_id ? S.A.getGuild(t.guild_id) : null };
            B({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await j(n.command, r, e.interactionData),
            });
        }
    },
    B = (e) => {
        let {
            applicationId: t,
            data: n,
            context: r,
            attachments: i,
            maxSizeCallback: s,
            onMessageSuccess: a,
            analytics_location: o,
            sectionName: l,
            source: c,
            interactionLifecycleOptions: d,
        } = e;
        if (null == r.channel) return;
        let { channel: _, guild: f } = r,
            p = _.id,
            h = f?.id,
            m = {
                applicationId: t,
                channelId: p,
                guildId: h,
                data: n,
                nonce: d.nonce ?? (0, A.m)(),
                attachments: i,
                maxSizeCallback: s,
                analytics_location: o,
                sectionName: l,
                source: c,
            };
        E.tU(m.nonce, {
            messageId: d.messageId,
            onCreate: d.onCreate,
            onSuccess: d.onSuccess,
            onFailure: d.onFailure,
            data: { interactionType: u.G4.APPLICATION_COMMAND, applicationId: t, channelId: p },
        }),
            null != i && i.length > 0
                ? K(i, m.nonce, h, s).then((e) => {
                      e && H(m, a);
                  })
                : H(m, a);
    };
function H(e, t) {
    c.Ay.enqueue({ type: c.AZ.COMMAND, message: e }, (n) => {
        (0, m.wy)(e.nonce, n, e.applicationId, e.channelId, e.guildId ?? null), n.ok && null != t && t();
    });
}
async function j(e, t, n) {
    if (null == t.channel) return {};
    let r = L.s$({ channel: t.channel, type: "channel" }, n.type, e.applicationId);
    if (null == r) return {};
    let i = r.application?.bot;
    if (null == i && null != r.botId)
        try {
            await l.wz(r.botId);
        } catch {}
    let o = {
        ...(0, g.Ay)({
            channelId: t.channel.id,
            content: "",
            type: n.type === u.kc.CHAT ? x.lAJ.CHAT_INPUT_COMMAND : x.lAJ.CONTEXT_MENU_COMMAND,
            author: i ?? { id: r.id, username: r.name, discriminator: x.h3J, avatar: null, bot: !0 },
        }),
        application: r.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: u.G4.APPLICATION_COMMAND,
            user: (0, g.Vi)(N.default.getCurrentUser()),
        },
        interaction_data: n,
    };
    return (
        a.A.receiveMessage(t.channel.id, o, !0, { applicationId: e.applicationId, command: e }),
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
            onFailure: (n, r, i, l) => {
                if (null == t.channel) return;
                null == r && null != n && a.A.sendClydeError(t.channel.id, n);
                let u = r;
                null == u && null != l && (u = (0, m.sW)(l, e.applicationId)),
                    s.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: o.id, channelId: t.channel.id, reason: u });
            },
        }
    );
}
function Y(e) {
    switch (e) {
        case M.iw.APPLICATION_LAUNCHER:
            return M.Oh.APP_LAUNCHER;
        case M.iw.APP_LAUNCHER_APPLICATION_VIEW:
            return M.Oh.APP_LAUNCHER_APPLICATION_VIEW;
        case M.iw.IMAGE_RECS_MENU:
            return M.Oh.IMAGE_RECS_MENU;
        case M.iw.IMAGE_RECS_SUBMENU:
            return M.Oh.IMAGE_RECS_SUBMENU;
        case M.iw.ACTIVITY_INSTANCE_EMBED:
            return M.Oh.ACTIVITY_INSTANCE_EMBED;
        case M.iw.ACTIVITY_BOOKMARK_EMBED:
            return M.Oh.ACTIVITY_BOOKMARK_EMBED;
        case M.iw.MINI_SHELF:
            return M.Oh.ACTIVITIES_MINI_SHELF;
        case M.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return M.Oh.VC_TILE_ACTIVITY_SUGGESTION;
        case M.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return M.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return M.Oh.SLASH_UI;
    }
}
async function W(e, t) {
    let n = 0,
        r = 0;
    for (let i of e) {
        let e = t ? (i.currentSize ?? 0) : await i.getSize();
        e > r && (r = e), (n += e);
    }
    return { totalSize: n, largestUploadedFileSize: r };
}
async function K(e, t, n, r) {
    let i = (0, v.o2)(n),
        s = (e) => {
            r?.(i, e),
                E.C1(t, x.t02.ENTITY_TOO_LARGE, U.intl.formatToPlainString(U.t.fxEKdS, { maxSize: (0, v.Hb)(i) }));
        },
        { totalSize: a, largestUploadedFileSize: o } = await W(e, !1);
    if (o > Math.max(i, k.VP) || a > O.eM) return s(o), !1;
    try {
        await (0, d.A)(e);
    } catch {
        E.C1(t, void 0, U.intl.formatToPlainString(U.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: a, largestUploadedFileSize: o } = await W(e, !0)),
        (!e.some((e) => e.error === x.t02.ENTITY_TOO_LARGE) && !(a > O.eM)) || (s(o), !1)
    );
}
