n.d(t, { U: () => g }), n(388685);
var r = n(951288),
    s = n(704215),
    l = n(755721),
    a = n(481060),
    i = n(243778),
    o = n(970731),
    c = n(2818),
    u = n(921944),
    d = n(388032),
    h = n(684642),
    p = n(235810);
let f = s.z.FOR_LATER_POPOUT_COACHMARK,
    _ = () =>
        (0, r.jsx)("div", {
            className: h.imageContainer,
            children: (0, r.jsx)("img", {
                className: h.image,
                src: p,
                alt: "",
            }),
        });
function g(e) {
    let { location: t, children: n, targetElementRef: s } = e,
        { enabled: p, inInbox: g } = c.Z.useExperiment({ location: "ForLaterCoachmarkWeb" }, { autoTrackExposure: !1 }),
        [S, m] = (0, i.US)(p && t === (g ? "inbox-button" : "bookmarks-button") ? [f] : [], void 0);
    return S !== f
        ? n
        : (0, r.jsx)(a.yRy, {
              targetElementRef: s,
              renderPopout: () =>
                  (0, r.jsx)(o.ZP, {
                      className: h.container,
                      asset: (0, r.jsx)(_, {}),
                      header: d.intl.string(d.t.qPbFKy),
                      content: d.intl.string(d.t.URrJq6),
                      buttonCTA: d.intl.string(d.t["NX+WJC"]),
                      buttonProps: {
                          color: l.Tt.WHITE,
                          innerClassName: h.primaryButton,
                      },
                      onClick: () => m(u.L.USER_DISMISS),
                      markAsDismissed: m,
                      caretPosition: o.DF.TOP_RIGHT,
                  }),
              position: "bottom",
              align: "right",
              animation: a.yRy.Animation.TRANSLATE,
              shouldShow: !0,
              children: () => n,
          });
}
