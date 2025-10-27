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
        [C, F] = (0, u.Z)(n),
        m = null == h ? void 0 : h.guild_id;
    return (0, s.jsx)(i.ConfirmModal, {
        header: g.intl.string(g.t.aIz1oV),
        confirmText: g.intl.string(g.t["cY+Oob"]),
        cancelText: g.intl.string(g.t["ETE/oC"]),
        confirmButtonColor: o.zx.Colors.BRAND,
        onConfirm: () => a.Z.crosspostMessage(n, t),
        transitionState: f,
        onClose: S,
        children: (0, s.jsx)(i.Text, {
            variant: "text-md/normal",
            className: _.spacing,
            children: F
                ? (0, s.jsx)(i.$jN, {})
                : null != C && null != C.guildsFollowing && C.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i.Text, {
                                className: _.spacing,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrNP, { numGuildsFollowing: C.guildsFollowing }),
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZz, {
                                    onClick: () => {
                                        null != m && null != S && (S(), r.Z.open(m, d.pNK.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOs"]),
        }),
    });
}
