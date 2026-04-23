"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    r = n(64700),
    s = n(189213),
    a = n(554146),
    o = n(192308),
    l = n(773952),
    d = n(826673),
    _ = n(969341),
    u = n(954571),
    c = n(17928),
    E = n(643501),
    h = n(37256);
function m(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: s } = e,
        a = (0, c.bG)([E.default], () => E.default.getRemoteSessionId());
    return (r.useEffect(() => {
        null != a && n();
    }, [a, n]),
    null == s)
        ? t
        : (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)("div", { className: h.F, children: s })] });
}
var f = n(544105),
    g = n(652215),
    p = n(985018);
let A = "game_console_alert_modal",
    I = "game_console_ptt_alert_modal",
    T = {
        maybeShowPTTAlert(e) {
            if (_.Ay.getMode() !== g.TBI.PUSH_TO_TALK || (0, d.k8)(a.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [g.fg2.XBOX]: p.intl.string(p.t.bVZ7vy),
                [g.fg2.PLAYSTATION]: p.intl.string(p.t["6iqUsf"]),
                [g.fg2.PLAYSTATION_STAGING]: p.intl.string(p.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, d.Dr)(a.M.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          r = (e) =>
                              (0, i.jsx)(s.Modal, {
                                  ...e,
                                  title: t,
                                  subtitle: p.intl.string(p.t.bL21zs),
                                  actions: [{ text: p.intl.string(p.t.BddRzS), onClick: n }],
                              });
                      (0, o.hasModalOpen)(I)
                          ? (0, o.updateModal)(I, (e) => r(e))
                          : (0, o.openModalLazy)(async () => (e) => r(e), { modalKey: I });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: r, reconnectPlatformType: a } = e,
                d = (0, i.jsx)(m, { body: n, errorCodeMessage: r, dismissCallback: () => (0, o.closeModal)(A) });
            function _() {
                null != a &&
                    ((0, l.A)({ platformType: a }),
                    u.default.track(g.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: f.yM,
                        current_step: "desktop oauth",
                        platform_type: a,
                    }));
            }
            let c = (e) =>
                (0, i.jsx)(s.Modal, {
                    ...e,
                    title: t,
                    actions: [{ text: p.intl.string(p.t.BddRzS), onClick: _ }],
                    children: d,
                });
            (0, o.hasModalOpen)(A)
                ? (0, o.updateModal)(A, (e) => c(e))
                : (0, o.openModalLazy)(async () => (e) => c(e), { modalKey: A });
        },
    };
