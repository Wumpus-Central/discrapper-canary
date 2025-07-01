(t.d(n, { default: () => _ }), t(388685));
var s = t(255367);
t(73800);
var l = t(399606),
    i = t(481060),
    o = t(904245),
    a = t(434404),
    r = t(592125),
    c = t(812545),
    u = t(981631),
    d = t(388032),
    g = t(739788);
function _(e) {
    let { channelId: n, messageId: t, transitionState: _, onClose: f } = e,
        h = (0, l.e7)([r.Z], () => r.Z.getChannel(n)),
        [m, p] = (0, c.Z)(n),
        F = null == h ? void 0 : h.guild_id;
    return (0, s.jsx)(i.ConfirmModal, {
        header: d.intl.string(d.t.aIz1oa),
        confirmText: d.intl.string(d.t['cY+Ooa']),
        cancelText: d.intl.string(d.t['ETE/oK']),
        confirmButtonColor: i.zxk.Colors.BRAND,
        onConfirm: () => o.Z.crosspostMessage(n, t),
        transitionState: _,
        onClose: f,
        children: (0, s.jsx)(i.Text, {
            variant: 'text-md/normal',
            className: g.spacing,
            children: p
                ? (0, s.jsx)(i.$jN, {})
                : null != m && null != m.guildsFollowing && m.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i.Text, {
                                className: g.spacing,
                                variant: 'text-sm/normal',
                                children: d.intl.format(d.t.GCGrND, { numGuildsFollowing: m.guildsFollowing })
                            }),
                            (0, s.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                children: d.intl.format(d.t.IMhGZ2, {
                                    onClick: () => {
                                        null != F && null != f && (f(), a.Z.open(F, u.pNK.ANALYTICS));
                                    }
                                })
                            })
                        ]
                    })
                  : d.intl.string(d.t['8FpqOj'])
        })
    });
}
