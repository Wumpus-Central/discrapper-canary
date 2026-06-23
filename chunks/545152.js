"use strict";
n.d(t, { A: () => G, x: () => F }), n(321073);
var i = n(284009),
    r = n.n(i),
    s = n(228366),
    a = n(493336),
    o = n(608299),
    l = n(803306),
    u = n(155718),
    c = n(779185),
    d = n(358579),
    _ = n(95561),
    h = n(224868),
    f = n(159273),
    p = n(7584),
    E = n(706727),
    m = n(743738),
    g = n(963852),
    A = n(195880),
    I = n(867455),
    T = n(773669),
    S = n(71393),
    y = n(522602),
    C = n(287809),
    N = n(453771),
    v = n(403362),
    R = n(292348),
    O = n(721768),
    b = n(360161),
    D = n(459016),
    L = n(842209),
    w = n(861382),
    M = n(392054),
    P = n(168186),
    x = n(652215),
    k = n(381941),
    U = n(375708);
async function G(e) {
    let {
        command: t,
        optionValues: n,
        context: i,
        commandTargetId: a,
        maxSizeCallback: l,
        commandOrigin: c = M.iw.CHAT,
        sectionName: d,
        interactionLifecycleOptionsFactory: E = j,
        source: m,
    } = e;
    if (null == i.channel) return;
    let g = w.A.getSource(i.channel.id) ?? m,
        A = w.A.getCommandOrigin(i.channel.id) ?? c;
    null == i.autocomplete &&
        s.h.dispatch({ type: "APPLICATION_COMMAND_USED", context: i, command: t, commandOrigin: A }),
        await I.A.unarchiveThreadIfNecessary(i.channel.id);
    let S = [],
        C = [],
        N = (0, P.Qr)(A);
    if (null != t.options)
        for (let e of t.options) {
            let t;
            if (e.type === u.n4.SUB_COMMAND || e.type === u.n4.SUB_COMMAND_GROUP || !(e.name in n)) continue;
            let s = i.autocomplete?.name === e.name || void 0;
            if (e.type === u.n4.STRING) {
                let a = D.getOptionalString(n, e.name)?.trim() ?? "";
                if (
                    (null != e.choices
                        ? (t = (0, b.$7)(e.choices, a))
                        : e.autocomplete &&
                          (t = null != i.autocomplete && s ? i.autocomplete.query : (0, b.Xf)(i.channel.id, e.name, a)),
                    null == t && (t = a),
                    "" === t && null != i.autocomplete && !s)
                )
                    continue;
                r()(null != i.autocomplete || null != t, `Option "${e.name}" expects a value`),
                    S.push({ type: e.type, name: e.name, value: t, focused: s });
                continue;
            }
            if (e.type === u.n4.ATTACHMENT) {
                if (null != i.autocomplete) continue;
                let t = y.A.getUpload(i.channel.id, e.name, N);
                if (null == t) continue;
                let n = C.length;
                C.push(t), S.push({ type: e.type, name: e.name, value: n, focused: s });
                continue;
            }
            let a = D.filterEmpty(n[e.name]);
            if (
                (r()(null != i.autocomplete || 1 === a.length, `Option "${e.name}" expects a single option type`),
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
                            let e = (0, h.f)(o.text, i.guild?.id, i.channel.id);
                            r()(e?.type === "channelMention", `Failed to resolve ${o.text}`), (t = e.channelId);
                        }
                    break;
                case u.n4.ROLE:
                    if ("roleMention" === o.type) t = o.roleId;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, h.f)(o.text, i.guild?.id, i.channel.id, { allowUsers: !1 });
                            r()(e?.type === "roleMention", `Failed to resolve ${o.text}`), (t = e.roleId);
                        }
                    else "textMention" === o.type && "@everyone" === o.text && (t = i.guild?.id);
                    break;
                case u.n4.USER:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, h.f)(o.text, i.guild?.id, i.channel.id, { allowRoles: !1 });
                            r()(e?.type === "userMention", `Failed to resolve ${o.text}`), (t = e.userId);
                        }
                    break;
                case u.n4.MENTIONABLE:
                    if ("userMention" === o.type) t = o.userId;
                    else if ("roleMention" === o.type) t = o.roleId;
                    else if ("textMention" === o.type && "@everyone" === o.text) t = i.guild?.id;
                    else if ("text" === o.type)
                        if ((0, P.hT)(o.text)) t = o.text.trim();
                        else {
                            let e = (0, h.f)(o.text, i.guild?.id, i.channel.id);
                            e?.type === "userMention"
                                ? (t = e.userId)
                                : e?.type === "roleMention"
                                  ? (t = e.roleId)
                                  : e?.type === "textMention" && "@everyone" === e.text
                                    ? (t = i.guild?.id)
                                    : r()(!1, `Failed to resolve ${o.text}`);
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
                                  null != i.autocomplete && s
                                      ? i.autocomplete.query
                                      : (0, b.lM)(i.channel.id, e.name, n)),
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
                                  null != i.autocomplete && s
                                      ? i.autocomplete.query
                                      : (0, b.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(D.normalizeNumericString(T.default.locale, n)));
                    }
                    break;
                default:
                    throw Error(`Unsupported option type: ${e.type}`);
            }
            ("" !== t || null == i.autocomplete || s) &&
                (r()(null != i.autocomplete || null != t, `Unexpected value for option "${e.name}"`),
                null != t && S.push({ type: e.type, name: e.name, value: t, focused: s }));
        }
    if (null != t.subCommandPath)
        for (let e = t.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: i } = t.subCommandPath[e];
            S = [{ type: i, name: n, options: S }];
        }
    if (null != t.execute)
        return (
            _.Ay.trackWithMetadata(x.HAw.APPLICATION_COMMAND_USED, {
                command_id: t.id,
                application_id: t.applicationId,
                command_type: t.type,
                location: H(A),
                source: g,
            }),
            t.execute(S, i)
        );
    if (
        t.inputType === M.y$.BUILT_IN ||
        t.inputType === M.y$.BUILT_IN_TEXT ||
        t.inputType === M.y$.BUILT_IN_INTEGRATION
    )
        return;
    let R = {
        version: t.version,
        id: t.rootCommand?.id ?? t.id,
        guild_id: t.guildId,
        name: t.rootCommand?.name ?? t.untranslatedName,
        type: t.type,
        options: S,
        application_command: t.rootCommand,
    };
    null != a && (R.target_id = a),
        null != i.autocomplete
            ? (0, O.WL)(t, i, R)
            : (o.A.clearAll(i.channel.id, N),
              V({
                  applicationId: t.applicationId,
                  data: R,
                  context: i,
                  attachments: C,
                  maxSizeCallback: l,
                  onMessageSuccess: function () {
                      let e;
                      (e = Object.values(n).flatMap((e) =>
                          e
                              .map((e) =>
                                  "emoji" === e.type
                                      ? new p.zT({
                                            names: [e.name.replaceAll(":", "")],
                                            surrogates: "",
                                            unicodeVersion: 6,
                                        })
                                      : "customEmoji" === e.type
                                        ? f.Ay.getCustomEmojiById(e.emojiId)
                                        : null,
                              )
                              .filter(v.Vq),
                      )).length > 0 && s.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: e });
                  },
                  analytics_location: H(A),
                  sectionName: d,
                  source: g,
                  interactionLifecycleOptions: await E(t, i, R),
              }));
}
async function F(e, t, n) {
    if (e.isCommandType() && null != e.interactionData && null != n.command) {
        let i = { channel: t, guild: null != t.guild_id ? S.A.getGuild(t.guild_id) : null };
        V({
            applicationId: n.command.applicationId,
            data: e.interactionData,
            context: i,
            interactionLifecycleOptions: await j(n.command, i, e.interactionData),
        });
    }
}
function V(e) {
    let {
        applicationId: t,
        data: n,
        context: i,
        attachments: r,
        maxSizeCallback: s,
        onMessageSuccess: a,
        analytics_location: o,
        sectionName: l,
        source: c,
        interactionLifecycleOptions: d,
    } = e;
    if (null == i.channel) return;
    let { channel: _, guild: h } = i,
        f = _.id,
        p = h?.id,
        m = {
            applicationId: t,
            channelId: f,
            guildId: p,
            data: n,
            nonce: d.nonce ?? (0, A.m)(),
            attachments: r,
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
        data: { interactionType: u.G4.APPLICATION_COMMAND, applicationId: t, channelId: f },
    }),
        null != r && r.length > 0
            ? W(r, m.nonce, p, s).then((e) => {
                  e && B(m, a);
              })
            : B(m, a);
}
function B(e, t) {
    c.Ay.enqueue({ type: c.AZ.COMMAND, message: e }, (n) => {
        (0, m.wy)(e.nonce, n, e.applicationId, e.channelId, e.guildId ?? null), n.ok && null != t && t();
    });
}
async function j(e, t, n) {
    if (null == t.channel) return {};
    let i = L.s$({ channel: t.channel, type: "channel" }, n.type, e.applicationId);
    if (null == i) return {};
    let r = i.application?.bot;
    if (null == r && null != i.botId)
        try {
            await l.wz(i.botId);
        } catch {}
    let o = {
        ...(0, g.Ay)({
            channelId: t.channel.id,
            content: "",
            type: n.type === u.kc.CHAT ? x.lAJ.CHAT_INPUT_COMMAND : x.lAJ.CONTEXT_MENU_COMMAND,
            author: r ?? { id: i.id, username: i.name, discriminator: x.h3J, avatar: null, bot: !0 },
        }),
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: u.G4.APPLICATION_COMMAND,
            user: (0, g.Vi)(C.default.getCurrentUser()),
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
                let u = i;
                null == u && null != l && (u = (0, m.sW)(l, e.applicationId)),
                    s.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: o.id, channelId: t.channel.id, reason: u });
            },
        }
    );
}
function H(e) {
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
async function Y(e, t) {
    let n = 0,
        i = 0;
    for (let r of e) {
        let e = t ? (r.currentSize ?? 0) : await r.getSize();
        e > i && (i = e), (n += e);
    }
    return { totalSize: n, largestUploadedFileSize: i };
}
async function W(e, t, n, i) {
    let r = (0, N.o2)(n);
    function s(e) {
        i?.(r, e), E.C1(t, x.t02.ENTITY_TOO_LARGE, U.intl.formatToPlainString(U.t.fxEKdS, { maxSize: (0, N.Hb)(r) }));
    }
    let { totalSize: a, largestUploadedFileSize: o } = await Y(e, !1);
    if (o > Math.max(r, k.VP) || a > R.eM) return s(o), !1;
    try {
        await (0, d.A)(e);
    } catch {
        E.C1(t, void 0, U.intl.formatToPlainString(U.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: a, largestUploadedFileSize: o } = await Y(e, !0)),
        (!e.some((e) => e.error === x.t02.ENTITY_TOO_LARGE) && !(a > R.eM)) || (s(o), !1)
    );
}
