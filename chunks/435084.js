n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(435371),
    r = n(397927),
    o = n(378939),
    d = n(734057),
    c = n(309010),
    u = n(187508),
    h = n(652215),
    A = n(985018);
function _(e) {
    let { closePopout: t, onSelect: n } = e,
        l = (0, s.bG)([d.A, c.A], () => d.A.getChannel(c.A.getChannelId())),
        {
            everyoneFilter: a,
            roleFilter: _,
            guildFilter: m,
        } = (0, s.cf)([u.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = u.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": A.intl.string(A.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(r.sLh, {
                id: "Everyone",
                label: A.intl.string(A.t.cdyUsV),
                action: function () {
                    o.A.setGuildFilter({ everyoneFilter: !a });
                },
                checked: a,
            }),
            (0, i.jsx)(r.sLh, {
                id: "Roles",
                label: A.intl.string(A.t.lZejCq),
                action: function () {
                    o.A.setGuildFilter({ roleFilter: !_ });
                },
                checked: _,
            }),
            null == l || l.isPrivate()
                ? null
                : (0, i.jsx)(r.sLh, {
                      id: "All Servers",
                      label: A.intl.string(A.t.GWMA6s),
                      action: function () {
                          o.A.setGuildFilter({
                              guildFilter: m === h.KE7.THIS_SERVER ? h.KE7.ALL_SERVERS : h.KE7.THIS_SERVER,
                          });
                      },
                      checked: m === h.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function m() {
    let e = l.useRef(null);
    return (0, i.jsx)(r.YNO, {
        targetElementRef: e,
        align: "right",
        animation: r.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(_, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(a.m_, {
                text: A.intl.string(A.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(r.K0, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": A.intl.string(A.t.pEasFX),
                    color: r.o5d.TERTIARY,
                    icon: r.RgP,
                    onClick: n,
                }),
            });
        },
    });
}
