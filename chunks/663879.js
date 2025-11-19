l.d(i, { Z: () => g }), l(388685);
var t = l(147913),
    r = l(594190),
    a = l(314897),
    n = l(885110),
    s = l(924557),
    c = l(981631);
function u(e, i, l) {
    return (
        i in e
            ? Object.defineProperty(e, i, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[i] = l),
        e
    );
}
class d extends t.Z {
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e, i) {
        let { userId: l, applicationId: t, partyId: u } = e;
        if (!(0, s.NS)() || l === a.default.getId()) return;
        let d = n.Z.getActivities().find(
                (e) => e.type === c.IIU.PLAYING && null != e.application_id && e.application_id === t,
            ),
            g = r.ZP.getVisibleGame(),
            o = null != d,
            b = (null == g ? void 0 : g.id) === t;
        if (o || b) {
            if (null != u) {
                var h;
                if ((null == d || null == (h = d.party) ? void 0 : h.id) !== u) return;
            }
            null != this.callback && null != i && this.callback(l, i);
        }
    }
    constructor(...e) {
        super(...e),
            u(this, "callback", null),
            u(this, "actions", { CLIPS_REMOTE_TRIGGER: (e) => this.handleRemoteClipTrigger(e) });
    }
}
let g = new d();
