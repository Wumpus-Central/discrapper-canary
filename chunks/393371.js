n.d(t, { A: () => A });
var i = n(477900);
n(582128);
var l = n(17928),
    a = n(684339),
    s = n(450149),
    r = n(652896),
    o = n(607407),
    c = n(51092),
    d = n(616356),
    u = n(303277),
    h = n(803301),
    p = n(652215),
    m = n(731854);
function A(e) {
    let { stream: t, previewClassName: n } = e,
        A = u.Ay.getVideoComponent(),
        f = (0, l.bG)([d.A], () => d.A.getActiveStreamForApplicationStream(t), [t]),
        x = (0, l.bG)([h.A], () => h.A.getStreamId(t.ownerId, t.guildId, m.x.STREAM), [t]),
        { previewUrl: g } = (0, s.A)(t.guildId, t.channelId, t.ownerId),
        C = (0, i.jsx)(o.A, { stream: t, className: n, noText: !0 });
    return null != A &&
        u.Ay.supports(m.O5.VIDEO) &&
        null != x &&
        null != f &&
        f.state !== p.XYD.ENDED &&
        f.state !== p.XYD.FAILED
        ? (0, i.jsx)(
              c.A,
              {
                  videoComponent: A,
                  streamId: x,
                  fit: c.$.COVER,
                  paused: f.state === p.XYD.PAUSED,
                  streamPreviewURL: g,
                  videoSpinnerContext: a.u.REMOTE_STREAM,
                  userId: t.ownerId,
                  streamKey: (0, r._z)(t),
              },
              x,
          )
        : C;
}
