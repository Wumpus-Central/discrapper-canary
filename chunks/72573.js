var i = n(158390),
    r = n(439372),
    a = n(626584),
    s = n(287809),
    l = n(927813),
    o = n(773527),
    d = n(773240),
    c = n(211824);
let u = new a.A("HexagonCampaignExpiredPerkRestoreManager"),
    _ = l.A.Millis.DAY,
    E = l.A.Millis.HOUR,
    A = 5 * l.A.Millis.MINUTE,
    f = l.A.Millis.HOUR;
class h extends r.A {
    checkTimeout = null;
    isRestoring = !1;
    isRetryScheduled = !1;
    retryBackoff = new i.A(A, f);
    actions = {
        POST_CONNECTION_OPEN: () => this.handleRestoreTrigger(),
        CURRENT_USER_UPDATE: () => this.handleRestoreTrigger(),
    };
    _terminate() {
        (this.clearCheckTimeout(), (this.isRetryScheduled = !1), this.retryBackoff.succeed());
    }
    clearCheckTimeout() {
        null != this.checkTimeout && (clearTimeout(this.checkTimeout), (this.checkTimeout = null));
    }
    scheduleCheck(e) {
        (this.clearCheckTimeout(), null != e && (this.checkTimeout = setTimeout(this.restoreExpiredPerks, e)));
    }
    handleRestoreTrigger() {
        this.isRetryScheduled || this.restoreExpiredPerks();
    }
    restoreExpiredPerks = async () => {
        var e, t;
        let n;
        if (this.isRestoring) return;
        ((this.isRestoring = !0), (this.isRetryScheduled = !1));
        let i = !1;
        try {
            i = await (0, d.d_)([]);
        } catch (e) {
            u.warn(`Failed to restore expired Hexagon campaign perks: ${e}`);
        } finally {
            this.isRestoring = !1;
        }
        if (!i) {
            ((this.isRetryScheduled = !0), this.scheduleCheck(this.retryBackoff.fail()));
            return;
        }
        this.retryBackoff.succeed();
        let r =
            ((e = s.default.getCurrentUser()?.premiumType),
            (t = Date.now()),
            0 ===
            (n = Object.values(c.vB)
                .map((t) => (0, o.cC)(t, e))
                .filter((e) => e > t)).length
                ? null
                : Math.min(Math.min(...n) - t, _));
        this.scheduleCheck(null != r ? r + Math.random() * E : null);
    };
}
let I = new h();
n.d(t, {}, { Ay: I });
