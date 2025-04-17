n.d(t, { Z: () => C }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(542094),
    a = n(895924),
    s = n(626135),
    c = n(499254),
    u = n(424602),
    d = n(541099),
    p = n(827498),
    m = n(160973),
    f = n(783097),
    h = n(890280),
    b = n(176412),
    _ = n(981631),
    y = n(388032),
    x = n(854408);
function C(e) {
    let { context: t, application: n, sectionName: C, primaryEntryPointCommand: v, buttonSize: g = l.PhG.MEDIUM, playSolo: N = !1 } = e,
        j = r.useId(),
        P = r.useCallback(() => {
            c.yT(p.ti.ACTIVITY);
        }, []),
        O = r.useCallback(() => {
            d.Z.shouldShowModal() && P();
        }, [P]),
        { submitting: E, wasSubmitting: A } = (0, h.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: j,
            onSubmissionComplete: P
        }),
        [I, S] = r.useState(!1),
        T = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        L = u.PM.useExperiment({ location: 'AppPrimaryEntryPointButton()' }),
        w = r.useMemo(() => (0, f.XZ)(v.displayName), [v.displayName]),
        {
            onActivityItemSelected: R,
            buttonColor: k,
            buttonText: Z
        } = (0, b.P7)({
            context: t,
            application: n,
            location: a.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: C,
            commandName: w,
            autoDismissOnClick: T === o.JS.LEAVE,
            launchingComponentId: j,
            submitting: null != A ? A : E,
            onConfirmActivityLaunchChecksAlertOpen: O,
            playSolo: !!L.altLayout && N
        }),
        { disabled: M, reason: D } = (0, m.Z)({
            context: t,
            application: n,
            activityAction: T
        }),
        W = L.enabled ? y.NW.string(y.t['1KxmJi']) : Z;
    return (0, i.jsx)(l.ua7, {
        shouldShow: null != D,
        tooltipContentClassName: x.tooltipContent,
        text: D,
        children: (e) => {
            var t,
                r,
                { onClick: o } = e,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                r = {},
                                l = Object.keys(e);
                            for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < l.length; i++) (n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    }
                    return r;
                })(e, ['onClick']);
            return (0, i.jsx)(
                l.zxk,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, a)),
                (r = r =
                    {
                        type: 'submit',
                        size: g,
                        color: k,
                        disabled: M,
                        submitting: I,
                        onClick: () => {
                            S(!0),
                                R(),
                                null == o || o(),
                                s.default.track(_.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: p._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': y.NW.formatToPlainString(y.t['XjP/R0'], {
                            buttonText: W,
                            applicationName: n.name
                        }),
                        children: W
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            );
        }
    });
}
