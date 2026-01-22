n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(644508),
    o = n(824832),
    l = n(652215),
    c = n(985018),
    u = n(428042);

function d(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        d = i.useRef(0),
        [f, p] = i.useState(!1),
        [_, h] = i.useState(!1),
        m = _ || f,
        g = () => {
            var e;
            null == (e = n.current) || e.activateUploadDialogue();
        },
        E = i.useCallback(
            async (e, n, r) => {
                var i;
                h(!0),
                    await (0, s.f)({
                        userImage: {
                            data: e,
                            file: n,
                            image: r,
                        },
                        guildId: null != (i = null == t ? void 0 : t.guild_id) ? i : null,
                        analyticsLocation: {
                            section: l.JJy.EXPRESSION_PICKER,
                            page: (null == t ? void 0 : t.guild_id) != null ? l.liQ.GUILD_CHANNEL : l.liQ.DM_CHANNEL,
                        },
                    }),
                    (d.current += 1),
                    h(!1);
            },
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Button, {
                text: c.intl.string(c.t.iMJO37),
                variant: "secondary",
                onClick: g,
                disabled: m,
            }),
            (0, r.jsx)("div", {
                className: u.F,
                children: (0, r.jsx)(
                    o.Ay,
                    {
                        ref: n,
                        onChange: E,
                        setLoading: p,
                        disabled: m,
                    },
                    d.current,
                ),
            }),
        ],
    });
}
