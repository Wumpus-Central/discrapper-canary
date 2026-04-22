"use strict";
n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(331322),
    r = n(834730),
    l = n(821609),
    a = n(473644),
    o = n(57930),
    c = n(115703),
    d = n(438842),
    u = n(652215),
    _ = n(985018),
    h = n(10257);
function m(e) {
    let { invite: t, guild: n, profile: m, onAcceptInvite: g } = e,
        { gamesToDisplay: p, lastGameToDisplay: A, remainingGames: f } = (0, c.A)(m),
        x = (function (e) {
            let { state: t } = e;
            switch (t) {
                case u.elq.ACCEPTING:
                case u.elq.APP_OPENING:
                    return !0;
                default:
                    return !1;
            }
        })(t),
        E = m.description ?? n.description;
    return (0, i.jsxs)("div", {
        className: h.f_,
        children: [
            (0, i.jsxs)("div", {
                className: h.qQ,
                children: [
                    (0, i.jsx)("div", {
                        className: h.WT,
                        children: (0, i.jsx)("div", { className: h.g_, "aria-hidden": !0 }),
                    }),
                    (0, i.jsxs)("div", {
                        className: h.TS,
                        children: [
                            (0, i.jsx)(o.A, { guild: n, outline: !0 }),
                            (0, i.jsxs)(s.B, {
                                direction: "vertical",
                                gap: 16,
                                children: [
                                    (0, i.jsx)(a.A, {
                                        guild: n,
                                        invite: t,
                                        showGuildTag: !0,
                                        highContrast: !0,
                                        hideEnglish: !0,
                                    }),
                                    null != E &&
                                        "" !== E &&
                                        (0, i.jsx)(r.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: E,
                                        }),
                                    (0, i.jsx)(d.A, {
                                        gamesToDisplay: p,
                                        lastGameToDisplay: A,
                                        remainingGames: f,
                                        activity: m.gameActivity,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: h.Fx,
                children: (0, i.jsx)(l.$, {
                    variant: "primary",
                    size: "md",
                    text: _.intl.string(_.t.ohMvm1),
                    onClick: g,
                    loading: x,
                    fullWidth: !0,
                }),
            }),
        ],
    });
}
