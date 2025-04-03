n.d(t, {
    L9: () => B,
    ZK: () => E,
    d4: () => T,
    dS: () => O,
    jY: () => w,
    q7: () => C,
    vZ: () => x
}),
    n(266796),
    n(789020);
var i = n(200651),
    a = n(192379),
    o = n(442837),
    r = n(993365),
    s = n(981729),
    l = n(481060),
    c = n(543651),
    u = n(519320),
    d = n(592125),
    f = n(52824),
    m = n(630388),
    _ = n(591759),
    p = n(850908),
    g = n(524444),
    v = n(981631),
    y = n(388032),
    h = n(324846);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    var t;
    let n = e.item.originalItem;
    return (0, g.Yi)(
        b(I({}, e), {
            alt: n.description,
            src: (0, f.q)({
                proxyURL: n.proxy_url,
                url: n.url
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            srcIsAnimated: (0, m.yE)(null != (t = n.flags) ? t : 0, v.J0y.IS_ANIMATED),
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
function x(e) {
    var t;
    let n = e.item.originalItem,
        o = a.useCallback(() => {
            var e;
            return (0, m.yE)(null != (e = n.flags) ? e : 0, v.J0y.IS_CLIP)
                ? (0, i.jsxs)(s.DY, {
                      text: y.NW.string(y.t['/fgfWl']),
                      className: h.clipPill,
                      children: [
                          (0, i.jsx)(l.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, i.jsx)(r.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: y.NW.string(y.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [n]),
        c = _.Z.toURLSafe(n.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, g.lV)(
              b(I({}, e), {
                  alt: n.description,
                  poster: c.toString(),
                  fileSize: n.size,
                  fileName: (0, p.Z)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, m.yE)(null != (t = n.flags) ? t : 0, v.J0y.IS_ANIMATED),
                  renderOverlayContent: o,
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
function C(e) {
    let t = e.item.originalItem;
    return (0, g.hX)(
        b(I({}, e), {
            fileSize: t.size,
            fileName: (0, p.Z)(t),
            src: t.url
        })
    );
}
function w(e) {
    let { message: t, item: n } = e,
        i = n.originalItem,
        o = a.useCallback(
            (e, n, a) => {
                var o;
                (0, u.tb)(t.id, null != (o = i.duration_secs) ? o : null, n, t.author.id);
            },
            [t, i.duration_secs]
        ),
        r = a.useCallback(
            (e, n) => {
                var a;
                (0, u.EW)(t.id, null != (a = i.duration_secs) ? a : null, e, t.author.id, n);
            },
            [t, i.duration_secs]
        ),
        s = a.useCallback(
            (e) => {
                var n;
                (0, u.Np)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null);
            },
            [t]
        );
    return (0, g.wj)(
        b(I({}, e), {
            fileSize: i.size,
            fileName: (0, p.Z)(i),
            src: i.url,
            durationSecs: i.duration_secs,
            waveform: i.waveform,
            onPlay: o,
            onPause: r,
            onError: s
        })
    );
}
function T(e) {
    let t = e.item.originalItem;
    return (0, g.xi)(
        b(I({}, e), {
            url: t.url,
            fileName: (0, p.Z)(t),
            fileSize: t.size,
            contentType: t.content_type
        })
    );
}
function E(e) {
    let t = e.item.originalItem;
    return (0, g.ur)(
        b(I({}, e), {
            url: t.url,
            fileName: (0, p.Z)(t),
            fileSize: t.size
        })
    );
}
function B(e) {
    return 'CLIP' === e.item.type
        ? (0, i.jsx)(S, {
              attachment: e.item.originalItem,
              message: e.message
          })
        : null;
}
function S(e) {
    var t;
    let { attachment: n, message: a } = e,
        r = a.channel_id,
        s = (0, o.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getBasicChannel(r)) ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: u, title: f, application: m } = n;
    return (0, i.jsx)(c.Z, {
        createdAt: null != l ? Date.parse(l) : void 0,
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
        title: f,
        guildId: s
    });
}
