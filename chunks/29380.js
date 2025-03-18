n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
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
    v = n(981631),
    y = n(388032),
    b = n(486320);
function N(e) {
    let { context: t, application: n, sectionName: N, primaryEntryPointCommand: g, buttonSize: x = r.PhG.MEDIUM } = e,
        j = l.useId(),
        E = l.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        P = l.useCallback(() => {
            u.Z.shouldShowModal() && E();
        }, [E]),
        { submitting: C, wasSubmitting: O } = (0, f.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: j,
            onSubmissionComplete: E
        }),
        [A, I] = l.useState(!1),
        _ = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        S = l.useMemo(() => (0, m.XZ)(g.displayName), [g.displayName]),
        {
            onActivityItemSelected: T,
            buttonColor: L,
            buttonText: Z
        } = (0, h.P7)({
            context: t,
            application: n,
            location: a.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: N,
            commandName: S,
            autoDismissOnClick: _ === o.JS.LEAVE,
            launchingComponentId: j,
            submitting: null != O ? O : C,
            onConfirmActivityLaunchChecksAlertOpen: P
        }),
        { disabled: R, reason: w } = (0, p.Z)({
            context: t,
            application: n,
            activityAction: _
        });
    return (0, i.jsx)(r.ua7, {
        shouldShow: null != w,
        tooltipContentClassName: b.tooltipContent,
        text: w,
        children: (e) => {
            var t,
                l,
                { onClick: o } = e,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                i,
                                l = {},
                                r = Object.keys(e);
                            for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < r.length; i++) (n = r[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    }
                    return l;
                })(e, ['onClick']);
            return (0, i.jsx)(
                r.zxk,
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
                (l = l =
                    {
                        type: 'submit',
                        size: x,
                        color: L,
                        disabled: R,
                        submitting: A,
                        onClick: () => {
                            I(!0),
                                T(),
                                null == o || o(),
                                s.default.track(v.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: d._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': y.NW.formatToPlainString(y.t['XjP/R0'], {
                            buttonText: Z,
                            applicationName: n.name
                        }),
                        children: Z
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                t)
            );
        }
    });
}
