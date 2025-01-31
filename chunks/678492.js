n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(317770),
    s = n(388032);
class o extends a.Z {
    _initialize() {
        r.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        r.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, l.h7j)((e) =>
            (0, i.jsx)(l.ConfirmModal, {
                ...e,
                header: s.intl.string(s.t.wDQgnZ),
                confirmText: s.intl.string(s.t['cY+Ooa']),
                confirmButtonColor: l.zxk.Colors.GREEN,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: s.intl.string(s.t.OJklbW)
                })
            })
        );
    }
}
let c = new o();
