n.d(t, { openCreateGuildModal: () => d, updateCreateGuildModal: () => I });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(894778),
    s = n(954571),
    a = n(396777),
    o = n(819638),
    c = n(652215),
    _ = n(315290);
function u(e, t, n, l) {
    return (0, i.jsx)(a.A, {
        onSuccess: (t) => {
            r.A.flowStep(_.do.CREATE_GUILD, _.jC.SUCCESS), e.onClose(), l?.(t);
        },
        onSlideChange: (e) =>
            (function (e, t) {
                switch (e) {
                    case o.oS.GUILD_TEMPLATES:
                        r.A.flowStepOrStart(_.do.CREATE_GUILD, _.jC.GUILD_TEMPLATES),
                            s.default.track(c.HAw.OPEN_MODAL, { type: "Create Guild Templates", location: t });
                        break;
                    case o.oS.CUSTOMIZE_GUILD:
                        r.A.flowStep(_.do.CREATE_GUILD, _.jC.GUILD_CREATE),
                            s.default.track(c.HAw.OPEN_MODAL, { type: "Create Guild Step 2", location: t });
                        break;
                    case o.oS.CREATION_INTENT:
                        s.default.track(c.HAw.OPEN_MODAL, { type: "Server Intent Discovery", location: t });
                        break;
                    case o.oS.JOIN_GUILD:
                        r.A.flowStep(_.do.CREATE_GUILD, _.jC.JOIN_GUILD),
                            s.default.track(c.HAw.OPEN_MODAL, { type: "Join Guild", location: t });
                }
            })(e, n),
        initialSlide: t,
        hasJoinButton: !0,
        ...e,
    });
}
let d = (e) => {
        let { initialSlide: t, location: n, onSuccess: i } = e;
        (0, l.qfG)((e) => u(e, t, n, i), { modalKey: o.fc });
    },
    I = (e) => {
        let { slide: t, location: n } = e;
        (0, l.zbz)(o.fc, (e) => u(e, t, n));
    };
