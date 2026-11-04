var i = n(477900),
    l = n(855986),
    a = n(684339),
    s = n(259264),
    r = n(46653),
    o = n(718197),
    d = n(85448);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { participant: t, avatarClassName: n, children: c, ...u } = e,
                { userId: h } = u,
                p = o.Ay.getVideoComponent(),
                m = h === (0, l.bG)([r.default], () => r.default.getId());
            return (0, i.jsxs)(d.n6, {
                ...u,
                children: [
                    (0, i.jsx)(s.A, {
                        videoComponent: p,
                        streamId: t.streamId,
                        paused: !1,
                        videoSpinnerContext: m ? a.u.SELF_VIDEO : a.u.REMOTE_VIDEO,
                        userId: h,
                        fit: s.$.COVER,
                        wrapperClassName: n,
                        mirror: m,
                        emptyPreviewAspectRatio: "1",
                    }),
                    c,
                ],
            });
        },
    },
);
