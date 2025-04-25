n.d(t, { Z: () => v }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(542094),
    a = n(895924),
    s = n(626135),
    c = n(499254),
    u = n(541099),
    d = n(827498),
    p = n(160973),
    m = n(783097),
    f = n(890280),
    h = n(176412),
    b = n(981631),
    _ = n(388032),
    y = n(854408);
function v(e) {
    let { context: t, application: n, sectionName: v, primaryEntryPointCommand: x, buttonSize: C = l.PhG.MEDIUM } = e,
        g = r.useId(),
        j = r.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        P = r.useCallback(() => {
            u.Z.shouldShowModal() && j();
        }, [j]),
        { submitting: N, wasSubmitting: O } = (0, f.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: g,
            onSubmissionComplete: j
        }),
        [E, A] = r.useState(!1),
        I = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        S = r.useMemo(() => (0, m.XZ)(x.displayName), [x.displayName]),
        {
            onActivityItemSelected: T,
            buttonColor: w,
            buttonText: L
        } = (0, h.P7)({
            context: t,
            application: n,
            location: a.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: v,
            commandName: S,
            autoDismissOnClick: I === o.JS.LEAVE,
            launchingComponentId: g,
            submitting: null != O ? O : N,
            onConfirmActivityLaunchChecksAlertOpen: P
        }),
        { disabled: R, reason: Z } = (0, p.Z)({
            context: t,
            application: n,
            activityAction: I
        });
    return (0, i.jsx)(l.ua7, {
        shouldShow: null != Z,
        tooltipContentClassName: y.tooltipContent,
        text: Z,
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
                        size: C,
                        color: w,
                        disabled: R,
                        submitting: E,
                        onClick: () => {
                            A(!0),
                                T(),
                                null == o || o(),
                                s.default.track(b.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: d._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': _.intl.formatToPlainString(_.t['XjP/R0'], {
                            buttonText: L,
                            applicationName: n.name
                        }),
                        children: L
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
