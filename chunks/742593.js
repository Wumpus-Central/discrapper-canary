n.d(t, {
    HZ: () => O,
    Rf: () => y,
    ZP: () => E,
}),
    n(953529);
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(442837),
    a = n(481060),
    o = n(271383),
    c = n(51144),
    u = n(894017),
    d = n(79874),
    m = n(376108),
    p = n(236373),
    v = n(954313),
    f = n(391174),
    g = n(95291),
    b = n(390966),
    j = n(388032),
    x = n(396934);
function h(e) {
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
function N(e, t) {
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
    let {
            className: t,
            creator: n,
            guildId: l,
            isNew: f,
            isHub: g = !1,
            guildEvent: O,
            eventPreview: y,
            recurrenceId: E,
        } = e,
        P = (0, m.Z)(l, O.id, E),
        I = null != O ? O : y,
        S = (0, s.e7)([o.ZP], () => o.ZP.getNick(l, null == n ? void 0 : n.id), [l, n]);
    E = null == I || null != E ? E : (0, v.DK)(I);
    let { startTime: C } = (0, d.ZP)(null != O ? O : y, E),
        w = (0, u.Z)(E, O.id),
        T =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? (0, v.lh)(w, C, new Date(I.scheduled_start_time))
                : null;
    if (null == I) return null;
    let { entity_type: Z, status: k, recurrence_rule: D } = I;
    return (0, r.jsxs)("div", {
        className: i()(x.statusContainer, t),
        children: [
            (0, r.jsx)(b.z, {
                startTime: C.toISOString(),
                status: null != T ? T : k,
                eventType: Z,
                isNew: f,
                recurrenceRule: (0, p.KV)(D),
                guildEventId: O.id,
                recurrenceId: E,
            }),
            (0, r.jsx)("div", { className: x.spacer }),
            !g &&
                null != n &&
                (0, r.jsx)(a.ua7, {
                    text: j.intl.formatToPlainString(j.t["+3iypa"], { username: null != S ? S : c.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(
                            a.qEK,
                            N(h({}, e), {
                                src: n.getAvatarURL(l, 20),
                                size: a.EFr.SIZE_20,
                                "aria-label": null != S ? S : n.username,
                                className: x.creator,
                            }),
                        ),
                }),
            (0, r.jsx)(a.ua7, {
                text: j.intl.formatToPlainString(j.t["+DLsDw"], { count: P }),
                children: (e) =>
                    (0, r.jsxs)(
                        "div",
                        N(h({ className: x.rsvpCount }, e), {
                            children: [
                                (0, r.jsx)(a.BFJ, {
                                    size: "xxs",
                                    color: "currentColor",
                                    className: x.rsvpIcon,
                                }),
                                (0, r.jsx)(a.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: P,
                                }),
                            ],
                        }),
                    ),
            }),
        ],
    });
}
function y(e) {
    let {
        headerVariant: t = "heading-lg/medium",
        descriptionClassName: n,
        name: l,
        description: s,
        truncate: o,
        guildId: c,
        imageSource: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: i()({ [x.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)("div", {
                className: i()({ [x.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: t,
                        selectable: !0,
                        className: x.eventName,
                        children: l,
                    }),
                    null != s &&
                        (0, r.jsx)(f.Z, {
                            description: s,
                            className: i()(n, x.description),
                            truncate: o,
                            guildId: c,
                        }),
                ],
            }),
            null != u &&
                (0, r.jsx)("div", {
                    className: x.thumbnailContainer,
                    children: (0, r.jsx)(g.Z, {
                        source: u,
                        className: x.thumbnail,
                    }),
                }),
        ],
    });
}
function E(e) {
    let {
        headerVariant: t,
        descriptionClassName: n,
        creator: l,
        name: i,
        description: s,
        imageSource: a,
        isHub: o = !1,
        truncate: c,
        guildId: u,
        isNew: d,
        guildEvent: m,
        eventPreview: p,
        recurrenceId: v,
    } = e;
    return (0, r.jsxs)("div", {
        className: x.container,
        children: [
            null != a
                ? (0, r.jsx)("div", {
                      className: x.thumbnailContainer,
                      children: (0, r.jsx)(g.Z, {
                          source: a,
                          className: x.thumbnail,
                      }),
                  })
                : null,
            (0, r.jsx)(O, {
                className: x.eventInfoStatusContainer,
                creator: l,
                guildId: u,
                isHub: o,
                isNew: d,
                guildEvent: m,
                eventPreview: p,
                recurrenceId: v,
            }),
            (0, r.jsx)(y, {
                name: i,
                description: s,
                headerVariant: t,
                descriptionClassName: n,
                truncate: c,
                guildId: u,
            }),
        ],
    });
}
