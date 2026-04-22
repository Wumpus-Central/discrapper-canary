"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(473644),
    l = n(57930),
    a = n(115703),
    o = n(438842),
    c = n(652215),
    d = n(985018),
    u = n(888849);
function _(e) {
    let { invite: t, guild: n, profile: _, onAcceptInvite: h } = e,
        { gamesToDisplay: p, lastGameToDisplay: g, remainingGames: m } = (0, a.A)(_),
        A = (function (e) {
            let { state: t } = e;
            switch (t) {
                case c.elq.ACCEPTING:
                case c.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        f = _.description ?? n.description;
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
                                    (0, i.jsx)(r.A, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
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
                                        activity: _.gameActivity,
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
                    text: d.intl.string(d.t.ohMvm1),
                    onClick: h,
                    loading: A,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
