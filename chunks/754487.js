n.d(t, {
    openCreateGuildModal: () => p,
    updateCreateGuildModal: () => f,
});
var r = n(627968);
n(64700);
var l = n(397927),
    a = n(894778),
    o = n(954571),
    i = n(396777),
    c = n(819638),
    s = n(652215),
    u = n(315290);

function d(e, t, n, l) {
    return (0, r.jsx)(
        i.A,
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
                    a.A.flowStep(u.do.CREATE_GUILD, u.jC.SUCCESS), e.onClose(), null == l || l(t);
                },
                onSlideChange: (e) =>
                    (function (e, t) {
                        switch (e) {
                            case c.oS.GUILD_TEMPLATES:
                                a.A.flowStepOrStart(u.do.CREATE_GUILD, u.jC.GUILD_TEMPLATES),
                                    o.default.track(s.HAw.OPEN_MODAL, {
                                        type: "Create Guild Templates",
                                        location: t,
                                    });
                                break;
                            case c.oS.CUSTOMIZE_GUILD:
                                a.A.flowStep(u.do.CREATE_GUILD, u.jC.GUILD_CREATE),
                                    o.default.track(s.HAw.OPEN_MODAL, {
                                        type: "Create Guild Step 2",
                                        location: t,
                                    });
                                break;
                            case c.oS.CREATION_INTENT:
                                o.default.track(s.HAw.OPEN_MODAL, {
                                    type: "Server Intent Discovery",
                                    location: t,
                                });
                                break;
                            case c.oS.JOIN_GUILD:
                                a.A.flowStep(u.do.CREATE_GUILD, u.jC.JOIN_GUILD),
                                    o.default.track(s.HAw.OPEN_MODAL, {
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
let p = (e) => {
        let { initialSlide: t, location: n, onSuccess: r } = e;
        (0, l.qfG)((e) => d(e, t, n, r), {
            modalKey: c.fc,
        });
    },
    f = (e) => {
        let { slide: t, location: n } = e;
        (0, l.zbz)(c.fc, (e) => d(e, t, n));
    };
