n.d(t, {
    AT: () => p,
    DQ: () => O,
    Hz: () => A,
    LD: () => v,
    MD: () => y,
    SI: () => S,
    UJ: () => T,
    X6: () => b,
    aQ: () => L,
    g4: () => I,
    hi: () => C,
    kC: () => E,
    kh: () => g,
    px: () => x,
    rb: () => h
}),
    n(388685),
    n(997841),
    n(539854);
var r = n(524437),
    i = n(432877),
    a = n(592125),
    o = n(699516),
    s = n(594174),
    l = n(630388),
    c = n(823379),
    u = n(991621),
    d = n(774863),
    _ = n(294509);
let f = -1,
    p = () =>
        Object.values(_.Fj).filter((e) => {
            var t;
            return null == e.isEligible || (null == (t = e.isEligible) ? void 0 : t.call(e));
        }),
    h = (e) => {
        let { channelId: t, authorId: n } = x(e);
        return null == t || null == e ? _.qn.NONE : m(t, n);
    },
    m = (e, t) => {
        let n = s.default.getCurrentUser();
        if (null == n || t === n.id) return _.qn.NONE;
        let r = C(e, t, [a.Z, o.Z]);
        return null == r ? _.qn.NONE : g(r);
    },
    g = (e) => {
        let t = p();
        return null == e ? _.qn.NONE : A(t.map((t) => (L(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(c.lm));
    };
function E(e) {
    let t = h(e);
    return b(e, t);
}
function b(e, t) {
    var n, r;
    if (t === _.qn.NONE || null == e) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some(
                  (e) =>
                      v(
                          {
                              type: u.l.Attachment,
                              media: e
                          },
                          t
                      ).length > 0
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some(
                  (e) =>
                      v(
                          {
                              type: u.l.Embed,
                              media: e
                          },
                          t
                      ).length > 0
              ))
    )
        return !0;
    let i = null;
    if (('messageSnapshots' in e ? (i = e.messageSnapshots) : 'message_snapshots' in e && (i = e.message_snapshots), null == i || 0 === i.length)) return !1;
    for (let e of i) if (b(e.message, t)) return !0;
    return !1;
}
function y(e) {
    var t, n;
    let r = h(e);
    if (r === _.qn.NONE) return !1;
    if (
        (null == (t = e.attachments)
            ? void 0
            : t.some((e) =>
                  T(
                      {
                          type: u.l.Attachment,
                          media: e
                      },
                      r
                  )
              )) ||
        (null == (n = e.embeds)
            ? void 0
            : n.some((e) =>
                  T(
                      {
                          type: u.l.Embed,
                          media: e
                      },
                      r
                  )
              ))
    )
        return !0;
    let i = null;
    if (('messageSnapshots' in e ? (i = e.messageSnapshots) : 'message_snapshots' in e && (i = e.message_snapshots), null == i || 0 === i.length)) return !1;
    for (let e of i) if (y(e.message)) return !0;
    return !1;
}
function O(e) {
    var t, n, r, i;
    let a = h(e);
    if (a === _.qn.NONE)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let o =
            null == (t = e.attachments)
                ? void 0
                : t.filter((e) =>
                      T(
                          {
                              type: u.l.Attachment,
                              media: e
                          },
                          a
                      )
                  ),
        s =
            null == (n = e.embeds)
                ? void 0
                : n.filter((e) =>
                      T(
                          {
                              type: u.l.Embed,
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
function v(e, t) {
    if (t === _.qn.NONE) return [];
    let n = N(t);
    return 0 === n.length ? [] : n.filter((t) => S(t, e)).map((e) => _.Fj[e].obscureReason);
}
function I(e, t) {
    if (t === _.qn.NONE) return !1;
    let n = N(t);
    return 0 !== n.length && n.filter((t) => S(t, e)).length > 0;
}
function T(e, t) {
    if (t === _.qn.NONE || i.ZP.get('explicit_media_redaction_ignore_pending_scan')) return !1;
    let n = N(t);
    if (0 === n.length) return !1;
    switch (e.type) {
        case u.l.Embed:
            return R(e.media, n);
        case u.l.Attachment:
            return P(e.media, n);
        case u.l.GenericMedia:
            return w(e.media, n);
        default:
            return !1;
    }
}
function S(e, t) {
    var n, r, a, o;
    if (null == e) return !1;
    let s = _.Fj[e];
    if (null != s.devSettingKey && i.ZP.get(s.devSettingKey)) return !0;
    switch (t.type) {
        case u.l.Embed:
            return (0, l.yE)(null != (n = t.media.flags) ? n : 0, s.embedFlag);
        case u.l.Attachment:
            return (0, l.yE)(null != (r = t.media.flags) ? r : 0, s.attachmentFlag);
        case u.l.GenericMedia:
            return (0, l.yE)(null != (o = null == (a = t.media.contentScanMetadata) ? void 0 : a.flags) ? o : 0, s.genericMediaFlag);
        default:
            return !1;
    }
}
function A(e) {
    let t = _.qn.NONE;
    for (let n of e)
        switch (n) {
            case _._.EXPLICIT:
                t |= _.qn.EXPLICIT;
                break;
            case _._.GORE:
                t |= _.qn.GORE;
        }
    return t;
}
function N(e) {
    if (e === _.qn.NONE) return [];
    let t = [];
    for (let n of p()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.Z, o.Z],
        [r, i] = n,
        l = r.getChannel(e),
        c = s.default.getCurrentUser();
    return null == c || t === c.id || null == l ? null : l.isDM() || l.isGroupDM() ? (null != t && i.getFriendIDs().includes(t) ? u.n.FRIEND_DM : u.n.NON_FRIEND_DM) : u.n.GUILD;
}
function R(e, t) {
    var n, r, i, a, o, s, l;
    return (
        !(
            0 === t.length ||
            null == e ||
            0 ===
                t.filter(
                    (t) =>
                        !S(t, {
                            type: u.l.Embed,
                            media: e
                        })
                ).length ||
            ('video' in e && null != e.video && (null == (n = e.video) ? void 0 : n.width) === 0 && (null == (r = e.video) ? void 0 : r.height) === 0) ||
            ('thumbnail' in e && null != e.thumbnail && (null == (i = e.thumbnail) ? void 0 : i.width) === 0 && (null == (a = e.thumbnail) ? void 0 : a.height) === 0) ||
            ('image' in e && null != e.image && (null == (o = e.image) ? void 0 : o.width) === 0 && (null == (s = e.image) ? void 0 : s.height) === 0) ||
            ('images' in e && (null == (l = e.images) ? void 0 : l.some((e) => null != e && 0 === e.width && 0 === e.height)))
        ) && D(M(e), t)
    );
}
function P(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !S(t, {
                        type: u.l.Attachment,
                        media: e
                    })
            ).length &&
        D(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
    );
}
function w(e, t) {
    var n;
    return (
        0 !== t.length &&
        0 !==
            t.filter(
                (t) =>
                    !S(t, {
                        type: u.l.GenericMedia,
                        media: e
                    })
            ).length &&
        D(null == (n = e.contentScanMetadata) ? void 0 : n.version, t)
    );
}
function D(e, t) {
    let n = d.Z.validContentScanVersion;
    return e !== f && (t.includes(_._.GORE) ? null == e || e < n : null == e);
}
function L(e) {
    return null != e && [r.Q4.BLOCK, r.Q4.BLUR].includes(e);
}
function x(e) {
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
function M(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion || null != e.contentScanVersion ? e.contentScanVersion : null;
}
