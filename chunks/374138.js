"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(554146),
    s = n(192308),
    o = n(882997),
    l = n(826673),
    u = n(430452),
    c = n(954571),
    d = n(605497),
    _ = n(544105),
    f = n(652215),
    p = n(985018);
let h = "game_console_alert_modal",
    m = "game_console_ptt_alert_modal",
    g = {
        maybeShowPTTAlert(e) {
            if (u.A.getMode() !== f.TBI.PUSH_TO_TALK || (0, l.k8)(a.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [f.fg2.XBOX]: p.intl.string(p.t.bVZ7vy),
                [f.fg2.PLAYSTATION]: p.intl.string(p.t["6iqUsf"]),
                [f.fg2.PLAYSTATION_STAGING]: p.intl.string(p.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, l.Dr)(a.M.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          o = (e) =>
                              (0, r.jsx)(i.Modal, {
                                  ...e,
                                  title: t,
                                  subtitle: p.intl.string(p.t.bL21zs),
                                  actions: [{ text: p.intl.string(p.t.BddRzS), onClick: n }],
                              });
                      (0, s.hasModalOpen)(m)
                          ? (0, s.updateModal)(m, (e) => o(e))
                          : (0, s.openModalLazy)(async () => (e) => o(e), { modalKey: m });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: a, reconnectPlatformType: l } = e,
                u = (0, r.jsx)(d.P, { body: n, errorCodeMessage: a, dismissCallback: () => (0, s.closeModal)(h) });
            function m() {
                null != l &&
                    ((0, o.A)({ platformType: l }),
                    c.default.track(f.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: _.yM,
                        current_step: "desktop oauth",
                        platform_type: l,
                    }));
            }
            let g = (e) =>
                (0, r.jsx)(i.Modal, {
                    ...e,
                    title: t,
                    actions: [{ text: p.intl.string(p.t.BddRzS), onClick: m }],
                    children: u,
                });
            (0, s.hasModalOpen)(h)
                ? (0, s.updateModal)(h, (e) => g(e))
                : (0, s.openModalLazy)(async () => (e) => g(e), { modalKey: h });
        },
    };
