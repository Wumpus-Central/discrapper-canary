n.d(t, { A: () => N });
var s = n(627968),
    a = n(64700),
    l = n(311907),
    i = n(990078),
    r = n(861672),
    o = n(477782),
    d = n(265872),
    c = n(408278),
    u = n(783977),
    h = n(378939),
    _ = n(734057),
    A = n(309010),
    m = n(187508),
    g = n(652215),
    f = n(985018);
function E(e) {
    let { closePopout: t, onSelect: n } = e,
        a = (0, l.bG)([_.A, A.A], () => _.A.getChannel(A.A.getChannelId())),
        {
            everyoneFilter: i,
            roleFilter: d,
            guildFilter: c,
        } = (0, l.cf)([m.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = m.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, s.jsxs)(r.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": f.intl.string(f.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, s.jsx)(o.sL, {
                id: "Everyone",
                label: f.intl.string(f.t.cdyUsV),
                action: function () {
                    h.A.setGuildFilter({ everyoneFilter: !i });
                },
                checked: i,
            }),
            (0, s.jsx)(o.sL, {
                id: "Roles",
                label: f.intl.string(f.t.lZejCq),
                action: function () {
                    h.A.setGuildFilter({ roleFilter: !d });
                },
                checked: d,
            }),
            null == a || a.isPrivate()
                ? null
                : (0, s.jsx)(o.sL, {
                      id: "All Servers",
                      label: f.intl.string(f.t.GWMA6s),
                      action: function () {
                          h.A.setGuildFilter({
                              guildFilter: c === g.KE7.THIS_SERVER ? g.KE7.ALL_SERVERS : g.KE7.THIS_SERVER,
                          });
                      },
                      checked: c === g.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function N() {
    let e = a.useRef(null);
    return (0, s.jsx)(d.Y, {
        targetElementRef: e,
        align: "right",
        animation: d.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, s.jsx)(E, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, s.jsx)(i.m, {
                text: f.intl.string(f.t.pEasFX),
                targetElementRef: e,
                children: (0, s.jsx)(c.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": f.intl.string(f.t.pEasFX),
                    icon: u.R,
                    onClick: n,
                }),
            });
        },
    });
}
