n.d(t, { Z: () => y }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(542094),
    o = n(895924),
    c = n(626135),
    s = n(499254),
    u = n(424602),
    d = n(541099),
    p = n(827498),
    m = n(160973),
    f = n(783097),
    h = n(890280),
    b = n(176412),
    C = n(981631),
    x = n(388032),
    _ = n(854408);
function y(e) {
    let { context: t, application: n, sectionName: y, primaryEntryPointCommand: v, buttonSize: N = l.PhG.MEDIUM, playSolo: g = !1 } = e,
        j = r.useId(),
        P = r.useCallback(() => {
            s.yT(p.ti.ACTIVITY);
        }, []),
        E = r.useCallback(() => {
            d.Z.shouldShowModal() && P();
        }, [P]),
        { submitting: A, wasSubmitting: I } = (0, h.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: j,
            onSubmissionComplete: P
        }),
        [O, S] = r.useState(!1),
        T = (0, a.Qv)({
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
            location: o.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: y,
            commandName: w,
            autoDismissOnClick: T === a.JS.LEAVE,
            launchingComponentId: j,
            submitting: null != I ? I : A,
            onConfirmActivityLaunchChecksAlertOpen: E,
            playSolo: !!L.altLayout && g
        }),
        { disabled: M, reason: D } = (0, m.Z)({
            context: t,
            application: n,
            activityAction: T
        }),
        W = L.enabled ? x.NW.string(x.t['1KxmJi']) : Z;
    return (0, i.jsx)(l.ua7, {
        shouldShow: null != D,
        tooltipContentClassName: _.tooltipContent,
        text: D,
        children: (e) => {
            var t,
                r,
                { onClick: a } = e,
                o = (function (e, t) {
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
                })({}, o)),
                (r = r =
                    {
                        type: 'submit',
                        size: N,
                        color: k,
                        disabled: M,
                        submitting: O,
                        onClick: () => {
                            S(!0),
                                R(),
                                null == a || a(),
                                c.default.track(C.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: p._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': x.NW.formatToPlainString(x.t['XjP/R0'], {
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
