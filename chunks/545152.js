"use strict";
n.d(t, { A: () => G, x: () => F }), n(321073);
var r = n(284009),
    i = n.n(r),
    a = n(73153),
    s = n(843472),
    o = n(608299),
    l = n(803306),
    u = n(155718),
    c = n(884384),
    d = n(358579),
    _ = n(58149),
    f = n(224868),
    p = n(508675),
    h = n(7584),
    m = n(706727),
    g = n(296043),
    E = n(963852),
    A = n(195880),
    I = n(867455),
    T = n(773669),
    y = n(71393),
    S = n(522602),
    v = n(287809),
    C = n(453771),
    b = n(403362),
    N = n(292348),
    R = n(721768),
    O = n(360161),
    D = n(258363),
    L = n(842209),
    w = n(861382),
    x = n(392054),
    P = n(168186),
    M = n(652215),
    k = n(381941),
    U = n(985018);
async function G(e) {
    let {
        command: t,
        optionValues: n,
        context: r,
        commandTargetId: s,
        maxSizeCallback: l,
        commandOrigin: c = x.iw.CHAT,
        sectionName: d,
        interactionLifecycleOptionsFactory: p = H,
        source: h,
    } = e;
    if (null == r.channel) return;
    let m = w.A.getSource(r.channel.id) ?? h,
        g = w.A.getCommandOrigin(r.channel.id) ?? c;
    null == r.autocomplete &&
        a.h.dispatch({ type: "APPLICATION_COMMAND_USED", context: r, command: t, commandOrigin: g }),
        await I.A.unarchiveThreadIfNecessary(r.channel.id);
    let E = [],
        A = [],
        y = (0, P.Qr)(g);
    if (null != t.options)
        for (let e of t.options) {
            let t;
            if (e.type === u.n4.SUB_COMMAND || e.type === u.n4.SUB_COMMAND_GROUP || !(e.name in n)) continue;
            let a = r.autocomplete?.name === e.name || void 0;
            if (e.type === u.n4.STRING) {
                let s = D.getOptionalString(n, e.name)?.trim() ?? "";
                if (
                    (null != e.choices
                        ? (t = (0, O.$7)(e.choices, s))
                        : e.autocomplete &&
                          (t = null != r.autocomplete && a ? r.autocomplete.query : (0, O.Xf)(r.channel.id, e.name, s)),
                    null == t && (t = s),
                    "" === t && null != r.autocomplete && !a)
                )
                    continue;
                i()(null != r.autocomplete || null != t, `Option "${e.name}" expects a value`),
                    E.push({ type: e.type, name: e.name, value: t, focused: a });
                continue;
            }
            if (e.type === u.n4.ATTACHMENT) {
                if (null != r.autocomplete) continue;
                let t = S.A.getUpload(r.channel.id, e.name, y);
                if (null == t) continue;
                let n = A.length;
                A.push(t), E.push({ type: e.type, name: e.name, value: n, focused: a });
                continue;
            }
            let s = D.filterEmpty(n[e.name]);
            if (
                (i()(null != r.autocomplete || 1 === s.length, `Option "${e.name}" expects a single option type`),
                null == s[0] && !a)
            )
                continue;
            let o = s[0] ?? { type: "text", text: "" };
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
                    "text" === o.type && (t = (0, O.a5)(o.text.trim()));
                    break;
                case u.n4.INTEGER:
                    if ("text" === o.type) {
                        let n = o.text.trim();
                        null != e.choices
                            ? (t = (0, O.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != r.autocomplete && a
                                      ? r.autocomplete.query
                                      : (0, O.lM)(r.channel.id, e.name, n)),
                            null == t && (t = Number(D.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                case u.n4.NUMBER:
                    if ("text" === o.type) {
                        let n = o.text.trim();
                        null != e.choices
                            ? (t = (0, O.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != r.autocomplete && a
                                      ? r.autocomplete.query
                                      : (0, O.lM)(r.channel.id, e.name, n)),
                            null == t && (t = Number(D.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                default:
                    throw Error(`Unsupported option type: ${e.type}`);
            }
            ("" !== t || null == r.autocomplete || a) &&
                (i()(null != r.autocomplete || null != t, `Unexpected value for option "${e.name}"`),
                null != t && E.push({ type: e.type, name: e.name, value: t, focused: a }));
        }
    if (null != t.subCommandPath)
        for (let e = t.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: r } = t.subCommandPath[e];
            E = [{ type: r, name: n, options: E }];
        }
    if (null != t.execute)
        return (
            _.Ay.trackWithMetadata(M.HAw.APPLICATION_COMMAND_USED, {
                command_id: t.id,
                application_id: t.applicationId,
                command_type: t.type,
                location: Y(g),
                source: m,
            }),
            t.execute(E, r)
        );
    if (
        t.inputType === x.y$.BUILT_IN ||
        t.inputType === x.y$.BUILT_IN_TEXT ||
        t.inputType === x.y$.BUILT_IN_INTEGRATION
    )
        return;
    let v = {
            version: t.version,
            id: t.rootCommand?.id ?? t.id,
            guild_id: t.guildId,
            name: t.rootCommand?.name ?? t.untranslatedName,
            type: t.type,
            options: E,
            application_command: t.rootCommand,
        },
        C = () => {
            V(n);
        };
    null != s && (v.target_id = s),
        null != r.autocomplete
            ? (0, R.WL)(t, r, v)
            : (o.A.clearAll(r.channel.id, y),
              B({
                  applicationId: t.applicationId,
                  data: v,
                  context: r,
                  attachments: A,
                  maxSizeCallback: l,
                  onMessageSuccess: C,
                  analytics_location: Y(g),
                  sectionName: d,
                  source: m,
                  interactionLifecycleOptions: await p(t, r, v),
              }));
}
let V = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    "emoji" === e.type
                        ? new h.zT({ names: [e.name.replaceAll(":", "")], surrogates: "", unicodeVersion: 6 })
                        : "customEmoji" === e.type
                          ? p.Ay.getCustomEmojiById(e.emojiId)
                          : null,
                )
                .filter(b.Vq),
        );
        t.length > 0 && a.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: t });
    },
    F = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let r = { channel: t, guild: null != t.guild_id ? y.A.getGuild(t.guild_id) : null };
            B({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: r,
                interactionLifecycleOptions: await H(n.command, r, e.interactionData),
            });
        }
    },
    B = (e) => {
        let {
            applicationId: t,
            data: n,
            context: r,
            attachments: i,
            maxSizeCallback: a,
            onMessageSuccess: s,
            analytics_location: o,
            sectionName: l,
            source: c,
            interactionLifecycleOptions: d,
        } = e;
        if (null == r.channel) return;
        let { channel: _, guild: f } = r,
            p = _.id,
            h = f?.id,
            g = {
                applicationId: t,
                channelId: p,
                guildId: h,
                data: n,
                nonce: d.nonce ?? (0, A.m)(),
                attachments: i,
                maxSizeCallback: a,
                analytics_location: o,
                sectionName: l,
                source: c,
            };
        m.tU(g.nonce, {
            messageId: d.messageId,
            onCreate: d.onCreate,
            onSuccess: d.onSuccess,
            onFailure: d.onFailure,
            data: { interactionType: u.G4.APPLICATION_COMMAND, applicationId: t, channelId: p },
        }),
            null != i && i.length > 0
                ? K(i, g.nonce, h, a).then((e) => {
                      e && j(g, s);
                  })
                : j(g, s);
    };
