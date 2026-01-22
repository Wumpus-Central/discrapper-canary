n.d(t, {
    Q: () => g,
    T: () => v,
}),
    n(228524);
var a = n(627968);
n(64700);
var l = n(397927),
    i = n(970931),
    r = n(341967),
    s = n(253932),
    o = n(927813),
    c = n(427262),
    d = n(146901),
    u = n(827827),
    m = n(652215),
    p = n(985018),
    h = n(423648);
let f = [
        {
            duration: 15 * o.A.Millis.MINUTE,
            label: () => p.intl.string(p.t["8ot6gv"]),
        },
        {
            duration: o.A.Millis.HOUR,
            label: () => p.intl.string(p.t.UMWBZr),
        },
        {
            duration: 8 * o.A.Millis.HOUR,
            label: () => p.intl.string(p.t.EpAXPC),
        },
        {
            duration: o.A.Millis.DAY,
            label: () => p.intl.string(p.t["755t4q"]),
        },
        {
            duration: 3 * o.A.Millis.DAY,
            label: () => p.intl.string(p.t["f3/1ch"]),
        },
        {
            duration: void 0,
            label: () => p.intl.string(p.t["46dqJY"]),
        },
    ],
    x = "forever";

function b(e) {
    let { status: t, currentStatus: n, description: i } = e,
        r = t !== m.clD.ONLINE,
        s = (0, a.jsx)(a.Fragment, {
            children: f.map((e) => {
                let { duration: i, label: r } = e;
                return (0, a.jsx)(
                    l.Drp,
                    {
                        id: "".concat(t, "-").concat(i),
                        label: r(),
                        action: () =>
                            (0, u.A)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: i,
                            }),
                        dontCloseOnAction: !0,
                    },
                    null != i ? i : x,
                );
            }),
        });
    return (0, a.jsx)(l.Drp, {
        id: t,
        className: h.pn,
        keepItemStyles: !0,
        hasSubmenu: r,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, a.jsxs)("div", {
                className: h.Oq,
                children: [
                    (0, a.jsx)(l.nW6, {
                        status: t,
                        className: h.Kk,
                        size: 10,
                        color: n ? "currentColor" : void 0,
                    }),
                    (0, a.jsx)("div", {
                        className: h.h5,
                        children: (0, c.MU)(t),
                    }),
                    null != i &&
                        (0, a.jsx)("div", {
                            className: h.h_,
                            children: i,
                        }),
                ],
            });
        },
        action: () => {
            (0, u.A)({
                nextStatus: t,
                prevStatus: n,
            });
        },
        dontCloseOnAction: !0,
        children: r ? s : void 0,
    });
}

function g(e) {
    if (null == e || "0" === e) return;
    let { kind: t, dateString: n, timeString: a } = (0, d._)(e);
    return "today" === t
        ? p.intl.formatToPlainString(p.t.ZxxHIO, {
              timeString: a,
          })
        : p.intl.formatToPlainString(p.t["9OFjSe"], {
              dateString: n,
              timeString: a,
          });
}

function v(e) {
    let t = s.CY.useSetting(),
        n = (0, i.kB)(),
        o =
            r.P.useExperiment({
                location: "UserProfileAccountPopout",
            }).allowQuietMode || n,
        c = s.Jr.useSetting(),
        d = e === m.clD.DND,
        u = (n) => {
            let a = g(t);
            if (e === n && null != a) return a;
            switch (n) {
                case m.clD.DND:
                    return o ? p.intl.string(p.t.day5A6) : p.intl.string(p.t["tq/fMK"]);
                case m.clD.INVISIBLE:
                    return p.intl.string(p.t.zPc6Mc);
                default:
                    return;
            }
        },
        v = (0, a.jsx)(a.Fragment, {
            children: f.map((t) => {
                let { duration: n, label: r } = t;
                return (0, a.jsx)(
                    l.Drp,
                    {
                        id: "".concat(e, "-").concat(n),
                        label: r(),
                        action: () => {
                            (0, i.ES)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    null != n ? n : x,
                );
            }),
        }),
        j = b({
            status: m.clD.ONLINE,
            currentStatus: e,
        }),
        y = b({
            status: m.clD.IDLE,
            currentStatus: e,
            description: u(m.clD.IDLE),
        }),
        _ = b({
            status: m.clD.DND,
            currentStatus: e,
            description: u(m.clD.DND),
        }),
        A = b({
            status: m.clD.INVISIBLE,
            currentStatus: e,
            description: u(m.clD.INVISIBLE),
        });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j,
            (0, a.jsx)(l.bXX, {}, "menu-separator-statuses"),
            y,
            _,
            A,
            o || n
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(l.bXX, {}, "menu-separator-statuses"),
                          (0, a.jsx)(
                              l.Drp,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  className: h.pn,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, a.jsxs)("div", {
                                          className: h.Oq,
                                          children: [
                                              (0, a.jsx)(l.a_I, {
                                                  size: "xxs",
                                                  className: h.Kk,
                                              }),
                                              (0, a.jsxs)("div", {
                                                  className: h.K3,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwK),
                                                      (0, a.jsx)(l.LpS, {
                                                          text: n
                                                              ? p.intl.string(p.t.ApAu9f)
                                                              : d
                                                                ? p.intl.string(p.t.gH3Frd)
                                                                : p.intl.string(p.t["64pl82"]),
                                                          color: n
                                                              ? l.LU0.unsafe_rawColors.BRAND_500.css
                                                              : d
                                                                ? l.LU0.unsafe_rawColors.RED_400.css
                                                                : l.LU0.unsafe_rawColors.PRIMARY_500.css,
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: h.h_,
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
                                      (0, i.ES)(!n);
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
