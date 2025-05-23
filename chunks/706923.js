t.d(n, { default: () => _ }), t(388685);
var l = t(255367);
t(73800);
var s = t(399606),
    i = t(481060),
    o = t(904245),
    a = t(434404),
    r = t(592125),
    c = t(812545),
    u = t(981631),
    d = t(388032),
    g = t(739788);
function _(e) {
    let { channelId: n, messageId: t, transitionState: _, onClose: h } = e,
        F = (0, s.e7)([r.Z], () => r.Z.getChannel(n)),
        [S, f] = (0, c.Z)(n),
        C = null == F ? void 0 : F.guild_id;
    return (0, l.jsx)(i.ConfirmModal, {
        header: d.intl.string(d.t.aIz1oa),
        confirmText: d.intl.string(d.t['cY+Ooa']),
        cancelText: d.intl.string(d.t['ETE/oK']),
        confirmButtonColor: i.zxk.Colors.BRAND,
        onConfirm: () => o.Z.crosspostMessage(n, t),
        transitionState: _,
        onClose: h,
        children: (0, l.jsx)(i.Text, {
            variant: 'text-md/normal',
            className: g.spacing,
            children: f
                ? (0, l.jsx)(i.$jN, {})
                : null != S && null != S.guildsFollowing && S.guildsFollowing > 0
                  ? (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(i.Text, {
                                className: g.spacing,
                                variant: 'text-sm/normal',
                                children: d.intl.format(d.t.GCGrND, { numGuildsFollowing: S.guildsFollowing })
                            }),
                            (0, l.jsx)(i.Text, {
                                variant: 'text-sm/normal',
                                children: d.intl.format(d.t.IMhGZ2, {
                                    onClick: () => {
                                        null != C && null != h && (h(), a.Z.open(C, u.pNK.ANALYTICS));
                                    }
                                })
                            })
                        ]
                    })
                  : d.intl.string(d.t['8FpqOj'])
        })
    });
}
