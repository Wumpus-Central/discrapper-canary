(n.d(t, { Z: () => g }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(755721),
    a = n(481060),
    o = n(542094),
    s = n(895924),
    c = n(626135),
    u = n(499254),
    d = n(541099),
    p = n(827498),
    m = n(160973),
    f = n(783097),
    h = n(890280),
    v = n(176412),
    y = n(981631),
    x = n(388032),
    b = n(854408);
function g(e) {
    let { context: t, application: n, sectionName: g, primaryEntryPointCommand: j, buttonSize: N = r.Ph.MEDIUM } = e,
        C = i.useId(),
        E = i.useCallback(() => {
            u.yT(p.ti.ACTIVITY);
        }, []),
        P = i.useCallback(() => {
            d.Z.shouldShowModal() && E();
        }, [E]),
        { submitting: O, wasSubmitting: A } = (0, h.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: C,
            onSubmissionComplete: E
        }),
        [I, _] = i.useState(!1),
        S = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        T = i.useMemo(() => (0, f.XZ)(j.displayName), [j.displayName]),
        {
            onActivityItemSelected: L,
            buttonColor: R,
            buttonText: Z
        } = (0, v.P7)({
            context: t,
            application: n,
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: g,
            commandName: T,
            autoDismissOnClick: S === o.JS.LEAVE,
            launchingComponentId: C,
            submitting: null != A ? A : O,
            onConfirmActivityLaunchChecksAlertOpen: P
        }),
        { disabled: w, reason: k } = (0, m.Z)({
            context: t,
            application: n,
            activityAction: S
        });
    return (0, l.jsx)(a.ua7, {
        shouldShow: null != k,
        tooltipContentClassName: b.tooltipContent,
        text: k,
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
                            for (l = 0; l < r.length; l++) ((n = r[l]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        for (l = 0; l < r.length; l++) ((n = r[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                    }
                    return i;
                })(e, ['onClick']);
            return (0, l.jsx)(
                r.zx,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                ((l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l));
                            }));
                    }
                    return e;
                })({}, o)),
                (i = i =
                    {
                        type: 'submit',
                        size: N,
                        color: R,
                        disabled: w,
                        submitting: I,
                        onClick: () => {
                            (_(!0),
                                L(),
                                null == a || a(),
                                c.default.track(y.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: p._y.USE_APP_COMMAND
                                }));
                        },
                        'aria-label': x.intl.formatToPlainString(x.t['XjP/R0'], {
                            buttonText: Z,
                            applicationName: n.name
                        }),
                        children: Z
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
