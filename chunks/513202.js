n.d(t, { Z: () => O }), n(388685);
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(570140),
    o = n(468026),
    s = n(522474),
    l = n(788983),
    c = n(636449),
    u = n(566620),
    d = n(287545),
    f = n(317381),
    _ = n(318891),
    p = n(719296),
    h = n(981631),
    m = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
let b = !1;
class y extends d.Z {
    _initialize() {
        super._initialize(), s.Z.addChangeListener(this.handlePopoutWindowUpdate);
    }
    _terminate() {
        super._terminate(), s.Z.removeChangeListener(this.handlePopoutWindowUpdate);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, i.ZDy)(
            async () => (e) =>
                (0, r.jsx)(
                    o.default,
                    E(
                        {
                            title: m.intl.formatToPlainString(m.t.hbiAOz, { code: t }),
                            body: n
                        },
                        e
                    )
                )
        );
    }
    showLaunchErrorModal(e) {
        (0, i.ZDy)(
            async () => (t) =>
                (0, r.jsx)(
                    o.default,
                    E(
                        {
                            title: m.intl.string(m.t.PtobXV),
                            body: e
                        },
                        t
                    )
                )
        );
    }
    showDevShelfOverrideEnabled() {
        (0, i.showToast)((0, i.createToast)(m.intl.string(m.t.JfA7IC), i.ToastType.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: r, shouldClosePopout: i = !0 } = e;
        a.Z.wait(() => {
            (0, u.mW)({
                location: t,
                applicationId: n,
                showFeedback: r
            });
        }),
            (0, c.R)() && i && (0, l.xv)(h.KJ3.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            r = (0, p.Z)(t.id, n);
        (0, _.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            g(this, 'handleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                });
            }),
            g(this, 'handlePopoutWindowUpdate', () => {
                let e = b,
                    t = s.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT);
                if (e && !t) {
                    let e = f.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            location: e.location,
                            applicationId: e.applicationId
                        });
                }
                b = t;
            });
    }
}
let O = new y();
