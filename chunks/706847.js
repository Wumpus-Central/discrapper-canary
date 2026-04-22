n.d(t, { p: () => p, z: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(834730),
    o = n(821609),
    c = n(58149),
    d = n(954571),
    u = n(867455),
    h = n(406704),
    m = n(652215),
    A = n(985018),
    g = n(916168);
function p(e) {
    let { channel: t, narrow: n } = e,
        a = (0, h.lK)(t);
    return (
        l.useEffect(() => {
            d.default.track(m.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, c.H$)(t.getGuildId()),
                ...(0, c.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, i.jsxs)("div", {
            className: s()(g.JD, { [g.sc]: n }),
            children: [
                (0, i.jsx)(r.E, {
                    className: g.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? A.intl.string(A.t["833FDn"]) : A.intl.string(A.t.rEeodK),
                }),
                a
                    ? (0, i.jsx)(o.$, {
                          variant: "secondary",
                          text: A.intl.string(A.t["0dvvEi"]),
                          onClick: () => {
                              d.default.track(m.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, c.H$)(t.getGuildId()),
                                  ...(0, c.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unarchive",
                              }),
                                  u.A.unarchiveThread(t, !1);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
function _(e) {
    let { channel: t, narrow: n } = e,
        a = (0, h.H_)(t);
    return (
        l.useEffect(() => {
            d.default.track(m.HAw.CHANNEL_BANNER_VIEWED, {
                ...(0, c.H$)(t.getGuildId()),
                ...(0, c.dI)(t),
                banner_type: "thread",
            });
        }, [t]),
        (0, i.jsxs)("div", {
            className: s()(g.JD, { [g.sc]: n }),
            children: [
                (0, i.jsx)(r.E, {
                    className: g.E5,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t.isForumPost() ? A.intl.string(A.t.E7oO8u) : A.intl.string(A.t["V/JF2N"]),
                }),
                a
                    ? (0, i.jsx)(o.$, {
                          variant: "secondary",
                          text: A.intl.string(A.t.zA9d1J),
                          onClick: () => {
                              d.default.track(m.HAw.CHANNEL_BANNER_CTA_CLICKED, {
                                  ...(0, c.H$)(t.getGuildId()),
                                  ...(0, c.dI)(t),
                                  banner_type: "thread",
                                  cta_type: "unlock",
                              }),
                                  u.A.unlockThread(t);
                          },
                          size: "sm",
                      })
                    : null,
            ],
        })
    );
}
