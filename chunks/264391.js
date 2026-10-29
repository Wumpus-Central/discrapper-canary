(n.d(t, { $G: () => ea, yx: () => eu, nM: () => eo, eT: () => eh, SC: () => ed, K3: () => es, yM: () => en }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(323874),
    n(14289),
    n(35956),
    n(321073));
var l = n(477900),
    i = n(827762),
    r = n(858899),
    s = n(192308),
    a = n(73153),
    o = n(148494),
    u = n(280889),
    c = n(626584),
    d = n(274652),
    h = n(823099),
    m = n(118517),
    f = n(853145),
    p = n(378570),
    g = n(400492),
    x = n(734057),
    E = n(803224),
    S = n(74477),
    y = n(934581),
    A = n(582128),
    C = n(189213),
    b = n(778712),
    I = n(97808),
    v = n(825484),
    N = n(821609),
    T = n(559106),
    j = n(939249),
    k = n(834730),
    _ = n(47167),
    R = n(713654),
    O = n(598104),
    w = n(145497),
    M = n(71393),
    L = n(994500),
    P = n(287809),
    D = n(427262),
    U = n(652215),
    V = n(105292),
    W = n(510723);
function F(e) {
    return e.isForumPost() ? (x.A.getChannel(e.parent_id) ?? e) : e;
}
function B(e, t) {
    let n = (0, R.gU)(e);
    return null == n
        ? null
        : 12 === t
          ? (0, l.jsx)(n, { size: "custom", width: 12, height: 12, color: "currentColor", "aria-hidden": !0 })
          : (0, l.jsx)(n, { size: t, color: "currentColor", "aria-hidden": !0 });
}
function G(e) {
    let { channel: t, targetChannel: n, transitionState: i, onClose: r, onReturn: s, onDiscard: a } = e,
        o = F(t),
        u = t.getGuildId(),
        c =
            null == u || u !== n.getGuildId()
                ? (function (e) {
                      let t = F(e),
                          n = M.A.getGuild(e.getGuildId());
                      if (null != n)
                          return {
                              icon: (0, l.jsx)(w.Ay, { guild: n, iconSize: 32, className: W.sm }),
                              primary: n.name,
                              secondary: (0, _.m1)(t, P.default, L.A),
                          };
                      let i = (e.recipients ?? []).map((e) => P.default.getUser(e)).filter(Boolean);
                      if (e.type === U.rbe.GROUP_DM)
                          return {
                              icon: (0, l.jsx)(O.A, {
                                  channel: e,
                                  size: b._3.SIZE_32,
                                  className: W.sm,
                                  "aria-hidden": !0,
                              }),
                              primary: (0, _.m1)(e, P.default, L.A),
                              secondary: i.map((e) => D.Ay.getUserTag(e)).join(", "),
                          };
                      let r = i[0];
                      return {
                          icon:
                              null != r
                                  ? (0, l.jsx)(I.eu, {
                                        size: b._3.SIZE_32,
                                        src: r.getAvatarURL(null, 32),
                                        className: W.sm,
                                        "aria-hidden": !0,
                                    })
                                  : null,
                          primary: D.Ay.getName(r) ?? (0, _.m1)(e, P.default, L.A),
                          secondary: null != r ? D.Ay.getUserTag(r) : void 0,
                      };
                  })(t)
                : null,
        d = A.useCallback(() => {
            (r(), s());
        }, [r, s]),
        h = A.useCallback(() => {
            (a(), r());
        }, [r, a]);
    return (0, l.jsx)(C.a, {
        size: "sm",
        title: V.intl.string(V.t.YeUur2),
        subtitle: (function (e) {
            if (e.type === U.rbe.GROUP_DM) return V.intl.string(V.t["8o9Emp"]);
            let t = e.recipients ?? [],
                n = 1 === t.length ? P.default.getUser(t[0]) : null;
            if (e.type === U.rbe.DM)
                return V.intl.format(V.t.UlsYSN, {
                    recipientName: D.Ay.getName(n) ?? (0, _.m1)(e, P.default, L.A),
                    recipientHook: (e) => (0, l.jsx)("strong", { children: e }),
                });
            let i = F(e),
                r = M.A.getGuild(e.getGuildId()),
                s = (0, _.m1)(i, P.default, L.A),
                a = null != r ? s : (D.Ay.getName(n) ?? s);
            return V.intl.format(V.t.hjBbhU, {
                destinationName: a,
                destinationHook: (e) =>
                    (0, l.jsxs)("span", {
                        className: W.Fx,
                        children: [null != r ? B(i, "xxs") : null, (0, l.jsx)("strong", { children: e })],
                    }),
            });
        })(t),
        transitionState: i,
        onClose: r,
        role: "alertdialog",
        actions: [],
        actionBarInput: (0, l.jsxs)(v.e, {
            className: W.o1,
            direction: "vertical",
            fullWidth: !0,
            children: [
                (0, l.jsx)(N.$, { autoFocus: !0, text: V.intl.string(V.t.h7tN5I), variant: "secondary", onClick: d }),
                (0, l.jsx)(N.$, { text: V.intl.string(V.t.IQrVoF), variant: "critical-primary", onClick: h }),
            ],
        }),
        children:
            null != c
                ? (0, l.jsx)(T.vN, {
                      offset: { right: 4, bottom: 4 },
                      children: (0, l.jsxs)(j.D, {
                          className: W.j_,
                          onClick: d,
                          "aria-label": V.intl.string(V.t.h7tN5I),
                          children: [
                              c.icon,
                              (0, l.jsxs)("div", {
                                  className: W.Yr,
                                  children: [
                                      (0, l.jsx)(k.E, {
                                          className: W.ed,
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          lineClamp: 1,
                                          children: c.primary,
                                      }),
                                      null != c.secondary && "" !== c.secondary
                                          ? (0, l.jsxs)("div", {
                                                className: W.lj,
                                                children: [
                                                    null != t.getGuildId() ? B(o, 12) : null,
                                                    (0, l.jsx)(k.E, {
                                                        className: W.ed,
                                                        variant: "text-xs/medium",
                                                        color: "text-muted",
                                                        lineClamp: 1,
                                                        children: c.secondary,
                                                    }),
                                                ],
                                            })
                                          : null,
                                  ],
                              }),
                          ],
                      }),
                  })
                : null,
    });
}
var K = n(709372),
    H = n(680671),
    z = n(518950),
    q = n(381941);
let $ = (z.iA + 500) / 1e3,
    Q = "voice_message_recording_stopped",
    Z = new c.A("VoiceMessageRecording");
function X() {
    (0, r.P0)({ text: V.intl.string(V.t.GjXjfk), variant: "critical" });
}
function J(e) {
    e.cleanup?.();
}
let Y = null;
function ee(e) {
    null != e.maxDurationTimer && (window.clearTimeout(e.maxDurationTimer), (e.maxDurationTimer = null));
}
let et = null;
function en(e) {
    return Y?.channelId === e ? Y.samples : et?.channelId === e ? et.samples : null;
}
function el(e) {
    if (0 === e.length) return "";
    let t = (e.length > 256 ? (0, y.A)(e, 256) : e).map((e) => Math.min(Math.round(e), 255));
    return i.fromByteArray(new Uint8Array(t));
}
function ei(e) {
    null != e.playbackUrl && (URL.revokeObjectURL(e.playbackUrl), (e.playbackUrl = null));
}
function er(e) {
    let t = et;
    t?.channelId === e && (ei(t), (et = null), (0, K.zh)(e), t.resultPromise.then(J).catch(() => {}));
}
async function es(e) {
    if (!(0, H.t)()) return void Z.warn("Voice message recording is not supported on this client");
    if (!S.A.getConfig({ location: S.R }).enabled || (0, K.tO)()) return;
    let t = (0, K.yC)();
    if (null != t)
        if (null == x.A.getChannel(t)) er(t);
        else {
            let n, i;
            if (t === e) return;
            return void ((n = x.A.getChannel(t)),
            (i = x.A.getChannel(e)),
            null != n &&
                null != i &&
                (0, s.openModal)((e) =>
                    (0, l.jsx)(G, {
                        ...e,
                        channel: n,
                        targetChannel: i,
                        onReturn: () => (0, p.iN)(t),
                        onDiscard: () => er(t),
                    }),
                ));
        }
    let n = (0, K.CH)();
    if (null != n && n !== e) return void eu(n);
    let i = (0, K.Mk)(e);
    if (i?.phase === "requesting" || i?.phase === "recording") return;
    let a = (0, H.d)(),
        o = { channelId: e, backend: a, samples: [], startedAtMs: null, maxDurationTimer: null };
    ((Y = o), (0, K.z5)(e, "requesting"));
    try {
        await a.start((e) => {
            o.samples.push(e);
        });
    } catch (t) {
        (Z.error("Failed to start voice message recording", t),
            (Y = null),
            (0, K.zh)(e),
            (0, r.P0)({ text: V.intl.string(V.t.H03AqF), variant: "critical" }));
        return;
    }
    Y !== o
        ? a.cancel()
        : ((o.startedAtMs = Date.now()),
          (0, K.z5)(e, "recording", o.startedAtMs),
          (o.maxDurationTimer = window.setTimeout(() => {
              Y === o && ec(o.channelId, $);
          }, z.iA)));
}
async function ea(e) {
    let t,
        n = Y;
    if (null == n || n.channelId !== e) return;
    ((Y = null), ee(n), (0, K.zh)(e), (0, K.Rz)(e, !0));
    try {
        t = await n.backend.stop();
    } catch (e) {
        (Z.error("Failed to finalize voice message recording", e), X());
        return;
    } finally {
        (0, K.Rz)(e, !1);
    }
    if (t.durationSecs < 0.5) return void J(t);
    let l = el(n.samples);
    em(e, t.file, t.durationSecs, l, t.cleanup);
}
function eo(e) {
    let t = Y;
    return (
        null != t &&
        t.channelId === e &&
        (ec(e, null != t.startedAtMs ? Math.max(0, (Date.now() - t.startedAtMs) / 1e3) : 0), !0)
    );
}
function eu(e) {
    eo(e) &&
        (E.A.isSoundDisabled(Q) || (0, g.Ak)(Q, 0.4),
        (0, r.P0)({ text: V.intl.string(V.t.UM2R7g), variant: "default" }));
}
function ec(e, t) {
    let n = Y;
    if (null == n || n.channelId !== e) return;
    ((Y = null), ee(n));
    let l = n.backend.stop();
    ((0, K.Rz)(e, !0),
        l.then(
            (t) => {
                if (((0, K.Rz)(e, !1), et?.resultPromise === l)) {
                    let n = URL.createObjectURL(t.file);
                    ((et.playbackUrl = n),
                        (0, K.AL)(e, t.durationSecs),
                        (0, K.o2)(e, { src: n, fileName: t.file.name, fileSize: t.file.size, waveform: et.waveform }));
                }
            },
            () => (0, K.Rz)(e, !1),
        ),
        l.catch((t) => {
            (Z.error("Failed to finalize voice message recording", t),
                et?.resultPromise === l && ((et = null), (0, K.zh)(e), X()));
        }),
        (et = { channelId: e, resultPromise: l, waveform: el(n.samples), samples: n.samples, playbackUrl: null }),
        (0, K.tH)(e, t));
}
async function ed(e) {
    let t,
        n = et?.channelId === e ? et : null;
    if ((null != n && ei(n), (et = null), (0, K.zh)(e), null != n)) {
        try {
            t = await n.resultPromise;
        } catch {
            X();
            return;
        }
        if (t.durationSecs < 0.5) return void J(t);
        em(e, t.file, t.durationSecs, n.waveform, t.cleanup);
    }
}
function eh(e) {
    let t = Y;
    (null != t && t.channelId === e && (ee(t), t.backend.cancel(), (Y = null)), er(e), (0, K.zh)(e));
}
function em(e, t, n, l, i) {
    let r = x.A.getChannel(e);
    if (null == r) return void i?.();
    let s = new u.bK({ platform: d.x.WEB, file: t, channelId: r.id }, r.id);
    if (((s.durationSecs = n), (s.waveform = l), null != i)) {
        let e = !1;
        function a() {
            e || ((e = !0), i());
        }
        (s.once("complete", a), s.once("error", a));
    }
    let c = f.A.getPendingReply(e),
        p = o.A.getSendMessageOptionsForReply(c);
    (o.A.sendMessage(r.id, { content: "", tts: !1, invalidEmojis: [], validNonShortcutEmojis: [] }, void 0, {
        flags: U.pr7.IS_VOICE_MESSAGE,
        location: q.Hx.VOICE_MESSAGE,
        attachmentsToUpload: [s],
        onAttachmentUploadError: (e, t, n) => {
            (0, h.k)({ file: e, guildId: r.getGuildId(), analyticsLocations: [], code: t, reason: n });
        },
        ...p,
    }),
        (0, m.Jx)(e));
}
a.h.subscribe("LOGOUT", function () {
    let e = Y;
    null != e && (ee(e), e.backend.cancel(), (Y = null));
    let t = et;
    (null != t && ei(t), (et = null), t?.resultPromise.then(J).catch(() => {}), (0, K.nf)());
});
