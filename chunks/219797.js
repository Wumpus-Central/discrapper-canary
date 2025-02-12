i.d(t, {
    L9: () => A,
    ZK: () => E,
    d4: () => B,
    dS: () => x,
    jY: () => T,
    q7: () => y,
    vZ: () => C
}),
    i(789020);
var n = i(200651),
    a = i(192379),
    o = i(442837),
    r = i(993365),
    s = i(981729),
    l = i(481060),
    c = i(543651),
    d = i(519320),
    u = i(592125),
    m = i(52824),
    _ = i(630388),
    f = i(591759),
    v = i(850908),
    p = i(524444),
    I = i(981631),
    h = i(388032),
    g = i(15780);
function x(e) {
    var t;
    let i = e.item.originalItem;
    return (0, p.Yi)({
        ...e,
        alt: i.description,
        src: (0, m.q)({
            proxyURL: i.proxy_url,
            url: i.url
        }),
        original: i.url,
        placeholder: i.placeholder,
        placeholderVersion: i.placeholder_version,
        srcIsAnimated: (0, _.yE)(null !== (t = i.flags) && void 0 !== t ? t : 0, I.J0y.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: 'attachment',
                attachmentId: i.id,
                filename: i.filename,
                title: i.title,
                size: i.size
            }
        },
        analyticsSource: 'ImageComponentForMessageAttachment'
    });
}
function C(e) {
    var t;
    let i = e.item.originalItem,
        o = a.useCallback(() => {
            var e;
            return (0, _.yE)(null !== (e = i.flags) && void 0 !== e ? e : 0, I.J0y.IS_CLIP)
                ? (0, n.jsxs)(s.DY, {
                      text: h.intl.string(h.t['/fgfWl']),
                      className: g.clipPill,
                      children: [
                          (0, n.jsx)(l.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, n.jsx)(r.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: h.intl.string(h.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [i]),
        c = f.Z.toURLSafe(i.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, p.lV)({
              ...e,
              alt: i.description,
              poster: c.toString(),
              fileSize: i.size,
              fileName: (0, v.Z)(i),
              src: i.url,
              placeholder: i.placeholder,
              placeholderVersion: i.placeholder_version,
              srcIsAnimated: (0, _.yE)(null !== (t = i.flags) && void 0 !== t ? t : 0, I.J0y.IS_ANIMATED),
              renderOverlayContent: o,
              sourceMetadata: {
                  message: e.message,
                  identifier: {
                      type: 'attachment',
                      attachmentId: i.id,
                      filename: i.filename,
                      size: i.size
                  }
              }
          }));
}
function y(e) {
    let t = e.item.originalItem;
    return (0, p.hX)({
        ...e,
        fileSize: t.size,
        fileName: (0, v.Z)(t),
        src: t.url
    });
}
function T(e) {
    let { message: t, item: i } = e,
        n = i.originalItem,
        o = a.useCallback(
            (e, i, a) => {
                var o;
                (0, d.tb)(t.id, null !== (o = n.duration_secs) && void 0 !== o ? o : null, i, t.author.id);
            },
            [t, n.duration_secs]
        ),
        r = a.useCallback(
            (e, i) => {
                var a;
                (0, d.EW)(t.id, null !== (a = n.duration_secs) && void 0 !== a ? a : null, e, t.author.id, i);
            },
            [t, n.duration_secs]
        ),
        s = a.useCallback(
            (e) => {
                var i;
                (0, d.Np)(t.id, null !== (i = null == e ? void 0 : e.message) && void 0 !== i ? i : null);
            },
            [t]
        );
    return (0, p.wj)({
        ...e,
        fileSize: n.size,
        fileName: (0, v.Z)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: o,
        onPause: r,
        onError: s
    });
}
function B(e) {
    let t = e.item.originalItem;
    return (0, p.xi)({
        ...e,
        url: t.url,
        fileName: (0, v.Z)(t),
        fileSize: t.size,
        contentType: t.content_type
    });
}
function E(e) {
    let t = e.item.originalItem;
    return (0, p.ur)({
        ...e,
        url: t.url,
        fileName: (0, v.Z)(t),
        fileSize: t.size
    });
}
function A(e) {
    return 'CLIP' === e.item.type
        ? (0, n.jsx)(M, {
              attachment: e.item.originalItem,
              message: e.message
          })
        : null;
}
function M(e) {
    var t;
    let { attachment: i, message: a } = e,
        r = a.channel_id,
        s = (0, o.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getBasicChannel(r)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: d, title: m, application: _ } = i;
    return (0, n.jsx)(c.Z, {
        createdAt: null != l ? Date.parse(l) : void 0,
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
