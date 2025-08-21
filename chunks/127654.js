i.d(t, {
    G: () => C,
    d5: () => x,
}),
    i(388685),
    i(415506);
var n = i(481060),
    r = i(475179),
    s = i(904245),
    o = i(166459),
    l = i(531643),
    a = i(141795),
    d = i(476326),
    c = i(125186),
    u = i(367907),
    h = i(358221),
    p = i(893601),
    g = i(58873),
    m = i(117530),
    f = i(594174),
    v = i(626135),
    O = i(403182),
    b = i(74538),
    S = i(960048),
    y = i(979956),
    E = i(981631),
    T = i(959517),
    I = i(474936),
    w = i(388032);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function C(e, t, i) {
    let n = f.default.getCurrentUser(),
        r = e.getGuildId(),
        s = O.dg(r),
        o = Array.from(t).map((e) => e.size),
        a = Array.from(t).map((e) => (null != e.type ? e.type : "unknown")),
        d = o.reduce((e, t) => e + t, 0),
        c = o.length > 0 ? Math.max(...o) : 0,
        h = o.length;
    if (c > s) {
        let t = null == i ? void 0 : i.reduce((e, t) => e + t, 0);
        (0, u.yw)(E.rMx.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: r,
            user_individual_file_size_limit: s,
            pre_compression_file_sizes: o,
            pre_compression_aggregate_file_size: d,
            num_attachments: h,
            error_type: T.xi.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: a,
            post_compression_file_sizes: i,
            post_compression_aggregate_file_size: t,
        }),
            (0, l.openUploadError)({
                title: w.intl.string(w.t["/tGlcn"]),
                help: (0, y.BK)(n, r),
                showPremiumUpsell: !(0, b.M5)(n, I.p9.TIER_2),
                fileSize: c,
            });
        return;
    }
    (0, l.openUploadError)({
        title: w.intl.string(w.t["/tGlcn"]),
        help: w.intl.formatToPlainString(w.t.tUOJdH, { maxSize: O.Ng(O.OC()) }),
    });
}
async function P(e, t, i) {
    let { currentGuildId: r } = i,
        s = (0, p.U)({ location: "UploadPrompt.maybeCompressOversizedFiles" }),
        o = (e) => ({
            file: e,
            compressionMetadata: {
                originalContentType: e.type,
                compressTimeMs: 0,
                preCompressionSize: e.size,
            },
        });
    if ("clipboard" !== t || !s.compressOversizedClipboard || !(0, y.Bf)(e, r)) return e.map(o);
    let l = O.dg(r),
        a = (e) => 0.5 * e.size <= l;
    return e.some((e) => e.size > l && !a(e)) || 0 === e.filter((e) => e.size > l && a(e)).length
        ? e.map(o)
        : ((0, n.showToast)((0, n.createToast)(w.intl.string(w.t.jfKTen), n.ToastType.MESSAGE)),
          await Promise.all(
              e.map(async (e) => {
                  let n = await (0, c.lG)(e);
                  if (!n.success && (n.reason === c.S8.INSUFFICIENT_SAVINGS || n.reason === c.S8.PIXEL_HASH_MISMATCH)) {
                      var r;
                      let s = {
                          channelId: i.channel.id,
                          userId: null == (r = f.default.getCurrentUser()) ? void 0 : r.id,
                          originalSize: e.size,
                          fileName: e.name,
                          origin: t,
                      };
                      S.Z.captureMessage("webp compression failure: " + n.reason, {
                          tags: {
                              conversion_failure: n.reason,
                              feature: "webp_compression",
                          },
                          extra: s,
                      });
                  }
                  return {
                      file: n.success ? (0, c.ub)(n) : e,
                      compressionMetadata: {
                          originalContentType: e.type,
                          compressTimeMs: n.compressTimeMs,
                          preCompressionSize: e.size,
                          convertedMimeType: n.success ? "image/webp" : void 0,
                          conversionFailureReason: n.success ? void 0 : n.reason,
                          hashTimeMs: n.hashTimeMs,
                      },
                  };
              }),
          ));
}
async function x(e, t, i) {
    let {
        filesMetadata: n,
        requireConfirm: c = !0,
        showLargeMessageDialog: u = !1,
        isThumbnail: p = !1,
        origin: f,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != n && n.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let O = t.getGuildId(),
        b = Array.from(e),
        S = await P(b, f, {
            channel: t,
            currentGuildId: O,
        }),
        I = S.map((e) => e.file),
        x = S.map((e) => e.compressionMetadata);
    if ((0, y.Bf)(I, O))
        return void C(
            t,
            b,
            I.map((e) => e.size),
        );
    if (m.Z.getUploadCount(t.id, i) + I.length > E.dN1) {
        (0, l.openUploadError)({
            title: w.intl.string(w.t.wOr6hI),
            help: w.intl.formatToPlainString(w.t["qqyp/f"], { limit: E.dN1 }),
        }),
            v.default.track(E.rMx.UPLOAD_FILE_LIMIT_ERROR, {
                existing_count: m.Z.getUploadCount(t.id, i),
                new_count: I.length,
            });
        return;
    }
    if (
        ((t.type !== E.d4z.GUILD_VOICE && t.type !== E.d4z.GUILD_STAGE_VOICE) ||
            h.Z.getChatOpen(t.id) ||
            r.Z.updateChatOpen(t.id, !0),
        c)
    ) {
        let e = I.map((e, t) => {
            let i = x[t];
            return Z(
                {
                    file: e,
                    platform: d.ow.WEB,
                    isThumbnail: p,
                    origin: f,
                    compressionMetadata: i,
                },
                null == n ? void 0 : n[t],
            );
        });
        o.Z.addFiles({
            files: e,
            channelId: t.id,
            showLargeMessageDialog: u,
            draftType: i,
        });
    } else {
        let e = I.map((e, i) => {
            let r = null != n ? n[i] : {},
                s = x[i];
            return new a.nH(
                Z(
                    {
                        file: e,
                        platform: d.ow.WEB,
                        isThumbnail: p,
                        origin: f,
                        compressionMetadata: s,
                    },
                    r,
                ),
                t.id,
            );
        });
        s.Z.sendMessage(
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
                location: T.dy.INSTANT_UPLOAD,
                onAttachmentUploadError: (e, i, n) => {
                    (0, g.A)({
                        file: e,
                        guildId: t.getGuildId(),
                        analyticsLocations: [],
                        code: i,
                        reason: n,
                    });
                },
            },
        );
    }
}
