n.d(t, {
    L9: () => b,
    ZK: () => T,
    d4: () => S,
    dS: () => v,
    jY: () => N,
    q7: () => I,
    vZ: () => E
}),
    n(789020);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(993365),
    s = n(981729),
    o = n(481060),
    c = n(543651),
    d = n(519320),
    u = n(592125),
    m = n(52824),
    _ = n(630388),
    h = n(591759),
    p = n(850908),
    g = n(524444),
    f = n(981631),
    x = n(388032),
    C = n(693336);
function v(e) {
    var t;
    let n = e.item.originalItem;
    return (0, g.Yi)({
        ...e,
        alt: n.description,
        src: (0, m.q)({
            proxyURL: n.proxy_url,
            url: n.url
        }),
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholder_version,
        srcIsAnimated: (0, _.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, f.J0y.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: 'attachment',
                attachmentId: n.id,
                filename: n.filename,
                title: n.title,
                size: n.size
            }
        },
        analyticsSource: 'ImageComponentForMessageAttachment'
    });
}
function E(e) {
    var t;
    let n = e.item.originalItem,
        a = l.useCallback(() => {
            var e;
            return (0, _.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, f.J0y.IS_CLIP)
                ? (0, i.jsxs)(s.DY, {
                      text: x.intl.string(x.t['/fgfWl']),
                      className: C.clipPill,
                      children: [
                          (0, i.jsx)(o.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(r.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: x.intl.string(x.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [n]),
        c = h.Z.toURLSafe(n.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, g.lV)({
              ...e,
              alt: n.description,
              poster: c.toString(),
              fileSize: n.size,
              fileName: (0, p.Z)(n),
              src: n.url,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholder_version,
              srcIsAnimated: (0, _.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, f.J0y.IS_ANIMATED),
              renderOverlayContent: a,
              sourceMetadata: {
                  message: e.message,
                  identifier: {
                      type: 'attachment',
                      attachmentId: n.id,
                      filename: n.filename,
                      size: n.size
                  }
              }
          }));
}
function I(e) {
    let t = e.item.originalItem;
    return (0, g.hX)({
        ...e,
        fileSize: t.size,
        fileName: (0, p.Z)(t),
        src: t.url
    });
}
function N(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        a = l.useCallback(
            (e, n, l) => {
                var a;
                (0, d.tb)(t.id, null !== (a = i.duration_secs) && void 0 !== a ? a : null, n, t.author.id);
            },
            [t, i.duration_secs]
        ),
        r = l.useCallback(
            (e, n) => {
                var l;
                (0, d.EW)(t.id, null !== (l = i.duration_secs) && void 0 !== l ? l : null, e, t.author.id, n);
            },
            [t, i.duration_secs]
        ),
        s = l.useCallback(
            (e) => {
                var n;
                (0, d.Np)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
            },
            [t]
        );
    return (0, g.wj)({
        ...e,
        fileSize: i.size,
        fileName: (0, p.Z)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: a,
        onPause: r,
        onError: s
    });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, g.xi)({
        ...e,
        url: t.url,
        fileName: (0, p.Z)(t),
        fileSize: t.size,
        contentType: t.content_type
    });
}
function T(e) {
    let t = e.item.originalItem;
    return (0, g.ur)({
        ...e,
        url: t.url,
        fileName: (0, p.Z)(t),
        fileSize: t.size
    });
}
function b(e) {
    return 'CLIP' === e.item.type
        ? (0, i.jsx)(A, {
              attachment: e.item.originalItem,
              message: e.message
          })
        : null;
}
function A(e) {
    var t;
    let { attachment: n, message: l } = e,
        r = l.channel_id,
        s = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getBasicChannel(r)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: o, clip_participants: d, title: m, application: _ } = n;
    return (0, i.jsx)(c.Z, {
        createdAt: null != o ? Date.parse(o) : void 0,
        participantIds:
            null !==
                (t =
                    null == d
                        ? void 0
                        : d.map((e) => {
                              let { id: t } = e;
                              return t;
                          })) && void 0 !== t
                ? t
                : [],
        applicationId: null == _ ? void 0 : _.id,
        title: m,
        guildId: s
    });
}
