n.d(t, { A: () => g });
var i = n(477900),
    r = n(582128),
    a = n(554146),
    s = n(192308),
    l = n(189213),
    o = n(968309),
    d = n(826673),
    c = n(360906),
    u = n(174459),
    _ = n(17928),
    E = n(643501),
    A = n(464251);
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
var f = n(544105),
    I = n(652215),
    p = n(105292);
let T = "game_console_alert_modal",
    m = "game_console_ptt_alert_modal",
    g = {
        maybeShowPTTAlert(e) {
            if (c.Ay.getMode() !== I.TBI.PUSH_TO_TALK || (0, d.k8)(a.M.CONSOLE_PTT_DISABLE_ALERT))
                return Promise.resolve();
            let t = {
                [I.fg2.XBOX]: p.intl.string(p.t.bVZ7vy),
                [I.fg2.PLAYSTATION]: p.intl.string(p.t["6iqUsf"]),
                [I.fg2.PLAYSTATION_STAGING]: p.intl.string(p.t["6iqUsf"]),
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      function n() {
                          ((0, d.Dr)(a.M.CONSOLE_PTT_DISABLE_ALERT), e());
                      }
                      function r(e) {
                          return (0, i.jsx)(l.a, {
                              ...e,
                              title: t,
                              subtitle: p.intl.string(p.t.bL21zs),
                              actions: [{ text: p.intl.string(p.t.BddRzS), onClick: n }],
                          });
                      }
                      (0, s.hasModalOpen)(m)
                          ? (0, s.updateModal)(m, (e) => r(e))
                          : (0, s.openModalLazy)(async () => (e) => r(e), { modalKey: m });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: r, reconnectPlatformType: a } = e,
                d = (0, i.jsx)(h, { body: n, errorCodeMessage: r, dismissCallback: () => (0, s.closeModal)(T) });
            function c() {
                null != a &&
                    ((0, o.A)({ platformType: a }),
                    u.default.track(I.HAw.ACCOUNT_LINK_STEP, {
                        previous_step: f.yM,
                        current_step: "desktop oauth",
                        platform_type: a,
                    }));
            }
            function _(e) {
                return (0, i.jsx)(l.a, {
                    ...e,
                    title: t,
                    actions: [{ text: p.intl.string(p.t.BddRzS), onClick: c }],
                    children: d,
                });
            }
            (0, s.hasModalOpen)(T)
                ? (0, s.updateModal)(T, (e) => _(e))
                : (0, s.openModalLazy)(async () => (e) => _(e), { modalKey: T });
        },
    };
