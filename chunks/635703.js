n.r(t),
    n.d(t, {
        openCreateGuildModal: () => f,
        updateCreateGuildModal: () => p,
    });
var r = n(54381);
n(473749);
var o = n(481060),
    a = n(390885),
    i = n(626135),
    l = n(299402),
    c = n(675999),
    s = n(981631),
    u = n(630724);
function d(e, t, n, o) {
    return (0, r.jsx)(
        l.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                onSuccess: (t) => {
                    a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.SUCCESS), e.onClose(), null == o || o(t);
                },
                onSlideChange: (e) =>
                    (function (e, t) {
                        switch (e) {
                            case c._m.GUILD_TEMPLATES:
                                a.Z.flowStepOrStart(u.MK.CREATE_GUILD, u.X2.GUILD_TEMPLATES),
                                    i.default.track(s.rMx.OPEN_MODAL, {
                                        type: "Create Guild Templates",
                                        location: t,
                                    });
                                break;
                            case c._m.CUSTOMIZE_GUILD:
                                a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.GUILD_CREATE),
                                    i.default.track(s.rMx.OPEN_MODAL, {
                                        type: "Create Guild Step 2",
                                        location: t,
                                    });
                                break;
                            case c._m.CREATION_INTENT:
                                i.default.track(s.rMx.OPEN_MODAL, {
                                    type: "Server Intent Discovery",
                                    location: t,
                                });
                                break;
                            case c._m.JOIN_GUILD:
                                a.Z.flowStep(u.MK.CREATE_GUILD, u.X2.JOIN_GUILD),
                                    i.default.track(s.rMx.OPEN_MODAL, {
                                        type: "Join Guild",
                                        location: t,
                                    });
                        }
                    })(e, n),
                initialSlide: t,
                hasJoinButton: !0,
            },
            e,
        ),
    );
}
let f = (e) => {
        let { initialSlide: t, location: n, onSuccess: r } = e;
        (0, o.h7j)((e) => d(e, t, n, r), { modalKey: c.PU });
    },
    p = (e) => {
        let { slide: t, location: n } = e;
        (0, o.oav)(c.PU, (e) => d(e, t, n));
    };
