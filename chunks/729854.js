"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    a = n(189213),
    s = n(554146),
    l = n(192308),
    o = n(968309),
    d = n(826673),
    c = n(451409),
    u = n(174459),
    _ = n(17928),
    E = n(643501),
    A = n(37256);
function h(e) {
    let { body: t, dismissCallback: n, errorCodeMessage: a } = e,
        s = (0, _.bG)([E.default], () => E.default.getRemoteSessionId());
    return (r.useEffect(() => {
        null != s && n();
    }, [s, n]),
    null == a)
        ? t
        : (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)("div", { className: A.F, children: a })] });
}
var I = n(544105),
    f = n(652215),
    p = n(375708);
let T = "game_console_alert_modal",
    m = "game_console_ptt_alert_modal",
    g = {
        maybeShowPTTAlert(e) {
            if (c.Ay.getMode() !== f.TBI.PUSH_TO_TALK || (0, d.k8)(s.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [f.fg2.XBOX]: p.intl.string(p.t.bVZ7vy),
                [f.fg2.PLAYSTATION]: p.intl.string(p.t["6iqUsf"]),
                [f.fg2.PLAYSTATION_STAGING]: p.intl.string(p.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      function n() {
                          (0, d.Dr)(s.M.CONSOLE_PTT_DISABLE_ALERT), e();
                      }
                      let r = (e) =>
                          (0, i.jsx)(a.Modal, {
                              ...e,
                              title: t,
                              subtitle: p.intl.string(p.t.bL21zs),
                              actions: [{ text: p.intl.string(p.t.BddRzS), onClick: n }],
                          });
                      (0, l.hasModalOpen)(m)
                          ? (0, l.updateModal)(m, (e) => r(e))
                          : (0, l.openModalLazy)(async () => (e) => r(e), { modalKey: m });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: r, reconnectPlatformType: s } = e,
                d = (0, i.jsx)(h, { body: n, errorCodeMessage: r, dismissCallback: () => (0, l.closeModal)(T) });
            function c() {
                null != s &&
                    ((0, o.A)({ platformType: s }),
                    u.default.track(f.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: I.yM,
                        current_step: "desktop oauth",
                        platform_type: s,
                    }));
            }
            function _(e) {
                return (0, i.jsx)(a.Modal, {
                    ...e,
                    title: t,
                    actions: [{ text: p.intl.string(p.t.BddRzS), onClick: c }],
                    children: d,
                });
            }
            (0, l.hasModalOpen)(T)
                ? (0, l.updateModal)(T, (e) => _(e))
                : (0, l.openModalLazy)(async () => (e) => _(e), { modalKey: T });
        },
    };
