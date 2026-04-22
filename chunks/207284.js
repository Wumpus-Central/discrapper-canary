"use strict";
n.d(t, { A: () => d });
var i = n(627968),
    l = n(64700),
    s = n(821609),
    r = n(644508),
    a = n(824832),
    o = n(652215),
    c = n(985018),
    u = n(638263);
function d(e) {
    let { channel: t } = e,
        n = l.useRef(null),
        d = l.useRef(0),
        [h, m] = l.useState(!1),
        [p, f] = l.useState(!1),
        g = p || h,
        _ = l.useCallback(
            async (e, n, i) => {
                f(!0),
                    await (0, r.f)({
                        userImage: { data: e, file: n, image: i },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: o.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? o.liQ.GUILD_CHANNEL : o.liQ.DM_CHANNEL,
                        },
                    }),
                    (d.current += 1),
                    f(!1);
            },
            [t],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.$, {
                text: c.intl.string(c.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: g,
            }),
            (0, i.jsx)("div", {
                className: u.F,
                children: (0, i.jsx)(a.Ay, { ref: n, onChange: _, setLoading: m, disabled: g }, d.current),
            }),
        ],
    });
}
