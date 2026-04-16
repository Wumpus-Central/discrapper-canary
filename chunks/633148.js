"use strict";
n.d(t, { A: () => x });
var l = n(627968),
    i = n(64700),
    s = n(732955),
    a = n(397927),
    r = n(406704),
    o = n(203982),
    d = n(435470),
    c = n(853742),
    u = n(652215),
    m = n(985018),
    h = n(952351);
function x(e) {
    let { channelName: t, guildId: x, tagFilter: g, channel: f } = e,
        _ = (0, d.S4)(f),
        p = (0, r.AI)(f),
        j = f.isMediaChannel(),
        b = i.useCallback(() => {
            (0, c.zd)(),
                (0, a.mMO)(async () => {
                    let { default: e } = await n.e("7937").then(n.bind(n, 420472));
                    return (t) => (0, l.jsx)(e, { ...t, guildId: x });
                });
        }, [x]),
        v = g.size > 0,
        A = p || _,
        C = !v && _ && !j,
        T = i.useCallback(
            () => (C ? b() : p ? void o._.dispatch(u.jej.FOCUS_COMPOSER_TITLE) : (0, u.FXj)()),
            [b, C, p],
        );
    return (0, l.jsxs)("div", {
        className: h.k,
        children: [
            (0, l.jsx)(a.Heading, {
                className: h.w,
                variant: "heading-md/semibold",
                children: v ? m.intl.formatToPlainString(m.t.lvPci0, { numTags: g.size }) : m.intl.string(m.t.PwTMG0),
            }),
            (0, l.jsx)(a.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: v
                    ? m.intl.formatToPlainString(m.t.AAeye1, { numTags: g.size })
                    : m.intl.formatToPlainString(m.t.YtsXFD, { channelName: t }),
            }),
            A &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(a.hKd, { size: 16 }),
                        (0, l.jsx)(s.$nd, {
                            text: C ? m.intl.string(m.t.DgatTQ) : m.intl.string(m.t.wOKE8I),
                            variant: "secondary",
                            onClick: T,
                        }),
                    ],
                }),
        ],
    });
}
