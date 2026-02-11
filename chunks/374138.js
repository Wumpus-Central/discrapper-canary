"use strict";
n.d(t, { A: () => E });
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
    h = n(985018);
let p = "game_console_alert_modal",
    g = "game_console_ptt_alert_modal",
    E = {
        maybeShowPTTAlert(e) {
            if (u.Ay.getMode() !== f.TBI.PUSH_TO_TALK || (0, l.k8)(a.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [f.fg2.XBOX]: h.intl.string(h.t.bVZ7vy),
                [f.fg2.PLAYSTATION]: h.intl.string(h.t["6iqUsf"]),
                [f.fg2.PLAYSTATION_STAGING]: h.intl.string(h.t["6iqUsf"]),
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
                                  subtitle: h.intl.string(h.t.bL21zs),
                                  actions: [{ text: h.intl.string(h.t.BddRzS), onClick: n }],
                              });
                      (0, s.hasModalOpen)(g)
                          ? (0, s.updateModal)(g, (e) => o(e))
                          : (0, s.openModalLazy)(async () => (e) => o(e), { modalKey: g });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: a, reconnectPlatformType: l } = e,
                u = (0, r.jsx)(d.P, { body: n, errorCodeMessage: a, dismissCallback: () => (0, s.closeModal)(p) });
            function g() {
                null != l &&
                    ((0, o.A)({ platformType: l }),
                    c.default.track(f.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: _.yM,
                        current_step: "desktop oauth",
                        platform_type: l,
                    }));
            }
            let E = (e) =>
                (0, r.jsx)(i.Modal, {
                    ...e,
                    title: t,
                    actions: [{ text: h.intl.string(h.t.BddRzS), onClick: g }],
                    children: u,
                });
            (0, s.hasModalOpen)(p)
                ? (0, s.updateModal)(p, (e) => E(e))
                : (0, s.openModalLazy)(async () => (e) => E(e), { modalKey: p });
        },
    };
