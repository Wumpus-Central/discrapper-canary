"use strict";
n.d(t, { C: () => d });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(834730),
    a = n(927057),
    o = n(151282),
    c = n(985018),
    u = n(1372);
function d(e) {
    let { pendingScheduledMessage: t } = e,
        { channelId: n, scheduledTimestamp: l } = t;
    return (0, i.jsx)("div", {
        className: u.e1,
        children: (0, i.jsx)("div", {
            className: u.kL,
            children: (0, i.jsxs)("div", {
                className: u.g3,
                children: [
                    (0, i.jsx)(r.E, {
                        color: "text-default",
                        className: s()(u.Qq, u.a3),
                        variant: "text-sm/normal",
                        children: c.intl.formatToPlainString(c.t["MQcRX/"], { timestamp: new Date(l).valueOf() }),
                    }),
                    (0, i.jsx)("div", {
                        className: u.o1,
                        children: (0, i.jsx)(a.x, {
                            onClick: function (e) {
                                e.stopPropagation(), (0, o.Ps)(n);
                            },
                            "aria-label": c.intl.string(c.t.cpT0Cq),
                        }),
                    }),
                ],
            }),
        }),
    });
}
