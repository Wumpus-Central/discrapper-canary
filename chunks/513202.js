n.d(t, { Z: () => T }), n(388685);
var r = n(54381);
n(473749);
var i = n(793030),
    a = n(481060),
    o = n(570140),
    s = n(522474),
    l = n(788983),
    c = n(359110),
    u = n(636449),
    d = n(566620),
    f = n(287545),
    p = n(317381),
    _ = n(16609),
    m = n(318891),
    h = n(719296),
    g = n(918559),
    E = n(981631),
    b = n(388032);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
let v = !1,
    S = !1;
class I extends f.Z {
    _initialize() {
        super._initialize(),
            s.Z.addChangeListener(this.handlePopoutWindowUpdate),
            o.Z.subscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    _terminate() {
        super._terminate(),
            s.Z.removeChangeListener(this.handlePopoutWindowUpdate),
            o.Z.unsubscribe("POPOUT_WINDOW_OPEN", this.handlePopoutWindowOpen);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, a.ZDy)(
            async () => (e) =>
                (0, r.jsx)(
                    i.Modal,
                    O(
                        {
                            title: b.intl.formatToPlainString(b.t.hbiAO6, { code: t }),
                            subtitle: n,
                            actions: [
                                {
                                    text: b.intl.string(b.t.BddRzS),
                                    onClick: e.onClose,
                                    variant: "primary",
                                },
                            ],
                        },
                        e,
                    ),
                ),
        );
    }
    showLaunchErrorModal(e) {
        (0, a.ZDy)(
            async () => (t) =>
                (0, r.jsx)(
                    i.Modal,
                    O(
                        {
                            title: b.intl.string(b.t.PtobXW),
                            subtitle: e,
                            actions: [
                                {
                                    text: b.intl.string(b.t.BddRzS),
                                    onClick: t.onClose,
                                    variant: "primary",
                                },
                            ],
                        },
                        t,
                    ),
                ),
        );
    }
    showDevShelfOverrideEnabled() {
        (0, a.showToast)((0, a.createToast)(b.intl.string(b.t.JfA7IK), a.ToastType.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: r, shouldClosePopout: i = !0 } = e;
        o.Z.wait(() => {
            (0, d.mW)({
                location: t,
                applicationId: n,
                showFeedback: r,
            });
        }),
            (0, u.R)() && i && (0, l.close)(E.KJ3.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            r = (0, h.Z)(t.id, n);
        (0, m.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            y(this, "handleRPCDisconnect", (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n,
                });
            }),
            y(this, "handlePopoutWindowOpen", (e) => {
                let { key: t } = e;
                t === E.KJ3.ACTIVITY_POPOUT && (S = !1);
            }),
            y(this, "popInActivity", () => {
                (S = !0), l.close(E.KJ3.ACTIVITY_POPOUT);
                let e = p.ZP.getCurrentEmbeddedActivity();
                if (null != e) {
                    let t = (0, _.p)(e.location);
                    null != t && (0, c.Kh)(t), (0, d.tg)(g.Ez.PANEL);
                }
            }),
            y(this, "handlePopoutWindowUpdate", () => {
                let e = v,
                    t = s.Z.getWindowOpen(E.KJ3.ACTIVITY_POPOUT);
                if (e && !t && !S) {
                    let e = p.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            location: e.location,
                            applicationId: e.applicationId,
                        });
                }
                v = t;
            });
    }
}
let T = new I();
