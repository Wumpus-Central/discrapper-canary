n.d(t, {
    L9: () => N,
    ZK: () => I,
    d4: () => S,
    dS: () => E,
    jY: () => C,
    q7: () => j,
    vZ: () => O
}),
    n(953529),
    n(997841);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(993365),
    o = n(981729),
    s = n(481060),
    c = n(543651),
    u = n(519320),
    d = n(592125),
    p = n(52824),
    m = n(630388),
    f = n(591759),
    h = n(850908),
    g = n(524444),
    _ = n(981631),
    b = n(388032),
    x = n(324846);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function v(e, t) {
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
function E(e) {
    var t;
    let n = e.item.originalItem;
    return (0, g.Yi)(
        v(y({}, e), {
            alt: n.description,
            src: (0, p.q)({
                proxyURL: n.proxy_url,
                url: n.url
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            srcIsAnimated: (0, m.yE)(null != (t = n.flags) ? t : 0, _.J0y.IS_ANIMATED),
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
            return (0, m.yE)(null != (e = n.flags) ? e : 0, _.J0y.IS_CLIP)
                ? (0, r.jsxs)(o.DY, {
                      text: b.intl.string(b.t['/fgfWl']),
                      className: x.clipPill,
                      children: [
                          (0, r.jsx)(s.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(a.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: b.intl.string(b.t.oA4afH)
                          })
                      ]
                  })
                : null;
        }, [n]),
        c = f.Z.toURLSafe(n.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append('format', 'webp'),
          (0, g.lV)(
              v(y({}, e), {
                  alt: n.description,
                  poster: c.toString(),
                  fileSize: n.size,
                  fileName: (0, h.Z)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, m.yE)(null != (t = n.flags) ? t : 0, _.J0y.IS_ANIMATED),
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
    return (0, g.hX)(
        v(y({}, e), {
            fileSize: t.size,
            fileName: (0, h.Z)(t),
            src: t.url
        })
    );
}
function C(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        l = i.useCallback(
            (e, n, i) => {
                var l;
                (0, u.tb)(t.id, null != (l = r.duration_secs) ? l : null, n, t.author.id);
            },
            [t, r.duration_secs]
        ),
        a = i.useCallback(
            (e, n) => {
                var i;
                (0, u.EW)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs]
        ),
        o = i.useCallback(
            (e) => {
                var n;
                (0, u.Np)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null);
            },
            [t]
        );
    return (0, g.wj)(
        v(y({}, e), {
            fileSize: r.size,
            fileName: (0, h.Z)(r),
            src: r.url,
            durationSecs: r.duration_secs,
            waveform: r.waveform,
            onPlay: l,
            onPause: a,
            onError: o
        })
    );
}
function S(e) {
    let t = e.item.originalItem;
    return (0, g.xi)(
        v(y({}, e), {
            url: t.url,
            fileName: (0, h.Z)(t),
            fileSize: t.size,
            contentType: t.content_type
        })
    );
}
function I(e) {
    let t = e.item.originalItem;
    return (0, g.ur)(
        v(y({}, e), {
            url: t.url,
            fileName: (0, h.Z)(t),
            fileSize: t.size
        })
    );
}
function N(e) {
    return 'CLIP' === e.item.type
        ? (0, r.jsx)(T, {
              attachment: e.item.originalItem,
              message: e.message
          })
        : null;
}
function T(e) {
    var t;
    let { attachment: n, message: i } = e,
        a = i.channel_id,
        o = (0, l.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getBasicChannel(a)) ? void 0 : e.guild_id;
        }),
        { clip_created_at: s, clip_participants: u, title: p, application: m } = n;
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
        title: p,
        guildId: o
    });
}
