"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(644508),
    o = n(824832),
    l = n(652215),
    u = n(985018),
    c = n(428042);
function d(e) {
    let { channel: t } = e,
        n = i.useRef(null),
        d = i.useRef(0),
        [_, f] = i.useState(!1),
        [p, h] = i.useState(!1),
        m = p || _,
        g = () => {
            n.current?.activateUploadDialogue();
        },
        E = i.useCallback(
            async (e, n, r) => {
                h(!0),
                    await (0, s.f)({
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
            (0, r.jsx)(a.Button, { text: u.intl.string(u.t.iMJO37), variant: "secondary", onClick: g, disabled: m }),
            (0, r.jsx)("div", {
                className: c.F,
                children: (0, r.jsx)(o.Ay, { ref: n, onChange: E, setLoading: f, disabled: m }, d.current),
            }),
        ],
    });
}
