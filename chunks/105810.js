"use strict";
n.d(t, { A: () => k });
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
    A = n(171936);
n(321073), n(667532);
var h = n(809685),
    I = n(112420),
    f = n(484697),
    p = n(652215);
function T(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let m = {
    [p.e$_.OPEN_CONTEXT_MENU]: (e, t) => {
        let n = "custom" === e.args.type,
            i = n
                ? (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = T(i.id);
                          null != t && n.push(t), e(i.items, n);
                      }
                      return n;
                  })(e.args.items)
                : [],
            r = n ? t.contextMenuSelect : void 0;
        return n
            ? null == r
                ? { result: { opened: !0, selected_id: null }, answered: "dismissed", options: i }
                : i.includes(r)
                  ? { result: { opened: !0, selected_id: r }, answered: `selected "${r}"`, options: i }
                  : {
                        result: { opened: !0, selected_id: null },
                        answered: `dismissed \u{2014} no item with id "${r}"`,
                        options: i,
                    }
            : { result: { opened: !0 }, answered: "opened, no selection to make" };
    },
    [p.e$_.SHOW_CONFIRM_MODAL]: (e, t) => {
        let n = !0 === t.confirm,
            i = T(e.args.title);
        return {
            result: "confirm" === e.args.type ? { confirmed: n } : { acknowledged: n },
            answered: n ? "confirmed" : "dismissed",
            subject: i,
        };
    },
    [p.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: T(e.args.url),
    }),
    [p.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: T(e.args.preview_title) ?? T(e.args.content),
    }),
    [p.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [p.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [p.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [p.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [p.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [p.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [p.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(m);
let g = { drain: () => [], end: () => {}, iframeId: null };
function S(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, f.lw)(t) ?? null);
}
let N = [];
function C(e) {
    let t = N.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = m[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: a, subject: s } = n(e, t.answers);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: r,
                ...(null != a && a.length > 0 ? { options: a } : {}),
                ...(null != s ? { subject: s } : {}),
            }),
        { result: i }
    );
}
function R(e, t, n) {
    let i = S(e);
    if (null == i) return g;
    let r = { iframeId: i, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? N.push(r) : N.unshift(r),
        1 === N.length && (0, I.C)(C),
        {
            iframeId: i,
            drain: () => r.recorded.splice(0, r.recorded.length),
            end: () => {
                let e = N.indexOf(r);
                -1 !== e && (N.splice(e, 1), 0 === N.length && (0, I.C)(null));
            },
        }
    );
}
var O = n(948230),
    L = n(805332),
    y = n(796036);
function D(e) {
    let t = (0, A.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function v(e, t) {
    let n = D(e);
    if (null == n)
        return {
            ok: !1,
            mode: t,
            width: 0,
            height: 0,
            code: "unavailable",
            message: "no preview frame is on screen for this project",
        };
    if (null == L.A.getBuilderPreviewApplicationId() && !(0, y.h)(e))
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, O.GG)("phone" === t);
    let i = Date.now() + 2e3;
    for (;;) {
        var r;
        let a = D(e);
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
let b = [r.F.BOT, r.F.APPLICATIONS_COMMANDS];
async function M(e) {
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
            scopes: o?.scopes ?? b,
            permissions: o?.permissions != null ? a.iu(o.permissions) : void 0,
            callback: () => !0,
        },
        () => {
            l?.(), c(t, { withMutualGuilds: !0 });
        },
    );
}
async function P(e, t, n) {
    let { probe: i, spec: r, onAccepted: a } = n ?? {};
    if (!0 === i) return { status: (0, A.EA)(e) ? "accepted" : "unavailable" };
    let s = await (0, A.ZW)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let l = null == a ? { uploadToken: void 0 } : await a();
    return null == l ? { status: "unavailable" } : await (0, u.x)(s, t, r, l.uploadToken);
}
async function U(e, t, n, i) {
    if (!(0, A.EA)(e)) return { status: "unavailable" };
    let r = (0, E.t_)(e);
    try {
        let r = await (0, A.ZW)(e, 6e3);
        if (null == r) return { status: "unavailable" };
        let o = await i?.();
        if (!1 === o) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await v(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let d = R(r, n.native);
        try {
            var a, s, l;
            let i,
                o = await ((a = r),
                (s = t),
                (l = n),
                (0, _.W)(a, "control", l, {
                    id: s,
                    timeoutMs:
                        ((i = l.timeoutMs),
                        ("number" == typeof i && isFinite(i) && i > 0 ? Math.min(Math.floor(i), 2e4) : 5e3) + 4e3),
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
            if ("completed" !== o.status) return o;
            let c = [...(w.get(e)?.drain() ?? []), ...d.drain()];
            if (0 === c.length) return o;
            return { ...o, response: { ...o.response, native: c } };
        } finally {
            d.end();
        }
    } finally {
        r();
    }
}
let w = new Map();
function G(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
function x(e) {
    let t = w.get(e);
    null != t && (w.delete(e), G("closing the operation session", () => t.end())), (0, E.Rh)(e);
}
let k = {
    openVibegrationsAppInstallModal: M,
    isWindowFocused: function () {
        return d.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return o.A.getDesktopType() === p.nRU.NEVER;
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
    relayPreviewCapture: P,
    relayPreviewControl: U,
    beginPreviewOperation: function (e) {
        (0, E.BP)(e);
        let t = (0, A.J8)(e);
        if (null == t) return;
        let n = S(t),
            i = w.get(e);
        if (null != i) {
            if (null != i.iframeId && i.iframeId === n) return;
            w.delete(e), G("replacing a stale operation session", () => i.end());
        }
        G("dismissing what was left standing", () =>
            (function (e) {
                let t = e.contentWindow;
                if (null == t) return;
                let n = (0, f.lw)(t);
                null != n && (0, h.ir)(n);
            })(t),
        ),
            G("opening the operation session", () => {
                let n = R(t, void 0, { beneathBatches: !0 }),
                    i = (0, E.FQ)(() => {
                        (0, E.RW)(e) || x(e);
                    });
                w.set(e, {
                    iframeId: n.iframeId,
                    drain: () => n.drain(),
                    end: () => {
                        i(), n.end();
                    },
                });
            });
    },
    endPreviewOperation: x,
    releasePreviewControl: function (e) {
        (0, E.xm)(e);
    },
};
