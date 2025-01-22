n.d(t, {
    L9: function () {
        return A;
    },
    ZK: function () {
        return S;
    },
    d4: function () {
        return T;
    },
    dS: function () {
        return I;
    },
    jY: function () {
        return v;
    },
    q7: function () {
        return N;
    },
    vZ: function () {
        return x;
    }
}),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(993365),
    o = n(981729),
    s = n(481060),
    c = n(543651),
    u = n(519320),
    d = n(592125),
    m = n(52824),
    h = n(630388),
    f = n(591759),
    p = n(850908),
    _ = n(524444),
    g = n(981631),
    E = n(388032),
    C = n(418135);
function I(e) {
    var t;
    let n = e.item.originalItem;
    return (0, _.Yi)({
        ...e,
        alt: n.description,
        src: (0, m.q)({
            proxyURL: n.proxy_url,
            url: n.url
        }),
        original: n.url,
        placeholder: n.placeholder,
        placeholderVersion: n.placeholder_version,
        srcIsAnimated: (0, h.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, g.J0y.IS_ANIMATED),
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
function x(e) {
    var t;
    let n = e.item.originalItem,
        l = r.useCallback(() => {
            var e;
            return (0, h.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, g.J0y.IS_CLIP)
                ? (0, i.jsxs)(o.DY, {
                      text: E.intl.string(E.t['/fgfWl']),
                      className: C.clipPill,
                      children: [
                          (0, i.jsx)(s.ClipsIcon, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(a.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: E.intl.string(E.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [n]),
        c = f.Z.toURLSafe(n.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, _.lV)({
              ...e,
              alt: n.description,
              poster: c.toString(),
              fileSize: n.size,
              fileName: (0, p.Z)(n),
              src: n.url,
              placeholder: n.placeholder,
              placeholderVersion: n.placeholder_version,
              srcIsAnimated: (0, h.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, g.J0y.IS_ANIMATED),
              renderOverlayContent: l,
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
function N(e) {
    let t = e.item.originalItem;
    return (0, _.hX)({
        ...e,
        fileSize: t.size,
        fileName: (0, p.Z)(t),
        src: t.url
    });
}
function v(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        l = r.useCallback(
            (e, n, r) => {
                var l;
                (0, u.tb)(t.id, null !== (l = i.duration_secs) && void 0 !== l ? l : null, n, t.author.id);
            },
            [t, i.duration_secs]
        ),
        a = r.useCallback(
            (e, n) => {
                var r;
                (0, u.EW)(t.id, null !== (r = i.duration_secs) && void 0 !== r ? r : null, e, t.author.id, n);
            },
            [t, i.duration_secs]
        ),
        o = r.useCallback(
            (e) => {
                var n;
                (0, u.Np)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
            },
            [t]
        );
    return (0, _.wj)({
        ...e,
        fileSize: i.size,
        fileName: (0, p.Z)(i),
        src: i.url,
        durationSecs: i.duration_secs,
        waveform: i.waveform,
        onPlay: l,
        onPause: a,
        onError: o
    });
}
function T(e) {
    let t = e.item.originalItem;
    return (0, _.xi)({
        ...e,
        url: t.url,
        fileName: (0, p.Z)(t),
        fileSize: t.size,
        contentType: t.content_type
    });
}
function S(e) {
    let t = e.item.originalItem;
    return (0, _.ur)({
        ...e,
        url: t.url,
        fileName: (0, p.Z)(t),
        fileSize: t.size
    });
}
function A(e) {
    if ('CLIP' === e.item.type)
        return (0, i.jsx)(b, {
            attachment: e.item.originalItem,
            message: e.message
        });
    return null;
}
function b(e) {
    var t;
    let { attachment: n, message: r } = e,
        a = r.channel_id,
        o = (0, l.e7)([d.Z], () => {
            var e;
            return null === (e = d.Z.getBasicChannel(a)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: s, clip_participants: u, title: m, application: h } = n;
    return (0, i.jsx)(c.Z, {
        createdAt: null != s ? Date.parse(s) : void 0,
        participantIds:
            null !==
                (t =
                    null == u
                        ? void 0
                        : u.map((e) => {
                              let { id: t } = e;
                              return t;
                          })) && void 0 !== t
                ? t
                : [],
        applicationId: null == h ? void 0 : h.id,
        title: m,
        guildId: o
    });
}
