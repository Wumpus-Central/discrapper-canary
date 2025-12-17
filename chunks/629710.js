n.d(t, {
    AT: () => E,
    DQ: () => C,
    Hz: () => w,
    LD: () => A,
    MD: () => T,
    SI: () => R,
    UJ: () => P,
    X6: () => S,
    aQ: () => U,
    g4: () => N,
    hi: () => x,
    kC: () => v,
    kh: () => O,
    px: () => G,
    rb: () => b,
}),
    n(388685),
    n(361932),
    n(187205),
    n(997841),
    n(539854);
var r = n(95015),
    i = n(524437),
    a = n(911969),
    o = n(432877),
    s = n(978003),
    l = n(768494),
    c = n(592125),
    u = n(375954),
    d = n(699516),
    f = n(594174),
    p = n(823379),
    _ = n(991621),
    m = n(774863),
    h = n(294509);
let g = -1,
    E = () =>
        Object.values(h.Fj).filter((e) => {
            var t;
            return null == e.isEligible || (null == (t = e.isEligible) ? void 0 : t.call(e));
        }),
    b = (e) => {
        let { channelId: t, authorId: n } = G(e);
        return null == t || null == e ? h.qn.NONE : y(t, n);
    },
    y = (e, t) => {
        let n = f.default.getCurrentUser();
        if (null == n || t === n.id) return h.qn.NONE;
        let r = x(e, t, [c.Z, d.Z]);
        return null == r ? h.qn.NONE : O(r);
    },
    O = (e) => {
        let t = E();
        return null == e
            ? h.qn.NONE
            : w(t.map((t) => (U(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(p.lm));
    };
function v(e) {
    let t = b(e);
    return S(e, t);
}
function S(e, t) {
    var n, r;
    if (t === h.qn.NONE || null == e) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some(
                  (e) =>
                      A(
                          {
                              type: _.l.Attachment,
                              media: e,
                          },
                          t,
                      ).length > 0,
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some(
                  (e) =>
                      A(
                          {
                              type: _.l.Embed,
                              media: e,
                          },
                          t,
                      ).length > 0,
              ))
    )
        return !0;
    let i = null;
    if (
        ("messageSnapshots" in e ? (i = e.messageSnapshots) : "message_snapshots" in e && (i = e.message_snapshots),
        null == i || 0 === i.length)
    )
        return !1;
    for (let e of i) if (S(e.message, t)) return !0;
    return !1;
}
function I(e) {
    return (Array.isArray(e) ? e : [e])
        .flatMap((e) => {
            switch (e.type) {
                case a.re.MEDIA_GALLERY:
                    return e.items.map((e) => e.media);
                case a.re.THUMBNAIL:
                    return e.media;
                case a.re.FILE:
                    return e.file;
                case a.re.SECTION:
                case a.re.ACTION_ROW:
                    return e.components.flatMap(I);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, l.ym)(e) : e));
}
function T(e, t) {
    var n, r;
    let i = null != t ? t : b(e);
    if (i === h.qn.NONE) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some((e) =>
                  P(
                      {
                          type: _.l.Attachment,
                          media: e,
                      },
                      i,
                  ),
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some((e) =>
                  P(
                      {
                          type: _.l.Embed,
                          media: e,
                      },
                      i,
                  ),
              )) ||
        (null != e.components &&
            I(e.components).some((e) =>
                P(
                    {
                        type: _.l.GenericMedia,
                        media: e,
                    },
                    i,
                ),
            ))
    )
        return !0;
    let a = null;
    if (
        ("messageSnapshots" in e ? (a = e.messageSnapshots) : "message_snapshots" in e && (a = e.message_snapshots),
        null == a || 0 === a.length)
    )
        return !1;
    for (let e of a) if (T(e.message, i)) return !0;
    return !1;
}
function C(e) {
    var t, n, r, i;
    let a = b(e);
    if (a === h.qn.NONE)
        return {
            attachmentIds: [],
            embedIds: [],
        };
    let o =
            null == (t = e.attachments)
                ? void 0
                : t.filter((e) =>
                      P(
                          {
                              type: _.l.Attachment,
                              media: e,
                          },
                          a,
                      ),
                  ),
        s =
            null == (n = e.embeds)
                ? void 0
                : n.filter((e) =>
                      P(
                          {
                              type: _.l.Embed,
                              media: e,
                          },
                          a,
                      ),
                  );
    return {
        attachmentIds: null != (r = null == o ? void 0 : o.map((e) => e.id).filter(Boolean)) ? r : [],
        embedIds: null != (i = null == s ? void 0 : s.map((e, t) => "embed_".concat(t)).filter(Boolean)) ? i : [],
    };
}
function A(e, t) {
    if (t === h.qn.NONE) return [];
    let n = D(t);
    return 0 === n.length ? [] : n.filter((t) => R(t, e)).map((e) => h.Fj[e].obscureReason);
}
function N(e, t) {
    if (t === h.qn.NONE) return !1;
    let n = D(t);
    return 0 !== n.length && n.filter((t) => R(t, e)).length > 0;
}
function P(e, t) {
    if (t === h.qn.NONE || o.ZP.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let n = D(t);
    if (0 === n.length) return !1;
    switch (e.type) {
        case _.l.Embed:
            return L(e.media, n);
        case _.l.Attachment:
            return j(e.media, n);
        case _.l.GenericMedia:
            return M(e.media, n);
        default:
            return !1;
    }
}
function R(e, t) {
    var n, i, a, s;
    if (null == e) return !1;
    let l = h.Fj[e];
    if (null != l.devSettingKey && o.ZP.get(l.devSettingKey)) return !0;
    switch (t.type) {
        case _.l.Embed:
            return (0, r.yE)(null != (n = t.media.flags) ? n : 0, l.embedFlag);
        case _.l.Attachment:
            return (0, r.yE)(null != (i = t.media.flags) ? i : 0, l.attachmentFlag);
        case _.l.GenericMedia:
            return (0, r.yE)(
                null != (s = null == (a = t.media.contentScanMetadata) ? void 0 : a.flags) ? s : 0,
                l.genericMediaFlag,
            );
        default:
            return !1;
    }
}
function w(e) {
    let t = h.qn.NONE;
    for (let n of e)
        switch (n) {
            case h._.EXPLICIT:
                t |= h.qn.EXPLICIT;
                break;
            case h._.GORE:
                t |= h.qn.GORE;
                break;
            case h._.SELF_HARM:
                t |= h.qn.SELF_HARM;
        }
    return t;
}
function D(e) {
    if (e === h.qn.NONE) return [];
    let t = [];
    for (let n of E()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [c.Z, d.Z],
        [r, i] = n,
        a = r.getChannel(e),
        o = f.default.getCurrentUser();
    return null == o || t === o.id || null == a
        ? null
        : a.isDM() || a.isGroupDM()
          ? null != t && i.getFriendIDs().includes(t)
              ? _.n.FRIEND_DM
              : _.n.NON_FRIEND_DM
          : _.n.GUILD;
}
function L(e, t) {
    var n, r, i, a, o, s, l;
    return (
        !(
            0 === t.length ||
            null == e ||
            0 ===
                t.filter(
                    (t) =>
                        !R(t, {
                            type: _.l.Embed,
                            media: e,
                        }),
                ).length ||
            ("video" in e &&
                null != e.video &&
                (null == (n = e.video) ? void 0 : n.width) === 0 &&
                (null == (r = e.video) ? void 0 : r.height) === 0) ||
            ("thumbnail" in e &&
                null != e.thumbnail &&
                (null == (i = e.thumbnail) ? void 0 : i.width) === 0 &&
                (null == (a = e.thumbnail) ? void 0 : a.height) === 0) ||
            ("image" in e &&
                null != e.image &&
                (null == (o = e.image) ? void 0 : o.width) === 0 &&
                (null == (s = e.image) ? void 0 : s.height) === 0) ||
            ("images" in e &&
                (null == (l = e.images) ? void 0 : l.some((e) => null != e && 0 === e.width && 0 === e.height)))
        ) && k(Z(e), t)
    );
}
function j(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !R(t, {
                        type: _.l.Attachment,
                        media: e,
                    }),
            ).length &&
        k(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
    );
}
function M(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !R(t, {
                        type: _.l.GenericMedia,
                        media: e,
                    }),
            ).length &&
        k(null == (n = e.contentScanMetadata) ? void 0 : n.version, t)
    );
}
function k(e, t) {
    let n = m.Z.validContentScanVersion;
    return e !== g && (t.includes(h._.GORE) || t.includes(h._.SELF_HARM) ? null == e || e < n : null == e);
}
function U(e) {
    return null != e && [i.Q4.BLOCK, i.Q4.BLUR].includes(e);
}
function G(e) {
    var t, n;
    let r = null,
        i = null;
    if (null == e)
        return {
            channelId: r,
            authorId: i,
        };
    if (
        ("channel_id" in e && (r = e.channel_id), "messageReference" in e && (0, s.Z)(e) && null != e.messageReference)
    ) {
        let n = u.Z.getMessage(e.messageReference.channel_id, e.messageReference.message_id);
        null != n && (i = null == (t = n.author) ? void 0 : t.id);
    } else "author" in e ? (i = null == (n = e.author) ? void 0 : n.id) : "author_id" in e && (i = e.author_id);
    return {
        channelId: r,
        authorId: i,
    };
}
function Z(e) {
    return null != e.content_scan_version
        ? e.content_scan_version
        : null != e.contentScanVersion || null != e.contentScanVersion
          ? e.contentScanVersion
          : null;
}
