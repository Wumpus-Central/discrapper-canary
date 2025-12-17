n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(884338),
    u = n(688641),
    p = n(596449),
    h = n(459502),
    f = n(856691),
    g = n(357156),
    m = n(546247),
    b = n(496675),
    y = n(146085),
    O = n(979339),
    x = n(643632),
    j = n(388032),
    v = n(266267);
function C(e) {
    let { onClick: t, className: n } = e,
        i = c.S6n;
    return (0, r.jsx)(u.Z, {
        iconContainerClassName: a()({ [v.continueIconContainer]: !1 }),
        icon: (0, r.jsx)(i, {
            size: "custom",
            color: "currentColor",
            className: v.continueIcon,
            height: 20,
            width: 20,
        }),
        color: o.Z.unsafe_rawColors.PRIMARY_700.css,
        title: j.intl.string(j.t["jMLfp/"]),
        description: j.intl.string(j.t["Vd/rEX"]),
        onClick: t,
        className: n,
    });
}
function I(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: i } = (0, O.Z)(t.id);
    return (0, r.jsxs)("div", {
        className: v.audienceSummary,
        children: [
            (0, r.jsx)(d.ZP, {
                className: v.summaryItem,
                guildId: t.guild_id,
                users: i,
                size: d.u8.SIZE_16,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return j.intl.formatToPlainString(j.t["5ULgaQ"], { first: e[0].userNick });
                    if (2 === e.length)
                        return j.intl.formatToPlainString(j.t.BHK0Op, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return j.intl.formatToPlainString(j.t.T3MT4n, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function _(e) {
    let { channel: t, onContinueClick: n } = e,
        l = (0, s.e7)([b.Z], () => b.Z.can(y.yP, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: d } = (0, g.XJ)(t),
        u = (0, x.Z)(t.id),
        O = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: v.container,
        ref: O,
        children: [
            (0, r.jsx)(m.Z, { eventTargetRef: O }),
            (0, r.jsxs)("div", {
                className: v.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: v.headerContainer,
                        children: [
                            (0, r.jsx)(c.Heading, {
                                className: v.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: j.intl.string(j.t.QGnDLs),
                            }),
                            (0, r.jsx)(c.Text, {
                                tag: "div",
                                className: v.subtitle,
                                variant: "heading-lg/normal",
                                children: j.intl.string(j.t.djfK36),
                            }),
                        ],
                    }),
                    u
                        ? null
                        : (0, r.jsx)(h.Z, {
                              channelId: t.id,
                              showDismiss: !1,
                          }),
                    l
                        ? (0, r.jsx)(f.Z, {
                              className: v.eventPrompt,
                              channel: t,
                          })
                        : null,
                    d
                        ? (0, r.jsx)(p.Z, {
                              className: v.eventPrompt,
                              guildId: o,
                          })
                        : null,
                    l
                        ? (0, r.jsx)(C, {
                              className: a()({ [v.eventPrompt]: !0 }),
                              onClick: n,
                          })
                        : null,
                    (0, r.jsx)(I, { channel: t }),
                ],
            }),
        ],
    });
}
