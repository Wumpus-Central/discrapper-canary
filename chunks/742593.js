n.d(t, {
    HZ: () => O,
    Rf: () => v,
    ZP: () => I,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(28664),
    l = n(481060),
    c = n(271383),
    u = n(51144),
    d = n(894017),
    f = n(79874),
    _ = n(376108),
    p = n(236373),
    h = n(954313),
    m = n(391174),
    g = n(95291),
    E = n(390966),
    b = n(388032),
    y = n(396934);
function O(e) {
    let { className: t, creator: n, guildId: i, isNew: m, guildEvent: g, eventPreview: O, recurrenceId: v } = e,
        I = (0, _.Z)(i, g.id, v),
        T = null != g ? g : O,
        S = (0, o.e7)([c.ZP], () => c.ZP.getNick(i, null == n ? void 0 : n.id), [i, n]);
    v = null == T || null != v ? v : (0, h.DK)(T);
    let { startTime: A } = (0, f.ZP)(null != g ? g : O, v),
        C = (0, d.Z)(v, g.id),
        N =
            (null == T ? void 0 : T.scheduled_start_time) != null
                ? (0, h.lh)(C, A, new Date(T.scheduled_start_time))
                : null;
    if (null == T) return null;
    let { entity_type: R, status: P, recurrence_rule: D } = T;
    return (0, r.jsxs)("div", {
        className: a()(y.statusContainer, t),
        children: [
            (0, r.jsx)(E.z, {
                startTime: A.toISOString(),
                status: null != N ? N : P,
                eventType: R,
                isNew: m,
                recurrenceRule: (0, p.KV)(D),
                guildEventId: g.id,
                recurrenceId: v,
            }),
            (0, r.jsx)("div", { className: y.spacer }),
            null != n &&
                (0, r.jsx)(s.u, {
                    text: b.intl.formatToPlainString(b.t["+3iypQ"], { username: null != S ? S : u.ZP.getName(n) }),
                    children: (0, r.jsx)(l.qEK, {
                        src: n.getAvatarURL(i, 20),
                        size: l.EFr.SIZE_20,
                        "aria-label": null != S ? S : n.username,
                        className: y.creator,
                    }),
                }),
            (0, r.jsx)(s.u, {
                text: b.intl.formatToPlainString(b.t["+DLsD8"], { count: I }),
                children: (0, r.jsxs)("div", {
                    className: y.rsvpCount,
                    children: [
                        (0, r.jsx)(l.BFJ, {
                            size: "xxs",
                            color: "currentColor",
                            className: y.rsvpIcon,
                        }),
                        (0, r.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: I,
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
        description: o,
        truncate: s,
        guildId: c,
        imageSource: u,
    } = e;
    return (0, r.jsxs)("div", {
        className: a()({ [y.withThumbnail]: null != u }),
        children: [
            (0, r.jsxs)("div", {
                className: a()({ [y.descriptionWithThumbnail]: null != u }),
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: t,
                        selectable: !0,
                        className: y.eventName,
                        children: i,
                    }),
                    null != o &&
                        (0, r.jsx)(m.Z, {
                            description: o,
                            className: a()(n, y.description),
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
function I(e) {
    let {
        headerVariant: t,
        descriptionClassName: n,
        creator: i,
        name: a,
        description: o,
        imageSource: s,
        truncate: l,
        guildId: c,
        isNew: u,
        guildEvent: d,
        eventPreview: f,
        recurrenceId: _,
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
                recurrenceId: _,
            }),
            (0, r.jsx)(v, {
                name: a,
                description: o,
                headerVariant: t,
                descriptionClassName: n,
                truncate: l,
                guildId: c,
            }),
        ],
    });
}
