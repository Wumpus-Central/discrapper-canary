s.d(n, { default: () => _ }), s(388685);
var t = s(255367);
s(73800);
var l = s(399606),
    i = s(481060),
    o = s(904245),
    a = s(434404),
    r = s(592125),
    c = s(812545),
    u = s(981631),
    d = s(388032),
    g = s(739788);
function _(e) {
    let { channelId: n, messageId: s, transitionState: _, onClose: f } = e,
        h = (0, l.e7)([r.Z], () => r.Z.getChannel(n)),
        [m, p] = (0, c.Z)(n),
        F = null == h ? void 0 : h.guild_id;
    return (0, t.jsx)(i.ConfirmModal, {
        header: d.intl.string(d.t.aIz1oa),
        confirmText: d.intl.string(d.t['cY+Ooa']),
        cancelText: d.intl.string(d.t['ETE/oK']),
        confirmButtonColor: i.zxk.Colors.BRAND,
        onConfirm: () => o.Z.crosspostMessage(n, s),
        transitionState: _,
        onClose: f,
        children: (0, t.jsx)(i.Text, {
            variant: 'text-md/normal',
            className: g.spacing,
            children: p
                ? (0, t.jsx)(i.$jN, {})
                : null != m && null != m.guildsFollowing && m.guildsFollowing > 0
                  ? (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(i.Text, {
                                className: g.spacing,
                                variant: 'text-sm/normal',
                                children: d.intl.format(d.t.GCGrND, { numGuildsFollowing: m.guildsFollowing })
                            }),
                            (0, t.jsx)(i.Text, {
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
