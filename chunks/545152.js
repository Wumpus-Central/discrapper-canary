"use strict";
n.d(t, { A: () => G, x: () => F }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(228366),
    a = n(720149),
    o = n(608299),
    l = n(803306),
    d = n(155718),
    _ = n(884384),
    u = n(358579),
    c = n(58149),
    E = n(224868),
    h = n(159273),
    m = n(7584),
    f = n(706727),
    g = n(296043),
    p = n(963852),
    A = n(195880),
    I = n(867455),
    T = n(773669),
    S = n(71393),
    N = n(522602),
    C = n(287809),
    R = n(453771),
    O = n(403362),
    y = n(292348),
    v = n(721768),
    D = n(360161),
    L = n(258363),
    b = n(842209),
    w = n(861382),
    P = n(392054),
    k = n(168186),
    M = n(652215),
    U = n(381941),
    x = n(985018);
async function G(e) {
    let {
        command: t,
        optionValues: n,
        context: i,
        commandTargetId: a,
        maxSizeCallback: l,
        commandOrigin: _ = P.iw.CHAT,
        sectionName: u,
        interactionLifecycleOptionsFactory: h = j,
        source: m,
    } = e;
    if (null == i.channel) return;
    let f = w.A.getSource(i.channel.id) ?? m,
        g = w.A.getCommandOrigin(i.channel.id) ?? _;
    null == i.autocomplete &&
        s.h.dispatch({ type: "APPLICATION_COMMAND_USED", context: i, command: t, commandOrigin: g }),
        await I.A.unarchiveThreadIfNecessary(i.channel.id);
    let p = [],
        A = [],
        S = (0, k.Qr)(g);
    if (null != t.options)
        for (let e of t.options) {
            let t;
            if (e.type === d.n4.SUB_COMMAND || e.type === d.n4.SUB_COMMAND_GROUP || !(e.name in n)) continue;
            let s = i.autocomplete?.name === e.name || void 0;
            if (e.type === d.n4.STRING) {
                let a = L.getOptionalString(n, e.name)?.trim() ?? "";
                if (
                    (null != e.choices
                        ? (t = (0, D.$7)(e.choices, a))
                        : e.autocomplete &&
                          (t = null != i.autocomplete && s ? i.autocomplete.query : (0, D.Xf)(i.channel.id, e.name, a)),
                    null == t && (t = a),
                    "" === t && null != i.autocomplete && !s)
                )
                    continue;
                r()(null != i.autocomplete || null != t, `Option "${e.name}" expects a value`),
                    p.push({ type: e.type, name: e.name, value: t, focused: s });
                continue;
            }
            if (e.type === d.n4.ATTACHMENT) {
                if (null != i.autocomplete) continue;
                let t = N.A.getUpload(i.channel.id, e.name, S);
                if (null == t) continue;
                let n = A.length;
                A.push(t), p.push({ type: e.type, name: e.name, value: n, focused: s });
                continue;
            }
            let a = L.filterEmpty(n[e.name]);
            if (
                (r()(null != i.autocomplete || 1 === a.length, `Option "${e.name}" expects a single option type`),
                null == a[0] && !s)
            )
                continue;
            let o = a[0] ?? { type: "text", text: "" };
            switch (e.type) {
                case d.n4.CHANNEL:
                    if ("channelMention" === o.type) t = o.channelId;
                    else if ("text" === o.type)
                        if ((0, k.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, E.f)(o.text, i.guild?.id, i.channel.id);
                            r()(e?.type === "channelMention", `Failed to resolve ${o.text}`), (t = e.channelId);
                        }
                    break;
                case d.n4.ROLE:
                    if ("roleMention" === o.type) t = o.roleId;
                    else if ("text" === o.type)
                        if ((0, k.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, E.f)(o.text, i.guild?.id, i.channel.id, { allowUsers: !1 });
                            r()(e?.type === "roleMention", `Failed to resolve ${o.text}`), (t = e.roleId);
                        }
                    else "textMention" === o.type && "@everyone" === o.text && (t = i.guild?.id);
                    break;
                case d.n4.USER:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("text" === o.type)
                        if ((0, k.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, E.f)(o.text, i.guild?.id, i.channel.id, { allowRoles: !1 });
                            r()(e?.type === "userMention", `Failed to resolve ${o.text}`), (t = e.userId);
                        }
                    break;
                case d.n4.MENTIONABLE:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("roleMention" === o.type) t = o.roleId;
                    else if ("textMention" === o.type && "@everyone" === o.text) t = i.guild?.id;
                    else if ("text" === o.type)
                        if ((0, k.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, E.f)(o.text, i.guild?.id, i.channel.id);
                            e?.type === "userMention"
                                ? (t = e.userId)
                                : e?.type === "roleMention"
                                  ? (t = e.roleId)
                                  : e?.type === "textMention" && "@everyone" === e.text
                                    ? (t = i.guild?.id)
                                    : r()(!1, `Failed to resolve ${o.text}`);
                        }
                    break;
                case d.n4.BOOLEAN:
                    "text" === o.type && (t = (0, D.a5)(o.text.trim()));
                    break;
                case d.n4.INTEGER:
                    if ("text" === o.type) {
                        let n = o.text.trim();
                        null != e.choices
                            ? (t = (0, D.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != i.autocomplete && s
                                      ? i.autocomplete.query
                                      : (0, D.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(L.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                case d.n4.NUMBER:
                    if ("text" === o.type) {
                        let n = o.text.trim();
                        null != e.choices
                            ? (t = (0, D.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != i.autocomplete && s
                                      ? i.autocomplete.query
                                      : (0, D.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(L.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                default:
                    throw Error(`Unsupported option type: ${e.type}`);
            }
            ("" !== t || null == i.autocomplete || s) &&
                (r()(null != i.autocomplete || null != t, `Unexpected value for option "${e.name}"`),
                null != t && p.push({ type: e.type, name: e.name, value: t, focused: s }));
        }
    if (null != t.subCommandPath)
        for (let e = t.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: i } = t.subCommandPath[e];
            p = [{ type: i, name: n, options: p }];
        }
    if (null != t.execute)
        return (
            c.Ay.trackWithMetadata(M.HAw.APPLICATION_COMMAND_USED, {
                command_id: t.id,
                application_id: t.applicationId,
                command_type: t.type,
                location: W(g),
                source: f,
            }),
            t.execute(p, i)
        );
    if (
        t.inputType === P.y$.BUILT_IN ||
        t.inputType === P.y$.BUILT_IN_TEXT ||
        t.inputType === P.y$.BUILT_IN_INTEGRATION
    )
        return;
    let C = {
        version: t.version,
        id: t.rootCommand?.id ?? t.id,
        guild_id: t.guildId,
        name: t.rootCommand?.name ?? t.untranslatedName,
        type: t.type,
        options: p,
        application_command: t.rootCommand,
    };
    null != a && (C.target_id = a),
        null != i.autocomplete
            ? (0, v.WL)(t, i, C)
            : (o.A.clearAll(i.channel.id, S),
              B({
                  applicationId: t.applicationId,
                  data: C,
                  context: i,
                  attachments: A,
                  maxSizeCallback: l,
                  onMessageSuccess: () => {
                      V(n);
                  },
                  analytics_location: W(g),
                  sectionName: u,
                  source: f,
                  interactionLifecycleOptions: await h(t, i, C),
              }));
}
let V = (e) => {
        let t = Object.values(e).flatMap((e) =>
            e
                .map((e) =>
                    "emoji" === e.type
                        ? new m.zT({ names: [e.name.replaceAll(":", "")], surrogates: "", unicodeVersion: 6 })
                        : "customEmoji" === e.type
                          ? h.Ay.getCustomEmojiById(e.emojiId)
                          : null,
                )
                .filter(O.Vq),
        );
        t.length > 0 && s.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: t });
    },
    F = async (e, t, n) => {
        if (e.isCommandType() && null != e.interactionData && null != n.command) {
            let i = { channel: t, guild: null != t.guild_id ? S.A.getGuild(t.guild_id) : null };
            B({
                applicationId: n.command.applicationId,
                data: e.interactionData,
                context: i,
                interactionLifecycleOptions: await j(n.command, i, e.interactionData),
            });
        }
    },
    B = (e) => {
        let {
            applicationId: t,
            data: n,
            context: i,
            attachments: r,
            maxSizeCallback: s,
            onMessageSuccess: a,
            analytics_location: o,
            sectionName: l,
            source: _,
            interactionLifecycleOptions: u,
        } = e;
        if (null == i.channel) return;
        let { channel: c, guild: E } = i,
            h = c.id,
            m = E?.id,
            g = {
                applicationId: t,
                channelId: h,
                guildId: m,
                data: n,
                nonce: u.nonce ?? (0, A.m)(),
                attachments: r,
                maxSizeCallback: s,
                analytics_location: o,
                sectionName: l,
                source: _,
            };
        f.tU(g.nonce, {
            messageId: u.messageId,
            onCreate: u.onCreate,
            onSuccess: u.onSuccess,
            onFailure: u.onFailure,
            data: { interactionType: d.G4.APPLICATION_COMMAND, applicationId: t, channelId: h },
        }),
            null != r && r.length > 0
                ? K(r, g.nonce, m, s).then((e) => {
                      e && H(g, a);
                  })
                : H(g, a);
    };
function H(e, t) {
    _.Ay.enqueue({ type: _.AZ.COMMAND, message: e }, (n) => {
        (0, g.wy)(e.nonce, n, e.applicationId, e.channelId, e.guildId ?? null), n.ok && null != t && t();
    });
}
async function j(e, t, n) {
    if (null == t.channel) return {};
    let i = b.s$({ channel: t.channel, type: "channel" }, n.type, e.applicationId);
    if (null == i) return {};
    let r = i.application?.bot;
    if (null == r && null != i.botId)
        try {
            await l.wz(i.botId);
        } catch {}
    let o = {
        ...(0, p.Ay)({
            channelId: t.channel.id,
            content: "",
            type: n.type === d.kc.CHAT ? M.lAJ.CHAT_INPUT_COMMAND : M.lAJ.CONTEXT_MENU_COMMAND,
            author: r ?? { id: i.id, username: i.name, discriminator: M.h3J, avatar: null, bot: !0 },
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
            onFailure: (n, i, r, l) => {
                if (null == t.channel) return;
                null == i && null != n && a.A.sendClydeError(t.channel.id, n);
                let d = i;
                null == d && null != l && (d = (0, g.sW)(l, e.applicationId)),
                    s.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: o.id, channelId: t.channel.id, reason: d });
            },
        }
    );
}
function W(e) {
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
async function Y(e, t) {
    let n = 0,
        i = 0;
    for (let r of e) {
        let e = t ? (r.currentSize ?? 0) : await r.getSize();
        e > i && (i = e), (n += e);
    }
    return { totalSize: n, largestUploadedFileSize: i };
}
async function K(e, t, n, i) {
    let r = (0, R.o2)(n),
        s = (e) => {
            i?.(r, e),
                f.C1(t, M.t02.ENTITY_TOO_LARGE, x.intl.formatToPlainString(x.t.fxEKdS, { maxSize: (0, R.Hb)(r) }));
        },
        { totalSize: a, largestUploadedFileSize: o } = await Y(e, !1);
    if (o > Math.max(r, U.VP) || a > y.eM) return s(o), !1;
    try {
        await (0, u.A)(e);
    } catch {
        f.C1(t, void 0, x.intl.formatToPlainString(x.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: a, largestUploadedFileSize: o } = await Y(e, !0)),
        (!e.some((e) => e.error === M.t02.ENTITY_TOO_LARGE) && !(a > y.eM)) || (s(o), !1)
    );
}
