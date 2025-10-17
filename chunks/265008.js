n.d(t, { Z: () => b }), n(388685);
var r = n(544891),
    i = n(570140),
    a = n(147913),
    o = n(885110),
    s = n(70956),
    l = n(960048),
    c = n(290505),
    u = n(395687),
    d = n(981631),
    f = n(231338);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let p = 0.5 * s.Z.Millis.MINUTE;
function h() {
    return c.Z.getCurrentConfig({ location: "FriendOnlineTimer" }).useOnlineTimer;
}
async function m() {
    if (h())
        try {
            await r.tn.post({
                url: d.ANM.USER_MEANINGFULLY_ONLINE,
                rejectWithError: !0,
            }),
                i.Z.dispatch({
                    type: "FRIEND_ONLINE_TIMER_REPORTED",
                    timestampMs: Date.now(),
                });
        } catch (e) {
            l.Z.captureException(e, { tags: { app_context: "session_timer" } });
        }
}
function g(e) {
    return [f.Sk.ONLINE, f.Sk.STREAMING].includes(e);
}
class E extends a.Z {
    _initialize() {}
    _terminate() {
        this.clear();
    }
    constructor(...e) {
        super(...e),
            _(this, "timerId", null),
            _(this, "actions", {
                POST_CONNECTION_OPEN: () => this.start(),
                CONNECTION_RESUMED: () => this.start(),
                CONNECTION_CLOSED: () => this.clear(),
                CONNECTION_INTERRUPTED: () => this.clear(),
                SELF_PRESENCE_STORE_UPDATE: () => this.start(),
            }),
            _(this, "start", () => {
                h() &&
                    u.Z.isCooldownElapsed() &&
                    null == this.timerId &&
                    g(o.Z.getStatus()) &&
                    (this.timerId = setTimeout(() => {
                        (this.timerId = null), g(o.Z.getStatus()) && u.Z.isCooldownElapsed() && m();
                    }, p));
            }),
            _(this, "clear", () => {
                null != this.timerId && (clearTimeout(this.timerId), (this.timerId = null));
            });
    }
}
let b = new E();
