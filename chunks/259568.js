"use strict";
n.d(t, { a: () => f }), n(321073);
var i = n(627968);
n(64700);
var s = n(554146),
    l = n(116833),
    r = n(265486),
    a = n(942857),
    o = n(793574),
    c = n(379848),
    d = n(903223),
    u = n(997509),
    h = n(757036),
    A = n(363487),
    p = n(828162),
    g = n(652215),
    m = n(49999),
    _ = n(985018);
function f(e) {
    let { guild: t, targetElementRef: n } = e,
        f = (0, A.A)(t.id),
        x = (0, h.L)(),
        { enabled: C } = d.Ay.useExperiment({ guildId: t.id, location: "progress-bar-coachmark" }),
        E = (0, a.A)(),
        I = (0, d._E)(t, C),
        b = C && I && !E,
        N = [];
    return (
        null != f && f && b && N.push(s.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK),
        x && null != f && !f && b && N.push(s.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK),
        (0, i.jsx)(c.Ay, {
            contentTypes: N,
            children: (e) => {
                let { visibleContent: a, markAsDismissed: c } = e;
                return a === s.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK
                    ? (0, i.jsx)(r.A, {
                          targetElementRef: n,
                          onRequestClose: () => {
                              c(m.i.USER_DISMISS);
                          },
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "top",
                          caretConfig: { align: "start" },
                          graphic: {
                              type: "dynamic",
                              component: l.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
                              props: {},
                              aspectRatio: "21/9",
                          },
                          size: "video",
                          title: _.intl.string(_.t.bjJ7xZ),
                          body: _.intl.string(_.t.SeBPzu),
                          actions: [
                              {
                                  text: _.intl.string(_.t["Xc9J+x"]),
                                  variant: "primary",
                                  onClick: () => {
                                      c(m.i.TAKE_ACTION),
                                          u.A.open(
                                              t.id,
                                              g.BEX.BOOST_PERKS,
                                              o.A.GUILD_BOOSTING_PROGRESS_BAR_ADMIN_COACHMARK,
                                          );
                                  },
                              },
                          ],
                      })
                    : a === s.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK
                      ? (0, i.jsx)(r.A, {
                            targetElementRef: n,
                            onRequestClose: () => {
                                c(m.i.USER_DISMISS);
                            },
                            position: "right",
                            alignmentStrategy: "edge",
                            align: "top",
                            caretConfig: { align: "start" },
                            graphic: {
                                type: "dynamic",
                                component: l.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
                                props: {},
                                aspectRatio: "21/9",
                            },
                            size: "video",
                            title: _.intl.string(_.t["8W0djT"]),
                            body: _.intl.string(_.t.tgSfkH),
                            actions: [
                                {
                                    text: _.intl.string(_.t.cTJtBG),
                                    variant: "primary",
                                    onClick: () => {
                                        c(m.i.TAKE_ACTION),
                                            (0, p.A)(t.id, o.A.GUILD_BOOSTING_PROGRESS_BAR_MEMBER_COACHMARK);
                                    },
                                },
                            ],
                        })
                      : null;
            },
        })
    );
}
