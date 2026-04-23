"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(821609),
    a = n(644508),
    o = n(824832),
    l = n(652215),
    u = n(985018),
    c = n(638263);
function d(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        d = i.useRef(0),
        [_, f] = i.useState(!1),
        [p, h] = i.useState(!1),
        E = p || _,
        m = i.useCallback(
            async (e, n, r) => {
                h(!0),
                    await (0, a.f)({
                        userImage: { data: e, file: n, image: r },
                        guildId: t?.guild_id ?? null,
                        analyticsLocation: {
                            section: l.JJy.EXPRESSION_PICKER,
                            page: t?.guild_id != null ? l.liQ.GUILD_CHANNEL : l.liQ.DM_CHANNEL,
                        },
                    }),
                    (d.current += 1),
                    h(!1);
            },
            [t],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.$, {
                text: u.intl.string(u.t.iMJO37),
                variant: "secondary",
                onClick: () => {
                    n.current?.activateUploadDialogue();
                },
                disabled: E,
            }),
            (0, r.jsx)("div", {
                className: c.F,
                children: (0, r.jsx)(o.Ay, { ref: n, onChange: m, setLoading: f, disabled: E }, d.current),
            }),
        ],
    });
}
