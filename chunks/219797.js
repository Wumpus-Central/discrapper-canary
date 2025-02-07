a.d(i, {
    L9: () => b,
    ZK: () => x,
    d4: () => w,
    dS: () => C,
    jY: () => M,
    q7: () => B,
    vZ: () => g
}),
    a(789020);
var n = a(200651),
    t = a(192379),
    o = a(442837),
    s = a(993365),
    l = a(981729),
    r = a(481060),
    c = a(543651),
    d = a(519320),
    u = a(592125),
    _ = a(52824),
    m = a(630388),
    f = a(591759),
    p = a(850908),
    I = a(524444),
    h = a(981631),
    v = a(388032),
    y = a(418135);
function C(e) {
    var i;
    let a = e.item.originalItem;
    return (0, I.Yi)({
        ...e,
        alt: a.description,
        src: (0, _.q)({
            proxyURL: a.proxy_url,
            url: a.url
        }),
        original: a.url,
        placeholder: a.placeholder,
        placeholderVersion: a.placeholder_version,
        srcIsAnimated: (0, m.yE)(null !== (i = a.flags) && void 0 !== i ? i : 0, h.J0y.IS_ANIMATED),
        sourceMetadata: {
            message: e.message,
            identifier: {
                type: 'attachment',
                attachmentId: a.id,
                filename: a.filename,
                title: a.title,
                size: a.size
            }
        },
        analyticsSource: 'ImageComponentForMessageAttachment'
    });
}
function g(e) {
    var i;
    let a = e.item.originalItem,
        o = t.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = a.flags) && void 0 !== e ? e : 0, h.J0y.IS_CLIP)
                ? (0, n.jsxs)(l.DY, {
                      text: v.intl.string(v.t['/fgfWl']),
                      className: y.clipPill,
                      children: [
                          (0, n.jsx)(r.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, n.jsx)(s.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: v.intl.string(v.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [a]),
        c = f.Z.toURLSafe(a.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, I.lV)({
              ...e,
              alt: a.description,
              poster: c.toString(),
              fileSize: a.size,
              fileName: (0, p.Z)(a),
              src: a.url,
              placeholder: a.placeholder,
              placeholderVersion: a.placeholder_version,
              srcIsAnimated: (0, m.yE)(null !== (i = a.flags) && void 0 !== i ? i : 0, h.J0y.IS_ANIMATED),
              renderOverlayContent: o,
              sourceMetadata: {
                  message: e.message,
                  identifier: {
                      type: 'attachment',
                      attachmentId: a.id,
                      filename: a.filename,
                      size: a.size
                  }
              }
          }));
}
function B(e) {
    let i = e.item.originalItem;
    return (0, I.hX)({
        ...e,
        fileSize: i.size,
        fileName: (0, p.Z)(i),
        src: i.url
    });
}
function M(e) {
    let { message: i, item: a } = e,
        n = a.originalItem,
        o = t.useCallback(
            (e, a, t) => {
                var o;
                (0, d.tb)(i.id, null !== (o = n.duration_secs) && void 0 !== o ? o : null, a, i.author.id);
            },
            [i, n.duration_secs]
        ),
        s = t.useCallback(
            (e, a) => {
                var t;
                (0, d.EW)(i.id, null !== (t = n.duration_secs) && void 0 !== t ? t : null, e, i.author.id, a);
            },
            [i, n.duration_secs]
        ),
        l = t.useCallback(
            (e) => {
                var a;
                (0, d.Np)(i.id, null !== (a = null == e ? void 0 : e.message) && void 0 !== a ? a : null);
            },
            [i]
        );
    return (0, I.wj)({
        ...e,
        fileSize: n.size,
        fileName: (0, p.Z)(n),
        src: n.url,
        durationSecs: n.duration_secs,
        waveform: n.waveform,
        onPlay: o,
        onPause: s,
        onError: l
    });
}
function w(e) {
    let i = e.item.originalItem;
    return (0, I.xi)({
        ...e,
        url: i.url,
        fileName: (0, p.Z)(i),
        fileSize: i.size,
        contentType: i.content_type
    });
}
function x(e) {
    let i = e.item.originalItem;
    return (0, I.ur)({
        ...e,
        url: i.url,
        fileName: (0, p.Z)(i),
        fileSize: i.size
    });
}
function b(e) {
    return 'CLIP' === e.item.type
        ? (0, n.jsx)(A, {
              attachment: e.item.originalItem,
              message: e.message
          })
        : null;
}
function A(e) {
    var i;
    let { attachment: a, message: t } = e,
        s = t.channel_id,
        l = (0, o.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getBasicChannel(s)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: r, clip_participants: d, title: _, application: m } = a;
    return (0, n.jsx)(c.Z, {
        createdAt: null != r ? Date.parse(r) : void 0,
        participantIds:
            null !==
                (i =
                    null == d
                        ? void 0
                        : d.map((e) => {
                              let { id: i } = e;
                              return i;
                          })) && void 0 !== i
                ? i
                : [],
        applicationId: null == m ? void 0 : m.id,
        title: _,
        guildId: l
    });
}
