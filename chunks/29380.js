n.d(t, { Z: () => b }), n(388685);
var i = n(951288),
    l = n(647438),
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
    v = n(826405),
    y = n(176412),
    g = n(981631),
    x = n(388032);
function b(e) {
    let { context: t, application: n, sectionName: b, primaryEntryPointCommand: N } = e,
        j = l.useId(),
        C = l.useCallback(() => {
            d.yT(m.ti.ACTIVITY);
        }, []),
        E = l.useCallback(() => {
            p.Z.shouldShowModal() && C();
        }, [C]),
        { submitting: P, wasSubmitting: A } = (0, v.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: j,
            onSubmissionComplete: C,
        }),
        [_, O] = l.useState(!1),
        I = (0, o.Qv)({
            applicationId: n.id,
            context: t,
        }),
        S = l.useMemo(() => (0, h.XZ)(N.displayName), [N.displayName]),
        {
            onActivityItemSelected: T,
            buttonVariant: L,
            buttonText: R,
        } = (0, y.P7)({
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
    return (0, i.jsx)(r.u, {
        shouldShow: null != w,
        __unsupportedReactNodeAsText: w,
        children: (0, i.jsx)(a.Button, {
            type: "submit",
            size: "md",
            variant: L,
            disabled: Z,
            loading: _,
            onClick: () => {
                O(!0),
                    T(),
                    u.default.track(g.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                        application_id: n.id,
                        button_action: m._y.USE_APP_COMMAND,
                    });
            },
            "aria-label": x.intl.formatToPlainString(x.t["XjP/R+"], {
                buttonText: R,
                applicationName: n.name,
            }),
            text: R,
        }),
    });
}
