n.d(t, { A: () => H });
var l = n(485845),
    i = n(179771),
    r = n(136722),
    s = n(264686),
    o = n(976860),
    u = n(803224),
    a = n(531685),
    d = n(479975),
    c = n(120426),
    f = n(940107),
    p = n(985451),
    g = n(171936);
n(321073), n(667532);
var h = n(809685),
    m = n(777977),
    w = n(112420),
    _ = n(484697),
    A = n(652215);
function v(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let I = {
    [A.e$_.OPEN_CONTEXT_MENU]: (e, t) => {
        let n = "custom" === e.args.type,
            l = n
                ? (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let l of t) {
                          if (n.length >= 40) break;
                          if (null == l || "object" != typeof l) continue;
                          let t = v(l.id);
                          null != t && n.push(t), e(l.items, n);
                      }
                      return n;
                  })(e.args.items)
                : [],
            i = n ? t.contextMenuSelect : void 0;
        return n
            ? null == i
                ? { result: { opened: !0, selected_id: null }, answered: "dismissed", options: l }
                : l.includes(i)
                  ? { result: { opened: !0, selected_id: i }, answered: `selected "${i}"`, options: l }
                  : {
                        result: { opened: !0, selected_id: null },
                        answered: `dismissed \u{2014} no item with id "${i}"`,
                        options: l,
                    }
            : { result: { opened: !0 }, answered: "opened, no selection to make" };
    },
    [A.e$_.SHOW_CONFIRM_MODAL]: (e, t) => {
        let n = !0 === t.confirm,
            l = v(e.args.title);
        return {
            result: "confirm" === e.args.type ? { confirmed: n } : { acknowledged: n },
            answered: n ? "confirmed" : "dismissed",
            subject: l,
        };
    },
    [A.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: v(e.args.url),
    }),
    [A.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: v(e.args.preview_title) ?? v(e.args.content),
    }),
    [A.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [A.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [A.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [A.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [A.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [A.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [A.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [A.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(I);
let T = { drain: () => [], end: () => {}, iframeId: null };
function E(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, _.lw)(t) ?? null);
}
let S = [];
function b(e) {
    let t = S.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = I[e.cmd];
    if (null == n) return null;
    let { result: l, answered: i, options: r, subject: s } = n(e, t.answers);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: i,
                ...(null != r && r.length > 0 ? { options: r } : {}),
                ...(null != s ? { subject: s } : {}),
            }),
        { result: l }
    );
}
function y(e, t, n) {
    let l = E(e);
    if (null == l) return T;
    let i = { iframeId: l, answers: t ?? {}, recorded: [] };
    return (
        n?.beneathBatches === !0 ? S.push(i) : S.unshift(i),
        1 === S.length && (0, w.C)(b),
        {
            iframeId: l,
            drain: () => i.recorded.splice(0, i.recorded.length),
            end: () => {
                let e = S.indexOf(i);
                -1 !== e && (S.splice(e, 1), 0 === S.length && (0, w.C)(null));
            },
        }
    );
}
var O = n(948230),
    N = n(805332),
    k = n(796036);
function C(e) {
    let t = (0, g.J8)(e);
    if (null == t) return null;
    let n = t.getBoundingClientRect();
    return n.width < 1 || n.height < 1 ? null : { width: Math.round(n.width), height: Math.round(n.height) };
}
async function R(e, t) {
    let n = C(e);
    if (null == n)
        return {
            ok: !1,
            mode: t,
            width: 0,
            height: 0,
            code: "unavailable",
            message: "no preview frame is on screen for this project",
        };
    if (null == N.A.getBuilderPreviewApplicationId() && !(0, k.h)(e))
        return {
            ok: !1,
            mode: t,
            ...n,
            code: "unavailable",
            message:
                "the phone/desktop lens is the Conjure builder header's, and this preview is not the builder screen's \u2014 open the app preview there to switch it",
        };
    (0, O.GG)("phone" === t);
    let l = Date.now() + 2e3;
    for (;;) {
        var i;
        let r = C(e);
        if (null != r && ((i = r.width), "phone" === t ? 60 >= Math.abs(i - 390) : i >= 520))
            return { ok: !0, mode: t, ...r };
        if (Date.now() >= l)
            return {
                ok: !1,
                mode: t,
                ...(r ?? n),
                code: "timeout",
                message: `the lens was set to ${t} but the frame is still ${String(r?.width ?? n.width)}px wide \u{2014} it is probably not the surface that applies the constraint`,
            };
        await new Promise((e) => setTimeout(e, 50));
    }
}
let P = [i.F.BOT, i.F.APPLICATIONS_COMMANDS];
async function M(e) {
    let { applicationId: t, application: i, guildId: s, onClose: o } = e,
        u = i?.integrationTypesConfig?.[l.b.GUILD_INSTALL]?.oauth2InstallParams ?? i?.installParams,
        [{ openOAuth2Modal: a }, { fetchProfile: d }] = await Promise.all([
            Promise.resolve().then(n.bind(n, 887909)),
            Promise.resolve().then(n.bind(n, 803306)),
        ]);
    a(
        {
            clientId: t,
            guildId: s,
            disableGuildSelect: !0,
            integrationType: l.b.GUILD_INSTALL,
            scopes: u?.scopes ?? P,
            permissions: u?.permissions != null ? r.iu(u.permissions) : void 0,
            callback: () => !0,
        },
        () => {
            o?.(), d(t, { withMutualGuilds: !0 });
        },
    );
}
async function L(e, t, n) {
    let { probe: l, spec: i, onAccepted: r } = n ?? {};
    if (!0 === l) return { status: (0, g.EA)(e) ? "accepted" : "unavailable" };
    let s = await (0, g.ZW)(e, 6e3);
    if (null == s) return { status: "unavailable" };
    let o = null == r ? { uploadToken: void 0 } : await r();
    return null == o ? { status: "unavailable" } : await (0, c.x)(s, t, i, o.uploadToken);
}
async function D(e, t, n, l) {
    if (!(0, g.EA)(e)) return { status: "unavailable" };
    let i = (0, p.t_)(e);
    try {
        let i = await (0, g.ZW)(e, 6e3);
        if (null == i) return { status: "unavailable" };
        let u = await l?.();
        if (!1 === u) return { status: "unavailable" };
        if (null != n.viewport) {
            let t = await R(e, n.viewport);
            if (!t.ok) return { status: "failed", message: t.message ?? "the preview lens did not change" };
        }
        let a = y(i, n.native);
        try {
            var r, s, o;
            let l,
                u = await ((r = i),
                (s = t),
                (o = n),
                (0, f.W)(r, "control", o, {
                    id: s,
                    timeoutMs:
                        ((l = o.timeoutMs),
                        ("number" == typeof l && isFinite(l) && l > 0 ? Math.min(Math.floor(l), 2e4) : 5e3) + 4e3),
                    retryMs: 400,
                    sourceMatch: "origin",
                    label: "control",
                }).then(
                    (e) =>
                        "boolean" == typeof e?.ok && Array.isArray(e.results)
                            ? { status: "completed", response: e }
                            : { status: "failed", message: "the preview frame returned a malformed control result" },
                    (e) =>
                        e instanceof f.f
                            ? { status: "failed", message: "the preview frame did not answer the control batch" }
                            : { status: "unavailable" },
                ));
            if ("completed" !== u.status) return u;
            let d = [...(B.get(e)?.drain() ?? []), ...a.drain()];
            if (0 === d.length) return u;
            return { ...u, response: { ...u.response, native: d } };
        } finally {
            a.end();
        }
    } finally {
        i();
    }
}
let B = new Map();
function V(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[vibegrations] preview native surfaces: ${e} failed`, t);
    }
}
function G(e) {
    let t = B.get(e);
    null != t && (B.delete(e), V("closing the operation session", () => t.end())), (0, p.Rh)(e);
}
let H = {
    openVibegrationsAppInstallModal: M,
    isWindowFocused: function () {
        return a.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return u.A.getDesktopType() === A.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { projectId: t, title: l, body: i, route: r, sound: u, volume: a } = e;
        s.default.showNotification(
            n(608598),
            l,
            i,
            { notif_type: "VIBEGRATIONS_ASSISTANT_FINISHED" },
            {
                tag: `vibegrations-${t}`,
                sound: u,
                volume: a,
                fallbackDeepLink: null == r ? void 0 : (0, d.I)(r),
                onClick: null == r ? void 0 : () => (0, o.pX)(r),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: L,
    relayPreviewControl: D,
    beginPreviewOperation: function (e) {
        (0, p.BP)(e);
        let t = (0, g.J8)(e);
        if (null == t) return;
        let n = E(t),
            l = B.get(e);
        if (null != l) {
            if (null != l.iframeId && l.iframeId === n) return;
            B.delete(e), V("replacing a stale operation session", () => l.end());
        }
        V("dismissing what was left standing", () =>
            (function (e) {
                let t = e.contentWindow;
                if (null == t) return;
                let n = (0, _.lw)(t);
                null != n && ((0, h.ir)(n), (0, m.OR)(n));
            })(t),
        ),
            V("opening the operation session", () => {
                let n = y(t, void 0, { beneathBatches: !0 }),
                    l = (0, p.FQ)(() => {
                        (0, p.RW)(e) || G(e);
                    });
                B.set(e, {
                    iframeId: n.iframeId,
                    drain: () => n.drain(),
                    end: () => {
                        l(), n.end();
                    },
                });
            });
    },
    endPreviewOperation: G,
    releasePreviewControl: function (e) {
        (0, p.xm)(e);
    },
};
