"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(189213),
    s = n(554146),
    a = n(192308),
    o = n(882997),
    l = n(826673),
    u = n(430452),
    c = n(954571),
    d = n(605497),
    _ = n(544105),
    f = n(652215),
    p = n(985018);
let h = "game_console_alert_modal",
    E = "game_console_ptt_alert_modal",
    m = {
        maybeShowPTTAlert(e) {
            if (u.Ay.getMode() !== f.TBI.PUSH_TO_TALK || (0, l.k8)(s.M.CONSOLE_PTT_DISABLE_ALERT))
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
                              (0, l.Dr)(s.M.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          o = (e) =>
                              (0, r.jsx)(i.Modal, {
                                  ...e,
                                  title: t,
                                  subtitle: p.intl.string(p.t.bL21zs),
                                  actions: [{ text: p.intl.string(p.t.BddRzS), onClick: n }],
                              });
                      (0, a.hasModalOpen)(E)
                          ? (0, a.updateModal)(E, (e) => o(e))
                          : (0, a.openModalLazy)(async () => (e) => o(e), { modalKey: E });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: s, reconnectPlatformType: l } = e,
                u = (0, r.jsx)(d.P, { body: n, errorCodeMessage: s, dismissCallback: () => (0, a.closeModal)(h) });
            function E() {
                null != l &&
                    ((0, o.A)({ platformType: l }),
                    c.default.track(f.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: _.yM,
                        current_step: "desktop oauth",
                        platform_type: l,
                    }));
            }
            let m = (e) =>
                (0, r.jsx)(i.Modal, {
                    ...e,
                    title: t,
                    actions: [{ text: p.intl.string(p.t.BddRzS), onClick: E }],
                    children: u,
                });
            (0, a.hasModalOpen)(h)
                ? (0, a.updateModal)(h, (e) => m(e))
                : (0, a.openModalLazy)(async () => (e) => m(e), { modalKey: h });
        },
    };
