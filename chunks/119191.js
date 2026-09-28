i.d(e, { sI: () => p });
var n = i(477900);
i(582128);
var l = i(17928),
    a = i(834730),
    r = i(952818),
    s = i(523527),
    o = i(935671),
    u = i(780964),
    c = i(766075),
    d = i(22802),
    f = i(375708),
    A = i(414981);
function p(t, e) {
    let {
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: l,
        keybindClassName: a,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return (0, n.jsx)(y, {
        keybind: t,
        message: e,
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: l,
        keybindClassName: a,
    });
}
function y(t) {
    let {
            keybind: e,
            message: i,
            highlightAdminWarningIfElevated: p = !1,
            useFlexboxLayout: y = !1,
            keybindClassName: m,
        } = t,
        E = (0, l.bG)([r.Ay], () => {
            let t = r.Ay.getVisibleGame();
            return null != t && t.elevated && r.Ay.canShowAdminWarning;
        }),
        g = (0, o.NP)();
    return E
        ? (0, n.jsx)(a.E, {
              variant: "text-xxs/semibold",
              color: p ? "text-feedback-warning" : "text-muted",
              children: g
                  ? f.intl.format(f.t.MVS9pV, {
                        onSettingsClick: (t) => {
                            (t.stopPropagation(), (0, s.A)(void 0, !0), (0, c.openUserSettings)(u.X.OVERLAY_PANEL));
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
