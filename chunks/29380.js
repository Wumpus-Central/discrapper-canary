(n.d(t, { Z: () => j }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(755721),
    a = n(481060),
    o = n(542094),
    s = n(895924),
    c = n(813370),
    u = n(626135),
    d = n(499254),
    p = n(541099),
    m = n(827498),
    f = n(160973),
    h = n(783097),
    v = n(890280),
    y = n(176412),
    x = n(981631),
    b = n(388032),
    g = n(854408);
function j(e) {
    let { context: t, application: n, sectionName: j, primaryEntryPointCommand: N, buttonSize: C = r.Ph.MEDIUM } = e,
        E = i.useId(),
        P = i.useCallback(() => {
            d.yT(m.ti.ACTIVITY);
        }, []),
        O = i.useCallback(() => {
            p.Z.shouldShowModal() && P();
        }, [P]),
        { submitting: A, wasSubmitting: I } = (0, v.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: E,
            onSubmissionComplete: P
        }),
        [_, S] = i.useState(!1),
        T = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        L = i.useMemo(() => (0, h.XZ)(N.displayName), [N.displayName]),
        {
            onActivityItemSelected: R,
            buttonColor: Z,
            buttonText: w
        } = (0, y.P7)({
            context: t,
            application: n,
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: j,
            commandName: L,
            autoDismissOnClick: T === o.JS.LEAVE || (0, c.g)(n),
            launchingComponentId: E,
            submitting: null != I ? I : A,
            onConfirmActivityLaunchChecksAlertOpen: O
        }),
        { disabled: k, reason: M } = (0, f.Z)({
            context: t,
            application: n,
            activityAction: T
        });
    return (0, l.jsx)(a.ua7, {
        shouldShow: null != M,
        tooltipContentClassName: g.tooltipContent,
        text: M,
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
                        size: C,
                        color: Z,
                        disabled: k,
                        submitting: _,
                        onClick: () => {
                            (S(!0),
                                R(),
                                null == a || a(),
                                u.default.track(x.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: m._y.USE_APP_COMMAND
                                }));
                        },
                        'aria-label': b.intl.formatToPlainString(b.t['XjP/R0'], {
                            buttonText: w,
                            applicationName: n.name
                        }),
                        children: w
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
