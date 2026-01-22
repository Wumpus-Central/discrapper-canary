n.d(t, {
    bi: () => g,
    sI: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(15285),
    o = n(523527),
    l = n(942405),
    c = n(780964),
    u = n(840065),
    d = n(994322),
    f = n(22802),
    p = n(652215),
    _ = n(985018),
    h = n(352143);

function m(e, t, n) {
    let {
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: a,
        keybindClassName: s,
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    return (0, r.jsx)(E, {
        keybind: e,
        message: t,
        messageWithoutKeybind: n,
        highlightAdminWarningIfElevated: i,
        useFlexboxLayout: a,
        keybindClassName: s,
    });
}
let g = (e, t) =>
    (0, r.jsx)(r.Fragment, {
        children: _.intl.format(t, {
            keybind: e,
            keybindHook: (t, n) =>
                (0, r.jsx)(
                    a.e7I,
                    {
                        shortcut: e,
                        className: h.w,
                        keyClassName: h.bx,
                    },
                    n,
                ),
        }),
    });

function E(e) {
    let {
            keybind: t,
            message: n,
            messageWithoutKeybind: m,
            highlightAdminWarningIfElevated: g = !1,
            useFlexboxLayout: E = !1,
            keybindClassName: b,
        } = e,
        y = (0, d.F)(),
        O = (0, i.bG)([s.Ay], () => {
            let e = s.Ay.getVisibleGame();
            return null != e && e.elevated && s.Ay.canShowAdminWarning;
        }),
        A = (0, l.NP)();
    return O
        ? (0, r.jsx)(a.Text, {
              variant: "text-xxs/semibold",
              color: g ? "text-feedback-warning" : "text-muted",
              children: A
                  ? _.intl.format(_.t.MVS9pV, {
                        onSettingsClick: (e) => {
                            e.stopPropagation(),
                                (0, o.A)(void 0, !0),
                                (0, u.openUserSettings)(c.X.OVERLAY_PANEL, {
                                    section: p.nc_.OVERLAY,
                                });
                        },
                    })
                  : _.intl.string(_.t.PIeSHF),
          })
        : y
          ? E
              ? (0, r.jsx)("div", {
                    className: h.FH,
                    children: _.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) =>
                            (0, r.jsx)(
                                f.G,
                                {
                                    keybind: t,
                                    className: b,
                                },
                                t.join("+"),
                            ),
                    }),
                })
              : (0, r.jsx)(r.Fragment, {
                    children: _.intl.format(n, {
                        keybind: t,
                        keybindHook: (e) =>
                            (0, r.jsx)(
                                f.b,
                                {
                                    keybind: t,
                                },
                                t.join("+"),
                            ),
                    }),
                })
          : m;
}
