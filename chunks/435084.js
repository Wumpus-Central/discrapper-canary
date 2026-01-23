n.d(t, {
    A: () => g,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(435371),
    a = n(397927),
    o = n(378939),
    c = n(734057),
    u = n(309010),
    d = n(187508),
    p = n(652215),
    h = n(985018);

function f(e) {
    let { closePopout: t, onSelect: n } = e,
        l = (0, i.bG)([c.A, u.A], () => c.A.getChannel(u.A.getChannelId())),
        {
            everyoneFilter: s,
            roleFilter: f,
            guildFilter: g,
        } = (0, i.cf)([d.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = d.Ay;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n,
            };
        });
    return (0, r.jsxs)(a.W1t, {
        "data-menu-migration-ready": !0,
        navId: "mentions-filter",
        "aria-label": h.intl.string(h.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(a.sLh, {
                id: "Everyone",
                label: h.intl.string(h.t.cdyUsV),
                action: function () {
                    o.A.setGuildFilter({
                        everyoneFilter: !s,
                    });
                },
                checked: s,
            }),
            (0, r.jsx)(a.sLh, {
                id: "Roles",
                label: h.intl.string(h.t.lZejCq),
                action: function () {
                    o.A.setGuildFilter({
                        roleFilter: !f,
                    });
                },
                checked: f,
            }),
            null == l || l.isPrivate()
                ? null
                : (0, r.jsx)(a.sLh, {
                      id: "All Servers",
                      label: h.intl.string(h.t.GWMA6s),
                      action: function () {
                          o.A.setGuildFilter({
                              guildFilter: g === p.KE7.THIS_SERVER ? p.KE7.ALL_SERVERS : p.KE7.THIS_SERVER,
                          });
                      },
                      checked: g === p.KE7.ALL_SERVERS,
                  }),
        ],
    });
}

function g() {
    let e = l.useRef(null);
    return (0, r.jsx)(a.YNO, {
        targetElementRef: e,
        align: "right",
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(f, {
                closePopout: t,
            });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, r.jsx)(s.m_, {
                text: h.intl.string(h.t.pEasFX),
                targetElementRef: e,
                children: (0, r.jsx)(a.K0, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": h.intl.string(h.t.pEasFX),
                    color: a.o5d.TERTIARY,
                    icon: a.RgP,
                    onClick: n,
                }),
            });
        },
    });
}
