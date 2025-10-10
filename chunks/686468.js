n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
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
    _ = n(979339),
    j = n(643632),
    x = n(388032),
    O = n(196979);
function v(e) {
    let { onClick: t, className: n } = e,
        i = c.S6n;
    return (0, r.jsx)(u.Z, {
        iconContainerClassName: a()({ [O.continueIconContainer]: !1 }),
        icon: (0, r.jsx)(i, {
            size: "custom",
            color: "currentColor",
            className: O.continueIcon,
            height: 20,
            width: 20,
        }),
        color: o.Z.unsafe_rawColors.PRIMARY_700.css,
        title: x.intl.string(x.t.jMLfp6),
        description: x.intl.string(x.t["Vd/rER"]),
        onClick: t,
        className: n,
    });
}
function C(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: i } = (0, _.Z)(t.id);
    return (0, r.jsxs)("div", {
        className: O.audienceSummary,
        children: [
            (0, r.jsx)(d.ZP, {
                className: O.summaryItem,
                guildId: t.guild_id,
                users: i,
                size: d.u8.SIZE_16,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: (function (e) {
                    if (0 === e.length) return "";
                    if (1 === e.length) return x.intl.formatToPlainString(x.t["5ULgaW"], { first: e[0].userNick });
                    if (2 === e.length)
                        return x.intl.formatToPlainString(x.t.BHK0Oj, {
                            first: e[0].userNick,
                            second: e[1].userNick,
                        });
                    let t = e.length - 2;
                    return x.intl.formatToPlainString(x.t.T3MT4u, {
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t,
                    });
                })(n),
            }),
        ],
    });
}
function I(e) {
    let { channel: t, onContinueClick: n } = e,
        l = (0, s.e7)([b.Z], () => b.Z.can(y.yP, t), [t]),
        o = t.guild_id,
        { canCreateGuildEvent: d } = (0, g.XJ)(t),
        u = (0, j.Z)(t.id),
        _ = i.useRef(null);
    return (0, r.jsxs)("div", {
        className: O.container,
        ref: _,
        children: [
            (0, r.jsx)(m.Z, { eventTargetRef: _ }),
            (0, r.jsxs)("div", {
                className: O.content,
                children: [
                    (0, r.jsxs)("div", {
                        className: O.headerContainer,
                        children: [
                            (0, r.jsx)(c.X6q, {
                                className: O.__invalid_title,
                                variant: "heading-xxl/normal",
                                children: x.intl.string(x.t.QGnDLi),
                            }),
                            (0, r.jsx)(c.Text, {
                                tag: "div",
                                className: O.subtitle,
                                variant: "heading-lg/normal",
                                children: x.intl.string(x.t.djfK39),
                            }),
                        ],
                    }),
                    u ? null : (0, r.jsx)(h.Z, { channelId: t.id }),
                    l
                        ? (0, r.jsx)(f.Z, {
                              className: O.eventPrompt,
                              channel: t,
                          })
                        : null,
                    d
                        ? (0, r.jsx)(p.Z, {
                              className: O.eventPrompt,
                              guildId: o,
                          })
                        : null,
                    l
                        ? (0, r.jsx)(v, {
                              className: a()({ [O.eventPrompt]: !0 }),
                              onClick: n,
                          })
                        : null,
                    (0, r.jsx)(C, { channel: t }),
                ],
            }),
        ],
    });
}
