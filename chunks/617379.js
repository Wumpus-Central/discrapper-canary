n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(110255),
    r = n(64247),
    s = n(981631),
    o = n(388032);
function c(e) {
    let { channel: t } = e;
    return (0, i.jsx)(l.yRy, {
        align: 'right',
        animation: l.yRy.Animation.NONE,
        position: 'bottom',
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(r.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-thread-notifications',
                      label: o.intl.string(o.t.ljs3OT)
                  })
                : (0, i.jsx)(a.Z, {
                      ...e,
                      channel: t,
                      navId: 'recents-notifications',
                      label: o.intl.string(o.t.ljs3OT),
                      location: { section: s.jXE.INBOX },
                      includeGuildMute: !0
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(l.M0o, {
                tooltip: o.intl.string(o.t.h850Sk),
                color: l.YX$.TERTIARY,
                icon: (0, i.jsx)(l.Dkj, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: t
            });
        }
    });
}
