n.d(t, {
    F: () => b,
    I: () => v,
}),
    n(953529);
var a = n(54381);
n(473749);
var r = n(481060),
    l = n(734934),
    i = n(158238),
    s = n(695346),
    o = n(70956),
    c = n(51144),
    d = n(174415),
    u = n(246133),
    m = n(981631),
    p = n(388032),
    h = n(54482);
let x = [
        {
            duration: 15 * o.Z.Millis.MINUTE,
            label: () => p.intl.string(p.t["8ot6gv"]),
        },
        {
            duration: o.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.UMWBZr),
        },
        {
            duration: 8 * o.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.EpAXPC),
        },
        {
            duration: o.Z.Millis.DAY,
            label: () => p.intl.string(p.t["755t4q"]),
        },
        {
            duration: 3 * o.Z.Millis.DAY,
            label: () => p.intl.string(p.t["f3/1ch"]),
        },
        {
            duration: void 0,
            label: () => p.intl.string(p.t["46dqJY"]),
        },
    ],
    g = "forever";
function f(e) {
    let { status: t, currentStatus: n, description: l } = e,
        i = t !== m.Skl.ONLINE,
        s = (0, a.jsx)(a.Fragment, {
            children: x.map((e) => {
                let { duration: l, label: i } = e;
                return (0, a.jsx)(
                    r.sNh,
                    {
                        id: "".concat(t, "-").concat(l),
                        label: i(),
                        action: () =>
                            (0, u.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: l,
                            }),
                        dontCloseOnAction: !0,
                    },
                    null != l ? l : g,
                );
            }),
        });
    return (0, a.jsx)(r.sNh, {
        id: t,
        className: h.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, a.jsxs)("div", {
                className: h.statusItem,
                children: [
                    (0, a.jsx)(r.qbd, {
                        status: t,
                        className: h.icon,
                        size: 10,
                        color: n ? "currentColor" : void 0,
                    }),
                    (0, a.jsx)("div", {
                        className: h.status,
                        children: (0, c.u5)(t),
                    }),
                    null != l &&
                        (0, a.jsx)("div", {
                            className: h.description,
                            children: l,
                        }),
                ],
            });
        },
        action: () => {
            (0, u.Z)({
                nextStatus: t,
                prevStatus: n,
            });
        },
        dontCloseOnAction: !0,
        children: i ? s : void 0,
    });
}
function b(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: a } = (0, d.k)(e);
    return "today" === t
        ? p.intl.formatToPlainString(p.t.ZxxHIO, { timeString: a })
        : p.intl.formatToPlainString(p.t["9OFjSe"], {
              dateString: n,
              timeString: a,
          });
}
function v(e) {
    let t = s.Cr.useSetting(),
        n = (0, l.p)(),
        o = i.e.useExperiment({ location: "UserProfileAccountPopout" }).allowQuietMode || n,
        c = s.fv.useSetting(),
        d = e === m.Skl.DND,
        u = (n) => {
            let a = b(t);
            if (e === n && null != a) return a;
            switch (n) {
                case m.Skl.DND:
                    return o ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
                case m.Skl.INVISIBLE:
                    return p.intl.string(p.t.zPc6Mc);
                default:
                    return;
            }
        },
        v = (0, a.jsx)(a.Fragment, {
            children: x.map((t) => {
                let { duration: n, label: i } = t;
                return (0, a.jsx)(
                    r.sNh,
                    {
                        id: "".concat(e, "-").concat(n),
                        label: i(),
                        action: () => {
                            (0, l.oW)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    null != n ? n : g,
                );
            }),
        }),
        j = f({
            status: m.Skl.ONLINE,
            currentStatus: e,
        }),
        _ = f({
            status: m.Skl.IDLE,
            currentStatus: e,
            description: u(m.Skl.IDLE),
        }),
        y = f({
            status: m.Skl.DND,
            currentStatus: e,
            description: u(m.Skl.DND),
        }),
        C = f({
            status: m.Skl.INVISIBLE,
            currentStatus: e,
            description: u(m.Skl.INVISIBLE),
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j,
            (0, a.jsx)(r.Clw, {}, "menu-separator-statuses"),
            _,
            y,
            C,
            o || n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(r.Clw, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              r.sNh,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  className: h.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, a.jsxs)("div", {
                                          className: h.statusItem,
                                          children: [
                                              (0, a.jsx)(r.owu, {
                                                  size: "xxs",
                                                  className: h.icon,
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: h.focusModeTitle,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwK),
                                                      (0, a.jsx)(r.IGR, {
                                                          text: n
                                                              ? p.intl.string(p.t.ApAu9f)
                                                              : d
                                                                ? p.intl.string(p.t.gH3Frd)
                                                                : p.intl.string(p.t["64pl82"]),
                                                          color: n
                                                              ? r.TVs.unsafe_rawColors.BRAND_500.css
                                                              : d
                                                                ? r.TVs.unsafe_rawColors.RED_400.css
                                                                : r.TVs.unsafe_rawColors.PRIMARY_500.css,
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: h.description,
                                                  children:
                                                      n && null != c && "0" !== c
                                                          ? p.intl.formatToPlainString(p.t.BWD8fs, {
                                                                endTime: new Date(Number(c)).toLocaleString(
                                                                    p.intl.currentLocale,
                                                                    {
                                                                        month: "numeric",
                                                                        day: "numeric",
                                                                        hour: "numeric",
                                                                        minute: "2-digit",
                                                                    },
                                                                ),
                                                            })
                                                          : p.intl.string(p.t["Br1q+x"]),
                                              }),
                                          ],
                                      }),
                                  action: () => {
                                      (0, l.oW)(!n);
                                  },
                                  dontCloseOnAction: !0,
                                  children: v,
                              },
                              "quiet-mode",
                          ),
                      ],
                  })
                : null,
        ],
    });
}
