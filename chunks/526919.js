n.d(t, { yA: () => p, Tn: () => g, sL: () => O, TC: () => h, AV: () => S, z8: () => R, NP: () => I, XQ: () => f });
var i = n(855986),
    r = n(858899),
    a = n(73153),
    s = n(626584),
    l = n(986322),
    o = n(129230),
    d = n(723702),
    c = n(856383),
    u = n(253400),
    _ = n(652215),
    E = n(792996);
let A = new s.A("SystemServiceNativeUtils");
function h() {
    return !!d.isPlatformEmbedded && (u.Ay.IsSystemServiceInstalled() ?? !1);
}
function f() {
    return !!d.isPlatformEmbedded && (u.Ay.CanSystemServiceBeInstalled() ?? !1);
}
function I() {
    let e = (0, i.bG)([l.Ay], () => l.Ay.canShowAdminWarning),
        t = f();
    return !!d.isPlatformEmbedded && e && !h() && t;
}
function p(e) {
    return (
        !!d.isPlatformEmbedded &&
        e.canShowAdminWarning &&
        !h() &&
        !!d.isPlatformEmbedded &&
        !0 === u.Ay.CanSystemServiceBeInstalled()
    );
}
function m(e, t, n) {
    (l.Ay.getSystemServiceStatus(e).state !== t.state &&
        a.h.dispatch({ type: "SYSTEM_SERVICE_INITIALIZE", status: t, modules: [e] }),
        "running" === t.state
            ? (A.info(`${e} initialized.`),
              o.default.track(_.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !0, source: n, modules: [e] }))
            : "failure" === t.state &&
              (A.info(`${e} failed to initialize.`, t),
              o.default.track(_.HAw.SYSTEM_SERVICE_INITIALIZE_ATTEMPTED, { success: !1, source: n, modules: [e] })));
}
function T(e) {
    d.isPlatformEmbedded &&
        (u.Ay.InputEventServiceSetStatusCallback((t) => {
            m("input-service", t, e);
        }),
        u.Ay.InputEventServiceSetAllowed(!0),
        u.Ay.ToolServiceSetStatusCallback((t) => {
            m("tool-service", t, e);
        }),
        u.Ay.ToolServiceSetAllowed(!0));
}
async function g(e) {
    if (d.isPlatformEmbedded && h())
        try {
            ((await u.Ay.DoesSystemServiceHaveUpdate()) && (await u.Ay.UpdateSystemService()), T(e));
        } catch (e) {
            throw (
                c.A.captureMessage("Error during system service initialization", { extra: { error: e } }),
                A.error("System service initialization failed", e),
                e
            );
        }
}
async function S() {
    d.isPlatformEmbedded &&
        (u.Ay.InputEventServiceSetAllowed(!1),
        u.Ay.ToolServiceSetAllowed(!1),
        await a.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["input-service"],
        }),
        await a.h.dispatch({
            type: "SYSTEM_SERVICE_INITIALIZE",
            status: { state: "unknown" },
            modules: ["tool-service"],
        }),
        A.info("System service terminated."));
}
function N(e) {
    if (e instanceof Error)
        try {
            let t = JSON.parse(e.message);
            if (null == t.error_code || null == t.error_message) return;
            return t;
        } catch (e) {
            return;
        }
}
function C(e, t) {
    t && (0, r.P0)(e);
}
async function O(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (d.isPlatformEmbedded && u.Ay.CanSystemServiceBeInstalled())
        try {
            (await u.Ay.InstallSystemService(),
                A.info("System service installed."),
                o.default.track(_.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, { success: !0, source: e }),
                C({ text: E.intl.string(E.t.kQnWby), variant: "success" }, t),
                T("after-install"));
        } catch (i) {
            let n = N(i);
            if (null == n && i instanceof Error) {
                (C({ text: E.intl.formatToPlainString(E.t.sdKYCE, { error: i.message }), variant: "critical" }, t),
                    c.A.captureMessage("Unknown error during system service installation", { extra: { error: i } }),
                    A.error("System service install failed.", i),
                    o.default.track(_.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i.message,
                    }));
                return;
            }
            if (null == n) {
                (C({ text: E.intl.formatToPlainString(E.t.sdKYCE, { error: i }), variant: "critical" }, t),
                    c.A.captureMessage("Really unknown error during system service installation", {
                        extra: { error: i },
                    }),
                    A.error("System service install failed.", i),
                    o.default.track(_.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i?.toString(),
                    }));
                return;
            }
            if (
                (o.default.track(_.HAw.SYSTEM_SERVICE_INSTALL_ATTEMPTED, {
                    success: !1,
                    source: e,
                    error_code: n.error_code,
                    error_message: n.error_message,
                }),
                -0x7ff8fb39 === n.error_code)
            ) {
                (C({ text: E.intl.string(E.t.xu9k8G), variant: "critical" }, t),
                    A.error("User cancelled system service install."));
                return;
            }
            (C({ text: E.intl.formatToPlainString(E.t.sdKYCE, { error: n.error_message }), variant: "critical" }, t),
                0 !== n.error_code &&
                    c.A.captureMessage("Error during system service installation", { extra: { error: n } }),
                A.error("System service install failed.", n));
        }
}
async function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    if (d.isPlatformEmbedded)
        try {
            (await S(),
                await u.Ay.UninstallSystemService(),
                A.info("System service uninstalled."),
                C({ text: E.intl.string(E.t.dThS5H), variant: "success" }, t),
                o.default.track(_.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, { success: !0, source: e }));
        } catch (i) {
            let n = N(i);
            if (null == n && i instanceof Error) {
                (C({ text: E.intl.formatToPlainString(E.t.oHh3oI, { error: i.message }), variant: "critical" }, t),
                    c.A.captureMessage("Unknown error during system service uninstallation", { extra: { error: i } }),
                    A.error("System service uninstall failed.", i),
                    o.default.track(_.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i.message,
                    }));
                return;
            }
            if (null == n) {
                (C({ text: E.intl.formatToPlainString(E.t.oHh3oI, { error: i }), variant: "critical" }, t),
                    c.A.captureMessage("Really unknown error during system service uninstallation", {
                        extra: { error: i },
                    }),
                    A.error("System service uninstall failed.", i),
                    o.default.track(_.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                        success: !1,
                        source: e,
                        error_message: i?.toString(),
                    }));
                return;
            }
            (o.default.track(_.HAw.SYSTEM_SERVICE_UNINSTALL_ATTEMPTED, {
                success: !1,
                source: e,
                error_code: n.error_code,
                error_message: n.error_message,
            }),
                C({ text: E.intl.formatToPlainString(E.t.oHh3oI, { error: n.error_message }), variant: "critical" }, t),
                c.A.captureMessage("Error during system service uninstallation", { extra: { error: n } }),
                A.error("System service uninstall failed.", n));
        }
}
