n.d(t, { Z: () => b }), n(388685);
var l = n(255367),
    i = n(73800),
    r = n(481060),
    a = n(542094),
    o = n(895924),
    s = n(626135),
    c = n(499254),
    u = n(541099),
    d = n(827498),
    p = n(160973),
    m = n(783097),
    f = n(890280),
    h = n(176412),
    v = n(981631),
    y = n(388032),
    x = n(854408);
function b(e) {
    let { context: t, application: n, sectionName: b, primaryEntryPointCommand: g, buttonSize: j = r.PhG.MEDIUM } = e,
        N = i.useId(),
        C = i.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        E = i.useCallback(() => {
            u.Z.shouldShowModal() && C();
        }, [C]),
        { submitting: P, wasSubmitting: O } = (0, f.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: N,
            onSubmissionComplete: C
        }),
        [A, I] = i.useState(!1),
        _ = (0, a.Qv)({
            applicationId: n.id,
            context: t
        }),
        S = i.useMemo(() => (0, m.XZ)(g.displayName), [g.displayName]),
        {
            onActivityItemSelected: T,
            buttonColor: L,
            buttonText: R
        } = (0, h.P7)({
            context: t,
            application: n,
            location: o.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: b,
            commandName: S,
            autoDismissOnClick: _ === a.JS.LEAVE,
            launchingComponentId: N,
            submitting: null != O ? O : P,
            onConfirmActivityLaunchChecksAlertOpen: E
        }),
        { disabled: Z, reason: w } = (0, p.Z)({
            context: t,
            application: n,
            activityAction: _
        });
    return (0, l.jsx)(r.ua7, {
        shouldShow: null != w,
        tooltipContentClassName: x.tooltipContent,
        text: w,
        children: (e) => {
            var t,
                i,
                { onClick: a } = e,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                l,
                                i = {},
                                r = Object.keys(e);
                            for (l = 0; l < r.length; l++) (n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        for (l = 0; l < r.length; l++) (n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e, ['onClick']);
            return (0, l.jsx)(
                r.zxk,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, o)),
                (i = i =
                    {
                        type: 'submit',
                        size: j,
                        color: L,
                        disabled: Z,
                        submitting: A,
                        onClick: () => {
                            I(!0),
                                T(),
                                null == a || a(),
                                s.default.track(v.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: d._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': y.intl.formatToPlainString(y.t['XjP/R0'], {
                            buttonText: R,
                            applicationName: n.name
                        }),
                        children: R
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(i)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                      }),
                t)
            );
        }
    });
}
