"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(435371),
    a = n(397927),
    o = n(378939),
    c = n(734057),
    d = n(309010),
    u = n(187508),
    h = n(652215),
    A = n(985018);
function p(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, l.bG)([c.A, d.A], () => c.A.getChannel(d.A.getChannelId())),
        {
            everyoneFilter: r,
            roleFilter: p,
            guildFilter: g,
        } = (0, l.cf)([u.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = u.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(a.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": A.intl.string(A.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(a.sLh, {
                id: "Everyone",
                label: A.intl.string(A.t.cdyUsV),
                action: function () {
                    o.A.setGuildFilter({ everyoneFilter: !r });
                },
                checked: r,
            }),
            (0, i.jsx)(a.sLh, {
                id: "Roles",
                label: A.intl.string(A.t.lZejCq),
                action: function () {
                    o.A.setGuildFilter({ roleFilter: !p });
                },
                checked: p,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(a.sLh, {
                      id: "All Servers",
                      label: A.intl.string(A.t.GWMA6s),
                      action: function () {
                          o.A.setGuildFilter({
                              guildFilter: g === h.KE7.THIS_SERVER ? h.KE7.ALL_SERVERS : h.KE7.THIS_SERVER,
                          });
                      },
                      checked: g === h.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function g() {
    let e = s.useRef(null);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: e,
        align: "right",
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(p, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(r.m_, {
                text: A.intl.string(A.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(a.K0, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": A.intl.string(A.t.pEasFX),
                    color: a.o5d.TERTIARY,
                    icon: a.RgP,
                    onClick: n,
                }),
            });
        },
    });
}
