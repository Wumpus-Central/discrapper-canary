n.d(t, { Z: () => b }), n(388685);
var l = n(951288),
    i = n(647438),
    r = n(28664),
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
    x = n(176412),
    y = n(981631),
    g = n(388032);
function b(e) {
    let { context: t, application: n, sectionName: b, primaryEntryPointCommand: N } = e,
        j = i.useId(),
        C = i.useCallback(() => {
            d.yT(m.ti.ACTIVITY);
        }, []),
        E = i.useCallback(() => {
            p.Z.shouldShowModal() && C();
        }, [C]),
        { submitting: P, wasSubmitting: A } = (0, v.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: j,
            onSubmissionComplete: C,
        }),
        [_, O] = i.useState(!1),
        I = (0, o.Qv)({
            applicationId: n.id,
            context: t,
        }),
        S = i.useMemo(() => (0, h.XZ)(N.displayName), [N.displayName]),
        {
            onActivityItemSelected: T,
            buttonVariant: L,
            buttonText: R,
        } = (0, x.P7)({
            context: t,
            application: n,
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: b,
            commandName: S,
            autoDismissOnClick: I === o.JS.LEAVE || (0, c.g)(n),
            launchingComponentId: j,
            submitting: null != A ? A : P,
            onConfirmActivityLaunchChecksAlertOpen: E,
        }),
        { disabled: Z, reason: w } = (0, f.Z)({
            context: t,
            application: n,
            activityAction: I,
        });
    return (0, l.jsx)(r.u, {
        shouldShow: null != w,
        __unsupportedReactNodeAsText: w,
        children: (0, l.jsx)(a.zxk, {
            type: "submit",
            size: "md",
            variant: L,
            disabled: Z,
            loading: _,
            onClick: () => {
                O(!0),
                    T(),
                    u.default.track(y.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: m._y.USE_APP_COMMAND,
                    });
            },
            "aria-label": g.intl.formatToPlainString(g.t["XjP/R0"], {
                buttonText: R,
                applicationName: n.name,
            }),
            text: R,
        }),
    });
}
