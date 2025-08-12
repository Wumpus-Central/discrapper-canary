l.d(t, { default: () => m }), l(388685);
var e = l(255367);
l(73800);
var i = l(399606),
    o = l(755721),
    s = l(481060),
    a = l(904245),
    r = l(434404),
    c = l(592125),
    u = l(812545),
    d = l(981631),
    g = l(388032),
    h = l(934747);
function m(n) {
    let { channelId: t, messageId: l, transitionState: m, onClose: x } = n,
        f = (0, i.e7)([c.Z], () => c.Z.getChannel(t)),
        [p, C] = (0, u.Z)(t),
        Z = null == f ? void 0 : f.guild_id;
    return (0, e.jsx)(s.ConfirmModal, {
        header: g.intl.string(g.t.aIz1oa),
        confirmText: g.intl.string(g.t["cY+Ooa"]),
        cancelText: g.intl.string(g.t["ETE/oK"]),
        confirmButtonColor: o.zx.Colors.BRAND,
        onConfirm: () => a.Z.crosspostMessage(t, l),
        transitionState: m,
        onClose: x,
        children: (0, e.jsx)(s.Text, {
            variant: "text-md/normal",
            className: h.spacing,
            children: C
                ? (0, e.jsx)(s.$jN, {})
                : null != p && null != p.guildsFollowing && p.guildsFollowing > 0
                  ? (0, e.jsxs)(e.Fragment, {
                        children: [
                            (0, e.jsx)(s.Text, {
                                className: h.spacing,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrND, { numGuildsFollowing: p.guildsFollowing }),
                            }),
                            (0, e.jsx)(s.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZ2, {
                                    onClick: () => {
                                        null != Z && null != x && (x(), r.Z.open(Z, d.pNK.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOj"]),
        }),
    });
}
