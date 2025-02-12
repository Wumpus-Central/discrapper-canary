n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(704215),
    a = n(952265),
    s = n(468026),
    o = n(231757),
    l = n(605236),
    u = n(131951),
    c = n(626135),
    d = n(542238),
    f = n(927923),
    _ = n(981631),
    p = n(388032),
    h = n(487937);
let m = 'game_console_alert_modal',
    g = 'game_console_ptt_alert_modal',
    E = {
        maybeShowPTTAlert(e) {
            if (u.Z.getMode() !== _.pM4.PUSH_TO_TALK || (0, l.un)(r.z.CONSOLE_PTT_DISABLE_ALERT)) return Promise.resolve();
            let t = {
                [_.ABu.XBOX]: p.intl.string(p.t.bVZ7v7),
                [_.ABu.PLAYSTATION]: p.intl.string(p.t['6iqUsb']),
                [_.ABu.PLAYSTATION_STAGING]: p.intl.string(p.t['6iqUsb'])
            }[e];
            return null == t
                ? Promise.resolve()
                : new Promise((e) => {
                      let n = () => {
                              (0, l.EW)(r.z.CONSOLE_PTT_DISABLE_ALERT), e();
                          },
                          o = (e) =>
                              (0, i.jsx)(s.default, {
                                  ...e,
                                  title: t,
                                  body: p.intl.string(p.t.bL21zs),
                                  onConfirm: n,
                                  titleClassName: h.title
                              });
                      (0, a.nf)(g) ? (0, a.o)(g, o) : (0, a.h7)(o, { modalKey: g });
                  });
        },
        showSelfDismissableAlert(e) {
            let { title: t, body: n, errorCodeMessage: r, reconnectPlatformType: l } = e,
                u = (0, i.jsx)(d.t, {
                    body: n,
                    errorCodeMessage: r,
                    dismissCallback: () => (0, a.Mr)(m)
                });
            function p() {
                null != l &&
                    ((0, o.Z)({ platformType: l }),
                    c.default.track(_.rMx.ACCOUNT_LINK_STEP, {
                        previous_step: f.Lw,
                        current_step: 'desktop oauth',
                        platform_type: l
                    }));
            }
            let h = (e) =>
                (0, i.jsx)(s.default, {
                    ...e,
                    title: t,
                    body: u,
                    onConfirm: p
                });
            (0, a.nf)(m) ? (0, a.o)(m, h) : (0, a.h7)(h, { modalKey: m });
        }
    };
