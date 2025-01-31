n.r(t),
    n.d(t, {
        openCreateGuildModal: () => d,
        updateCreateGuildModal: () => m
    });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(390885),
    o = n(626135),
    a = n(299402),
    s = n(675999),
    c = n(981631),
    u = n(630724);
function _(e, t, n, l) {
    return (0, i.jsx)(a.Z, {
        onSuccess: (t) => {
            r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS), e.onClose(), null == l || l(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case s._m.GUILD_TEMPLATES:
                        r.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
                            o.default.track(c.rMx.OPEN_MODAL, {
                                type: 'Create Guild Templates',
                                location: t
                            });
                        break;
                    case s._m.CUSTOMIZE_GUILD:
                        r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
                            o.default.track(c.rMx.OPEN_MODAL, {
                                type: 'Create Guild Step 2',
                                location: t
                            });
                        break;
                    case s._m.CREATION_INTENT:
                        o.default.track(c.rMx.OPEN_MODAL, {
                            type: 'Server Intent Discovery',
                            location: t
                        });
                        break;
                    case s._m.JOIN_GUILD:
                        r.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
                            o.default.track(c.rMx.OPEN_MODAL, {
                                type: 'Join Guild',
                                location: t
                            });
                }
            })(e, n),
        initialSlide: t,
        hasJoinButton: !0,
        ...e
    });
}
let d = (e) => {
        let { initialSlide: t, location: n, onSuccess: i } = e;
        (0, l.h7j)((e) => _(e, t, n, i), { modalKey: s.PU });
    },
    m = (e) => {
        let { slide: t, location: n } = e;
        (0, l.oav)(s.PU, (e) => _(e, t, n));
    };
