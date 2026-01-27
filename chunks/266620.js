n.d(t, {
    Cr: () => O,
    I1: () => E,
    Nj: () => j,
    R6: () => I,
    SX: () => C,
    UB: () => S,
    YE: () => T,
}),
    n(228524),
    n(938796);
var r = n(627968),
    i = n(64700),
    l = n(665260),
    a = n(311907),
    s = n(571356),
    o = n(990078),
    c = n(397927),
    u = n(458517),
    d = n(713021),
    p = n(121489),
    m = n(734057),
    f = n(644447),
    g = n(998218),
    h = n(465856),
    _ = n(652176),
    b = n(652215),
    A = n(985018),
    y = n(928438);

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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    return (0, _.LL)(
        x(v({}, e), {
            alt: n.description,
            src: (0, f.E)({
                proxyURL: n.proxy_url,
                url: n.url,
            }),
            original: n.url,
            placeholder: n.placeholder,
            placeholderVersion: n.placeholder_version,
            contentType: n.content_type,
            originalContentType: n.original_content_type,
            srcIsAnimated: (0, l.Lt)(null != (t = n.flags) ? t : 0, b.sbO.IS_ANIMATED),
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

function E(e) {
    var t;
    let n = e.item.originalItem,
        a = i.useCallback(() => {
            var e;
            return (0, l.Lt)(null != (e = n.flags) ? e : 0, b.sbO.IS_CLIP)
                ? (0, r.jsx)(o.m, {
                      text: A.intl.string(A.t["/fgfWh"]),
                      children: (0, r.jsxs)("div", {
                          className: y.M,
                          children: [
                              (0, r.jsx)(c.xgA, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              (0, r.jsx)(s.E, {
                                  variant: "text-xs/semibold",
                                  color: "always-white",
                                  children: A.intl.string(A.t.oA4afG),
                              }),
                          ],
                      }),
                  })
                : null;
        }, [n]),
        u = g.A.toURLSafe(n.proxy_url);
    return null == u
        ? null
        : (u.searchParams.append("format", "webp"),
          (0, _.$o)(
              x(v({}, e), {
                  alt: n.description,
                  poster: u.toString(),
                  fileSize: n.size,
                  fileName: (0, h.A)(n),
                  src: n.url,
                  placeholder: n.placeholder,
                  placeholderVersion: n.placeholder_version,
                  srcIsAnimated: (0, l.Lt)(null != (t = n.flags) ? t : 0, b.sbO.IS_ANIMATED),
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

function j(e) {
    let t = e.item.originalItem;
    return (0, _.gL)(
        x(v({}, e), {
            fileSize: t.size,
            fileName: (0, h.A)(t),
            src: t.url,
        }),
    );
}

function C(e) {
    let { message: t, item: n } = e,
        r = n.originalItem,
        l = (0, d.dx)(d.k0.VOICE_MESSAGE, r.id),
        a = i.useCallback(
            (e, n, i) => {
                var l;
                (0, p.wQ)(t.id, null != (l = r.duration_secs) ? l : null, n, t.author.id);
            },
            [t, r.duration_secs],
        ),
        s = i.useCallback(
            (e, n) => {
                var i;
                (0, p.dP)(t.id, null != (i = r.duration_secs) ? i : null, e, t.author.id, n);
            },
            [t, r.duration_secs],
        ),
        o = i.useCallback(
            (e) => {
                var n;
                (0, p._O)(t.id, null != (n = null == e ? void 0 : e.message) ? n : null);
            },
            [t],
        );
    return (0, _.P$)(
        x(v({}, e), {
            fileSize: r.size,
            fileName: (0, h.A)(r),
            src: r.url,
            durationSecs: r.duration_secs,
            waveform: r.waveform,
            onPlay: a,
            onPause: s,
            onError: o,
            playbackCacheKey: l,
        }),
    );
}

function I(e) {
    let t = e.item.originalItem;
    return (0, _._d)(
        x(v({}, e), {
            url: t.url,
            fileName: (0, h.A)(t),
            fileSize: t.size,
            contentType: t.content_type,
        }),
    );
}

function S(e) {
    let t = e.item.originalItem;
    return (0, _.Dk)(
        x(v({}, e), {
            url: t.url,
            fileName: (0, h.A)(t),
            fileSize: t.size,
        }),
    );
}

function T(e) {
    return "CLIP" === e.item.type
        ? (0, r.jsx)(N, {
              attachment: e.item.originalItem,
              message: e.message,
          })
        : null;
}

function N(e) {
    var t;
    let { attachment: n, message: i } = e,
        l = i.channel_id,
        s = (0, a.bG)([m.A], () => {
            var e;
            return null == (e = m.A.getBasicChannel(l)) ? void 0 : e.guild_id;
        }),
        { clip_created_at: o, clip_participants: c, title: d, application: p } = n;
    return (0, r.jsx)(u.A, {
        createdAt: null != o ? Date.parse(o) : void 0,
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
        applicationId: null == p ? void 0 : p.id,
        title: d,
        guildId: s,
    });
}
