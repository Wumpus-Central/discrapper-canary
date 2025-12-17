t.d(n, { default: () => A }), t(388685);
var a = t(54381),
    i = t(473749),
    l = t(106351),
    r = t(793030),
    o = t(442837),
    d = t(481060),
    c = t(471445),
    s = t(856768),
    u = t(324067),
    f = t(771845),
    h = t(9156),
    v = t(117984),
    C = t(593214),
    p = t(378337),
    I = t(388032),
    E = t(566192);
function A(e) {
    let { transitionState: n, onClose: t, parentId: l } = e,
        c = (0, o.e7)([f.ZP], () => f.ZP.getFlattenedGuildIds()[0]),
        [u, h] = i.useState(c),
        [v, C] = i.useState(!1);
    return (0, a.jsx)(r.Modal, {
        title: I.intl.string(I.t["4wcdE/"]),
        actions: [],
        transitionState: n,
        onClose: t,
        input: (0, a.jsx)(s.q, {
            guildId: u,
            onChange: function (e) {
                null != e && h(e.id);
            },
        }),
        actionBarInput: (0, a.jsx)(d.rsf, {
            checked: v,
            onChange: (e) => C(e),
            label: I.intl.string(I.t.UwOLJO),
        }),
        children: (0, a.jsx)(m, {
            guildId: u,
            hideMutedChannels: v,
            parentId: l,
        }),
    });
}
function m(e) {
    let { guildId: n, hideMutedChannels: t, parentId: r } = e,
        d = (0, o.e7)([u.Z], () => u.Z.getCategories(n)),
        c = (0, p.Z)(d),
        s = i.useRef(null);
    return (
        i.useEffect(() => {
            var e;
            null == s || null == (e = s.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, a.jsx)("div", {
            ref: s,
            children: c.map((e) =>
                e.type === l.d.GUILD_CATEGORY
                    ? (0, a.jsx)(_, { name: e.name }, e.id)
                    : (0, a.jsx)(
                          R,
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
function _(e) {
    let { name: n } = e;
    return (0, a.jsx)(d.Text, {
        className: E.categoryRow,
        variant: "eyebrow",
        color: "interactive-text-default",
        children: n,
    });
}
function R(e) {
    let { channel: n, hideMutedChannels: t, parentId: i } = e,
        l = (0, C.s4)(n.id);
    if ((0, o.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let r = (0, c.KS)(n);
    return (0, a.jsxs)(
        "div",
        {
            className: E.channelRow,
            children: [
                (0, a.jsxs)("div", {
                    className: E.channelName,
                    children: [
                        null != r &&
                            (0, a.jsx)("div", {
                                className: E.channelIconContainer,
                                children: (0, a.jsx)(r, {
                                    className: E.channelIcon,
                                    size: "custom",
                                    color: "currentColor",
                                    height: 20,
                                    width: 20,
                                }),
                            }),
                        (0, a.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "interactive-text-default",
                            children: n.name,
                        }),
                    ],
                }),
                null != l
                    ? (0, a.jsx)(y, { channelId: n.id })
                    : (0, a.jsx)(N, {
                          channelId: n.id,
                          parentId: i,
                      }),
            ],
        },
        n.id,
    );
}
function N(e) {
    let { channelId: n, parentId: t } = e;
    return (0, a.jsx)(d.Button, {
        variant: "primary",
        size: "sm",
        text: I.intl.string(I.t.OYkgVk),
        onClick: function () {
            (0, v.kj)(n, t);
        },
    });
}
function y(e) {
    let { channelId: n } = e;
    return (0, a.jsx)(d.Button, {
        variant: "secondary",
        size: "sm",
        text: I.intl.string(I.t.N86XcP),
        onClick: function () {
            (0, v.oC)(n);
        },
    });
}
