n.d(t, {
    F: () => v,
    I: () => j,
}),
    n(953529);
var a = n(54381);
n(473749);
var l = n(722770),
    r = n(481060),
    i = n(734934),
    s = n(158238),
    o = n(695346),
    c = n(70956),
    d = n(51144),
    u = n(174415),
    m = n(246133),
    p = n(981631),
    h = n(388032),
    x = n(138005);
let g = [
        {
            duration: 15 * c.Z.Millis.MINUTE,
            label: () => h.intl.string(h.t["8ot6gv"]),
        },
        {
            duration: c.Z.Millis.HOUR,
            label: () => h.intl.string(h.t.UMWBZr),
        },
        {
            duration: 8 * c.Z.Millis.HOUR,
            label: () => h.intl.string(h.t.EpAXPC),
        },
        {
            duration: c.Z.Millis.DAY,
            label: () => h.intl.string(h.t["755t4q"]),
        },
        {
            duration: 3 * c.Z.Millis.DAY,
            label: () => h.intl.string(h.t["f3/1ch"]),
        },
        {
            duration: void 0,
            label: () => h.intl.string(h.t["46dqJY"]),
        },
    ],
    f = "forever";
function b(e) {
    let { status: t, currentStatus: n, description: l } = e,
        i = t !== p.Skl.ONLINE,
        s = (0, a.jsx)(a.Fragment, {
            children: g.map((e) => {
                let { duration: l, label: i } = e;
                return (0, a.jsx)(
                    r.sNh,
                    {
                        id: "".concat(t, "-").concat(l),
                        label: i(),
                        action: () =>
                            (0, m.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: l,
                            }),
                        dontCloseOnAction: !0,
                    },
                    null != l ? l : f,
                );
            }),
        });
    return (0, a.jsx)(r.sNh, {
        id: t,
        className: x.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, a.jsxs)("div", {
                className: x.statusItem,
                children: [
                    (0, a.jsx)(r.qbd, {
                        status: t,
                        className: x.icon,
                        size: 10,
                        color: n ? "currentColor" : void 0,
                    }),
                    (0, a.jsx)("div", {
                        className: x.status,
                        children: (0, d.u5)(t),
                    }),
                    null != l &&
                        (0, a.jsx)("div", {
                            className: x.description,
                            children: l,
                        }),
                ],
            });
        },
        action: () => {
            (0, m.Z)({
                nextStatus: t,
                prevStatus: n,
            });
        },
        dontCloseOnAction: !0,
        children: i ? s : void 0,
    });
}
function v(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: a } = (0, u.k)(e);
    return "today" === t
        ? h.intl.formatToPlainString(h.t.ZxxHIO, { timeString: a })
        : h.intl.formatToPlainString(h.t["9OFjSe"], {
              dateString: n,
              timeString: a,
          });
}
function j(e) {
    let t = o.Cr.useSetting(),
        n = (0, i.p)(),
        c = s.e.useExperiment({ location: "UserProfileAccountPopout" }).allowQuietMode || n,
        d = o.fv.useSetting(),
        u = e === p.Skl.DND,
        m = (n) => {
            let a = v(t);
            if (e === n && null != a) return a;
            switch (n) {
                case p.Skl.DND:
                    return c ? h.intl.string(h.t.day5A6) : h.intl.string(h.t["tq/fMK"]);
                case p.Skl.INVISIBLE:
                    return h.intl.string(h.t.zPc6Mc);
                default:
                    return;
            }
        },
        j = (0, a.jsx)(a.Fragment, {
            children: g.map((t) => {
                let { duration: n, label: l } = t;
                return (0, a.jsx)(
                    r.sNh,
                    {
                        id: "".concat(e, "-").concat(n),
                        label: l(),
                        action: () => {
                            (0, i.oW)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    null != n ? n : f,
                );
            }),
        }),
        _ = b({
            status: p.Skl.ONLINE,
            currentStatus: e,
        }),
        y = b({
            status: p.Skl.IDLE,
            currentStatus: e,
            description: m(p.Skl.IDLE),
        }),
        C = b({
            status: p.Skl.DND,
            currentStatus: e,
            description: m(p.Skl.DND),
        }),
        S = b({
            status: p.Skl.INVISIBLE,
            currentStatus: e,
            description: m(p.Skl.INVISIBLE),
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            _,
            (0, a.jsx)(r.Clw, {}, "menu-separator-statuses"),
            y,
            C,
            S,
            c || n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(r.Clw, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              r.sNh,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  className: x.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, a.jsxs)("div", {
                                          className: x.statusItem,
                                          children: [
                                              (0, a.jsx)(r.owu, {
                                                  size: "xxs",
                                                  className: x.icon,
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: x.focusModeTitle,
                                                  children: [
                                                      h.intl.string(h.t.gJRnwK),
                                                      (0, a.jsx)(r.IGR, {
                                                          text: n
                                                              ? h.intl.string(h.t.ApAu9f)
                                                              : u
                                                                ? h.intl.string(h.t.gH3Frd)
                                                                : h.intl.string(h.t["64pl82"]),
                                                          color: n ? l.Z.BRAND_500 : u ? l.Z.RED_400 : l.Z.PRIMARY_500,
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: x.description,
                                                  children:
                                                      n && null != d && "0" !== d
                                                          ? h.intl.formatToPlainString(h.t.BWD8fs, {
                                                                endTime: new Date(Number(d)).toLocaleString(
                                                                    h.intl.currentLocale,
                                                                    {
                                                                        month: "numeric",
                                                                        day: "numeric",
                                                                        hour: "numeric",
                                                                        minute: "2-digit",
                                                                    },
                                                                ),
                                                            })
                                                          : h.intl.string(h.t["Br1q+x"]),
                                              }),
                                          ],
                                      }),
                                  action: () => {
                                      (0, i.oW)(!n);
                                  },
                                  dontCloseOnAction: !0,
                                  children: j,
                              },
                              "quiet-mode",
                          ),
                      ],
                  })
                : null,
        ],
    });
}
