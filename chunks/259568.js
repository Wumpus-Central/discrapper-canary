n.d(t, { a: () => f }), n(321073);
var i = n(627968);
n(64700);
var l = n(554146),
    s = n(116833),
    a = n(265486),
    r = n(942857),
    o = n(793574),
    d = n(379848),
    c = n(903223),
    u = n(997509),
    h = n(757036),
    A = n(363487),
    p = n(828162),
    m = n(652215),
    g = n(49999),
    _ = n(985018);
function f(e) {
    let { guildId: t, targetElementRef: n } = e,
        f = (0, A.A)(t),
        x = (0, h.L)(),
        { enabled: C } = c.Ay.useExperiment({ guildId: t, location: "progress-bar-coachmark" }),
        E = (0, r.A)(),
        I = [];
    return (
        null != f && f && C && !E && I.push(l.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK),
        x && null != f && !f && C && !E && I.push(l.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK),
        (0, i.jsx)(d.Ay, {
            contentTypes: I,
            children: (e) => {
                let { visibleContent: r, markAsDismissed: d } = e;
                return r === l.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK
                    ? (0, i.jsx)(a.A, {
                          targetElementRef: n,
                          onRequestClose: () => {
                              d(g.i.USER_DISMISS);
                          },
                          position: "right",
                          alignmentStrategy: "edge",
                          align: "top",
                          caretConfig: { align: "start" },
                          graphic: {
                              type: "dynamic",
                              component: s.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
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
                                      d(g.i.TAKE_ACTION),
                                          u.A.open(
                                              t,
                                              m.BEX.BOOST_PERKS,
                                              o.A.GUILD_BOOSTING_PROGRESS_BAR_ADMIN_COACHMARK,
                                          );
                                  },
                              },
                          ],
                      })
                    : r === l.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK
                      ? (0, i.jsx)(a.A, {
                            targetElementRef: n,
                            onRequestClose: () => {
                                d(g.i.USER_DISMISS);
                            },
                            position: "right",
                            alignmentStrategy: "edge",
                            align: "top",
                            caretConfig: { align: "start" },
                            graphic: {
                                type: "dynamic",
                                component: s.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
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
                                        d(g.i.TAKE_ACTION),
                                            (0, p.A)(t, o.A.GUILD_BOOSTING_PROGRESS_BAR_MEMBER_COACHMARK);
                                    },
                                },
                            ],
                        })
                      : null;
            },
        })
    );
}
