(n.d(t, {
    L9: () => N,
    ZK: () => T,
    d4: () => S,
    dS: () => v,
    jY: () => I,
    q7: () => j,
    vZ: () => O
}),
    n(953529),
    n(997841));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(993365),
    o = n(981729),
    s = n(481060),
    c = n(543651),
    u = n(177751),
    d = n(519320),
    p = n(592125),
    m = n(52824),
    f = n(630388),
    _ = n(591759),
    g = n(850908),
    h = n(524444),
    b = n(981631),
    E = n(388032),
    y = n(324846);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    var t;
    let n = e.item.originalItem;
    return (0, h.Yi)(
        x(C({}, e), {
            alt: n.description,
            src: (0, m.q)({
                proxyURL: n.proxy_url,
                url: n.url
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            srcIsAnimated: (0, f.yE)(null != (t = n.flags) ? t : 0, b.J0y.IS_ANIMATED),
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
        })
    );
}
function O(e) {
    var t;
    let n = e.item.originalItem,
        l = i.useCallback(() => {
            var e;
            return (0, f.yE)(null != (e = n.flags) ? e : 0, b.J0y.IS_CLIP)
                ? (0, r.jsxs)(o.DY, {
                      text: E.intl.string(E.t['/fgfWl']),
                      className: y.clipPill,
                      children: [
                          (0, r.jsx)(s.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(a.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: E.intl.string(E.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [n]),
        c = _.Z.toURLSafe(n.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, h.lV)(
              x(C({}, e), {
                  alt: n.description,
                  poster: c.toString(),
                  fileSize: n.size,
                  fileName: (0, g.Z)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, f.yE)(null != (t = n.flags) ? t : 0, b.J0y.IS_ANIMATED),
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
              })
          ));
}
function j(e) {
    let t = e.item.originalItem;
    return (0, h.hX)(
        x(C({}, e), {
            fileSize: t.size,
            fileName: (0, g.Z)(t),
            src: t.url
        })
    );
}
function I(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        l = (0, u.RT)(u.Ir.VOICE_MESSAGE, r.id),
        a = i.useCallback(
            (e, n, i) => {
                var l;
                (0, d.tb)(t.id, null != (l = r.duration_secs) ? l : null, n, t.author.id);
            },
            [t, r.duration_secs]
        ),
        o = i.useCallback(
            (e, n) => {
                var i;
                (0, d.EW)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs]
        ),
        s = i.useCallback(
            (e) => {
                var n;
                (0, d.Np)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null);
            },
            [t]
        );
    return (0, h.wj)(
        x(C({}, e), {
            fileSize: r.size,
            fileName: (0, g.Z)(r),
            src: r.url,
            durationSecs: r.duration_secs,
            waveform: r.waveform,
            onPlay: a,
            onPause: o,
            onError: s,
            playbackCacheKey: l
        })
    );
}
function S(e) {
    let t = e.item.originalItem;
    return (0, h.xi)(
        x(C({}, e), {
            url: t.url,
            fileName: (0, g.Z)(t),
            fileSize: t.size,
            contentType: t.content_type
        })
    );
}
function T(e) {
    let t = e.item.originalItem;
    return (0, h.ur)(
        x(C({}, e), {
            url: t.url,
            fileName: (0, g.Z)(t),
            fileSize: t.size
        })
    );
}
function N(e) {
    return 'CLIP' === e.item.type
        ? (0, r.jsx)(P, {
              attachment: e.item.originalItem,
              message: e.message
          })
        : null;
}
function P(e) {
    var t;
    let { attachment: n, message: i } = e,
        a = i.channel_id,
        o = (0, l.e7)([p.Z], () => {
            var e;
            return null == (e = p.Z.getBasicChannel(a)) ? void 0 : e.guild_id;
        }),
        { clip_created_at: s, clip_participants: u, title: d, application: m } = n;
    return (0, r.jsx)(c.Z, {
        createdAt: null != s ? Date.parse(s) : void 0,
        participantIds:
            null !=
            (t =
                null == u
                    ? void 0
                    : u.map((e) => {
                          let { id: t } = e;
                          return t;
                      }))
                ? t
                : [],
        applicationId: null == m ? void 0 : m.id,
        title: d,
        guildId: o
    });
}
