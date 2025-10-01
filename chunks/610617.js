t.d(n, { default: () => p }), t(388685);
var a = t(951288),
    i = t(647438),
    l = t(106351),
    r = t(793030),
    d = t(442837),
    c = t(481060),
    o = t(471445),
    s = t(856768),
    u = t(324067),
    h = t(771845),
    f = t(9156),
    v = t(117984),
    x = t(593214),
    m = t(378337),
    g = t(388032),
    C = t(345986);
function p(e) {
    let { transitionState: n, onClose: t, parentId: l } = e,
        o = (0, d.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]),
        [u, f] = i.useState(o),
        [v, x] = i.useState(!1);
    return (0, a.jsx)(r.Modal, {
        title: g.intl.string(g.t["4wcdEx"]),
        actions: [],
        transitionState: n,
        onClose: t,
        input: (0, a.jsx)(s.q, {
            guildId: u,
            onChange: function (e) {
                null != e && f(e.id);
            },
        }),
        actionBarInput: (0, a.jsx)(c.XZJ, {
            checked: v,
            onChange: (e) => x(e),
            label: g.intl.string(g.t.UwOLJC),
        }),
        children: (0, a.jsx)(j, {
            guildId: u,
            hideMutedChannels: v,
            parentId: l,
        }),
    });
}
function j(e) {
    let { guildId: n, hideMutedChannels: t, parentId: r } = e,
        c = (0, d.e7)([u.Z], () => u.Z.getCategories(n)),
        o = (0, m.Z)(c),
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            var e;
            null == s || null == (e = s.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, a.jsx)("div", {
            ref: s,
            children: o.map((e) =>
                e.type === l.d.GUILD_CATEGORY
                    ? (0, a.jsx)(I, { name: e.name }, e.id)
                    : (0, a.jsx)(
                          _,
                          {
                              channel: e,
                              hideMutedChannels: t,
                              parentId: r,
                          },
                          e.id,
                      ),
            ),
        })
    );
}
function I(e) {
    let { name: n } = e;
    return (0, a.jsx)(c.Text, {
        className: C.categoryRow,
        variant: "eyebrow",
        color: "interactive-normal",
        children: n,
    });
}
function _(e) {
    let { channel: n, hideMutedChannels: t, parentId: i } = e,
        l = (0, x.s4)(n.id);
    if ((0, d.e7)([f.ZP], () => f.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let r = (0, o.KS)(n);
    return (0, a.jsxs)(
        "div",
        {
            className: C.channelRow,
            children: [
                (0, a.jsxs)("div", {
                    className: C.channelName,
                    children: [
                        null != r &&
                            (0, a.jsx)("div", {
                                className: C.channelIconContainer,
                                children: (0, a.jsx)(r, {
                                    className: C.channelIcon,
                                    size: "custom",
                                    color: "currentColor",
                                    height: 20,
                                    width: 20,
                                }),
                            }),
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "interactive-normal",
                            children: n.name,
                        }),
                    ],
                }),
                null != l
                    ? (0, a.jsx)(k, { channelId: n.id })
                    : (0, a.jsx)(Z, {
                          channelId: n.id,
                          parentId: i,
                      }),
            ],
        },
        n.id,
    );
}
function Z(e) {
    let { channelId: n, parentId: t } = e;
    return (0, a.jsx)(c.zxk, {
        variant: "primary",
        size: "sm",
        text: g.intl.string(g.t.OYkgVl),
        onClick: function () {
            (0, v.kj)(n, t);
        },
    });
}
function k(e) {
    let { channelId: n } = e;
    return (0, a.jsx)(c.zxk, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(g.t.N86XcH),
        onClick: function () {
            (0, v.oC)(n);
        },
    });
}
