n.d(t, {
    F: () => y,
    I: () => O,
}),
    n(953529);
var r = n(951288);
n(647438);
var i = n(722770),
    a = n(481060),
    o = n(440051),
    s = n(734934),
    l = n(158238),
    c = n(695346),
    u = n(70956),
    d = n(51144),
    f = n(246133),
    _ = n(981631),
    p = n(388032),
    h = n(138005);
let m = [
        {
            duration: 15 * u.Z.Millis.MINUTE,
            label: () => p.intl.string(p.t["8ot6go"]),
        },
        {
            duration: u.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.UMWBZm),
        },
        {
            duration: 8 * u.Z.Millis.HOUR,
            label: () => p.intl.string(p.t.EpAXPD),
        },
        {
            duration: u.Z.Millis.DAY,
            label: () => p.intl.string(p.t["755t4u"]),
        },
        {
            duration: 3 * u.Z.Millis.DAY,
            label: () => p.intl.string(p.t["f3/1cn"]),
        },
        {
            duration: void 0,
            label: () => p.intl.string(p.t["46dqJS"]),
        },
    ],
    g = "forever";
function E(e, t) {
    return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function b(e) {
    let { status: t, currentStatus: n, description: i } = e,
        { showTempStatusOptions: s } = o.Y.useExperiment({ location: "UserProfileAccountPopout" }),
        l = s && t !== _.Skl.ONLINE,
        c = (0, r.jsx)(r.Fragment, {
            children: m.map((e) => {
                let { duration: i, label: o } = e;
                return (0, r.jsx)(
                    a.sNh,
                    {
                        id: "".concat(t, "-").concat(i),
                        label: o(),
                        action: () =>
                            (0, f.Z)({
                                nextStatus: t,
                                prevStatus: n,
                                durationMillis: i,
                            }),
                        dontCloseOnAction: !0,
                    },
                    null != i ? i : g,
                );
            }),
        });
    return (0, r.jsx)(a.sNh, {
        id: t,
        className: h.expiringStatusMenuItem,
        keepItemStyles: !0,
        hasSubmenu: l,
        label: (e) => {
            let { isFocused: n } = e;
            return (0, r.jsxs)("div", {
                className: h.statusItem,
                children: [
                    (0, r.jsx)(a.qbd, {
                        status: t,
                        className: h.icon,
                        size: 10,
                        color: n ? "currentColor" : void 0,
                    }),
                    (0, r.jsx)("div", {
                        className: h.status,
                        children: (0, d.u5)(t),
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: h.description,
                            children: i,
                        }),
                ],
            });
        },
        action: () => {
            (0, f.Z)({
                nextStatus: t,
                prevStatus: n,
            });
        },
        dontCloseOnAction: !0,
        children: l ? c : void 0,
    });
}
function y(e) {
    if (null == e || "0" === e) return;
    let t = new Date(Number(e)),
        n = E(t, new Date()),
        r = new Date();
    r.setDate(r.getDate() + 1);
    let i = E(t, r);
    return n
        ? p.intl.formatToPlainString(p.t.ZxxHIC, { timeString: p.intl.data.formatTime(t, { format: "short" }) })
        : p.intl.formatToPlainString(p.t["9OFjSU"], {
              dateString: i
                  ? p.intl.data.formatRelativeTime(1, "day", { numeric: "auto" })
                  : p.intl.data.formatDate(t, { dateStyle: "short" }),
              timeString: p.intl.data.formatTime(t, { format: "short" }),
          });
}
function O(e) {
    let { hasNewStrings: t } = o.Y.useExperiment({ location: "UserProfileAccountPopout" }),
        n = c.Cr.useSetting(),
        u = (0, s.p)(),
        d = l.e.useExperiment({ location: "UserProfileAccountPopout" }).allowQuietMode || u,
        f = c.fv.useSetting(),
        E = e === _.Skl.DND,
        O = (r) => {
            let i = y(n);
            if (e === r && null != i) return i;
            switch (r) {
                case _.Skl.DND:
                    return d ? p.intl.string(p.t.day5Aw) : t ? p.intl.string(p.t["tq/fMD"]) : p.intl.string(p.t.U9Vv19);
                case _.Skl.INVISIBLE:
                    return t ? p.intl.string(p.t.zPc6MT) : p.intl.string(p.t.MqanVF);
                default:
                    return;
            }
        },
        v = (0, r.jsx)(r.Fragment, {
            children: m.map((t) => {
                let { duration: n, label: i } = t;
                return (0, r.jsx)(
                    a.sNh,
                    {
                        id: "".concat(e, "-").concat(n),
                        label: i(),
                        action: () => {
                            (0, s.oW)(!0, n);
                        },
                        dontCloseOnAction: !0,
                    },
                    null != n ? n : g,
                );
            }),
        }),
        I = b({
            status: _.Skl.ONLINE,
            currentStatus: e,
        }),
        T = b({
            status: _.Skl.IDLE,
            currentStatus: e,
            description: O(_.Skl.IDLE),
        }),
        S = b({
            status: _.Skl.DND,
            currentStatus: e,
            description: O(_.Skl.DND),
        }),
        A = b({
            status: _.Skl.INVISIBLE,
            currentStatus: e,
            description: O(_.Skl.INVISIBLE),
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            I,
            (0, r.jsx)(a.Clw, {}, "menu-separator-statuses"),
            T,
            S,
            A,
            d || u
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.Clw, {}, "menu-separator-statuses"),
                          (0, r.jsx)(
                              a.sNh,
                              {
                                  id: "quiet-mode",
                                  "aria-label": "focus mode",
                                  className: h.expiringStatusMenuItem,
                                  keepItemStyles: !0,
                                  hasSubmenu: !0,
                                  label: () =>
                                      (0, r.jsxs)("div", {
                                          className: h.statusItem,
                                          children: [
                                              (0, r.jsx)(a.owu, {
                                                  size: "xxs",
                                                  className: h.icon,
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: h.focusModeTitle,
                                                  children: [
                                                      p.intl.string(p.t.gJRnwM),
                                                      (0, r.jsx)(a.IGR, {
                                                          text: u
                                                              ? p.intl.string(p.t.ApAu9f)
                                                              : E
                                                                ? p.intl.string(p.t.gH3Fra)
                                                                : p.intl.string(p.t["64pl8/"]),
                                                          color: u ? i.Z.BRAND_500 : E ? i.Z.RED_400 : i.Z.PRIMARY_500,
                                                      }),
                                                  ],
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: h.description,
                                                  children:
                                                      u && null != f && "0" !== f
                                                          ? p.intl.formatToPlainString(p.t.BWD8fn, {
                                                                endTime: new Date(Number(f)).toLocaleString(
                                                                    p.intl.currentLocale,
                                                                    {
                                                                        month: "numeric",
                                                                        day: "numeric",
                                                                        hour: "numeric",
                                                                        minute: "2-digit",
                                                                    },
                                                                ),
                                                            })
                                                          : p.intl.string(p.t["Br1q+/"]),
                                              }),
                                          ],
                                      }),
                                  action: () => {
                                      (0, s.oW)(!u);
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
