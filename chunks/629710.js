n.d(t, {
    AT: () => E,
    DQ: () => A,
    Hz: () => D,
    LD: () => C,
    MD: () => S,
    SI: () => P,
    UJ: () => R,
    X6: () => I,
    aQ: () => U,
    g4: () => N,
    hi: () => L,
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
var r = n(524437),
    i = n(911969),
    a = n(432877),
    o = n(978003),
    s = n(768494),
    l = n(592125),
    c = n(375954),
    u = n(699516),
    d = n(594174),
    f = n(630388),
    _ = n(823379),
    p = n(991621),
    h = n(774863),
    m = n(294509);
let g = -1,
    E = () =>
        Object.values(m.Fj).filter((e) => {
            var t;
            return null == e.isEligible || (null == (t = e.isEligible) ? void 0 : t.call(e));
        }),
    b = (e) => {
        let { channelId: t, authorId: n } = G(e);
        return null == t || null == e ? m.qn.NONE : y(t, n);
    },
    y = (e, t) => {
        let n = d.default.getCurrentUser();
        if (null == n || t === n.id) return m.qn.NONE;
        let r = L(e, t, [l.Z, u.Z]);
        return null == r ? m.qn.NONE : O(r);
    },
    O = (e) => {
        let t = E();
        return null == e
            ? m.qn.NONE
            : D(t.map((t) => (U(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(_.lm));
    };
function v(e) {
    let t = b(e);
    return I(e, t);
}
function I(e, t) {
    var n, r;
    if (t === m.qn.NONE || null == e) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some(
                  (e) =>
                      C(
                          {
                              type: p.l.Attachment,
                              media: e,
                          },
                          t,
                      ).length > 0,
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some(
                  (e) =>
                      C(
                          {
                              type: p.l.Embed,
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
    for (let e of i) if (I(e.message, t)) return !0;
    return !1;
}
function T(e) {
    return (Array.isArray(e) ? e : [e])
        .flatMap((e) => {
            switch (e.type) {
                case i.re.MEDIA_GALLERY:
                    return e.items.map((e) => e.media);
                case i.re.THUMBNAIL:
                    return e.media;
                case i.re.FILE:
                    return e.file;
                case i.re.SECTION:
                case i.re.ACTION_ROW:
                    return e.components.flatMap(T);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, s.ym)(e) : e));
}
function S(e, t) {
    var n, r;
    let i = null != t ? t : b(e);
    if (i === m.qn.NONE) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some((e) =>
                  R(
                      {
                          type: p.l.Attachment,
                          media: e,
                      },
                      i,
                  ),
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some((e) =>
                  R(
                      {
                          type: p.l.Embed,
                          media: e,
                      },
                      i,
                  ),
              )) ||
        (null != e.components &&
            T(e.components).some((e) =>
                R(
                    {
                        type: p.l.GenericMedia,
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
    for (let e of a) if (S(e.message, i)) return !0;
    return !1;
}
function A(e) {
    var t, n, r, i;
    let a = b(e);
    if (a === m.qn.NONE)
        return {
            attachmentIds: [],
            embedIds: [],
        };
    let o =
            null == (t = e.attachments)
                ? void 0
                : t.filter((e) =>
                      R(
                          {
                              type: p.l.Attachment,
                              media: e,
                          },
                          a,
                      ),
                  ),
        s =
            null == (n = e.embeds)
                ? void 0
                : n.filter((e) =>
                      R(
                          {
                              type: p.l.Embed,
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
function C(e, t) {
    if (t === m.qn.NONE) return [];
    let n = w(t);
    return 0 === n.length ? [] : n.filter((t) => P(t, e)).map((e) => m.Fj[e].obscureReason);
}
function N(e, t) {
    if (t === m.qn.NONE) return !1;
    let n = w(t);
    return 0 !== n.length && n.filter((t) => P(t, e)).length > 0;
}
function R(e, t) {
    if (t === m.qn.NONE || a.ZP.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let n = w(t);
    if (0 === n.length) return !1;
    switch (e.type) {
        case p.l.Embed:
            return x(e.media, n);
        case p.l.Attachment:
            return M(e.media, n);
        case p.l.GenericMedia:
            return k(e.media, n);
        default:
            return !1;
    }
}
function P(e, t) {
    var n, r, i, o;
    if (null == e) return !1;
    let s = m.Fj[e];
    if (null != s.devSettingKey && a.ZP.get(s.devSettingKey)) return !0;
    switch (t.type) {
        case p.l.Embed:
            return (0, f.yE)(null != (n = t.media.flags) ? n : 0, s.embedFlag);
        case p.l.Attachment:
            return (0, f.yE)(null != (r = t.media.flags) ? r : 0, s.attachmentFlag);
        case p.l.GenericMedia:
            return (0, f.yE)(
                null != (o = null == (i = t.media.contentScanMetadata) ? void 0 : i.flags) ? o : 0,
                s.genericMediaFlag,
            );
        default:
            return !1;
    }
}
function D(e) {
    let t = m.qn.NONE;
    for (let n of e)
        switch (n) {
            case m._.EXPLICIT:
                t |= m.qn.EXPLICIT;
                break;
            case m._.GORE:
                t |= m.qn.GORE;
                break;
            case m._.SELF_HARM:
                t |= m.qn.SELF_HARM;
        }
    return t;
}
function w(e) {
    if (e === m.qn.NONE) return [];
    let t = [];
    for (let n of E()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [l.Z, u.Z],
        [r, i] = n,
        a = r.getChannel(e),
        o = d.default.getCurrentUser();
    return null == o || t === o.id || null == a
        ? null
        : a.isDM() || a.isGroupDM()
          ? null != t && i.getFriendIDs().includes(t)
              ? p.n.FRIEND_DM
              : p.n.NON_FRIEND_DM
          : p.n.GUILD;
}
function x(e, t) {
    var n, r, i, a, o, s, l;
    return (
        !(
            0 === t.length ||
            null == e ||
            0 ===
                t.filter(
                    (t) =>
                        !P(t, {
                            type: p.l.Embed,
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
        ) && j(B(e), t)
    );
}
function M(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !P(t, {
                        type: p.l.Attachment,
                        media: e,
                    }),
            ).length &&
        j(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
    );
}
function k(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !P(t, {
                        type: p.l.GenericMedia,
                        media: e,
                    }),
            ).length &&
        j(null == (n = e.contentScanMetadata) ? void 0 : n.version, t)
    );
}
function j(e, t) {
    let n = h.Z.validContentScanVersion;
    return e !== g && (t.includes(m._.GORE) || t.includes(m._.SELF_HARM) ? null == e || e < n : null == e);
}
function U(e) {
    return null != e && [r.Q4.BLOCK, r.Q4.BLUR].includes(e);
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
        ("channel_id" in e && (r = e.channel_id), "messageReference" in e && (0, o.Z)(e) && null != e.messageReference)
    ) {
        let n = c.Z.getMessage(e.messageReference.channel_id, e.messageReference.message_id);
        null != n && (i = null == (t = n.author) ? void 0 : t.id);
    } else "author" in e ? (i = null == (n = e.author) ? void 0 : n.id) : "author_id" in e && (i = e.author_id);
    return {
        channelId: r,
        authorId: i,
    };
}
function B(e) {
    return null != e.content_scan_version
        ? e.content_scan_version
        : null != e.contentScanVersion || null != e.contentScanVersion
          ? e.contentScanVersion
          : null;
}
