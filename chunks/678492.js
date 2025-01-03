var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(317770),
    s = n(388032);
class o extends a.Z {
    _initialize() {
        l.Z.subscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        l.Z.unsubscribe('POGGERMODE_TEMPORARILY_DISABLED', this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, r.openModal)((e) =>
            (0, i.jsx)(r.ConfirmModal, {
                ...e,
                header: s.intl.string(s.t.wDQgnZ),
                confirmText: s.intl.string(s.t['cY+Ooa']),
                confirmButtonColor: r.Button.Colors.GREEN,
                children: (0, i.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: s.intl.string(s.t.OJklbW)
                })
            })
        );
    }
}
t.Z = new o();
