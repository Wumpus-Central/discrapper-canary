n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(435371),
    a = n(397927),
    r = n(461678),
    o = n(914703),
    d = n(652215),
    c = n(985018);
function u(e) {
    let { channel: t } = e,
        n = l.useRef(null);
    return (0, i.jsx)(a.YNO, {
        targetElementRef: n,
        align: "right",
        animation: a.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(o.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: c.intl.string(c.t.ljs3Oe),
                  })
                : (0, i.jsx)(r.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: c.intl.string(c.t.ljs3Oe),
                      location: { section: d.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(s.m_, {
                text: c.intl.string(c.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(a.K0, {
                    "aria-label": c.intl.string(c.t.h850Ss),
                    icon: a.XFE,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
