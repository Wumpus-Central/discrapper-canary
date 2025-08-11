t.d(n, { default: () => p }), t(388685);
var l = t(255367),
    a = t(73800),
    i = t(106351),
    o = t(442837),
    d = t(755721),
    c = t(481060),
    r = t(471445),
    s = t(856768),
    u = t(324067),
    h = t(771845),
    m = t(9156),
    x = t(117984),
    g = t(593214),
    j = t(378337),
    C = t(388032),
    f = t(918492);
function p(e) {
    let { transitionState: n, onClose: t, parentId: i } = e,
        r = (0, o.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]),
        [u, m] = a.useState(r),
        [x, g] = a.useState(!1);
    return (0, l.jsxs)(c.Y0X, {
        transitionState: n,
        parentComponent: "AddFavoriteChannelModal",
        children: [
            (0, l.jsxs)(c.xBx, {
                className: f.modalHeader,
                children: [
                    (0, l.jsxs)("div", {
                        className: f.modalHeaderTitle,
                        children: [
                            (0, l.jsx)(c.X6q, {
                                variant: "text-lg/semibold",
                                children: C.intl.string(C.t["4wcdEx"]),
                            }),
                            (0, l.jsx)(c.olH, { onClick: t }),
                        ],
                    }),
                    (0, l.jsx)("div", {
                        className: f.guildSelector,
                        children: (0, l.jsx)(s.q, {
                            guildId: u,
                            onChange: function (e) {
                                null != e && m(e.id);
                            },
                        }),
                    }),
                ],
            }),
            (0, l.jsx)(c.hzk, {
                className: f.modalContent,
                children: (0, l.jsx)(v, {
                    guildId: u,
                    hideMutedChannels: x,
                    parentId: i,
                }),
            }),
            (0, l.jsxs)(c.mzw, {
                className: f.modalFooter,
                children: [
                    (0, l.jsx)(d.zx, {
                        className: f.goBackButton,
                        look: d.iL.BLANK,
                        color: d.Tt.PRIMARY,
                        size: d.Ph.SMALL,
                        onClick: t,
                        children: C.intl.string(C.t["/g10LC"]),
                    }),
                    (0, l.jsx)("div", {
                        children: (0, l.jsx)(c.XZJ, {
                            type: c.XZJ.Types.INVERTED,
                            value: x,
                            onChange: (e, n) => g(n),
                            children: (0, l.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "interactive-normal",
                                children: C.intl.string(C.t.UwOLJC),
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function v(e) {
    let { guildId: n, hideMutedChannels: t, parentId: d } = e,
        c = (0, o.e7)([u.Z], () => u.Z.getCategories(n)),
        r = (0, j.Z)(c),
        s = a.useRef(null);
    return (
        a.useEffect(() => {
            var e;
            null == s || null == (e = s.current) || e.scroll({ top: 0 });
        }, [n]),
        (0, l.jsx)("div", {
            ref: s,
            children: r.map((e) =>
                e.type === i.d.GUILD_CATEGORY
                    ? (0, l.jsx)(N, { name: e.name }, e.id)
                    : (0, l.jsx)(
                          I,
                          {
                              channel: e,
                              hideMutedChannels: t,
                              parentId: d,
                          },
                          e.id,
                      ),
            ),
        })
    );
}
function N(e) {
    let { name: n } = e;
    return (0, l.jsx)(c.Text, {
        className: f.categoryRow,
        variant: "eyebrow",
        color: "interactive-normal",
        children: n,
    });
}
function I(e) {
    let { channel: n, hideMutedChannels: t, parentId: a } = e,
        i = (0, g.s4)(n.id);
    if ((0, o.e7)([m.ZP], () => m.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
    let d = (0, r.KS)(n);
    return (0, l.jsxs)(
        "div",
        {
            className: f.channelRow,
            children: [
                (0, l.jsxs)("div", {
                    className: f.channelName,
                    children: [
                        null != d &&
                            (0, l.jsx)("div", {
                                className: f.channelIconContainer,
                                children: (0, l.jsx)(d, {
                                    className: f.channelIcon,
                                    size: "custom",
                                    color: "currentColor",
                                    height: 20,
                                    width: 20,
                                }),
                            }),
                        (0, l.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "interactive-normal",
                            children: n.name,
                        }),
                    ],
                }),
                null != i
                    ? (0, l.jsx)(_, { channelId: n.id })
                    : (0, l.jsx)(k, {
                          channelId: n.id,
                          parentId: a,
                      }),
            ],
        },
        n.id,
    );
}
function k(e) {
    let { channelId: n, parentId: t } = e;
    return (0, l.jsx)(d.zx, {
        look: d.iL.OUTLINED,
        size: d.Ph.SMALL,
        color: d.Tt.BRAND,
        onClick: function () {
            (0, x.kj)(n, t);
        },
        children: C.intl.string(C.t.OYkgVl),
    });
}
function _(e) {
    let { channelId: n } = e;
    return (0, l.jsx)(c.zxk, {
        variant: "secondary",
        size: "sm",
        text: C.intl.string(C.t.N86XcH),
        onClick: function () {
            (0, x.oC)(n);
        },
    });
}
