t.d(e, { default: () => C }), t(388685);
var l = t(54381),
    i = t(473749),
    a = t(106351),
    c = t(793030),
    r = t(442837),
    s = t(481060),
    o = t(471445),
    d = t(856768),
    u = t(324067),
    h = t(771845),
    f = t(9156),
    x = t(117984),
    g = t(593214),
    p = t(378337),
    m = t(388032),
    j = t(345986);
function C(n) {
    let { transitionState: e, onClose: t, parentId: a } = n,
        o = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]),
        [u, f] = i.useState(o),
        [x, g] = i.useState(!1);
    return (0, l.jsx)(c.Modal, {
        title: m.intl.string(m.t["4wcdE/"]),
        actions: [],
        transitionState: e,
        onClose: t,
        input: (0, l.jsx)(d.q, {
            guildId: u,
            onChange: function (n) {
                null != n && f(n.id);
            },
        }),
        actionBarInput: (0, l.jsx)(s.rsf, {
            checked: x,
            onChange: (n) => g(n),
            label: m.intl.string(m.t.UwOLJO),
        }),
        children: (0, l.jsx)(I, {
            guildId: u,
            hideMutedChannels: x,
            parentId: a,
        }),
    });
}
function I(n) {
    let { guildId: e, hideMutedChannels: t, parentId: c } = n,
        s = (0, r.e7)([u.Z], () => u.Z.getCategories(e)),
        o = (0, p.Z)(s),
        d = i.useRef(null);
    return (
        i.useEffect(() => {
            var n;
            null == d || null == (n = d.current) || n.scroll({ top: 0 });
        }, [e]),
        (0, l.jsx)("div", {
            ref: d,
            children: o.map((n) =>
                n.type === a.d.GUILD_CATEGORY
                    ? (0, l.jsx)(v, { name: n.name }, n.id)
                    : (0, l.jsx)(
                          w,
                          {
                              channel: n,
                              hideMutedChannels: t,
                              parentId: c,
                          },
                          n.id,
                      ),
            ),
        })
    );
}
function v(n) {
    let { name: e } = n;
    return (0, l.jsx)(s.Text, {
        className: j.categoryRow,
        variant: "eyebrow",
        color: "interactive-text-default",
        children: e,
    });
}
function w(n) {
    let { channel: e, hideMutedChannels: t, parentId: i } = n,
        a = (0, g.s4)(e.id);
    if ((0, r.e7)([f.ZP], () => f.ZP.isChannelMuted(e.guild_id, e.id)) && t) return null;
    let c = (0, o.KS)(e);
    return (0, l.jsxs)(
        "div",
        {
            className: j.channelRow,
            children: [
                (0, l.jsxs)("div", {
                    className: j.channelName,
                    children: [
                        null != c &&
                            (0, l.jsx)("div", {
                                className: j.channelIconContainer,
                                children: (0, l.jsx)(c, {
                                    className: j.channelIcon,
                                    size: "custom",
                                    color: "currentColor",
                                    height: 20,
                                    width: 20,
                                }),
                            }),
                        (0, l.jsx)(s.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children: e.name,
                        }),
                    ],
                }),
                null != a
                    ? (0, l.jsx)(k, { channelId: e.id })
                    : (0, l.jsx)(_, {
                          channelId: e.id,
                          parentId: i,
                      }),
            ],
        },
        e.id,
    );
}
function _(n) {
    let { channelId: e, parentId: t } = n;
    return (0, l.jsx)(s.Button, {
        variant: "primary",
        size: "sm",
        text: m.intl.string(m.t.OYkgVk),
        onClick: function () {
            (0, x.kj)(e, t);
        },
    });
}
function k(n) {
    let { channelId: e } = n;
    return (0, l.jsx)(s.Button, {
        variant: "secondary",
        size: "sm",
        text: m.intl.string(m.t.N86XcP),
        onClick: function () {
            (0, x.oC)(e);
        },
    });
}
