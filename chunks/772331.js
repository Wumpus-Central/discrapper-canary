n.d(t, {
    A: () => u,
}),
    n(938796);
var r = n(627968);
n(64700);
var l = n(665260),
    i = n(397927),
    o = n(803316),
    a = n(307600),
    c = n(751775),
    s = n(652215),
    d = n(985018);

function u(e) {
    let t = (0, c.R)("use-save-voice-message-audio");
    return (0, l.Lt)(e.flags, s.pr7.IS_VOICE_MESSAGE) && t
        ? (0, r.jsx)(i.Drp, {
              id: "save-voice-message-audio",
              label: d.intl.string(d.t.vbAEaA),
              icon: i.s3U,
              action: () => {
                  let t = (0, o.XW)(e.attachments[0].url);
                  (0, a.h)({
                      href: t,
                  });
              },
          })
        : null;
}
