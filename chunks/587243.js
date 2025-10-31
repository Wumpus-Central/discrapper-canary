n.d(t, {
    F: () => v,
    I: () => j,
}),
    n(953529);
var a = n(951288);
n(647438);
var r = n(722770),
    l = n(481060),
    i = n(734934),
    o = n(158238),
    s = n(695346),
    c = n(70956),
    d = n(51144),
    u = n(246133),
    m = n(981631),
    p = n(388032),
    h = n(54482);
let x = [
        {
            duration: 15 * c.Z.Millis.MINUTE,
            label: () => p.intl.string(p.t["8ot6gv"]),
        },
        {
            duration: c.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.UMWBZr),
        },
        {
            duration: 8 * c.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.EpAXPC),
        },
        {
            duration: c.Z.Millis.DAY,
            label: () => p.intl.string(p.t["755t4q"]),
        },
        {
            duration: 3 * c.Z.Millis.DAY,
            label: () => p.intl.string(p.t["f3/1ch"]),
        },
        {
            duration: void 0,
            label: () => p.intl.string(p.t["46dqJY"]),
        },
    ],
    g = "forever";
function f(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function b(e) {
    let { status: t, currentStatus: n, description: r } = e,
        i = t !== m.Skl.ONLINE,
        o = (0, a.jsx)(a.Fragment, {
            children: x.map((e) => {
                let { duration: r, label: i } = e;
                return (0, a.jsx)(
                    l.sNh,
                    {
                        id: "".concat(t, "-").concat(r),
                        label: i(),
                        action: () =>
                            (0, u.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: r,
                            }),
                        dontCloseOnAction: !0,
                    },
                    null != r ? r : g,
                );
            }),
        });
    return (0, a.jsx)(l.sNh, {
        id: t,
        className: h.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: i,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, a.jsxs)("div", {
                className: h.statusItem,
                children: [
                    (0, a.jsx)(l.qbd, {
                        status: t,
                        className: h.icon,
                        size: 10,
                        color: n ? "currentColor" : void 0,
                    }),
                    (0, a.jsx)("div", {
                        className: h.status,
                        children: (0, d.u5)(t),
                    }),
                    null != r &&
                        (0, a.jsx)("div", {
                            className: h.description,
                            children: r,
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
        children: i ? o : void 0,
    });
}
function v(e) {
    if (null == e || "0" === e) return;
    let t = new Date(Number(e)),
        n = f(t, new Date()),
        a = new Date();
    a.setDate(a.getDate() + 1);
    let r = f(t, a);
    return n
        ? p.intl.formatToPlainString(p.t.ZxxHIO, { timeString: p.intl.data.formatTime(t, { format: "short" }) })
        : p.intl.formatToPlainString(p.t["9OFjSe"], {
              dateString: r
                  ? p.intl.data.formatRelativeTime(1, "day", { numeric: "auto" })
                  : p.intl.data.formatDate(t, { dateStyle: "short" }),
              timeString: p.intl.data.formatTime(t, { format: "short" }),
          });
}
function j(e) {
    let t = s.Cr.useSetting(),
        n = (0, i.p)(),
        c = o.e.useExperiment({ location: "UserProfileAccountPopout" }).allowQuietMode || n,
        d = s.fv.useSetting(),
        u = e === m.Skl.DND,
        f = (n) => {
            let a = v(t);
            if (e === n && null != a) return a;
            switch (n) {
                case m.Skl.DND:
                    return c ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
                case m.Skl.INVISIBLE:
                    return p.intl.string(p.t.zPc6Mc);
                default:
                    return;
            }
        },
        j = (0, a.jsx)(a.Fragment, {
            children: x.map((t) => {
                let { duration: n, label: r } = t;
                return (0, a.jsx)(
                    l.sNh,
                    {
                        id: "".concat(e, "-").concat(n),
                        label: r(),
                        action: () => {
                            (0, i.oW)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    null != n ? n : g,
                );
            }),
        }),
        _ = b({
            status: m.Skl.ONLINE,
            currentStatus: e,
        }),
        y = b({
            status: m.Skl.IDLE,
            currentStatus: e,
            description: f(m.Skl.IDLE),
        }),
        C = b({
            status: m.Skl.DND,
            currentStatus: e,
            description: f(m.Skl.DND),
        }),
        S = b({
            status: m.Skl.INVISIBLE,
            currentStatus: e,
            description: f(m.Skl.INVISIBLE),
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            _,
            (0, a.jsx)(l.Clw, {}, "menu-separator-statuses"),
            y,
            C,
            S,
            c || n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.Clw, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              l.sNh,
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
                                              (0, a.jsx)(l.owu, {
                                                  size: "xxs",
                                                  className: h.icon,
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: h.focusModeTitle,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwK),
                                                      (0, a.jsx)(l.IGR, {
                                                          text: n
                                                              ? p.intl.string(p.t.ApAu9f)
                                                              : u
                                                                ? p.intl.string(p.t.gH3Frd)
                                                                : p.intl.string(p.t["64pl82"]),
                                                          color: n ? r.Z.BRAND_500 : u ? r.Z.RED_400 : r.Z.PRIMARY_500,
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: h.description,
                                                  children:
                                                      n && null != d && "0" !== d
                                                          ? p.intl.formatToPlainString(p.t.BWD8fs, {
                                                                endTime: new Date(Number(d)).toLocaleString(
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
