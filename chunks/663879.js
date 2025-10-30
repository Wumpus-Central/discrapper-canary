n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(594190),
    a = n(314897),
    o = n(19780),
    s = n(885110),
    l = n(924557),
    c = n(981631);
function u(e, t, n) {
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
class d extends r.Z {
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleMessageCreate(e) {
        var t, n, r;
        let { message: i, channelId: s } = e;
        if (!(0, l.NS)()) return;
        let c = null == (t = i.author) ? void 0 : t.id;
        if (null == c || (null == (n = i.author) ? void 0 : n.id) === a.default.getId()) return;
        let u = o.Z.getChannelId();
        if (null == u || s !== u) return;
        let d = i.content;
        if (null == d) return;
        let f = "__REMOTE_CLIP_TRIGGER__",
            _ = d.indexOf(f);
        if (-1 === _) return;
        let p = _ + f.length,
            h = d.substring(p);
        try {
            let e = JSON.parse(h);
            this.handleRemoteClipTrigger(
                {
                    type: "CLIPS_REMOTE_TRIGGER",
                    userId: c,
                    applicationId: e.applicationId,
                    partyId: null != (r = e.activityPartyId) ? r : null,
                },
                e.triggerClipId,
            );
        } catch (e) {
            return;
        }
    }
    handleRemoteClipTrigger(e, t) {
        let { userId: n, applicationId: r, partyId: o } = e;
        if (!(0, l.NS)() || n === a.default.getId()) return;
        let u = s.Z.getActivities().find(
                (e) => e.type === c.IIU.PLAYING && null != e.application_id && e.application_id === r,
            ),
            d = i.ZP.getVisibleGame(),
            f = null != u,
            _ = (null == d ? void 0 : d.id) === r;
        if (f || _) {
            if (null != o) {
                var p;
                if ((null == u || null == (p = u.party) ? void 0 : p.id) !== o) return;
            }
            null != this.callback && null != t && this.callback(n, t);
        }
    }
    constructor(...e) {
        super(...e),
            u(this, "callback", null),
            u(this, "actions", {
                MESSAGE_CREATE: (e) => this.handleMessageCreate(e),
                CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e),
            });
    }
}
let f = new d();
