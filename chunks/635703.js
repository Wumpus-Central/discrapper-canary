n.r(t),
    n.d(t, {
        openCreateGuildModal: () => d,
        updateCreateGuildModal: () => p
    });
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(390885),
    l = n(626135),
    a = n(299402),
    s = n(675999),
    c = n(981631),
    u = n(630724);
function _(e, t, n, o) {
    return (0, r.jsx)(
        a.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                onSuccess: (t) => {
                    i.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS), e.onClose(), null == o || o(t);
                },
                onSlideChange: (e) =>
                    (function (e, t) {
                        switch (e) {
                            case s._m.GUILD_TEMPLATES:
                                i.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
                                    l.default.track(c.rMx.OPEN_MODAL, {
                                        type: 'Create Guild Templates',
                                        location: t
                                    });
                                break;
                            case s._m.CUSTOMIZE_GUILD:
                                i.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
                                    l.default.track(c.rMx.OPEN_MODAL, {
                                        type: 'Create Guild Step 2',
                                        location: t
                                    });
                                break;
                            case s._m.CREATION_INTENT:
                                l.default.track(c.rMx.OPEN_MODAL, {
                                    type: 'Server Intent Discovery',
                                    location: t
                                });
                                break;
                            case s._m.JOIN_GUILD:
                                i.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
                                    l.default.track(c.rMx.OPEN_MODAL, {
                                        type: 'Join Guild',
                                        location: t
                                    });
                        }
                    })(e, n),
                initialSlide: t,
                hasJoinButton: !0
            },
            e
        )
    );
}
let d = (e) => {
        let { initialSlide: t, location: n, onSuccess: r } = e;
        (0, o.h7j)((e) => _(e, t, n, r), { modalKey: s.PU });
    },
    p = (e) => {
        let { slide: t, location: n } = e;
        (0, o.oav)(s.PU, (e) => _(e, t, n));
    };
