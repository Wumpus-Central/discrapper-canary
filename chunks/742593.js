n.d(t, {
    HZ: () => O,
    Rf: () => v,
    ZP: () => S,
}),
    n(953529);
var r = n(54381);
n(473749);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(271383),
    u = n(51144),
    d = n(894017),
    f = n(79874),
    p = n(376108),
    _ = n(236373),
    m = n(854698),
    h = n(391174),
    g = n(95291),
    E = n(390966),
    b = n(388032),
    y = n(396934);
function O(e) {
    let { className: t, creator: n, guildId: i, isNew: h, guildEvent: g, eventPreview: O, recurrenceId: v } = e,
        S = (0, p.Z)(i, g.id, v),
        I = null != g ? g : O,
        T = (0, a.e7)([c.ZP], () => c.ZP.getNick(i, null == n ? void 0 : n.id), [i, n]);
    v = null == I || null != v ? v : (0, m.DK)(I);
    let { startTime: C } = (0, f.ZP)(null != g ? g : O, v),
        A = (0, d.Z)(v, g.id),
        N =
            (null == I ? void 0 : I.scheduled_start_time) != null
                ? (0, m.lh)(A, C, new Date(I.scheduled_start_time))
                : null;
    if (null == I) return null;
    let { entity_type: P, status: R, recurrence_rule: w } = I;
    return (0, r.jsxs)("div", {
        className: o()(y.statusContainer, t),
        children: [
            (0, r.jsx)(E.z, {
                startTime: C.toISOString(),
                status: null != N ? N : R,
                eventType: P,
                isNew: h,
                recurrenceRule: (0, _.KV)(w),
                guildEventId: g.id,
                recurrenceId: v,
            }),
            (0, r.jsx)("div", { className: y.spacer }),
            null != n &&
                (0, r.jsx)(s.u, {
                    text: b.intl.formatToPlainString(b.t["+3iypQ"], { username: null != T ? T : u.ZP.getName(n) }),
                    children: (0, r.jsx)(l.qEK, {
                        src: n.getAvatarURL(i, 20),
                        size: l.EFr.SIZE_20,
                        "aria-label": null != T ? T : n.username,
                        className: y.creator,
                    }),
                }),
            (0, r.jsx)(s.u, {
                text: b.intl.formatToPlainString(b.t["+DLsD8"], { count: S }),
                children: (0, r.jsxs)("div", {
                    className: y.rsvpCount,
                    children: [
                        (0, r.jsx)(l.BFJ, {
                            size: "xxs",
                            color: "currentColor",
                            className: y.rsvpIcon,
                        }),
                        (0, r.jsx)(l.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: S,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function v(e) {
    let {
        headerVariant: t = "heading-lg/medium",
        descriptionClassName: n,
        name: i,
        description: a,
        truncate: s,
        guildId: c,
        imageSource: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: o()({ [y.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)("div", {
                className: o()({ [y.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: t,
                        selectable: !0,
                        className: y.eventName,
                        children: i,
                    }),
                    null != a &&
                        (0, r.jsx)(h.Z, {
                            description: a,
                            className: o()(n, y.description),
                            truncate: s,
                            guildId: c,
                        }),
                ],
            }),
            null != u &&
                (0, r.jsx)("div", {
                    className: y.thumbnailContainer,
                    children: (0, r.jsx)(g.Z, {
                        source: u,
                        className: y.thumbnail,
                    }),
                }),
        ],
    });
}
function S(e) {
    let {
        headerVariant: t,
        descriptionClassName: n,
        creator: i,
        name: o,
        description: a,
        imageSource: s,
        truncate: l,
        guildId: c,
        isNew: u,
        guildEvent: d,
        eventPreview: f,
        recurrenceId: p,
    } = e;
    return (0, r.jsxs)("div", {
        className: y.container,
        children: [
            null != s
                ? (0, r.jsx)("div", {
                      className: y.thumbnailContainer,
                      children: (0, r.jsx)(g.Z, {
                          source: s,
                          className: y.thumbnail,
                      }),
                  })
                : null,
            (0, r.jsx)(O, {
                className: y.eventInfoStatusContainer,
                creator: i,
                guildId: c,
                isNew: u,
                guildEvent: d,
                eventPreview: f,
                recurrenceId: p,
            }),
            (0, r.jsx)(v, {
                name: o,
                description: a,
                headerVariant: t,
                descriptionClassName: n,
                truncate: l,
                guildId: c,
            }),
        ],
    });
}
