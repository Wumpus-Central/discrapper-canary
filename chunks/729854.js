"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(189213),
    a = n(554146),
    o = n(192308),
    l = n(968309),
    u = n(826673),
    c = n(235058),
    d = n(174459),
    _ = n(17928),
    f = n(643501),
    h = n(37256);
function p(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: s } = e,
        a = (0, _.bG)([f.default], () => f.default.getRemoteSessionId());
    return (r.useEffect(() => {
        null != a && n();
    }, [a, n]),
    null == s)
        ? t
        : (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)("div", { className: h.F, children: s })] });
}
var E = n(544105),
    m = n(652215),
    g = n(375708);
let A = "game_console_alert_modal",
    I = "game_console_ptt_alert_modal",
    T = {
        maybeShowPTTAlert(e) {
            if (c.Ay.getMode() !== m.TBI.PUSH_TO_TALK || (0, u.k8)(a.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [m.fg2.XBOX]: g.intl.string(g.t.bVZ7vy),
                [m.fg2.PLAYSTATION]: g.intl.string(g.t["6iqUsf"]),
                [m.fg2.PLAYSTATION_STAGING]: g.intl.string(g.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, u.Dr)(a.M.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          r = (e) =>
                              (0, i.jsx)(s.Modal, {
                                  ...e,
                                  title: t,
                                  subtitle: g.intl.string(g.t.bL21zs),
                                  actions: [{ text: g.intl.string(g.t.BddRzS), onClick: n }],
                              });
                      (0, o.hasModalOpen)(I)
                          ? (0, o.updateModal)(I, (e) => r(e))
                          : (0, o.openModalLazy)(async () => (e) => r(e), { modalKey: I });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: r, reconnectPlatformType: a } = e,
                u = (0, i.jsx)(p, { body: n, errorCodeMessage: r, dismissCallback: () => (0, o.closeModal)(A) });
            function c() {
                null != a &&
                    ((0, l.A)({ platformType: a }),
                    d.default.track(m.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: E.yM,
                        current_step: "desktop oauth",
                        platform_type: a,
                    }));
            }
            let _ = (e) =>
                (0, i.jsx)(s.Modal, {
                    ...e,
                    title: t,
                    actions: [{ text: g.intl.string(g.t.BddRzS), onClick: c }],
                    children: u,
                });
            (0, o.hasModalOpen)(A)
                ? (0, o.updateModal)(A, (e) => _(e))
                : (0, o.openModalLazy)(async () => (e) => _(e), { modalKey: A });
        },
    };
