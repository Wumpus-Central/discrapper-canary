n.d(t, { A: () => $ });
var i = n(264686),
    r = n(625180),
    a = n(91242),
    s = n(803224),
    l = n(531685),
    o = n(119622),
    d = n(381991);
n(884868);
var c = n(573083);
function u(e, t) {
    try {
        t();
    } catch (t) {
        console.error(`[conjure] preview native surfaces: ${e} failed`, t);
    }
}
var _ = n(27184),
    E = n(251363),
    A = n(192888),
    f = n(621466);
let h = !1;
(document.addEventListener("compositionstart", () => (h = !0), !0),
    document.addEventListener("compositionend", () => (h = !1), !0));
let I = null;
function p(e) {
    if ((0, f.vq)(e, HTMLInputElement) || (0, f.vq)(e, HTMLTextAreaElement)) {
        let { selectionStart: t, selectionEnd: n, selectionDirection: i } = e;
        return null == t || null == n ? null : () => e.setSelectionRange(t, n, i ?? void 0);
    }
    let t = document.getSelection(),
        n = null != t && t.rangeCount > 0 ? t.getRangeAt(0).cloneRange() : null;
    return null != n && e.contains(n.commonAncestorContainer)
        ? () => {
              (t?.removeAllRanges(), t?.addRange(n));
          }
        : null;
}
function m(e) {
    (e.stop(),
        I === e && (I = null),
        e.personActed ||
            (function e(t) {
                let n = document.activeElement;
                if (t.element.isConnected && n !== t.element && (n === t.iframe || n === document.body)) {
                    if (h)
                        return void document.addEventListener("compositionend", () => e(t), { capture: !0, once: !0 });
                    (t.element.focus({ preventScroll: !0 }), t.restoreSelection?.());
                }
            })(e));
}
function T() {
    null != I && ((I.released = !0), 0 === I.active && m(I));
}
var g = n(853555);
(n(323874), n(14289), n(35956));
var S = n(539197),
    N = n(873715);
let C = null,
    O = null,
    R = new Map(),
    L = null,
    y = 0;
function D() {
    return window.DiscordNative?.frameDebugger ?? null;
}
async function b(e, t) {
    let n = D(),
        i = (function (e) {
            try {
                return new URL(e.src, window.location.href).origin;
            } catch {
                return null;
            }
        })(t);
    if (null == n || null == i || t.ownerDocument !== document) return null;
    if (C?.projectId === e && C.origin === i) return C;
    if (null != O) {
        let t = O,
            n = await t.result;
        return t.projectId === e && t.origin === i ? n : null;
    }
    let r = { projectId: e, origin: i, cancelled: !1, result: Promise.resolve(null) };
    function a() {
        return r.cancelled;
    }
    ((r.result = (async () => {
        let r;
        try {
            r = await n.attach(i);
        } catch {
            return null;
        }
        if (
            (L !== n &&
                ((L = n),
                n.onDetached((e) => {
                    C?.id === e && ((0, S.nI)(C.projectId), (C = null));
                }),
                n.onInput?.((e, t) => {
                    C?.id === e && (0, S.NL)(C.projectId, t);
                })),
            a())
        )
            return (n.detach().catch(() => {}), "cancelled");
        let s = { id: r, projectId: e, origin: i, earlierEvents: [] };
        return (
            (C = s),
            (s.earlierEvents = await (async function (e) {
                let t = await Promise.race([
                    (0, N.J)(e, `native-cdp-${Date.now()}-${++y}`, {
                        steps: [{ action: "cdp", calls: [{ method: "Runtime.releaseObjectGroup", params: {} }] }],
                        passive: !0,
                    }),
                    new Promise((e) => setTimeout(() => e(null), 1500)),
                ]);
                if (t?.status !== "completed") return [];
                let n = t.response.results[0]?.value?.events;
                return Array.isArray(n) ? n.slice(-200) : [];
            })(t).catch(() => [])),
            a() ? "cancelled" : s
        );
    })()),
        (O = r));
    try {
        return await r.result;
    } finally {
        O === r && (O = null);
    }
}
function v(e, t) {
    return { status: "completed", response: { ok: e.ok, results: [e], ...("" === t ? {} : { build: t }) } };
}
function P(e) {
    let t = D(),
        n = R.get(e);
    (null != n && ((n.cancelled = !0), R.delete(e)),
        O?.projectId === e && (O.cancelled = !0),
        (0, S.nI)(e),
        null != t && C?.projectId === e && ((C = null), t.detach().catch(() => {})));
}
var M = n(965528),
    U = n(485845),
    w = n(179771),
    G = n(136722),
    x = n(803306);
