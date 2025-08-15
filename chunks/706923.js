t.d(n, { default: () => S }), t(388685);
var s = t(255367);
t(73800);
var l = t(399606),
    o = t(755721),
    i = t(481060),
    a = t(904245),
    r = t(434404),
    c = t(592125),
    u = t(812545),
    d = t(981631),
    g = t(388032),
    _ = t(477425);
function S(e) {
    let { channelId: n, messageId: t, transitionState: S, onClose: h } = e,
        F = (0, l.e7)([c.Z], () => c.Z.getChannel(n)),
        [f, m] = (0, u.Z)(n),
        p = null == F ? void 0 : F.guild_id;
    return (0, s.jsx)(i.ConfirmModal, {
        header: g.intl.string(g.t.aIz1oa),
        confirmText: g.intl.string(g.t["cY+Ooa"]),
        cancelText: g.intl.string(g.t["ETE/oK"]),
        confirmButtonColor: o.zx.Colors.BRAND,
        onConfirm: () => a.Z.crosspostMessage(n, t),
        transitionState: S,
        onClose: h,
        children: (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            className: _.spacing,
            children: m
                ? (0, s.jsx)(i.$jN, {})
                : null != f && null != f.guildsFollowing && f.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i.Text, {
                                className: _.spacing,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrND, { numGuildsFollowing: f.guildsFollowing }),
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZ2, {
                                    onClick: () => {
                                        null != p && null != h && (h(), r.Z.open(p, d.pNK.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOj"]),
        }),
    });
}
