l.d(i, { A: () => g }), l(896048);
var t = l(439372),
    r = l(15285),
    a = l(961350),
    n = l(461213),
    s = l(734066),
    c = l(652215);
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
class d extends t.A {
    registerCallback(e) {
        this.callback = e;
    }
    unregisterCallback() {
        this.callback = null;
    }
    handleRemoteClipTrigger(e, i) {
        let { userId: l, applicationId: t, partyId: u } = e;
        if (!(0, s.J)() || l === a.default.getId()) return;
        let d = n.A.getActivities().find(
                (e) => e.type === c.$pd.PLAYING && null != e.application_id && e.application_id === t,
            ),
            g = r.Ay.getVisibleGame(),
            o = null != d,
            p = (null == g ? void 0 : g.id) === t;
        if (o || p) {
            if (null != u) {
                var b;
                if ((null == d || null == (b = d.party) ? void 0 : b.id) !== u) return;
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
