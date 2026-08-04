i.d(t, { R: () => z, V: () => w });
var r = i(367513),
    n = i(148494),
    l = i(608299),
    o = i(494921),
    a = i(280889),
    s = i(565150),
    d = i(95561),
    p = i(313961),
    m = i(795129),
    u = i(346293),
    c = i(550642),
    f = i(823099),
    g = i(522602),
    E = i(287809),
    h = i(174459),
    A = i(453771),
    y = i(158045),
    T = i(382287),
    _ = i(652215),
    I = i(381941),
    S = i(202541),
    U = i(375708);
function w(e, t, i) {
    let r = E.default.getCurrentUser(),
        n = e.guild_id,
        l = A.o2(n),
        a = (0, c.R8)({ location: "web.showUploadFileSizeExceededError" }),
        s = (0, c.Jy)(a, l),
        p = Array.from(t).map((e) => e.size),
        m = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        f = p.reduce((e, t) => e + t, 0),
        g = p.length > 0 ? Math.max(...p) : 0,
        h = p.length;
    if (g > s) {
        let t = i?.reduce((e, t) => e + t, 0);
        (0, d.zV)(
            _.HAw.FILE_SIZE_LIMIT_EXCEEDED,
            (0, u.s)({
                channelId: e.id,
                guildId: n,
                userIndividualFileSizeLimit: l,
                numAttachments: h,
                preCompressionFileSizes: p,
                preCompressionAggregateSize: f,
                postCompressionFileSizes: i,
                postCompressionAggregateSize: t,
                attachmentMimeTypes: m,
                errorType: I.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
                kestrelVariant: (0, c.H6)(a),
            }),
        ),
            (0, o.openUploadError)({
                title: U.intl.string(U.t["/tGlcj"]),
                help: (0, T.WQ)(r, n, a.enabled ? s : void 0),
                showPremiumUpsell: !(0, y.YE)(r, S.PremiumTypes.TIER_2),
                fileSize: g,
                kestrelBeta: a.enabled && !a.isGA,
                kestrelGA: a.isGA,
                effectiveMaxSize: a.enabled ? s : void 0,
            });
        return;
    }
    (0, o.openUploadError)({
        title: U.intl.string(U.t["/tGlcj"]),
        help: U.intl.formatToPlainString(U.t.tUOJdH, { maxSize: A.Hb(A.bB()) }),
        kestrelBeta: a.enabled && !a.isGA,
        kestrelGA: a.isGA,
    });
}
async function z(e, t, i) {
    let {
        filesMetadata: d,
        requireConfirm: u = !0,
        isThumbnail: c = !1,
        origin: E,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != d && d.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let A = t.getGuildId(),
        y = Array.from(e),
        S = y.map((e) => ({ originalContentType: e.type, preCompressionSize: e.size }));
    if (
        (await Promise.resolve(),
        (await Promise.all(y.map(async (e) => !(e.size > 0) && (await (0, m._)(e)) === 0))).some(Boolean))
    )
        return void (0, o.openUploadError)({ title: U.intl.string(U.t.B3vFdU), help: U.intl.string(U.t["9ZpT2C"]) });
    if ((0, T.fJ)(y, A)) return void w(t, y);
    if (g.A.getUploadCount(t.id, i) + y.length > _.XgB) {
        (0, o.openUploadError)({
            title: U.intl.string(U.t.wOr6hB),
            help: U.intl.formatToPlainString(U.t["qqyp/e"], { limit: _.XgB }),
        }),
            h.default.track(_.HAw.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: g.A.getUploadCount(t.id, i),
                new_count: y.length,
            });
        return;
    }
    if (
        ((t.type !== _.rbe.GUILD_VOICE && t.type !== _.rbe.GUILD_STAGE_VOICE) ||
            p.A.getChatOpen(t.id) ||
            r.A.updateChatOpen(t.id, !0),
        u)
    ) {
        let e = y.map((e, t) => ({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: c,
            origin: E,
            compressionMetadata: S[t],
            ...d?.[t],
        }));
        l.A.addFiles({ files: e, channelId: t.id, draftType: i });
    } else {
        let e = y.map((e, i) => {
            let r = null != d ? d[i] : {};
            return new a.bK(
                { file: e, platform: s.xz.WEB, isThumbnail: c, origin: E, compressionMetadata: S[i], ...r },
                t.id,
            );
        });
        n.A.sendMessage(t.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: I.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, i, r) => {
                (0, f.k)({ file: e, guildId: t.getGuildId(), analyticsLocations: [], code: i, reason: r });
            },
        });
    }
}
