"use strict";
n.d(t, { C: () => d });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(834730),
    o = n(927057),
    l = n(151282),
    u = n(985018),
    c = n(745315);
function d(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: i } = t;
    function d(e) {
        e.stopPropagation(), (0, l.Ps)(n);
    }
    return (0, r.jsx)("div", {
        className: c.e1,
        children: (0, r.jsx)("div", {
            className: c.kL,
            children: (0, r.jsxs)("div", {
                className: c.g3,
                children: [
                    (0, r.jsx)(s.E, {
                        color: "text-default",
                        className: a()(c.Qq, c.a3),
                        variant: "text-sm/normal",
                        children: u.intl.formatToPlainString(u.t["MQcRX/"], { timestamp: new Date(i).valueOf() }),
                    }),
                    (0, r.jsx)("div", { className: c.o1, children: (0, r.jsx)(o.x, { onClick: d }) }),
                ],
            }),
        }),
    });
}
