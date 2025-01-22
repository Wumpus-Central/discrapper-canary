var i = r(200651);
r(192379);
var a = r(704215),
    o = r(952265),
    s = r(468026),
    l = r(231757),
    u = r(605236),
    c = r(131951),
    d = r(626135),
    f = r(542238),
    p = r(927923),
    h = r(981631),
    _ = r(388032),
    m = r(902406);
let g = 'game_console_alert_modal',
    E = 'game_console_ptt_alert_modal';
n.Z = {
    maybeShowPTTAlert(e) {
        if (c.Z.getMode() !== h.pM4.PUSH_TO_TALK || (0, u.un)(a.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
        let n = {
            [h.ABu.XBOX]: _.intl.string(_.t.bVZ7v7),
            [h.ABu.PLAYSTATION]: _.intl.string(_.t['6iqUsb']),
            [h.ABu.PLAYSTATION_STAGING]: _.intl.string(_.t['6iqUsb'])
        }[e];
        return null == n
            ? Promise.resolve()
            : new Promise((e) => {
                  let r = () => {
                          (0, u.EW)(a.z.CONSOLE_PTT_DISABLE_ALERT), e();
                      },
                      l = (e) =>
                          (0, i.jsx)(s.default, {
                              ...e,
                              title: n,
                              body: _.intl.string(_.t.bL21zs),
                              onConfirm: r,
                              titleClassName: m.title
                          });
                  (0, o.nf)(E) ? (0, o.o)(E, l) : (0, o.h7)(l, { modalKey: E });
              });
    },
    showSelfDismissableAlert(e) {
        let { title: n, body: r, errorCodeMessage: a, reconnectPlatformType: u } = e,
            c = (0, i.jsx)(f.t, {
                body: r,
                errorCodeMessage: a,
                dismissCallback: () => (0, o.Mr)(g)
            });
        function _() {
            null != u &&
                ((0, l.Z)({ platformType: u }),
                d.default.track(h.rMx.ACCOUNT_LINK_STEP, {
                    previous_step: p.Lw,
                    current_step: 'desktop oauth',
                    platform_type: u
                }));
        }
        let m = (e) =>
            (0, i.jsx)(s.default, {
                ...e,
                title: n,
                body: c,
                onConfirm: _
            });
        (0, o.nf)(g) ? (0, o.o)(g, m) : (0, o.h7)(m, { modalKey: g });
    }
};
