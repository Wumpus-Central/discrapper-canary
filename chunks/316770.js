"use strict";
n.d(t, { A: () => I });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(397927),
    l = n(956793),
    u = n(963027),
    c = n(47167),
    d = n(378570),
    _ = n(345942),
    f = n(323443),
    p = n(576705),
    h = n(531648),
    m = n(10862),
    E = n(818348),
    g = n(985018),
    A = n(380297);
function I(e) {
    let { channel: t, guild: n, onAction: i, onClose: I } = e,
        T = (0, c.Ay)(t),
        S = (0, a.bG)([p.A], () => t.isPrivate() || p.A.can(E.xB.CONNECT, t)),
        y = () => {
            if (!S) return T;
            let e = (e) => {
                e.stopPropagation(),
                    t.isGuildStageVoice() ? (0, f.av)(t) : (l.default.selectVoiceChannel(t.id), (0, d.iN)(t.id)),
                    i?.({ action: "OPEN_VOICE_CHANNEL" }),
                    I?.();
            };
            return (0, r.jsx)(o.DUT, {
                className: s()(A.sd, A.mG),
                onClick: e,
                "aria-label": (0, u.Ay)({ channel: t }),
                children: T,
            });
        },
        v = () => {
            if (null == n) return null;
            let e = (e) => {
                e.stopPropagation(), (0, _.u)(n.id), i?.({ action: "OPEN_VOICE_GUILD" }), I?.();
            };
            return (0, r.jsx)(h.A, {
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
                className: A.CT,
                children: [
                    (0, r.jsx)(m.A, { channel: t, size: "xxs", color: o.LU0.colors.TEXT_DEFAULT, className: A.Ow }),
                    y(),
                ],
            }),
            v(),
        ],
    });
}
