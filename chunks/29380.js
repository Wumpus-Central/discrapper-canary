n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(542094),
    a = n(895924),
    s = n(626135),
    c = n(499254),
    u = n(827498),
    d = n(160973),
    m = n(783097),
    p = n(890280),
    h = n(176412),
    f = n(981631),
    v = n(388032),
    N = n(334565);
function x(e) {
    let { context: t, application: n, sectionName: x, primaryEntryPointCommand: y, buttonSize: b = r.PhG.MEDIUM } = e,
        E = l.useId(),
        C = l.useCallback(() => {
            c.yT(u.ti.ACTIVITY);
        }, []),
        { submitting: j, wasSubmitting: g } = (0, p.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: E,
            onSubmissionComplete: C
        }),
        [P, A] = l.useState(!1),
        O = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        I = l.useMemo(() => (0, m.XZ)(y.displayName), [y.displayName]),
        {
            onActivityItemSelected: _,
            buttonColor: S,
            buttonText: T
        } = (0, h.P7)({
            context: t,
            application: n,
            location: a.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: x,
            commandName: I,
            autoDismissOnClick: O === o.JS.LEAVE,
            launchingComponentId: E,
            submitting: null != g ? g : j
        }),
        { disabled: L, reason: R } = (0, d.Z)({
            context: t,
            application: n,
            activityAction: O
        });
    return (0, i.jsx)(r.ua7, {
        shouldShow: null != R,
        tooltipContentClassName: N.tooltipContent,
        text: R,
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
                        size: b,
                        color: S,
                        disabled: L,
                        submitting: P,
                        onClick: () => {
                            A(!0),
                                _(),
                                null == o || o(),
                                s.default.track(f.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                    application_id: n.id,
                                    button_action: u._y.USE_APP_COMMAND
                                });
                        },
                        'aria-label': v.NW.formatToPlainString(v.t['XjP/R0'], {
                            buttonText: T,
                            applicationName: n.name
                        }),
                        children: T
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
