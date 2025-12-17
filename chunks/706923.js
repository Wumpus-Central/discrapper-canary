s.d(n, { default: () => S }), s(388685);
var t = s(54381);
s(473749);
var l = s(399606),
    i = s(755721),
    o = s(481060),
    a = s(904245),
    r = s(434404),
    c = s(592125),
    u = s(812545),
    d = s(981631),
    g = s(388032),
    f = s(552593);
function S(e) {
    let { channelId: n, messageId: s, transitionState: S, onClose: b } = e,
        h = (0, l.e7)([c.Z], () => c.Z.getChannel(n)),
        [C, F] = (0, u.Z)(n),
        _ = null == h ? void 0 : h.guild_id;
    return (0, t.jsx)(o.VoidConfirmModal, {
        header: g.intl.string(g.t.aIz1oV),
        confirmText: g.intl.string(g.t["cY+Oob"]),
        cancelText: g.intl.string(g.t["ETE/oC"]),
        confirmButtonColor: i.zx.Colors.BRAND,
        onConfirm: () => a.Z.crosspostMessage(n, s),
        transitionState: S,
        onClose: b,
        children: (0, t.jsx)(o.Text, {
            variant: "text-md/normal",
            className: f.spacing,
            children: F
                ? (0, t.jsx)(o.$jN, {})
                : null != C && null != C.guildsFollowing && C.guildsFollowing > 0
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(o.Text, {
                                className: f.spacing,
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.GCGrNP, { numGuildsFollowing: C.guildsFollowing }),
                            }),
                            (0, t.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                children: g.intl.format(g.t.IMhGZz, {
                                    onClick: () => {
                                        null != _ && null != b && (b(), r.Z.open(_, d.pNK.ANALYTICS));
                                    },
                                }),
                            }),
                        ],
                    })
                  : g.intl.string(g.t["8FpqOs"]),
        }),
    });
}