let k = [w.F.BOT, w.F.APPLICATIONS_COMMANDS],
    F = new WeakMap();
function B(e) {
    return new Promise((t) => setTimeout(t, e));
}
function V(e, t) {
    return e.width === t.width && e.height === t.height;
}
function H(e, t, n) {
    let i = t.width - e.width,
        r = t.height - e.height;
    return i >= -2 && r >= -2 && i <= n && r <= n;
}
async function j(e, t) {
    let n = t,
        i = F.get(n),
        r = null;
    for (let t = Date.now() + 1500; Date.now() < t; await B(50)) {
        var a, s;
        let t =
            (a = n = (0, g.UJ)(e) ?? n).isConnected && a.getClientRects().length > 0 && a.clientWidth > 0
                ? { width: a.clientWidth, height: a.clientHeight }
                : null;
        if (null == t) continue;
        let l = await ((s = n),
        (0, A.W)(s, "viewport", {}, { timeoutMs: 300 }).then(
            (e) => {
                let { width: t, height: n } = e;
                return { width: t, height: n };
            },
            () => null,
        ));
        if (null == l) {
            await B(150);
            break;
        }
        let o = l.width > 0 && l.height > 0,
            d = null != i && V(i.viewport, l),
            c = d && null != i && V(i.box, t),
            u = !d && null != r && V(r, l) && H(l, t, 32);
        if (c || (o && (H(l, t, 2) || u))) {
            F.set(n, { box: t, viewport: l });
            break;
        }
        r = l;
    }
    return n;
}
var W = n(652215),
    Y = n(165610);
