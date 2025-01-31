n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(481060),
    o = n(542094),
    s = n(895924),
    r = n(626135),
    c = n(499254),
    d = n(827498),
    u = n(160973),
    m = n(783097),
    p = n(890280),
    h = n(176412),
    v = n(981631),
    x = n(388032),
    f = n(129571);
function N(e) {
    let { context: t, application: n, sectionName: N, primaryEntryPointCommand: C, buttonSize: E = a.PhG.MEDIUM } = e,
        A = l.useId(),
        I = l.useCallback(() => {
            c.yT(d.ti.ACTIVITY);
        }, []),
        { submitting: g, wasSubmitting: _ } = (0, p.Z)({
            applicationId: n.id,
            context: t,
            launchingComponentId: A,
            onSubmissionComplete: I
        }),
        [P, j] = l.useState(!1),
        y = (0, o.Qv)({
            applicationId: n.id,
            context: t
        }),
        T = l.useMemo(() => (0, m.XZ)(C.displayName), [C.displayName]),
        {
            onActivityItemSelected: S,
            buttonColor: b,
            buttonText: L
        } = (0, h.P7)({
            context: t,
            application: n,
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: N,
            commandName: T,
            autoDismissOnClick: y === o.JS.LEAVE,
            launchingComponentId: A,
            submitting: null != _ ? _ : g
        }),
        { disabled: R, reason: M } = (0, u.Z)({
            context: t,
            application: n,
            activityAction: y
        });
    return (0, i.jsx)(a.ua7, {
        shouldShow: null != M,
        tooltipContentClassName: f.tooltipContent,
        text: M,
        children: (e) => {
            let { onClick: t, ...l } = e;
            return (0, i.jsx)(a.zxk, {
                ...l,
                type: 'submit',
                size: E,
                color: b,
                disabled: R,
                submitting: P,
                onClick: () => {
                    j(!0),
                        S(),
                        null == t || t(),
                        r.default.track(v.rMx.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                            application_id: n.id,
                            button_action: d._y.USE_APP_COMMAND
                        });
                },
                'aria-label': x.intl.formatToPlainString(x.t['XjP/R0'], {
                    buttonText: L,
                    applicationName: n.name
                }),
                children: L
            });
        }
    });
}
