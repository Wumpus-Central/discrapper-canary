var n = i(477900);
i(582128);
var l = i(855986),
    a = i(834730),
    r = i(644727),
    o = i(523527),
    s = i(526919),
    u = i(780964),
    c = i(766075),
    d = i(22802),
    f = i(792996),
    A = i(414981);
function p(t) {
    let {
            keybind: e,
            message: i,
            highlightAdminWarningIfElevated: p = !1,
            useFlexboxLayout: y = !1,
            keybindClassName: m,
        } = t,
        g = (0, l.bG)([r.Ay], () => {
            let t = r.Ay.getVisibleGame();
            return null != t && t.elevated && r.Ay.canShowAdminWarning;
        }),
        I = (0, s.NP)();
    return g
        ? (0, n.jsx)(a.E, {
              variant: "footnote/semibold",
              color: p ? "text-feedback-warning" : "text-muted",
              children: I
                  ? f.intl.format(f.t.MVS9pV, {
                        onSettingsClick: (t) => {
                            (t.stopPropagation(), (0, o.A)(void 0, !0), (0, c.openUserSettings)(u.X.OVERLAY_PANEL));
                        },
                    })
                  : f.intl.string(f.t.PIeSHF),
          })
        : y
          ? (0, n.jsx)("div", {
                className: A.FH,
                children: f.intl.format(i, {
                    keybind: e,
                    keybindHook: (t) => (0, n.jsx)(d.G, { keybind: e, className: m }, e.join("+")),
                }),
            })
          : (0, n.jsx)(n.Fragment, {
                children: f.intl.format(i, {
                    keybind: e,
                    keybindHook: (t) => (0, n.jsx)(d.b, { keybind: e }, e.join("+")),
                }),
            });
}
i.d(
    e,
    {},
    {
        sI: function (t, e) {
            let {
                highlightAdminWarningIfElevated: i,
                useFlexboxLayout: l,
                keybindClassName: a,
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return (0, n.jsx)(p, {
                keybind: t,
                message: e,
                highlightAdminWarningIfElevated: i,
                useFlexboxLayout: l,
                keybindClassName: a,
            });
        },
    },
);
