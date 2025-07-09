(t.d(n, { default: () => f }), t(388685));
var s = t(255367);
t(73800);
var l = t(399606),
    i = t(755721),
    o = t(481060),
    a = t(904245),
    r = t(434404),
    c = t(592125),
    u = t(812545),
    d = t(981631),
    g = t(388032),
    _ = t(739788);
function f(e) {
    let { channelId: n, messageId: t, transitionState: f, onClose: h } = e,
        m = (0, l.e7)([c.Z], () => c.Z.getChannel(n)),
        [p, F] = (0, u.Z)(n),
        S = null == m ? void 0 : m.guild_id;
    return (0, s.jsx)(o.ConfirmModal, {
        header: g.intl.string(g.t.aIz1oa),
        confirmText: g.intl.string(g.t['cY+Ooa']),
        cancelText: g.intl.string(g.t['ETE/oK']),
        confirmButtonColor: i.zx.Colors.BRAND,
        onConfirm: () => a.Z.crosspostMessage(n, t),
        transitionState: f,
        onClose: h,
        children: (0, s.jsx)(o.Text, {
            variant: 'text-md/normal',
            className: _.spacing,
            children: F
                ? (0, s.jsx)(o.$jN, {})
                : null != p && null != p.guildsFollowing && p.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(o.Text, {
                                className: _.spacing,
                                variant: 'text-sm/normal',
                                children: g.intl.format(g.t.GCGrND, { numGuildsFollowing: p.guildsFollowing })
                            }),
                            (0, s.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                children: g.intl.format(g.t.IMhGZ2, {
                                    onClick: () => {
                                        null != S && null != h && (h(), r.Z.open(S, d.pNK.ANALYTICS));
                                    }
                                })
                            })
                        ]
                    })
                  : g.intl.string(g.t['8FpqOj'])
        })
    });
}
