t.d(n, { default: () => f }), t(388685);
var s = t(951288);
t(647438);
var l = t(399606),
    o = t(755721),
    i = t(481060),
    a = t(904245),
    r = t(434404),
    c = t(592125),
    u = t(812545),
    d = t(981631),
    g = t(388032),
    _ = t(625221);
function f(e) {
    let { channelId: n, messageId: t, transitionState: f, onClose: S } = e,
        h = (0, l.e7)([c.Z], () => c.Z.getChannel(n)),
        [F, m] = (0, u.Z)(n),
        p = null == h ? void 0 : h.guild_id;
    return (0, s.jsx)(i.ConfirmModal, {
        header: g.intl.string(g.t.aIz1oa),
        confirmText: g.intl.string(g.t["cY+Ooa"]),
        cancelText: g.intl.string(g.t["ETE/oK"]),
        confirmButtonColor: o.zx.Colors.BRAND,
        onConfirm: () => a.Z.crosspostMessage(n, t),
        transitionState: f,
        onClose: S,
        children: (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            className: _.spacing,
            children: m
                ? (0, s.jsx)(i.$jN, {})
                : null != F && null != F.guildsFollowing && F.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i.Text, {
                                className: _.spacing,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrND, { numGuildsFollowing: F.guildsFollowing }),
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZ2, {
                                    onClick: () => {
                                        null != p && null != S && (S(), r.Z.open(p, d.pNK.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOj"]),
        }),
    });
}
