(n.d(t, { Z: () => N }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(755721),
    o = n(481060),
    s = n(542094),
    l = n(895924),
    c = n(813370),
    u = n(626135),
    d = n(499254),
    f = n(541099),
    _ = n(827498),
    p = n(160973),
    h = n(783097),
    m = n(890280),
    g = n(176412),
    E = n(981631),
    b = n(388032),
    y = n(854408);
function O(e, t, n) {
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
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function N(e) {
    let { context: t, application: n, sectionName: O, primaryEntryPointCommand: I, buttonSize: A = a.Ph.MEDIUM } = e,
        N = i.useId(),
        C = i.useCallback(() => {
            d.yT(_.ti.ACTIVITY);
        }, []),
        w = i.useCallback(() => {
            f.Z.shouldShowModal() && C();
        }, [C]),
        { submitting: R, wasSubmitting: P } = (0, m.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: N,
            onSubmissionComplete: C
        }),
        [D, L] = i.useState(!1),
        x = (0, s.Qv)({
            applicationId: n.id,
            context: t
        }),
        k = i.useMemo(() => (0, h.XZ)(I.displayName), [I.displayName]),
        {
            onActivityItemSelected: j,
            buttonColor: M,
            buttonText: U
        } = (0, g.P7)({
            context: t,
            application: n,
            location: l.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: O,
            commandName: k,
            autoDismissOnClick: x === s.JS.LEAVE || (0, c.g)(n),
            launchingComponentId: N,
            submitting: null != P ? P : R,
            onConfirmActivityLaunchChecksAlertOpen: w
        }),
        { disabled: G, reason: B } = (0, p.Z)({
            context: t,
            application: n,
            activityAction: x
        });
    return (0, r.jsx)(o.ua7, {
        shouldShow: null != B,
        tooltipContentClassName: y.tooltipContent,
        text: B,
        children: (e) => {
            var { onClick: t } = e,
                i = S(e, ['onClick']);
            return (0, r.jsx)(
                a.zx,
                T(v({}, i), {
                    type: 'submit',
                    size: A,
                    color: M,
                    disabled: G,
                    submitting: D,
                    onClick: () => {
                        (L(!0),
                            j(),
                            null == t || t(),
                            u.default.track(E.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                                application_id: n.id,
                                button_action: _._y.USE_APP_COMMAND
                            }));
                    },
                    'aria-label': b.intl.formatToPlainString(b.t['XjP/R0'], {
                        buttonText: U,
                        applicationName: n.name
                    }),
                    children: U
                })
            );
        }
    });
}
