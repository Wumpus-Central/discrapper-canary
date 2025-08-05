(n.d(t, {
    HZ: () => T,
    Rf: () => S,
    ZP: () => A
}),
    n(953529));
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(271383),
    c = n(51144),
    u = n(894017),
    d = n(79874),
    f = n(376108),
    _ = n(236373),
    p = n(854698),
    h = n(391174),
    m = n(95291),
    g = n(390966),
    E = n(388032),
    b = n(274569);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                y(e, t, n[t]);
            }));
    }
    return e;
}
function v(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function I(e, t) {
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
function T(e) {
    let { className: t, creator: n, guildId: i, isNew: h, isHub: m = !1, guildEvent: y, eventPreview: v, recurrenceId: T } = e,
        S = (0, f.Z)(i, y.id, T),
        A = null != y ? y : v,
        N = (0, o.e7)([l.ZP], () => l.ZP.getNick(i, null == n ? void 0 : n.id), [i, n]);
    T = null == A || null != T ? T : (0, p.DK)(A);
    let { startTime: C } = (0, d.ZP)(null != y ? y : v, T),
        w = (0, u.Z)(T, y.id),
        R = (null == A ? void 0 : A.scheduled_start_time) != null ? (0, p.lh)(w, C, new Date(A.scheduled_start_time)) : null;
    if (null == A) return null;
    let { entity_type: P, status: D, recurrence_rule: L } = A;
    return (0, r.jsxs)('div', {
        className: a()(b.statusContainer, t),
        children: [
            (0, r.jsx)(g.z, {
                startTime: C.toISOString(),
                status: null != R ? R : D,
                eventType: P,
                isNew: h,
                recurrenceRule: (0, _.KV)(L),
                guildEventId: y.id,
                recurrenceId: T
            }),
            (0, r.jsx)('div', { className: b.spacer }),
            !m &&
                null != n &&
                (0, r.jsx)(s.ua7, {
                    text: E.intl.formatToPlainString(E.t['+3iypa'], { username: null != N ? N : c.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(
                            s.qEK,
                            I(O({}, e), {
                                src: n.getAvatarURL(i, 20),
                                size: s.EFr.SIZE_20,
                                'aria-label': null != N ? N : n.username,
                                className: b.creator
                            })
                        )
                }),
            (0, r.jsx)(s.ua7, {
                text: E.intl.formatToPlainString(E.t['+DLsDw'], { count: S }),
                children: (e) =>
                    (0, r.jsxs)(
                        'div',
                        I(O({ className: b.rsvpCount }, e), {
                            children: [
                                (0, r.jsx)(s.BFJ, {
                                    size: 'xxs',
                                    color: 'currentColor',
                                    className: b.rsvpIcon
                                }),
                                (0, r.jsx)(s.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: S
                                })
                            ]
                        })
                    )
            })
        ]
    });
}
function S(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: i, description: o, truncate: l, guildId: c, imageSource: u } = e;
    return (0, r.jsxs)('div', {
        className: a()({ [b.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)('div', {
                className: a()({ [b.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: t,
                        selectable: !0,
                        className: b.eventName,
                        children: i
                    }),
                    null != o &&
                        (0, r.jsx)(h.Z, {
                            description: o,
                            className: a()(n, b.description),
                            truncate: l,
                            guildId: c
                        })
                ]
            }),
            null != u &&
                (0, r.jsx)('div', {
                    className: b.thumbnailContainer,
                    children: (0, r.jsx)(m.Z, {
                        source: u,
                        className: b.thumbnail
                    })
                })
        ]
    });
}
function A(e) {
    let { headerVariant: t, descriptionClassName: n, creator: i, name: a, description: o, imageSource: s, isHub: l = !1, truncate: c, guildId: u, isNew: d, guildEvent: f, eventPreview: _, recurrenceId: p } = e;
    return (0, r.jsxs)('div', {
        className: b.container,
        children: [
            null != s
                ? (0, r.jsx)('div', {
                      className: b.thumbnailContainer,
                      children: (0, r.jsx)(m.Z, {
                          source: s,
                          className: b.thumbnail
                      })
                  })
                : null,
            (0, r.jsx)(T, {
                className: b.eventInfoStatusContainer,
                creator: i,
                guildId: u,
                isHub: l,
                isNew: d,
                guildEvent: f,
                eventPreview: _,
                recurrenceId: p
            }),
            (0, r.jsx)(S, {
                name: a,
                description: o,
                headerVariant: t,
                descriptionClassName: n,
                truncate: c,
                guildId: u
            })
        ]
    });
}
