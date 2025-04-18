n.d(t, { Z: () => O }), n(388685);
var r = n(200651);
n(192379);
var i = n(252258),
    a = n(481060),
    o = n(570140),
    s = n(468026),
    l = n(522474),
    c = n(788983),
    u = n(636449),
    d = n(566620),
    f = n(287545),
    _ = n(317381),
    p = n(318891),
    h = n(719296),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
let y = !1;
class v extends f.Z {
    _initialize() {
        super._initialize(), l.Z.addChangeListener(this.handlePopoutWindowUpdate);
    }
    _terminate() {
        super._terminate(), l.Z.removeChangeListener(this.handlePopoutWindowUpdate);
    }
    showErrorModal(e) {
        let { code: t, message: n } = e;
        (0, a.ZDy)(
            async () => (e) =>
                (0, r.jsx)(
                    s.default,
                    b(
                        {
                            title: g.NW.formatToPlainString(g.t.hbiAOz, { code: t }),
                            body: n
                        },
                        e
                    )
                )
        );
    }
    showLaunchErrorModal(e) {
        (0, a.ZDy)(
            async () => (t) =>
                (0, r.jsx)(
                    s.default,
                    b(
                        {
                            title: g.NW.string(g.t.PtobXV),
                            body: e
                        },
                        t
                    )
                )
        );
    }
    showDevShelfOverrideEnabled() {
        (0, a.showToast)((0, a.createToast)(g.NW.string(g.t.JfA7IC), a.ToastType.SUCCESS));
    }
    leaveActivity(e) {
        let { location: t, applicationId: n, showFeedback: r, shouldClosePopout: a = !0 } = e;
        o.Z.wait(() => {
            (0, d.mW)({
                location: t,
                applicationId: n,
                showFeedback: r
            });
        }),
            (0, u.R)({ isContextless: t.kind === i.E.CONTEXTLESS }) && a && (0, c.xv)(m.KJ3.ACTIVITY_POPOUT);
    }
    hidePIPEmbed(e) {
        let { location: t, applicationId: n } = e,
            r = (0, h.Z)(t.id, n);
        (0, p.RI)(r);
    }
    releaseWebView() {}
    constructor(...e) {
        super(...e),
            E(this, 'handleRPCDisconnect', (e) => {
                let { reason: t, application: n } = e;
                this.superHandleRPCDisconnect({
                    reason: t,
                    application: n
                });
            }),
            E(this, 'handlePopoutWindowUpdate', () => {
                let e = y,
                    t = l.Z.getWindowOpen(m.KJ3.ACTIVITY_POPOUT);
                if (e && !t) {
                    let e = _.ZP.getCurrentEmbeddedActivity();
                    null != e &&
                        this.leaveActivity({
                            location: e.location,
                            applicationId: e.applicationId
                        });
                }
                y = t;
            });
    }
}
let O = new v();
