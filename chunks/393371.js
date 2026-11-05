var i = n(477900);
n(582128);
var l = n(855986),
    a = n(684339),
    s = n(450149),
    r = n(652896),
    o = n(607407),
    d = n(259264),
    c = n(616356),
    u = n(754712),
    h = n(803301),
    p = n(652215),
    m = n(731854);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { stream: t, previewClassName: n } = e,
                A = u.Ay.getVideoComponent(),
                f = (0, l.bG)([c.A], () => c.A.getActiveStreamForApplicationStream(t), [t]),
                g = (0, l.bG)([h.A], () => h.A.getStreamId(t.ownerId, t.guildId, m.x.STREAM), [t]),
                { previewUrl: x } = (0, s.A)(t.guildId, t.channelId, t.ownerId),
                C = (0, i.jsx)(o.A, { stream: t, className: n, noText: !0 });
            return null != A &&
                u.Ay.supports(m.O5.VIDEO) &&
                null != g &&
                null != f &&
                f.state !== p.XYD.ENDED &&
                f.state !== p.XYD.FAILED
                ? (0, i.jsx)(
                      d.A,
                      {
                          videoComponent: A,
                          streamId: g,
                          fit: d.$.COVER,
                          paused: f.state === p.XYD.PAUSED,
                          streamPreviewURL: x,
                          videoSpinnerContext: a.u.REMOTE_STREAM,
                          userId: t.ownerId,
                          streamKey: (0, r._z)(t),
                      },
                      g,
                  )
                : C;
        },
    },
);
