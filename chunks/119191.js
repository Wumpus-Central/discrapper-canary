i.d(e, { sI: () => y });
var n = i(627968);
i(64700);
var l = i(17928),
    a = i(834730),
    r = i(328153),
    s = i(523527),
    o = i(935671),
    u = i(780964),
    c = i(858897),
    d = i(22802),
    A = i(985018),
    f = i(566935);
function y(t, e) {
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
}
function p(t) {
    let {
            keybind: e,
            message: i,
            highlightAdminWarningIfElevated: y = !1,
            useFlexboxLayout: p = !1,
            keybindClassName: m,
        } = t,
        I = (0, l.bG)([r.Ay], () => {
            let t = r.Ay.getVisibleGame();
            return null != t && t.elevated && r.Ay.canShowAdminWarning;
        }),
        g = (0, o.NP)();
    return I
        ? (0, n.jsx)(a.E, {
              variant: "text-xxs/semibold",
              color: y ? "text-feedback-warning" : "text-muted",
              children: g
                  ? A.intl.format(A.t.MVS9pV, {
                        onSettingsClick: (t) => {
                            t.stopPropagation(), (0, s.A)(void 0, !0), (0, c.openUserSettings)(u.X.OVERLAY_PANEL);
                        },
                    })
                  : A.intl.string(A.t.PIeSHF),
          })
        : p
          ? (0, n.jsx)("div", {
                className: f.FH,
                children: A.intl.format(i, {
                    keybind: e,
                    keybindHook: (t) => (0, n.jsx)(d.G, { keybind: e, className: m }, e.join("+")),
                }),
            })
          : (0, n.jsx)(n.Fragment, {
                children: A.intl.format(i, {
                    keybind: e,
                    keybindHook: (t) => (0, n.jsx)(d.b, { keybind: e }, e.join("+")),
                }),
            });
}
