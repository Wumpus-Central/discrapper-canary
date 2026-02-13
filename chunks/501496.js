i.d(e, { A: () => E });
var n = i(627968);
i(64700);
var l = i(417597),
    s = i(397927),
    r = i(17143),
    a = i(430452),
    u = i(975571),
    o = i(652215),
    d = i(731854),
    A = i(985018),
    T = i(835818);
let S = `${u.A.getArticleURL(o.MVz.VOICE_VIDEO_TROUBLESHOOTING)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm`;
function E() {
    return (0, l.bG)([a.Ay], () => a.Ay.supports(d.O5.LOOPBACK))
        ? (0, n.jsx)(r.A, {
              size: "md",
              notchBackground: r.V.GRAY,
              captionVoice: A.intl.string(A.t.bp3JOV),
              captionNoVoice: (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(s.Text, {
                          variant: "text-xs/semibold",
                          color: "text-default",
                          children: A.intl.string(A.t.bgn75v),
                      }),
                      A.intl.string(A.t["MA+OZh"]),
                      (0, n.jsx)(s.MzZ, {
                          className: T.X,
                          href: u.A.getArticleURL(o.MVz.NO_INPUT_DETECTED),
                          children: A.intl.string(A.t.RYKKox),
                      }),
                  ],
              }),
              helpText: A.intl.format(A.t["V+B3FH"], { guideURL: S }),
              buttonTest: A.intl.string(A.t.gyljWE),
              buttonStop: A.intl.string(A.t.I6OnJ3),
              buttonVariant: "primary",
              location: { page: o.liQ.USER_SETTINGS, section: o.JJy.SETTINGS_VOICE_AND_VIDEO },
          })
        : null;
}
