n.d(t, { Z: () => y }), n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(570140),
    s = n(468026),
    o = n(522474),
    l = n(788983),
    u = n(636449),
    c = n(566620),
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
let E = !1;
class v extends d.Z {
    _initialize() {
        super._initialize(), o.Z.addChangeListener(this.handlePopoutWindowUpdate);
    }
    _terminate() {
        super._terminate(), o.Z.removeChangeListener(this.handlePopoutWindowUpdate);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, r.ZDy)(
            async () => (e) =>
                (0, i.jsx)(s.default, {
                    title: m.intl.formatToPlainString(m.t.hbiAOz, { code: t }),
                    body: n,
                    ...e
                })
        );
    }
    showLaunchErrorModal(e) {
        (0, r.ZDy)(
            async () => (t) =>
                (0, i.jsx)(s.default, {
                    title: m.intl.string(m.t.PtobXV),
                    body: e,
                    ...t
                })
        );
    }
    showDevShelfOverrideEnabled() {
        (0, r.showToast)((0, r.createToast)(m.intl.string(m.t.JfA7IC), r.ToastType.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: i } = e;
        a.Z.wait(() => {
            (0, c.mW)({
                location: t,
                applicationId: n,
                showFeedback: i
            });
        }),
            (0, u.R)() && (0, l.xv)(h.KJ3.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            i = (0, p.Z)(t.id, n);
        (0, _.RI)(i);
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
                let e = E,
                    t = o.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT);
                if (e && !t) {
                    let e = f.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            location: e.location,
                            applicationId: e.applicationId
                        });
                }
                E = t;
            });
    }
}
let y = new v();
