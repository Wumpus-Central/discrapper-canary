var i = r(200651);
r(192379);
var a = r(704215),
    s = r(952265),
    o = r(468026),
    l = r(231757),
    u = r(605236),
    c = r(131951),
    d = r(626135),
    f = r(542238),
    _ = r(927923),
    h = r(981631),
    p = r(388032),
    m = r(902406);
let g = 'game_console_alert_modal',
    E = 'game_console_ptt_alert_modal';
n.Z = {
    maybeShowPTTAlert(e) {
        if (c.Z.getMode() !== h.pM4.PUSH_TO_TALK || (0, u.un)(a.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
        let n = {
            [h.ABu.XBOX]: p.intl.string(p.t.bVZ7v7),
            [h.ABu.PLAYSTATION]: p.intl.string(p.t['6iqUsb']),
            [h.ABu.PLAYSTATION_STAGING]: p.intl.string(p.t['6iqUsb'])
        }[e];
        return null == n
            ? Promise.resolve()
            : new Promise((e) => {
                  let r = () => {
                          (0, u.EW)(a.z.CONSOLE_PTT_DISABLE_ALERT), e();
                      },
                      l = (e) =>
                          (0, i.jsx)(o.default, {
                              ...e,
                              title: n,
                              body: p.intl.string(p.t.bL21zs),
                              onConfirm: r,
                              titleClassName: m.title
                          });
                  (0, s.nf)(E) ? (0, s.o)(E, l) : (0, s.h7)(l, { modalKey: E });
              });
    },
    showSelfDismissableAlert(e) {
        let { title: n, body: r, errorCodeMessage: a, reconnectPlatformType: u } = e,
            c = (0, i.jsx)(f.t, {
                body: r,
                errorCodeMessage: a,
                dismissCallback: () => (0, s.Mr)(g)
            });
        function p() {
            null != u &&
                ((0, l.Z)({ platformType: u }),
                d.default.track(h.rMx.ACCOUNT_LINK_STEP, {
                    previous_step: _.Lw,
                    current_step: 'desktop oauth',
                    platform_type: u
                }));
        }
        let m = (e) =>
            (0, i.jsx)(o.default, {
                ...e,
                title: n,
                body: c,
                onConfirm: p
            });
        (0, s.nf)(g) ? (0, s.o)(g, m) : (0, s.h7)(m, { modalKey: g });
    }
};
