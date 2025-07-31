(n.d(t, {
    AT: () => m,
    DQ: () => T,
    Hz: () => R,
    LD: () => S,
    MD: () => I,
    SI: () => C,
    UJ: () => N,
    X6: () => O,
    aQ: () => M,
    g4: () => A,
    hi: () => w,
    kC: () => y,
    kh: () => b,
    px: () => j,
    rb: () => g
}),
    n(388685),
    n(361932),
    n(187205),
    n(997841),
    n(539854));
var r = n(524437),
    i = n(911969),
    a = n(432877),
    o = n(768494),
    s = n(592125),
    l = n(699516),
    c = n(594174),
    u = n(630388),
    d = n(823379),
    _ = n(991621),
    f = n(774863),
    p = n(294509);
let h = -1,
    m = () =>
        Object.values(p.Fj).filter((e) => {
            var t;
            return null == e.isEligible || (null == (t = e.isEligible) ? void 0 : t.call(e));
        }),
    g = (e) => {
        let { channelId: t, authorId: n } = j(e);
        return null == t || null == e ? p.qn.NONE : E(t, n);
    },
    E = (e, t) => {
        let n = c.default.getCurrentUser();
        if (null == n || t === n.id) return p.qn.NONE;
        let r = w(e, t, [s.Z, l.Z]);
        return null == r ? p.qn.NONE : b(r);
    },
    b = (e) => {
        let t = m();
        return null == e ? p.qn.NONE : R(t.map((t) => (M(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(d.lm));
    };
function y(e) {
    let t = g(e);
    return O(e, t);
}
function O(e, t) {
    var n, r;
    if (t === p.qn.NONE || null == e) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some(
                  (e) =>
                      S(
                          {
                              type: _.l.Attachment,
                              media: e
                          },
                          t
                      ).length > 0
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some(
                  (e) =>
                      S(
                          {
                              type: _.l.Embed,
                              media: e
                          },
                          t
                      ).length > 0
              ))
    )
        return !0;
    let i = null;
    if (('messageSnapshots' in e ? (i = e.messageSnapshots) : 'message_snapshots' in e && (i = e.message_snapshots), null == i || 0 === i.length)) return !1;
    for (let e of i) if (O(e.message, t)) return !0;
    return !1;
}
function v(e) {
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
                    return e.components.flatMap(v);
                default:
                    return [];
            }
        })
        .map((e) => ('proxy_url' in e ? (0, o.ym)(e) : e));
}
function I(e, t) {
    var n, r;
    let i = null != t ? t : g(e);
    if (i === p.qn.NONE) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some((e) =>
                  N(
                      {
                          type: _.l.Attachment,
                          media: e
                      },
                      i
                  )
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some((e) =>
                  N(
                      {
                          type: _.l.Embed,
                          media: e
                      },
                      i
                  )
              )) ||
        (null != e.components &&
            v(e.components).some((e) =>
                N(
                    {
                        type: _.l.GenericMedia,
                        media: e
                    },
                    i
                )
            ))
    )
        return !0;
    let a = null;
    if (('messageSnapshots' in e ? (a = e.messageSnapshots) : 'message_snapshots' in e && (a = e.message_snapshots), null == a || 0 === a.length)) return !1;
    for (let e of a) if (I(e.message, i)) return !0;
    return !1;
}
function T(e) {
    var t, n, r, i;
    let a = g(e);
    if (a === p.qn.NONE)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let o =
            null == (t = e.attachments)
                ? void 0
                : t.filter((e) =>
                      N(
                          {
                              type: _.l.Attachment,
                              media: e
                          },
                          a
                      )
                  ),
        s =
            null == (n = e.embeds)
                ? void 0
                : n.filter((e) =>
                      N(
                          {
                              type: _.l.Embed,
                              media: e
                          },
                          a
                      )
                  );
    return {
        attachmentIds: null != (r = null == o ? void 0 : o.map((e) => e.id).filter(Boolean)) ? r : [],
        embedIds: null != (i = null == s ? void 0 : s.map((e, t) => 'embed_'.concat(t)).filter(Boolean)) ? i : []
    };
}
function S(e, t) {
    if (t === p.qn.NONE) return [];
    let n = P(t);
    return 0 === n.length ? [] : n.filter((t) => C(t, e)).map((e) => p.Fj[e].obscureReason);
}
function A(e, t) {
    if (t === p.qn.NONE) return !1;
    let n = P(t);
    return 0 !== n.length && n.filter((t) => C(t, e)).length > 0;
}
function N(e, t) {
    if (t === p.qn.NONE || a.ZP.get('explicit_media_redaction_ignore_pending_scan')) return !1;
    let n = P(t);
    if (0 === n.length) return !1;
    switch (e.type) {
        case _.l.Embed:
            return D(e.media, n);
        case _.l.Attachment:
            return L(e.media, n);
        case _.l.GenericMedia:
            return x(e.media, n);
        default:
            return !1;
    }
}
function C(e, t) {
    var n, r, i, o;
    if (null == e) return !1;
    let s = p.Fj[e];
    if (null != s.devSettingKey && a.ZP.get(s.devSettingKey)) return !0;
    switch (t.type) {
        case _.l.Embed:
            return (0, u.yE)(null != (n = t.media.flags) ? n : 0, s.embedFlag);
        case _.l.Attachment:
            return (0, u.yE)(null != (r = t.media.flags) ? r : 0, s.attachmentFlag);
        case _.l.GenericMedia:
            return (0, u.yE)(null != (o = null == (i = t.media.contentScanMetadata) ? void 0 : i.flags) ? o : 0, s.genericMediaFlag);
        default:
            return !1;
    }
}
function R(e) {
    let t = p.qn.NONE;
    for (let n of e)
        switch (n) {
            case p._.EXPLICIT:
                t |= p.qn.EXPLICIT;
                break;
            case p._.GORE:
                t |= p.qn.GORE;
        }
    return t;
}
function P(e) {
    if (e === p.qn.NONE) return [];
    let t = [];
    for (let n of m()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [s.Z, l.Z],
        [r, i] = n,
        a = r.getChannel(e),
        o = c.default.getCurrentUser();
    return null == o || t === o.id || null == a ? null : a.isDM() || a.isGroupDM() ? (null != t && i.getFriendIDs().includes(t) ? _.n.FRIEND_DM : _.n.NON_FRIEND_DM) : _.n.GUILD;
}
function D(e, t) {
    var n, r, i, a, o, s, l;
    return (
        !(
            0 === t.length ||
            null == e ||
            0 ===
                t.filter(
                    (t) =>
                        !C(t, {
                            type: _.l.Embed,
                            media: e
                        })
                ).length ||
            ('video' in e && null != e.video && (null == (n = e.video) ? void 0 : n.width) === 0 && (null == (r = e.video) ? void 0 : r.height) === 0) ||
            ('thumbnail' in e && null != e.thumbnail && (null == (i = e.thumbnail) ? void 0 : i.width) === 0 && (null == (a = e.thumbnail) ? void 0 : a.height) === 0) ||
            ('image' in e && null != e.image && (null == (o = e.image) ? void 0 : o.width) === 0 && (null == (s = e.image) ? void 0 : s.height) === 0) ||
            ('images' in e && (null == (l = e.images) ? void 0 : l.some((e) => null != e && 0 === e.width && 0 === e.height)))
        ) && k(U(e), t)
    );
}
function L(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !C(t, {
                        type: _.l.Attachment,
                        media: e
                    })
            ).length &&
        k(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
    );
}
function x(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !C(t, {
                        type: _.l.GenericMedia,
                        media: e
                    })
            ).length &&
        k(null == (n = e.contentScanMetadata) ? void 0 : n.version, t)
    );
}
function k(e, t) {
    let n = f.Z.validContentScanVersion;
    return e !== h && (t.includes(p._.GORE) ? null == e || e < n : null == e);
}
function M(e) {
    return null != e && [r.Q4.BLOCK, r.Q4.BLUR].includes(e);
}
function j(e) {
    let t = null,
        n = null;
    if (null == e)
        return {
            channelId: t,
            authorId: n
        };
    if (('channel_id' in e && (t = e.channel_id), 'author' in e)) {
        var r;
        n = null == (r = e.author) ? void 0 : r.id;
    } else 'author_id' in e && (n = e.author_id);
    return {
        channelId: t,
        authorId: n
    };
}
function U(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion || null != e.contentScanVersion ? e.contentScanVersion : null;
}
