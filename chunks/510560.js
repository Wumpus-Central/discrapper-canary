n.d(t, { A: () => _ });
var s = n(627968),
    a = n(64700),
    l = n(990078),
    i = n(265872),
    r = n(408278),
    o = n(782603),
    d = n(461678),
    c = n(914703),
    u = n(652215),
    h = n(985018);
function _(e) {
    let { channel: t } = e,
        n = a.useRef(null);
    return (0, s.jsx)(i.Y, {
        targetElementRef: n,
        align: "right",
        animation: i.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, s.jsx)(c.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: h.intl.string(h.t.ljs3Oe),
                  })
                : (0, s.jsx)(d.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: h.intl.string(h.t.ljs3Oe),
                      location: { section: u.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, s.jsx)(l.m, {
                text: h.intl.string(h.t.h850Ss),
                targetElementRef: n,
                children: (0, s.jsx)(r.K, {
                    "aria-label": h.intl.string(h.t.h850Ss),
                    icon: o.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