let K = (function (e) {
    let t = new Map();
    function n(e) {
        let n = t.get(e);
        (null != n && (t.delete(e), u("closing the operation session", () => n.end())), (0, c.YN)(e));
    }
    return {
        begin: function (i) {
            (0, c.oJ)(i);
            let r = e(i);
            if (null == r) return;
            let a = t.get(i);
            if (null != a) {
                if (null != a.iframeId && a.iframeId === r.identity) return;
                (t.delete(i), u("replacing a stale operation session", () => a.end()));
            }
            (u("dismissing what was left standing", () => r.dismiss()),
                u("opening the operation session", () => {
                    let e = r.open(),
                        a = (0, c.W3)(() => {
                            (0, c.wK)(i) || n(i);
                        });
                    t.set(i, {
                        iframeId: e.iframeId,
                        drain: () => e.drain(),
                        end: () => {
                            (a(), e.end());
                        },
                    });
                }));
        },
        end: n,
        drain: (e) => t.get(e)?.drain() ?? [],
    };
})((e) => {
    let t = (0, g.UJ)(e);
    return null == t
        ? null
        : { identity: (0, M.B0)(t), dismiss: () => (0, M.op)(t), open: () => (0, M._q)(t, { beneathBatches: !0 }) };
});
(0, c.h2)((e) => {
    (P(e), T());
    let t = (0, g.UJ)(e);
    null != t &&
        (0, A.W)(
            t,
            "control-end",
            {},
            { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control end" },
        ).catch(() => {});
});
let $ = {
    openConjureAppInstallModal: async function (e) {
        let { onClose: t, ...i } = e,
            { openOAuth2Modal: r } = await Promise.resolve().then(n.bind(n, 610056));
        r(
            (function (e) {
                let { applicationId: t, application: n, guildId: i } = e,
                    r = n?.integrationTypesConfig?.[U.b.GUILD_INSTALL]?.oauth2InstallParams ?? n?.installParams;
                return {
                    clientId: t,
                    guildId: i,
                    disableGuildSelect: !0,
                    integrationType: U.b.GUILD_INSTALL,
                    scopes: r?.scopes ?? k,
                    permissions: r?.permissions != null ? G.iu(r.permissions) : void 0,
                    callback: () => ((0, x.eO)(t, { withMutualGuilds: !0 }), !0),
                };
            })(i),
            t,
        );
    },
    isWindowFocused: function () {
        return l.A.isFocused();
    },
    areTurnNotificationsDisabled: function () {
        return s.A.getDesktopType() === W.nRU.NEVER;
    },
    presentTurnNotification: function (e) {
        let { projectId: t, title: r, body: a, route: s, sound: l, volume: c } = e;
        i.default.showNotification(
            n(608598),
            r,
            a,
            { notif_type: "CONJURE_ASSISTANT_FINISHED" },
            {
                sound: l,
                volume: c,
                fallbackDeepLink: null == s ? void 0 : (0, o.Id)(s),
                onClick: () => (0, d.A)(t, "deep_link"),
                isUserAvatar: !1,
            },
        );
    },
    relayPreviewCapture: async function (e, t, i) {
        let { probe: r, spec: a, build: s, onAccepted: l, resolveUploadUrl: o } = i;
        if (!0 === r) return { status: (0, g.rQ)(e) ? "accepted" : "unavailable" };
        if (a?.mode === "widget") {
            let { captureConjureProfileWidget: i } = await Promise.all([
                n.e(644013),
                n.e(896691),
                n.e(447505),
                n.e(971156),
                n.e(260009),
                n.e(779367),
                n.e(552653),
                n.e(85427),
                n.e(66149),
                n.e(996969),
                n.e(281342),
                n.e(967850),
                n.e(505866),
                n.e(291329),
                n.e(64769),
                n.e(506933),
                n.e(992956),
                n.e(880150),
                n.e(490743),
                n.e(44141),
                n.e(428643),
                n.e(728053),
                n.e(630290),
                n.e(668756),
                n.e(60002),
                n.e(189423),
                n.e(415695),
                n.e(977306),
                n.e(144909),
                n.e(847980),
                n.e(686889),
                n.e(560570),
                n.e(629972),
                n.e(253781),
                n.e(471043),
                n.e(476662),
                n.e(188259),
                n.e(253044),
                n.e(311913),
                n.e(881717),
                n.e(918221),
                n.e(306490),
                n.e(363269),
                n.e(474172),
                n.e(650376),
                n.e(587618),
                n.e(424199),
                n.e(645499),
                n.e(322690),
                n.e(596104),
                n.e(615643),
                n.e(968201),
                n.e(777489),
                n.e(95387),
                n.e(993103),
                n.e(508702),
                n.e(188941),
                n.e(489218),
                n.e(912875),
                n.e(55348),
                n.e(990189),
                n.e(543039),
                n.e(862782),
                n.e(44561),
                n.e(110116),
                n.e(776195),
                n.e(253729),
                n.e(879315),
                n.e(827708),
                n.e(266900),
                n.e(948804),
                n.e(490028),
                n.e(199999),
                n.e(37085),
                n.e(809915),
                n.e(314243),
                n.e(463095),
                n.e(710911),
                n.e(672727),
                n.e(927211),
                n.e(445124),
                n.e(76428),
                n.e(783988),
                n.e(832823),
                n.e(511527),
                n.e(763070),
                n.e(955184),
                n.e(628439),
                n.e(539620),
                n.e(225990),
                n.e(883850),
                n.e(893928),
                n.e(466354),
                n.e(133902),
                n.e(349460),
                n.e(263765),
                n.e(76705),
                n.e(165595),
                n.e(967288),
                n.e(936320),
                n.e(674783),
                n.e(858514),
                n.e(121435),
                n.e(486309),
                n.e(414260),
                n.e(621624),
                n.e(54953),
                n.e(53374),
                n.e(456003),
                n.e(530943),
                n.e(693832),
                n.e(466322),
                n.e(133179),
                n.e(661008),
                n.e(454625),
                n.e(826240),
                n.e(455924),
                n.e(252229),
                n.e(294067),
                n.e(250478),
                n.e(75971),
                n.e(679211),
                n.e(28561),
                n.e(324622),
                n.e(795093),
                n.e(963584),
                n.e(446800),
                n.e(356821),
                n.e(617823),
                n.e(509856),
                n.e(246969),
                n.e(880672),
                n.e(999873),
                n.e(908081),
                n.e(80077),
                n.e(165211),
                n.e(829260),
                n.e(471488),
                n.e(504098),
                n.e(182141),
                n.e(746479),
                n.e(664430),
                n.e(375234),
                n.e(916519),
                n.e(815341),
                n.e(192847),
                n.e(407327),
            ]).then(n.bind(n, 399503));
            return await i(e, { captureId: t, build: s, onAccepted: l, resolveUploadUrl: o });
        }
        let d = (0, c.Wg)(e);
        try {
            let n = await (0, g.o$)(e, 6e3);
            if (null == n) return { status: "unavailable" };
            let i = null == l ? { uploadToken: void 0 } : await l();
            if (null == i) return { status: "unavailable" };
            let r = await j(e, n),
                d = (0, _.WI)(r, { captureId: t, spec: a, build: s, uploadToken: i.uploadToken, resolveUploadUrl: o });
            function u(e) {
                return Promise.race([d, new Promise((t) => setTimeout(() => t(null), e))]);
            }
            let c = await u(3e3);
            if (null != c) return c;
            let A = await (0, E.iU)(r, t, a, i.uploadToken);
            if ("accepted" === A.status) return A;
            return (await u(3e3)) ?? A;
        } finally {
            d();
        }
    },
    relayPreviewControl: async function (e, t, n, i) {
        if (!(0, g.rQ)(e)) return { status: "unavailable" };
        let r = (0, c.Wg)(e);
        try {
            let r = await (0, g.o$)(e, 6e3);
            if (null == r) return { status: "unavailable" };
            let a = await i?.();
            if (!1 === a) return { status: "unavailable" };
            let s = await j(e, r),
                l = (0, M._q)(s);
            try {
                let i = !1,
                    r = await (async function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => null;
                        null != I && I.iframe !== e && T();
                        let i =
                            I?.iframe === e
                                ? I
                                : (function (e) {
                                      let t = document.activeElement;
                                      if (!(0, f.vq)(t, HTMLElement) || t === e || t === document.body) return null;
                                      let n = {
                                          iframe: e,
                                          element: t,
                                          restoreSelection: p(t),
                                          active: 0,
                                          personActed: !1,
                                          released: !1,
                                          holdRequested: !1,
                                          stop: () => {
                                              (document.removeEventListener("blur", i, !0),
                                                  document.removeEventListener("pointerdown", r, !0));
                                          },
                                      };
                                      function i(e) {
                                          (0, f.vq)(e.target, Node) &&
                                              n.element.contains(e.target) &&
                                              (n.restoreSelection = p(n.element) ?? n.restoreSelection);
                                      }
                                      function r() {
                                          ((n.personActed = !0), 0 === n.active && m(n));
                                      }
                                      return (
                                          document.addEventListener("blur", i, !0),
                                          document.addEventListener("pointerdown", r, !0),
                                          n
                                      );
                                  })(e);
                        if (null == i) return await t();
                        ((I = i), (i.active += 1));
                        try {
                            return await t();
                        } finally {
                            ((i.active -= 1), (i.holdRequested = n() ?? i.holdRequested));
                            let t = !i.personActed && !i.released && i.holdRequested && document.activeElement === e;
                            0 !== i.active || t || m(i);
                        }
                    })(
                        s,
                        async () => {
                            let r = await (async function (e, t, n) {
                                let i,
                                    r = D(),
                                    a = (function (e) {
                                        if (!0 === e.passive || !0 === e.snapshot || 1 !== e.steps.length) return null;
                                        let t = e.steps[0],
                                            n = t.calls;
                                        return "cdp" !== t.action ||
                                            !Array.isArray(n) ||
                                            0 === n.length ||
                                            n.length > 200
                                            ? null
                                            : n;
                                    })(n);
                                if (null == r || null == a) return null;
                                let s = await b(e, t);
                                if (null == s) return null;
                                if ("cancelled" === s)
                                    return v(
                                        {
                                            action: "cdp",
                                            ok: !1,
                                            code: "blocked",
                                            message: "stopped by the user",
                                            ms: 0,
                                        },
                                        "",
                                    );
                                let l = Date.now(),
                                    o = null != r.onInput;
                                o && (0, S.W8)(e, t);
                                let d = new Promise((e) => {
                                    i = setTimeout(() => e("timeout"), 1e4);
                                });
                                try {
                                    let t = await Promise.race([r.runBatch(a), d]),
                                        n = Date.now() - l;
                                    if ("timeout" === t)
                                        return (
                                            P(e),
                                            v(
                                                {
                                                    action: "cdp",
                                                    ok: !1,
                                                    code: "timeout",
                                                    message: "the batch ran out of time",
                                                    ms: n,
                                                },
                                                "",
                                            )
                                        );
                                    if (t.stopped)
                                        return v(
                                            {
                                                action: "cdp",
                                                ok: !1,
                                                code: "blocked",
                                                message: "stopped by the user",
                                                ms: n,
                                            },
                                            t.build,
                                        );
                                    let i = [...s.earlierEvents.splice(0), ...t.events],
                                        o = {
                                            replies: t.replies,
                                            url: t.url,
                                            title: t.title,
                                            doc: t.doc,
                                            ...(i.length > 0 ? { events: i } : {}),
                                        };
                                    return v({ action: "cdp", ok: !0, value: o, ms: n }, t.build);
                                } catch (t) {
                                    return (
                                        P(e),
                                        {
                                            status: "failed",
                                            message: t instanceof Error ? t.message : "the preview debugger failed",
                                        }
                                    );
                                } finally {
                                    (clearTimeout(i), o && (0, S.bq)(e));
                                }
                            })(e, s, n);
                            return null != r ? r : ((i = !0), await (0, N.J)(s, t, n));
                        },
                        () =>
                            i
                                ? !n.steps.some((e) => /"Input\.(dispatchKeyEvent|insertText)"/.test(JSON.stringify(e)))
                                : null,
                    );
                if ("completed" !== r.status) return r;
                let a = [...K.drain(e), ...l.drain()];
                if (0 === a.length) return r;
                return { ...r, response: { ...r.response, native: a } };
            } finally {
                l.end();
            }
        } finally {
            r();
        }
    },
    abortPreviewControl: function (e) {
        (P(e), T());
        let t = (0, g.UJ)(e);
        null != t &&
            (0, A.W)(
                t,
                "control-abort",
                {},
                { timeoutMs: 2e3, retryMs: 400, sourceMatch: "origin", label: "control abort" },
            ).catch(() => {});
    },
    beginPreviewOperation: function (e) {
        (K.begin(e),
            (function (e) {
                if (null == D() || R.has(e)) return;
                let t = { cancelled: !1 };
                (R.set(e, t),
                    (0, g.o$)(e, 6e3)
                        .then((n) => (null == n || t.cancelled ? null : b(e, n)))
                        .catch(() => {})
                        .finally(() => {
                            R.get(e) === t && R.delete(e);
                        }));
            })(e));
    },
    endPreviewOperation: function (e) {
        (K.end(e), P(e), T());
    },
    releasePreviewControl: function (e) {
        (0, c.GU)(e);
    },
    reloadAppFrames: function (e) {
        if (null != e)
            for (let t of a.A.getAllFrames())
                (0, Y.x1)(t) && t.applicationId === e && !t.data.proxyTicketRefreshing && r.A.refreshProxyTicket(t.id);
    },
};
