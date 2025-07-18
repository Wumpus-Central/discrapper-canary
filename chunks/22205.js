(n.d(t, { Z: () => k }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(392711),
    o = n.n(a),
    s = n(42133),
    l = n(818405),
    c = n(587158),
    u = n(286379),
    d = n(442837),
    f = n(481060),
    _ = n(224706),
    p = n(13245),
    h = n(615287),
    m = n(493773),
    g = n(797614),
    E = n(703656),
    b = n(594174),
    y = n(254761),
    O = n(70956),
    v = n(145597),
    I = n(41534),
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
            g.Z.increment(
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
    L = 10 * O.Z.Millis.SECOND;
function x(e) {
    var t, n;
    let { error: a, onLock: o, onReload: l, onDisable: c, onCrashDisabled: u } = e,
        _ = i.useMemo(() => new s.SpringValue(1), []),
        h = i.useRef(null),
        [g, E] = i.useState(!1),
        [O, v] = i.useState(!1),
        I = (0, d.e7)([b.default], () => b.default.getCurrentUser());
    (0, m.ZP)(
        () => (
            (h.current = setTimeout(T, L)),
            p.Z.track(C.rMx.NOTIFICATION_VIEWED, { notif_type: N.n0.OverlayCrashed }),
            () => {
                null != h.current && clearTimeout(h.current);
            }
        )
    );
    let T = i.useCallback(() => {
            (_.set(0), null != h.current && clearTimeout(h.current), (h.current = null), null == o || o(), null == u || u());
        }, [_, o, u]),
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
                (e.stopPropagation(), e.shiftKey ? (E(!0), null != h.current && clearTimeout(h.current)) : E(!1));
            },
            [E]
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
                      (0, r.jsx)(f.Text, {
                          variant: 'text-md/semibold',
                          color: 'text-primary',
                          children: R.intl.string(R.t.mn4eXF)
                      }),
                      (0, r.jsxs)('div', {
                          className: P.stackTraceCode,
                          children: [
                              (0, r.jsx)(f.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-secondary',
                                  children: a.message
                              }),
                              (0, r.jsx)(f.Text, {
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
        icon: (0, r.jsx)(y.Z, {
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
        contentOpacity: _,
        className: P.errorNotificationContainer,
        wrapperClassName: P.errorNotificationWrapper
    });
}
class M extends i.PureComponent {
    componentDidCatch(e, t) {
        let n = (0, E.s1)().location;
        this.setState({
            error: e,
            info: t
        });
        let r = (0, v.getPID)();
        (p.Z.setOverlayCrashed(r, e), p.Z.setInputLocked(!0, r));
        let i = (0, I.V)(e, h.gl.OutOfProcess, {
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
                              let t = null != (e = this.pid) ? e : (0, v.getPID)();
                              (p.Z.setInputLocked(!0, t), this.setState({ showError: !1 }));
                          },
                          onDisable: () => {
                              let e = S.ZP.getFocusedRunningGame();
                              null != e && _.Z.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              var e;
                              let t = null != (e = this.pid) ? e : (0, v.getPID)();
                              (p.Z.updateOverlayState(t, h.mM.OVERLAY_CRASHED_DISABLED), this.setState({ showError: !1 }));
                          },
                          onReload: () => {
                              (p.Z.setReloadOverlay((0, v.getPID)()), this.setState({ showError: !1 }));
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
