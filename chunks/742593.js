n.d(t, {
    HZ: () => x,
    Rf: () => P,
    ZP: () => w
}),
    n(266796);
var r = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    i = n(442837),
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
function N(e) {
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
function y(e, t) {
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
function x(e) {
    let { className: t, creator: n, guildId: l, isNew: s, isHub: g = !1, guildEvent: v, eventPreview: x, recurrenceId: P } = e,
        w = (0, b.Z)(l, v.id, P),
        E = null != v ? v : x,
        S = (0, i.e7)([o.ZP], () => o.ZP.getNick(l, null == n ? void 0 : n.id), [l, n]);
    P = null == E || null != P ? P : (0, p.DK)(E);
    let { startTime: T } = (0, f.ZP)(null != v ? v : x, P),
        D = (0, d.Z)(P, v.id),
        W = (null == E ? void 0 : E.scheduled_start_time) != null ? (0, p.lh)(D, T, new Date(E.scheduled_start_time)) : null;
    if (null == E) return null;
    let { entity_type: Z, status: I, recurrence_rule: _ } = E;
    return (0, r.jsxs)('div', {
        className: a()(h.statusContainer, t),
        children: [
            (0, r.jsx)(O.z, {
                startTime: T.toISOString(),
                status: null != W ? W : I,
                eventType: Z,
                isNew: s,
                recurrenceRule: (0, m.KV)(_),
                guildEventId: v.id,
                recurrenceId: P
            }),
            (0, r.jsx)('div', { className: h.spacer }),
            !g &&
                null != n &&
                (0, r.jsx)(c.ua7, {
                    text: j.NW.formatToPlainString(j.t['+3iypa'], { username: null != S ? S : u.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(
                            c.qEK,
                            y(N({}, e), {
                                src: n.getAvatarURL(l, 20),
                                size: c.EFr.SIZE_20,
                                'aria-label': null != S ? S : n.username,
                                className: h.creator
                            })
                        )
                }),
            (0, r.jsx)(c.ua7, {
                text: j.NW.formatToPlainString(j.t['+DLsDw'], { count: w }),
                children: (e) =>
                    (0, r.jsxs)(
                        'div',
                        y(N({ className: h.rsvpCount }, e), {
                            children: [
                                (0, r.jsx)(c.BFJ, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: h.rsvpIcon
                                }),
                                (0, r.jsx)(c.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: w
                                })
                            ]
                        })
                    )
            })
        ]
    });
}
function P(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: l, description: i, truncate: s, guildId: o, imageSource: u } = e;
    return (0, r.jsxs)('div', {
        className: a()({ [h.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)('div', {
                className: a()({ [h.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: t,
                        selectable: !0,
                        className: h.eventName,
                        children: l
                    }),
                    null != i &&
                        (0, r.jsx)(g.Z, {
                            description: i,
                            className: a()(n, h.description),
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
function w(e) {
    let { headerVariant: t, descriptionClassName: n, creator: l, name: a, description: i, imageSource: c, isHub: o = !1, truncate: u, guildId: d, isNew: f, guildEvent: b, eventPreview: m, recurrenceId: p } = e,
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
            (0, r.jsx)(x, {
                className: h.eventInfoStatusContainer,
                creator: l,
                guildId: d,
                isHub: o,
                isNew: f,
                guildEvent: b,
                eventPreview: m,
                recurrenceId: p
            }),
            (0, r.jsx)(P, {
                name: a,
                description: i,
                headerVariant: t,
                descriptionClassName: n,
                truncate: u,
                guildId: d,
                imageSource: g ? null : c
            })
        ]
    });
}
