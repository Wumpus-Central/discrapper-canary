n.d(t, {
    $V: () => w,
    Fg: () => b,
    KM: () => A,
    LE: () => D,
    M: () => C,
    O8: () => O,
    b: () => N,
    c2: () => L,
    f: () => G,
    gh: () => P,
    ku: () => E,
    mS: () => I,
    nx: () => V,
    qo: () => R,
    s9: () => T,
    y5: () => v,
}),
    n(896048),
    n(114821),
    n(339614),
    n(938796),
    n(321073);
var r = n(665260),
    i = n(873298),
    a = n(155718),
    s = n(865116),
    o = n(427930),
    l = n(731068),
    c = n(734057),
    u = n(320501),
    d = n(994500),
    f = n(287809),
    p = n(403362),
    _ = n(930125),
    h = n(900819),
    m = n(811602);
let g = -1,
    E = () =>
        Object.values(m.Jn).filter((e) => {
            var t;
            return null == e.isEligible || (null == (t = e.isEligible) ? void 0 : t.call(e));
        }),
    b = (e) => {
        let { channelId: t, authorId: n } = V(e);
        return null == t || null == e ? m.LO.NONE : y(t, n);
    },
    y = (e, t) => {
        let n = f.default.getCurrentUser();
        if (null == n || t === n.id) return m.LO.NONE;
        let r = L(e, t, [c.A, d.A]);
        return null == r ? m.LO.NONE : O(r);
    },
    O = (e) => {
        let t = E();
        return null == e
            ? m.LO.NONE
            : D(t.map((t) => (G(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(p.Vq));
    };

function A(e) {
    let t = b(e);
    return v(e, t);
}

function v(e, t) {
    var n, r;
    if (t === m.LO.NONE || null == e) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some(
                  (e) =>
                      N(
                          {
                              type: _.D.Attachment,
                              media: e,
                          },
                          t,
                      ).length > 0,
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some(
                  (e) =>
                      N(
                          {
                              type: _.D.Embed,
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
    for (let e of i) if (v(e.message, t)) return !0;
    return !1;
}

function S(e) {
    return (Array.isArray(e) ? e : [e])
        .flatMap((e) => {
            switch (e.type) {
                case a.I5.MEDIA_GALLERY:
                    return e.items.map((e) => e.media);
                case a.I5.THUMBNAIL:
                    return e.media;
                case a.I5.FILE:
                    return e.file;
                case a.I5.SECTION:
                case a.I5.ACTION_ROW:
                    return e.components.flatMap(S);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, l.Uv)(e) : e));
}

function I(e, t) {
    var n, r;
    let i = null != t ? t : b(e);
    if (i === m.LO.NONE) return !1;
    if (
        (null == (n = e.attachments)
            ? void 0
            : n.some((e) =>
                  w(
                      {
                          type: _.D.Attachment,
                          media: e,
                      },
                      i,
                  ),
              )) ||
        (null == (r = e.embeds)
            ? void 0
            : r.some((e) =>
                  w(
                      {
                          type: _.D.Embed,
                          media: e,
                      },
                      i,
                  ),
              )) ||
        (null != e.components &&
            S(e.components).some((e) =>
                w(
                    {
                        type: _.D.GenericMedia,
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
    for (let e of a) if (I(e.message, i)) return !0;
    return !1;
}

function T(e) {
    return !(null != e.components && S(e.components).some((e) => e.loadingState === a.TD.LOADING)) && !0;
}

function C(e) {
    var t, n, r, i;
    let a = b(e);
    if (a === m.LO.NONE)
        return {
            attachmentIds: [],
            embedIds: [],
        };
    let s =
            null == (r = e.attachments)
                ? void 0
                : r.filter((e) =>
                      w(
                          {
                              type: _.D.Attachment,
                              media: e,
                          },
                          a,
                      ),
                  ),
        o =
            null == (i = e.embeds)
                ? void 0
                : i.filter((e) =>
                      w(
                          {
                              type: _.D.Embed,
                              media: e,
                          },
                          a,
                      ),
                  );
    return {
        attachmentIds: null != (t = null == s ? void 0 : s.map((e) => e.id).filter(Boolean)) ? t : [],
        embedIds: null != (n = null == o ? void 0 : o.map((e, t) => "embed_".concat(t)).filter(Boolean)) ? n : [],
    };
}

function N(e, t) {
    if (t === m.LO.NONE) return [];
    let n = x(t);
    return 0 === n.length ? [] : n.filter((t) => P(t, e)).map((e) => m.Jn[e].obscureReason);
}

function R(e, t) {
    if (t === m.LO.NONE) return !1;
    let n = x(t);
    return 0 !== n.length && n.filter((t) => P(t, e)).length > 0;
}

function w(e, t) {
    if (t === m.LO.NONE || s.Ay.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let n = x(t);
    if (0 === n.length) return !1;
    switch (e.type) {
        case _.D.Embed:
            return j(e.media, n);
        case _.D.Attachment:
            return M(e.media, n);
        case _.D.GenericMedia:
            return k(e.media, n);
        default:
            return !1;
    }
}

function P(e, t) {
    var n, i, a, o;
    if (null == e) return !1;
    let l = m.Jn[e];
    if (null != l.devSettingKey && s.Ay.get(l.devSettingKey)) return !0;
    switch (t.type) {
        case _.D.Embed:
            return (0, r.Lt)(null != (n = t.media.flags) ? n : 0, l.embedFlag);
        case _.D.Attachment:
            return (0, r.Lt)(null != (i = t.media.flags) ? i : 0, l.attachmentFlag);
        case _.D.GenericMedia:
            return (0, r.Lt)(
                null != (a = null == (o = t.media.contentScanMetadata) ? void 0 : o.flags) ? a : 0,
                l.genericMediaFlag,
            );
        default:
            return !1;
    }
}

function D(e) {
    let t = m.LO.NONE;
    for (let n of e)
        switch (n) {
            case m.kn.EXPLICIT:
                t |= m.LO.EXPLICIT;
                break;
            case m.kn.GORE:
                t |= m.LO.GORE;
                break;
            case m.kn.SELF_HARM:
                t |= m.LO.SELF_HARM;
        }
    return t;
}

function x(e) {
    if (e === m.LO.NONE) return [];
    let t = [];
    for (let n of E()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}

function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [c.A, d.A],
        [r, i] = n,
        a = r.getChannel(e),
        s = f.default.getCurrentUser();
    return null == s || t === s.id || null == a
        ? null
        : a.isDM() || a.isGroupDM()
          ? null != t && i.getFriendIDs().includes(t)
              ? _.v.FRIEND_DM
              : _.v.NON_FRIEND_DM
          : _.v.GUILD;
}

function j(e, t) {
    var n, r, i, a, s, o, l;
    return (
        !(
            0 === t.length ||
            null == e ||
            0 ===
                t.filter(
                    (t) =>
                        !P(t, {
                            type: _.D.Embed,
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
                (null == (s = e.image) ? void 0 : s.width) === 0 &&
                (null == (o = e.image) ? void 0 : o.height) === 0) ||
            ("images" in e &&
                (null == (l = e.images) ? void 0 : l.some((e) => null != e && 0 === e.width && 0 === e.height)))
        ) && U(F(e), t)
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
                        type: _.D.Attachment,
                        media: e,
                    }),
            ).length &&
        U(null != (n = e.content_scan_version) ? n : e.contentScanVersion, t)
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
                        type: _.D.GenericMedia,
                        media: e,
                    }),
            ).length &&
        U(null == (n = e.contentScanMetadata) ? void 0 : n.version, t)
    );
}

function U(e, t) {
    let n = h.A.validContentScanVersion;
    return e !== g && (t.includes(m.kn.GORE) || t.includes(m.kn.SELF_HARM) ? null == e || e < n : null == e);
}

function G(e) {
    return null != e && [i.TO.BLOCK, i.TO.BLUR].includes(e);
}

function V(e) {
    var t, n;
    let r = null,
        i = null;
    if (null == e)
        return {
            channelId: r,
            authorId: i,
        };
    if (
        ("channel_id" in e && (r = e.channel_id), "messageReference" in e && (0, o.A)(e) && null != e.messageReference)
    ) {
        let n = u.A.getMessage(e.messageReference.channel_id, e.messageReference.message_id);
        null != n && (i = null == (t = n.author) ? void 0 : t.id);
    } else "author" in e ? (i = null == (n = e.author) ? void 0 : n.id) : "author_id" in e && (i = e.author_id);
    return {
        channelId: r,
        authorId: i,
    };
}

function F(e) {
    return null != e.content_scan_version
        ? e.content_scan_version
        : null != e.contentScanVersion || null != e.contentScanVersion
          ? e.contentScanVersion
          : null;
}
