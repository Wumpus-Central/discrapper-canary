n.d(t, {
    Cr: () => I,
    I1: () => T,
    Nj: () => C,
    R6: () => R,
    SX: () => N,
    UB: () => w,
    YE: () => P,
}),
    n(228524),
    n(938796);
var r = n(627968),
    i = n(64700),
    a = n(665260),
    s = n(311907),
    o = n(571356),
    l = n(990078),
    c = n(397927),
    u = n(458517),
    d = n(713021),
    f = n(121489),
    p = n(734057),
    _ = n(644447),
    h = n(998218),
    m = n(465856),
    g = n(652176),
    E = n(652215),
    b = n(985018),
    y = n(928438);
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
function A(e) {
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
function v(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    var t;
    let n = e.item.originalItem;
    return (0, g.LL)(
        S(A({}, e), {
            alt: n.description,
            src: (0, _.E)({
                proxyURL: n.proxy_url,
                url: n.url,
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            contentType: n.content_type,
            originalContentType: n.original_content_type,
            srcIsAnimated: (0, a.Lt)(null != (t = n.flags) ? t : 0, E.sbO.IS_ANIMATED),
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
function T(e) {
    var t;
    let n = e.item.originalItem,
        s = i.useCallback(() => {
            var e;
            return (0, a.Lt)(null != (e = n.flags) ? e : 0, E.sbO.IS_CLIP)
                ? (0, r.jsx)(l.m, {
                      text: b.intl.string(b.t["/fgfWh"]),
                      children: (0, r.jsxs)("div", {
                          className: y.M,
                          children: [
                              (0, r.jsx)(c.xgA, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(o.E, {
                                  variant: "text-xs/semibold",
                                  color: "always-white",
                                  children: b.intl.string(b.t.oA4afG),
                              }),
                          ],
                      }),
                  })
                : null;
        }, [n]),
        u = h.A.toURLSafe(n.proxy_url);
    return null == u
        ? null
        : (u.searchParams.append("format", "webp"),
          (0, g.$o)(
              S(A({}, e), {
                  alt: n.description,
                  poster: u.toString(),
                  fileSize: n.size,
                  fileName: (0, m.A)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, a.Lt)(null != (t = n.flags) ? t : 0, E.sbO.IS_ANIMATED),
                  renderOverlayContent: s,
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
    return (0, g.gL)(
        S(A({}, e), {
            fileSize: t.size,
            fileName: (0, m.A)(t),
            src: t.url,
        }),
    );
}
function N(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        a = (0, d.dx)(d.k0.VOICE_MESSAGE, r.id),
        s = i.useCallback(
            (e, n, i) => {
                var a;
                (0, f.wQ)(t.id, null != (a = r.duration_secs) ? a : null, n, t.author.id);
            },
            [t, r.duration_secs],
        ),
        o = i.useCallback(
            (e, n) => {
                var i;
                (0, f.dP)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs],
        ),
        l = i.useCallback(
            (e) => {
                var n;
                (0, f._O)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null);
            },
            [t],
        );
    return (0, g.P$)(
        S(A({}, e), {
            fileSize: r.size,
            fileName: (0, m.A)(r),
            src: r.url,
            durationSecs: r.duration_secs,
            waveform: r.waveform,
            onPlay: s,
            onPause: o,
            onError: l,
            playbackCacheKey: a,
        }),
    );
}
function R(e) {
    let t = e.item.originalItem;
    return (0, g._d)(
        S(A({}, e), {
            url: t.url,
            fileName: (0, m.A)(t),
            fileSize: t.size,
            contentType: t.content_type,
        }),
    );
}
function w(e) {
    let t = e.item.originalItem;
    return (0, g.Dk)(
        S(A({}, e), {
            url: t.url,
            fileName: (0, m.A)(t),
            fileSize: t.size,
        }),
    );
}
function P(e) {
    return "CLIP" === e.item.type
        ? (0, r.jsx)(D, {
              attachment: e.item.originalItem,
              message: e.message,
          })
        : null;
}
function D(e) {
    var t;
    let { attachment: n, message: i } = e,
        a = i.channel_id,
        o = (0, s.bG)([p.A], () => {
            var e;
            return null == (e = p.A.getBasicChannel(a)) ? void 0 : e.guild_id;
        }),
        { clip_created_at: l, clip_participants: c, title: d, application: f } = n;
    return (0, r.jsx)(u.A, {
        createdAt: null != l ? Date.parse(l) : void 0,
        participantIds:
            null !=
            (t =
                null == c
                    ? void 0
                    : c.map((e) => {
                          let { id: t } = e;
                          return t;
                      }))
                ? t
                : [],
        applicationId: null == f ? void 0 : f.id,
        title: d,
        guildId: o,
    });
}
