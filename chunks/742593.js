(n.d(t, {
    HZ: () => x,
    Rf: () => N,
    ZP: () => E
}),
    n(953529));
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(271383),
    o = n(51144),
    u = n(894017),
    d = n(79874),
    p = n(315416),
    m = n(236373),
    f = n(854698),
    v = n(391174),
    g = n(95291),
    b = n(390966),
    h = n(388032),
    j = n(274569);
function O(e) {
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
    let { className: t, creator: n, guildId: l, isNew: v, isHub: g = !1, guildEvent: x, eventPreview: N, recurrenceId: E } = e,
        w = (0, p.Z)(l, x.id, E),
        P = null != x ? x : N,
        S = (0, a.e7)([c.ZP], () => c.ZP.getNick(l, null == n ? void 0 : n.id), [l, n]);
    E = null == P || null != E ? E : (0, f.DK)(P);
    let { startTime: I } = (0, d.ZP)(null != x ? x : N, E),
        C = (0, u.Z)(E, x.id),
        T = (null == P ? void 0 : P.scheduled_start_time) != null ? (0, f.lh)(C, I, new Date(P.scheduled_start_time)) : null;
    if (null == P) return null;
    let { entity_type: D, status: Z, recurrence_rule: k } = P;
    return (0, r.jsxs)('div', {
        className: i()(j.statusContainer, t),
        children: [
            (0, r.jsx)(b.z, {
                startTime: I.toISOString(),
                status: null != T ? T : Z,
                eventType: D,
                isNew: v,
                recurrenceRule: (0, m.KV)(k),
                guildEventId: x.id,
                recurrenceId: E
            }),
            (0, r.jsx)('div', { className: j.spacer }),
            !g &&
                null != n &&
                (0, r.jsx)(s.ua7, {
                    text: h.intl.formatToPlainString(h.t['+3iypa'], { username: null != S ? S : o.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(
                            s.qEK,
                            y(O({}, e), {
                                src: n.getAvatarURL(l, 20),
                                size: s.EFr.SIZE_20,
                                'aria-label': null != S ? S : n.username,
                                className: j.creator
                            })
                        )
                }),
            (0, r.jsx)(s.ua7, {
                text: h.intl.formatToPlainString(h.t['+DLsDw'], { count: w }),
                children: (e) =>
                    (0, r.jsxs)(
                        'div',
                        y(O({ className: j.rsvpCount }, e), {
                            children: [
                                (0, r.jsx)(s.BFJ, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: j.rsvpIcon
                                }),
                                (0, r.jsx)(s.Text, {
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
function N(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: l, description: a, truncate: c, guildId: o, imageSource: u } = e;
    return (0, r.jsxs)('div', {
        className: i()({ [j.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)('div', {
                className: i()({ [j.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: t,
                        selectable: !0,
                        className: j.eventName,
                        children: l
                    }),
                    null != a &&
                        (0, r.jsx)(v.Z, {
                            description: a,
                            className: i()(n, j.description),
                            truncate: c,
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
function E(e) {
    let { headerVariant: t, descriptionClassName: n, creator: l, name: i, description: a, imageSource: s, isHub: c = !1, truncate: o, guildId: u, isNew: d, guildEvent: p, eventPreview: m, recurrenceId: f } = e;
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            null != s
                ? (0, r.jsx)('div', {
                      className: j.thumbnailContainer,
                      children: (0, r.jsx)(g.Z, {
                          source: s,
                          className: j.thumbnail
                      })
                  })
                : null,
            (0, r.jsx)(x, {
                className: j.eventInfoStatusContainer,
                creator: l,
                guildId: u,
                isHub: c,
                isNew: d,
                guildEvent: p,
                eventPreview: m,
                recurrenceId: f
            }),
            (0, r.jsx)(N, {
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
