"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(473644),
    l = n(57930),
    a = n(115703),
    o = n(438842),
    d = n(652215),
    c = n(985018),
    u = n(974818);
function h(e) {
    let { invite: t, guild: n, profile: h, onAcceptInvite: _ } = e,
        { gamesToDisplay: p, lastGameToDisplay: g, remainingGames: m } = (0, a.A)(h),
        A = (function (e) {
            let { state: t } = e;
            switch (t) {
                case d.elq.ACCEPTING:
                case d.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        f = h.description ?? n.description;
    return (0, i.jsxs)("div", {
        className: u.f_,
        children: [
            (0, i.jsxs)("div", {
                className: u.qQ,
                children: [
                    (0, i.jsx)("div", {
                        className: u.WT,
                        children: (0, i.jsx)("div", { className: u.g_, "aria-hidden": !0 }),
                    }),
                    (0, i.jsxs)("div", {
                        className: u.TS,
                        children: [
                            (0, i.jsx)(l.A, { guild: n, outline: !0 }),
                            (0, i.jsxs)(s.BJc, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(r.A, { guild: n, invite: t, showGuildTag: !0 }),
                                    null != f &&
                                        "" !== f &&
                                        (0, i.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: f,
                                        }),
                                    (0, i.jsx)(o.A, {
                                        gamesToDisplay: p,
                                        lastGameToDisplay: g,
                                        remainingGames: m,
                                        activity: h.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: u.Fx,
                children: (0, i.jsx)(s.Button, {
                    variant: "primary",
                    size: "md",
                    text: c.intl.string(c.t.ohMvm1),
                    onClick: _,
                    loading: A,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
