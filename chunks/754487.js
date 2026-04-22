n.d(t, { openCreateGuildModal: () => _, updateCreateGuildModal: () => p });
var i = n(627968);
n(64700);
var l = n(192308),
    a = n(894778),
    r = n(954571),
    s = n(396777),
    o = n(819638),
    c = n(652215),
    u = n(315290);
function d(e, t, n, l) {
    return (0, i.jsx)(s.A, {
        onSuccess: (t) => {
            a.A.flowStep(u.do.CREATE_GUILD, u.jC.SUCCESS), e.onClose(), l?.(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case o.oS.GUILD_TEMPLATES:
                        a.A.flowStepOrStart(u.do.CREATE_GUILD, u.jC.GUILD_TEMPLATES),
                            r.default.track(c.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t });
                        break;
                    case o.oS.CUSTOMIZE_GUILD:
                        a.A.flowStep(u.do.CREATE_GUILD, u.jC.GUILD_CREATE),
                            r.default.track(c.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t });
                        break;
                    case o.oS.CREATION_INTENT:
                        r.default.track(c.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case o.oS.JOIN_GUILD:
                        a.A.flowStep(u.do.CREATE_GUILD, u.jC.JOIN_GUILD),
                            r.default.track(c.HAw.OPEN_MODAL, { type: "Join Guild", location: t });
                }
            })(e, n),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
let _ = (e) => {
        let { initialSlide: t, location: n, onSuccess: i } = e;
        (0, l.openModal)((e) => d(e, t, n, i), { modalKey: o.fc });
    },
    p = (e) => {
        let { slide: t, location: n } = e;
        (0, l.updateModal)(o.fc, (e) => d(e, t, n));
    };
