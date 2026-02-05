"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(732955),
    a = n(397927),
    s = n(928658),
    o = n(632738),
    l = n(627363),
    u = n(587895),
    c = n(985018);
let d = "useReportAppItemModal";
function _(e) {
    let { applicationId: t, ...n } = e;
    return null == t
        ? null
        : (0, r.jsx)(a.Drp, {
              id: "report-app",
              color: n.color,
              label: c.intl.string(c.t.NgA5vp),
              action: () => f(t, n),
          });
}
function f(e, t) {
    let n = () => {
        (0, a.OoC)(d), t.onSubmit?.();
    };
    (0, a.mMO)(
        async () => {
            await l.Ay.fetchApplication(e);
            let d = u.A.getApplication(e);
            return (e) =>
                (0, r.jsx)(i.aFV, {
                    title: c.intl.string(c.t.Bd10bR),
                    actions: [],
                    ...e,
                    children: (0, r.jsxs)(a.BJc, {
                        children: [
                            (0, r.jsx)(o.PQ, {
                                variant: "clickable",
                                title: c.intl.string(c.t.eyEkG1),
                                description: c.intl.string(c.t.ptItsj),
                                onButtonPress: () => (0, s.NW)(t.user, t.guildId, n, t.appContext),
                            }),
                            (0, r.jsx)(o.PQ, {
                                variant: "clickable",
                                title: c.intl.string(c.t.atP0yX),
                                description: c.intl.string(c.t.UGg603),
                                onButtonPress: () => {
                                    (0, s.r3)({
                                        application: d,
                                        entrypoint: t.entrypoint ?? "user_profile",
                                        contextualGuildId: t.guildId,
                                        contextualChannelId: t.channelId,
                                        onSubmit: n,
                                        appContext: t.appContext,
                                    });
                                },
                            }),
                        ],
                    }),
                });
        },
        { modalKey: d },
    );
}
