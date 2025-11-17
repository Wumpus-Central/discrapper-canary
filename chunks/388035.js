n.d(t, { U: () => f }), n(388685);
var r = n(54381),
    i = n(704215),
    a = n(907862),
    o = n(243778),
    s = n(2818),
    l = n(921944),
    c = n(388032),
    u = n(235810);
let d = i.z.FOR_LATER_POPOUT_COACHMARK;
function f(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: i, inInbox: f } = s.Z.useExperiment({ location: "ForLaterCoachmarkWeb" }, { autoTrackExposure: !1 }),
        _ = t === (f ? "inbox-button" : "bookmarks-button"),
        p = i && _ ? [d] : [],
        [h, m] = (0, o.US)(p, void 0);
    return h !== d
        ? null
        : (0, r.jsx)(a.J2, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => m(l.L.USER_DISMISS),
              title: c.intl.string(c.t.qPbFK2),
              body: c.intl.string(c.t.URrJq1),
              actions: [
                  {
                      text: c.intl.string(c.t["NX+WJN"]),
                      onClick: () => m(l.L.USER_DISMISS),
                  },
              ],
              graphic: {
                  type: "image",
                  src: u,
              },
          });
}
