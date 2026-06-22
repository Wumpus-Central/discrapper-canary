n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    a = n(17928),
    s = n(313961),
    r = n(175203),
    o = n(734057),
    c = n(408822),
    d = n(125730);
function u(e) {
    let { channelId: t, participant: n, popoutType: l } = e,
        s = (0, a.bG)([o.A], () => o.A.getChannel(t));
    return null == s
        ? null
        : (0, i.jsx)(r.Ay, {
              participant: n,
              inCall: !0,
              channel: s,
              width: 100,
              popoutType: l,
              className: d.Vs,
              onClick: () => {
                  (0, c.zD)(t);
              },
          });
}
function p(e) {
    let { channelId: t, popoutType: n, aspectRatio: r } = e,
        o = (0, l.useRef)(null),
        [c, p] = (0, l.useState)(0),
        { streamParticipants: h, videoParticipants: m } = (0, a.cf)([s.A], () => ({
            streamParticipants: s.A.getStreamParticipants(t),
            videoParticipants: s.A.getVideoParticipants(t),
        }));
    return (
        (0, l.useEffect)(() => {
            function e() {
                o.current?.getBoundingClientRect().top != null && p(o.current?.getBoundingClientRect().top);
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }, []),
        (0, i.jsxs)("div", {
            className: d.kL,
            style: { aspectRatio: r, paddingTop: 82 > c + 16 ? 82 - c : 16 },
            ref: o,
            children: [
                h.map((e) => (0, i.jsx)(u, { participant: e, channelId: t, popoutType: n }, e.id)),
                m.map((e) => (0, i.jsx)(u, { participant: e, channelId: t, popoutType: n }, e.id)),
            ],
        })
    );
}
