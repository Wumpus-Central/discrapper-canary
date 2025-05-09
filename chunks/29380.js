n.d(t, { Z: () => v }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(542094),
    a = n(895924),
    c = n(626135),
    s = n(499254),
    u = n(541099),
    d = n(827498),
    p = n(160973),
    m = n(783097),
    f = n(890280),
    h = n(176412),
    b = n(981631),
    _ = n(388032),
    C = n(854408);
function v(e) {
    let { context: t, application: n, sectionName: v, primaryEntryPointCommand: x, buttonSize: y = l.PhG.MEDIUM } = e,
        g = r.useId(),
        N = r.useCallback(() => {
            s.yT(d.ti.ACTIVITY);
        }, []),
        j = r.useCallback(() => {
            u.Z.shouldShowModal() && N();
        }, [N]),
        { submitting: P, wasSubmitting: E } = (0, f.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: g,
            onSubmissionComplete: N
        }),
        [A, I] = r.useState(!1),
        O = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        S = r.useMemo(() => (0, m.XZ)(x.displayName), [x.displayName]),
        {
            onActivityItemSelected: T,
            buttonColor: L,
            buttonText: R
        } = (0, h.P7)({
            context: t,
            application: n,
            location: a.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: v,
            commandName: S,
            autoDismissOnClick: O === o.JS.LEAVE,
            launchingComponentId: g,
            submitting: null != E ? E : P,
            onConfirmActivityLaunchChecksAlertOpen: j
        }),
        { disabled: w, reason: Z } = (0, p.Z)({
            context: t,
            application: n,
            activityAction: O
        });
    return (0, i.jsx)(l.ua7, {
        shouldShow: null != Z,
        tooltipContentClassName: C.tooltipContent,
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
                        size: y,
                        color: L,
                        disabled: w,
                        submitting: A,
                        onClick: () => {
                            I(!0),
                                T(),
                                null == o || o(),
                                c.default.track(b.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: d._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': _.intl.formatToPlainString(_.t['XjP/R0'], {
                            buttonText: R,
                            applicationName: n.name
                        }),
                        children: R
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