function j(e, t) {
    c.Ay.enqueue({ type: c.AZ.COMMAND, message: e }, (n) => {
        (0, g.wy)(e.nonce, n, e.applicationId, e.channelId, e.guildId ?? null), n.ok && null != t && t();
    });
}
async function H(e, t, n) {
    if (null == t.channel) return {};
    let r = L.s$({ channel: t.channel, type: "channel" }, n.type, e.applicationId);
    if (null == r) return {};
    let i = r.application?.bot;
    if (null == i && null != r.botId)
        try {
            await l.wz(r.botId);
        } catch {}
    let o = {
        ...(0, E.Ay)({
            channelId: t.channel.id,
            content: "",
            type: n.type === u.kc.CHAT ? M.lAJ.CHAT_INPUT_COMMAND : M.lAJ.CONTEXT_MENU_COMMAND,
            author: i ?? { id: r.id, username: r.name, discriminator: M.h3J, avatar: null, bot: !0 },
        }),
        application: r.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: u.G4.APPLICATION_COMMAND,
            user: (0, E.Vi)(v.default.getCurrentUser()),
        },
        interaction_data: n,
    };
    return (
        s.A.receiveMessage(t.channel.id, o, !0, { applicationId: e.applicationId, command: e }),
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
                null == r && null != n && s.A.sendClydeError(t.channel.id, n);
                let u = r;
                null == u && null != l && (u = (0, g.sW)(l, e.applicationId)),
                    a.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: o.id, channelId: t.channel.id, reason: u });
            },
        }
    );
}
function Y(e) {
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
    let i = (0, C.o2)(n),
        a = (e) => {
            r?.(i, e),
                m.C1(t, M.t02.ENTITY_TOO_LARGE, U.intl.formatToPlainString(U.t.fxEKdS, { maxSize: (0, C.Hb)(i) }));
        },
        { totalSize: s, largestUploadedFileSize: o } = await W(e, !1);
    if (o > Math.max(i, k.VP) || s > N.eM) return a(o), !1;
    try {
        await (0, d.A)(e);
    } catch {
        m.C1(t, void 0, U.intl.formatToPlainString(U.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: s, largestUploadedFileSize: o } = await W(e, !0)),
        (!e.some((e) => e.error === M.t02.ENTITY_TOO_LARGE) && !(s > N.eM)) || (a(o), !1)
    );
}
