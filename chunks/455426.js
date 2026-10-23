(n.d(t, { k: () => C, s: () => g }), n(321073));
var i = n(941426),
    r = n(91242),
    a = n(515718),
    s = n(998979),
    l = n(395771),
    o = n(207228);
let d = new i.Vy("ConjureFrameScreenCapture"),
    c = null,
    u = null,
    _ = !1,
    E = [],
    A = null;
function h(e) {
    let t = E;
    for (let n of ((E = []), t)) n(e);
}
async function f(e) {
    let t,
        n = c;
    if (null == n) return;
    try {
        t = await (0, a.We)(new Blob([e.image], { type: e.mimeType }));
    } catch (e) {
        c === n &&
            h({ status: "capture_failed", reason: `read failed: ${e instanceof Error ? e.message : String(e)}` });
        return;
    }
    if (c !== n) return;
    let i = Date.now();
    n.hasFrame ||
        ((n.hasFrame = !0),
        d.info(`first frame after ${i - n.startedAt}ms`, {
            applicationId: n.applicationId,
            width: e.width,
            height: e.height,
        }));
    let r = { image: t, width: e.width, height: e.height, capturedAt: i };
    (_ || (u = r), h(r));
}
function I(e) {
    var t;
    let n;
    if (null == r.A.getFrame(e.frameId)) return { status: "capture_failed", reason: "frame closed" };
    let i =
        ((t = e.applicationId),
        null == (n = s.A.getDecision(t, "screen_capture"))
            ? { status: "permission_required", reason: "not granted" }
            : "denied" === n
              ? { status: "permission_denied", reason: "denied" }
              : null);
    return null != i
        ? { ...i, reason: "permission revoked" }
        : e.gate?.isAllowed() === !1
          ? { status: "no_game", reason: "game not targeted" }
          : l.A.isCapturing()
            ? null
            : { status: "capture_failed", reason: "snapshots stopped" };
}
function p() {
    let e = null != c ? I(c) : null;
    null != e && m(e);
}
function T(e, t) {
    for (let n of new Set([r.A, s.A, l.A, ...(e.gate?.stores ?? [])]))
        t ? n.addChangeListener(p) : n.removeChangeListener(p);
}
function m(e) {
    null != c &&
        (d.info(`capture stopped: ${e.reason}`, { applicationId: c.applicationId }),
        T(c, !1),
        (c = null),
        (u = null),
        null != A && clearTimeout(A),
        (A = null),
        (0, o.ik)(),
        h(e));
}
function g() {
    null != c && m(I(c) ?? { status: "capture_failed", reason: "stopped" });
}
function S(e) {
    return null != e && Number.isFinite(e) ? Math.min(Math.max(Math.floor(e), 1), 1920) : 1280;
}
function N(e, t) {
    let { status: n, reason: i } = t,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return (
        ("timeout" === n || "capture_failed" === n ? d.warn : d.info)(`capture ${n}: ${i}`, {
            applicationId: e,
            waitedMs: r,
        }),
        { status: n }
    );
}
async function C(e) {
    let { applicationId: t } = e;
    if (!(0, o.y8)()) return N(t, { status: "unsupported", reason: "media engine" });
    if (e.gate?.isAllowed() === !1) {
        let n = { status: "no_game", reason: "game not targeted" };
        return (c?.frameId === e.frameId && m(n), N(t, n));
    }
    if (!(0, o.aG)()) return N(t, { status: "no_game", reason: "no visible game" });
    if (!1 === e.gameFocused)
        return ((_ = !0), (u = null), N(t, { status: "game_not_focused", reason: "game window not focused" }));
    _ = !1;
    let n = S(e.maxWidth),
        i = S(e.maxHeight);
    if (null == c || c.frameId !== e.frameId || c.maxWidth !== n || c.maxHeight !== i) {
        if (
            (null != c && T(c, !1),
            (c = {
                frameId: e.frameId,
                applicationId: t,
                maxWidth: n,
                maxHeight: i,
                startedAt: Date.now(),
                hasFrame: !1,
                gate: e.gate,
            }),
            (u = null),
            h({ status: "busy", reason: "another request took over the capture" }),
            !(0, o.it)({ appId: t, appName: e.appName }, { width: n, height: i, intervalMs: 2e3 }, f))
        )
            return (
                m({ status: "unsupported", reason: "snapshots did not start" }),
                N(t, { status: "unsupported", reason: "snapshots did not start" })
            );
        T(c, !0);
    }
    (null != A && clearTimeout(A), (A = setTimeout(() => m({ status: "capture_failed", reason: "idle" }), 3e4)));
    let r = Date.now(),
        a =
            null != u && r - u.capturedAt <= 4e3
                ? u
                : await new Promise((e) => {
                      let t = setTimeout(() => {
                          ((E = E.filter((e) => e !== n)),
                              e(
                                  (0, o.aG)()
                                      ? { status: "timeout", reason: "no frame within 5000ms" }
                                      : { status: "no_game", reason: "game left while waiting" },
                              ));
                      }, 5e3);
                      function n(n) {
                          (clearTimeout(t), e(n));
                      }
                      E.push(n);
                  });
    return "status" in a
        ? ("timeout" === a.status && c?.frameId === e.frameId && (0, o.DD)(t, "timeout"), N(t, a, Date.now() - r))
        : ((0, o.DD)(t, null), { status: "ok", image: a.image, width: a.width, height: a.height });
}
