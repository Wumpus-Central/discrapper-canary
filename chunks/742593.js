n.d(t, {
    HZ: () => P,
    Rf: () => w,
    ZP: () => E
}),
    n(953529);
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    c = n(481060),
    s = n(540059),
    o = n(271383),
    u = n(51144),
    d = n(894017),
    f = n(79874),
    b = n(315416),
    m = n(236373),
    p = n(854698),
    g = n(391174),
    v = n(95291),
    O = n(390966),
    j = n(388032),
    h = n(274569);
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
function P(e) {
    let { className: t, creator: n, guildId: l, isNew: s, isHub: g = !1, guildEvent: v, eventPreview: P, recurrenceId: w } = e,
        E = (0, b.Z)(l, v.id, w),
        N = null != v ? v : P,
        S = (0, a.e7)([o.ZP], () => o.ZP.getNick(l, null == n ? void 0 : n.id), [l, n]);
    w = null == N || null != w ? w : (0, p.DK)(N);
    let { startTime: T } = (0, f.ZP)(null != v ? v : P, w),
        D = (0, d.Z)(w, v.id),
        Z = (null == N ? void 0 : N.scheduled_start_time) != null ? (0, p.lh)(D, T, new Date(N.scheduled_start_time)) : null;
    if (null == N) return null;
    let { entity_type: I, status: _, recurrence_rule: C } = N;
    return (0, r.jsxs)('div', {
        className: i()(h.statusContainer, t),
        children: [
            (0, r.jsx)(O.z, {
                startTime: T.toISOString(),
                status: null != Z ? Z : _,
                eventType: I,
                isNew: s,
                recurrenceRule: (0, m.KV)(C),
                guildEventId: v.id,
                recurrenceId: w
            }),
            (0, r.jsx)('div', { className: h.spacer }),
            !g &&
                null != n &&
                (0, r.jsx)(c.ua7, {
                    text: j.intl.formatToPlainString(j.t['+3iypa'], { username: null != S ? S : u.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(
                            c.qEK,
                            x(y({}, e), {
                                src: n.getAvatarURL(l, 20),
                                size: c.EFr.SIZE_20,
                                'aria-label': null != S ? S : n.username,
                                className: h.creator
                            })
                        )
                }),
            (0, r.jsx)(c.ua7, {
                text: j.intl.formatToPlainString(j.t['+DLsDw'], { count: E }),
                children: (e) =>
                    (0, r.jsxs)(
                        'div',
                        x(y({ className: h.rsvpCount }, e), {
                            children: [
                                (0, r.jsx)(c.BFJ, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: h.rsvpIcon
                                }),
                                (0, r.jsx)(c.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: E
                                })
                            ]
                        })
                    )
            })
        ]
    });
}
function w(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: l, description: a, truncate: s, guildId: o, imageSource: u } = e;
    return (0, r.jsxs)('div', {
        className: i()({ [h.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)('div', {
                className: i()({ [h.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: t,
                        selectable: !0,
                        className: h.eventName,
                        children: l
                    }),
                    null != a &&
                        (0, r.jsx)(g.Z, {
                            description: a,
                            className: i()(n, h.description),
                            truncate: s,
                            guildId: o
                        })
                ]
            }),
            null != u &&
                (0, r.jsx)('div', {
                    className: h.thumbnailContainer,
                    children: (0, r.jsx)(v.Z, {
                        source: u,
                        className: h.thumbnail
                    })
                })
        ]
    });
}
function E(e) {
    let { headerVariant: t, descriptionClassName: n, creator: l, name: i, description: a, imageSource: c, isHub: o = !1, truncate: u, guildId: d, isNew: f, guildEvent: b, eventPreview: m, recurrenceId: p } = e,
        g = (0, s.Q3)('GuildEventDetails');
    return (0, r.jsxs)('div', {
        className: h.container,
        children: [
            g && null != c
                ? (0, r.jsx)('div', {
                      className: h.thumbnailContainer,
                      children: (0, r.jsx)(v.Z, {
                          source: c,
                          className: h.thumbnail
                      })
                  })
                : null,
            (0, r.jsx)(P, {
                className: h.eventInfoStatusContainer,
                creator: l,
                guildId: d,
                isHub: o,
                isNew: f,
                guildEvent: b,
                eventPreview: m,
                recurrenceId: p
            }),
            (0, r.jsx)(w, {
                name: i,
                description: a,
                headerVariant: t,
                descriptionClassName: n,
                truncate: u,
                guildId: d,
                imageSource: g ? null : c
            })
        ]
    });
}
