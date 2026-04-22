"use strict";
n.d(t, { A: () => _ });
var l = n(627968),
    a = n(64700),
    s = n(821609),
    i = n(192308),
    r = n(534514),
    o = n(834730),
    d = n(696986),
    c = n(406704),
    u = n(203982),
    m = n(435470),
    h = n(853742),
    g = n(652215),
    x = n(985018),
    f = n(952351);
function _(e) {
    let { channelName: t, guildId: _, tagFilter: p, channel: j } = e,
        b = (0, m.S4)(j),
        v = (0, c.AI)(j),
        C = j.isMediaChannel(),
        A = a.useCallback(() => {
            (0, h.zd)(),
                (0, i.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("7937"), n.e("43051")]).then(n.bind(n, 420472));
                    return (t) => (0, l.jsx)(e, { ...t, guildId: _ });
                });
        }, [_]),
        N = p.size > 0,
        S = v || b,
        E = !N && b && !C,
        T = a.useCallback(
            () => (E ? A() : v ? void u._.dispatch(g.jej.FOCUS_COMPOSER_TITLE) : (0, g.FXj)()),
            [A, E, v],
        );
    return (0, l.jsxs)("div", {
        className: f.k,
        children: [
            (0, l.jsx)(r.D, {
                className: f.w,
                variant: "heading-md/semibold",
                children: N ? x.intl.formatToPlainString(x.t.lvPci0, { numTags: p.size }) : x.intl.string(x.t.PwTMG0),
            }),
            (0, l.jsx)(o.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: N
                    ? x.intl.formatToPlainString(x.t.AAeye1, { numTags: p.size })
                    : x.intl.formatToPlainString(x.t.YtsXFD, { channelName: t }),
            }),
            S &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)(d.h, { size: 16 }),
                        (0, l.jsx)(s.$, {
                            text: E ? x.intl.string(x.t.DgatTQ) : x.intl.string(x.t.wOKE8I),
                            variant: "secondary",
                            onClick: T,
                        }),
                    ],
                }),
        ],
    });
}
