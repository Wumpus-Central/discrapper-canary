n.d(t, {
    HZ: () => y,
    Rf: () => P,
    ZP: () => w
}),
    n(953529);
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    c = n(481060),
    s = n(271383),
    o = n(51144),
    u = n(894017),
    d = n(79874),
    f = n(315416),
    b = n(236373),
    m = n(854698),
    p = n(391174),
    g = n(95291),
    v = n(390966),
    O = n(388032),
    j = n(274569);
function h(e) {
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
function y(e) {
    let { className: t, creator: n, guildId: l, isNew: p, isHub: g = !1, guildEvent: y, eventPreview: P, recurrenceId: w } = e,
        E = (0, f.Z)(l, y.id, w),
        N = null != y ? y : P,
        S = (0, a.e7)([s.ZP], () => s.ZP.getNick(l, null == n ? void 0 : n.id), [l, n]);
    w = null == N || null != w ? w : (0, m.DK)(N);
    let { startTime: T } = (0, d.ZP)(null != y ? y : P, w),
        Z = (0, u.Z)(w, y.id),
        D = (null == N ? void 0 : N.scheduled_start_time) != null ? (0, m.lh)(Z, T, new Date(N.scheduled_start_time)) : null;
    if (null == N) return null;
    let { entity_type: I, status: _, recurrence_rule: C } = N;
    return (0, r.jsxs)('div', {
        className: i()(j.statusContainer, t),
        children: [
            (0, r.jsx)(v.z, {
                startTime: T.toISOString(),
                status: null != D ? D : _,
                eventType: I,
                isNew: p,
                recurrenceRule: (0, b.KV)(C),
                guildEventId: y.id,
                recurrenceId: w
            }),
            (0, r.jsx)('div', { className: j.spacer }),
            !g &&
                null != n &&
                (0, r.jsx)(c.ua7, {
                    text: O.intl.formatToPlainString(O.t['+3iypa'], { username: null != S ? S : o.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(
                            c.qEK,
                            x(h({}, e), {
                                src: n.getAvatarURL(l, 20),
                                size: c.EFr.SIZE_20,
                                'aria-label': null != S ? S : n.username,
                                className: j.creator
                            })
                        )
                }),
            (0, r.jsx)(c.ua7, {
                text: O.intl.formatToPlainString(O.t['+DLsDw'], { count: E }),
                children: (e) =>
                    (0, r.jsxs)(
                        'div',
                        x(h({ className: j.rsvpCount }, e), {
                            children: [
                                (0, r.jsx)(c.BFJ, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: j.rsvpIcon
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
function P(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: l, description: a, truncate: s, guildId: o, imageSource: u } = e;
    return (0, r.jsxs)('div', {
        className: i()({ [j.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)('div', {
                className: i()({ [j.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: t,
                        selectable: !0,
                        className: j.eventName,
                        children: l
                    }),
                    null != a &&
                        (0, r.jsx)(p.Z, {
                            description: a,
                            className: i()(n, j.description),
                            truncate: s,
                            guildId: o
                        })
                ]
            }),
            null != u &&
                (0, r.jsx)('div', {
                    className: j.thumbnailContainer,
                    children: (0, r.jsx)(g.Z, {
                        source: u,
                        className: j.thumbnail
                    })
                })
        ]
    });
}
function w(e) {
    let { headerVariant: t, descriptionClassName: n, creator: l, name: i, description: a, imageSource: c, isHub: s = !1, truncate: o, guildId: u, isNew: d, guildEvent: f, eventPreview: b, recurrenceId: m } = e;
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            null != c
                ? (0, r.jsx)('div', {
                      className: j.thumbnailContainer,
                      children: (0, r.jsx)(g.Z, {
                          source: c,
                          className: j.thumbnail
                      })
                  })
                : null,
            (0, r.jsx)(y, {
                className: j.eventInfoStatusContainer,
                creator: l,
                guildId: u,
                isHub: s,
                isNew: d,
                guildEvent: f,
                eventPreview: b,
                recurrenceId: m
            }),
            (0, r.jsx)(P, {
                name: i,
                description: a,
                headerVariant: t,
                descriptionClassName: n,
                truncate: o,
                guildId: u
            })
        ]
    });
}
