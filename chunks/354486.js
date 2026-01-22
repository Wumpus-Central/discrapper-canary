n.d(t, {
    A: () => A,
    l: () => _,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(311907),
    r = n(554146),
    s = n(342494),
    o = n(379848),
    c = n(827827),
    d = n(253932),
    u = n(186111),
    m = n(461213),
    p = n(927813),
    h = n(159609),
    f = n(49999),
    x = n(818348),
    b = n(985018),
    g = n(64924);
let v = p.A.Millis.HOUR,
    j = p.A.Millis.DAY,
    y = 4 * p.A.Millis.DAY;

function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { shouldShow: t = !0 } = e,
        [n, a] = l.useState(Date.now()),
        s = (0, i.bG)([u.A], () => u.A.hasLayers()),
        c = (0, i.bG)([m.A], () => m.A.getStatus()),
        p = d._6.useSetting(),
        b = (null == p ? void 0 : p.value) != null ? Number(p.value) : null,
        g = d.CY.useSetting(),
        _ = c === x.cl.DND && null != b && n - b > j && "0" === g,
        { enabled: A } = (0, h.k)({
            location: "useDoNotDisturbReminderPopoverDismissibleContent",
            autoTrackExposure: _,
            disable: !_,
        });
    return (
        l.useEffect(() => {
            if (c === x.cl.DND) {
                a(Date.now());
                let e = setInterval(() => a(Date.now()), v);
                return () => clearInterval(e);
            }
        }, [c]),
        (0, o.Wl)(
            A && !s && t ? r.M.DO_NOT_DISTURB_REMINDER_POPOVER : null,
            {
                cooldownDurationMs: y,
                numTimesToRecur: 2,
            },
            f.m.ACCOUNT_NAME_ZONE,
            !0,
        )
    );
}

function A(e) {
    let { targetElementRef: t, onDismiss: n, children: l } = e,
        {
            enabled: i,
            titleText: r,
            bodyText: o,
        } = (0, h.k)({
            location: "popover",
            autoTrackExposure: !1,
        });
    return null != t.current && i
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  l,
                  (0, a.jsx)(s.AM, {
                      targetElementRef: t,
                      title: b.intl.string(r),
                      body: b.intl.string(o),
                      caretConfig: {
                          align: "start",
                      },
                      gradientColor: "purple",
                      actions: [
                          {
                              text: b.intl.string(b.t.fwPurU),
                              onClick: () => {
                                  (0, c.A)({
                                      nextStatus: x.cl.ONLINE,
                                  }),
                                      null == n || n(f.i.PRIMARY);
                              },
                          },
                      ],
                      graphic: {
                          type: "image",
                          src: g,
                      },
                      onRequestClose: () => (null == n ? void 0 : n(f.i.DISMISS)),
                  }),
              ],
          })
        : l;
}
