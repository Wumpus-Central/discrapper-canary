n.d(t, {
    L9: () => S,
    ZK: () => I,
    d4: () => C,
    dS: () => O,
    jY: () => N,
    q7: () => j,
    vZ: () => E
}),
    n(266796),
    n(789020);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(993365),
    l = n(981729),
    s = n(481060),
    c = n(543651),
    d = n(519320),
    u = n(592125),
    p = n(52824),
    m = n(630388),
    f = n(591759),
    h = n(850908),
    g = n(524444),
    _ = n(981631),
    b = n(388032),
    v = n(840393);
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
function O(e) {
    var t;
    let n = e.item.originalItem;
    return (0, g.Yi)(
        x(y({}, e), {
            alt: n.description,
            src: (0, p.q)({
                proxyURL: n.proxy_url,
                url: n.url
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            srcIsAnimated: (0, m.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, _.J0y.IS_ANIMATED),
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
function E(e) {
    var t;
    let n = e.item.originalItem,
        a = i.useCallback(() => {
            var e;
            return (0, m.yE)(null !== (e = n.flags) && void 0 !== e ? e : 0, _.J0y.IS_CLIP)
                ? (0, r.jsxs)(l.DY, {
                      text: b.NW.string(b.t['/fgfWl']),
                      className: v.clipPill,
                      children: [
                          (0, r.jsx)(s.AlX, {
                              size: 'xs',
                              color: 'currentColor'
                          }),
                          (0, r.jsx)(o.x, {
                              variant: 'text-xs/semibold',
                              color: 'always-white',
                              children: b.NW.string(b.t.oA4afH)
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
              x(y({}, e), {
                  alt: n.description,
                  poster: c.toString(),
                  fileSize: n.size,
                  fileName: (0, h.Z)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, m.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, _.J0y.IS_ANIMATED),
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
              })
          ));
}
function j(e) {
    let t = e.item.originalItem;
    return (0, g.hX)(
        x(y({}, e), {
            fileSize: t.size,
            fileName: (0, h.Z)(t),
            src: t.url
        })
    );
}
function N(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        a = i.useCallback(
            (e, n, i) => {
                var a;
                (0, d.tb)(t.id, null !== (a = r.duration_secs) && void 0 !== a ? a : null, n, t.author.id);
            },
            [t, r.duration_secs]
        ),
        o = i.useCallback(
            (e, n) => {
                var i;
                (0, d.EW)(t.id, null !== (i = r.duration_secs) && void 0 !== i ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs]
        ),
        l = i.useCallback(
            (e) => {
                var n;
                (0, d.Np)(t.id, null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : null);
            },
            [t]
        );
    return (0, g.wj)(
        x(y({}, e), {
            fileSize: r.size,
            fileName: (0, h.Z)(r),
            src: r.url,
            durationSecs: r.duration_secs,
            waveform: r.waveform,
            onPlay: a,
            onPause: o,
            onError: l
        })
    );
}
function C(e) {
    let t = e.item.originalItem;
    return (0, g.xi)(
        x(y({}, e), {
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
        x(y({}, e), {
            url: t.url,
            fileName: (0, h.Z)(t),
            fileSize: t.size
        })
    );
}
function S(e) {
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
        o = i.channel_id,
        l = (0, a.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getBasicChannel(o)) || void 0 === e ? void 0 : e.guild_id;
        }),
        { clip_created_at: s, clip_participants: d, title: p, application: m } = n;
    return (0, r.jsx)(c.Z, {
        createdAt: null != s ? Date.parse(s) : void 0,
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
        applicationId: null == m ? void 0 : m.id,
        title: p,
        guildId: l
    });
}
