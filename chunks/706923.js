t.r(n),
    t.d(n, {
        default: function () {
            return _;
        }
    }),
    t(47120);
var s = t(200651);
t(192379);
var l = t(399606),
    i = t(481060),
    o = t(904245),
    a = t(434404),
    r = t(592125),
    c = t(812545),
    u = t(981631),
    d = t(388032),
    g = t(463096);
function _(e) {
    let { channelId: n, messageId: t, transitionState: _, onClose: f } = e,
        S = (0, l.e7)([r.Z], () => r.Z.getChannel(n)),
        [p, C] = (0, c.Z)(n),
        F = null == S ? void 0 : S.guild_id;
    return (0, s.jsx)(i.ConfirmModal, {
        header: d.intl.string(d.t.aIz1oa),
        confirmText: d.intl.string(d.t['cY+Ooa']),
        cancelText: d.intl.string(d.t['ETE/oK']),
        confirmButtonColor: i.Button.Colors.BRAND,
        onConfirm: () => o.Z.crosspostMessage(n, t),
        transitionState: _,
        onClose: f,
        children: (0, s.jsx)(i.Text, {
            variant: 'text-md/normal',
            className: g.spacing,
            children: C
                ? (0, s.jsx)(i.Spinner, {})
                : null != p && null != p.guildsFollowing && p.guildsFollowing > 0
                  ? (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i.Text, {
                                className: g.spacing,
                                variant: 'text-sm/normal',
                                children: d.intl.format(d.t.GCGrND, { numGuildsFollowing: p.guildsFollowing })
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
