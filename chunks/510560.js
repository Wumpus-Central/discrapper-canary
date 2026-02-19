"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(435371),
    r = n(397927),
    a = n(461678),
    o = n(914703),
    c = n(652215),
    d = n(985018);
function u(e) {
    let { channel: t } = e,
        n = s.useRef(null);
    return (0, i.jsx)(r.YNO, {
        targetElementRef: n,
        align: "right",
        animation: r.YNO.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(o.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: d.intl.string(d.t.ljs3Oe),
                  })
                : (0, i.jsx)(a.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: d.intl.string(d.t.ljs3Oe),
                      location: { section: c.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(l.m_, {
                text: d.intl.string(d.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(r.K0, {
                    "aria-label": d.intl.string(d.t.h850Ss),
                    icon: r.XFE,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
