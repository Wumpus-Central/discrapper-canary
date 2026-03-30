"use strict";
n.d(t, { a: () => f }), n(321073);
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(116833),
    a = n(265486),
    r = n(942857),
    o = n(793574),
    c = n(379848),
    d = n(903223),
    u = n(997509),
    h = n(757036),
    A = n(363487),
    m = n(828162),
    _ = n(652215),
    g = n(49999),
    p = n(985018);
function f(e) {
    let { guild: t, targetElementRef: n } = e,
        f = (0, A.A)(t.id),
        x = (0, h.L)(),
        { enabled: E } = d.Ay.useExperiment({ guildId: t.id, location: "progress-bar-coachmark" }),
        C = (0, r.A)(),
        I = (0, d._E)(t, E),
        N = E && I && !C,
        b = [];
    return (
        null != f && f && N && b.push(s.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK),
        x && null != f && !f && N && b.push(s.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK),
        (0, i.jsx)(c.Ay, {
            contentTypes: b,
            children: (e) => {
                let { visibleContent: r, markAsDismissed: c } = e;
                return r === s.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK
                    ? (0, i.jsx)(a.A, {
                          targetElementRef: n,
                          onRequestClose: () => {
                              c(g.i.USER_DISMISS);
                          },
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "top",
                          caretConfig: { align: "start" },
                          gradientColor: "pink",
                          graphic: {
                              type: "dynamic",
                              component: l.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
                              props: {},
                              aspectRatio: "21/9",
                          },
                          size: "video",
                          title: p.intl.string(p.t.bjJ7xZ),
                          body: p.intl.string(p.t.SeBPzu),
                          actions: [
                              {
                                  text: p.intl.string(p.t["Xc9J+x"]),
                                  variant: "primary",
                                  onClick: () => {
                                      c(g.i.TAKE_ACTION),
                                          u.A.open(
                                              t.id,
                                              _.BEX.BOOST_PERKS,
                                              o.A.GUILD_BOOSTING_PROGRESS_BAR_ADMIN_COACHMARK,
                                          );
                                  },
                              },
                          ],
                      })
                    : r === s.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK
                      ? (0, i.jsx)(a.A, {
                            targetElementRef: n,
                            onRequestClose: () => {
                                c(g.i.USER_DISMISS);
                            },
                            position: "right",
                            alignmentStrategy: "edge",
                            align: "top",
                            caretConfig: { align: "start" },
                            gradientColor: "pink",
                            graphic: {
                                type: "dynamic",
                                component: l.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
                                props: {},
                                aspectRatio: "21/9",
                            },
                            size: "video",
                            title: p.intl.string(p.t["8W0djT"]),
                            body: p.intl.string(p.t.tgSfkH),
                            actions: [
                                {
                                    text: p.intl.string(p.t.cTJtBG),
                                    variant: "primary",
                                    onClick: () => {
                                        c(g.i.TAKE_ACTION),
                                            (0, m.A)(t.id, o.A.GUILD_BOOSTING_PROGRESS_BAR_MEMBER_COACHMARK);
                                    },
                                },
                            ],
                        })
                      : null;
            },
        })
    );
}
