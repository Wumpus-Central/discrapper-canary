(n.d(t, { k: () => R, s: () => N }), n(321073));
var i = n(941426),
    r = n(91242),
    a = n(515718),
    s = n(998979),
    l = n(395771),
    o = n(681971),
    d = n(207228);
let c = new i.Vy("ConjureFrameScreenCapture"),
    u = null,
    _ = null,
    E = !1,
    A = [],
    h = null;
function f() {
    ((E = !0), (_ = null));
}
function I(e) {
    let t = A;
    for (let n of ((A = []), t)) n(e);
}
async function p(e) {
    let t,
        n = u;
    if (null == n) return;
    try {
        t = await (0, a.We)(new Blob([e.image], { type: e.mimeType }));
    } catch (e) {
        u === n &&
            I({ status: "capture_failed", reason: `read failed: ${e instanceof Error ? e.message : String(e)}` });
        return;
    }
    if (u !== n) return;
    let i = Date.now();
    n.hasFrame ||
        ((n.hasFrame = !0),
        c.info(`first frame after ${i - n.startedAt}ms`, {
            applicationId: n.applicationId,
            width: e.width,
            height: e.height,
        }));
    let r = { image: t, width: e.width, height: e.height, capturedAt: i };
    if (!(0, o._)()) {
        (f(), I({ status: "game_not_focused", reason: "player left the game" }));
        return;
    }
    (E || (_ = r), I(r));
}
function T(e) {
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
function m() {
    let e = null != u ? T(u) : null;
    null != e && S(e);
}
function g(e, t) {
    for (let n of new Set([r.A, s.A, l.A, ...(e.gate?.stores ?? [])]))
        t ? n.addChangeListener(m) : n.removeChangeListener(m);
}
function S(e) {
    null != u &&
        (c.info(`capture stopped: ${e.reason}`, { applicationId: u.applicationId }),
        g(u, !1),
        (u = null),
        (_ = null),
        null != h && clearTimeout(h),
        (h = null),
        (0, d.ik)(),
        I(e));
}
function N() {
    null != u && S(T(u) ?? { status: "capture_failed", reason: "stopped" });
}
function C(e) {
    return null != e && Number.isFinite(e) ? Math.min(Math.max(Math.floor(e), 1), 1920) : 1280;
}
function O(e, t) {
    let { status: n, reason: i } = t,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
    return (
        ("timeout" === n || "capture_failed" === n ? c.warn : c.info)(`capture ${n}: ${i}`, {
            applicationId: e,
            waitedMs: r,
        }),
        { status: n }
    );
}
async function R(e) {
    let { applicationId: t } = e;
    if (!(0, d.y8)()) return O(t, { status: "unsupported", reason: "media engine" });
    if (e.gate?.isAllowed() === !1) {
        let n = { status: "no_game", reason: "game not targeted" };
        return (u?.frameId === e.frameId && S(n), O(t, n));
    }
    if (!(0, d.aG)()) return O(t, { status: "no_game", reason: "no visible game" });
    if (!1 === e.gameFocused) return (f(), O(t, { status: "game_not_focused", reason: "game window not focused" }));
    E = !1;
    let n = C(e.maxWidth),
        i = C(e.maxHeight);
    if (null == u || u.frameId !== e.frameId || u.maxWidth !== n || u.maxHeight !== i) {
        if (
            (null != u && g(u, !1),
            (u = {
                frameId: e.frameId,
                applicationId: t,
                maxWidth: n,
                maxHeight: i,
                startedAt: Date.now(),
                hasFrame: !1,
                gate: e.gate,
            }),
            (_ = null),
            I({ status: "busy", reason: "another request took over the capture" }),
            !(0, d.it)({ appId: t, appName: e.appName }, { width: n, height: i, intervalMs: 2e3 }, p))
        )
            return (
                S({ status: "unsupported", reason: "snapshots did not start" }),
                O(t, { status: "unsupported", reason: "snapshots did not start" })
            );
        g(u, !0);
    }
    (null != h && clearTimeout(h), (h = setTimeout(() => S({ status: "capture_failed", reason: "idle" }), 3e4)));
    let r = Date.now(),
        a =
            null != _ && r - _.capturedAt <= 4e3
                ? _
                : await new Promise((e) => {
                      let t = setTimeout(() => {
                          ((A = A.filter((e) => e !== n)),
                              e(
                                  (0, d.aG)()
                                      ? { status: "timeout", reason: "no frame within 5000ms" }
                                      : { status: "no_game", reason: "game left while waiting" },
                              ));
                      }, 5e3);
                      function n(n) {
                          (clearTimeout(t), e(n));
                      }
                      A.push(n);
                  });
    return "status" in a
        ? ("timeout" === a.status && u?.frameId === e.frameId && (0, d.DD)(t, "timeout"), O(t, a, Date.now() - r))
        : ((0, d.DD)(t, null), { status: "ok", image: a.image, width: a.width, height: a.height });
}
