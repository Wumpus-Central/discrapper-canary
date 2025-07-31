(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(66546),
    l = n(818405),
    c = n(587158),
    u = n(286379),
    d = n(442837),
    _ = n(481060),
    f = n(224706),
    p = n(13245),
    h = n(493773),
    m = n(797614),
    g = n(703656),
    E = n(594174),
    b = n(254761),
    y = n(70956),
    O = n(145597),
    v = n(41534),
    I = n(837268),
    T = n(333031),
    S = n(610394),
    A = n(380736),
    N = n(987650),
    C = n(981631),
    R = n(388032),
    P = n(138134);
function w(e, t, n) {
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
let D = o().throttle(
        () => {
            m.Z.increment(
                {
                    name: u.V.APP_CRASHED,
                    tags: ['reason:'.concat(l.v.UNHANDLED_JS_ERROR), 'level:'.concat(c.c.FATAL)]
                },
                !0
            );
        },
        100,
        { trailing: !1 }
    ),
    L = 10 * y.Z.Millis.SECOND;
function x(e) {
    var t, n;
    let { error: a, onLock: o, onReload: l, onDisable: c, onCrashDisabled: u } = e,
        f = i.useMemo(() => new s.SpringValue(1), []),
        m = i.useRef(null),
        [g, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        I = (0, d.e7)([E.default], () => E.default.getCurrentUser());
    (0, h.ZP)(
        () => (
            (m.current = setTimeout(T, L)),
            p.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: N.n0.OverlayCrashed }),
            () => {
                null != m.current && clearTimeout(m.current);
            }
        )
    );
    let T = i.useCallback(() => {
            (f.set(0), null != m.current && clearTimeout(m.current), (m.current = null), null == o || o(), null == u || u());
        }, [f, o, u]),
        w = i.useCallback(
            (e) => {
                O ||
                    (v(!0),
                    null == o || o(),
                    p.Z.track(
                        C.rMx.NOTIFICATION_CLICKED,
                        {
                            notif_type: N.n0.OverlayCrashed,
                            action_type: 'reload'
                        },
                        !0
                    ),
                    e.stopPropagation(),
                    setTimeout(() => (null == l ? void 0 : l()), 200));
            },
            [o, l, O]
        ),
        D = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? (y(!0), null != m.current && clearTimeout(m.current)) : y(!1));
            },
            [y]
        ),
        x = i.useCallback(
            (e) => {
                (e.stopPropagation(), null == o || o(), null == c || c());
            },
            [c, o]
        ),
        M = (0, d.e7)([S.ZP], () => S.ZP.getFocusedRunningGame()),
        k = g
            ? (0, r.jsxs)('div', {
                  children: [
                      (0, r.jsx)(_.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: R.intl.string(R.t.mn4eXF)
                      }),
                      (0, r.jsxs)('div', {
                          className: P.stackTraceCode,
                          children: [
                              (0, r.jsx)(_.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: a.message
                              }),
                              (0, r.jsx)(_.Text, {
                                  variant: 'text-xxs/normal',
                                  color: 'text-secondary',
                                  children: (0, r.jsx)('code', {
                                      className: P.code,
                                      children: (0, r.jsx)('pre', { children: a.stack })
                                  })
                              })
                          ]
                      })
                  ]
              })
            : null,
        j = g ? null : R.intl.string(R.t.oEJEFh),
        U = (null != (t = null == I ? void 0 : I.isStaff()) && t) || (null != (n = null == I ? void 0 : I.isStaffPersonal()) && n);
    return (0, r.jsx)(A.Y, {
        title: R.intl.string(R.t.U38qZm),
        body: k,
        hint: U ? j : void 0,
        confirmText: R.intl.string(R.t.a3HlgI),
        cancelText: null != M ? R.intl.string(R.t.qIYnPj) : void 0,
        icon: (0, r.jsx)(b.Z, {
            width: 40,
            height: 40,
            className: P.notificationIcon
        }),
        onNotificationClick: D,
        onConfirmClick: w,
        onCancelClick: null != M ? x : void 0,
        onDismissClick: o,
        expand: !0,
        locked: !0,
        notificationId: 'overlay-crashed',
        index: 0,
        status: C._1z.ACTIVE,
        containerRef: null,
        contentOpacity: f,
        className: P.errorNotificationContainer,
        wrapperClassName: P.errorNotificationWrapper
    });
}
class M extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, g.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, O.getPID)();
        (p.Z.setOverlayCrashed(r, e), p.Z.setInputLocked(!0, r));
        let i = (0, v.V6)(e, I.gl.OutOfProcess, {
            extra: {
                info: t,
                location: n
            }
        });
        (p.Z.track(C.rMx.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: 'fatal'
        }),
            D(),
            (this.pid = r));
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(T.Z, {
                      className: P.errorClickNotification,
                      children: (0, r.jsx)(x, {
                          error: n,
                          onLock: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : (0, O.getPID)();
                              (p.Z.setInputLocked(!0, t), this.setState({ showError: !1 }));
                          },
                          onDisable: () => {
                              let e = S.ZP.getFocusedRunningGame();
                              null != e && f.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : (0, O.getPID)();
                              (p.Z.updateOverlayState(t, I.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 }));
                          },
                          onReload: () => {
                              (p.Z.setReloadOverlay((0, O.getPID)()), this.setState({ showError: !1 }));
                          }
                      })
                  })
                : null
            : (0, r.jsx)('div', {
                  className: t,
                  children: e
              });
    }
    constructor(...e) {
        (super(...e),
            w(this, 'state', {
                error: null,
                showError: !0,
                info: null
            }),
            w(this, 'pid', null));
    }
}
let k = M;
