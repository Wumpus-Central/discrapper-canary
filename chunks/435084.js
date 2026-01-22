n.d(t, { A: () => b });
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(435371),
    s = n(397927),
    o = n(378939),
    c = n(734057),
    u = n(309010),
    d = n(187508),
    f = n(652215),
    p = n(985018);
function h(e) {
    let { closePopout: t, onSelect: n } = e,
        l = (0, i.bG)([c.A, u.A], () => c.A.getChannel(u.A.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: h,
            guildFilter: b,
        } = (0, i.cf)([d.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = d.Ay;
            return {
                everyoneFilter: e,
                roleFilter: t,
                guildFilter: n,
            };
        });
    return (0, r.jsxs)(s.W1t, {
        navId: "mentions-filter",
        "aria-label": p.intl.string(p.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(s.sLh, {
                id: "Everyone",
                label: p.intl.string(p.t.cdyUsV),
                action: function () {
                    o.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, r.jsx)(s.sLh, {
                id: "Roles",
                label: p.intl.string(p.t.lZejCq),
                action: function () {
                    o.A.setGuildFilter({ roleFilter: !h });
                },
                checked: h,
            }),
            null == l || l.isPrivate()
                ? null
                : (0, r.jsx)(s.sLh, {
                      id: "All Servers",
                      label: p.intl.string(p.t.GWMA6s),
                      action: function () {
                          o.A.setGuildFilter({
                              guildFilter: b === f.KE7.THIS_SERVER ? f.KE7.ALL_SERVERS : f.KE7.THIS_SERVER,
                          });
                      },
                      checked: b === f.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function b() {
    let e = l.useRef(null);
    return (0, r.jsx)(s.YNO, {
        targetElementRef: e,
        align: "right",
        animation: s.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(h, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, r.jsx)(a.m_, {
                text: p.intl.string(p.t.pEasFX),
                targetElementRef: e,
                children: (0, r.jsx)(s.K0, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": p.intl.string(p.t.pEasFX),
                    color: s.o5d.TERTIARY,
                    icon: s.RgP,
                    onClick: n,
                }),
            });
        },
    });
}
