(n.d(t, { A: () => B, x: () => V }), n(321073));
var i = n(284009),
    r = n.n(i),
    a = n(127258),
    s = n(73153),
    l = n(148494),
    o = n(608299),
    d = n(803306),
    c = n(155718),
    u = n(779185),
    _ = n(358579),
    E = n(666860),
    A = n(224868),
    h = n(236285),
    f = n(7584),
    I = n(706727),
    p = n(743738),
    T = n(409481),
    m = n(963852),
    g = n(195880),
    S = n(472456),
    N = n(773669),
    C = n(71393),
    O = n(522602),
    R = n(287809),
    L = n(453771),
    y = n(403362),
    D = n(292348),
    v = n(721768),
    b = n(360161),
    P = n(459016),
    M = n(842209),
    U = n(861382),
    w = n(392054),
    G = n(168186),
    x = n(652215),
    k = n(381941),
    F = n(105292);
async function B(e) {
    let {
        command: t,
        optionValues: n,
        context: i,
        commandTargetId: a,
        maxSizeCallback: l,
        commandOrigin: d = w.iw.CHAT,
        sectionName: u,
        interactionLifecycleOptionsFactory: _ = W,
        source: I,
    } = e;
    if (null == i.channel) return;
    let p = U.A.getSource(i.channel.id) ?? I,
        T = U.A.getCommandOrigin(i.channel.id) ?? d;
    (null == i.autocomplete &&
        s.h.dispatch({ type: "APPLICATION_COMMAND_USED", context: i, command: t, commandOrigin: T }),
        await S.A.unarchiveThreadIfNecessary(i.channel.id));
    let m = [],
        g = [],
        C = (0, G.Qr)(T);
    if (null != t.options)
        for (let e of t.options) {
            let t;
            if (e.type === c.n4.SUB_COMMAND || e.type === c.n4.SUB_COMMAND_GROUP || !(e.name in n)) continue;
            let a = i.autocomplete?.name === e.name || void 0;
            if (e.type === c.n4.STRING) {
                let s = P.getOptionalString(n, e.name)?.trim() ?? "";
                if (
                    (null != e.choices
                        ? (t = (0, b.$7)(e.choices, s))
                        : e.autocomplete &&
                          (t = null != i.autocomplete && a ? i.autocomplete.query : (0, b.Xf)(i.channel.id, e.name, s)),
                    null == t && (t = s),
                    "" === t && null != i.autocomplete && !a)
                )
                    continue;
                (r()(null != i.autocomplete || null != t, `Option "${e.name}" expects a value`),
                    m.push({ type: e.type, name: e.name, value: t, focused: a }));
                continue;
            }
            if (e.type === c.n4.ATTACHMENT) {
                if (null != i.autocomplete) continue;
                let t = O.A.getUpload(i.channel.id, e.name, C);
                if (null == t) continue;
                let n = g.length;
                (g.push(t), m.push({ type: e.type, name: e.name, value: n, focused: a }));
                continue;
            }
            let s = P.filterEmpty(n[e.name]);
            if (
                (r()(null != i.autocomplete || 1 === s.length, `Option "${e.name}" expects a single option type`),
                null == s[0] && !a)
            )
                continue;
            let l = s[0] ?? { type: "text", text: "" };
            switch (e.type) {
                case c.n4.CHANNEL:
                    if ("channelMention" === l.type) t = l.channelId;
                    else if ("text" === l.type)
                        if ((0, G.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, A.f)(l.text, i.guild?.id, i.channel.id);
                            (r()(e?.type === "channelMention", `Failed to resolve ${l.text}`), (t = e.channelId));
                        }
                    break;
                case c.n4.ROLE:
                    if ("roleMention" === l.type) t = l.roleId;
                    else if ("text" === l.type)
                        if ((0, G.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, A.f)(l.text, i.guild?.id, i.channel.id, { allowUsers: !1 });
                            (r()(e?.type === "roleMention", `Failed to resolve ${l.text}`), (t = e.roleId));
                        }
                    else "textMention" === l.type && "@everyone" === l.text && (t = i.guild?.id);
                    break;
                case c.n4.USER:
                    if ("userMention" === l.type) t = l.userId;
                    else if ("text" === l.type)
                        if ((0, G.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, A.f)(l.text, i.guild?.id, i.channel.id, { allowRoles: !1 });
                            (r()(e?.type === "userMention", `Failed to resolve ${l.text}`), (t = e.userId));
                        }
                    break;
                case c.n4.MENTIONABLE:
                    if ("userMention" === l.type) t = l.userId;
                    else if ("roleMention" === l.type) t = l.roleId;
                    else if ("textMention" === l.type && "@everyone" === l.text) t = i.guild?.id;
                    else if ("text" === l.type)
                        if ((0, G.hT)(l.text)) t = l.text.trim();
                        else {
                            let e = (0, A.f)(l.text, i.guild?.id, i.channel.id);
                            e?.type === "userMention"
                                ? (t = e.userId)
                                : e?.type === "roleMention"
                                  ? (t = e.roleId)
                                  : e?.type === "textMention" && "@everyone" === e.text
                                    ? (t = i.guild?.id)
                                    : r()(!1, `Failed to resolve ${l.text}`);
                        }
                    break;
                case c.n4.BOOLEAN:
                    "text" === l.type && (t = (0, b.a5)(l.text.trim()));
                    break;
                case c.n4.INTEGER:
                    if ("text" === l.type) {
                        let n = l.text.trim();
                        (null != e.choices
                            ? (t = (0, b.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != i.autocomplete && a
                                      ? i.autocomplete.query
                                      : (0, b.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(P.normalizeNumericString(N.default.locale, n))));
                    }
                    break;
                case c.n4.NUMBER:
                    if ("text" === l.type) {
                        let n = l.text.trim();
                        (null != e.choices
                            ? (t = (0, b.Bk)(e.choices, n))
                            : e.autocomplete &&
                              (t =
                                  null != i.autocomplete && a
                                      ? i.autocomplete.query
                                      : (0, b.lM)(i.channel.id, e.name, n)),
                            null == t && (t = Number(P.normalizeNumericString(N.default.locale, n))));
                    }
                    break;
                default:
                    throw Error(`Unsupported option type: ${e.type}`);
            }
            ("" !== t || null == i.autocomplete || a) &&
                (r()(null != i.autocomplete || null != t, `Unexpected value for option "${e.name}"`),
                null != t && m.push({ type: e.type, name: e.name, value: t, focused: a }));
        }
    if (null != t.subCommandPath)
        for (let e = t.subCommandPath.length - 1; e >= 0; e -= 1) {
            let { name: n, type: i } = t.subCommandPath[e];
            m = [{ type: i, name: n, options: m }];
        }
    if (null != t.execute)
        return (
            E.Ay.trackWithMetadata(x.HAw.APPLICATION_COMMAND_USED, {
                command_id: t.id,
                application_id: t.applicationId,
                command_type: t.type,
                location: Y(T),
                source: p,
            }),
            t.execute(m, i)
        );
    if (
        t.inputType === w.y$.BUILT_IN ||
        t.inputType === w.y$.BUILT_IN_TEXT ||
        t.inputType === w.y$.BUILT_IN_INTEGRATION
    )
        return;
    let R = {
        version: t.version,
        id: t.rootCommand?.id ?? t.id,
        guild_id: t.guildId,
        name: t.rootCommand?.name ?? t.untranslatedName,
        type: t.type,
        options: m,
        application_command: t.rootCommand,
    };
    (null != a && (R.target_id = a),
        null != i.autocomplete
            ? (0, v.WL)(t, i, R)
            : (o.A.clearAll(i.channel.id, C),
              H({
                  applicationId: t.applicationId,
                  data: R,
                  context: i,
                  attachments: g,
                  maxSizeCallback: l,
                  onMessageSuccess: function () {
                      let e;
                      (e = Object.values(n).flatMap((e) =>
                          e
                              .map((e) =>
                                  "emoji" === e.type
                                      ? new f.zT({
                                            names: [e.name.replaceAll(":", "")],
                                            surrogates: "",
                                            unicodeVersion: 6,
                                        })
                                      : "customEmoji" === e.type
                                        ? h.Ay.getCustomEmojiById(e.emojiId)
                                        : null,
                              )
                              .filter(y.Vq),
                      )).length > 0 && s.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: e });
                  },
                  analytics_location: Y(T),
                  sectionName: u,
                  source: p,
                  interactionLifecycleOptions: await _(t, i, R),
              })));
}
async function V(e, t, n) {
    if (e.isCommandType() && null != e.interactionData && null != n.command) {
        let i = { channel: t, guild: null != t.guild_id ? C.A.getGuild(t.guild_id) : null };
        H({
            applicationId: n.command.applicationId,
            data: e.interactionData,
            context: i,
            interactionLifecycleOptions: await W(n.command, i, e.interactionData),
        });
    }
}
function H(e) {
    let {
        applicationId: t,
        data: n,
        context: i,
        attachments: r,
        maxSizeCallback: s,
        onMessageSuccess: l,
        analytics_location: o,
        sectionName: d,
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
            nonce: u.nonce ?? (0, g.m)(),
            attachments: r,
            maxSizeCallback: s,
            analytics_location: o,
            sectionName: d,
            source: c,
        };
    (I.tU(f.nonce, {
        messageId: u.messageId,
        onCreate: u.onCreate,
        onSuccess: u.onSuccess,
        onFailure: u.onFailure,
        data: { interactionType: a.G.APPLICATION_COMMAND, applicationId: t, channelId: A },
    }),
        null != r && r.length > 0
            ? $(r, f.nonce, h, s).then((e) => {
                  e && j(f, l);
              })
            : j(f, l));
}
function j(e, t) {
    u.Ay.enqueue({ type: u.AZ.COMMAND, message: e }, (n) => {
        ((0, p.wy)(e.nonce, n, e.applicationId, e.channelId, e.guildId ?? null), n.ok && null != t && t());
    });
}
async function W(e, t, n) {
    if (null == t.channel) return {};
    let i = M.s$({ channel: t.channel, type: "channel" }, n.type, e.applicationId);
    if (null == i) return {};
    let r = i.application?.bot;
    if (null == r && null != i.botId)
        try {
            await d.wz(i.botId);
        } catch {}
    let o = {
        ...(0, m.Ay)({
            channelId: t.channel.id,
            content: "",
            type: n.type === c.kc.CHAT ? x.lAJ.CHAT_INPUT_COMMAND : x.lAJ.CONTEXT_MENU_COMMAND,
            author: r ?? { id: i.id, username: i.name, discriminator: x.h3J, avatar: null, bot: !0 },
        }),
        application: i.application,
        interaction: {
            id: n.id,
            name: n.name,
            name_localized: e.displayName,
            type: a.G.APPLICATION_COMMAND,
            user: (0, m.Vi)(R.default.getCurrentUser()),
        },
        interaction_data: n,
    };
    return (
        l.A.receiveMessage(t.channel.id, o, !0, { applicationId: e.applicationId, command: e }),
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
            onFailure: (n, i, r, a) => {
                if (null == t.channel) return;
                null == i && null != n && l.A.sendClydeError(t.channel.id, n);
                let d = i;
                (null == d && null != a && (d = (0, p.sW)(a, e.applicationId)),
                    s.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: o.id, channelId: t.channel.id, reason: d }));
            },
        }
    );
}
function Y(e) {
    switch (e) {
        case w.iw.APPLICATION_LAUNCHER:
            return w.Oh.APP_LAUNCHER;
        case w.iw.APP_LAUNCHER_APPLICATION_VIEW:
            return w.Oh.APP_LAUNCHER_APPLICATION_VIEW;
        case w.iw.IMAGE_RECS_MENU:
            return w.Oh.IMAGE_RECS_MENU;
        case w.iw.IMAGE_RECS_SUBMENU:
            return w.Oh.IMAGE_RECS_SUBMENU;
        case w.iw.ACTIVITY_INSTANCE_EMBED:
            return w.Oh.ACTIVITY_INSTANCE_EMBED;
        case w.iw.ACTIVITY_BOOKMARK_EMBED:
            return w.Oh.ACTIVITY_BOOKMARK_EMBED;
        case w.iw.MINI_SHELF:
            return w.Oh.ACTIVITIES_MINI_SHELF;
        case w.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
            return w.Oh.VC_TILE_ACTIVITY_SUGGESTION;
        case w.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
            return w.Oh.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
        default:
            return w.Oh.SLASH_UI;
    }
}
async function K(e, t) {
    let n = 0,
        i = 0;
    for (let r of e) {
        let e = t ? (r.currentSize ?? 0) : await r.getSize();
        (e > i && (i = e), (n += e));
    }
    return { totalSize: n, largestUploadedFileSize: i };
}
async function $(e, t, n, i) {
    let r = (0, T.C)((0, L.o2)(n)),
        a = (0, D.jS)({ location: "executeCommand.stageAttachments" });
    function s(e) {
        (i?.(r, e), I.C1(t, x.t02.ENTITY_TOO_LARGE, F.intl.formatToPlainString(F.t.fxEKdS, { maxSize: (0, L.Hb)(r) })));
    }
    let { totalSize: l, largestUploadedFileSize: o } = await K(e, !1);
    if (o > Math.max(r, k.VP) || l > a) return (s(o), !1);
    try {
        await (0, _.A)(e);
    } catch {
        I.C1(t, void 0, F.intl.formatToPlainString(F.t["9h1/1p"], { count: e.length }));
    }
    return (
        ({ totalSize: l, largestUploadedFileSize: o } = await K(e, !0)),
        (!e.some((e) => e.error === x.t02.ENTITY_TOO_LARGE) && !(l > a)) || (s(o), !1)
    );
}
