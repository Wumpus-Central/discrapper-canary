n.d(t, {
    A: () => u,
}),
    n(938796);
var r = n(627968);
n(64700);
var i = n(665260),
    l = n(397927),
    a = n(803316),
    o = n(307600),
    c = n(751775),
    s = n(652215),
    d = n(985018);

function u(e) {
    let t = (0, c.R)("use-save-voice-message-audio");
    return (0, i.Lt)(e.flags, s.pr7.IS_VOICE_MESSAGE) && t
        ? (0, r.jsx)(l.Drp, {
              id: "save-voice-message-audio",
              label: d.intl.string(d.t.vbAEaA),
              leadingAccessory: {
                  type: "icon",
                  icon: l.s3U,
              },
              icon: l.s3U,
              action: () => {
                  let t = (0, a.XW)(e.attachments[0].url);
                  (0, o.h)({
                      href: t,
                  });
              },
          })
        : null;
}
