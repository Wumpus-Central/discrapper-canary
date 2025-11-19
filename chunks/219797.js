n.d(t, {
    L9: () => D,
    ZK: () => P,
    d4: () => R,
    dS: () => S,
    jY: () => N,
    q7: () => C,
    vZ: () => A,
}),
    n(953529),
    n(997841);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(993365),
    s = n(28664),
    l = n(481060),
    c = n(543651),
    u = n(177751),
    d = n(519320),
    f = n(592125),
    _ = n(52824),
    p = n(630388),
    h = n(591759),
    m = n(850908),
    g = n(524444),
    E = n(981631),
    b = n(388032),
    y = n(414215);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e) {
    var t;
    let n = e.item.originalItem;
    return (0, g.Yi)(
        T(v({}, e), {
            alt: n.description,
            src: (0, _.q)({
                proxyURL: n.proxy_url,
                url: n.url,
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            contentType: n.content_type,
            originalContentType: n.original_content_type,
            srcIsAnimated: (0, p.yE)(null != (t = n.flags) ? t : 0, E.J0y.IS_ANIMATED),
            sourceMetadata: {
                message: e.message,
                identifier: {
                    type: "attachment",
                    attachmentId: n.id,
                    filename: n.filename,
                    title: n.title,
                    size: n.size,
                },
            },
            analyticsSource: "ImageComponentForMessageAttachment",
        }),
    );
}
function A(e) {
    var t;
    let n = e.item.originalItem,
        a = i.useCallback(() => {
            var e;
            return (0, p.yE)(null != (e = n.flags) ? e : 0, E.J0y.IS_CLIP)
                ? (0, r.jsx)(s.u, {
                      text: b.intl.string(b.t["/fgfWh"]),
                      children: (0, r.jsxs)("div", {
                          className: y.clipPill,
                          children: [
                              (0, r.jsx)(l.AlX, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(o.x, {
                                  variant: "text-xs/semibold",
                                  color: "always-white",
                                  children: b.intl.string(b.t.oA4afG),
                              }),
                          ],
                      }),
                  })
                : null;
        }, [n]),
        c = h.Z.toURLSafe(n.proxy_url);
    return null == c
        ? null
        : (c.searchParams.append("format", "webp"),
          (0, g.lV)(
              T(v({}, e), {
                  alt: n.description,
                  poster: c.toString(),
                  fileSize: n.size,
                  fileName: (0, m.Z)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, p.yE)(null != (t = n.flags) ? t : 0, E.J0y.IS_ANIMATED),
                  renderOverlayContent: a,
                  sourceMetadata: {
                      message: e.message,
                      identifier: {
                          type: "attachment",
                          attachmentId: n.id,
                          filename: n.filename,
                          size: n.size,
                      },
                  },
              }),
          ));
}
function C(e) {
    let t = e.item.originalItem;
    return (0, g.hX)(
        T(v({}, e), {
            fileSize: t.size,
            fileName: (0, m.Z)(t),
            src: t.url,
        }),
    );
}
function N(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        a = (0, u.RT)(u.Ir.VOICE_MESSAGE, r.id),
        o = i.useCallback(
            (e, n, i) => {
                var a;
                (0, d.tb)(t.id, null != (a = r.duration_secs) ? a : null, n, t.author.id);
            },
            [t, r.duration_secs],
        ),
        s = i.useCallback(
            (e, n) => {
                var i;
                (0, d.EW)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs],
        ),
        l = i.useCallback(
            (e) => {
                var n;
                (0, d.Np)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null);
            },
            [t],
        );
    return (0, g.wj)(
        T(v({}, e), {
            fileSize: r.size,
            fileName: (0, m.Z)(r),
            src: r.url,
            durationSecs: r.duration_secs,
            waveform: r.waveform,
            onPlay: o,
            onPause: s,
            onError: l,
            playbackCacheKey: a,
        }),
    );
}
function R(e) {
    let t = e.item.originalItem;
    return (0, g.xi)(
        T(v({}, e), {
            url: t.url,
            fileName: (0, m.Z)(t),
            fileSize: t.size,
            contentType: t.content_type,
        }),
    );
}
function P(e) {
    let t = e.item.originalItem;
    return (0, g.ur)(
        T(v({}, e), {
            url: t.url,
            fileName: (0, m.Z)(t),
            fileSize: t.size,
        }),
    );
}
function D(e) {
    return "CLIP" === e.item.type
        ? (0, r.jsx)(w, {
              attachment: e.item.originalItem,
              message: e.message,
          })
        : null;
}
function w(e) {
    var t;
    let { attachment: n, message: i } = e,
        o = i.channel_id,
        s = (0, a.e7)([f.Z], () => {
            var e;
            return null == (e = f.Z.getBasicChannel(o)) ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: u, title: d, application: _ } = n;
    return (0, r.jsx)(c.Z, {
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
        applicationId: null == _ ? void 0 : _.id,
        title: d,
        guildId: s,
    });
}
