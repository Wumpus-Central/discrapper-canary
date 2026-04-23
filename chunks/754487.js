n.d(t, { openCreateGuildModal: () => p, updateCreateGuildModal: () => m });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(894778),
    a = n(954571),
    r = n(396777),
    o = n(819638),
    c = n(652215),
    d = n(315290);
function u(e, t, n, l) {
    return (0, i.jsx)(r.A, {
        onSuccess: (t) => {
            s.A.flowStep(d.do.CREATE_GUILD, d.jC.SUCCESS), e.onClose(), l?.(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case o.oS.GUILD_TEMPLATES:
                        s.A.flowStepOrStart(d.do.CREATE_GUILD, d.jC.GUILD_TEMPLATES),
                            a.default.track(c.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t });
                        break;
                    case o.oS.CUSTOMIZE_GUILD:
                        s.A.flowStep(d.do.CREATE_GUILD, d.jC.GUILD_CREATE),
                            a.default.track(c.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t });
                        break;
                    case o.oS.CREATION_INTENT:
                        a.default.track(c.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case o.oS.JOIN_GUILD:
                        s.A.flowStep(d.do.CREATE_GUILD, d.jC.JOIN_GUILD),
                            a.default.track(c.HAw.OPEN_MODAL, { type: "Join Guild", location: t });
                }
            })(e, n),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
let p = (e) => {
        let { initialSlide: t, location: n, onSuccess: i } = e;
        (0, l.openModal)((e) => u(e, t, n, i), { modalKey: o.fc });
    },
    m = (e) => {
        let { slide: t, location: n } = e;
        (0, l.updateModal)(o.fc, (e) => u(e, t, n));
    };
