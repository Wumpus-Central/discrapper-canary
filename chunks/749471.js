i.d(e, { A: () => C });
var n = i(627968);
i(64700);
var l = i(554146),
    a = i(298990),
    r = i(684013),
    s = i(429913),
    o = i(263577),
    u = i(826673),
    c = i(547463),
    d = i(46282),
    A = i(592598),
    f = i(395011),
    y = i(243612),
    p = i(119191),
    m = i(581730),
    I = i(672396),
    g = i(652215),
    E = i(360469),
    N = i(985018),
    _ = i(70617),
    T = i(881732);
function S(t) {
    let { game: e } = t,
        i = (0, s.h)(e.id);
    return null == i ? null : (0, n.jsx)(o.V, { src: i.getIconURL(E.iu.LARGE), size: 40 });
}
function C(t, e) {
    if (A.A.isNotificationDisabled(I.KS.WelcomeNudge)) return null;
    let { trackView: s, trackClick: o } = (0, m.Y9)(I.KS.WelcomeNudge, {
            notif_type: I.KS.WelcomeNudge,
            secondary_notif_types: e.map((t) => I.Jr[t.type]),
        }),
        E = {};
    for (let i of e)
        switch (i.type) {
            case I.Jr.WELCOME: {
                let e = (0, y.tg)(t?.altId ?? t?.id);
                null != e &&
                    ((E.cancelText = N.intl.string(N.t["6F9ivu"])),
                    (E.onCancelClick = (t, i) => {
                        o("unlock"),
                            r.A.updateNotificationStatus(i),
                            r.A.setInputLocked(!1, f.A.getTargetPID()),
                            (0, a.qf)(e, !1, g.BRT.POPOUT);
                    }));
                break;
            }
            case I.Jr.GO_LIVE_VOICE:
            case I.Jr.GO_LIVE_NON_VOICE: {
                let t = N.intl.string(N.t.U76Ft2),
                    e = (t) => {
                        let e = () => {
                                o("go-live-modal"), r.A.setInputLocked(!1, f.A.getTargetPID());
                            },
                            i = () => {
                                o("one-click-go-live");
                            };
                        (0, d.H)({
                            pid: f.A.getTargetPID(),
                            analyticsLocation: g.ThZ.OVERLAY_NUDGE,
                            allowOneClickGoLive: !0,
                            onBeforeShowModal: e,
                            onOneClickGoLive: i,
                            appContext: g.BRT.POPOUT,
                        });
                    };
                (E.confirmText = t),
                    (E.onConfirmClick = (t, i) => {
                        r.A.updateNotificationStatus(i), e(t);
                    });
                break;
            }
            case I.Jr.CONTENT_INVENTORY:
                (E.onNotificationShow = () => {
                    r.A.track(g.HAw.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: i.entries.map((t) => t.author_id),
                        entry_ids: i.entries.map((t) => t.id),
                    });
                }),
                    (E.renderFooter = () =>
                        (0, n.jsx)(c.ru, {
                            gamingId: t?.altId ?? t?.id,
                            maxUserShowCount: 5,
                            variant: "default",
                            className: T.kL,
                        }));
        }
    let C = (0, u.k8)(l.M.OVERLAY_OOP_WELCOME_NUX),
        h = N.intl.string(N.t.KWDIrh);
    return {
        icon: null != t ? (0, n.jsx)(S, { game: t }) : (0, n.jsx)("img", { src: i(513653), className: _.Kk, alt: "" }),
        title: h,
        hint: () => (0, p.sI)((0, m.Jn)(), N.t["z8/sgJ"], { highlightAdminWarningIfElevated: !0 }),
        ...E,
        onNotificationShow: (t) => {
            s(), C || (0, u.Dr)(l.M.OVERLAY_OOP_WELCOME_NUX), E.onNotificationShow?.(t);
        },
        onNotificationClick: (t, e) => {
            o("unlock"),
                r.A.setInputLocked(!1, f.A.getTargetPID()),
                C || (0, u.Dr)(l.M.OVERLAY_OOP_WELCOME_NUX),
                E.onNotificationClick?.(t, e);
        },
        onDismissClick: (t, e) => {
            o("dismiss"), C || (0, u.Dr)(l.M.OVERLAY_OOP_WELCOME_NUX), E.onDismissClick?.(t, e);
        },
    };
}
