"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(397927),
    l = n(956793),
    u = n(47167),
    c = n(378570),
    d = n(345942),
    _ = n(323443),
    f = n(576705),
    p = n(531648),
    h = n(10862),
    m = n(818348),
    g = n(985018),
    E = n(380297);
function A(e) {
    let { channel: t, guild: n, onAction: i, onClose: A } = e,
        I = (0, u.Ay)(t),
        T = (0, s.bG)([f.A], () => t.isPrivate() || f.A.can(m.xB.CONNECT, t)),
        y = () => {
            if (!T) return I;
            let e = (e) => {
                e.stopPropagation(),
                    t.isGuildStageVoice() ? (0, _.av)(t) : (l.default.selectVoiceChannel(t.id), (0, c.iN)(t.id)),
                    i?.({ action: "OPEN_VOICE_CHANNEL" }),
                    A?.();
            };
            return (0, r.jsx)(o.DUT, { className: a()(E.sd, E.mG), onClick: e, children: I });
        },
        S = () => {
            if (null == n) return null;
            let e = (e) => {
                e.stopPropagation(), (0, d.u)(n.id), i?.({ action: "OPEN_VOICE_GUILD" }), A?.();
            };
            return (0, r.jsx)(p.A, {
                variant: "text-xs/normal",
                text: g.intl.formatToPlainString(g.t["hq/Qze"], { guildName: n.name }),
                onClick: e,
            });
        };
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(o.Heading, {
                variant: "heading-sm/semibold",
                color: "text-default",
                className: E.CT,
                children: [
                    (0, r.jsx)(h.A, { channel: t, size: "xxs", color: o.LU0.colors.TEXT_DEFAULT, className: E.Ow }),
                    y(),
                ],
            }),
            S(),
        ],
    });
}
