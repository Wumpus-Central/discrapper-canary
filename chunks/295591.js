"use strict";
n.d(t, { A: () => g });
var i = n(485845),
    r = n(179771),
    a = n(136722),
    s = n(264686),
    l = n(976860),
    o = n(803224),
    d = n(531685),
    c = n(479975),
    u = n(120426),
    _ = n(940107),
    E = n(985451),
    A = n(171936),
    h = n(948230),
    I = n(805332);
function f(e) {
    let t = (0, A.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function p(e, t) {
    let n = f(e);
    if (null == n)
        return {
            ok: !1,
            mode: t,
            width: 0,
            height: 0,
            code: "unavailable",
            message: "no preview frame is on screen for this project",
        };
    if (null == I.A.getBuilderPreviewApplicationId())
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, h.GG)("phone" === t);
    let i = Date.now() + 2e3;
    for (;;) {
        var r;
        let a = f(e);
        if (null != a && ((r = a.width), "phone" === t ? 60 >= Math.abs(r - 390) : r >= 520))
            return { ok: !0, mode: t, ...a };
        if (Date.now() >= i)
            return {
                ok: !1,
                mode: t,
                ...(a ?? n),
                code: "timeout",
                message: `the lens was set to ${t} but the frame is still ${String(a?.width ?? n.width)}px wide \u{2014} it is probably not the surface that applies the constraint`,
            };
        await new Promise((e) => setTimeout(e, 50));
    }
}
var T = n(652215);
let m = [r.F.BOT, r.F.APPLICATIONS_COMMANDS],
    g = {
        openVibegrationsAppInstallModal: async function e(e) {
            let { applicationId: t, application: r, guildId: s, onClose: l } = e,
                o = r?.integrationTypesConfig?.[i.b.GUILD_INSTALL]?.oauth2InstallParams ?? r?.installParams,
                [{ openOAuth2Modal: d }, { fetchProfile: c }] = await Promise.all([
                    Promise.resolve().then(n.bind(n, 887909)),
                    Promise.resolve().then(n.bind(n, 803306)),
                ]);
            d(
                {
                    clientId: t,
                    guildId: s,
                    disableGuildSelect: !0,
                    integrationType: i.b.GUILD_INSTALL,
                    scopes: o?.scopes ?? m,
                    permissions: o?.permissions != null ? a.iu(o.permissions) : void 0,
                    callback: () => !0,
                },
                () => {
                    l?.(), c(t, { withMutualGuilds: !0 });
                },
            );
        },
        isWindowFocused: function () {
            return d.A.isFocused();
        },
        areTurnNotificationsDisabled: function () {
            return o.A.getDesktopType() === T.nRU.NEVER;
        },
        presentTurnNotification: function (e) {
            let { projectId: t, title: i, body: r, route: a, sound: o, volume: d } = e;
            s.default.showNotification(
                n(608598),
                i,
                r,
                { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
                {
                    tag: `vibegrations-${t}`,
                    sound: o,
                    volume: d,
                    fallbackDeepLink: null == a ? void 0 : (0, c.I)(a),
                    onClick: null == a ? void 0 : () => (0, l.pX)(a),
                    isUserAvatar: !1,
                },
            );
        },
        relayPreviewCapture: async function e(e, t, n) {
            let { probe: i, spec: r, onAccepted: a } = n ?? {};
            if (!0 === i) return { status: (0, A.EA)(e) ? "accepted" : "unavailable" };
            let s = await (0, A.ZW)(e, 6e3);
            if (null == s) return { status: "unavailable" };
            let l = null == a ? { uploadToken: void 0 } : await a();
            return null == l ? { status: "unavailable" } : await (0, u.xl)(s, t, r, l.uploadToken);
        },
        relayPreviewControl: async function e(e, t, n, i) {
            if (!(0, A.EA)(e)) return { status: "unavailable" };
            let r = (0, E.t_)(e);
            try {
                var a, s, l;
                let r,
                    o = await (0, A.ZW)(e, 6e3);
                if (null == o) return { status: "unavailable" };
                let d = await i?.();
                if (!1 === d) return { status: "unavailable" };
                if (null != n.viewport) {
                    let t = await p(e, n.viewport);
                    if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
                }
                return await ((a = o),
                (s = t),
                (l = n),
                (0, _.W)(a, "control", l, {
                    id: s,
                    timeoutMs:
                        ((r = l.timeoutMs),
                        ("number" == typeof r && isFinite(r) && r > 0 ? Math.min(Math.floor(r), 2e4) : 5e3) + 4e3),
                    retryMs: 400,
                    sourceMatch: "origin",
                    label: "control",
                }).then(
                    (e) =>
                        "boolean" == typeof e?.ok && Array.isArray(e.results)
                            ? { status: "completed", response: e }
                            : { status: "failed", message: "the preview frame returned a malformed control result" },
                    (e) =>
                        e instanceof _.f
                            ? { status: "failed", message: "the preview frame did not answer the control batch" }
                            : { status: "unavailable" },
                ));
            } finally {
                r();
            }
        },
        beginPreviewOperation: function (e) {
            (0, E.BP)(e);
        },
        endPreviewOperation: function (e) {
            (0, E.Rh)(e);
        },
        releasePreviewControl: function (e) {
            (0, E.xm)(e);
        },
    };
