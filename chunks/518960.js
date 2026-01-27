n.d(t, {
    R: () => E,
    V: () => T,
}),
    n(896048),
    n(65821);
var i = n(367513),
    l = n(843472),
    r = n(608299),
    o = n(23658),
    a = n(743445),
    s = n(565150),
    u = n(58149),
    c = n(313961),
    d = n(301169),
    p = n(522602),
    h = n(287809),
    m = n(954571),
    f = n(453771),
    g = n(927578),
    b = n(382287),
    y = n(652215),
    O = n(381941),
    v = n(788868),
    j = n(985018);

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}

function T(e, t, n) {
    let i = h.default.getCurrentUser(),
        l = e.guild_id,
        r = f.o2(l),
        a = Array.from(t).map((e) => e.size),
        s = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        c = a.reduce((e, t) => e + t, 0),
        d = a.length > 0 ? Math.max(...a) : 0,
        p = a.length;
    if (d > r) {
        let t = null == n ? void 0 : n.reduce((e, t) => e + t, 0);
        (0, u.zV)(y.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: l,
            user_individual_file_size_limit: r,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: c,
            num_attachments: p,
            error_type: O.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t,
        }),
            (0, o.openUploadError)({
                title: j.intl.string(j.t["/tGlcj"]),
                help: (0, b.WQ)(i, l),
                showPremiumUpsell: !(0, g.YE)(i, v.PremiumTypes.TIER_2),
                fileSize: d,
            });
        return;
    }
    (0, o.openUploadError)({
        title: j.intl.string(j.t["/tGlcj"]),
        help: j.intl.formatToPlainString(j.t.tUOJdH, {
            maxSize: f.Hb(f.bB()),
        }),
    });
}
async function E(e, t, n) {
    let {
        filesMetadata: u,
        requireConfirm: h = !0,
        isThumbnail: f = !1,
        origin: g,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != u && u.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let v = t.getGuildId(),
        E = Array.from(e),
        I = E.map((e) => ({
            originalContentType: e.type,
            preCompressionSize: e.size,
        }));
    if ((await Promise.resolve(), (0, b.fJ)(E, v))) return void T(t, E);
    if (p.A.getUploadCount(t.id, n) + E.length > y.XgB) {
        (0, o.openUploadError)({
            title: j.intl.string(j.t.wOr6hB),
            help: j.intl.formatToPlainString(j.t["qqyp/e"], {
                limit: y.XgB,
            }),
        }),
            m.default.track(y.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: p.A.getUploadCount(t.id, n),
                new_count: E.length,
            });
        return;
    }
    if (
        ((t.type !== y.rbe.GUILD_VOICE && t.type !== y.rbe.GUILD_STAGE_VOICE) ||
            c.A.getChatOpen(t.id) ||
            i.A.updateChatOpen(t.id, !0),
        h)
    ) {
        let e = E.map((e, t) =>
            A(
                {
                    file: e,
                    platform: s.xz.WEB,
                    isThumbnail: f,
                    origin: g,
                    compressionMetadata: I[t],
                },
                null == u ? void 0 : u[t],
            ),
        );
        r.A.addFiles({
            files: e,
            channelId: t.id,
            draftType: n,
        });
    } else {
        let e = E.map((e, n) => {
            let i = null != u ? u[n] : {};
            return new a.bK(
                A(
                    {
                        file: e,
                        platform: s.xz.WEB,
                        isThumbnail: f,
                        origin: g,
                        compressionMetadata: I[n],
                    },
                    i,
                ),
                t.id,
            );
        });
        l.A.sendMessage(
            t.id,
            {
                content: "",
                tts: !1,
                invalidEmojis: [],
                validNonShortcutEmojis: [],
            },
            void 0,
            {
                eagerDispatch: !1,
                attachmentsToUpload: e,
                location: O.Hx.INSTANT_UPLOAD,
                onAttachmentUploadError: (e, n, i) => {
                    (0, d.k)({
                        file: e,
                        guildId: t.getGuildId(),
                        analyticsLocations: [],
                        code: n,
                        reason: i,
                    });
                },
            },
        );
    }
}
